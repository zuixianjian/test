import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const PROTO_PATH = path.join(ROOT, "high_fidelity_ui_preview.html");

let html = fs.readFileSync(PROTO_PATH, "utf8").replace(/\r\n/g, "\n");

// 1. Update CSS for .tertiary-canvas-stage and .tertiary-canvas-world
const oldStageCss = `.tertiary-canvas-stage {
  position: absolute;
  top: 74px !important;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: calc(100% - 74px) !important;
  overflow: auto;
  background:
    radial-gradient(circle, rgba(160, 110, 60, 0.12) 1.5px, transparent 1.5px),
    linear-gradient(135deg, #fdfbf7 0%, #f5efe6 100%);
  background-size: 28px 28px, 100% 100%;
  background-position: 0 0, 0 0;
  cursor: grab;
  user-select: none;
  -webkit-overflow-scrolling: touch;
}`;

const newStageCss = `.tertiary-canvas-stage {
  position: absolute;
  top: 74px !important;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: calc(100% - 74px) !important;
  overflow: hidden !important;
  touch-action: none !important;
  background:
    radial-gradient(circle, rgba(160, 110, 60, 0.12) 1.5px, transparent 1.5px),
    linear-gradient(135deg, #fdfbf7 0%, #f5efe6 100%);
  background-size: 28px 28px, 100% 100%;
  background-position: 0 0, 0 0;
  cursor: grab;
  user-select: none;
}`;

if (html.includes(oldStageCss)) {
  html = html.replace(oldStageCss, newStageCss);
  console.log("Updated .tertiary-canvas-stage CSS.");
}

const oldWorldCss = `.tertiary-canvas-world {
  position: relative;
  min-width: 2200px;
  min-height: 1200px;
  transform-origin: 0 0;
}`;

const newWorldCss = `.tertiary-canvas-world {
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  width: 4200px !important;
  height: 3200px !important;
  transform-origin: 0 0 !important;
  will-change: transform !important;
}`;

if (html.includes(oldWorldCss)) {
  html = html.replace(oldWorldCss, newWorldCss);
  console.log("Updated .tertiary-canvas-world CSS.");
}

// 2. Update tertiary toolbar buttons: add zoom controls
const oldDockGroup2 = `        <!-- 组 2: 画布视口 -->
        <button class="exec-subview-tab a-my-island-graph-tool" onclick="fitCanvasView()" title="自适应缩放居中当前所有卡片">
          <span class="a-my-island-graph-tool-icon">⛶</span>
          <span class="a-my-island-graph-tool-label">适应画布</span>
        </button>
        <button class="exec-subview-tab a-my-island-graph-tool active is-active" id="btn-tertiary-children-follow" onclick="toggleChildrenFollowToolbar()" title="开启时拖拽父节点其下游子级整体跟随平移">
          <span class="a-my-island-graph-tool-icon">🧲</span>
          <span class="a-my-island-graph-tool-label">子级跟随</span>
        </button>`;

const newDockGroup2 = `        <!-- 组 2: 画布视口自由缩放控制 (支持双指捏合 / 滚轮缩放 / 快捷键) -->
        <button class="exec-subview-tab a-my-island-graph-tool" onclick="zoomTertiaryCanvas(1.18)" title="放大脑图画布 (或使用鼠标滚轮上滚 / 平板触屏双指放大)">
          <span class="a-my-island-graph-tool-icon">➕</span>
          <span class="a-my-island-graph-tool-label">放大</span>
        </button>
        <button class="exec-subview-tab a-my-island-graph-tool" onclick="zoomTertiaryCanvas(0.85)" title="缩小小脑图画布 (或使用鼠标滚轮下滚 / 平板触屏双指缩小)">
          <span class="a-my-island-graph-tool-icon">➖</span>
          <span class="a-my-island-graph-tool-label">缩小</span>
        </button>
        <button class="exec-subview-tab a-my-island-graph-tool" onclick="resetTertiaryCanvasZoom()" title="恢复 100% 原始比例">
          <span class="a-my-island-graph-tool-icon" id="tertiary-zoom-badge" style="font-size:10.5px; font-weight:900; color:#b45309;">100%</span>
          <span class="a-my-island-graph-tool-label">还原</span>
        </button>
        <button class="exec-subview-tab a-my-island-graph-tool" onclick="fitCanvasView()" title="自适应缩放并居中所有卡片">
          <span class="a-my-island-graph-tool-icon">⛶</span>
          <span class="a-my-island-graph-tool-label">适应画布</span>
        </button>
        <button class="exec-subview-tab a-my-island-graph-tool active is-active" id="btn-tertiary-children-follow" onclick="toggleChildrenFollowToolbar()" title="开启时拖拽父节点其下游子级整体跟随平移">
          <span class="a-my-island-graph-tool-icon">🧲</span>
          <span class="a-my-island-graph-tool-label">子级跟随</span>
        </button>`;

if (html.includes(oldDockGroup2)) {
  html = html.replace(oldDockGroup2, newDockGroup2);
  console.log("Added zoom controls to tertiary toolbar.");
}

// 3. Update fitCanvasView in JS
const oldFitCanvas = `function fitCanvasView() {
  const stage = document.getElementById('tertiary-canvas-stage');
  if (stage) {
    if (typeof stage.scrollTo === 'function') stage.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
    else { stage.scrollLeft = 0; stage.scrollTop = 0; }
  }
  showIslandToast('⛶ 视口自适应全景卡片');
}`;

const newFitCanvas = `function fitCanvasView() {
  const stage = document.getElementById('tertiary-canvas-stage');
  const world = document.getElementById('tertiary-canvas-world');
  if (!stage || !world) return;
  const cards = Array.from(world.querySelectorAll('.tertiary-card'));
  if (cards.length === 0) {
    resetTertiaryCanvasZoom();
    return;
  }
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  cards.forEach(c => {
    const l = parseInt(c.style.left, 10) || c.offsetLeft;
    const t = parseInt(c.style.top, 10) || c.offsetTop;
    const w = c.offsetWidth || 340;
    const h = c.offsetHeight || 220;
    minX = Math.min(minX, l);
    minY = Math.min(minY, t);
    maxX = Math.max(maxX, l + w);
    maxY = Math.max(maxY, t + h);
  });
  const bboxW = Math.max(200, maxX - minX);
  const bboxH = Math.max(200, maxY - minY);
  const stageW = stage.clientWidth || 1000;
  const stageH = stage.clientHeight || 700;
  const padding = 60;
  const scaleX = (stageW - padding * 2) / bboxW;
  const scaleY = (stageH - padding * 2) / bboxH;
  const fitScale = Math.min(1.2, Math.max(0.3, Math.min(scaleX, scaleY)));
  window.tertiaryZoom = fitScale;
  window.tertiaryPanX = (stageW - bboxW * fitScale) / 2 - minX * fitScale;
  window.tertiaryPanY = (stageH - bboxH * fitScale) / 2 - minY * fitScale;
  applyTertiaryTransform();
  showIslandToast('⛶ 已自适应居中缩放全部卡片 (' + Math.round(fitScale * 100) + '%)');
}`;

if (html.includes(oldFitCanvas)) {
  html = html.replace(oldFitCanvas, newFitCanvas);
  console.log("Updated fitCanvasView with real bounding-box auto-zoom algorithm.");
}

// 4. Add Pan & Zoom Controller functions before initTertiaryWorkspace
const panZoomEngineCode = `window.tertiaryZoom = 1.0;
window.tertiaryPanX = 60;
window.tertiaryPanY = 40;
let tertiaryPanZoomInitialized = false;

function applyTertiaryTransform() {
  const world = document.getElementById('tertiary-canvas-world');
  if (!world) return;
  world.style.transform = 'translate(' + window.tertiaryPanX + 'px, ' + window.tertiaryPanY + 'px) scale(' + window.tertiaryZoom + ')';
  world.style.transformOrigin = '0 0';
  const badge = document.getElementById('tertiary-zoom-badge');
  if (badge) badge.textContent = Math.round(window.tertiaryZoom * 100) + '%';
}

function zoomTertiaryCanvas(factor) {
  const stage = document.getElementById('tertiary-canvas-stage');
  if (!stage) return;
  const oldZoom = window.tertiaryZoom || 1;
  const newZoom = Math.min(3.0, Math.max(0.25, oldZoom * factor));
  const centerX = stage.clientWidth / 2;
  const centerY = stage.clientHeight / 2;
  window.tertiaryPanX = centerX - (centerX - window.tertiaryPanX) * (newZoom / oldZoom);
  window.tertiaryPanY = centerY - (centerY - window.tertiaryPanY) * (newZoom / oldZoom);
  window.tertiaryZoom = newZoom;
  applyTertiaryTransform();
}

function resetTertiaryCanvasZoom() {
  window.tertiaryZoom = 1.0;
  window.tertiaryPanX = 60;
  window.tertiaryPanY = 40;
  applyTertiaryTransform();
  showIslandToast('🔍 已恢复 100% 原始比例');
}

function initTertiaryCanvasPanZoom() {
  const stage = document.getElementById('tertiary-canvas-stage');
  if (!stage || tertiaryPanZoomInitialized) {
    applyTertiaryTransform();
    return;
  }
  tertiaryPanZoomInitialized = true;

  // 1. 鼠标滚轮缩放 (以鼠标指针所在位置为中心缩放)
  stage.addEventListener('wheel', (e) => {
    e.preventDefault();
    const rect = stage.getBoundingClientRect();
    const pointerX = e.clientX - rect.left;
    const pointerY = e.clientY - rect.top;
    const oldZoom = window.tertiaryZoom || 1;
    const factor = e.deltaY < 0 ? 1.1 : 0.9;
    const newZoom = Math.min(3.0, Math.max(0.25, oldZoom * factor));
    window.tertiaryPanX = pointerX - (pointerX - window.tertiaryPanX) * (newZoom / oldZoom);
    window.tertiaryPanY = pointerY - (pointerY - window.tertiaryPanY) * (newZoom / oldZoom);
    window.tertiaryZoom = newZoom;
    applyTertiaryTransform();
  }, { passive: false });

  // 2. 鼠标空白区域抓手拖拽平移画布
  let isMousePanning = false;
  let mouseStartX = 0;
  let mouseStartY = 0;

  stage.addEventListener('mousedown', (e) => {
    if (e.target.closest('.tertiary-card') ||
        e.target.closest('button') ||
        e.target.closest('input') ||
        e.target.closest('select') ||
        e.target.closest('textarea') ||
        e.target.closest('.tertiary-tools-dock') ||
        e.target.closest('.island-top-unified-bar') ||
        e.target.closest('.a-my-island-work-minimap') ||
        e.target.closest('.work-card-connect-handle') ||
        e.target.closest('.tertiary-edge-label-pill')) {
      return;
    }
    isMousePanning = true;
    mouseStartX = e.clientX - window.tertiaryPanX;
    mouseStartY = e.clientY - window.tertiaryPanY;
    stage.style.cursor = 'grabbing';
  });

  window.addEventListener('mousemove', (e) => {
    if (!isMousePanning) return;
    window.tertiaryPanX = e.clientX - mouseStartX;
    window.tertiaryPanY = e.clientY - mouseStartY;
    applyTertiaryTransform();
  });

  window.addEventListener('mouseup', () => {
    if (isMousePanning) {
      isMousePanning = false;
      stage.style.cursor = 'grab';
    }
  });

  // 3. Android 平板触屏手势：单指空白处拖动画布平移 + 双指捏合自由缩放 (Pinch-to-zoom)
  let isTouchPanning = false;
  let touchStartX = 0;
  let touchStartY = 0;
  let initialPinchDist = 0;
  let initialPinchZoom = 1;
  let pinchCenterX = 0;
  let pinchCenterY = 0;

  stage.addEventListener('touchstart', (e) => {
    if (e.target.closest('.tertiary-card') ||
        e.target.closest('button') ||
        e.target.closest('input') ||
        e.target.closest('select') ||
        e.target.closest('textarea') ||
        e.target.closest('.tertiary-tools-dock') ||
        e.target.closest('.island-top-unified-bar') ||
        e.target.closest('.a-my-island-work-minimap') ||
        e.target.closest('.work-card-connect-handle') ||
        e.target.closest('.tertiary-edge-label-pill')) {
      return;
    }

    if (e.touches.length === 1) {
      isTouchPanning = true;
      touchStartX = e.touches[0].clientX - window.tertiaryPanX;
      touchStartY = e.touches[0].clientY - window.tertiaryPanY;
    } else if (e.touches.length === 2) {
      isTouchPanning = false;
      initialPinchDist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      initialPinchZoom = window.tertiaryZoom || 1;
      const rect = stage.getBoundingClientRect();
      pinchCenterX = (e.touches[0].clientX + e.touches[1].clientX) / 2 - rect.left;
      pinchCenterY = (e.touches[0].clientY + e.touches[1].clientY) / 2 - rect.top;
    }
  }, { passive: true });

  stage.addEventListener('touchmove', (e) => {
    if (isTouchPanning && e.touches.length === 1) {
      window.tertiaryPanX = e.touches[0].clientX - touchStartX;
      window.tertiaryPanY = e.touches[0].clientY - touchStartY;
      applyTertiaryTransform();
    } else if (e.touches.length === 2 && initialPinchDist > 0) {
      const currentDist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      const ratio = currentDist / initialPinchDist;
      const oldZoom = window.tertiaryZoom || 1;
      const newZoom = Math.min(3.0, Math.max(0.25, initialPinchZoom * ratio));
      window.tertiaryPanX = pinchCenterX - (pinchCenterX - window.tertiaryPanX) * (newZoom / oldZoom);
      window.tertiaryPanY = pinchCenterY - (pinchCenterY - window.tertiaryPanY) * (newZoom / oldZoom);
      window.tertiaryZoom = newZoom;
      applyTertiaryTransform();
    }
  }, { passive: true });

  stage.addEventListener('touchend', () => {
    isTouchPanning = false;
    initialPinchDist = 0;
  });

  applyTertiaryTransform();
}
`;

if (!html.includes("function initTertiaryCanvasPanZoom")) {
  html = html.replace("function initTertiaryWorkspace() {", panZoomEngineCode + "\nfunction initTertiaryWorkspace() {");
  console.log("Added initTertiaryCanvasPanZoom and transform helpers.");
}

// 5. In initTertiaryWorkspace, call initTertiaryCanvasPanZoom
html = html.replace(
  `function initTertiaryWorkspace() {
  bindTertiaryCardsDrag();`,
  `function initTertiaryWorkspace() {
  initTertiaryCanvasPanZoom();
  bindTertiaryCardsDrag();`
);

// 6. Fix card dragging when canvas is zoomed (divide dx, dy by tertiaryZoom)
const oldPointerMove = `    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const clientY = e.clientY || (e.touches && e.touches[0].clientY);
    const dx = clientX - startX;
    const dy = clientY - startY;`;

const newPointerMove = `    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const clientY = e.clientY || (e.touches && e.touches[0].clientY);
    const currentZoom = window.tertiaryZoom || 1;
    const dx = (clientX - startX) / currentZoom;
    const dy = (clientY - startY) / currentZoom;`;

if (html.includes(oldPointerMove)) {
  html = html.replace(oldPointerMove, newPointerMove);
  console.log("Updated card drag dx/dy with zoom divisor.");
}

fs.writeFileSync(PROTO_PATH, html, "utf8");
console.log("Mindmap zoom & pan engine successfully applied!");
