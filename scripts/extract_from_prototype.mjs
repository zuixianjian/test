import fs from "fs";
import path from "path";

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
   Generated from high_fidelity_ui_preview.html (1:1 Visual Specification)
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

.youth-island-plugin-root {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  user-select: none;
  font-family: "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", -apple-system, BlinkMacSystemFont, sans-serif;
}

`;

fs.writeFileSync(path.join(ROOT, "styles.css"), obsidianHostCss + cssContent + "\n", "utf8");

// 2. Extract HTML Template -> src/ui/template.ts
const htmlPart1 = lines.slice(bodyStart + 1, scriptStart).join("\n");
const htmlPart2 = lines.slice(scriptEnd + 1, bodyEnd).join("\n");
const combinedHtml = (htmlPart1 + "\n" + htmlPart2).trim();

fs.mkdirSync(path.join(ROOT, "src", "ui"), { recursive: true });
fs.writeFileSync(
  path.join(ROOT, "src", "ui", "template.ts"),
  `// Auto-extracted 1:1 UI DOM template from high_fidelity_ui_preview.html\nexport const ISLAND_UI_HTML: string = ${JSON.stringify(combinedHtml)};\n`,
  "utf8"
);

// 3. Extract Runtime Script -> src/runtime/prototypeScript.ts
const scriptContent = lines.slice(scriptStart + 1, scriptEnd).join("\n");

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

export function bootPrototypeRuntime(): void {
  if ((window as any).__YOUTH_ISLAND_RUNTIME_BOOTED__) {
    if (typeof (window as any).__reinitYouthIslandDom === "function") {
      (window as any).__reinitYouthIslandDom();
    }
    return;
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
    if (typeof renderBountyModalAndBillboard === "function") renderBountyModalAndBillboard();
    if (typeof switchHomeGlobalView === "function") switchHomeGlobalView("exec");
  };

  (window as any).__reinitYouthIslandDom();
}
`;

fs.writeFileSync(path.join(ROOT, "src", "runtime", "prototypeScript.ts"), runtimeTs, "utf8");

console.log(
  `Extraction complete: styles.css (${cssContent.length} bytes), template.ts (${combinedHtml.length} bytes), prototypeScript.ts (${fnNames.size} functions exported)`
);
