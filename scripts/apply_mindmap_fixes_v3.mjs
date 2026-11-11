import fs from "fs";

const PROTO = "f:/self-improve/high_fidelity_ui_preview.html";
let html = fs.readFileSync(PROTO, "utf8").replace(/\r\n/g, "\n");

function rep(from, to, label, all = false) {
  if (!html.includes(from)) {
    console.error("MISSING:", label);
    process.exit(1);
  }
  html = all ? html.split(from).join(to) : html.replace(from, to);
  console.log("OK:", label);
}

// 1. 绑定标志改为“按 DOM 元素”判断：Obsidian 重新打开视图会重建 DOM，旧的全局标志会导致新舞台没有任何手势监听
rep(
  "  applyTertiaryTransform();\n  if (tertiaryEngineBound) return;\n  tertiaryEngineBound = true;\n",
  "  applyTertiaryTransform();\n  if (stage._tertiaryGestureBound) return;\n  stage._tertiaryGestureBound = true;\n  activePointers.clear();\n  isPinching = false;\n  isStagePanning = false;\n  activeDraggingCard = null;\n",
  "per-element gesture binding"
);

// 2. 连线增加 id，便于拖拽/折叠时增量更新
rep(
  `linesHtml += '<path d="' + d + '" stroke="transparent" stroke-width="24" fill="none" cursor="pointer" data-edge-id="'`,
  `linesHtml += '<path id="svg-hit-' + e.id + '" d="' + d + '" stroke="transparent" stroke-width="24" fill="none" cursor="pointer" data-edge-id="'`,
  "hit path id"
);
rep(
  `'<path d="' + d + '" stroke="' + e.color + '" stroke-width="' + strokeWidth + '"`,
  `'<path id="svg-line-' + e.id + '" d="' + d + '" stroke="' + e.color + '" stroke-width="' + strokeWidth + '"`,
  "line path id"
);
rep(
  `labelsHtml += '<div class="a-my-island-work-edge-label" style="left:'`,
  `labelsHtml += '<div id="edge-label-' + e.id + '" class="a-my-island-work-edge-label" style="left:'`,
  "label id"
);

// 3. 增量更新函数同步更新点击热区；缺节点时回退整体重绘
rep(
  "    pathEl.setAttribute('d', d);\n",
  "    pathEl.setAttribute('d', d);\n    const hitEl = document.getElementById('svg-hit-' + e.id);\n    if (hitEl) hitEl.setAttribute('d', d);\n",
  "fast update hit path"
);
rep(
  "    if (!pathEl || !sEl || !tEl) return;\n    const sLeft",
  "    if (!sEl || !tEl) return;\n    if (!pathEl) { needFull = true; return; }\n    const sLeft",
  "fast update fallback flag"
);
rep(
  "  const edges = window.TERTIARY_EDGES || [];\n  edges.forEach(e => {\n    const pathEl = document.getElementById('svg-line-' + e.id);",
  "  const edges = window.TERTIARY_EDGES || [];\n  let needFull = false;\n  edges.forEach(e => {\n    const pathEl = document.getElementById('svg-line-' + e.id);",
  "fast update needFull decl"
);
// 在 updateTertiaryEdgesFast 末尾追加 needFull 处理：定位函数结束
{
  const fnStart = html.indexOf("function updateTertiaryEdgesFast() {");
  const fnEnd = html.indexOf("\nfunction initTertiaryCanvasPanZoom() {", fnStart);
  const body = html.slice(fnStart, fnEnd);
  const lastBrace = body.lastIndexOf("}");
  const patched = body.slice(0, lastBrace) + "  if (needFull) renderTertiaryEdges();\n}" + body.slice(lastBrace + 1);
  html = html.slice(0, fnStart) + patched + html.slice(fnEnd);
  console.log("OK: needFull fallback appended");
}

// 4. 折叠/展开及任何尺寸变化 -> ResizeObserver 驱动连线实时跟随；补齐缺失的 renderTertiaryConnections
rep(
  "function initTertiaryCanvasPanZoom() {",
  `let tertiaryEdgeRaf = 0;
function scheduleTertiaryEdgeRefresh() {
  if (tertiaryEdgeRaf) return;
  tertiaryEdgeRaf = requestAnimationFrame(() => {
    tertiaryEdgeRaf = 0;
    updateTertiaryEdgesFast();
  });
}

// 兼容旧调用：折叠/展开、全部折叠等处使用的连线刷新入口
function renderTertiaryConnections() {
  renderTertiaryEdges();
  scheduleTertiaryEdgeRefresh();
}

let tertiaryResizeObserver = null;
function observeTertiaryCards() {
  if (typeof ResizeObserver === 'undefined') return;
  if (!tertiaryResizeObserver) {
    tertiaryResizeObserver = new ResizeObserver(() => scheduleTertiaryEdgeRefresh());
  }
  document.querySelectorAll('#tertiary-canvas-world .tertiary-card').forEach(c => {
    if (!c._tertiaryRoBound) {
      c._tertiaryRoBound = true;
      tertiaryResizeObserver.observe(c);
    }
  });
}

function initTertiaryCanvasPanZoom() {`,
  "edge refresh helpers"
);
rep(
  "function initTertiaryWorkspace() {\n  initTertiaryCanvasPanZoom();",
  "function initTertiaryWorkspace() {\n  initTertiaryCanvasPanZoom();\n  observeTertiaryCards();",
  "observe cards on init"
);
// 渲染连线后也确保新增卡片被观察
rep(
  "  if (defs) defs.innerHTML = defsHtml;\n  linesGroup.innerHTML = linesHtml;\n  labelsLayer.innerHTML = labelsHtml;\n}",
  "  if (defs) defs.innerHTML = defsHtml;\n  linesGroup.innerHTML = linesHtml;\n  labelsLayer.innerHTML = labelsHtml;\n  if (typeof observeTertiaryCards === 'function') observeTertiaryCards();\n}",
  "observe after render"
);

// 5. 性能：去掉 will-change left/top、缩小世界层、禁用卡片宽度过渡
rep("  touch-action: none !important;\n  will-change: left, top !important;\n  transition: width 0.25s", "  touch-action: none !important;\n  transition: width 0.18s", "card css willchange removal (declaration)");

const css = `
/* ==========================================================================
   脑图性能与手势补丁
   - 世界层仅作坐标原点：1px + overflow:visible，避免几千像素的超大合成层拖垮 GPU
   - SVG 连线层同样不再受固定宽高裁剪
   ========================================================================== */
.tertiary-canvas-world {
  width: 1px !important;
  height: 1px !important;
  overflow: visible !important;
  will-change: transform !important;
  contain: none !important;
}
.tertiary-connections-layer {
  width: 1px !important;
  height: 1px !important;
  overflow: visible !important;
}
.a-my-island-work-edge-labels-layer {
  overflow: visible !important;
}
#tertiary-workspace-view,
#tertiary-canvas-stage,
.tertiary-card {
  touch-action: none !important;
}
.tertiary-card {
  will-change: auto !important;
  backface-visibility: hidden;
}
.tertiary-card.is-card-dragging,
#tertiary-workspace-view.is-viewport-moving .tertiary-card {
  transition: none !important;
}
`;
html = html.replace("</style>", css + "\n</style>");
console.log("OK: css appended");

fs.writeFileSync(PROTO, html, "utf8");
console.log("Mindmap fixes written.");
