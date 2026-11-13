import fs from "fs";
import path from "path";
import { scopeCss } from "./scope_css.mjs";

const ROOT = process.cwd();
const PROTO_PATH = path.join(ROOT, "high_fidelity_ui_preview.html");

const raw = fs.readFileSync(PROTO_PATH, "utf8").replace(/\r\n/g, "\n");
const lines = raw.split("\n");

// Locate exact markers
const styleStart = lines.findIndex((l) => /^\s*<style>/i.test(l));
const styleEnd = lines.findIndex((l) => /^\s*<\/style>/i.test(l));
const bodyStart = lines.findIndex((l) => /^\s*<body>/i.test(l));
const scriptStart = lines.findIndex((l) => /^\s*<script>/i.test(l));
const scriptEnd = lines.findIndex((l) => /^\s*<\/script>/i.test(l));
const bodyEnd = lines.findIndex((l) => /^\s*<\/body>/i.test(l));

if (
  styleStart < 0 ||
  styleEnd < styleStart ||
  bodyStart < styleEnd ||
  scriptStart < bodyStart ||
  scriptEnd < scriptStart ||
  bodyEnd < scriptEnd
) {
  console.error("Failed to locate HTML structure markers:", {
    styleStart,
    styleEnd,
    bodyStart,
    scriptStart,
    scriptEnd,
    bodyEnd,
  });
  process.exit(1);
}

// 1. Extract CSS -> styles.css
let cssContent = lines.slice(styleStart + 1, styleEnd).join("\n");

// Rewrite hardcoded relative paths in CSS to use CSS custom variables with fallback to assets/
cssContent = cssContent
  .replace(
    /url\(['"]?终身岛民-完整无限制版\/a-my-island\/scenes\/20_广场中心\.png['"]?\),\s*url\(['"]?a-my-island\/scenes\/20_广场中心\.png['"]?\)/g,
    "var(--island-scene-plaza, url('assets/scenes/scene-plaza.png'))"
  )
  .replace(
    /url\(['"]?终身岛民-完整无限制版\/a-my-island\/scenes\/工作台_男_背景图\.png['"]?\),\s*url\(['"]?a-my-island\/scenes\/工作台_男_背景图\.png['"]?\)/g,
    "var(--island-scene-desk, url('assets/scenes/scene-desk.png'))"
  );

const obsidianHostCss = `/* ==========================================================================
   终身岛民 · 青少儿全人成长与自主进化系统 (Obsidian Plugin Stylesheet)
   Generated from high_fidelity_ui_preview.html (1:1 Visual Specification + Tablet Fullscreen Adaptation)
   ========================================================================== */

.workspace-leaf-content[data-type="youth-holistic-growth-island-view"] .view-content {
  padding: 0 !important;
  margin: 0 !important;
  overflow: hidden !important;
  width: 100% !important;
  height: 100% !important;
  position: relative !important;
  background: #0d1512;
}

.youth-island-plugin-root,
.youth-island-obsidian-view-root {
  width: 100% !important;
  height: 100% !important;
  position: relative !important;
  overflow: hidden !important;
  display: flex !important;
  flex-direction: column !important;
  user-select: none;
  font-family: "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", -apple-system, BlinkMacSystemFont, sans-serif;
}

/* Strip design prototype showcase header and simulated iPad bezel chrome inside Obsidian */
.youth-island-plugin-root .global-header,
.youth-island-plugin-root .ipad-home-indicator,
.youth-island-obsidian-view-root .global-header,
.youth-island-obsidian-view-root .ipad-home-indicator {
  display: none !important;
}

/* Ensure checkin stage view fills viewport in Obsidian */
.youth-island-plugin-root #gallery-stage-view,
.youth-island-obsidian-view-root #gallery-stage-view {
  width: 100% !important;
  height: 100% !important;
  position: absolute !important;
  inset: 0 !important;
  z-index: 1000 !important;
  overflow-y: auto !important;
  overflow-x: hidden !important;
  background: #182018 !important;
  padding: 16px !important;
  box-sizing: border-box !important;
}

.youth-island-plugin-root #main-viewport,
.youth-island-plugin-root .ipad-shell-wrapper,
.youth-island-plugin-root .ipad-shell-wrapper.in-frame-mode,
.youth-island-plugin-root .ipad-screen-container,
.youth-island-plugin-root #island-stage-view,
.youth-island-plugin-root .stage-canvas-container,
.youth-island-obsidian-view-root #main-viewport,
.youth-island-obsidian-view-root .ipad-shell-wrapper,
.youth-island-obsidian-view-root .ipad-shell-wrapper.in-frame-mode,
.youth-island-obsidian-view-root .ipad-screen-container,
.youth-island-obsidian-view-root #island-stage-view,
.youth-island-obsidian-view-root .stage-canvas-container {
  width: 100% !important;
  height: 100% !important;
  max-width: none !important;
  max-height: 100% !important;
  border: none !important;
  border-radius: 0 !important;
  margin: 0 !important;
  padding: 0 !important;
  box-shadow: none !important;
  top: 0 !important;
  left: 0 !important;
  box-sizing: border-box !important;
  overflow: hidden !important;
}

/* True 100% Full-Screen Immersive Mode on Android Tablet / iPad in Obsidian */
body.youth-island-tablet-fullscreen .workspace-leaf-content[data-type="youth-holistic-growth-island-view"] {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  bottom: 0 !important;
  width: 100% !important;
  height: 100% !important;
  max-width: 100% !important;
  max-height: 100% !important;
  z-index: 9000 !important;
  margin: 0 !important;
  padding: 0 !important;
  background: #1c251d !important;
  box-sizing: border-box !important;
  overflow: hidden !important;
}

body.youth-island-tablet-fullscreen .workspace-leaf-content[data-type="youth-holistic-growth-island-view"] > .view-header {
  display: none !important;
}

body.youth-island-tablet-fullscreen .workspace-leaf-content[data-type="youth-holistic-growth-island-view"] > .view-content {
  padding: 0 !important;
  margin: 0 !important;
  width: 100% !important;
  height: 100% !important;
  max-height: 100% !important;
  overflow: hidden !important;
  box-sizing: border-box !important;
}

body.youth-island-tablet-fullscreen .workspace-ribbon,
body.youth-island-tablet-fullscreen .mobile-navbar,
body.youth-island-tablet-fullscreen .status-bar,
body.youth-island-tablet-fullscreen .workspace-tab-header-container,
body.youth-island-tablet-fullscreen .titlebar {
  display: none !important;
}

/* Obsidian Mobile Theme Reset & Isolation (Prevents theme bleeding and button deformation) */
.youth-island-plugin-root button,
.youth-island-obsidian-view-root button {
  font-family: inherit;
  cursor: pointer;
  box-sizing: border-box;
}

/* 1. 小岛底部发射台：正方形按键固定尺寸、外层背景框随按钮多少自适应宽度并在屏幕底部水平居中 */
.youth-island-plugin-root .a-my-island-plugin-launcher,
.youth-island-obsidian-view-root .a-my-island-plugin-launcher {
  left: 0 !important;
  right: 0 !important;
  margin-left: auto !important;
  margin-right: auto !important;
  width: fit-content !important;
  max-width: min(calc(100% - 28px), 100%) !important;
  display: flex !important;
  justify-content: center !important;
  bottom: max(48px, calc(34px + env(safe-area-inset-bottom, 0px))) !important;
}

.youth-island-plugin-root .a-my-island-plugin-launcher .a-my-island-plugin-launcher-button,
.youth-island-obsidian-view-root .a-my-island-plugin-launcher .a-my-island-plugin-launcher-button {
  display: grid !important;
  box-sizing: border-box !important;
  place-items: center !important;
  align-content: center !important;
  flex: 0 0 58px !important;
  width: 58px !important;
  min-width: 58px !important;
  max-width: 58px !important;
  height: 58px !important;
  min-height: 58px !important;
  max-height: 58px !important;
  aspect-ratio: 1 / 1 !important;
}

.youth-island-plugin-root .a-my-island-work-navigation-dock,
.youth-island-obsidian-view-root .a-my-island-work-navigation-dock {
  bottom: max(120px, calc(106px + env(safe-area-inset-bottom, 0px))) !important;
}

/* 2. 顶栏操作工具键防变形 */
.youth-island-plugin-root .a-my-island-graph-tool,
.youth-island-obsidian-view-root .a-my-island-graph-tool {
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  justify-content: center !important;
  box-sizing: border-box !important;
  flex-shrink: 0 !important;
}

/* 3. 树操作与甘特图操作按钮 */
.youth-island-plugin-root .tree-action-btn,
.youth-island-obsidian-view-root .tree-action-btn {
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  box-sizing: border-box !important;
  flex-shrink: 0 !important;
}

.youth-island-plugin-root .gantt-op-btn,
.youth-island-obsidian-view-root .gantt-op-btn {
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  box-sizing: border-box !important;
  flex-shrink: 0 !important;
  height: 26px !important;
  padding: 0 6px !important;
  font-size: 11px !important;
  white-space: nowrap !important;
}

.youth-island-plugin-root .card-graphic-pill,
.youth-island-obsidian-view-root .card-graphic-pill {
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  box-sizing: border-box !important;
  flex-shrink: 0 !important;
  border-radius: 20px !important;
  white-space: nowrap !important;
}

/* 4. 输入框、多选框与下拉选择框隔离 */
.youth-island-plugin-root input,
.youth-island-plugin-root select,
.youth-island-plugin-root textarea,
.youth-island-obsidian-view-root input,
.youth-island-obsidian-view-root select,
.youth-island-obsidian-view-root textarea {
  box-sizing: border-box !important;
  font-family: inherit !important;
}

.youth-island-plugin-root input[type="checkbox"],
.youth-island-obsidian-view-root input[type="checkbox"] {
  appearance: checkbox !important;
  -webkit-appearance: checkbox !important;
  width: 16px !important;
  height: 16px !important;
  margin: 0 !important;
  flex-shrink: 0 !important;
  cursor: pointer !important;
}

/* 5. 确保执行中心与发射台安全避让，自适应安全边距，彻底杜绝按钮向下超出屏幕 */
.youth-island-plugin-root .a-my-island-plugin-launcher,
.youth-island-obsidian-view-root .a-my-island-plugin-launcher {
  bottom: max(48px, calc(34px + env(safe-area-inset-bottom, 0px))) !important;
}

.youth-island-plugin-root .island-exec-center-container,
.youth-island-obsidian-view-root .island-exec-center-container {
  bottom: max(124px, calc(108px + env(safe-area-inset-bottom, 0px))) !important;
}

.youth-island-plugin-root .a-my-island-work-minimap,
.youth-island-obsidian-view-root .a-my-island-work-minimap,
.youth-island-plugin-root #island-minimap-dock,
.youth-island-obsidian-view-root #island-minimap-dock {
  bottom: max(124px, calc(108px + env(safe-area-inset-bottom, 0px))) !important;
}

.youth-island-plugin-root .a-my-island-island-settings-panel,
.youth-island-plugin-root .a-my-island-background-settings-panel,
.youth-island-plugin-root .a-my-island-character-settings-panel,
.youth-island-plugin-root .a-my-island-environment-settings-panel,
.youth-island-plugin-root .a-my-island-scene-settings-panel,
.youth-island-plugin-root .a-my-island-immersive-settings-panel,
.youth-island-obsidian-view-root .a-my-island-island-settings-panel,
.youth-island-obsidian-view-root .a-my-island-background-settings-panel,
.youth-island-obsidian-view-root .a-my-island-character-settings-panel,
.youth-island-obsidian-view-root .a-my-island-environment-settings-panel,
.youth-island-obsidian-view-root .a-my-island-scene-settings-panel,
.youth-island-obsidian-view-root .a-my-island-immersive-settings-panel {
  bottom: max(124px, calc(108px + env(safe-area-inset-bottom, 0px))) !important;
}



`;

const businessCss = `
.youth-island-plugin-root .island-real-execution-form { width: min(920px, calc(100% - 32px)); max-width: 100%; margin: 24px auto; color: #334155; display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1.2fr); gap: 20px; }
.youth-island-plugin-root .island-real-execution-form > h3 { grid-column: 1 / -1; }
.youth-island-plugin-root .island-real-execution-entry { min-width: 0; }
.youth-island-plugin-root .island-real-execution-entry textarea { border: 1px solid #93c5fd; border-radius: 8px; padding: 10px; font: inherit; resize: vertical; }
.youth-island-plugin-root #island-execution-standard .tertiary-card { min-height: 0 !important; }
@media (max-width: 720px) { .youth-island-plugin-root .island-real-execution-form { grid-template-columns: minmax(0, 1fr); gap: 12px; } }
`;
fs.writeFileSync(path.join(ROOT, "styles.css"), obsidianHostCss + scopeCss(cssContent) + businessCss + "\n", "utf8");

// 2. Extract HTML Template -> src/ui/template.ts
const htmlPart1 = lines.slice(bodyStart + 1, scriptStart).join("\n");
const htmlPart2 = lines.slice(scriptEnd + 1, bodyEnd).join("\n");
const combinedHtml = (htmlPart1 + "\n" + htmlPart2)
  .trim()
  .replace(/class="ipad-shell-wrapper\s+in-frame-mode"/g, 'class="ipad-shell-wrapper"');

fs.mkdirSync(path.join(ROOT, "src", "ui"), { recursive: true });
fs.writeFileSync(
  path.join(ROOT, "src", "ui", "template.ts"),
  `// Auto-extracted 1:1 UI DOM template from high_fidelity_ui_preview.html\nexport const ISLAND_UI_HTML: string = ${JSON.stringify(combinedHtml)};\n`,
  "utf8"
);

// 3. Extract Runtime Script -> src/runtime/prototypeScript.ts
const scriptContent = lines.slice(scriptStart + 1, scriptEnd).join("\n")
  .replace('const GANTT_TODAY =', 'let GANTT_TODAY =')
  .replace(/new ResizeObserver\((\(\) => scheduleTertiaryEdgeRefresh\(\))\)/g, 'runtimeScope.observe(new ResizeObserver($1))')
  .replace(/\(state.todayFocusMinutes \|\| 60\)/g, '(state.todayFocusMinutes || 0)');

// Find all top-level function declarations so we can explicitly attach them to window for inline onclick handlers
const fnNames = new Set();
for (const match of scriptContent.matchAll(/^[ \t]*(?:async[ \t]+)?function[ \t]+([a-zA-Z0-9_$]+)[ \t]*\(/gm)) {
  fnNames.add(match[1]);
}
fnNames.delete("render"); // inner function inside initWeatherEngine

const windowExports = [...fnNames]
  .map((fn) => `  if (typeof ${fn} === "function") (window as any).${fn} = ${fn};`)
  .join("\n");

fs.mkdirSync(path.join(ROOT, "src", "runtime"), { recursive: true });
const runtimeTs = `// @ts-nocheck
// Auto-extracted 1:1 interactive runtime from high_fidelity_ui_preview.html
// Bound to window and bridged with Obsidian VaultStorageAdapter & EventBus
import { RuntimeScope } from "./RuntimeScope";

export function bootPrototypeRuntime(): () => void {
  const runtimeScope = new RuntimeScope(globalThis.window);
  const window = runtimeScope.window;
  const { setTimeout, clearTimeout, setInterval, clearInterval, requestAnimationFrame, cancelAnimationFrame } = runtimeScope;
  if ((window as any).__YOUTH_ISLAND_RUNTIME_BOOTED__) {
    if (typeof (window as any).__reinitYouthIslandDom === "function") {
      (window as any).__reinitYouthIslandDom();
    }
    return () => runtimeScope.dispose();
  }
  (window as any).__YOUTH_ISLAND_RUNTIME_BOOTED__ = true;

${scriptContent}

  // Expose all top-level functions to window for inline HTML handlers
${windowExports}

  // Expose core state stores on window for VaultStorageAdapter bidirectional sync
  if (typeof USER_PROFILE_STATE !== "undefined") (window as any).USER_PROFILE_STATE = USER_PROFILE_STATE;
  if (typeof GANTT_PROJECTS !== "undefined") (window as any).GANTT_PROJECTS = GANTT_PROJECTS;
  if (typeof PROJECT_CANVAS_STORE !== "undefined") (window as any).PROJECT_CANVAS_STORE = PROJECT_CANVAS_STORE;
  if (typeof PAVILION_META !== "undefined") (window as any).PAVILION_META = PAVILION_META;
  if (typeof EXEC_CARDS_DATA !== "undefined") (window as any).EXEC_CARDS_DATA = EXEC_CARDS_DATA;
  if (typeof WEEK_BOARD_DATA !== "undefined") (window as any).WEEK_BOARD_DATA = WEEK_BOARD_DATA;
  if (typeof TREASURY_STATE !== "undefined") (window as any).TREASURY_STATE = TREASURY_STATE;
  if (typeof ACHIEVEMENT_STATE !== "undefined") (window as any).ACHIEVEMENT_STATE = ACHIEVEMENT_STATE;
  if (typeof NOTE_STATE !== "undefined") (window as any).NOTE_STATE = NOTE_STATE;
  if (typeof BOUNTY_STATE !== "undefined") (window as any).BOUNTY_STATE = BOUNTY_STATE;
  if (typeof INQUIRY_POOL_STATE !== "undefined") (window as any).INQUIRY_POOL_STATE = INQUIRY_POOL_STATE;

  (window as any).__reinitYouthIslandDom = function () {
    islandSettingsBound = false;
    if (typeof initIslandSettings === "function") initIslandSettings();
    if (typeof initWeatherEngine === "function") initWeatherEngine();
    if (typeof initCanvasPanZoomAndDrag === "function") initCanvasPanZoomAndDrag();
    if (typeof updatePavilionBadges === "function") updatePavilionBadges("exec");
    if (typeof setupCarouselGestures === "function") setupCarouselGestures();
    if (typeof updateDayCarousel === "function") updateDayCarousel();
    if (typeof renderWeekBoard === "function") renderWeekBoard("all");
    if (typeof renderMonthCalendar === "function") renderMonthCalendar();
    if (typeof renderHomeSemesterGoalsBanner === "function") renderHomeSemesterGoalsBanner();
    if (typeof recalcAndRenderGlobalHUD === "function") recalcAndRenderGlobalHUD();
    if (typeof restoreBusinessViews === "function") restoreBusinessViews();
    if (typeof renderBountyModalAndBillboard === "function") renderBountyModalAndBillboard();
    if (typeof renderGanttChart === "function") renderGanttChart();
    if (typeof initTertiaryWorkspace === "function") initTertiaryWorkspace();
    if (typeof switchHomeGlobalView === "function") switchHomeGlobalView("exec");
  };

  (window as any).__reinitYouthIslandDom();
  return () => runtimeScope.dispose();
}
`;

fs.writeFileSync(path.join(ROOT, "src", "runtime", "prototypeScript.ts"), runtimeTs, "utf8");

console.log(
  `Extraction complete: styles.css (${cssContent.length} bytes), template.ts (${combinedHtml.length} bytes), prototypeScript.ts (${fnNames.size} functions exported)`
);
