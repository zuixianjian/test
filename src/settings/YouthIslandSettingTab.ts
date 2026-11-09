import { App, Notice, PluginSettingTab, Setting } from "obsidian";
import type YouthGrowthIslandPlugin from "../main";

export class YouthIslandSettingTab extends PluginSettingTab {
  private plugin: YouthGrowthIslandPlugin;

  constructor(app: App, plugin: YouthGrowthIslandPlugin) {
    super(app, plugin);
    this.plugin = plugin;
  }

  public display(): void {
    const { containerEl } = this;
    containerEl.empty();

    containerEl.createEl("h2", {
      text: "🏝️ 终身岛民 · 青少儿全人成长与自主进化系统",
    });
    containerEl.createEl("p", {
      text: "配置本地 Obsidian Vault 知识库存储路径、双链笔记自动生成与默认启动视口（严格遵循 PRD 第 6 章规范）。",
    });

    new Setting(containerEl)
      .setName("Vault 数据存储根目录")
      .setDesc(
        "留空则直接在当前 Obsidian 仓库根目录下创建 00_Island_Core ~ 09_Bounties_悬赏公告 十大标准目录；也可指定子文件夹（例如：Youth_Growth_Vault）。"
      )
      .addText((text) =>
        text
          .setPlaceholder("留空默认仓库根目录")
          .setValue(this.plugin.settings.vaultRootFolder)
          .onChange(async (value) => {
            this.plugin.settings.vaultRootFolder = value.trim();
            await this.plugin.saveSettings();
          })
      );

    new Setting(containerEl)
      .setName("自动同步生成 Obsidian 双链 Markdown 笔记")
      .setDesc(
        "开启后，每次打卡、记账、保存每日随记或立项时，自动同步更新 08_Daily_每日随记/YYYY/YYYY-MM-DD.md、07_Baseline_个人行为规范/personal_code.md 及各场馆项目双链笔记。"
      )
      .addToggle((toggle) =>
        toggle.setValue(this.plugin.settings.autoSyncVaultMarkdown).onChange(async (value) => {
          this.plugin.settings.autoSyncVaultMarkdown = value;
          await this.plugin.saveSettings();
        })
      );

    new Setting(containerEl)
      .setName("默认启动主视口")
      .setDesc("打开终身岛民工作台时默认呈现的主视口（双主视口物理互斥模型）。")
      .addDropdown((dropdown) =>
        dropdown
          .addOption("exec", "⚡ 首页执行中心视图 (Task Execution Center)")
          .addOption("plan", "🧭 海岛规划沙盘视图 (Island Canvas Sandbox)")
          .setValue(this.plugin.settings.defaultStartupView)
          .onChange(async (value: "exec" | "plan") => {
            this.plugin.settings.defaultStartupView = value;
            await this.plugin.saveSettings();
          })
      );

    new Setting(containerEl)
      .setName("立即初始化并同步本地 Vault 知识库")
      .setDesc(
        "在当前 Obsidian 仓库中创建 00_Island_Core ~ 09_Bounties_悬赏公告 十大标准目录，并将当前全量状态写入 JSON 与双链 Markdown。"
      )
      .addButton((btn) =>
        btn
          .setButtonText("🔄 立即同步至本地 Vault")
          .setCta()
          .onClick(async () => {
            await this.plugin.vaultStorage.syncRuntimeToVault();
            new Notice("✅ 已同步 00_Island_Core ~ 09_Bounties_悬赏公告 全量数据与双链 Markdown！");
          })
      );
  }
}
