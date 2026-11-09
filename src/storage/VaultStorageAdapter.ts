import { App, normalizePath } from "obsidian";
import { YouthIslandPluginSettings } from "../types/models";
import { globalIslandEventBus } from "../core/EventBus";

const PAVILION_DIR_MAP: Record<string, string> = {
  study: "01_School_校史馆",
  dojo: "02_Dojo_武道馆",
  cognition: "03_Cognition_思辨馆",
  cultivation: "04_Classics_修身阁",
};

export class VaultStorageAdapter {
  private app: App;
  private getSettings: () => YouthIslandPluginSettings;
  private syncTimer: ReturnType<typeof setTimeout> | null = null;

  constructor(app: App, getSettings: () => YouthIslandPluginSettings) {
    this.app = app;
    this.getSettings = getSettings;
  }

  private resolvePath(relPath: string): string {
    const root = (this.getSettings().vaultRootFolder || "").trim().replace(/^\/+|\/+$/g, "");
    return normalizePath(root ? `${root}/${relPath}` : relPath);
  }

  private async ensureFolder(folderPath: string): Promise<void> {
    const norm = normalizePath(folderPath);
    if (!norm || norm === ".") return;
    const parts = norm.split("/");
    let current = "";
    for (const part of parts) {
      current = current ? `${current}/${part}` : part;
      const exists = await this.app.vault.adapter.exists(current);
      if (!exists) {
        try {
          await this.app.vault.createFolder(current);
        } catch {
          // Ignore race condition if folder already exists
        }
      }
    }
  }

  private async writeJson(relPath: string, data: unknown): Promise<void> {
    const fullPath = this.resolvePath(relPath);
    const parentDir = fullPath.includes("/") ? fullPath.slice(0, fullPath.lastIndexOf("/")) : "";
    if (parentDir) await this.ensureFolder(parentDir);
    await this.app.vault.adapter.write(fullPath, JSON.stringify(data, null, 2));
  }

  private async readJson<T>(relPath: string): Promise<T | null> {
    const fullPath = this.resolvePath(relPath);
    try {
      if (!(await this.app.vault.adapter.exists(fullPath))) return null;
      const text = await this.app.vault.adapter.read(fullPath);
      return JSON.parse(text) as T;
    } catch {
      return null;
    }
  }

  private async writeMarkdown(relPath: string, content: string): Promise<void> {
    const fullPath = this.resolvePath(relPath);
    const parentDir = fullPath.includes("/") ? fullPath.slice(0, fullPath.lastIndexOf("/")) : "";
    if (parentDir) await this.ensureFolder(parentDir);
    await this.app.vault.adapter.write(fullPath, content);
  }

  /**
   * PRD 6.1: 初始化本地 Vault 十大标准目录树
   */
  public async ensureVaultStructure(): Promise<void> {
    const dirs = [
      "00_Island_Core",
      "01_School_校史馆",
      "01_School_校史馆/01_Exam_Papers",
      "01_School_校史馆/02_Projects",
      "02_Dojo_武道馆",
      "02_Dojo_武道馆/01_Action_Clips",
      "02_Dojo_武道馆/02_Projects",
      "03_Cognition_思辨馆",
      "03_Cognition_思辨馆/02_Projects",
      "04_Classics_修身阁",
      "04_Classics_修身阁/01_Inquiry_Pool",
      "04_Classics_修身阁/02_Projects",
      "05_Treasury_藏金屋",
      "06_Achievements_成就馆",
      "07_Baseline_个人行为规范",
      "08_Daily_每日随记",
      "09_Bounties_悬赏公告",
    ];
    for (const dir of dirs) {
      await this.ensureFolder(this.resolvePath(dir));
    }
  }

  /**
   * 从本地 Vault 读取已有 JSON 档案并注入运行时状态机
   */
  public async hydrateRuntimeFromVault(): Promise<void> {
    const win = window as any;

    const savedProfile = await this.readJson<Record<string, any>>("00_Island_Core/user_profile.json");
    if (savedProfile && win.USER_PROFILE_STATE) {
      Object.assign(win.USER_PROFILE_STATE, savedProfile);
    }

    const savedSettings = await this.readJson<Record<string, any>>("00_Island_Core/island_settings.json");
    if (savedSettings && win.USER_PROFILE_STATE) {
      win.USER_PROFILE_STATE.settings = Object.assign(
        win.USER_PROFILE_STATE.settings || {},
        savedSettings
      );
      try {
        window.localStorage.setItem("island-user-settings-v1", JSON.stringify(win.USER_PROFILE_STATE.settings));
      } catch {
        // ignore storage quota errors
      }
      if (typeof win.initIslandSettings === "function") {
        win.initIslandSettings();
      }
    }

    const savedTreasury = await this.readJson<Record<string, any>>("05_Treasury_藏金屋/ledger.json");
    if (savedTreasury && win.TREASURY_STATE) {
      Object.assign(win.TREASURY_STATE, savedTreasury);
    }

    const savedAchievements = await this.readJson<Record<string, any>>("06_Achievements_成就馆/achievements.json");
    if (savedAchievements && win.ACHIEVEMENT_STATE) {
      Object.assign(win.ACHIEVEMENT_STATE, savedAchievements);
    }

    const savedBounty = await this.readJson<Record<string, any>>("09_Bounties_悬赏公告/bounties.json");
    if (savedBounty && win.BOUNTY_STATE) {
      Object.assign(win.BOUNTY_STATE, savedBounty);
    }
  }

  /**
   * 防抖触发全量 Vault 同步
   */
  public scheduleSync(delayMs = 300): void {
    if (this.syncTimer) clearTimeout(this.syncTimer);
    this.syncTimer = setTimeout(() => {
      this.syncRuntimeToVault().catch((err) =>
        console.error("[VaultStorageAdapter] Failed to sync runtime to Vault:", err)
      );
    }, delayMs);
  }

  /**
   * PRD 6.1, 6.2, 6.3: 将运行时状态全量写入本地 Vault JSON 与 Markdown 双链网络
   */
  public async syncRuntimeToVault(): Promise<void> {
    await this.ensureVaultStructure();
    const win = window as any;

    // 1. 00_Island_Core
    if (win.USER_PROFILE_STATE) {
      await this.writeJson("00_Island_Core/user_profile.json", win.USER_PROFILE_STATE);
      if (win.USER_PROFILE_STATE.settings) {
        await this.writeJson("00_Island_Core/island_settings.json", win.USER_PROFILE_STATE.settings);
      }
    }
    if (win.PAVILION_META) {
      await this.writeJson("00_Island_Core/island_topology.json", win.PAVILION_META);
    }

    // 2. 01~04 四大规划场馆 projects.json 与 02_Projects/nodes_{id}.json + 双链索引笔记
    const allProjects: any[] = Array.isArray(win.GANTT_PROJECTS) ? win.GANTT_PROJECTS : [];
    const canvasStore: Record<string, any> = win.PROJECT_CANVAS_STORE || {};

    for (const [pavKey, dirName] of Object.entries(PAVILION_DIR_MAP)) {
      const pavProjects = allProjects.filter((p) => (p.pavilion || p.moduleKey || "study") === pavKey);
      await this.writeJson(`${dirName}/projects.json`, pavProjects);

      for (const proj of pavProjects) {
        const projId = proj.id || proj.projectId || "default";
        const canvasData = canvasStore[projId] || canvasStore[pavKey] || { nodes: [], edges: [] };
        await this.writeJson(`${dirName}/02_Projects/nodes_${projId}.json`, canvasData);

        if (this.getSettings().autoSyncVaultMarkdown && proj.title) {
          const safeTitle = String(proj.title).replace(/[\\/:*?"<>|]/g, "_");
          const md = this.buildProjectMarkdown(proj, pavKey, canvasData);
          await this.writeMarkdown(`${dirName}/02_Projects/${safeTitle}.md`, md);
        }
      }
    }

    // 3. 05_Treasury_藏金屋/ledger.json
    if (win.TREASURY_STATE) {
      await this.writeJson("05_Treasury_藏金屋/ledger.json", win.TREASURY_STATE);
    }

    // 4. 06_Achievements_成就馆/achievements.json
    if (win.ACHIEVEMENT_STATE) {
      await this.writeJson("06_Achievements_成就馆/achievements.json", win.ACHIEVEMENT_STATE);
    }

    // 5. 07_Baseline_个人行为规范/personal_code.md
    if (this.getSettings().autoSyncVaultMarkdown) {
      await this.writeMarkdown(
        "07_Baseline_个人行为规范/personal_code.md",
        this.buildPersonalCodeMarkdown(win.USER_PROFILE_STATE)
      );
    }

    // 6. 08_Daily_每日随记/YYYY/YYYY-MM-DD.md (PRD 6.2 YAML Frontmatter + 6.3 双链)
    if (win.NOTE_STATE && this.getSettings().autoSyncVaultMarkdown) {
      const entries: any[] = Array.isArray(win.NOTE_STATE.historyEntries)
        ? win.NOTE_STATE.historyEntries
        : [];
      const todayIso = new Date().toISOString().slice(0, 10);
      const todayEntry = entries[0] || {
        date: todayIso,
        mood: "focused",
        energy: 4,
        autoLogs: [],
        content: "",
      };
      const dateStr = /^\d{4}-\d{2}-\d{2}$/.test(todayEntry.date) ? todayEntry.date : todayIso;
      const year = dateStr.slice(0, 4);
      await this.writeMarkdown(
        `08_Daily_每日随记/${year}/${dateStr}.md`,
        this.buildDailyJournalMarkdown(dateStr, todayEntry, allProjects)
      );
    }

    // 7. 09_Bounties_悬赏公告/bounties.json
    if (win.BOUNTY_STATE) {
      await this.writeJson("09_Bounties_悬赏公告/bounties.json", win.BOUNTY_STATE);
    }

    globalIslandEventBus.emit("vault:synced", { timestamp: new Date().toISOString() });
  }

  /**
   * PRD 6.2 & 6.3: 生成每日随记 Markdown (YAML Frontmatter + 双轨流水 + [[双向链接]])
   */
  private buildDailyJournalMarkdown(dateStr: string, entry: any, projects: any[]): string {
    const autoLogs: string[] = Array.isArray(entry.autoLogs) ? entry.autoLogs : [];
    const mood = entry.moodKey || entry.mood || "focused";
    const energy = Number(entry.energy || entry.energyLevel || 4);
    const reflection = String(entry.reflection || entry.content || entry.text || "").trim();
    const mediaList: any[] = Array.isArray(entry.mediaList) ? entry.mediaList : [];

    const yamlLogs =
      autoLogs.length > 0
        ? autoLogs.map((l) => `  - ${JSON.stringify(String(l))}`).join("\n")
        : `  - "🌅 今日晨曦小岛自律档案已开启"`;

    const yamlMedia =
      mediaList.length > 0
        ? mediaList
            .map(
              (m) =>
                `  - type: ${m.type || "image"}\n    path: ${JSON.stringify(m.url || m.path || "")}\n    desc: ${JSON.stringify(m.title || m.desc || "实训物证")}`
            )
            .join("\n")
        : "  []";

    const projectLinks = projects
      .slice(0, 6)
      .map((p) => `- [[${String(p.title || p.name || "专项攻坚课题").replace(/[\\/:*?"<>|]/g, "_")}]]`)
      .join("\n");

    return `---
type: daily-journal
date: ${dateStr}
mood: "${mood}"
energy_level: ${energy}
auto_logs:
${yamlLogs}
media_attachments:
${yamlMedia}
content_reflection: ${JSON.stringify(reflection || "今日专注笃行，水滴石穿。")}
---

# 📝 ${dateStr} 每日随记（客观真实流水 + 主观心流随笔）

## 一、 ⏱️ 全自动客观事实流水（Upper Track）
${autoLogs.map((log) => `- ${log}`).join("\n") || "- 暂无自动打卡流水"}

## 二、 ✍️ 主观心流随笔与顿悟（Lower Track）
${reflection || "> 今日专注于既定课题攻坚，保持慎独自律。"}

## 三、 🔗 关联课题与双链生命网络（PRD 6.3 双向链接）
${projectLinks || "- [[personal_code|个人行为规范·大学八目法典]]"}
- [[personal_code|个人行为规范·大学八目法典]]
`;
  }

  /**
   * PRD 6.3: 生成规划项目双链 Markdown 档案
   */
  private buildProjectMarkdown(proj: any, pavKey: string, canvasData: any): string {
    const nodes: any[] = Array.isArray(canvasData?.nodes) ? canvasData.nodes : [];
    const nodeLines = nodes
      .map(
        (n) =>
          `- [${n.status === "completed" || n.isCompleted ? "x" : " "}] **${n.title || n.name || n.id}** (\`${n.cardType || n.type || "card-drill"}\`)`
      )
      .join("\n");

    return `---
type: growth-project
project_id: "${proj.id || ""}"
pavilion: "${pavKey}"
category: "${proj.category || ""}"
status: "${proj.status || "in_progress"}"
progress_percent: ${Number(proj.progress ?? proj.progressPercent ?? 0)}
start_date: "${proj.startDate || ""}"
end_date: "${proj.endDate || ""}"
---

# 🎯 ${proj.title || "专项规划课题"}

- **所属场馆**：\`${pavKey}\`
- **起止周期**：${proj.startDate || "2026-10-01"} ~ ${proj.endDate || "2026-11-30"}
- **当前进度**：${Number(proj.progress ?? proj.progressPercent ?? 0)}%
- **行为准绳**：[[personal_code|个人行为规范·大学八目法典]]

## 三级脑图任务拓扑节点
${nodeLines || "- 尚无拆解节点"}
`;
  }

  /**
   * PRD 4.9 & 6.1: 生成《个人行为规范 · 大学八目法典》Markdown
   */
  private buildPersonalCodeMarkdown(profile: any): string {
    const rate = profile?.fulfillmentRate ?? 98;
    const days = profile?.streakDays ?? profile?.continuousDays ?? 18;
    return `---
type: personal-constitution
title: "个人行为规范 · 大学八目生命法典"
continuous_days: ${days}
fulfillment_rate: ${rate}
---

# 📜 个人行为规范 · 《大学》三纲八目立宪法典

> **“物格而后知至，知至而后意诚，意诚而后心正，心正而后身修，身修而后家齐，家齐而后国治，国治而后天下平。”**

## 内圣之基 · 认知与心性修持
1. **【格物 · 穷究事理】**：做题与研习必究底层原理，草稿手稿规范留痕，绝不盲猜敷衍。
2. **【致知 · 启智博学】**：每日晨诵圣贤经典，将先贤智慧与日常困惑相互印证。
3. **【诚意 · 慎独不欺】**：无人监督测验绝不抄袭看答案，重诺守信，不自欺欺人。
4. **【正心 · 定力克浮】**：进入实训前自觉封存娱乐设备，胜不骄败不馁，平心静气复盘。

## 外王之成 · 律己与担当
5. **【修身 · 强健律己】**：每晚 21:30 准时熄灯，晨起利落，每日体能实训风雨无阻。
6. **【齐家 · 孝亲担当】**：出必告、反必面，内务书桌自主整理，主动分担洗碗备餐家务。
7. **【治国 · 遵规守纪】**：严守校规班纪与公共秩序，爱护集体荣誉。
8. **【平天下 · 志存高远】**：厉行节约、友爱互助，立志成为笃行守正之少年君子。
`;
  }
}
