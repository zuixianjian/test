import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const PROTO_PATH = path.join(ROOT, "high_fidelity_ui_preview.html");
let html = fs.readFileSync(PROTO_PATH, "utf8").replace(/\r\n/g, "\n");

function must(cond, msg) {
  if (!cond) {
    console.error("FAILED:", msg);
    process.exit(1);
  }
  console.log("OK:", msg);
}

function sliceReplace(startMarker, endMarker, replacement, label) {
  const a = html.indexOf(startMarker);
  const b = html.indexOf(endMarker, a + 1);
  must(a >= 0 && b > a, "locate " + label);
  html = html.slice(0, a) + replacement + html.slice(b);
}

// ---------------------------------------------------------------------------
// 1. 真实日期：GANTT_TODAY 不再写死
// ---------------------------------------------------------------------------
html = html.replace(
  "const GANTT_TODAY = '2026-10-27';",
  `const GANTT_TODAY = (function () {
  const d = new Date();
  return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
})();`
);

// 月视图汇总条初始值清零 (去除测试数据 126/12/4/88.5%)
html = html.replace("🟢 已办: 126 项", "🟢 已办: 0 项")
  .replace("🟡 待办: 12 项", "🟡 待办: 0 项")
  .replace("🔴 未办: 4 项", "🔴 未办: 0 项")
  .replace("⭐ 整体达成率: 88.5%", "⭐ 整体达成率: --");
html = html.replace('<span class="week-range-text">2026年第43周 (10月26日 - 11月01日)</span>', '<span class="week-range-text"></span>');
html = html.replace('<span class="month-title-text" id="month-title-label">2026 年 10 月</span>', '<span class="month-title-text" id="month-title-label"></span>');
html = html.replace(
  '<div class="inspector-date-title" id="inspector-date-title">2026年10月26日 星期一</div>',
  '<div class="inspector-date-title" id="inspector-date-title"></div>'
);
html = html.replace(
  '<div class="inspector-date-sub" id="inspector-date-sub">农历九月十六 · 寒露第18天 · 物候清爽宜人</div>',
  '<div class="inspector-date-sub" id="inspector-date-sub"></div>'
);

// 今日定位依赖真实日期: 取代 WEEK_BOARD_DATA[5] 兜底
html = html.split("WEEK_BOARD_DATA.find(d => d.isToday) || WEEK_BOARD_DATA[5]")
  .join("getTodayWeekCol()");

// ---------------------------------------------------------------------------
// 2. 周看板 / 月日历 / 单日弹窗：整体改为按真实日期驱动
// ---------------------------------------------------------------------------
const weekMonthCode = `// 2. 周看板全局状态与控制器 (按真实系统日期驱动，不再含任何写死日期)
window.currentWeekOffset = 0;
window.currentWeekFilter = 'all';
window.TASK_HISTORY_BY_DATE = window.TASK_HISTORY_BY_DATE || {};

const WEEK_BOARD_DATA = [
  { dayIndex: 0, dayName: '周一', dateStr: '', tasks: [] },
  { dayIndex: 1, dayName: '周二', dateStr: '', tasks: [] },
  { dayIndex: 2, dayName: '周三', dateStr: '', tasks: [] },
  { dayIndex: 3, dayName: '周四', dateStr: '', tasks: [] },
  { dayIndex: 4, dayName: '周五', dateStr: '', tasks: [] },
  { dayIndex: 5, dayName: '周六', dateStr: '', tasks: [] },
  { dayIndex: 6, dayName: '周日', dateStr: '', tasks: [] }
];

const CAL_WEEK_NAMES = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
const CAL_WEEK_NAMES_LONG = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'];

function calPad2(n) { return String(n).padStart(2, '0'); }

function calDateKey(d) {
  return d.getFullYear() + '-' + calPad2(d.getMonth() + 1) + '-' + calPad2(d.getDate());
}

function calMondayOf(d) {
  const x = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  x.setDate(x.getDate() - ((x.getDay() + 6) % 7));
  return x;
}

function calIsoWeekNumber(d) {
  const t = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  const day = t.getUTCDay() || 7;
  t.setUTCDate(t.getUTCDate() + 4 - day);
  const y0 = new Date(Date.UTC(t.getUTCFullYear(), 0, 1));
  return Math.ceil(((t - y0) / 86400000 + 1) / 7);
}

function calLunarText(d) {
  try {
    const fmt = new Intl.DateTimeFormat('zh-u-ca-chinese', { month: 'long', day: 'numeric' });
    const s = fmt.format(d);
    const m = s.match(/^(.*月)(.+)$/);
    if (!m) return s;
    return m[2] === '初一' ? m[1] : m[2];
  } catch (e) {
    return '';
  }
}

// 将 WEEK_BOARD_DATA 对齐到系统真实“本周”，跨周/跨日自动归档历史并把未完成转为缺卡
function syncWeekBoardToRealDate() {
  window.TASK_HISTORY_BY_DATE = window.TASK_HISTORY_BY_DATE || {};
  const now = new Date();
  const todayKey = calDateKey(now);
  const monday = calMondayOf(now);
  let legacyTasks = [];

  WEEK_BOARD_DATA.forEach((col, i) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    const key = calDateKey(d);
    if (!Array.isArray(col.tasks)) col.tasks = [];
    if (!col.dateKey) {
      // 旧版快照没有日期信息：统一并入今日，避免丢失用户真实任务
      if (col.tasks.length) legacyTasks = legacyTasks.concat(col.tasks);
      col.tasks = [];
    } else if (col.dateKey !== key) {
      if (col.tasks.length) {
        const archived = col.tasks.map(t => Object.assign({}, t, { status: t.status === 'pending' ? 'overdue' : t.status }));
        window.TASK_HISTORY_BY_DATE[col.dateKey] = (window.TASK_HISTORY_BY_DATE[col.dateKey] || []).concat(archived);
      }
      col.tasks = [];
    }
    col.dateKey = key;
    col.dayIndex = i;
    col.dateStr = calPad2(d.getMonth() + 1) + '/' + calPad2(d.getDate());
    col.isToday = (key === todayKey);
    col.dayName = CAL_WEEK_NAMES[i] + (col.isToday ? ' (今日)' : '');
  });

  if (legacyTasks.length) {
    const todayCol = WEEK_BOARD_DATA.find(c => c.isToday);
    if (todayCol) todayCol.tasks = todayCol.tasks.concat(legacyTasks);
  }
}

function getTodayWeekCol() {
  syncWeekBoardToRealDate();
  return WEEK_BOARD_DATA.find(c => c.isToday) || WEEK_BOARD_DATA[(new Date().getDay() + 6) % 7];
}

function updateWeekRangeLabel() {
  const label = document.querySelector('.week-range-text');
  if (!label) return;
  const monday = calMondayOf(new Date());
  monday.setDate(monday.getDate() + window.currentWeekOffset * 7);
  const sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6);
  const tag = window.currentWeekOffset === 0 ? '' : (window.currentWeekOffset > 0 ? ' · 未来周' : ' · 历史周');
  label.textContent = monday.getFullYear() + '年第' + calIsoWeekNumber(monday) + '周 (' +
    (monday.getMonth() + 1) + '月' + calPad2(monday.getDate()) + '日 - ' +
    (sunday.getMonth() + 1) + '月' + calPad2(sunday.getDate()) + '日)' + tag;
}

function getWeekColsForOffset(offset) {
  syncWeekBoardToRealDate();
  if (offset === 0) return WEEK_BOARD_DATA;
  const monday = calMondayOf(new Date());
  monday.setDate(monday.getDate() + offset * 7);
  const cols = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    const key = calDateKey(d);
    cols.push({
      dayIndex: i,
      dayName: CAL_WEEK_NAMES[i],
      dateStr: calPad2(d.getMonth() + 1) + '/' + calPad2(d.getDate()),
      dateKey: key,
      isToday: false,
      tasks: getRecordsForDate(key)
    });
  }
  return cols;
}

// 某一天的全部记录：本周数据 / 历史归档 / 甘特项目达标打卡
function getRecordsForDate(key) {
  const col = WEEK_BOARD_DATA.find(c => c.dateKey === key);
  let tasks = col ? (col.tasks || []) : ((window.TASK_HISTORY_BY_DATE || {})[key] || []);
  if (tasks.length > 0) return tasks;
  const derived = [];
  (window.GANTT_PROJECTS || []).forEach(p => {
    if (Array.isArray(p.completedDays) && p.completedDays.includes(key)) {
      const meta = (typeof PAVILION_META !== 'undefined' && PAVILION_META[p.pavilion]) ? PAVILION_META[p.pavilion] : { name: p.category || '规划馆', icon: '🎯' };
      derived.push({
        id: 'g-' + p.id + '-' + key,
        pavilion: meta.name || '规划馆',
        pavilionBadge: (meta.icon || '🎯') + ' ' + (meta.name || '规划馆'),
        title: '《' + p.title + '》达标打卡',
        status: 'done',
        duration: '--',
        time: key,
        instruction: p.desc || '',
        evidence: '✓ 项目甘特达标记录',
        reflection: ''
      });
    }
  });
  return derived;
}

function changeWeek(delta) {
  window.currentWeekOffset += delta;
  updateWeekRangeLabel();
  renderWeekBoard(window.currentWeekFilter);
  showIslandToast(window.currentWeekOffset === 0 ? '📅 已切换至本周看板' : (delta > 0 ? '⏩ 已切换至下一周看板' : '⏪ 已切换至上一周看板'));
}

function resetToCurrentWeek() {
  window.currentWeekOffset = 0;
  updateWeekRangeLabel();
  renderWeekBoard(window.currentWeekFilter);
  showIslandToast('📅 已回到本周任务全景看板！');
}

`;

sliceReplace("// 2. 周看板全局状态与控制器", "function filterWeekTasks(filter) {", weekMonthCode, "week state block");

// renderWeekBoard 头部：使用真实周列
html = html.replace(
  `  filter = filter || window.currentWeekFilter || 'all';

  // 动态统计全周各状态数量并同步刷新顶部筛选标签
  let totalAll = 0, totalDone = 0, totalPending = 0, totalOverdue = 0;
  WEEK_BOARD_DATA.forEach(col => {`,
  `  filter = filter || window.currentWeekFilter || 'all';
  const weekCols = getWeekColsForOffset(window.currentWeekOffset || 0);
  updateWeekRangeLabel();

  // 动态统计全周各状态数量并同步刷新顶部筛选标签
  let totalAll = 0, totalDone = 0, totalPending = 0, totalOverdue = 0;
  weekCols.forEach(col => {`
);
html = html.replace(
  `  WEEK_BOARD_DATA.forEach((col, idx) => {
    const isToday = (idx === 5 && window.currentWeekOffset === 0);`,
  `  weekCols.forEach((col, idx) => {
    const isToday = !!col.isToday;`
);
must(html.includes("weekCols.forEach((col, idx)"), "renderWeekBoard uses real week columns");

// 月日历 + 单日弹窗 整块重写
const monthCode = `// 4. 月日历全局状态与控制器 (按真实系统日期动态生成)
window.currentMonthOffset = 0;

function getCalendarBaseMonth() {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth() + (window.currentMonthOffset || 0), 1);
}

function updateMonthTitleLabel() {
  const label = document.getElementById('month-title-label');
  if (!label) return;
  const base = getCalendarBaseMonth();
  label.textContent = base.getFullYear() + ' 年 ' + (base.getMonth() + 1) + ' 月';
}

function changeMonth(delta) {
  window.currentMonthOffset += delta;
  updateMonthTitleLabel();
  renderMonthCalendar();
  showIslandToast(delta > 0 ? '下个月月历足迹' : '上个月月历足迹');
}

function resetToCurrentMonth() {
  window.currentMonthOffset = 0;
  updateMonthTitleLabel();
  renderMonthCalendar();
  showIslandToast('📅 已回到本月足迹矩阵！');
}

function renderMonthCalendar() {
  const grid = document.getElementById('month-calendar-grid');
  if (!grid) return;
  syncWeekBoardToRealDate();
  updateMonthTitleLabel();

  const base = getCalendarBaseMonth();
  const year = base.getFullYear();
  const month = base.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const lead = (base.getDay() + 6) % 7;
  const rows = Math.ceil((lead + daysInMonth) / 7);
  const todayKey = calDateKey(new Date());

  grid.style.gridTemplateRows = '28px repeat(' + rows + ', minmax(0, 1fr))';

  const weekdayHeaders =
    '<div class="cal-weekday-header">一</div><div class="cal-weekday-header">二</div>' +
    '<div class="cal-weekday-header">三</div><div class="cal-weekday-header">四</div>' +
    '<div class="cal-weekday-header">五</div>' +
    '<div class="cal-weekday-header weekend">六</div><div class="cal-weekday-header weekend">日</div>';

  let cellsHtml = '';
  let sumDone = 0, sumPending = 0, sumOverdue = 0;

  const otherCell = (d) =>
    '<div class="month-day-cell other-month" style="opacity:0.4; background:#f8fafc; pointer-events:none;">' +
    '<div class="month-date-row"><span class="month-date-num">' + d.getDate() + '</span>' +
    '<span class="month-date-lunar">' + calLunarText(d) + '</span></div></div>';

  for (let i = lead; i > 0; i--) {
    cellsHtml += otherCell(new Date(year, month, 1 - i));
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const d = new Date(year, month, day);
    const key = calDateKey(d);
    const isToday = (key === todayKey);
    const recs = getRecordsForDate(key);
    const done = recs.filter(t => t.status === 'done').length;
    const pend = recs.filter(t => t.status === 'pending').length;
    const over = recs.filter(t => t.status === 'overdue').length;
    sumDone += done; sumPending += pend; sumOverdue += over;

    let pips = '';
    if (done > 0) pips += '<span class="month-pip" style="background:#dcfce7; color:#15803d;">🟢 ' + done + '</span>';
    if (pend > 0) pips += '<span class="month-pip" style="background:#fef3c7; color:#b45309;">🟡 ' + pend + '</span>';
    if (over > 0) pips += '<span class="month-pip" style="background:#fee2e2; color:#b91c1c;">🔴 ' + over + '</span>';
    if (isToday) {
      const st = window.USER_PROFILE_STATE || {};
      if (st.violationCount > 0) {
        pips += '<span class="month-pip" style="background:#fee2e2; color:#b91c1c;">⚖️ -' + (st.violationCount * 5) + '%</span>';
      }
    }

    cellsHtml +=
      '<div class="month-day-cell' + (isToday ? ' today active is-today' : '') + '" onclick="inspectMonthDate(' + year + ', ' + (month + 1) + ', ' + day + ')">' +
      '  <div class="month-date-row">' +
      '    <span class="month-date-num"' + (isToday ? ' style="color:#c2410c; font-weight:900;"' : '') + '>' + day + '</span>' +
      (isToday
        ? '    <span style="font-size:9px; background:#ea580c; color:#fff; font-weight:800; padding:1px 5px; border-radius:6px;">今日</span>'
        : '    <span class="month-date-lunar">' + calLunarText(d) + '</span>') +
      '  </div>' +
      '  <div class="month-pips-row" style="margin-top:4px;">' + pips + '</div>' +
      '</div>';
  }

  const trail = rows * 7 - lead - daysInMonth;
  for (let i = 1; i <= trail; i++) {
    cellsHtml += otherCell(new Date(year, month + 1, i));
  }

  grid.innerHTML = weekdayHeaders + cellsHtml;

  // 同步月度汇总条 (真实统计)
  const chips = document.querySelectorAll('#exec-subview-month .month-summary-stat .stat-chip');
  const total = sumDone + sumPending + sumOverdue;
  if (chips.length >= 4) {
    chips[0].textContent = '🟢 已办: ' + sumDone + ' 项';
    chips[1].textContent = '🟡 待办: ' + sumPending + ' 项';
    chips[2].textContent = '🔴 未办: ' + sumOverdue + ' 项';
    chips[3].textContent = '⭐ 整体达成率: ' + (total > 0 ? (Math.round(sumDone / total * 1000) / 10) + '%' : '--');
  }
}

// 5. 单日全息清单弹窗 (Day Inspector) —— 仅展示真实记录，无任何演示数据
function inspectMonthDate(year, month, day) {
  const modal = document.getElementById('day-inspector-modal');
  if (!modal) return;
  syncWeekBoardToRealDate();

  const d = new Date(year, month - 1, day);
  const key = calDateKey(d);
  const isToday = key === calDateKey(new Date());
  const recs = getRecordsForDate(key);

  const dateTitle = document.getElementById('inspector-date-title');
  if (dateTitle) {
    dateTitle.textContent = year + '年' + month + '月' + day + '日 ' + CAL_WEEK_NAMES_LONG[(d.getDay() + 6) % 7] + (isToday ? ' (今日)' : '');
  }
  const dateSub = document.getElementById('inspector-date-sub');
  if (dateSub) {
    const lunar = calLunarText(d);
    dateSub.textContent = (lunar ? '农历 ' + lunar + ' · ' : '') + '共 ' + recs.length + ' 项成长记录';
  }

  const item = (t, color, tag) =>
    '<div class="inspector-task-item"><span>' + (t.pavilionBadge ? t.pavilionBadge.split(' ')[0] + ' ' : '') + t.pavilion + '：' + t.title +
    (t.duration && t.duration !== '--' ? ' (' + t.duration + ')' : '') +
    '</span><span style="color:' + color + '; font-weight:800; font-size:11px;">' + tag + '</span></div>';

  const fill = (listId, countId, arr, color, tag, emptyText) => {
    const listEl = document.getElementById(listId);
    const countEl = document.getElementById(countId);
    if (countEl) countEl.textContent = arr.length + ' 项';
    if (listEl) {
      listEl.innerHTML = arr.length > 0
        ? arr.map(t => item(t, color, tag)).join('')
        : '<div style="color:#94a3b8; font-size:11px; padding:6px 0;">' + emptyText + '</div>';
    }
  };

  fill('inspector-list-done', 'inspector-count-done', recs.filter(t => t.status === 'done'), '#16a34a', '✓ 已完成', '暂无已完成事项');
  fill('inspector-list-pending', 'inspector-count-pending', recs.filter(t => t.status === 'pending'), '#d97706', '🟡 待打卡', '暂无待办事项');
  fill('inspector-list-overdue', 'inspector-count-overdue', recs.filter(t => t.status === 'overdue'), '#dc2626', '未办缺卡', '暂无缺卡事项');

  modal.style.display = 'flex';
}

`;

sliceReplace("// 4. 月日历全局状态与控制器", "function closeDayInspector() {", monthCode, "month block");

// ---------------------------------------------------------------------------
// 3. CSS：底部发射台自适应不出屏 / 周看板铺满 / 周月盖住目标卡
// ---------------------------------------------------------------------------
const css = `
/* ==========================================================================
   平板适配补丁：底部发射台自适应、周看板铺满、周月全屏层级
   ========================================================================== */
.a-my-island-plugin-launcher {
  left: 8px !important;
  right: 8px !important;
  width: auto !important;
  max-width: none !important;
  justify-content: center !important;
  gap: 4px !important;
  padding: 5px 6px !important;
  overflow-x: auto !important;
  box-sizing: border-box !important;
}
.a-my-island-plugin-launcher .a-my-island-plugin-launcher-button {
  flex: 1 1 0 !important;
  width: auto !important;
  min-width: 40px !important;
  max-width: 68px !important;
  height: 60px !important;
  min-height: 60px !important;
  max-height: 60px !important;
  padding: 4px 2px 3px !important;
  grid-template-rows: 28px 14px !important;
  gap: 2px !important;
}
.a-my-island-plugin-launcher .a-my-island-plugin-launcher-icon {
  width: 28px !important;
  height: 28px !important;
  font-size: 20px !important;
}
.a-my-island-plugin-launcher .a-my-island-plugin-launcher-icon > svg {
  width: 26px !important;
  height: 26px !important;
}
.a-my-island-plugin-launcher .a-my-island-plugin-launcher-label {
  max-width: 100% !important;
  font-size: 10px !important;
  letter-spacing: -0.3px !important;
}
.a-my-island-plugin-launcher .a-my-island-plugin-launcher-separator {
  height: 38px !important;
  margin: 0 1px !important;
}

#week-board-columns-container {
  display: grid !important;
  grid-template-columns: repeat(7, minmax(112px, 1fr)) !important;
  align-items: stretch !important;
  overflow-x: auto !important;
  overflow-y: hidden !important;
}
#week-board-columns-container .week-board-col {
  min-width: 0 !important;
  width: auto !important;
  height: 100% !important;
}
#week-board-columns-container .week-col-tasks {
  overflow-y: auto !important;
  min-height: 0 !important;
}

#exec-subview-week,
#exec-subview-month {
  z-index: 60 !important;
}
#island-execution-center.is-fullview #island-goal-cards-dock {
  display: none !important;
}
`;
html = html.replace("</style>", css + "\n</style>");

// switchExecSubView：同时切换容器类名，确保目标卡槽被强制隐藏
html = html.replace(
  `    goalDock.style.display = (view === 'day') ? '' : 'none';
  }`,
  `    goalDock.style.display = (view === 'day') ? '' : 'none';
  }
  const execCenterEl = document.getElementById('island-execution-center');
  if (execCenterEl) execCenterEl.classList.toggle('is-fullview', view !== 'day');`
);
must(html.includes("execCenterEl.classList.toggle('is-fullview'"), "switchExecSubView toggles is-fullview");

// 添加项目弹窗起始日期默认值改为今日
html = html.replace('id="input-proj-start" class="add-module-text-input" value="2026-10-27"', 'id="input-proj-start" class="add-module-text-input" value=""');
html = html.replace(
  "当前起止周期覆盖今日 (2026-10-27)，系统自动判定为【进行中】",
  "当前起止周期覆盖今日，系统自动判定为【进行中】"
);

// 启动时对齐一次真实日期并渲染
html = html.replace(
  "window.addEventListener('DOMContentLoaded', () => {\n  initIslandSettings();",
  "window.addEventListener('DOMContentLoaded', () => {\n  syncWeekBoardToRealDate();\n  const _ps = document.getElementById('input-proj-start');\n  if (_ps && !_ps.value) _ps.value = GANTT_TODAY;\n  initIslandSettings();"
);

fs.writeFileSync(PROTO_PATH, html, "utf8");
console.log("Calendar / week / launcher fixes applied.");
