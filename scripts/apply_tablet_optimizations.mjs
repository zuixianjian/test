import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const PROTO_PATH = path.join(ROOT, "high_fidelity_ui_preview.html");

let html = fs.readFileSync(PROTO_PATH, "utf8").replace(/\r\n/g, "\n");

// =========================================================================
// 1. Problem 1: 执行视图上方的目标卡片样式 1:1 匹配设计图
// =========================================================================

// Fix renderHomeSemesterGoalsBanner to generate exact classes matching .island-goal-item-card
const oldBannerCode = `  listEl.innerHTML = activeProjs.slice(0, 6).map(p => {
    const res = typeof computeProjectProgressAndStatus === 'function'
      ? computeProjectProgressAndStatus(p)
      : { progress: 50, completedCount: (p.completedDays || []).length, totalDays: 10 };
    const cm = badgeColors[p.category] || { bg: '#fef3c7', color: '#b45309', bar: '#d97706' };
    const pavMeta = (typeof PAVILION_META !== 'undefined' && PAVILION_META[p.pavilion])
      ? PAVILION_META[p.pavilion]
      : { name: p.category || '规划馆', icon: '🎯' };
    const safeTitle = String(p.title || '').replace(/"/g, '&quot;');
    return '<div class="island-goal-item" onclick="enterSecondaryWorkspace(\\'' + (p.pavilion || 'study') + '\\', \\'gantt\\')" title="点击进入【' + (pavMeta.name || p.category) + '】甘特规划沙盘">' +
      '<div class="goal-item-top">' +
        '<span class="goal-pav-badge" style="background:' + cm.bg + '; color:' + cm.color + ';">' + (pavMeta.icon || '🎯') + ' ' + (pavMeta.name || p.category) + '</span>' +
        '<span class="goal-target-title">' + safeTitle + '</span>' +
        '<span class="goal-pct-text" style="color:' + cm.color + ';">' + res.progress + '%</span>' +
      '</div>' +
      '<div class="goal-progress-track"><div class="goal-progress-fill" style="width:' + res.progress + '%; background:' + cm.bar + ';"></div></div>' +
      '<div class="goal-item-sub"><span>周期: ' + String(p.startDate || '').slice(5) + '~' + String(p.endDate || '').slice(5) + '</span><span>已达标 ' + res.completedCount + '/' + res.totalDays + ' 天</span></div>' +
    '</div>';
  }).join('');`;

const newBannerCode = `  listEl.innerHTML = activeProjs.slice(0, 3).map(p => {
    const res = typeof computeProjectProgressAndStatus === 'function'
      ? computeProjectProgressAndStatus(p)
      : { progress: 50, completedCount: (p.completedDays || []).length, totalDays: 10 };
    const cm = badgeColors[p.category] || { bg: '#fef3c7', color: '#b45309', bar: '#d97706' };
    const pavMeta = (typeof PAVILION_META !== 'undefined' && PAVILION_META[p.pavilion])
      ? PAVILION_META[p.pavilion]
      : { name: p.category || '学业', icon: '📐' };
    const safeTitle = String(p.title || '').replace(/"/g, '&quot;');
    const safeDesc = String(p.desc || '稳步推进阶段量化攻坚').replace(/"/g, '&quot;');
    return '<div class="island-goal-item-card" onclick="enterSecondaryWorkspace(\\'' + (p.pavilion || 'study') + '\\', \\'gantt\\')" title="点击直达【' + (pavMeta.name || p.category) + '】甘特总览规划">' +
      '<div class="goal-card-top-row">' +
        '<span class="goal-card-pav-tag" style="background:' + cm.bg + '; color:' + cm.color + ';">' + (pavMeta.icon || '🎯') + ' ' + (pavMeta.name || p.category) + '</span>' +
        '<span class="goal-card-pct-badge" style="color:' + cm.bar + ';">' + res.progress + '% (' + res.completedCount + '/' + res.totalDays + '天)</span>' +
      '</div>' +
      '<div class="goal-card-title">🎯 《' + safeTitle + '》</div>' +
      '<div class="goal-card-bottom-row">' +
        '<span class="goal-card-desc-text">' + safeDesc + '</span>' +
        '<div class="goal-card-progress-track"><div class="goal-card-progress-bar" style="width:' + res.progress + '%; background:' + cm.bar + ';"></div></div>' +
      '</div>' +
    '</div>';
  }).join('');`;

if (html.includes(oldBannerCode)) {
  html = html.replace(oldBannerCode, newBannerCode);
  console.log("Updated renderHomeSemesterGoalsBanner to 1:1 design markup.");
}

// In HTML initial markup of #island-goal-cards-list, ensure grid-column: 1 / -1 on empty container
html = html.replace(
  `<div style="display:flex; align-items:center; justify-content:center; gap:8px; width:100%; padding:10px 16px; color:#8c6b45; font-size:12px; font-weight:700;">\n        <span>🌱 暂无进行中的学期规划项目</span>`,
  `<div style="grid-column: 1 / -1; display:flex; align-items:center; justify-content:center; gap:8px; width:100%; padding:10px 16px; color:#8c6b45; font-size:12px; font-weight:700;">\n        <span>🌱 暂无进行中的学期规划项目</span>`
);

// =========================================================================
// 2. Problem 2: 顶部栏目中的悬赏卡片隐藏
// =========================================================================

// Hide #home-bounty-billboard in HTML markup initially
html = html.replace(
  '<div class="parent-bounty-billboard" id="home-bounty-billboard" onclick="openBountyModal()" title="点击查看置顶家长悬赏令详情与应战协议">',
  '<div class="parent-bounty-billboard" id="home-bounty-billboard" onclick="openBountyModal()" title="点击查看置顶家长悬赏令详情与应战协议" style="display:none;">'
);

// In renderBountyModalAndBillboard, hide billboard when !b and show when b exists
const oldBountyFnHead = `function renderBountyModalAndBillboard() {
  const b = window.BOUNTY_STATE;
  const hTitle = document.getElementById('home-bounty-title');
  const hTimer = document.getElementById('home-bounty-timer');
  const hReward = document.getElementById('home-bounty-reward');
  const hCta = document.getElementById('home-bounty-cta');
  const hAuthor = document.getElementById('home-bounty-author');

  if (!b) {`;

const newBountyFnHead = `function renderBountyModalAndBillboard() {
  const b = window.BOUNTY_STATE;
  const billboard = document.getElementById('home-bounty-billboard');
  const hTitle = document.getElementById('home-bounty-title');
  const hTimer = document.getElementById('home-bounty-timer');
  const hReward = document.getElementById('home-bounty-reward');
  const hCta = document.getElementById('home-bounty-cta');
  const hAuthor = document.getElementById('home-bounty-author');

  if (!b) {
    if (billboard) billboard.style.display = 'none';`;

if (html.includes(oldBountyFnHead)) {
  html = html.replace(oldBountyFnHead, newBountyFnHead);
  console.log("Updated renderBountyModalAndBillboard to hide billboard when no bounty.");
}

// When b exists, show billboard
html = html.replace(
  `  // 1. 同步顶栏告示牌\n  const hTitle = document.getElementById('home-bounty-title');`,
  `  // 1. 同步顶栏告示牌 (有悬赏时才在顶栏显示)\n  if (billboard) billboard.style.display = 'flex';\n  const hTitle = document.getElementById('home-bounty-title');`
);

// =========================================================================
// 3. Problem 3: 周看板和月日历全屏展示（脱离目标卡片下方）
// =========================================================================

// In switchExecSubView(view): hide #island-goal-cards-dock when in week/month view
const oldSwitchExec = `function switchExecSubView(view) {
  currentExecSubView = view;
  ['day', 'week', 'month'].forEach(v => {
    const btn = document.getElementById('btn-exec-' + v);
    const pane = document.getElementById('exec-subview-' + v);
    if (btn) btn.classList.toggle('active', v === view);
    if (pane) pane.classList.toggle('active', v === view);
  });`;

const newSwitchExec = `function switchExecSubView(view) {
  currentExecSubView = view;
  const goalDock = document.getElementById('island-goal-cards-dock');
  if (goalDock) {
    goalDock.style.display = (view === 'day') ? '' : 'none';
  }
  ['day', 'week', 'month'].forEach(v => {
    const btn = document.getElementById('btn-exec-' + v);
    const pane = document.getElementById('exec-subview-' + v);
    if (btn) btn.classList.toggle('active', v === view);
    if (pane) pane.classList.toggle('active', v === view);
  });`;

if (html.includes(oldSwitchExec)) {
  html = html.replace(oldSwitchExec, newSwitchExec);
  console.log("Updated switchExecSubView to toggle goal dock display.");
}

// In CSS: update #exec-subview-week and #exec-subview-month to be 100% full screen
const oldWeekMonthCss = `#exec-subview-week,
#exec-subview-month {
  background: rgba(255, 254, 246, 0.92) !important;
  border: 2px solid #ecd9b8 !important;
  border-radius: 22px !important;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25) !important;
  backdrop-filter: blur(12px) !important;
  -webkit-backdrop-filter: blur(12px) !important;
  margin: 6px 16px !important;
  box-sizing: border-box !important;
}`;

const newWeekMonthCss = `#exec-subview-week,
#exec-subview-month {
  position: absolute !important;
  inset: 0 !important;
  width: 100% !important;
  height: 100% !important;
  margin: 0 !important;
  padding: 10px 16px 16px !important;
  border-radius: 0 !important;
  border: none !important;
  background: rgba(255, 254, 246, 0.96) !important;
  backdrop-filter: blur(12px) !important;
  -webkit-backdrop-filter: blur(12px) !important;
  box-sizing: border-box !important;
  overflow: hidden !important;
  z-index: 30 !important;
  display: none;
}

#exec-subview-week.active,
#exec-subview-month.active {
  display: flex !important;
  flex-direction: column !important;
}

#week-board-columns-container {
  flex: 1 !important;
  height: calc(100% - 50px) !important;
  min-height: 0 !important;
  display: flex !important;
  gap: 10px !important;
  overflow-x: auto !important;
  overflow-y: hidden !important;
  padding-bottom: 8px !important;
}

#month-calendar-grid {
  flex: 1 !important;
  height: calc(100% - 50px) !important;
  min-height: 0 !important;
  overflow-y: auto !important;
  padding-bottom: 8px !important;
}`;

if (html.includes(oldWeekMonthCss)) {
  html = html.replace(oldWeekMonthCss, newWeekMonthCss);
  console.log("Updated #exec-subview-week and #exec-subview-month to full viewport CSS.");
}

// =========================================================================
// 4. Mindmap drag performance
// =========================================================================

// Optimize tertiary drag performance using requestAnimationFrame and touch-action: none
const oldDragFn = `  const onPointerMove = (e) => {
    if (!isDragging) return;
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const clientY = e.clientY || (e.touches && e.touches[0].clientY);
    const dx = clientX - startX;
    const dy = clientY - startY;
    if (!hasMoved && (Math.abs(dx) > 3 || Math.abs(dy) > 3)) {
      hasMoved = true;
      pushTertiaryHistory();
    }
    card.style.left = Math.max(10, initialLeft + dx) + 'px';
    card.style.top = Math.max(10, initialTop + dy) + 'px';
    followerInitialPositions.forEach(f => {
      f.el.style.left = Math.max(10, f.left + dx) + 'px';
      f.el.style.top = Math.max(10, f.top + dy) + 'px';
    });
    renderTertiaryEdges();
  };`;

const newDragFn = `  let rafPending = false;
  let targetLeft = 0;
  let targetTop = 0;

  const onPointerMove = (e) => {
    if (!isDragging) return;
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const clientY = e.clientY || (e.touches && e.touches[0].clientY);
    const dx = clientX - startX;
    const dy = clientY - startY;
    if (!hasMoved && (Math.abs(dx) > 3 || Math.abs(dy) > 3)) {
      hasMoved = true;
      pushTertiaryHistory();
    }
    targetLeft = Math.max(10, initialLeft + dx);
    targetTop = Math.max(10, initialTop + dy);

    if (!rafPending) {
      rafPending = true;
      requestAnimationFrame(() => {
        card.style.left = targetLeft + 'px';
        card.style.top = targetTop + 'px';
        followerInitialPositions.forEach(f => {
          f.el.style.left = Math.max(10, f.left + dx) + 'px';
          f.el.style.top = Math.max(10, f.top + dy) + 'px';
        });
        renderTertiaryEdges();
        rafPending = false;
      });
    }
  };`;

if (html.includes(oldDragFn)) {
  html = html.replace(oldDragFn, newDragFn);
  console.log("Optimized tertiary card drag with requestAnimationFrame.");
}

// Add touch-action: none and will-change to .tertiary-card in CSS
html = html.replace(
  `.tertiary-card {`,
  `.tertiary-card {
  touch-action: none !important;
  will-change: left, top !important;`
);

fs.writeFileSync(PROTO_PATH, html, "utf8");
console.log("All tablet optimizations successfully written to high_fidelity_ui_preview.html!");
