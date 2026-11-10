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

export default class YouthGrowthIslandPlugin extends Plugin {
  public settings: YouthIslandPluginSettings = DEFAULT_PLUGIN_SETTINGS;
  public vaultStorage!: VaultStorageAdapter;

  public async onload(): Promise<void> {
    await this.loadSettings();

    this.vaultStorage = new VaultStorageAdapter(this.app, () => this.settings);

    // Bind Obsidian Native Canvas Bridge to window
    (window as any).__openProjectInObsidianCanvas = async (projId: string) => {
      await this.vaultStorage.openProjectInCanvas(projId);
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
        if (typeof win.switchMainSection === "function") {
          win.switchMainSection("ws");
        }
      },
    });

    this.addCommand({
      id: "open-youth-island-mindmap",
      name: "打开三级自由脑图全景工作台",
      callback: async () => {
        await this.activateIslandView();
        const win = window as any;
        if (typeof win.switchMainSection === "function") {
          win.switchMainSection("tertiary");
        }
      },
    });

    this.addCommand({
      id: "open-youth-island-canvas",
      name: "在 Obsidian 原生 Canvas 核心画布中全屏打开当前课题 (Hardware Accelerated Canvas)",
      callback: async () => {
        const win = window as any;
        const currentId =
          win.currentTertiaryProjId ||
          (win.GANTT_PROJECTS && win.GANTT_PROJECTS[0]?.id) ||
          "p1";
        await this.vaultStorage.openProjectInCanvas(currentId);
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
        await this.vaultStorage.syncRuntimeToVault();
        new Notice("✅ 终身岛民：已同步本地 Vault 十大目录树与双链 Markdown 档案！");
      },
    });

    // Register Settings Tab
    this.addSettingTab(new YouthIslandSettingTab(this.app, this));

    // Ensure Vault directory structure on layout ready
    this.app.workspace.onLayoutReady(async () => {
      await this.vaultStorage.ensureVaultStructure();
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
      workspace.revealLeaf(leaf);
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

  public async onunload(): Promise<void> {
    await this.vaultStorage.syncRuntimeToVault();
  }
}
