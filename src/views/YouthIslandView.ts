import { ItemView, Platform, WorkspaceLeaf, normalizePath } from "obsidian";
import type YouthGrowthIslandPlugin from "../main";
import { ISLAND_UI_HTML } from "../ui/template";
import { bootPrototypeRuntime } from "../runtime/prototypeScript";
import { globalIslandEventBus } from "../core/EventBus";

export const VIEW_TYPE_YOUTH_ISLAND = "youth-holistic-growth-island-view";

export class YouthIslandView extends ItemView {
  private plugin: YouthGrowthIslandPlugin;
  private hooksInstalled = false;

  constructor(leaf: WorkspaceLeaf, plugin: YouthGrowthIslandPlugin) {
    super(leaf);
    this.plugin = plugin;
  }

  public getViewType(): string {
    return VIEW_TYPE_YOUTH_ISLAND;
  }

  public getDisplayText(): string {
    return "终身岛民 · 全人成长系统";
  }

  public getIcon(): string {
    return "compass";
  }

  private resolvePluginAssetUrl(relAssetPath: string): string {
    try {
      const configDir = this.app.vault.configDir || ".obsidian";
      const pluginDir = `${configDir}/plugins/${this.plugin.manifest.id}`;
      const fullPath = normalizePath(`${pluginDir}/${relAssetPath}`);
      return this.app.vault.adapter.getResourcePath(fullPath);
    } catch {
      return relAssetPath;
    }
  }

  public async onOpen(): Promise<void> {
    const { contentEl } = this;
    contentEl.empty();

    // Configure CSS variables for high-res background scenes inside Obsidian (ASCII-safe filenames for Android)
    const plazaUrl = this.resolvePluginAssetUrl("assets/scenes/scene-plaza.png");
    const deskUrl = this.resolvePluginAssetUrl("assets/scenes/scene-desk.png");
    document.documentElement.style.setProperty("--island-scene-plaza", `url("${plazaUrl}")`);
    document.documentElement.style.setProperty("--island-scene-desk", `url("${deskUrl}")`);

    // On Android / iPad / Mobile devices, automatically enable full-screen mode (no simulated desktop iPad bezel)
    if (Platform.isMobile || window.innerWidth <= 1366) {
      document.body.classList.add("is-fullscreen-mode");
    }

    // Mount 1:1 UI DOM
    const rootWrapper = contentEl.createDiv({ cls: "youth-island-plugin-root" });
    rootWrapper.innerHTML = ISLAND_UI_HTML;

    // Install Android/Tablet touch-to-mouse bridge for mindmap canvas & draggable nodes
    this.installTabletTouchBridge(rootWrapper);

    // Boot interactive runtime
    bootPrototypeRuntime();

    // Hydrate from Obsidian Vault files (00_Island_Core ~ 09_Bounties_悬赏公告)
    await this.plugin.vaultStorage.hydrateRuntimeFromVault();

    // Refresh UI after Vault hydration
    const win = window as any;
    if (typeof win.__reinitYouthIslandDom === "function") {
      win.__reinitYouthIslandDom();
    }

    // Apply default startup view
    const defaultView = this.plugin.settings.defaultStartupView || "exec";
    if (typeof win.switchHomeGlobalView === "function") {
      win.switchHomeGlobalView(defaultView);
    }

    // Install closed-loop Vault persistence & EventBus hooks
    this.installRuntimePersistenceHooks();

    // Ensure initial Vault folder tree and files exist
    this.plugin.vaultStorage.scheduleSync(500);
  }

  /**
   * Android 平板触控桥接：将三级脑图画布与节点卡片上的单指拖拽映射为标准鼠标拖拽事件
   */
  private installTabletTouchBridge(rootEl: HTMLElement): void {
    let activeTouchTarget: EventTarget | null = null;
    rootEl.addEventListener(
      "touchstart",
      (e: TouchEvent) => {
        if (e.touches.length !== 1) return;
        const target = e.target as HTMLElement | null;
        if (!target) return;
        // Skip interactive form/button controls and areas that already handle touch natively
        if (
          target.closest(
            "button, input, textarea, select, label, a, #exec-carousel-stage, #island-canvas-stage"
          )
        ) {
          return;
        }
        if (target.closest("#tertiary-canvas-viewport, #tertiary-canvas-world, .tertiary-node-card")) {
          const touch = e.touches[0];
          activeTouchTarget = target;
          target.dispatchEvent(
            new MouseEvent("mousedown", {
              bubbles: true,
              cancelable: true,
              clientX: touch.clientX,
              clientY: touch.clientY,
              button: 0,
            })
          );
        }
      },
      { passive: true }
    );

    rootEl.addEventListener(
      "touchmove",
      (e: TouchEvent) => {
        if (!activeTouchTarget || e.touches.length !== 1) return;
        const touch = e.touches[0];
        window.dispatchEvent(
          new MouseEvent("mousemove", {
            bubbles: true,
            cancelable: true,
            clientX: touch.clientX,
            clientY: touch.clientY,
            button: 0,
          })
        );
      },
      { passive: true }
    );

    const endTouch = (e: TouchEvent) => {
      if (!activeTouchTarget) return;
      const touch = e.changedTouches[0];
      window.dispatchEvent(
        new MouseEvent("mouseup", {
          bubbles: true,
          cancelable: true,
          clientX: touch ? touch.clientX : 0,
          clientY: touch ? touch.clientY : 0,
          button: 0,
        })
      );
      activeTouchTarget = null;
    };

    rootEl.addEventListener("touchend", endTouch, { passive: true });
    rootEl.addEventListener("touchcancel", endTouch, { passive: true });
  }

  private installRuntimePersistenceHooks(): void {
    if (this.hooksInstalled) return;
    this.hooksInstalled = true;

    const win = window as any;
    const hookFn = (fnName: string, eventName: any) => {
      const orig = win[fnName];
      if (typeof orig !== "function" || orig.__vaultHooked) return;
      const wrapped = (...args: any[]) => {
        const res = orig.apply(win, args);
        globalIslandEventBus.emit(eventName, { fnName, args, timestamp: Date.now() });
        this.plugin.vaultStorage.scheduleSync(250);
        return res;
      };
      wrapped.__vaultHooked = true;
      win[fnName] = wrapped;
    };

    // 1. Checkin & Growth Data Core closed loop
    hookFn("triggerGlobalCheckinClosedLoop", "checkin:success");
    hookFn("handleExecPopupMainCheckin", "node:completed");
    hookFn("completeCheckinPageCard", "node:completed");

    // 2. Dual-View Controller
    hookFn("switchHomeGlobalView", "view:switch");
    hookFn("switchMainSection", "view:mode-change");

    // 3. Secondary Gantt & Tertiary Mindmap Planning
    hookFn("confirmAddProject", "project:created");
    hookFn("deriveNodesFromReflectionCard", "edge:redraw");
    hookFn("deriveDrillCardFromReview", "edge:redraw");
    hookFn("confirmAddNewModule", "project:created");

    // 4. Inquiry Pool & Family Pact Violation Adjudication
    hookFn("convertInquiryToPlan", "project:created");
    hookFn("submitPactViolationAdjudication", "pact:violation");

    // 5. Treasury, Daily Journal, Achievements & Bounties
    hookFn("recordLiveTreasuryTransaction", "treasury:recorded");
    hookFn("saveDailyNoteEntry", "journal:saved");
    hookFn("depositGoalToAchievement", "medal:unlocked");
    hookFn("submitRegisterAccidentalAchievement", "medal:unlocked");
    hookFn("completeBountyDemo", "bounty:updated");

    // 6. Island Settings Center (Wallpaper / Avatar / Particles / Immersive)
    hookFn("saveIslandSettings", "settings:updated");
    hookFn("selectPlayerAvatar", "settings:updated");
    hookFn("saveNickname", "settings:updated");
    hookFn("applyWallpaper", "settings:updated");
    hookFn("toggleGlobalBg", "settings:updated");
    hookFn("toggleEnvEffect", "settings:updated");
    hookFn("saveImmersivePref", "settings:updated");
  }

  public async onClose(): Promise<void> {
    await this.plugin.vaultStorage.syncRuntimeToVault();
  }
}
