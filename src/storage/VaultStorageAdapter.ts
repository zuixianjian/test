import { App, normalizePath, Notice } from "obsidian";
import { YouthIslandPluginSettings } from "../types/models";
import { globalIslandEventBus } from "../core/EventBus";
import { localDateKey, safeFileStem, validateVaultRoot } from "../core/GrowthMetrics";
import { executionMarkdown, familyMarkdown, isNoteDate, planningMarkdown, projectNoteRelativePath } from "./MarkdownExport";

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
  private lastSaveError = "";
  private lastExportError = "";
  private lastSavedAt: string | null = null;
  private lastNotice = "";
  private lastNoticeAt = 0;
  private hydratedRoot: string | null = null;
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
    try {
    const path = this.resolvePath(relative);
    await this.ensureFolder(path.slice(0, path.lastIndexOf("/")));
    const adapter = this.app.vault.adapter;
    if (await adapter.exists(path) && await adapter.read(path) === text) return;
    await adapter.write(path, text);
    } catch (error) { throw new Error(`${relative}：${error instanceof Error ? error.message : error}`); }
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
  private validDomainCommit(value: any): boolean {
    return value?.schemaVersion === 3 && Array.isArray(value.projects) && Array.isArray(value.records)
      && value.nodesByProject && typeof value.nodesByProject === "object" && !Array.isArray(value.nodesByProject)
      && value.stores && typeof value.stores === "object" && !Array.isArray(value.stores);
  }

  public getSaveStatus(): { lastSavedAt: string | null; error: string; exportError: string } {
    return { lastSavedAt: this.lastSavedAt, error: this.lastSaveError, exportError: this.lastExportError };
  }
  private reportSaveProblem(message: string): void {
    if (message !== this.lastNotice || Date.now() - this.lastNoticeAt > 30000) {
      this.lastNotice = message; this.lastNoticeAt = Date.now(); new Notice(message);
    }
  }
  /** A recoverable write-ahead journal. DataAdapter.rename rejects existing destinations. */
  private async commitJson(relative: string, value: unknown): Promise<void> {
    const pending = relative.replace(/\.json$/, ".pending.json"), backup = relative.replace(/\.json$/, ".previous.json");
    const adapter = this.app.vault.adapter, full = this.resolvePath(relative), text = JSON.stringify(value, null, 2);
    let previous: string | undefined;
    if (await adapter.exists(full)) previous = await adapter.read(full);
    try {
      await this.writeText(pending, text);
      if (await adapter.read(this.resolvePath(pending)) !== text) throw new Error("待提交文件校验失败");
      if (previous !== undefined) {
        let valid = false; try { const parsed = JSON.parse(previous); valid = relative !== "00_Island_Core/domain_state.json" || this.validDomainCommit(parsed); } catch { /* Corrupt cache is archived by the caller. */ }
        if (valid) await this.writeText(backup, previous);
      }
      await this.writeText(relative, text);
      if (await adapter.read(full) !== text) throw new Error("主文件写入校验失败");
    } catch (error) {
      // Keep the newest pending payload for retry/restart recovery; restore the
      // old primary after a partial write when the adapter is still writable.
      if (previous !== undefined) { try { await adapter.write(full, previous); } catch { /* Both the journal and backup remain available. */ } }
      throw new Error(`${relative}：${error instanceof Error ? error.message : error}`);
    }
    try { if (typeof adapter.remove === "function") await adapter.remove(this.resolvePath(pending)); } catch { /* Equal-revision journal is harmless. */ }
  }
  private async readDomainCommit(): Promise<any> {
    let primary: any, primaryError: unknown;
    try { primary = await this.readJson("00_Island_Core/domain_state.json"); } catch (error) { primaryError = error; }
    let pending: any;
    try { pending = await this.readJson("00_Island_Core/domain_state.pending.json"); } catch { /* Preserve an unreadable journal; do not use it as a fact source. */ }
    const valid = (value: any) => this.validDomainCommit(value);
    if (primary !== undefined && !valid(primary)) primaryError = new Error("领域档案结构不完整，已暂停保存。请检查 domain_state.json 的项目、节点、记录及 stores。");
    if (valid(pending) && (primaryError || !primary || (pending.storageRevision || 0) > (primary.storageRevision || 0))) {
      if (primaryError) {
        const raw = await this.app.vault.adapter.read(this.resolvePath("00_Island_Core/domain_state.json"));
        await this.writeText(`00_Island_Core/domain_state.corrupt-${Date.now()}.json`, raw);
      }
      await this.commitJson("00_Island_Core/domain_state.json", pending);
      this.lastSavedAt = new Date().toISOString();
      return pending;
    }
    if (primaryError) throw primaryError;
    return primary;
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
    this.hydratedRoot = null;
    const win = window as any;
    try {
      const primary = await this.readDomainCommit();
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
        // Execution cards and their empty state are rebuilt from structured entities.
        // Older snapshots deliberately store an empty deck string; restoring it erases the empty state.
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
      this.hydratedRoot = validateVaultRoot(this.getSettings().vaultRootFolder || "");
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
        this.lastSaveError = error instanceof Error ? error.message : String(error);
        this.reportSaveProblem("成长数据保存失败：" + this.lastSaveError + "。当前界面内容未清空，请重试保存。");
      });
    }, delay);
  }

  public async syncRuntimeToVault(): Promise<boolean> {
    if (!this.hydrated || this.blocked) return false; // Commands before opening the view cannot erase saved data.
    this.assertHydratedRoot();
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
    try { await save; this.lastSaveError = ""; }
    catch (error) { this.lastSaveError = error instanceof Error ? error.message : String(error); throw error; }
    return true;
  }

  private async persist(state: any): Promise<void> {
    await this.ensureVaultStructure();
    const fullSnapshot = this.resolvePath(SNAPSHOT);
    const adapter = this.app.vault.adapter;
    let previousDomain: any;
    if (state.DOMAIN_STATE) {
      previousDomain = await this.readDomainCommit();
      const revision = Math.max(Date.now(), (previousDomain?.storageRevision || 0) + 1);
      state.DOMAIN_STATE.storageRevision = revision;
      state.DOMAIN_STATE.projects = state.GANTT_PROJECTS;
      state.DOMAIN_STATE.nodesByProject = Object.fromEntries(Object.entries(state.PROJECT_CANVAS_STORE || {}).filter(([, data]: any) => Array.isArray(data.nodes)).map(([id, data]: any) => [id, data.nodes]));
      state.DOMAIN_STATE.edgesByProject = Object.fromEntries(Object.entries(state.PROJECT_CANVAS_STORE || {}).map(([id, data]: any) => [id, data.edges || []]));
      state.DOMAIN_STATE.stores = Object.fromEntries(STORES.filter(key => !["DOMAIN_STATE", "GANTT_PROJECTS", "PROJECT_CANVAS_STORE", "WEEK_BOARD_DATA", "TASK_HISTORY_BY_DATE"].includes(key)).map(key => [key, state[key]]));
      await this.commitJson("00_Island_Core/domain_state.json", state.DOMAIN_STATE);
      this.lastSavedAt = new Date().toISOString();
    }
    try {
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
    await this.commitJson(SNAPSHOT, state);
    if (!this.lastSavedAt) this.lastSavedAt = new Date().toISOString();
    await this.writeJson("00_Island_Core/user_profile.json", state.USER_PROFILE_STATE);
    await this.writeJson("00_Island_Core/island_settings.json", state.USER_PROFILE_STATE.settings || {});
    await this.writeJson("00_Island_Core/island_topology.json", state.PAVILION_META);
    const projects = state.GANTT_PROJECTS || [];
    let previousNotes: any;
    try { previousNotes = await this.readJson("00_Island_Core/notes_index.json"); } catch { /* Rebuild a derived index from the committed entities. */ }
    const projectNotes: any[] = [];
    const keys = new Set([...Object.keys(PAVILIONS), ...projects.map((p: any) => p.pavilion || p.moduleKey || "study"), ...Object.keys(state.PAVILION_META || {}).filter(key => key.startsWith("custom-"))]);
    for (const key of keys as Set<string>) {
      const dir = this.pavilionDir(key);
      const list = projects.filter((p: any) => (p.pavilion || p.moduleKey || "study") === key);
      await this.writeJson(`${dir}/projects.json`, list.map((p: any) => ({ ...p, storageRevision: state.DOMAIN_STATE?.storageRevision || 0 })));
      await this.writeJson(`${dir}/projects.revision.json`, { storageRevision: state.DOMAIN_STATE?.storageRevision || 0 });
      for (const project of list) {
        const data = state.PROJECT_CANVAS_STORE?.[project.id] || { cardsHtml: "", edges: [] };
        await this.writeJson(`${dir}/02_Projects/nodes_${safeFileStem(project.id)}.json`, { ...data, storageRevision: state.DOMAIN_STATE?.storageRevision || 0 });
        if (this.getSettings().autoSyncVaultMarkdown) {
          const oldProject = previousDomain?.projects?.find((item: any) => item.id === project.id);
          const path = this.projectNotePath(project), previous = previousNotes?.projects?.find((item: any) => item.projectId === project.id) || (oldProject ? { path: this.projectNotePath(oldProject) } : undefined);
          const aliases = [...new Set([...(previous?.aliases || []), ...(previous?.path && previous.path !== path ? [previous.path] : [])])].filter(alias => alias !== path);
          await this.writeText(projectNoteRelativePath(project, dir), this.projectMarkdown(project, key, data, state.DOMAIN_STATE));
          for (const alias of aliases) await this.updateHistoricalNoteLink(String(alias), path, project.id);
          projectNotes.push({ projectId: project.id, path, aliases, nodeIds: (data.nodes || []).map((node: any) => node.id) });
        }
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
      for (const record of state.DOMAIN_STATE?.records || []) {
        if (isNoteDate(record.date) && !entries.some((entry: any) => entry.date === record.date)) entries.push({ date: record.date, text: "", autoLogs: [], media: [] });
      }
      for (const entry of entries) {
        if (!/^\d{4}-\d{2}-\d{2}$/.test(entry.date) || written.has(entry.date)) continue;
        written.add(entry.date);
        await this.writeText(`08_Daily_每日随记/${entry.date.slice(0, 4)}/${entry.date}.md`, this.dailyMarkdown(entry, state.DOMAIN_STATE));
      }
      const code = "07_Baseline_个人行为规范/personal_code.md";
      // The family's actual constitution must not be replaced by a hardcoded sample.
      if (!(await adapter.exists(this.resolvePath(code)))) await this.writeText(code, "---\ntype: personal-constitution\n---\n\n# 个人行为规范\n\n请在亲子共同讨论后，记录已确立的行为规范。\n");
      await this.writeText("07_Baseline_个人行为规范/family_pact.md", familyMarkdown(state.DOMAIN_STATE?.family));
      const journals = [...written].map(date => ({ date, path: this.resolvePath(`08_Daily_每日随记/${date.slice(0, 4)}/${date}.md`), recordIds: (state.DOMAIN_STATE?.records || []).filter((record: any) => record.date === date).map((record: any) => record.id) }));
      const retiredProjects = [...(previousNotes?.retiredProjects || []), ...(previousNotes?.projects || [])].filter((item: any, index: number, all: any[]) => !projects.some((project: any) => project.id === item.projectId) && all.findIndex(other => other.projectId === item.projectId) === index);
      await this.writeJson("00_Island_Core/notes_index.json", {
        storageRevision: state.DOMAIN_STATE?.storageRevision || 0,
        projects: projectNotes, retiredProjects, journals,
        family: { version: state.DOMAIN_STATE?.family?.version || 0, path: this.resolvePath("07_Baseline_个人行为规范/family_pact.md") }
      });
      await this.writeText("00_Island_Core/notes_index.md", "# 成长笔记索引\n\n从稳定来源ID查询当前笔记。Markdown是导出投影，领域事实保存在domain_state.json。\n\n## 项目\n" + projectNotes.map(item => `- [[${item.path}]]；项目ID: ${item.projectId}`).join("\n") + "\n\n## 每日随记\n" + journals.map(item => `- [[${item.path}|${item.date}]]；记录ID: ${item.recordIds.join("、") || "无执行记录"}`).join("\n") + "\n\n## 保留的历史项目导出\n" + retiredProjects.map((item: any) => `- [[${item.path}]]；项目ID: ${item.projectId}（当前规划中已移除，历史文件保留）`).join("\n") + `\n\n[[${this.resolvePath("07_Baseline_个人行为规范/family_pact.md")}|当前共同签署公约]]\n`);
    }
    globalIslandEventBus.emit("vault:synced", { timestamp: state.updatedAt });
    this.lastExportError = "";
    } catch (error) {
      if (!state.DOMAIN_STATE) throw error;
      this.lastExportError = error instanceof Error ? error.message : String(error);
      console.error("[YouthIsland] 主档案已保存，导出未完成", error);
      this.reportSaveProblem("成长数据已保存，但笔记或缓存导出未完成：" + this.lastExportError + "。下次保存会重试导出。");
    }
  }

  public async saveAttachment(file: File): Promise<{ path: string; url: string }> {
    this.assertHydratedRoot();
    if (!/^(image|video|audio)\//.test(file.type)) throw new Error("请选择照片、视频或音频文件");
    if (file.size > 200 * 1024 * 1024) throw new Error("单个附件不能超过 200 MB");
    const path = this.resolvePath(`attachments/${localDateKey()}/${Date.now()}-${Math.random().toString(36).slice(2, 8)}-${safeFileStem(file.name.replace(/\.[^.]+$/, ""))}.${file.name.split(".").pop()?.replace(/[^a-z0-9]/gi, "") || "bin"}`);
    await this.ensureFolder(path.slice(0, path.lastIndexOf("/")));
    await this.app.vault.adapter.writeBinary(path, await file.arrayBuffer());
    return { path, url: this.app.vault.adapter.getResourcePath(path) };
  }
  public attachmentUrl(path: string): string { return this.app.vault.adapter.getResourcePath(path); }
  public projectNotePath(project: any): string { return this.resolvePath(projectNoteRelativePath(project, this.pavilionDir(project.pavilion))); }
  private async updateHistoricalNoteLink(path: string, current: string, id: string): Promise<void> {
    const normalized = normalizePath(path), prefix = this.resolvePath("");
    if (!normalized.endsWith(`--${safeFileStem(id)}.md`) || !normalized.includes("/02_Projects/") || normalized.split("/").includes("..") || (prefix && !normalized.startsWith(prefix.replace(/\/$/, "") + "/"))) return;
    const adapter = this.app.vault.adapter;
    if (!await adapter.exists(normalized)) return;
    const content = await adapter.read(normalized);
    if (!content.includes(`project_id: ${JSON.stringify(id)}\n`) || !content.includes("type: growth-project")) return;
    const marker = "<!-- island-current-project-note -->", end = "<!-- /island-current-project-note -->";
    const startAt = content.indexOf(marker), endAt = content.indexOf(end, startAt);
    const base = startAt >= 0 && endAt >= startAt ? content.slice(0, startAt) + content.slice(endAt + end.length) : content;
    await adapter.write(normalized, base.trimEnd() + `\n\n${marker}\n这是保留的历史导出。[[${current}|查看此项目当前笔记]]\n${end}\n`);
  }
  public documentPath(relative: string): string { return this.resolvePath(relative); }
  private assertHydratedRoot(): void {
    if (this.hydratedRoot !== null && this.hydratedRoot !== validateVaultRoot(this.getSettings().vaultRootFolder || "")) throw new Error("数据目录已改变，请重新打开工作台读取目标目录。当前数据不会写入新目录。");
  }
  public async exportDocument(path: string, content: string): Promise<void> {
    this.assertHydratedRoot();
    if (!await this.syncRuntimeToVault()) throw new Error("成长档案尚未成功读取，未导出文件。");
    if (this.lastExportError) throw new Error(`关联笔记导出尚未完成：${this.lastExportError}`);
    await this.writeText(path, content);
    new Notice(`已导出真实档案：${path}`);
  }
  private dailyMarkdown(entry: any, domain?: any): string {
    const logs = (entry.autoLogs || []).map((log: any) => {
      if (typeof log === "string") return log;
      const project = domain?.projects?.find((p: any) => p.id === log.projectId);
      const link = project ? ` [[${this.projectNotePath(project)}|来源项目]]` : "";
      return `${log.time ? `[${log.time}] ` : ""}${log.text || ""}${log.sourceId ? `（来源ID: ${log.sourceId}）` : ""}${link}`;
    });
    const media = entry.media || entry.mediaList || [];
    const text = String(entry.text || entry.reflection || entry.content || "");
    const records = (domain?.records || []).filter((record: any) => record.date === entry.date);
    return `---\ntype: daily-journal\ngenerated_by: youth-holistic-growth-island\ndate: ${entry.date}\ndraft: ${entry.draft !== false}\nmood: ${JSON.stringify(entry.mood || null)}\nenergy_level: ${entry.energy ?? "null"}\nauto_logs: ${JSON.stringify(logs)}\nmedia_attachments: ${JSON.stringify(media.map((m: any) => ({ id: m.id, type: m.type, path: m.path || "", desc: m.caption || m.name || "" })))}\ncontent_reflection: ${JSON.stringify(text)}\n---\n\n# ${entry.date} 每日随记\n\n## 客观事实流水\n${logs.map((l: string) => `- ${l}`).join("\n") || "尚无自动事件"}\n\n## 心流随笔\n${text}\n\n## 当日原始执行记录\n${records.map((record: any) => { const project = domain?.projects?.find((p: any) => p.id === record.projectId); return executionMarkdown(record) + (project ? `\n\n[[${this.projectNotePath(project)}|来源项目]]` : ""); }).join("\n\n") || "尚无执行记录"}\n\n## 附件原件\n${media.filter((m: any) => m.path).map((m: any) => `![[${m.path}]]`).join("\n")}\n\n[[${this.resolvePath("07_Baseline_个人行为规范/family_pact.md")}|当前共同签署公约]]\n[[${this.resolvePath("07_Baseline_个人行为规范/personal_code.md")}|个人行为规范笔记]]\n`;
  }
  private projectMarkdown(project: any, key: string, data: any, domain?: any): string {
    const records = (domain?.records || []).filter((record: any) => record.projectId === project.id);
    const executions = records.map((record: any) => executionMarkdown(record) + (isNoteDate(record.date) ? `\n\n[[${this.resolvePath(`08_Daily_每日随记/${record.date.slice(0, 4)}/${record.date}.md`)}|当日随记]]` : "")).join("\n\n");
    return `---\ntype: growth-project\ngenerated_by: youth-holistic-growth-island\nproject_id: ${JSON.stringify(project.id)}\npavilion: ${JSON.stringify(key)}\ncategory: ${JSON.stringify(project.category || "")}\nstart_date: ${JSON.stringify(project.startDate || "")}\nend_date: ${JSON.stringify(project.endDate || "")}\narchived: ${!!project.isArchived}\nsource_inquiry_id: ${JSON.stringify(project.sourceInquiryId || null)}\nsource_violation_id: ${JSON.stringify(project.sourceViolationId || null)}\n---\n\n# ${project.title}\n\n${project.desc || ""}\n\n## 当前规划\n\n${planningMarkdown(data)}\n\n## 原始执行记录\n\n${executions || "尚无执行记录"}\n\n[[${this.resolvePath("07_Baseline_个人行为规范/family_pact.md")}|当前共同签署公约]]\n[[${this.resolvePath("07_Baseline_个人行为规范/personal_code.md")}|个人行为规范笔记]]\n\n本文件是领域数据的笔记投影。规划请在插件或受支持的同版本JSON中维护；执行事实以记录及其标准快照为准。\n`;
  }
  public async dispose(): Promise<void> {
    this.disposed = true;
    if (this.syncTimer) { clearTimeout(this.syncTimer); this.syncTimer = null; }
    await this.queue.catch(() => {});
  }
  public async waitForPendingSaves(): Promise<void> { await this.queue; }
}
