import fs from "fs";
import path from "path";
import { execSync } from "child_process";

const ROOT = process.cwd();
const RELEASE_DIR = path.join(ROOT, "release");
const PLUGIN_FOLDER = path.join(RELEASE_DIR, "youth-holistic-growth-island");
const ZIP_PATH = path.join(RELEASE_DIR, "youth-holistic-growth-island-android.zip");

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
  fs.copyFileSync(
    path.join(ROOT, "assets", "scenes", scene),
    path.join(PLUGIN_FOLDER, "assets", "scenes", scene)
  );
}
for (const avatar of ["avatar-cat.png", "avatar-female.png", "avatar-male.png"]) {
  fs.copyFileSync(
    path.join(ROOT, "assets", "avatars", avatar),
    path.join(PLUGIN_FOLDER, "assets", "avatars", avatar)
  );
}

// Create ZIP archive using PowerShell Compress-Archive
execSync(
  `powershell -NoProfile -Command "Compress-Archive -Path '${PLUGIN_FOLDER}' -DestinationPath '${ZIP_PATH}' -Force"`,
  { stdio: "inherit" }
);

const stat = fs.statSync(ZIP_PATH);
console.log(
  `✅ Android package ready:\n  Folder: ${PLUGIN_FOLDER}\n  Zip:    ${ZIP_PATH} (${(stat.size / 1024 / 1024).toFixed(2)} MB)`
);
