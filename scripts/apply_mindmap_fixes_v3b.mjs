import fs from "fs";
const PROTO = "f:/self-improve/high_fidelity_ui_preview.html";
let html = fs.readFileSync(PROTO, "utf8").replace(/\r\n/g, "\n");

const from1 = `    // 忽略按钮、输入框、连线锚点与工具条
    if (e.target.closest('button, input, select, textarea, .work-card-connect-handle, .a-my-island-graph-tool, .ws-nav-back-btn, .a-my-island-work-minimap')) {
      return;
    }

    activePointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
`;
const to1 = `    if (e.target.closest('.a-my-island-work-minimap')) return;
    // 按钮/输入框/连线锚点：不启动拖拽或平移，但手指仍要计入，保证手指压在按钮上时也能双指缩放
    const isInteractiveTarget = !!e.target.closest('button, input, select, textarea, .work-card-connect-handle');

    activePointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
`;
if (!html.includes(from1)) { console.error("pointerdown block missing"); process.exit(1); }
html = html.replace(from1, to1);

const from2 = `    // 情况 B: 单指触控落在卡片上 -> 启动卡片拖拽
    const card = e.target.closest('.tertiary-card');`;
const to2 = `    if (isInteractiveTarget) return;

    // 情况 B: 单指触控落在卡片上 -> 启动卡片拖拽
    const card = e.target.closest('.tertiary-card');`;
if (!html.includes(from2)) { console.error("case B block missing"); process.exit(1); }
html = html.replace(from2, to2);

fs.writeFileSync(PROTO, html, "utf8");
console.log("pointerdown patched");
