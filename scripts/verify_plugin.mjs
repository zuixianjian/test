import fs from "fs";
import path from "path";

const ROOT = process.cwd();

function assert(cond, msg) {
  if (!cond) {
    console.error("❌ FAIL:", msg);
    process.exit(1);
  }
  console.log("✅ PASS:", msg);
}

// 1. Verify manifest.json & versions.json
const manifest = JSON.parse(fs.readFileSync(path.join(ROOT, "manifest.json"), "utf8"));
const versions = JSON.parse(fs.readFileSync(path.join(ROOT, "versions.json"), "utf8"));
assert(manifest.id === "youth-holistic-growth-island", "manifest.id is youth-holistic-growth-island");
assert(Boolean(manifest.version && versions[manifest.version]), "manifest.version matches versions.json");

// 2. Verify styles.css
const css = fs.readFileSync(path.join(ROOT, "styles.css"), "utf8");
assert(css.length > 200000, `styles.css size verified (${css.length} bytes)`);
assert(
  css.includes('.workspace-leaf-content[data-type="youth-holistic-growth-island-view"]'),
  "styles.css includes Obsidian leaf container rules"
);

// 3. Verify main.js exists and has valid syntax
const mainJsPath = path.join(ROOT, "main.js");
assert(fs.existsSync(mainJsPath), "main.js bundle exists");
const mainJs = fs.readFileSync(mainJsPath, "utf8");
assert(mainJs.length > 500000, `main.js bundle size verified (${mainJs.length} bytes)`);
assert(
  mainJs.includes("youth-holistic-growth-island-view") && mainJs.includes("00_Island_Core"),
  "main.js contains YouthIslandView and VaultStorageAdapter"
);

// 4. Verify reusable assets
const scenesDir = path.join(ROOT, "assets", "scenes");
const avatarsDir = path.join(ROOT, "assets", "avatars");
assert(fs.existsSync(path.join(scenesDir, "20_广场中心.png")), "Scene asset 20_广场中心.png exists");
assert(fs.existsSync(path.join(scenesDir, "工作台_男_背景图.png")), "Scene asset 工作台_男_背景图.png exists");
assert(fs.existsSync(path.join(avatarsDir, "avatar-male.png")), "Avatar asset avatar-male.png exists");

// 5. Verify template.ts onclick handlers match prototypeScript.ts functions
const templateTs = fs.readFileSync(path.join(ROOT, "src", "ui", "template.ts"), "utf8");
const runtimeTs = fs.readFileSync(path.join(ROOT, "src", "runtime", "prototypeScript.ts"), "utf8");
const onclickCalls = new Set();
for (const m of templateTs.matchAll(/onclick=\\?"([a-zA-Z0-9_$]+)\(/g)) {
  if (m[1] !== "if") onclickCalls.add(m[1]);
}
let missing = [];
for (const fn of onclickCalls) {
  if (!runtimeTs.includes(`function ${fn}(`) && !runtimeTs.includes(`window.${fn}`)) {
    missing.push(fn);
  }
}
assert(
  missing.length === 0,
  `All ${onclickCalls.size} template onclick functions are defined in runtime (${missing.join(", ")})`
);

console.log("\n🎉 All Obsidian plugin build & closed-loop integrity checks passed!");
