import { App, normalizePath, Notice } from "obsidian";
import { YouthIslandPluginSettings } from "../types/models";
import { globalIslandEventBus } from "../core/EventBus";
import { localDateKey, safeFileStem, validateVaultRoot } from "../core/GrowthMetrics";

const PAVILIONS: Record<string, string> = {
  study: "01_School_校史馆", dojo: "02_Dojo_武道馆",
  cognition: "03_Cognition_思辨馆", cultivation: "04_Classics_修身阁"
};
const SNAPSHOT = "00_Island_Core/app_state_snapshot.json";
const STORES = ["USER_PROFILE_STATE", "DOMAIN_STATE", "GANTT_PROJECTS", "PROJECT_CANVAS_STORE", "PAVILION_META", "WEEK_BOARD_DATA", "TASK_HISTORY_BY_DATE", "TREASURY_STATE", "ACHIEVEMENT_STATE", "NOTE_STATE", "BOUNTY_STATE", "INQUIRY_POOL_STATE"];

export class VaultStorageAdapter {
  private syncTimer: ReturnType<typeof setTimeout> | null = null;
  private queue: Promise<void> = Promise.resolve();
  private hydrated = false;
  private disposed = false;
  private blocked = false;
  private capturing = false;
  constructor(private app: App, private getSettings: () => YouthIslandPluginSettings) {}

  private resolvePath(relative: string): string {
    const root = validateVaultRoot(this.getSettings().vaultRootFolder || "");
    return normalizePath(root ? `${root}/${relative}` : relative);
  }
  private pavilionDir(key: string): string {
    return PAVILIONS[key] || `10_Custom_自定义场馆/${safeFileStem(key)}`;
  }
  private async ensureFolder(path: string): Promise<void> {
    let current = "";
    for (const part of normalizePath(path).split("/")) {
      if (!part) continue;
      current = current ? `${current}/${part}` : part;
      if (!(await this.app.vault.adapter.exists(current))) {
        try { await this.app.vault.createFolder(current); }
        catch (error) { if (!(await this.app.vault.adapter.exists(current))) throw error; }
      }
    }
  }
  private async writeText(relative: string, text: string): Promise<void> {
    const path = this.resolvePath(relative);
    await this.ensureFolder(path.slice(0, path.lastIndexOf("/")));
    const adapter = this.app.vault.adapter;
    if (await adapter.exists(path) && await adapter.read(path) === text) return;
    await adapter.write(path, text);
  }
  private async writeJson(path: string, value: unknown): Promise<void> {
    await this.writeText(path, JSON.stringify(value, null, 2));
  }
  private async readJson(path: string): Promise<any> {
    const full = this.resolvePath(path);
    if (!(await this.app.vault.adapter.exists(full))) return undefined;
    // A parse/read failure is not an empty vault: never overwrite the damaged original.
    return JSON.parse(await this.app.vault.adapter.read(full));
  }

  public async ensureVaultStructure(): Promise<void> {
    const dirs = ["00_Island_Core", ...Object.values(PAVILIONS),
      "01_School_校史馆/01_Exam_Papers", "02_Dojo_武道馆/01_Action_Clips",
      "04_Classics_修身阁/01_Inquiry_Pool", "05_Treasury_藏金屋", "06_Achievements_成就馆",
      "07_Baseline_个人行为规范", "08_Daily_每日随记", "09_Bounties_悬赏公告", "attachments"];
    for (const dir of dirs) await this.ensureFolder(this.resolvePath(dir));
  }

  public async hydrateRuntimeFromVault(): Promise<void> {
    this.hydrated = false;
    this.blocked = false;
    const win = window as any;
    try {
      const primary = await this.readJson("00_Island_Core/domain_state.json");
      if (primary && (primary.schemaVersion !== 3 || !Array.isArray(primary.projects) || !Array.isArray(primary.records))) throw new Error("领域档案结构不正确，已暂停保存");
      let snapshot: any;
      try { snapshot = await this.readJson(SNAPSHOT); }
      catch (error) {
        // Keep both files untouched on corruption, even when the backup can be read.
        if (!primary) {
          this.blocked = true;
          throw new Error("成长数据快照无法读取。已暂停自动写入，请先备份并检查 app_state_snapshot.json 和 .previous.json。");
        }
      }
      if (snapshot && (!Array.isArray(snapshot.GANTT_PROJECTS) || !snapshot.USER_PROFILE_STATE)) {
        if (!primary) throw new Error("成长数据快照结构不完整，已暂停写入。");
        snapshot = undefined;
      }
      const restore = (key: string, value: any) => {
        if (value === undefined) return;
        if (Array.isArray(value) && Array.isArray(win[key])) win[key].splice(0, win[key].length, ...value);
        else if (value && typeof value === "object" && !Array.isArray(value) && win[key] && !Array.isArray(win[key])) {
          for (const old of Object.keys(win[key])) delete win[key][old];
          Object.assign(win[key], value);
        } else win[key] = value; // null bounty and null -> active bounty are both meaningful.
      };
      if (snapshot) {
        if (!Array.isArray(snapshot.GANTT_PROJECTS) || !snapshot.USER_PROFILE_STATE) throw new Error("成长数据快照结构不完整，已暂停写入。");
        for (const key of STORES) if (Object.prototype.hasOwnProperty.call(snapshot, key)) restore(key, snapshot[key]);
        // HTML is a view cache. Structured domain entities are loaded below.
        const deck = document.getElementById("day-card-deck");
        if (deck && typeof snapshot.dayCardDeckHtml === "string") deck.innerHTML = snapshot.dayCardDeckHtml;
        win.currentTertiaryProjId = snapshot.currentTertiaryProjId || null;
        win.__restoredCanvasProjectId = win.currentTertiaryProjId;
      } else {
        const files: Record<string, string> = {
          USER_PROFILE_STATE: "00_Island_Core/user_profile.json", PAVILION_META: "00_Island_Core/island_topology.json",
          TREASURY_STATE: "05_Treasury_藏金屋/ledger.json", ACHIEVEMENT_STATE: "06_Achievements_成就馆/achievements.json",
          NOTE_STATE: "08_Daily_每日随记/journal.json", BOUNTY_STATE: "09_Bounties_悬赏公告/bounties.json",
          INQUIRY_POOL_STATE: "04_Classics_修身阁/01_Inquiry_Pool/inquiries.json"
        };
        for (const [key, path] of Object.entries(files)) {
          const saved = await this.readJson(path);
          if (key === "BOUNTY_STATE" && saved?.schemaVersion === 3 && Array.isArray(saved.items)) {
            restore("BOUNTY_STATE", saved.items.find((b: any) => b.id === saved.activeId) || null);
            win.DOMAIN_STATE = { ...(win.DOMAIN_STATE || {}), bounties: saved.items };
          } else restore(key, saved);
        }
        const keys = new Set([...Object.keys(PAVILIONS), ...Object.keys(win.PAVILION_META || {}).filter(key => key.startsWith("custom-"))]);
        const projects: any[] = [];
        for (const key of keys) {
          const list = await this.readJson(`${this.pavilionDir(key)}/projects.json`);
          if (list !== undefined && !Array.isArray(list)) throw new Error("项目索引格式不正确");
          for (const project of list || []) {
            projects.push(project);
            const data = await this.readJson(`${this.pavilionDir(key)}/02_Projects/nodes_${safeFileStem(project.id)}.json`);
            if (data) win.PROJECT_CANVAS_STORE[project.id] = data;
          }
        }
        restore("GANTT_PROJECTS", projects);
        const settings = await this.readJson("00_Island_Core/island_settings.json");
        if (settings) win.USER_PROFILE_STATE.settings = settings;
        // Fresh vaults start without the prototype's sample inquiry and canvas.
        if (!await this.app.vault.adapter.exists(this.resolvePath(files.USER_PROFILE_STATE))) {
          restore("INQUIRY_POOL_STATE", []);
          win.PROJECT_CANVAS_STORE = {};
          win.currentTertiaryProjId = null;
        }
      }
      if (primary) {
        for (const [key, value] of Object.entries(primary.stores || {})) if (STORES.includes(key) && !["DOMAIN_STATE", "GANTT_PROJECTS", "PROJECT_CANVAS_STORE"].includes(key)) restore(key, value);
        restore("DOMAIN_STATE", primary);
        restore("GANTT_PROJECTS", primary.projects);
        for (const [id, nodes] of Object.entries(primary.nodesByProject || {})) win.PROJECT_CANVAS_STORE[id] = { ...(win.PROJECT_CANVAS_STORE[id] || {}), nodes, edges: primary.edgesByProject?.[id] || win.PROJECT_CANVAS_STORE[id]?.edges || [] };
        win.USER_PROFILE_STATE.checkinRecords = primary.records;
      }
      // Read editable domain projections even when a session snapshot exists.
      // An old projection from an interrupted export cannot roll back a newer aggregate.
      const topology = await this.readJson("00_Island_Core/island_topology.json");
      if (topology && !primary?.stores) restore("PAVILION_META", topology);
      const keys = new Set([...Object.keys(PAVILIONS), ...Object.keys(win.PAVILION_META || {}).filter(key => key.startsWith("custom-")), ...(primary?.projects || []).map((p: any) => p.pavilion)]);
      const loadedProjects: any[] = []; let foundIndex = false;
      for (const key of keys as Set<string>) {
        let list = await this.readJson(`${this.pavilionDir(key)}/projects.json`);
        if (list === undefined) { list = (primary?.projects || []).filter((p: any) => p.pavilion === key); }
        else { foundIndex = true; if (!Array.isArray(list)) throw new Error("项目列表必须是数组"); }
        const indexRevision = await this.readJson(`${this.pavilionDir(key)}/projects.revision.json`);
        if (primary && indexRevision && indexRevision.storageRevision < primary.storageRevision) list = primary.projects.filter((p: any) => p.pavilion === key);
        if (primary && list.some((p: any) => (p.storageRevision || 0) < (primary.storageRevision || 0))) list = primary.projects.filter((p: any) => p.pavilion === key);
        for (const project of list) {
          loadedProjects.push(project);
          const data = await this.readJson(`${this.pavilionDir(key)}/02_Projects/nodes_${safeFileStem(project.id)}.json`);
          if (data && (!primary || (data.storageRevision || 0) >= (primary.storageRevision || 0))) win.PROJECT_CANVAS_STORE[project.id] = data;
        }
      }
      if (foundIndex || primary) restore("GANTT_PROJECTS", loadedProjects);
      for (const [key, path] of Object.entries({ TREASURY_STATE: "05_Treasury_藏金屋/ledger.json", ACHIEVEMENT_STATE: "06_Achievements_成就馆/achievements.json", NOTE_STATE: "08_Daily_每日随记/journal.json", INQUIRY_POOL_STATE: "04_Classics_修身阁/01_Inquiry_Pool/inquiries.json" })) {
        if (primary?.stores && Object.prototype.hasOwnProperty.call(primary.stores, key)) continue;
        const saved = await this.readJson(path); if (saved !== undefined) restore(key, saved);
      }
      this.hydrated = true;
    } catch (error) {
      this.blocked = true;
      throw error;
    }
  }

  public scheduleSync(delay = 300): void {
    if (this.disposed || !this.hydrated || this.blocked || this.capturing) return;
    if (this.syncTimer) clearTimeout(this.syncTimer);
    this.syncTimer = setTimeout(() => {
      this.syncTimer = null;
      void this.syncRuntimeToVault().catch(error => {
        console.error("[YouthIsland] 保存失败", error);
        new Notice("成长数据保存失败，请检查仓库空间与文件权限；当前内容仍保留在界面中。");
      });
    }, delay);
  }

  public async syncRuntimeToVault(): Promise<boolean> {
    if (!this.hydrated || this.blocked) return false; // Commands before opening the view cannot erase saved data.
    if (this.syncTimer) { clearTimeout(this.syncTimer); this.syncTimer = null; }
    const win = window as any;
    if (typeof win.captureDomainLayout === "function") win.captureDomainLayout();
    this.capturing = true;
    try {
      if (typeof win.saveCurrentProjectCanvasSnapshot === "function" && win.currentTertiaryProjId) win.saveCurrentProjectCanvasSnapshot();
    } finally { this.capturing = false; }
    const deck = document.getElementById("day-card-deck");
    if (deck && typeof win.syncFormStateToAttributes === "function") win.syncFormStateToAttributes(deck);
    const state: any = { schemaVersion: 3, updatedAt: new Date().toISOString(), currentTertiaryProjId: win.currentTertiaryProjId || null, dayCardDeckHtml: "" };
    for (const key of STORES) state[key] = win[key] ?? null;
    // Freeze the state before the first await. Serialized saves cannot mix revisions.
    const copy = JSON.parse(JSON.stringify(state));
    const root = this.getSettings().vaultRootFolder;
    const save = this.queue.catch(() => {}).then(async () => {
      if (root !== this.getSettings().vaultRootFolder) throw new Error("保存期间数据目录发生变化，请重新同步");
      await this.persist(copy);
    });
    this.queue = save;
    await save;
    return true;
  }

  private async persist(state: any): Promise<void> {
    await this.ensureVaultStructure();
    const fullSnapshot = this.resolvePath(SNAPSHOT);
    const adapter = this.app.vault.adapter;
    if (state.DOMAIN_STATE) {
      const previousDomain = await this.readJson("00_Island_Core/domain_state.json");
      const revision = Math.max(Date.now(), (previousDomain?.storageRevision || 0) + 1);
      state.DOMAIN_STATE.storageRevision = revision;
      state.DOMAIN_STATE.projects = state.GANTT_PROJECTS;
      state.DOMAIN_STATE.nodesByProject = Object.fromEntries(Object.entries(state.PROJECT_CANVAS_STORE || {}).filter(([, data]: any) => Array.isArray(data.nodes)).map(([id, data]: any) => [id, data.nodes]));
      state.DOMAIN_STATE.edgesByProject = Object.fromEntries(Object.entries(state.PROJECT_CANVAS_STORE || {}).map(([id, data]: any) => [id, data.edges || []]));
      state.DOMAIN_STATE.stores = Object.fromEntries(STORES.filter(key => !["DOMAIN_STATE", "GANTT_PROJECTS", "PROJECT_CANVAS_STORE", "WEEK_BOARD_DATA", "TASK_HISTORY_BY_DATE"].includes(key)).map(key => [key, state[key]]));
      await this.writeJson("00_Island_Core/domain_state.pending.json", state.DOMAIN_STATE);
      if (previousDomain) await this.writeJson("00_Island_Core/domain_state.previous.json", previousDomain);
      await adapter.rename(this.resolvePath("00_Island_Core/domain_state.pending.json"), this.resolvePath("00_Island_Core/domain_state.json"));
    }
    // Commit the primary snapshot first; derived exports can always be regenerated.
    if (await adapter.exists(fullSnapshot)) {
      const previous = await adapter.read(fullSnapshot);
      try {
        JSON.parse(previous);
        await this.writeText("00_Island_Core/app_state_snapshot.previous.json", previous);
      } catch (error) {
        if (!state.DOMAIN_STATE) throw error;
        await this.writeText(`00_Island_Core/app_state_snapshot.corrupt-${Date.now()}.json`, previous);
      }
    }
    const pending = "00_Island_Core/app_state_snapshot.pending.json";
    await this.writeJson(pending, state);
    await adapter.rename(this.resolvePath(pending), fullSnapshot);
    await this.writeJson("00_Island_Core/user_profile.json", state.USER_PROFILE_STATE);
    await this.writeJson("00_Island_Core/island_settings.json", state.USER_PROFILE_STATE.settings || {});
    await this.writeJson("00_Island_Core/island_topology.json", state.PAVILION_META);
    const projects = state.GANTT_PROJECTS || [];
    const keys = new Set([...Object.keys(PAVILIONS), ...projects.map((p: any) => p.pavilion || p.moduleKey || "study"), ...Object.keys(state.PAVILION_META || {}).filter(key => key.startsWith("custom-"))]);
    for (const key of keys as Set<string>) {
      const dir = this.pavilionDir(key);
      const list = projects.filter((p: any) => (p.pavilion || p.moduleKey || "study") === key);
      await this.writeJson(`${dir}/projects.json`, list.map((p: any) => ({ ...p, storageRevision: state.DOMAIN_STATE?.storageRevision || 0 })));
      await this.writeJson(`${dir}/projects.revision.json`, { storageRevision: state.DOMAIN_STATE?.storageRevision || 0 });
      for (const project of list) {
        const data = state.PROJECT_CANVAS_STORE?.[project.id] || { cardsHtml: "", edges: [] };
        await this.writeJson(`${dir}/02_Projects/nodes_${safeFileStem(project.id)}.json`, { ...data, storageRevision: state.DOMAIN_STATE?.storageRevision || 0 });
        const stem = `${safeFileStem(project.title)}--${safeFileStem(project.id)}`;
        if (this.getSettings().autoSyncVaultMarkdown) await this.writeText(`${dir}/02_Projects/${stem}.md`, this.projectMarkdown(project, key, data, state.DOMAIN_STATE));
      }
    }
    await this.writeJson("05_Treasury_藏金屋/ledger.json", state.TREASURY_STATE);
    await this.writeJson("06_Achievements_成就馆/achievements.json", state.ACHIEVEMENT_STATE);
    await this.writeJson("09_Bounties_悬赏公告/bounties.json", { schemaVersion: 3, activeId: state.BOUNTY_STATE?.id || null, items: state.DOMAIN_STATE?.bounties || [] });
    await this.writeJson("04_Classics_修身阁/01_Inquiry_Pool/inquiries.json", state.INQUIRY_POOL_STATE);
    await this.writeJson("08_Daily_每日随记/journal.json", state.NOTE_STATE);
    await this.writeJson("07_Baseline_个人行为规范/family_pact.json", state.DOMAIN_STATE?.family || null);
    if (this.getSettings().autoSyncVaultMarkdown) {
      let entries = [...(state.NOTE_STATE?.historyEntries || [])];
      const note = state.NOTE_STATE;
      const date = note?.dateKey || localDateKey();
      if (note && !entries.some((e: any) => e.date === date) && (note.journalText || note.todayAutoLogs?.length || note.mediaList?.length)) {
        entries.push({ date, text: note.journalText, autoLogs: note.todayAutoLogs, media: note.mediaList, mood: note.currentMood, energy: note.currentEnergy });
      } else if (note) {
        entries = entries.map((entry: any) => entry.date === date ? { ...entry, text: note.journalText ?? entry.text, draft: entry.draft || note.journalText !== entry.text, autoLogs: note.todayAutoLogs, media: note.mediaList, mood: note.currentMood, energy: note.currentEnergy } : entry);
      }
      const written = new Set<string>();
      for (const entry of entries) {
        if (!/^\d{4}-\d{2}-\d{2}$/.test(entry.date) || written.has(entry.date)) continue;
        written.add(entry.date);
        await this.writeText(`08_Daily_每日随记/${entry.date.slice(0, 4)}/${entry.date}.md`, this.dailyMarkdown(entry, state.DOMAIN_STATE));
      }
      const code = "07_Baseline_个人行为规范/personal_code.md";
      // The family's actual constitution must not be replaced by a hardcoded sample.
      if (!(await adapter.exists(this.resolvePath(code)))) await this.writeText(code, "---\ntype: personal-constitution\n---\n\n# 个人行为规范\n\n请在亲子共同讨论后，记录已确立的行为规范。\n");
    }
    globalIslandEventBus.emit("vault:synced", { timestamp: state.updatedAt });
  }

  public async saveAttachment(file: File): Promise<{ path: string; url: string }> {
    if (!/^(image|video|audio)\//.test(file.type)) throw new Error("请选择照片、视频或音频文件");
    if (file.size > 200 * 1024 * 1024) throw new Error("单个附件不能超过 200 MB");
    const path = this.resolvePath(`attachments/${localDateKey()}/${Date.now()}-${Math.random().toString(36).slice(2, 8)}-${safeFileStem(file.name.replace(/\.[^.]+$/, ""))}.${file.name.split(".").pop()?.replace(/[^a-z0-9]/gi, "") || "bin"}`);
    await this.ensureFolder(path.slice(0, path.lastIndexOf("/")));
    await this.app.vault.adapter.writeBinary(path, await file.arrayBuffer());
    return { path, url: this.app.vault.adapter.getResourcePath(path) };
  }
  public attachmentUrl(path: string): string { return this.app.vault.adapter.getResourcePath(path); }
  public async exportDocument(path: string, content: string): Promise<void> {
    await this.writeText(path, content);
    new Notice(`已导出真实档案：${path}`);
  }
  private dailyMarkdown(entry: any, domain?: any): string {
    const logs = (entry.autoLogs || []).map((log: any) => {
      if (typeof log === "string") return log;
      const project = domain?.projects?.find((p: any) => p.id === log.projectId);
      const link = project ? ` [[${this.resolvePath(`${this.pavilionDir(project.pavilion)}/02_Projects/${safeFileStem(project.title)}--${safeFileStem(project.id)}.md`)}|来源项目]]` : "";
      return `${log.time ? `[${log.time}] ` : ""}${log.text || ""}${log.sourceId ? `（来源ID: ${log.sourceId}）` : ""}${link}`;
    });
    const media = entry.media || entry.mediaList || [];
    const text = String(entry.text || entry.reflection || entry.content || "");
    return `---\ntype: daily-journal\ndate: ${entry.date}\nmood: ${JSON.stringify(entry.mood || "focused")}\nenergy_level: ${entry.energy ?? 4}\nauto_logs: ${JSON.stringify(logs)}\nmedia_attachments: ${JSON.stringify(media.map((m: any) => ({ type: m.type, path: m.path || "", desc: m.caption || m.name || "" })))}\ncontent_reflection: ${JSON.stringify(text)}\n---\n\n# ${entry.date} 每日随记\n\n## 客观事实流水\n${logs.map((l: string) => `- ${l}`).join("\n")}\n\n## 心流随笔\n${text}\n\n## 影像物证\n${media.filter((m: any) => m.path).map((m: any) => `![[${m.path}]]`).join("\n")}\n\n[[${this.resolvePath("07_Baseline_个人行为规范/personal_code.md")}|个人行为规范]]\n`;
  }
  private projectMarkdown(project: any, key: string, data: any, domain?: any): string {
    const planning = this.projectPlanningMarkdown(data);
    const records = (domain?.records || []).filter((r: any) => r.projectId === project.id);
    const executions = records.map((record: any) => {
      const actual = [
        ...(record.metrics || []).map((m: any) => `- ${m.name}：目标 ${m.targetValue}；实测 ${m.actual}`),
        ...Object.entries(record.customFieldValues || {}).map(([name, value]) => `- ${record.sourceSnapshot?.cardPayload?.customFieldsSchema?.find((f: any) => f.key === name)?.label || name}：${value}`),
        ...(record.improvementList || []).map((item: any) => `- 后续提升：${item.actionItem}`)
      ].join("\n");
      return `### ${record.title || "执行记录"}\n记录ID: ${record.id}\n源节点ID: ${record.nodeId}\n计划日: ${record.scheduledDate || record.date}\n实际提交日: ${record.date}\n验收: ${record.validated ? "通过" : "历史未核验"}\n实际专注: ${record.focusSeconds || 0}秒\n\n${record.reflection || ""}\n\n${actual}\n\n${(record.media || []).filter((m: any) => m.path).map((m: any) => `![[${m.path}]]`).join("\n")}\n\n[[${this.resolvePath(`08_Daily_每日随记/${record.date.slice(0, 4)}/${record.date}.md`)}|当日随记]]`;
    }).join("\n\n");
    return `---\ntype: growth-project\nproject_id: ${JSON.stringify(project.id)}\npavilion: ${JSON.stringify(key)}\ncategory: ${JSON.stringify(project.category || "")}\nstart_date: ${JSON.stringify(project.startDate || "")}\nend_date: ${JSON.stringify(project.endDate || "")}\n---\n\n# ${project.title}\n\n${project.desc || ""}\n\n## 当前规划\n\n${planning}\n\n## 原始执行记录\n\n${executions || "尚无执行记录"}\n\n[[${this.resolvePath("07_Baseline_个人行为规范/personal_code.md")}|个人行为规范]]\n`;
  }

  private projectPlanningMarkdown(data: any): string {
    if (Array.isArray(data?.nodes)) {
      return data.nodes.map((n: any) => n.nodeType === "text" ? n.cardPayload?.textContent || "" : `### ${n.title || "节点"}\n${n.desc || n.cardPayload?.description || ""}\n${(n.cardPayload?.metrics || []).map((m: any) => `${m.name}: ${m.targetValue}`).join("\n")}`).join("\n\n");
    } else if (data?.cardsHtml && typeof document !== "undefined") {
      const holder = document.createElement("div");
      holder.innerHTML = data.cardsHtml;
      return Array.from(holder.querySelectorAll<HTMLElement>(".tertiary-card")).map(card => {
        const clone = card.cloneNode(true) as HTMLElement;
        clone.querySelectorAll("button, .work-card-connect-handle").forEach(el => el.remove());
        clone.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>("input, textarea").forEach(el => {
          const text = document.createTextNode(el.type === "checkbox" ? ((el as HTMLInputElement).checked ? "[x] " : "[ ] ") : `${el.value}\n`);
          el.replaceWith(text);
        });
        return clone.textContent?.trim() || "";
      }).join("\n\n");
    }
    return "";
  }
  public async dispose(): Promise<void> {
    this.disposed = true;
    if (this.syncTimer) { clearTimeout(this.syncTimer); this.syncTimer = null; }
    await this.queue;
  }
}
