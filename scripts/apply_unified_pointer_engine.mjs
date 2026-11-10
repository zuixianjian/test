import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const PROTO_PATH = path.join(ROOT, "high_fidelity_ui_preview.html");

let html = fs.readFileSync(PROTO_PATH, "utf8").replace(/\r\n/g, "\n");

// 1. Add viewport-moving CSS rules matching a-my-island
const viewportMovingCss = `
/* ==========================================================================
   终身岛民 1:1 工作图谱视口运动加速与触摸手势引擎 (仿照 a-my-island 极致性能规范)
   ========================================================================== */
#tertiary-workspace-view.is-viewport-moving .tertiary-card {
  contain: layout paint style !important;
  will-change: transform !important;
  box-shadow: none !important;
  transition: none !important;
}

#tertiary-workspace-view.is-viewport-moving #tertiary-edge-labels-layer {
  visibility: hidden !important;
}

.tertiary-canvas-stage {
  position: absolute !important;
  top: 74px !important;
  left: 0 !important;
  right: 0 !important;
  bottom: 0 !important;
  width: 100% !important;
  height: calc(100% - 74px) !important;
  overflow: hidden !important;
  touch-action: none !important;
  user-select: none !important;
  cursor: grab !important;
  background:
    radial-gradient(circle, rgba(160, 110, 60, 0.12) 1.5px, transparent 1.5px),
    linear-gradient(135deg, #fdfbf7 0%, #f5efe6 100%) !important;
  background-size: 28px 28px, 100% 100% !important;
}

.tertiary-canvas-stage.is-dragging-canvas {
  cursor: grabbing !important;
}

.tertiary-canvas-world {
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  width: 4800px !important;
  height: 3600px !important;
  transform-origin: 0 0 !important;
  will-change: transform !important;
}

.tertiary-card {
  touch-action: none !important;
  user-select: none !important;
  cursor: grab !important;
}

.tertiary-card.is-card-dragging {
  cursor: grabbing !important;
  box-shadow: 0 12px 28px rgba(0,0,0,0.22) !important;
  z-index: 50 !important;
}
`;

// Inject viewportMovingCss before </style>
html = html.replace("</style>", viewportMovingCss + "\n</style>");
console.log("Injected viewport-moving performance CSS.");

// 2. Write the complete, unified Pointer-Event based gesture engine
const unifiedGestureEngineCode = `
// ==========================================================================
// 终身岛民 1:1 工作图谱多点触控与自由缩放手势引擎 (对标 a-my-island Cytoscape 级体验)
// ==========================================================================
window.tertiaryZoom = 1.0;
window.tertiaryPanX = 60;
window.tertiaryPanY = 40;

const activePointers = new Map();
let isPinching = false;
let pinchStartDistance = 0;
let pinchStartZoom = 1.0;
let pinchWorldAnchorX = 0;
let pinchWorldAnchorY = 0;

let isStagePanning = false;
let stagePanStartClientX = 0;
let stagePanStartClientY = 0;
let stagePanStartPanX = 0;
let stagePanStartPanY = 0;

let activeDraggingCard = null;
let cardDragInitialLeft = 0;
let cardDragInitialTop = 0;
let cardDragStartClientX = 0;
let cardDragStartClientY = 0;
let cardDragHasMoved = false;
let cardFollowerInitialPositions = [];

let tertiaryEngineBound = false;

function applyTertiaryTransform() {
  const world = document.getElementById('tertiary-canvas-world');
  if (!world) return;
  world.style.transform = 'translate3d(' + window.tertiaryPanX + 'px, ' + window.tertiaryPanY + 'px, 0) scale(' + window.tertiaryZoom + ')';
  world.style.transformOrigin = '0 0';
  const badge = document.getElementById('tertiary-zoom-badge');
  if (badge) badge.textContent = Math.round(window.tertiaryZoom * 100) + '%';
}

function zoomTertiaryCanvas(factor) {
  const stage = document.getElementById('tertiary-canvas-stage');
  if (!stage) return;
  const oldZoom = window.tertiaryZoom || 1.0;
  const newZoom = Math.min(3.0, Math.max(0.25, oldZoom * factor));
  const centerX = stage.clientWidth / 2;
  const centerY = stage.clientHeight / 2;
  const worldX = (centerX - window.tertiaryPanX) / oldZoom;
  const worldY = (centerY - window.tertiaryPanY) / oldZoom;
  window.tertiaryZoom = newZoom;
  window.tertiaryPanX = centerX - worldX * newZoom;
  window.tertiaryPanY = centerY - worldY * newZoom;
  applyTertiaryTransform();
}

function resetTertiaryCanvasZoom() {
  window.tertiaryZoom = 1.0;
  window.tertiaryPanX = 60;
  window.tertiaryPanY = 40;
  applyTertiaryTransform();
  showIslandToast('🔍 已恢复 100% 原始比例');
}

function fitCanvasView() {
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
}

// 快速更新 SVG 连线 (仅修改 path 的 d 属性，不重绘整个 DOM，保障 60/120fps 流畅度)
function updateTertiaryEdgesFast() {
  const linesGroup = document.getElementById('tertiary-lines-group');
  if (!linesGroup) return;
  const edges = window.TERTIARY_EDGES || [];
  edges.forEach(e => {
    const pathEl = document.getElementById('svg-line-' + e.id);
    const labelEl = document.getElementById('edge-label-' + e.id);
    const sEl = document.getElementById(e.sourceId);
    const tEl = document.getElementById(e.targetId);
    if (!pathEl || !sEl || !tEl) return;
    const sLeft = parseInt(sEl.style.left, 10) || sEl.offsetLeft;
    const sTop = parseInt(sEl.style.top, 10) || sEl.offsetTop;
    const sWidth = sEl.offsetWidth || 340;
    const sHeight = sEl.offsetHeight || 220;
    const tLeft = parseInt(tEl.style.left, 10) || tEl.offsetLeft;
    const tTop = parseInt(tEl.style.top, 10) || tEl.offsetTop;
    const tWidth = tEl.offsetWidth || 340;
    const tHeight = tEl.offsetHeight || 220;

    let x1, y1, x2, y2;
    if (sLeft + sWidth < tLeft) {
      x1 = sLeft + sWidth; y1 = sTop + sHeight / 2;
      x2 = tLeft; y2 = tTop + tHeight / 2;
    } else if (tLeft + tWidth < sLeft) {
      x1 = sLeft; y1 = sTop + sHeight / 2;
      x2 = tLeft + tWidth; y2 = tTop + tHeight / 2;
    } else {
      x1 = sLeft + sWidth / 2; y1 = sTop + sHeight;
      x2 = tLeft + tWidth / 2; y2 = tTop;
    }

    const dx = Math.abs(x2 - x1) * 0.5;
    const d = 'M ' + x1 + ' ' + y1 + ' C ' + (x1 + dx) + ' ' + y1 + ', ' + (x2 - dx) + ' ' + y2 + ', ' + x2 + ' ' + y2;
    pathEl.setAttribute('d', d);

    if (labelEl) {
      labelEl.style.left = ((x1 + x2) / 2) + 'px';
      labelEl.style.top = ((y1 + y2) / 2) + 'px';
    }
  });
}

function initTertiaryCanvasPanZoom() {
  const stage = document.getElementById('tertiary-canvas-stage');
  const view = document.getElementById('tertiary-workspace-view');
  if (!stage) return;
  applyTertiaryTransform();
  if (tertiaryEngineBound) return;
  tertiaryEngineBound = true;

  // 1. 鼠标滚轮自由缩放 (以鼠标光标所在点为缩放中心)
  stage.addEventListener('wheel', (e) => {
    e.preventDefault();
    const rect = stage.getBoundingClientRect();
    const cursorStageX = e.clientX - rect.left;
    const cursorStageY = e.clientY - rect.top;
    const oldZoom = window.tertiaryZoom || 1.0;
    const factor = e.deltaY < 0 ? 1.12 : 0.88;
    const newZoom = Math.min(3.0, Math.max(0.25, oldZoom * factor));
    const worldX = (cursorStageX - window.tertiaryPanX) / oldZoom;
    const worldY = (cursorStageY - window.tertiaryPanY) / oldZoom;
    window.tertiaryZoom = newZoom;
    window.tertiaryPanX = cursorStageX - worldX * newZoom;
    window.tertiaryPanY = cursorStageY - worldY * newZoom;
    applyTertiaryTransform();
  }, { passive: false });

  // 2. 全局统一 Pointerdown (支持鼠标、手写笔、单指和多指双指捏合)
  stage.addEventListener('pointerdown', (e) => {
    // 忽略按钮、输入框、连线锚点与工具条
    if (e.target.closest('button, input, select, textarea, .work-card-connect-handle, .a-my-island-graph-tool, .ws-nav-back-btn, .a-my-island-work-minimap')) {
      return;
    }

    activePointers.set(e.pointerId, { x: e.clientX, y: e.clientY });

    // 情况 A: 屏幕上出现 2 个触控点 -> 无论是否落在卡片上，立即触发【双指捏合无级缩放】
    if (activePointers.size === 2) {
      // 立即中断任何正在进行的单卡片拖拽
      if (activeDraggingCard) {
        try { activeDraggingCard.releasePointerCapture(e.pointerId); } catch (_) {}
        activeDraggingCard.classList.remove('is-card-dragging');
        activeDraggingCard = null;
      }
      isStagePanning = false;
      isPinching = true;
      if (view) view.classList.add('is-viewport-moving');

      const pts = Array.from(activePointers.values());
      pinchStartDistance = Math.hypot(pts[1].x - pts[0].x, pts[1].y - pts[0].y);
      pinchStartZoom = window.tertiaryZoom || 1.0;

      const rect = stage.getBoundingClientRect();
      const midStageX = (pts[0].x + pts[1].x) / 2 - rect.left;
      const midStageY = (pts[0].y + pts[1].y) / 2 - rect.top;
      pinchWorldAnchorX = (midStageX - window.tertiaryPanX) / pinchStartZoom;
      pinchWorldAnchorY = (midStageY - window.tertiaryPanY) / pinchStartZoom;
      return;
    }

    // 情况 B: 单指触控落在卡片上 -> 启动卡片拖拽
    const card = e.target.closest('.tertiary-card');
    if (card && activePointers.size === 1) {
      activeDraggingCard = card;
      cardDragHasMoved = false;
      cardDragStartClientX = e.clientX;
      cardDragStartClientY = e.clientY;
      cardDragInitialLeft = parseInt(card.style.left, 10) || card.offsetLeft;
      cardDragInitialTop = parseInt(card.style.top, 10) || card.offsetTop;
      cardFollowerInitialPositions = [];
      if (typeof childrenFollowEnabled !== 'undefined' && childrenFollowEnabled && card.id) {
        getDownstreamChildCardIds(card.id).forEach(cid => {
          const childEl = document.getElementById(cid);
          if (childEl) {
            cardFollowerInitialPositions.push({
              el: childEl,
              left: parseInt(childEl.style.left, 10) || childEl.offsetLeft,
              top: parseInt(childEl.style.top, 10) || childEl.offsetTop
            });
          }
        });
      }
      card.classList.add('is-card-dragging');
      try { card.setPointerCapture(e.pointerId); } catch (_) {}
      return;
    }

    // 情况 C: 单指触控落在画布空白背景上 -> 启动画布抓手平移
    if (activePointers.size === 1) {
      isStagePanning = true;
      stagePanStartClientX = e.clientX;
      stagePanStartClientY = e.clientY;
      stagePanStartPanX = window.tertiaryPanX;
      stagePanStartPanY = window.tertiaryPanY;
      stage.classList.add('is-dragging-canvas');
      if (view) view.classList.add('is-viewport-moving');
      try { stage.setPointerCapture(e.pointerId); } catch (_) {}
    }
  });

  // 3. 全局统一 Pointermove (平滑执行双指缩放、画布平移或卡片拖拽)
  stage.addEventListener('pointermove', (e) => {
    if (!activePointers.has(e.pointerId)) return;
    activePointers.set(e.pointerId, { x: e.clientX, y: e.clientY });

    // 处理双指缩放与平移 (Pinch-to-zoom)
    if (isPinching && activePointers.size >= 2) {
      const pts = Array.from(activePointers.values());
      const currentDist = Math.hypot(pts[1].x - pts[0].x, pts[1].y - pts[0].y);
      if (pinchStartDistance > 0) {
        const factor = currentDist / pinchStartDistance;
        const newZoom = Math.min(3.0, Math.max(0.25, pinchStartZoom * factor));
        const rect = stage.getBoundingClientRect();
        const currentMidStageX = (pts[0].x + pts[1].x) / 2 - rect.left;
        const currentMidStageY = (pts[0].y + pts[1].y) / 2 - rect.top;
        window.tertiaryZoom = newZoom;
        window.tertiaryPanX = currentMidStageX - pinchWorldAnchorX * newZoom;
        window.tertiaryPanY = currentMidStageY - pinchWorldAnchorY * newZoom;
        applyTertiaryTransform();
      }
      return;
    }

    // 处理画布单指抓手平移
    if (isStagePanning && activePointers.size === 1) {
      const dx = e.clientX - stagePanStartClientX;
      const dy = e.clientY - stagePanStartClientY;
      window.tertiaryPanX = stagePanStartPanX + dx;
      window.tertiaryPanY = stagePanStartPanY + dy;
      applyTertiaryTransform();
      return;
    }

    // 处理单张卡片精准拖拽
    if (activeDraggingCard && activePointers.size === 1) {
      const zoom = window.tertiaryZoom || 1.0;
      const dx = (e.clientX - cardDragStartClientX) / zoom;
      const dy = (e.clientY - cardDragStartClientY) / zoom;
      if (!cardDragHasMoved && (Math.abs(dx) > 3 || Math.abs(dy) > 3)) {
        cardDragHasMoved = true;
        if (typeof pushTertiaryHistory === 'function') pushTertiaryHistory();
      }
      const targetLeft = Math.max(10, cardDragInitialLeft + dx);
      const targetTop = Math.max(10, cardDragInitialTop + dy);
      activeDraggingCard.style.left = targetLeft + 'px';
      activeDraggingCard.style.top = targetTop + 'px';
      cardFollowerInitialPositions.forEach(f => {
        f.el.style.left = Math.max(10, f.left + dx) + 'px';
        f.el.style.top = Math.max(10, f.top + dy) + 'px';
      });
      updateTertiaryEdgesFast();
    }
  });

  // 4. 全局统一 Pointerup & Pointercancel
  const onPointerEnd = (e) => {
    activePointers.delete(e.pointerId);

    if (activePointers.size < 2 && isPinching) {
      isPinching = false;
      if (view) view.classList.remove('is-viewport-moving');
    }

    if (isStagePanning) {
      isStagePanning = false;
      stage.classList.remove('is-dragging-canvas');
      if (view) view.classList.remove('is-viewport-moving');
      try { stage.releasePointerCapture(e.pointerId); } catch (_) {}
    }

    if (activeDraggingCard) {
      try { activeDraggingCard.releasePointerCapture(e.pointerId); } catch (_) {}
      activeDraggingCard.classList.remove('is-card-dragging');
      activeDraggingCard = null;
      if (cardDragHasMoved) {
        renderTertiaryEdges();
        if (typeof saveCurrentProjectCanvasSnapshot === 'function') {
          saveCurrentProjectCanvasSnapshot();
        }
      }
    }
  };

  stage.addEventListener('pointerup', onPointerEnd);
  stage.addEventListener('pointercancel', onPointerEnd);
}
`;

// Replace the previous initTertiaryCanvasPanZoom block
const startMarker = "// ==========================================================================\n// 终身岛民 1:1 工作图谱多点触控与自由缩放手势引擎";
const endMarker = "function initTertiaryWorkspace() {";

if (html.includes(startMarker)) {
  const p1 = html.indexOf(startMarker);
  const p2 = html.indexOf(endMarker);
  html = html.slice(0, p1) + unifiedGestureEngineCode + "\n" + html.slice(p2);
  console.log("Replaced gesture engine with unified multi-touch pointer engine.");
} else {
  // Replace previous panZoomEngineCode block
  const oldMarker = "window.tertiaryZoom = 1.0;\nwindow.tertiaryPanX = 60;";
  const p1 = html.indexOf(oldMarker);
  const p2 = html.indexOf(endMarker);
  if (p1 !== -1 && p2 !== -1) {
    html = html.slice(0, p1) + unifiedGestureEngineCode + "\n" + html.slice(p2);
    console.log("Replaced old panZoomEngineCode with unified multi-touch pointer engine.");
  }
}

// 3. Make bindTertiaryCardsDrag a no-op since unified pointer listener on stage manages cards with setPointerCapture
const oldBindDrag = `function bindTertiaryCardsDrag() {
  const cards = document.querySelectorAll('.tertiary-card');
  cards.forEach(card => {
    bindCardDragSingle(card);
  });
}`;

const newBindDrag = `function bindTertiaryCardsDrag() {
  // 统一由 initTertiaryCanvasPanZoom 的 Pointer Tracker 高性能统一代理，避免冗余全局事件挂载
}`;

if (html.includes(oldBindDrag)) {
  html = html.replace(oldBindDrag, newBindDrag);
  console.log("Simplified bindTertiaryCardsDrag to delegate to unified pointer engine.");
}

// 4. In renderTertiaryEdges, generate id on path: id="svg-line-" + e.id
html = html.replace(
  `'<path d="' + d + '" fill="none" stroke="' + e.color + '"',`,
  `'<path id="svg-line-' + e.id + '" d="' + d + '" fill="none" stroke="' + e.color + '"',`
);
html = html.replace(
  `'<path d="' + d + '" fill="none" stroke="' + strokeColor + '"',`,
  `'<path id="svg-line-' + e.id + '" d="' + d + '" fill="none" stroke="' + strokeColor + '"',`
);

fs.writeFileSync(PROTO_PATH, html, "utf8");
console.log("Applied unified multi-touch and pointer engine successfully!");
