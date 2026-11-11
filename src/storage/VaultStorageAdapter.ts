import { App, normalizePath, Notice, TFile } from "obsidian";
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

    // 0. 读取全量运行时快照（如果存在，则优先还原完整业务状态）
    const appSnapshot = await this.readJson<Record<string, any>>(
      "00_Island_Core/app_state_snapshot.json"
    );
    if (appSnapshot) {
      if (appSnapshot.USER_PROFILE_STATE && win.USER_PROFILE_STATE) {
        Object.assign(win.USER_PROFILE_STATE, appSnapshot.USER_PROFILE_STATE);
      }
      if (Array.isArray(appSnapshot.GANTT_PROJECTS) && Array.isArray(win.GANTT_PROJECTS)) {
        win.GANTT_PROJECTS.splice(0, win.GANTT_PROJECTS.length, ...appSnapshot.GANTT_PROJECTS);
      }
      if (appSnapshot.PROJECT_CANVAS_STORE && win.PROJECT_CANVAS_STORE) {
        Object.assign(win.PROJECT_CANVAS_STORE, appSnapshot.PROJECT_CANVAS_STORE);
      }
      if (appSnapshot.PAVILION_META && win.PAVILION_META) {
        Object.assign(win.PAVILION_META, appSnapshot.PAVILION_META);
      }
      if (Array.isArray(appSnapshot.WEEK_BOARD_DATA) && Array.isArray(win.WEEK_BOARD_DATA)) {
        win.WEEK_BOARD_DATA.splice(0, win.WEEK_BOARD_DATA.length, ...appSnapshot.WEEK_BOARD_DATA);
      }
      if (appSnapshot.TASK_HISTORY_BY_DATE && typeof appSnapshot.TASK_HISTORY_BY_DATE === "object") {
        win.TASK_HISTORY_BY_DATE = appSnapshot.TASK_HISTORY_BY_DATE;
      }
      if (appSnapshot.TREASURY_STATE && win.TREASURY_STATE) {
        Object.assign(win.TREASURY_STATE, appSnapshot.TREASURY_STATE);
      }
      if (appSnapshot.ACHIEVEMENT_STATE && win.ACHIEVEMENT_STATE) {
        Object.assign(win.ACHIEVEMENT_STATE, appSnapshot.ACHIEVEMENT_STATE);
      }
      if (appSnapshot.NOTE_STATE && win.NOTE_STATE) {
        Object.assign(win.NOTE_STATE, appSnapshot.NOTE_STATE);
      }
      if (appSnapshot.BOUNTY_STATE && win.BOUNTY_STATE) {
        Object.assign(win.BOUNTY_STATE, appSnapshot.BOUNTY_STATE);
      }
      if (appSnapshot.INQUIRY_POOL_STATE && win.INQUIRY_POOL_STATE) {
        Object.assign(win.INQUIRY_POOL_STATE, appSnapshot.INQUIRY_POOL_STATE);
      }
      if (typeof appSnapshot.dayCardDeckHtml === "string" && appSnapshot.dayCardDeckHtml.trim().length > 0) {
        const deck = typeof document !== "undefined" ? document.getElementById("day-card-deck") : null;
        if (deck) {
          deck.innerHTML = appSnapshot.dayCardDeckHtml;
        }
      }
    }

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

    // 彻底清除所有历史遗留的假测试数据
    this.purgeLegacyDemoData(win);
  }

  /**
   * 清除开发与原型阶段预置的假数据，确保用户环境纯净
   */
  private purgeLegacyDemoData(win: any): void {
    if (!win) return;

    // 1. 清除假甘特项目
    if (Array.isArray(win.GANTT_PROJECTS)) {
      const demoTitles = [
        "小学数学口算达标与逆向思维训练",
        "少儿跳绳连跳突破与协调性训练",
        "《大学》经典晨读与知行合一践行计划",
        "少儿多元思维与亲子议题思辨训练",
        "少儿汉字规范书写与看图写话攻坚",
      ];
      const filtered = win.GANTT_PROJECTS.filter((p: any) => {
        if (!p) return false;
        if (["p1", "p2", "p3", "p4", "p5"].includes(p.id)) return false;
        if (p.title && demoTitles.some((t) => p.title.includes(t))) return false;
        return true;
      });
      win.GANTT_PROJECTS.splice(0, win.GANTT_PROJECTS.length, ...filtered);
    }

    // 2. 清除假藏金屋台账
    if (win.TREASURY_STATE) {
      if (Array.isArray(win.TREASURY_STATE.ledger)) {
        win.TREASURY_STATE.ledger = win.TREASURY_STATE.ledger.filter((item: any) => {
          if (!item || !item.id) return false;
          return !item.id.startsWith("TX-202610");
        });
      }
      if (win.TREASURY_STATE.totalBalance === 3280 && win.TREASURY_STATE.totalIncome === 4200) {
        win.TREASURY_STATE.totalBalance = 0;
        win.TREASURY_STATE.totalIncome = 0;
        win.TREASURY_STATE.totalExpense = 0;
      }
    }

    // 3. 清除假成就数据
    if (win.ACHIEVEMENT_STATE) {
      if (Array.isArray(win.ACHIEVEMENT_STATE.cultivationItems)) {
        win.ACHIEVEMENT_STATE.cultivationItems = win.ACHIEVEMENT_STATE.cultivationItems.filter(
          (item: any) => item && item.id && !item.id.startsWith("ACH-CULT-202610")
        );
      }
      if (Array.isArray(win.ACHIEVEMENT_STATE.accidentalItems)) {
        win.ACHIEVEMENT_STATE.accidentalItems = win.ACHIEVEMENT_STATE.accidentalItems.filter(
          (item: any) => item && item.id && !item.id.startsWith("ACH-ACC-202610")
        );
      }
    }

    // 4. 清除假悬赏契约
    if (win.BOUNTY_STATE && win.BOUNTY_STATE.id === "BC-202611-MATH95") {
      win.BOUNTY_STATE = null;
    }

    // 5. 清除假周看板待办
    if (Array.isArray(win.WEEK_BOARD_DATA)) {
      win.WEEK_BOARD_DATA.forEach((col: any) => {
        if (Array.isArray(col.tasks)) {
          col.tasks = col.tasks.filter((t: any) => t && t.id && !t.id.startsWith("w-task-"));
        }
      });
    }

    // 6. 清除假 HUD 连胜与履约统计
    if (win.USER_PROFILE_STATE) {
      if (win.USER_PROFILE_STATE.streakDays === 18 && win.USER_PROFILE_STATE.baseFulfillmentRate === 96) {
        win.USER_PROFILE_STATE.streakDays = 0;
        win.USER_PROFILE_STATE.baseFulfillmentRate = 100;
        win.USER_PROFILE_STATE.completedTodayCount = 0;
        win.USER_PROFILE_STATE.totalTodayCount = 0;
      }
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

        const safeTitle = String(proj.title || projId).replace(/[\\/:*?"<>|]/g, "_");
        const canvasJson = this.buildObsidianCanvasJson(proj, pavKey, canvasData);
        await this.writeJson(`${dirName}/02_Projects/${safeTitle}.canvas`, canvasJson);

        if (this.getSettings().autoSyncVaultMarkdown && proj.title) {
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

    // 8. 00_Island_Core/app_state_snapshot.json (全量业务闭环快照：确保平板重启 Obsidian 后卡片状态、脑图拓扑、周看板等 100% 还原)
    const deckEl = typeof document !== "undefined" ? document.getElementById("day-card-deck") : null;
    if (deckEl && typeof win.syncFormStateToAttributes === "function") {
      win.syncFormStateToAttributes(deckEl);
    }
    await this.writeJson("00_Island_Core/app_state_snapshot.json", {
      updatedAt: new Date().toISOString(),
      USER_PROFILE_STATE: win.USER_PROFILE_STATE || null,
      GANTT_PROJECTS: win.GANTT_PROJECTS || null,
      PROJECT_CANVAS_STORE: win.PROJECT_CANVAS_STORE || null,
      PAVILION_META: win.PAVILION_META || null,
      WEEK_BOARD_DATA: win.WEEK_BOARD_DATA || null,
      TASK_HISTORY_BY_DATE: win.TASK_HISTORY_BY_DATE || null,
      TREASURY_STATE: win.TREASURY_STATE || null,
      ACHIEVEMENT_STATE: win.ACHIEVEMENT_STATE || null,
      NOTE_STATE: win.NOTE_STATE || null,
      BOUNTY_STATE: win.BOUNTY_STATE || null,
      INQUIRY_POOL_STATE: win.INQUIRY_POOL_STATE || null,
      dayCardDeckHtml: deckEl ? deckEl.innerHTML : null,
    });

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

  /**
   * PRD 3.2.2 & Obsidian Canvas 核心插件集成:
   * 将三级工作台脑图拓扑数据转换为 Obsidian 原生 .canvas 标准规范 JSON (硬件加速，60/120fps 丝滑拖拽缩放)
   */
  public buildObsidianCanvasJson(
    proj: any,
    pavKey: string,
    canvasData?: any
  ): { nodes: any[]; edges: any[] } {
    const pTitle = proj?.title || "专项规划课题";
    const pDesc = proj?.desc || "稳步推进阶段量化攻坚与日常打卡";
    const projId = proj?.id || "p1";

    const canvasNodes: any[] = [];
    const canvasEdges: any[] = [];

    // 1. 如果 canvasData 包含结构化 nodes 数组
    if (Array.isArray(canvasData?.nodes) && canvasData.nodes.length > 0) {
      canvasData.nodes.forEach((n: any, idx: number) => {
        const type = String(n.cardType || n.type || "drill");
        let color = "2"; // 默认橙色攻坚实训
        if (type.includes("goal")) color = "5"; // 蓝色目标
        else if (type.includes("reflection")) color = "6"; // 紫色复盘
        else if (type.includes("habit")) color = "3"; // 黄色习惯
        else if (type.includes("evidence")) color = "1"; // 红色物证
        else if (type.includes("resource")) color = "4"; // 绿色资源

        const textLines = [
          `### ${n.icon || "🎯"} ${n.title || `节点 ${idx + 1}`}`,
          n.status ? `**状态**：\`${n.status}\`` : "",
          n.desc ? `> ${n.desc}` : "",
          n.checklist && Array.isArray(n.checklist)
            ? n.checklist.map((c: any) => `- [${c.done ? "x" : " "}] ${c.text}`).join("\n")
            : "",
        ].filter(Boolean).join("\n\n");

        canvasNodes.push({
          id: n.id || `node-${idx + 1}`,
          x: typeof n.x === "number" ? n.x : 80 + idx * 380,
          y: typeof n.y === "number" ? n.y : 90,
          width: n.width || 340,
          height: n.height || 220,
          type: "text",
          text: textLines,
          color,
        });
      });
    } else if (typeof canvasData?.cardsHtml === "string" && canvasData.cardsHtml.trim()) {
      // 2. 从 HTML 字符串中提取卡片
      const cardRegex = /<div\s+class="([^"]*tertiary-card[^"]*)"\s+id="([^"]+)"(?:[^>]*data-label="([^"]*)")?[^>]*style="([^"]*)"[^>]*>([\s\S]*?)<\/div>\s*(?=<div\s+class="[^"]*tertiary-card"|$)/gi;
      let match: RegExpExecArray | null;
      let cardIdx = 0;

      while ((match = cardRegex.exec(canvasData.cardsHtml)) !== null) {
        const className = match[1] || "";
        const cardId = match[2];
        const styleStr = match[4] || "";
        const innerHtml = match[5] || "";

        // 解析坐标
        const topMatch = styleStr.match(/top:\s*(\d+)px/);
        const leftMatch = styleStr.match(/left:\s*(\d+)px/);
        const widthMatch = styleStr.match(/width:\s*(\d+)px/);
        const x = leftMatch ? parseInt(leftMatch[1], 10) : 80 + cardIdx * 380;
        const y = topMatch ? parseInt(topMatch[1], 10) : 90;
        const width = widthMatch ? parseInt(widthMatch[1], 10) : 340;

        // 提取标题与色彩
        let color = "2";
        let cardTypeName = "攻坚实训";
        if (className.includes("goal")) {
          color = "5";
          cardTypeName = "目标分解";
        } else if (className.includes("reflection")) {
          color = "6";
          cardTypeName = "评估复盘";
        } else if (className.includes("drill")) {
          color = "2";
          cardTypeName = "攻坚实训";
        } else if (className.includes("resource")) {
          color = "4";
          cardTypeName = "资源支撑";
        } else if (className.includes("evidence")) {
          color = "1";
          cardTypeName = "物证交付";
        }

        const titleMatch = innerHtml.match(/class="[^"]*work-node-title[^"]*"[^>]*>([^<]+)<\/span>/);
        const badgeMatch = innerHtml.match(/class="[^"]*work-node-badge[^"]*"[^>]*>([^<]+)<\/span>/);
        const cardTitle = titleMatch ? titleMatch[1].trim() : `${pTitle} · ${cardTypeName}`;
        const cardBadge = badgeMatch ? badgeMatch[1].trim() : `🎯 ${cardTypeName}`;

        // 提取正文纯文本与复选清单
        const cleanBody = innerHtml
          .replace(/<button[\s\S]*?<\/button>/gi, "")
          .replace(/<div class="work-card-connect-handle"[\s\S]*?<\/div>/gi, "")
          .replace(/<span class="work-node-badge"[\s\S]*?<\/span>/gi, "")
          .replace(/<span class="work-node-title"[\s\S]*?<\/span>/gi, "")
          .replace(/<input\s+type="checkbox"[^>]*>/gi, "- [ ] ")
          .replace(/<input\s+type="text"[^>]*value="([^"]*)"[^>]*>/gi, "$1\n")
          .replace(/<[^>]+>/g, " ")
          .replace(/\s+/g, " ")
          .trim();

        canvasNodes.push({
          id: cardId,
          x,
          y,
          width,
          height: 220,
          type: "text",
          text: `### ${cardBadge}\n**${cardTitle}**\n\n${cleanBody}`,
          color,
        });
        cardIdx++;
      }
    }

    // 如果未提取到任何节点，提供开箱即用的三大基准标准节点
    if (canvasNodes.length === 0) {
      const c1 = `projnode-${projId}-1`;
      const c2 = `projnode-${projId}-2`;
      const c3 = `projnode-${projId}-3`;

      canvasNodes.push(
        {
          id: c1,
          x: 80,
          y: 90,
          width: 340,
          height: 200,
          type: "text",
          text: `### 🎯 目标分解 · 通关目标\n**《${pTitle}》**\n\n> 📋 验收标准：${pDesc}\n\n- [ ] 制定里程碑分解指标\n- [ ] 归档至成就馆`,
          color: "5",
        },
        {
          id: c2,
          x: 480,
          y: 90,
          width: 340,
          height: 200,
          type: "text",
          text: `### ⚡ 攻坚实训 · 每日打卡\n**《${pTitle}》实战突破**\n\n- 预计专注时长：⏱️ 20 分钟\n- 执行要领：保持慎独自律，逐项推导留痕\n- [ ] 今日实训打卡完成`,
          color: "2",
        },
        {
          id: c3,
          x: 880,
          y: 90,
          width: 340,
          height: 200,
          type: "text",
          text: `### 📝 评估复盘 · 改进清单\n**《${pTitle}》周期审视**\n\n> 【复盘指引】记录执行卡点与顿悟经验\n\n- [x] 1. 拆解薄弱动作/卡点进行二次强化\n- [ ] 2. 派生为下一阶段新实训节点`,
          color: "6",
        }
      );

      canvasEdges.push(
        {
          id: `edge-${c1}-${c2}`,
          fromNode: c1,
          fromSide: "right",
          toNode: c2,
          toSide: "left",
          label: "拆解执行",
        },
        {
          id: `edge-${c2}-${c3}`,
          fromNode: c2,
          fromSide: "right",
          toNode: c3,
          toSide: "left",
          label: "复盘纠偏",
        }
      );
    }

    // 转换连线数据
    const rawEdges: any[] = Array.isArray(canvasData?.edges) ? canvasData.edges : [];
    if (rawEdges.length > 0) {
      rawEdges.forEach((e: any, idx: number) => {
        canvasEdges.push({
          id: e.id || `edge-${idx + 1}`,
          fromNode: e.sourceId || e.fromNode,
          fromSide: "right",
          toNode: e.targetId || e.toNode,
          toSide: "left",
          label: e.label || "关联",
        });
      });
    }

    return { nodes: canvasNodes, edges: canvasEdges };
  }

  /**
   * PRD 3.2.2: 在 Obsidian 原生 Canvas 核心插件中打开指定项目画布
   */
  public async openProjectInCanvas(projId: string): Promise<boolean> {
    try {
      const win = window as any;
      const allProjects: any[] = Array.isArray(win.GANTT_PROJECTS) ? win.GANTT_PROJECTS : [];
      let proj = allProjects.find((p) => p.id === projId);
      if (!proj && allProjects.length > 0) {
        proj = allProjects[0];
      }
      const pavKey = proj?.pavilion || proj?.moduleKey || "study";
      const dirName = PAVILION_DIR_MAP[pavKey] || "01_School_校史馆";
      const safeTitle = String(proj?.title || projId || "成长规划项目").replace(/[\\/:*?"<>|]/g, "_");
      const canvasRelPath = `${dirName}/02_Projects/${safeTitle}.canvas`;
      const fullPath = this.resolvePath(canvasRelPath);

      // Check if file exists, if not generate it
      const canvasStore: Record<string, any> = win.PROJECT_CANVAS_STORE || {};
      const canvasData =
        (proj && proj.id && canvasStore[proj.id]) ||
        canvasStore[projId] || { nodes: [], edges: [] };
      const canvasJson = this.buildObsidianCanvasJson(proj, pavKey, canvasData);
      await this.writeJson(canvasRelPath, canvasJson);

      const file = this.app.vault.getAbstractFileByPath(fullPath);
      if (file instanceof TFile && file.extension === "canvas") {
        const leaf = this.app.workspace.getLeaf(true);
        await leaf.openFile(file);
        new Notice(`🎨 已在 Obsidian 原生 Canvas 核心画布中打开《${proj?.title || safeTitle}》！`);
        return true;
      } else {
        new Notice(
          `💡 画布文件已就绪：${canvasRelPath}\n请在 Obsidian 文件列表中点击打开，或确保在【设置 -> 核心插件】中已启用 Canvas 画布功能。`
        );
        return true;
      }
    } catch (err: any) {
      console.error("[VaultStorageAdapter] Failed to open project in Obsidian Canvas:", err);
      new Notice(`⚠️ 打开 Canvas 画布失败: ${err?.message || err}`);
      return false;
    }
  }
}
