import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const PROTO_PATH = path.join(ROOT, "high_fidelity_ui_preview.html");

let html = fs.readFileSync(PROTO_PATH, "utf8").replace(/\r\n/g, "\n");

// 1. Move #note-media-preview-modal from before <!DOCTYPE html> into <body>
const modalStartIdx = html.indexOf('<div id="note-media-preview-modal"');
const doctypeIdx = html.indexOf('<!DOCTYPE html>');
let modalHtml = '';

if (modalStartIdx >= 0 && modalStartIdx < doctypeIdx) {
  const modalEndIdx = html.indexOf('</div>\n</div>\n</div>', modalStartIdx);
  const actualEndIdx = modalEndIdx >= 0 ? modalEndIdx + '</div>\n</div>\n</div>'.length : html.indexOf('</div>\n</div>', modalStartIdx) + '</div>\n</div>'.length;
  // Let's accurately slice the modal HTML
  const endMarker = '</div>\n</div>\n</div>';
  const endPos = html.indexOf(endMarker, modalStartIdx);
  if (endPos > 0 && endPos < doctypeIdx) {
    modalHtml = html.slice(modalStartIdx, endPos + endMarker.length);
    html = html.slice(0, modalStartIdx) + html.slice(endPos + endMarker.length);
  }
}

// Clean any leading blank lines or comment before <!DOCTYPE html>
html = html.replace(/^[\s\S]*?(<!DOCTYPE html>)/, '$1');

// Place #note-media-preview-modal inside <body> right before bounty modal
const bountyModalMarker = '<!-- =========================================================================\n       家长置顶悬赏挑战契约书专属拟物弹窗 (#bounty-modal-backdrop';
if (modalHtml && html.includes(bountyModalMarker)) {
  html = html.replace(
    bountyModalMarker,
    `<!-- ===================================================================== -->\n<!-- 每日随记【影像物证全屏查阅】弹窗 (#note-media-preview-modal)          -->\n<!-- ===================================================================== -->\n${modalHtml}\n\n       ${bountyModalMarker}`
  );
}

console.log("Step 1 complete: Moved #note-media-preview-modal into <body>.");

// 2. CSS adjustments
// Bottom padding on .island-exec-center-container
html = html.replace(/bottom:\s*76px;/g, 'bottom: 96px !important;');
html = html.replace(/bottom:\s*84px\s*!important;/g, 'bottom: 96px !important;');

// Gantt table column width & operation column width
html = html.replace(/width:\s*580px;\s*min-width:\s*580px;/g, 'width: 630px; min-width: 630px;');
html = html.replace(/\.col-head-ops\s*\{\s*width:\s*116px;/g, '.col-head-ops { width: 165px;');
html = html.replace(/\.col-cell-ops\s*\{\s*width:\s*116px;/g, '.col-cell-ops { width: 165px;');

// Gantt operation buttons padding and flex-shrink
html = html.replace(
  /\.gantt-op-btn\s*\{([^}]+)\}/,
  `.gantt-op-btn {
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  height: 26px !important;
  padding: 0 6px !important;
  font-size: 11px !important;
  white-space: nowrap !important;
  flex-shrink: 0 !important;$1}`
);

console.log("Step 2 complete: Adjusted CSS container bounds and gantt op column.");

// 3. HTML topbar clean default numbers & bounty billboard
html = html.replace(
  /<span id="hud-streak-count">连续\s*\d+\s*天<\/span>/,
  '<span id="hud-streak-count">连续 0 天</span>'
);
html = html.replace(
  /<span id="hud-rate-percent">履约\s*\d+%\<\/span>/,
  '<span id="hud-rate-percent">履约 100%</span>'
);
html = html.replace(
  /<span class="stat-pill-val gold" id="exec-stat-progress">\d+\/\d+<\/span>/,
  '<span class="stat-pill-val gold" id="exec-stat-progress">0/0</span>'
);
html = html.replace(
  /<span class="bounty-title-text" id="home-bounty-title">[^<]+<\/span>/,
  '<span class="bounty-title-text" id="home-bounty-title">暂无进行中的悬赏契约</span>'
);
html = html.replace(
  /<span class="bounty-timer-pill" id="home-bounty-timer">[^<]+<\/span>/,
  '<span class="bounty-timer-pill" id="home-bounty-timer">⏱️ 等待张榜</span>'
);
html = html.replace(
  /<span class="bounty-gold-highlight" id="home-bounty-reward">[^<]+<\/span>/,
  '<span class="bounty-gold-highlight" id="home-bounty-reward">🎁 点击可发布新契约</span>'
);
html = html.replace(
  /<span class="bounty-author-tag" id="home-bounty-author">[^<]+<\/span>/,
  '<span class="bounty-author-tag" id="home-bounty-author">👨‍👩‍👦 亲子公约</span>'
);
html = html.replace(
  /<span class="bounty-cta-hint" id="home-bounty-cta">[^<]+<\/span>/,
  '<span class="bounty-cta-hint" id="home-bounty-cta">去发布 ›</span>'
);

// 4. HTML #island-goal-cards-list clean empty state
const goalListStart = html.indexOf('<div id="island-goal-cards-list" class="island-goal-cards-list">');
if (goalListStart >= 0) {
  const goalListEnd = html.indexOf('</div>\n  </div>\n\n  <!-- ====', goalListStart);
  if (goalListEnd >= 0) {
    const emptyGoalListHtml = `<div id="island-goal-cards-list" class="island-goal-cards-list">\n      <div style="display:flex; align-items:center; justify-content:center; gap:8px; width:100%; padding:10px 16px; color:#8c6b45; font-size:12px; font-weight:700;">\n        <span>🌱 暂无进行中的学期规划项目</span>\n        <button type="button" class="card-graphic-pill pill-timer" onclick="switchMainSection('ws'); openAddProjectModal();" style="padding:2px 10px; font-size:11px; cursor:pointer;">➕ 立即立项</button>\n      </div>\n    `;
    html = html.slice(0, goalListStart) + emptyGoalListHtml + html.slice(goalListEnd);
  }
}

// 5. HTML #day-card-deck clean empty state
const deckStart = html.indexOf('<div class="exec-card-deck" id="day-card-deck">');
if (deckStart >= 0) {
  const deckEnd = html.indexOf('</div>\n    </div>\n\n    <!-- 底部轮播滑动点', deckStart);
  if (deckEnd >= 0) {
    const emptyDeckHtml = `<div class="exec-card-deck" id="day-card-deck">\n        <div class="exec-card-empty-placeholder" id="day-deck-empty-placeholder" style="display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; padding:36px 20px; background:linear-gradient(135deg, rgba(255, 252, 243, 0.96), rgba(254, 243, 199, 0.94)); border:2px dashed #b8b68e; border-radius:24px; box-shadow:0 10px 28px rgba(0,0,0,0.15); width:460px; max-width:90%; margin:auto;">\n          <span style="font-size:42px; margin-bottom:10px;">🏝️</span>\n          <h3 style="font-size:17px; font-weight:900; color:#60401f; margin:0 0 6px 0;">今日暂无待办事项</h3>\n          <p style="font-size:12px; color:#8c6b45; line-height:1.5; margin:0 0 16px 0;">点击下方启动台进入【校史馆】、【武道馆】、【思辨馆】或【修身阁】建立成长规划，或点击上方告示牌发布家长悬赏契约，任务将自动同步至今日待办！</p>\n          <button type="button" class="card-graphic-pill pill-timer" style="padding:6px 18px; font-size:12px; font-weight:900; cursor:pointer;" onclick="switchHomeGlobalView('planning')">🧭 前往规划新课题</button>\n        </div>\n      `;
    html = html.slice(0, deckStart) + emptyDeckHtml + html.slice(deckEnd);
  }
}

// Hide #exec-carousel-dots initially when deck is empty
html = html.replace(
  '<div class="exec-carousel-pagination" id="exec-carousel-dots">',
  '<div class="exec-carousel-pagination" id="exec-carousel-dots" style="display:none;">'
);

console.log("Step 3 & 4 & 5 complete: Topbar, goal dock, and day card deck initialized to clean state.");

// 6. JavaScript State Initializations in high_fidelity_ui_preview.html

// USER_PROFILE_STATE clean
const userProfileTarget = `window.USER_PROFILE_STATE = {
  streakDays: 18,
  streakIncrementedToday: false,
  completedTodayCount: 2,
  totalTodayCount: 5,
  baseFulfillmentRate: 96,
  violationCount: 0,
  violationRecords: [],
  checkedTaskKeys: {}
};`;

const userProfileReplacement = `window.USER_PROFILE_STATE = {
  streakDays: 0,
  streakIncrementedToday: false,
  completedTodayCount: 0,
  totalTodayCount: 0,
  baseFulfillmentRate: 100,
  violationCount: 0,
  violationRecords: [],
  checkedTaskKeys: {}
};`;

if (html.includes(userProfileTarget)) {
  html = html.replace(userProfileTarget, userProfileReplacement);
}

// computeCurrentFulfillmentRate
const computeRateTarget = `function computeCurrentFulfillmentRate() {
  const st = window.USER_PROFILE_STATE;
  const bonus = Math.min(4, Math.max(0, st.completedTodayCount - 2) * 2);
  const raw = Math.min(100, st.baseFulfillmentRate + bonus);
  return Math.max(0, raw - (st.violationCount || 0) * 5);
}`;

const computeRateReplacement = `function computeCurrentFulfillmentRate() {
  const st = window.USER_PROFILE_STATE || { streakDays: 0, completedTodayCount: 0, totalTodayCount: 0, baseFulfillmentRate: 100, violationCount: 0 };
  if (!st.totalTodayCount || st.totalTodayCount === 0) {
    return Math.max(0, 100 - (st.violationCount || 0) * 5);
  }
  const pct = Math.round((st.completedTodayCount / st.totalTodayCount) * 100);
  return Math.max(0, Math.min(100, pct - (st.violationCount || 0) * 5));
}`;

if (html.includes(computeRateTarget)) {
  html = html.replace(computeRateTarget, computeRateReplacement);
}

// recalcAndRenderGlobalHUD
const recalcHudTarget = `function recalcAndRenderGlobalHUD() {
  const st = window.USER_PROFILE_STATE;
  const rate = computeCurrentFulfillmentRate();
  const streakEl = document.getElementById('hud-streak-count');
  if (streakEl) streakEl.textContent = st.streakDays + '天';
  const rateEl = document.getElementById('hud-rate-percent');
  if (rateEl) {
    rateEl.textContent = rate + '%';
    rateEl.style.color = st.violationCount > 0 ? '#dc2626' : '';
  }
  const statProg = document.getElementById('exec-stat-progress');
  if (statProg) {
    statProg.textContent = st.completedTodayCount + '/' + st.totalTodayCount;
  }
  const pactBadge = document.getElementById('pact-current-rate-badge');
  if (pactBadge) {
    pactBadge.textContent = '当前综合履约率：' + rate + '%（累计违约 ' + st.violationCount + ' 次）';
  }
}`;

const recalcHudReplacement = `function recalcAndRenderGlobalHUD() {
  const st = window.USER_PROFILE_STATE || { streakDays: 0, completedTodayCount: 0, totalTodayCount: 0, baseFulfillmentRate: 100, violationCount: 0 };
  const rate = computeCurrentFulfillmentRate();
  const streakEl = document.getElementById('hud-streak-count');
  if (streakEl) streakEl.textContent = '连续 ' + (st.streakDays || 0) + ' 天';
  const rateEl = document.getElementById('hud-rate-percent');
  if (rateEl) {
    rateEl.textContent = '履约 ' + rate + '%';
    rateEl.style.color = (st.violationCount || 0) > 0 ? '#dc2626' : '';
  }
  const statProg = document.getElementById('exec-stat-progress');
  if (statProg) {
    statProg.textContent = (st.completedTodayCount || 0) + '/' + (st.totalTodayCount || 0);
  }
  const pactBadge = document.getElementById('pact-current-rate-badge');
  if (pactBadge) {
    pactBadge.textContent = '当前综合履约率：' + rate + '%（累计违约 ' + (st.violationCount || 0) + ' 次）';
  }
}`;

if (html.includes(recalcHudTarget)) {
  html = html.replace(recalcHudTarget, recalcHudReplacement);
}

// renderHomeSemesterGoalsBanner
const renderBannerTarget = `function renderHomeSemesterGoalsBanner() {
  const listEl = document.getElementById('island-goal-cards-list');
  if (!listEl || !Array.isArray(window.GANTT_PROJECTS)) return;
  const activeProjs = window.GANTT_PROJECTS.filter(p => !p.isArchived);
  if (activeProjs.length === 0) return;`;

const renderBannerReplacement = `function renderHomeSemesterGoalsBanner() {
  const listEl = document.getElementById('island-goal-cards-list');
  if (!listEl || !Array.isArray(window.GANTT_PROJECTS)) return;
  const activeProjs = window.GANTT_PROJECTS.filter(p => !p.isArchived);
  if (activeProjs.length === 0) {
    listEl.innerHTML = '<div style="display:flex; align-items:center; justify-content:center; gap:8px; width:100%; padding:10px 16px; color:#8c6b45; font-size:12px; font-weight:700;"><span>🌱 暂无进行中的学期规划项目</span><button type="button" class="card-graphic-pill pill-timer" onclick="switchMainSection(\\'ws\\'); openAddProjectModal();" style="padding:2px 10px; font-size:11px; cursor:pointer;">➕ 立即立项</button></div>';
    return;
  }`;

if (html.includes(renderBannerTarget)) {
  html = html.replace(renderBannerTarget, renderBannerReplacement);
}

// updateDayCarousel
const updateDayTarget = `function updateDayCarousel() {
  const allCards = document.querySelectorAll('.exec-card-deck .exec-task-card');
  if (allCards.length > 0) totalDayCards = allCards.length;
  const cards = document.querySelectorAll('.exec-card-deck .exec-task-card');
  const dots = document.querySelectorAll('.exec-carousel-pagination .pagination-dot-pill');`;

const updateDayReplacement = `function updateDayCarousel() {
  const allCards = document.querySelectorAll('.exec-card-deck .exec-task-card');
  const dotsWrap = document.getElementById('exec-carousel-dots');
  const emptyPlaceholder = document.getElementById('day-deck-empty-placeholder');

  if (allCards.length === 0) {
    totalDayCards = 0;
    currentDayCardIndex = 0;
    if (dotsWrap) dotsWrap.style.display = 'none';
    if (emptyPlaceholder) emptyPlaceholder.style.display = 'flex';
    return;
  }
  if (emptyPlaceholder) emptyPlaceholder.style.display = 'none';
  if (dotsWrap) dotsWrap.style.display = 'flex';
  totalDayCards = allCards.length;
  currentDayCardIndex = Math.max(0, Math.min(currentDayCardIndex, totalDayCards - 1));
  const cards = allCards;
  const dots = document.querySelectorAll('.exec-carousel-pagination .pagination-dot-pill');`;

if (html.includes(updateDayTarget)) {
  html = html.replace(updateDayTarget, updateDayReplacement);
}

// nextDayCard & prevDayCard guards
html = html.replace(
  `function nextDayCard() {\n  currentDayCardIndex = (currentDayCardIndex + 1) % totalDayCards;\n  updateDayCarousel();\n}`,
  `function nextDayCard() {\n  if (totalDayCards <= 0) return;\n  currentDayCardIndex = (currentDayCardIndex + 1) % totalDayCards;\n  updateDayCarousel();\n}`
);
html = html.replace(
  `function prevDayCard() {\n  currentDayCardIndex = (currentDayCardIndex - 1 + totalDayCards) % totalDayCards;\n  updateDayCarousel();\n}`,
  `function prevDayCard() {\n  if (totalDayCards <= 0) return;\n  currentDayCardIndex = (currentDayCardIndex - 1 + totalDayCards) % totalDayCards;\n  updateDayCarousel();\n}`
);

// syncNewNodeToHomeExecution guard for empty placeholder
const syncHomeTarget = `  const cardEl = document.createElement('div');
  cardEl.className = 'exec-task-card tertiary-drill-card card-far-next';`;

const syncHomeReplacement = `  const placeholder = document.getElementById('day-deck-empty-placeholder');
  if (placeholder) placeholder.style.display = 'none';
  const dotsWrapEl = document.getElementById('exec-carousel-dots');
  if (dotsWrapEl) dotsWrapEl.style.display = 'flex';

  const cardEl = document.createElement('div');
  cardEl.className = 'exec-task-card tertiary-drill-card card-far-next';`;

if (html.includes(syncHomeTarget)) {
  html = html.replace(syncHomeTarget, syncHomeReplacement);
}

// BOUNTY_STATE clean
const bountyStateRegex = /window\.BOUNTY_STATE = \{[\s\S]*?vaultFile: '09_Bounties_悬赏公告\/bounty-2026-midterm-math\.md'\n\};/;
html = html.replace(bountyStateRegex, 'window.BOUNTY_STATE = null;');

// renderBountyModalAndBillboard clean empty state handling
const renderBountyTarget = `function renderBountyModalAndBillboard() {
  const b = window.BOUNTY_STATE;
  if (!b) return;

  // 1. 同步顶栏告示牌
  const hTitle = document.getElementById('home-bounty-title');
  const hTimer = document.getElementById('home-bounty-timer');
  const hReward = document.getElementById('home-bounty-reward');
  const hCta = document.getElementById('home-bounty-cta');`;

const renderBountyReplacement = `function renderBountyModalAndBillboard() {
  const b = window.BOUNTY_STATE;
  const hTitle = document.getElementById('home-bounty-title');
  const hTimer = document.getElementById('home-bounty-timer');
  const hReward = document.getElementById('home-bounty-reward');
  const hCta = document.getElementById('home-bounty-cta');
  const hAuthor = document.getElementById('home-bounty-author');

  if (!b) {
    if (hTitle) hTitle.textContent = '暂无进行中的悬赏契约';
    if (hTimer) hTimer.textContent = '⏱️ 待张榜';
    if (hReward) hReward.textContent = '🎁 点击发布亲子心愿悬赏';
    if (hAuthor) hAuthor.textContent = '👨‍👩‍👦 亲子共建';
    if (hCta) {
      hCta.textContent = '去发布 ›';
      hCta.style.background = '#ffedd5';
      hCta.style.color = '#c2410c';
    }
    const statusBadge = document.getElementById('bounty-modal-status-badge');
    const contractNo = document.getElementById('bounty-modal-contract-no');
    const mTitle = document.getElementById('bounty-modal-title');
    const mMeta = document.getElementById('bounty-modal-meta');
    const mReward = document.getElementById('bounty-modal-reward');
    const mCriteria = document.getElementById('bounty-modal-criteria');
    const s2Status = document.getElementById('bounty-stage2-status');
    const s2Desc = document.getElementById('bounty-stage2-desc');
    const s3Status = document.getElementById('bounty-stage3-status');
    const stamp = document.getElementById('bounty-parent-stamp');
    const childSign = document.getElementById('bounty-child-sign-pill');
    const parentSign = document.getElementById('bounty-parent-sign-pill');
    const acceptBtn1 = document.getElementById('bounty-action-accept-btn');
    const acceptBtn2 = document.getElementById('bounty-footer-accept-btn');
    const redeemBtn = document.getElementById('bounty-action-redeem-btn');
    const formBox = document.getElementById('bounty-publish-form-box');

    if (statusBadge) { statusBadge.textContent = '⚪ 暂无生效悬赏'; statusBadge.style.background = '#64748b'; }
    if (contractNo) contractNo.textContent = '契约编号：暂未生成 · 请点击【➕ 家长发布新悬赏】立约张榜';
    if (mTitle) mTitle.textContent = '《暂无进行中的悬赏挑战》';
    if (mMeta) mMeta.textContent = '🎯 关联规划：未指定 | 👨‍👩‍👦 期待家长发起立约';
    if (mReward) mReward.textContent = '🎁 达成心愿体验奖励';
    if (mCriteria) mCriteria.innerHTML = '<strong>📋 契约验收标准：</strong><br>请点击右上角【➕ 家长发布新悬赏】填写挑战项目、心愿奖励与验收标准。';
    if (s2Status) { s2Status.textContent = '⚪ 待张榜'; s2Status.style.color = '#64748b'; }
    if (s2Desc) s2Desc.textContent = '立约张榜后，孩子可点击【揭榜应战】同步生成待办卡片。';
    if (s3Status) { s3Status.textContent = '⚪ 未开始'; s3Status.style.color = '#64748b'; }
    if (stamp) { stamp.innerHTML = '⚪ 暂未签署立约'; stamp.style.background = '#f8fafc'; stamp.style.color = '#64748b'; stamp.style.borderColor = '#cbd5e1'; }
    if (childSign) { childSign.textContent = '⌛ 待签署'; childSign.style.background = '#f1f5f9'; childSign.style.color = '#64748b'; }
    if (parentSign) { parentSign.textContent = '⌛ 待发起'; parentSign.style.background = '#f1f5f9'; parentSign.style.color = '#64748b'; }
    if (acceptBtn1) acceptBtn1.style.display = 'none';
    if (acceptBtn2) acceptBtn2.style.display = 'none';
    if (redeemBtn) redeemBtn.style.display = 'none';
    if (formBox) formBox.style.display = 'flex';
    return;
  }

  // 1. 同步顶栏告示牌`;

if (html.includes(renderBountyTarget)) {
  html = html.replace(renderBountyTarget, renderBountyReplacement);
}

// Clean hardcoded input value in bounty parent comment
html = html.replace(
  'value="演算步骤工整清晰，破十法掌握扎实，周末如约带你去科技馆探索！"',
  'value="" placeholder="家长鼓励寄语..."'
);

// WEEK_BOARD_DATA clean: 7 days with tasks: []
const weekBoardRegex = /const WEEK_BOARD_DATA = \[[\s\S]*?\n\];\n\nfunction changeWeek/;
const cleanWeekBoard = `const WEEK_BOARD_DATA = [
  { dayIndex: 0, dayName: '周一', dateStr: '10/26', tasks: [] },
  { dayIndex: 1, dayName: '周二', dateStr: '10/27', tasks: [] },
  { dayIndex: 2, dayName: '周三', dateStr: '10/28', tasks: [] },
  { dayIndex: 3, dayName: '周四', dateStr: '10/29', tasks: [] },
  { dayIndex: 4, dayName: '周五', dateStr: '10/30', tasks: [] },
  { dayIndex: 5, dayName: '周六 (今日)', dateStr: '10/31', isToday: true, tasks: [] },
  { dayIndex: 6, dayName: '周日', dateStr: '11/01', tasks: [] }
];

function changeWeek`;
html = html.replace(weekBoardRegex, cleanWeekBoard);

// TREASURY_STATE clean
const treasuryStateRegex = /window\.TREASURY_STATE = \{[\s\S]*?ledger: \[[\s\S]*?\]\n\};/;
const cleanTreasuryState = `window.TREASURY_STATE = {
  totalBalance: 0.00,
  totalIncome: 0.00,
  totalExpense: 0.00,
  currentRecordType: 'income',
  ledger: []
};`;
html = html.replace(treasuryStateRegex, cleanTreasuryState);

// renderTreasurySpecializedWorkspace fallback clean
html = html.replace(
  /const state = window\.TREASURY_STATE \|\| \{\s*totalBalance:\s*3280\.00,\s*totalIncome:\s*4200\.00,\s*totalExpense:\s*920\.00,\s*ledger:\s*\[\]\s*\};/,
  `const state = window.TREASURY_STATE || {
    totalBalance: 0.00,
    totalIncome: 0.00,
    totalExpense: 0.00,
    ledger: []
  };`
);

// ACHIEVEMENT_STATE clean
const achieveStateRegex = /window\.ACHIEVEMENT_STATE = \{[\s\S]*?accidentalItems: \[[\s\S]*?\]\n\};/;
const cleanAchieveState = `window.ACHIEVEMENT_STATE = {
  currentTab: 'cultivation',
  cultivationItems: [],
  accidentalItems: []
};`;
html = html.replace(achieveStateRegex, cleanAchieveState);

// NOTE_STATE clean
const noteStateRegex = /window\.NOTE_STATE = \{[\s\S]*?historyEntries: \[[\s\S]*?\]\n\};/;
const cleanNoteState = `window.NOTE_STATE = {
  currentMood: '☀️ 专注充实',
  currentEnergy: 4,
  todayFocusMinutes: 0,
  journalText: '',
  todayAutoLogs: [],
  mediaList: [],
  historyEntries: []
};`;
html = html.replace(noteStateRegex, cleanNoteState);

// renderNoteSpecializedWorkspace empty autologs
const autoLogsRenderRegex = /const autoLogsHtml = \(state\.todayAutoLogs \|\| \[\]\)\.map\(\(item, idx\) => \{[\s\S]*?\}\)\.join\(''\);/;
const cleanAutoLogsRender = `const autoLogsList = state.todayAutoLogs || [];
  const autoLogsHtml = autoLogsList.length > 0 ? autoLogsList.map((item, idx) => {
    const txt = typeof item === 'string' ? item : item.text;
    const tm = (typeof item === 'object' && item.time) ? item.time : '今日';
    const isMoney = txt.includes('藏金屋') || txt.includes('¥');
    const isSport = txt.includes('武道馆') || txt.includes('兴趣');
    const bg = isMoney ? '#fffbeb' : (isSport ? '#eff6ff' : '#f0fdf4');
    const bd = isMoney ? '#fed7aa' : (isSport ? '#bfdbfe' : '#bbf7d0');
    const bl = isMoney ? '#d97706' : (isSport ? '#2563eb' : '#16a34a');
    const col = isMoney ? '#92400e' : (isSport ? '#1d4ed8' : '#166534');
    return '<div style="background:' + bg + '; border:1.2px solid ' + bd + '; border-left:3.5px solid ' + bl + '; padding:10px 12px; border-radius:10px; font-size:11.5px;">' +
      '<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:3px;">' +
        '<span style="font-weight:900; color:' + col + ';">自动归集 #' + (idx + 1) + '</span>' +
        '<span style="font-size:10px; color:#64748b; font-weight:700;">🕒 ' + tm + '</span>' +
      '</div>' +
      '<div style="color:' + col + '; line-height:1.45;">' + txt + '</div>' +
    '</div>';
  }).join('') : '<div style="grid-column:1 / -1; padding:20px; text-align:center; color:#94a3b8; font-size:12px; background:#f8fafc; border:1px dashed #cbd5e1; border-radius:10px;">今日暂无自动汇集的打卡或流水，完成各模块任务后将自动在此留痕 ⏱️</div>';`;
html = html.replace(autoLogsRenderRegex, cleanAutoLogsRender);

// GANTT_PROJECTS clean
const ganttProjectsRegex = /window\.GANTT_PROJECTS = \[[\s\S]*?completedDays: \['2026-10-15'[\s\S]*?isArchived: false\s*\}\s*\];/;
html = html.replace(ganttProjectsRegex, 'window.GANTT_PROJECTS = [];');

// enterTertiaryWorkspace fallback clean
html = html.replace(
  "leafEl.innerText = p ? ('⚡ ' + p.title) : '⚡ 口算进退位专项突破';",
  "leafEl.innerText = p ? ('⚡ ' + p.title) : '⚡ 攻坚脑图画布';"
);

// Generic templates in EXEC_CHECKIN_PAGE_META
html = html.replace(
  `const EXEC_CHECKIN_PAGE_META = {
  goal: {
    badge: '🎯 目标分解节点卡',
    title: '进退位口算满分达标与思维通关目标',
    breadcrumb: '🏝️ 晨曦岛 ❯ ⚡ 执行中心 ❯ 🎯 目标分解节点卡打卡页面',
    projectName: '《小学数学口算达标与逆向思维训练》',
    hasPlanningProject: true,
    legacyKey: 'study'
  },
  drill: {
    badge: '⚡ 攻坚实训节点卡',
    title: '进退位破十法心算极限攻坚实训',
    breadcrumb: '🏝️ 晨曦岛 ❯ ⚡ 执行中心 ❯ ⚡ 攻坚实训节点卡打卡页面',
    projectName: '《小学数学口算达标与逆向思维训练》',
    hasPlanningProject: true,
    legacyKey: 'dojo'
  },
  habit: {
    badge: '🌿 习惯践行节点卡',
    title: '每日口算自律防守与国学晨读知行日课',
    breadcrumb: '🏝️ 晨曦岛 ❯ ⚡ 执行中心 ❯ 🌿 习惯践行节点卡打卡页面',
    projectName: '《知行合一·君子风骨百日践行计划》',
    hasPlanningProject: true,
    legacyKey: 'cultivation'
  },
  reflection: {
    badge: '📝 评估复盘节点卡',
    title: '进退位口算错因归因与靶向提升复盘卡',
    breadcrumb: '🏝️ 晨曦岛 ❯ ⚡ 执行中心 ❯ 📝 评估复盘节点卡打卡页面',
    projectName: '《自我进化 PDCA 飞轮与全息生命印记全书》',
    hasPlanningProject: true,
    legacyKey: 'review'
  },
  custom: {
    badge: '⚙️ 自定义配置节点卡',
    title: '航天科普馆自主研学与水火箭模型制作',
    breadcrumb: '🏝️ 晨曦岛 ❯ ⚡ 执行中心 ❯ ⚙️ 自定义配置节点卡打卡页面',
    projectName: '《青少儿跨学科科学探究与自主研学工程》',
    hasPlanningProject: true,
    legacyKey: 'treasury'
  },
  text: {
    badge: '📄 简单文本节点卡',
    title: '长征运载火箭谱系与航天知识备忘',
    breadcrumb: '🏝️ 晨曦岛 ❯ ⚡ 执行中心 ❯ 📄 简单文本节点查阅页面',
    projectName: '《青少儿跨学科科学探究与自主研学工程》',
    hasPlanningProject: false,
    legacyKey: 'note'
  }
};`,
  `const EXEC_CHECKIN_PAGE_META = {
  goal: {
    badge: '🎯 目标分解节点卡',
    title: '阶段里程碑与量化通关目标',
    breadcrumb: '🏝️ 晨曦岛 ❯ ⚡ 执行中心 ❯ 🎯 目标分解节点卡打卡页面',
    projectName: '《全息成长规划课题》',
    hasPlanningProject: true,
    legacyKey: 'study'
  },
  drill: {
    badge: '⚡ 攻坚实训节点卡',
    title: '专项技能与核心攻坚实训',
    breadcrumb: '🏝️ 晨曦岛 ❯ ⚡ 执行中心 ❯ ⚡ 攻坚实训节点卡打卡页面',
    projectName: '《全息成长规划课题》',
    hasPlanningProject: true,
    legacyKey: 'dojo'
  },
  habit: {
    badge: '🌿 习惯践行节点卡',
    title: '知行合一自律防守日课',
    breadcrumb: '🏝️ 晨曦岛 ❯ ⚡ 执行中心 ❯ 🌿 习惯践行节点卡打卡页面',
    projectName: '《知行合一践行计划》',
    hasPlanningProject: true,
    legacyKey: 'cultivation'
  },
  reflection: {
    badge: '📝 评估复盘节点卡',
    title: '错因归因与靶向提升复盘卡',
    breadcrumb: '🏝️ 晨曦岛 ❯ ⚡ 执行中心 ❯ 📝 评估复盘节点卡打卡页面',
    projectName: '《自我进化与复盘反思》',
    hasPlanningProject: true,
    legacyKey: 'review'
  },
  custom: {
    badge: '⚙️ 自定义配置节点卡',
    title: '自主实践探究项目',
    breadcrumb: '🏝️ 晨曦岛 ❯ ⚡ 执行中心 ❯ ⚙️ 自定义配置节点卡打卡页面',
    projectName: '《跨学科自主探究工程》',
    hasPlanningProject: true,
    legacyKey: 'treasury'
  },
  text: {
    badge: '📄 简单文本节点卡',
    title: '核心要领与备忘手记',
    breadcrumb: '🏝️ 晨曦岛 ❯ ⚡ 执行中心 ❯ 📄 简单文本节点查阅页面',
    projectName: '《自主实践探究工程》',
    hasPlanningProject: false,
    legacyKey: 'note'
  }
};`
);

// Clean generic defaults in the 6 checkin frames in #gallery-stage-view
html = html.replace(
  '進退位口算滿分達標與思維通關目標',
  '阶段里程碑与量化通关目标'
);
html = html.replace(
  '进退位口算满分达标与思维通关目标',
  '阶段里程碑与量化通关目标'
);
html = html.replace(
  '所属项目：《小学数学口算达标与逆向思维训练》 · 已去除达成勋章与经验项',
  '所属项目：《全息成长规划课题》 · 目标分解与量化指标验收'
);
html = html.replace(
  '《小学数学口算达标与逆向思维训练》',
  '《全息成长规划课题》'
);

// Save cleaned high_fidelity_ui_preview.html
fs.writeFileSync(PROTO_PATH, html, "utf8");
console.log("high_fidelity_ui_preview.html patch complete!");
