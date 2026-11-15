import { Notice, Plugin, WorkspaceLeaf } from "obsidian";
import {
  DEFAULT_PLUGIN_SETTINGS,
  YouthIslandPluginSettings,
} from "./types/models";
import { VaultStorageAdapter } from "./storage/VaultStorageAdapter";
import {
  VIEW_TYPE_YOUTH_ISLAND,
  YouthIslandView,
} from "./views/YouthIslandView";
import { YouthIslandSettingTab } from "./settings/YouthIslandSettingTab";
import { validateVaultRoot } from "./core/GrowthMetrics";

export default class YouthGrowthIslandPlugin extends Plugin {
  public settings: YouthIslandPluginSettings = DEFAULT_PLUGIN_SETTINGS;
  public vaultStorage!: VaultStorageAdapter;

  public async onload(): Promise<void> {
    await this.loadSettings();

    this.vaultStorage = new VaultStorageAdapter(this.app, () => this.settings);
    (window as any).__saveIslandAttachment = (file: File) => this.vaultStorage.saveAttachment(file);
    (window as any).__islandAttachmentUrl = (path: string) => this.vaultStorage.attachmentUrl(path);
    (window as any).__exportIslandDocument = (path: string, content: string) => this.vaultStorage.exportDocument(path, content);
    (window as any).__islandProjectNotePath = (project: any) => this.settings.autoSyncVaultMarkdown ? this.vaultStorage.projectNotePath(project) : "";
    (window as any).__islandDocumentPath = (path: string) => this.vaultStorage.documentPath(path);
    this.register(() => {
      delete (window as any).__saveIslandAttachment;
      delete (window as any).__islandAttachmentUrl;
      delete (window as any).__exportIslandDocument;
      delete (window as any).__islandProjectNotePath;
      delete (window as any).__islandDocumentPath;
      delete (window as any).__toggleObsidianSidebar;
    });

    // Bind Obsidian Native Sidebar Split Toggle Bridge to window
    (window as any).__toggleObsidianSidebar = (side: "left" | "right") => {
      try {
        const ws = this.app.workspace as any;
        if (side === "left") {
          const split = ws.leftSplit;
          if (split) {
            if (typeof split.toggle === "function") {
              split.toggle();
            } else if (typeof split.collapse === "function" && typeof split.expand === "function") {
              if (split.collapsed) split.expand();
              else split.collapse();
            }
          } else if (typeof ws.toggleLeftSidebar === "function") {
            ws.toggleLeftSidebar();
          }
        } else if (side === "right") {
          const split = ws.rightSplit;
          if (split) {
            if (typeof split.toggle === "function") {
              split.toggle();
            } else if (typeof split.collapse === "function" && typeof split.expand === "function") {
              if (split.collapsed) split.expand();
              else split.collapse();
            }
          } else if (typeof ws.toggleRightSidebar === "function") {
            ws.toggleRightSidebar();
          }
        }
      } catch (err) {
        console.error("Failed to toggle Obsidian sidebar:", err);
      }
    };

    // Register main custom ItemView
    this.registerView(
      VIEW_TYPE_YOUTH_ISLAND,
      (leaf: WorkspaceLeaf) => new YouthIslandView(leaf, this)
    );

    // Add Left Ribbon Icon
    this.addRibbonIcon(
      "compass",
      "打开终身岛民 · 青少儿全人成长与自主进化系统",
      async () => {
        await this.activateIslandView();
      }
    );

    // Register Obsidian Commands
    this.addCommand({
      id: "open-youth-island-exec",
      name: "打开首页执行中心视图 (Task Execution Center)",
      callback: async () => {
        await this.activateIslandView("exec");
      },
    });

    this.addCommand({
      id: "open-youth-island-plan",
      name: "打开海岛规划沙盘视图 (Island Canvas Sandbox)",
      callback: async () => {
        await this.activateIslandView("plan");
      },
    });

    this.addCommand({
      id: "open-youth-island-gantt",
      name: "打开二级项目排程甘特工作台",
      callback: async () => {
        await this.activateIslandView();
        const win = window as any;
        const project = win.getDomainState?.().projects.find((p: any) => p.id === win.currentTertiaryProjId);
        win.enterSecondaryWorkspace?.(project?.pavilion || "study", "gantt");
      },
    });

    this.addCommand({
      id: "open-youth-island-mindmap",
      name: "打开三级自由脑图全景工作台",
      callback: async () => {
        await this.activateIslandView();
        const win = window as any;
        const project = win.getDomainState?.().projects.find((p: any) => p.id === win.currentTertiaryProjId);
        if (project) win.enterTertiaryWorkspace?.(project.id);
        else { win.enterSecondaryWorkspace?.("study", "gantt"); new Notice("请先选择项目，再打开其脑图。"); }
      },
    });

    this.addCommand({
      id: "open-youth-island-daily-note",
      name: "打开每日随记（客观真实流水 + 主观心流随笔）",
      callback: async () => {
        await this.activateIslandView();
        const win = window as any;
        if (typeof win.enterSecondaryWorkspace === "function") {
          win.enterSecondaryWorkspace("note", "specialized");
        }
      },
    });

    this.addCommand({
      id: "sync-youth-island-vault",
      name: "立即同步本地 Vault 知识库目录树与双链 Markdown",
      callback: async () => {
        try {
          await this.activateIslandView();
          const saved = await this.vaultStorage.syncRuntimeToVault(), status = this.vaultStorage.getSaveStatus();
          new Notice(!saved ? "成长档案尚未成功读取，未写入数据。" : status.exportError ? `成长数据已保存，笔记导出待重试：${status.exportError}` : "成长档案及当前启用的笔记导出已同步。");
        } catch (error) { new Notice(`同步未完成：${error instanceof Error ? error.message : error}`); }
      },
    });

    // Register Settings Tab
    this.addSettingTab(new YouthIslandSettingTab(this.app, this));

    // Ensure Vault directory structure on layout ready
    this.app.workspace.onLayoutReady(async () => {
      await this.vaultStorage.ensureVaultStructure();
      if (this.settings.openOnStartup) await this.activateIslandView();
    });
  }

  public async activateIslandView(mode?: "exec" | "plan"): Promise<void> {
    const { workspace } = this.app;
    let leaf: WorkspaceLeaf | null = null;
    const leaves = workspace.getLeavesOfType(VIEW_TYPE_YOUTH_ISLAND);

    if (leaves.length > 0) {
      leaf = leaves[0];
    } else {
      leaf = workspace.getLeaf(false);
      await leaf.setViewState({
        type: VIEW_TYPE_YOUTH_ISLAND,
        active: true,
      });
    }

    if (leaf) {
      await workspace.revealLeaf(leaf);
    }

    if (mode) {
      const win = window as any;
      if (typeof win.switchMainSection === "function") {
        win.switchMainSection("island");
      }
      if (typeof win.switchHomeGlobalView === "function") {
        win.switchHomeGlobalView(mode);
      }
    }
  }

  public async loadSettings(): Promise<void> {
    this.settings = Object.assign(
      {},
      DEFAULT_PLUGIN_SETTINGS,
      await this.loadData()
    );
  }

  public async saveSettings(): Promise<void> {
    await this.saveData(this.settings);
  }

  public async updateStorageRoot(value: string): Promise<boolean> {
    const next = validateVaultRoot(value.trim()), previous = this.settings.vaultRootFolder;
    if (next === previous) return true;
    if (this.app.workspace.getLeavesOfType(VIEW_TYPE_YOUTH_ISLAND).length) {
      new Notice("请先关闭成长工作台，让当前档案保存完成，再应用新目录。重新打开后将读取目标目录的数据。");
      return false;
    }
    await this.vaultStorage.waitForPendingSaves();
    this.settings.vaultRootFolder = next;
    try { await this.saveSettings(); }
    catch (error) { this.settings.vaultRootFolder = previous; throw error; }
    new Notice("数据目录已应用。重新打开工作台后读取目标目录；原目录文件保留。");
    return true;
  }

  public async onunload(): Promise<void> {
    try { await (window as any).flushMediaBeforeClose?.(); await this.vaultStorage.syncRuntimeToVault(); }
    catch (error) { console.error("[YouthIsland] 关闭前保存未完成", error); }
    finally {
      this.app.workspace.detachLeavesOfType(VIEW_TYPE_YOUTH_ISLAND);
      await this.vaultStorage.dispose();
    }
  }
}
