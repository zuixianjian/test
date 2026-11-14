import { App, Notice, PluginSettingTab, Setting } from "obsidian";
import type YouthGrowthIslandPlugin from "../main";
import { validateVaultRoot } from "../core/GrowthMetrics";

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
      text: "配置本地仓库存储路径、双链笔记生成与启动行为。",
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
            try { validateVaultRoot(value); }
            catch (error) { new Notice(String((error as Error).message)); return; }
            this.plugin.settings.vaultRootFolder = value.trim();
            await this.plugin.saveSettings();
          })
      );

    new Setting(containerEl)
      .setName("自动同步生成 Obsidian 双链 Markdown 笔记")
      .setDesc(
        "开启后，将实际随记和项目导出为双链笔记。公约在插件内共同签署后单独导出；已有的个人行为规范不会被后台覆盖。"
      )
      .addToggle((toggle) =>
        toggle.setValue(this.plugin.settings.autoSyncVaultMarkdown).onChange(async (value) => {
          this.plugin.settings.autoSyncVaultMarkdown = value;
          await this.plugin.saveSettings();
        })
      );

    new Setting(containerEl)
      .setName("启动 Obsidian 时打开成长工作台")
      .setDesc("关闭后仍可通过侧栏图标或命令打开。")
      .addToggle(toggle => toggle.setValue(this.plugin.settings.openOnStartup).onChange(async value => {
        this.plugin.settings.openOnStartup = value;
        await this.plugin.saveSettings();
      }));

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
            try {
              await this.plugin.activateIslandView();
              const saved = await this.plugin.vaultStorage.syncRuntimeToVault();
              new Notice(saved ? "✅ 已保存完整成长档案及当前启用的导出文件。" : "成长档案尚未就绪，未写入任何数据。请先检查工作台中的读取提示。");
            } catch (error) {
              new Notice("同步未完成：" + String(error instanceof Error ? error.message : error));
            }
          })
      );
  }
}
