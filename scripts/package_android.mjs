import fs from "fs";
import path from "path";
import { execSync } from "child_process";

const ROOT = process.cwd();
const RELEASE_DIR = path.join(ROOT, "release");
const PLUGIN_FOLDER = path.join(RELEASE_DIR, "youth-holistic-growth-island");
const ZIP_PATH = path.join(RELEASE_DIR, "youth-holistic-growth-island-android.zip");
const FLAT_ZIP_PATH = path.join(RELEASE_DIR, "youth-holistic-growth-island.zip");

// Clean and recreate release folder
if (fs.existsSync(RELEASE_DIR)) {
  fs.rmSync(RELEASE_DIR, { recursive: true, force: true });
}
fs.mkdirSync(path.join(PLUGIN_FOLDER, "assets", "scenes"), { recursive: true });
fs.mkdirSync(path.join(PLUGIN_FOLDER, "assets", "avatars"), { recursive: true });

// Copy core plugin files
for (const file of ["manifest.json", "versions.json", "main.js", "styles.css"]) {
  fs.copyFileSync(path.join(ROOT, file), path.join(PLUGIN_FOLDER, file));
}

// Copy ASCII-named scenes & avatars (prevents any Android ZIP GBK/UTF-8 garbled filename issues)
for (const scene of ["scene-plaza.png", "scene-desk.png", "scene-board.png"]) {
  const p = path.join(ROOT, "assets", "scenes", scene);
  if (fs.existsSync(p)) {
    fs.copyFileSync(p, path.join(PLUGIN_FOLDER, "assets", "scenes", scene));
  }
}
for (const avatar of ["avatar-cat.png", "avatar-female.png", "avatar-male.png"]) {
  const p = path.join(ROOT, "assets", "avatars", avatar);
  if (fs.existsSync(p)) {
    fs.copyFileSync(p, path.join(PLUGIN_FOLDER, "assets", "avatars", avatar));
  }
}

// 1. Create ZIP archive containing folder structure (for extracting into .obsidian/plugins)
execSync(
  `powershell -NoProfile -Command "Compress-Archive -Path '${PLUGIN_FOLDER}' -DestinationPath '${ZIP_PATH}' -Force"`,
  { stdio: "inherit" }
);

// 2. Create flat ZIP archive (for users who extract inside .obsidian/plugins/youth-holistic-growth-island)
execSync(
  `powershell -NoProfile -Command "Compress-Archive -Path '${PLUGIN_FOLDER}/*' -DestinationPath '${FLAT_ZIP_PATH}' -Force"`,
  { stdio: "inherit" }
);

const stat = fs.statSync(ZIP_PATH);
const statFlat = fs.statSync(FLAT_ZIP_PATH);
console.log(
  `✅ Android & Desktop packages ready:\n  Folder:     ${PLUGIN_FOLDER}\n  Folder Zip: ${ZIP_PATH} (${(stat.size / 1024 / 1024).toFixed(2)} MB)\n  Flat Zip:   ${FLAT_ZIP_PATH} (${(statFlat.size / 1024 / 1024).toFixed(2)} MB)`
);
