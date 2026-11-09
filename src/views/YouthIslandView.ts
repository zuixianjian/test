import { ItemView, Platform, WorkspaceLeaf, normalizePath, requestUrl } from "obsidian";
import type YouthGrowthIslandPlugin from "../main";
import { ISLAND_UI_HTML } from "../ui/template";
import { bootPrototypeRuntime } from "../runtime/prototypeScript";
import { globalIslandEventBus } from "../core/EventBus";

export const VIEW_TYPE_YOUTH_ISLAND = "youth-holistic-growth-island-view";
const REMOTE_RAW_BASE = "https://fastly.jsdelivr.net/gh/zuixianjian/test@master";

export class YouthIslandView extends ItemView {
  private plugin: YouthGrowthIslandPlugin;
  private hooksInstalled = false;
  private stateChangeHandler: (() => void) | null = null;

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

  private async configureSceneVariables(): Promise<void> {
    try {
      const configDir = this.app.vault.configDir || ".obsidian";
      const pluginDir = `${configDir}/plugins/${this.plugin.manifest.id}`;
      const scenesDir = normalizePath(`${pluginDir}/assets/scenes`);
      const plazaPath = normalizePath(`${scenesDir}/scene-plaza.png`);
      const deskPath = normalizePath(`${scenesDir}/scene-desk.png`);

      const ensureRemoteAsset = async (localPath: string, relUrl: string, fallbackGradient: string, cssVar: string) => {
        if (await this.app.vault.adapter.exists(localPath)) {
          const resourceUrl = this.app.vault.adapter.getResourcePath(localPath);
          document.documentElement.style.setProperty(cssVar, `url("${resourceUrl}")`);
          return;
        }
        // Use remote raw URL with gradient fallback immediately, and cache locally in background
        const remoteUrl = `${REMOTE_RAW_BASE}/${relUrl}`;
        document.documentElement.style.setProperty(cssVar, `url("${remoteUrl}"), ${fallbackGradient}`);
        try {
          if (!(await this.app.vault.adapter.exists(scenesDir))) {
            await this.app.vault.adapter.mkdir(normalizePath(`${pluginDir}/assets`));
            await this.app.vault.adapter.mkdir(scenesDir);
          }
          const resp = await requestUrl({ url: remoteUrl, method: "GET" });
          if (resp.status === 200 && resp.arrayBuffer) {
            await this.app.vault.adapter.writeBinary(localPath, resp.arrayBuffer);
            const cachedUrl = this.app.vault.adapter.getResourcePath(localPath);
            document.documentElement.style.setProperty(cssVar, `url("${cachedUrl}")`);
          }
        } catch {
          // Keep remote URL / gradient fallback if offline
        }
      };

      await ensureRemoteAsset(
        plazaPath,
        "assets/scenes/scene-plaza.png",
        "linear-gradient(135deg, #1b382b 0%, #2f5436 45%, #182c1f 100%)",
        "--island-scene-plaza"
      );
      await ensureRemoteAsset(
        deskPath,
        "assets/scenes/scene-desk.png",
        "radial-gradient(ellipse at 50% 50%, #453221 0%, #251b12 100%)",
        "--island-scene-desk"
      );
    } catch {
      // Fallback to built-in gradients
    }
  }

  public async onOpen(): Promise<void> {
    const { contentEl } = this;
    contentEl.empty();

    // Immediately set fallback scene gradients and load high-res background scenes asynchronously in background (never block UI startup)
    document.documentElement.style.setProperty(
      "--island-scene-plaza",
      "linear-gradient(135deg, #1b382b 0%, #2f5436 45%, #182c1f 100%)"
    );
    document.documentElement.style.setProperty(
      "--island-scene-desk",
      "radial-gradient(ellipse at 50% 50%, #453221 0%, #251b12 100%)"
    );
    void this.configureSceneVariables();

    // Enable 100% full-screen tablet mode inside Obsidian (eliminates prototype switcher bar, iPad frame, and Obsidian chrome)
    document.body.classList.add("is-fullscreen-mode", "youth-island-tablet-fullscreen");

    // Mount 1:1 UI DOM
    const rootWrapper = contentEl.createDiv({
      cls: "youth-island-plugin-root youth-island-obsidian-view-root",
    });
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
    this.installRuntimePersistenceHooks(rootWrapper);

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
        if (
          target.closest(
            "#tertiary-canvas-viewport, #tertiary-canvas-world, .tertiary-node-card, .tertiary-card"
          )
        ) {
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

  private installRuntimePersistenceHooks(rootEl?: HTMLElement): void {
    const win = window as any;

    if (rootEl) {
      const onDomFormChange = () => {
        if (typeof win.syncFormStateToAttributes === "function") {
          win.syncFormStateToAttributes(rootEl);
        }
        if (typeof win.saveCurrentProjectCanvasSnapshot === "function") {
          win.saveCurrentProjectCanvasSnapshot();
        }
        this.plugin.vaultStorage.scheduleSync(400);
      };
      rootEl.addEventListener("change", onDomFormChange, { passive: true });
      rootEl.addEventListener("input", onDomFormChange, { passive: true });
    }

    if (!this.stateChangeHandler) {
      this.stateChangeHandler = () => {
        this.plugin.vaultStorage.scheduleSync(250);
      };
      window.addEventListener("youth-island:state-changed", this.stateChangeHandler);
    }

    if (this.hooksInstalled) return;
    this.hooksInstalled = true;

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
    hookFn("handleNodeCheckin", "node:completed");

    // 2. Dual-View Controller
    hookFn("switchHomeGlobalView", "view:switch");
    hookFn("switchMainSection", "view:mode-change");

    // 3. Secondary Gantt & Tertiary Mindmap Planning
    hookFn("confirmAddProject", "project:created");
    hookFn("toggleProjectArchive", "project:created");
    hookFn("deriveNodesFromReflectionCard", "edge:redraw");
    hookFn("deriveDrillCardFromReview", "edge:redraw");
    hookFn("confirmAddNewModule", "project:created");
    hookFn("createCustomModule", "project:created");
    hookFn("addCustomFieldToCard", "edge:redraw");
    hookFn("handleTertiaryUndo", "edge:redraw");
    hookFn("handleTertiaryRedo", "edge:redraw");
    hookFn("handleTertiaryDeleteNode", "edge:redraw");
    hookFn("startOrFinishConnecting", "edge:redraw");

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
    document.body.classList.remove("youth-island-tablet-fullscreen");
    if (this.stateChangeHandler) {
      window.removeEventListener("youth-island:state-changed", this.stateChangeHandler);
      this.stateChangeHandler = null;
    }
    await this.plugin.vaultStorage.syncRuntimeToVault();
  }
}
