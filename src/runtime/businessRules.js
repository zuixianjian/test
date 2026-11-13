// Product rules applied inside the extracted runtime closure. Keep the reference
// HTML untouched; this file is part of every dev/production extraction.
const escapeIslandText = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let evidenceSession = null;
loadIslandSettings = defaultIslandSettings;
saveIslandSettings = function () { notifyIslandStateChanged(); };
const oldWeatherEngine=initWeatherEngine;
initWeatherEngine=function(){const canvas=document.getElementById('particle-canvas');if(!canvas || canvas.dataset.weatherBound)return;canvas.dataset.weatherBound='true';oldWeatherEngine();};

function ensureBusinessDate() {
  const today = localDateKey();
  GANTT_TODAY = today;
  const note = window.NOTE_STATE;
  const profile = window.USER_PROFILE_STATE;
  profile.checkinRecords = profile.checkinRecords || [];
  profile.violationRecords = profile.violationRecords || [];
  if (note.dateKey && note.dateKey !== today) {
    const entry = { id: 'entry-' + note.dateKey, date: note.dateKey, text: note.journalText || '', mood: note.currentMood, energy: note.currentEnergy, autoLogs: note.todayAutoLogs || [], media: note.mediaList || [] };
    if (!note.historyEntries.some(e => e.date === entry.date)) note.historyEntries.unshift(entry);
    note.todayAutoLogs = []; note.todayFocusMinutes = 0; note.journalText = ''; note.mediaList = [];
  }
  note.dateKey = today;
  if (profile.statsDate !== today) {
    profile.statsDate = today; profile.checkedTaskKeys = {}; profile.completedTodayCount = 0; profile.streakIncrementedToday = false;
  }
  return today;
}

function refreshBusinessMetrics() {
  const today = ensureBusinessDate();
  const st = window.USER_PROFILE_STATE;
  const records = st.checkinRecords.filter(r => r.date === today);
  const cards = Array.from(document.querySelectorAll('#day-card-deck .exec-task-card'));
  const contractCard = card => card.dataset.pavilion === 'cultivation' || (card.dataset.taskId || '').startsWith('bounty-');
  const done = card => (card.dataset.taskId || '').startsWith('bounty-')
    ? window.BOUNTY_STATE?.status === 'redeemed'
    : records.some(r => r.taskId === card.dataset.taskId);
  const planned = cards.filter(card => !contractCard(card));
  const contracts = cards.filter(contractCard);
  st.totalTodayCount = cards.length;
  st.completedTodayCount = cards.filter(done).length;
  st.continuousDays = computeStreak(st.checkinRecords.map(r => r.date), st.violationRecords.map(r => (r.time || r.date || '').slice(0, 10)), st.approvedFreezeDays || [], today);
  st.streakDays = st.continuousDays;
  st.maxContinuousDays = Math.max(st.maxContinuousDays || 0, st.continuousDays);
  st.fulfillmentRate = fulfillmentRate(planned.filter(done).length, planned.length, contracts.filter(done).length, contracts.length, st.violationCount || 0);
  st.totalFocusMinutes = Math.round(st.checkinRecords.reduce((sum, r) => sum + (r.focusSeconds || 0), 0) / 60);
  for (const card of cards) {
    const pill = card.querySelector('.task-status-pill');
    if (pill) { pill.className = 'task-status-pill ' + (done(card) ? 'completed' : 'pending'); pill.textContent = done(card) ? '✓ 今日已完成' : '🟡 今日待打卡'; }
  }
  return st.fulfillmentRate;
}
computeCurrentFulfillmentRate = refreshBusinessMetrics;
const originalRenderHUD = recalcAndRenderGlobalHUD;
recalcAndRenderGlobalHUD = function () { refreshBusinessMetrics(); originalRenderHUD(); };

appendDailyAutoLog = function (text, minutes) {
  ensureBusinessDate();
  const note = window.NOTE_STATE;
  const now = new Date();
  note.todayAutoLogs.unshift({ time: now.toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'}), text: String(text) });
  note.todayFocusMinutes = (note.todayFocusMinutes || 0) + (Number(minutes) || 0);
  const todayEntry = note.historyEntries.find(e => e.date === note.dateKey);
  if (todayEntry) todayEntry.autoLogs = note.todayAutoLogs.map(l => typeof l === 'string' ? l : '[' + l.time + '] ' + l.text);
  notifyIslandStateChanged();
};

// Preserve nonvisual node records when the canvas DOM cache is refreshed.
const originalSaveCanvas = saveCurrentProjectCanvasSnapshot;
saveCurrentProjectCanvasSnapshot = function () {
  const id = window.currentTertiaryProjId;
  if (!id || !window.GANTT_PROJECTS.some(p => p.id === id)) return;
  const world = document.getElementById('tertiary-canvas-world');
  if (world?.dataset.projectId && world.dataset.projectId !== id) return;
  const previous = window.PROJECT_CANVAS_STORE[id] || {};
  originalSaveCanvas();
  window.PROJECT_CANVAS_STORE[id] = Object.assign({}, previous, window.PROJECT_CANVAS_STORE[id]);
};
const originalEnterTertiary = enterTertiaryWorkspace;
enterTertiaryWorkspace = function (id) {
  originalEnterTertiary(id);
  const world = document.getElementById('tertiary-canvas-world');
  if (world) world.dataset.projectId = id;
};

const originalSyncNode = syncNewNodeToHomeExecution;
syncNewNodeToHomeExecution = function (cfg) {
  if (!cfg?.id) return;
  const source = document.getElementById(cfg.id);
  const generatedProject = cfg.id.startsWith('remedy-') ? window.GANTT_PROJECTS.find(p=>p.id.startsWith('proj_remedy_')) : cfg.id.startsWith('inq-task-') ? window.GANTT_PROJECTS.find(p=>p.id.startsWith('proj_inq_')) : null;
  const projectId = cfg.projectId || generatedProject?.id || (cfg.id.startsWith('bounty-') ? '' : (window.GANTT_PROJECTS.some(p => p.id === window.currentTertiaryProjId) ? window.currentTertiaryProjId : ''));
  originalSyncNode({ ...cfg, title: escapeIslandText(cfg.title), desc: escapeIslandText(cfg.desc) });
  const card = document.getElementById('exec-sync-' + cfg.id);
  if (card) {
    card.dataset.label = cfg.title || '';
    card.dataset.projectId = projectId;
    card.dataset.nodeId = cfg.sourceNodeId || (generatedProject ? 'projnode-'+generatedProject.id+'-2' : cfg.id);
    card.dataset.checkinType = source?.className.includes('habit') ? 'habit' : source?.className.includes('reflection') ? 'reflection' : source?.className.includes('custom') ? 'custom' : 'drill';
    // Event properties are not serialized by innerHTML. Inline attributes survive reopen.
    card.setAttribute('onclick', "handleTaskCardClick(event, this.dataset.checkinType)");
  }
  const task = getTodayWeekCol()?.tasks.find(t => t.id === 'w-' + cfg.id);
  if (task) { task.sourceNodeId = cfg.id; task.projectId = projectId; }
  notifyIslandStateChanged();
};

function getEvidenceElapsed() {
  return evidenceSession ? evidenceSession.seconds + (evidenceSession.startedAt ? Math.floor((Date.now() - evidenceSession.startedAt) / 1000) : 0) : 0;
}
function toggleEvidenceTimer() {
  if (!evidenceSession) return;
  if (evidenceSession.startedAt) { evidenceSession.seconds = getEvidenceElapsed(); evidenceSession.startedAt = 0; }
  else evidenceSession.startedAt = Date.now();
  const btn = document.getElementById('island-real-timer');
  if (btn) btn.textContent = evidenceSession.startedAt ? '⏸ 暂停计时' : '▶ 继续专注';
  saveExecutionDraft();
}
function saveExecutionDraft() {
  if (!evidenceSession || evidenceSession.saved) return;
  const profile=window.USER_PROFILE_STATE;profile.executionDrafts=profile.executionDrafts || {};
  profile.executionDrafts[localDateKey()+'|'+evidenceSession.taskId]={ reflection:document.getElementById('island-real-reflection')?.value || '', seconds:getEvidenceElapsed(), media:evidenceSession.media };
  notifyIslandStateChanged();
}
function paintEvidenceTime() {
  if (window.USER_PROFILE_STATE.statsDate !== localDateKey()) { ensureBusinessDate(); recalcAndRenderGlobalHUD(); notifyIslandStateChanged(); }
  const display = document.getElementById('island-real-elapsed');
  const seconds = getEvidenceElapsed();
  if (display) display.textContent = String(Math.floor(seconds / 60)).padStart(2, '0') + ':' + String(seconds % 60).padStart(2, '0');
}
setInterval(paintEvidenceTime, 1000);

function mountRealExecutionForm(card) {
  const container = document.getElementById('exec-popup-task-view');
  if (!container || !card) return;
  const taskId = card.dataset.taskId || card.id;
  const today = ensureBusinessDate();
  const saved = window.USER_PROFILE_STATE.checkinRecords.find(r => r.taskId === taskId && r.date === today);
  const draft=window.USER_PROFILE_STATE.executionDrafts?.[today+'|'+taskId];
  evidenceSession = { taskId, nodeId: card.dataset.nodeId || taskId, projectId: card.dataset.projectId || '', pavilionId: card.dataset.pavilion || 'study', title: card.dataset.label || '执行任务', seconds: draft?.seconds || saved?.focusSeconds || 0, startedAt: 0, media: draft?.media || saved?.media || [], saved: !!saved };
  const data = window.PROJECT_CANVAS_STORE[evidenceSession.projectId];
  const holder = document.createElement('div'); holder.innerHTML = data?.cardsHtml || '';
  const source = Array.from(holder.querySelectorAll('.tertiary-card')).find(el => el.id === evidenceSession.nodeId);
  container.innerHTML = '<div class="note-card-box island-real-execution-form">' +
    '<h3>' + escapeIslandText(evidenceSession.title) + '</h3><div id="island-execution-standard"></div><div class="island-real-execution-entry">' +
    '<div style="display:flex;align-items:center;gap:12px;margin:14px 0;"><strong id="island-real-elapsed">00:00</strong><button class="ui-btn" id="island-real-timer" onclick="toggleEvidenceTimer()">▶ 开始专注</button><span>按实际计时记录投入</span></div>' +
    '<label>执行心得与客观结果<textarea id="island-real-reflection" oninput="saveExecutionDraft()" style="width:100%;min-height:100px;" placeholder="写下实际完成内容、测量结果或复盘心得"></textarea></label>' +
    '<div style="margin:12px 0;"><input type="file" accept="image/*,video/*,audio/*" onchange="uploadExecutionEvidence(this)"><div id="island-real-media-list"></div></div>' +
    '<button class="ui-btn primary" id="island-real-submit" onclick="submitRealExecution()">' + (saved ? '✓ 今日已完成' : '提交存证 · 完成今日打卡') + '</button></div></div>';
  const standard = document.getElementById('island-execution-standard');
  if (source) {
    source.style.cssText='position:relative;width:100%;height:auto;min-height:0;transform:none;';
    source.removeAttribute('id');source.querySelectorAll('[id]').forEach(el=>el.removeAttribute('id'));
    [source,...source.querySelectorAll('*')].forEach(el=>{for(const attr of Array.from(el.attributes))if(attr.name.startsWith('on'))el.removeAttribute(attr.name);});
    source.querySelectorAll('button, .work-card-connect-handle, [onclick]').forEach(el => { if (el.tagName === 'BUTTON' || el.classList.contains('work-card-connect-handle')) el.remove(); else el.removeAttribute('onclick'); });
    source.querySelectorAll('input,textarea,select,[contenteditable]').forEach(el => {
      if (el.type === 'checkbox' && card.dataset.checkinType === 'habit') { el.checked = false; el.removeAttribute('checked'); }
      else { el.disabled = true; el.removeAttribute('contenteditable'); }
    });
    standard.appendChild(source);
  } else {
    standard.textContent = card.querySelector('.work-node-body p')?.textContent || '按已约定的任务标准执行，保留真实记录。';
  }
  document.getElementById('island-real-submit').disabled = !!saved;
  const reflection=document.getElementById('island-real-reflection');reflection.value=saved?.reflection || draft?.reflection || '';reflection.readOnly=!!saved;
  document.getElementById('island-real-timer').disabled=!!saved;
  if(saved)container.querySelectorAll('input').forEach(input=>input.disabled=true);
  evidenceSession.media.forEach(media=>{const row=document.createElement('div');row.textContent='✓ 已保存附件：'+media.name;document.getElementById('island-real-media-list').appendChild(row);});
  paintEvidenceTime();
}
const originalOpenExec = openExecCardPopupView;
openExecCardPopupView = function (type, card) {
  originalOpenExec(type, card);
  if (card) mountRealExecutionForm(card);
};
const originalCloseExec = closeExecCardPopupView;
closeExecCardPopupView = function () { saveExecutionDraft(); evidenceSession = null; originalCloseExec(); };

async function uploadExecutionEvidence(input) {
  const file = input.files?.[0]; const session = evidenceSession;
  if (!file || !session || session.saved) return;
  try {
    const result = await window.__saveIslandAttachment(file);
    if (evidenceSession !== session) return;
    session.media.push({ id: 'proof-' + Date.now(), name: file.name, type: file.type.split('/')[0], path: result.path });
    saveExecutionDraft();
    const row = document.createElement('div'); row.textContent = '✓ 已保存附件：' + file.name;
    document.getElementById('island-real-media-list')?.appendChild(row);
  } catch (error) { showIslandToast('⚠️ ' + error.message); }
  input.value = '';
}
function submitRealExecution() {
  if (!evidenceSession || evidenceSession.saved) return;
  const reflection = (document.getElementById('island-real-reflection')?.value || '').trim();
  const focusSeconds = getEvidenceElapsed();
  const checkboxes = Array.from(document.querySelectorAll('#island-execution-standard input[type=checkbox]'));
  if (checkboxes.length && checkboxes.some(c => !c.checked)) { showIslandToast('请先核验全部践行清单项'); return; }
  if (!reflection && !evidenceSession.media.length && focusSeconds < 60 && !checkboxes.length) { showIslandToast('请填写执行心得、上传真实物证或完成至少一分钟的专注计时'); return; }
  triggerGlobalCheckinClosedLoop({ ...evidenceSession, taskKey: evidenceSession.taskId, reflection, focusSeconds, checklistVerified: checkboxes.length > 0 });
}

triggerGlobalCheckinClosedLoop = function (options) {
  if (!options || (!options.reflection && !options.media?.length && !(options.focusSeconds >= 60) && !options.checklistVerified)) return false;
  const today = ensureBusinessDate(); const st = window.USER_PROFILE_STATE;
  const taskId = options.taskId || options.taskKey;
  if (!taskId || st.checkinRecords.some(r => r.taskId === taskId && r.date === today)) return false;
  const record = { taskId, nodeId: options.nodeId || taskId, projectId: options.projectId || options.projId || '', pavilionId: options.pavilionId || 'study', title: options.title || '执行任务', date: today, completedAt: new Date().toISOString(), focusSeconds: Math.max(0, options.focusSeconds || 0), reflection: options.reflection || '', media: options.media || [], checklistVerified: !!options.checklistVerified };
  st.checkinRecords.push(record); st.lastActiveDate = today;
  if(st.executionDrafts)delete st.executionDrafts[today+'|'+taskId];
  const project = window.GANTT_PROJECTS.find(p => p.id === record.projectId);
  if (project) {
    project.completedDays = project.completedDays || [];
    if (!project.completedDays.includes(today)) project.completedDays.push(today);
    const data = window.PROJECT_CANVAS_STORE[project.id];
    if (data) {
      data.executionRecords = data.executionRecords || {}; data.executionRecords[record.nodeId] = record;
      const update = root => {
        const node=Array.from(root.querySelectorAll('.tertiary-card')).find(c=>c.id===record.nodeId);
        if (!node) return;node.dataset.status='completed';node.dataset.completedDate=today;
        const status=node.querySelector('[id="status-text-'+record.nodeId+'"]');if(status)status.textContent='✓ 今日已完成 · '+today;
      };
      const holder=document.createElement('div');holder.innerHTML=data.cardsHtml || '';update(holder);data.cardsHtml=holder.innerHTML;
      const world=document.getElementById('tertiary-canvas-world');if(world && window.currentTertiaryProjId===project.id)update(world);
    }
  }
  const task = getTodayWeekCol()?.tasks.find(t => t.id === 'w-' + taskId || t.sourceNodeId === record.nodeId);
  if (task) { task.status = 'done'; task.evidence = record.media.map(m => m.path).join('\n') || record.reflection; task.reflection = record.reflection; }
  if (evidenceSession?.taskId === taskId) evidenceSession.saved = true;
  appendDailyAutoLog('⚡ 执行存证：《' + record.title + '》；实际专注 ' + Math.floor(record.focusSeconds / 60) + ' 分钟，附件 ' + record.media.length + ' 项', record.focusSeconds / 60);
  recalcAndRenderGlobalHUD(); renderHomeSemesterGoalsBanner(); renderWeekBoard(window.currentWeekFilter || 'all'); renderMonthCalendar();
  if (st.continuousDays >= 19 && !window.ACHIEVEMENT_STATE.cultivationItems.some(a => a.id === 'ACH-CULT-STREAK-19')) {
    window.ACHIEVEMENT_STATE.cultivationItems.unshift({ id:'ACH-CULT-STREAK-19', title:'连续十九天真实践行', date:today, icon:'🔥', projectType:'cultivation', projectTypeLabel:'坚持记录', projectName:'真实执行台账', metrics:[{name:'有效坚持天数',target:'19天',actual:st.continuousDays+'天'}], proof:'以执行台账、违约与亲子豁免记录核验', desc:'坚持源于每天的实际付出。' });
    appendDailyAutoLog('🏆 连续十九天真实践行荣誉已归档');
  }
  const button = document.getElementById('island-real-submit'); if (button) { button.disabled = true; button.textContent = '✓ 今日已完成'; }
  notifyIslandStateChanged(); showIslandToast('✓ 打卡已记录，项目、随记与成长指标已同步');
  return true;
};

// Planning buttons navigate to the execution surface; they never award a checkin.
handleNodeCheckin = function (button, id) {
  const project = window.GANTT_PROJECTS.find(p => p.id === window.currentTertiaryProjId);
  const source = document.getElementById(id);
  syncNewNodeToHomeExecution({ id, projectId: project?.id, title: source?.querySelector('.work-node-title')?.textContent || source?.dataset.label || '执行任务', pavilionId: project?.pavilion || currentWsPavilion });
  switchMainSection('island'); switchHomeGlobalView('exec');
  openExecCardPopupView('drill', document.getElementById('exec-sync-' + id));
};
completeTask = function (id) { const card = document.getElementById('exec-sync-' + id); if (card) openExecCardPopupView(card.dataset.checkinType || 'drill', card); };
completeCheckinPageCard = submitRealExecution;
handleExecPopupMainCheckin = submitRealExecution;
executeCustomCardCheckin = function (id) { handleNodeCheckin(null, id); };
handleCustomCardCheckin = function (btn, id) { handleNodeCheckin(btn, id); };

async function saveRealNoteMedia(input, type) {
  const file = input.files?.[0]; if (!file) return;
  if (!file.type.startsWith(type + '/')) { showIslandToast('请选择正确的文件类型'); return; }
  try {
    const result = await window.__saveIslandAttachment(file);
    ensureBusinessDate();
    window.NOTE_STATE.mediaList.unshift({ id: 'media-' + Date.now(), type, name: file.name, path: result.path, caption: file.name, time: new Date().toLocaleTimeString() });
    refreshNoteMediaGallery(); notifyIslandStateChanged();
  } catch (error) { showIslandToast('⚠️ ' + error.message); }
  input.value = '';
}
handleNotePhotoFile = input => saveRealNoteMedia(input, 'image');
handleNoteVideoFile = input => saveRealNoteMedia(input, 'video');
addNoteDemoMedia = function () { showIslandToast('请使用拍照或上传按钮添加真实物证'); };
openNoteMediaPreviewModal = function (id) {
  const note = window.NOTE_STATE;
  const media = note.mediaList.concat(note.historyEntries.flatMap(e => e.media || [])).find(m => m.id === id);
  if (!media?.path) { showIslandToast('这条旧记录未保存原始附件'); return; }
  const modal = document.getElementById('note-media-preview-modal');
  const body = document.getElementById('note-preview-modal-body');
  if (!modal || !body) return;
  body.replaceChildren();
  const element = document.createElement(media.type === 'video' ? 'video' : media.type === 'audio' ? 'audio' : 'img');
  element.src = window.__islandAttachmentUrl(media.path); element.style.cssText = 'max-width:100%;max-height:65vh;';
  if (media.type !== 'image') element.controls = true;
  body.appendChild(element); document.getElementById('note-preview-modal-title').textContent = media.name; modal.style.display = 'flex';
};
saveNoteDailyEntry = function () {
  const today = ensureBusinessDate(); const note = window.NOTE_STATE;
  const text = (document.getElementById('note-journal-textarea')?.value ?? note.journalText ?? '').trim();
  if (!text && !note.mediaList.length && !note.todayAutoLogs.length) { showIslandToast('请先记录随笔或上传真实影像'); return; }
  const entry = { id: 'entry-' + today, date: today, text, mood: note.currentMood, energy: note.currentEnergy, autoLogs: note.todayAutoLogs.map(l => typeof l === 'string' ? l : '[' + l.time + '] ' + l.text), media: note.mediaList.map(m => ({...m})) };
  const existing = note.historyEntries.findIndex(e => e.date === today);
  if (existing >= 0) note.historyEntries.splice(existing, 1, entry); else note.historyEntries.unshift(entry);
  note.journalText = text;
  const list = document.getElementById('note-history-list'); if (list) list.innerHTML = renderNoteHistoryEntriesHtml();
  const count = document.getElementById('note-history-count'); if (count) count.textContent = note.historyEntries.length;
  notifyIslandStateChanged(); showIslandToast('✓ 今日双轨随记已保存');
};
const oldNoteCounter = updateNoteTextCounter;
updateNoteTextCounter = function () { window.NOTE_STATE.journalText = document.getElementById('note-journal-textarea')?.value || ''; oldNoteCounter(); };

uploadBountyEvidence = function () {
  const bounty = window.BOUNTY_STATE; if (!bounty || bounty.status !== 'accepted') { showIslandToast('请先揭榜应战'); return; }
  const input = document.createElement('input'); input.type = 'file'; input.accept = 'image/*,video/*,audio/*';
  input.onchange = async () => {
    if (!input.files?.[0]) return;
    try { const file = input.files[0]; const result = await window.__saveIslandAttachment(file); bounty.evidenceUploaded = true; bounty.evidencePath = result.path; bounty.evidenceName = file.name; renderBountyModalAndBillboard(); notifyIslandStateChanged(); }
    catch (error) { showIslandToast('⚠️ ' + error.message); }
  }; input.click();
};
const oldCompleteBounty = completeBountyDemo;
completeBountyDemo = function () {
  const bounty = window.BOUNTY_STATE;
  if (bounty?.status === 'redeemed') return;
  if (!bounty?.evidencePath) { showIslandToast('请先上传真实挑战物证，再由家长核验兑现'); return; }
  oldCompleteBounty(); recalcAndRenderGlobalHUD(); notifyIslandStateChanged();
};

const oldAdjudicate=submitPactViolationAdjudication;
submitPactViolationAdjudication=function(){
  const before=window.USER_PROFILE_STATE.violationCount || 0;oldAdjudicate();
  if((window.USER_PROFILE_STATE.violationCount || 0)>before){const remedy=window.GANTT_PROJECTS.find(p=>p.id.startsWith('proj_remedy_'));if(remedy)remedy.endDate=shiftDate(remedy.startDate,6);recalcAndRenderGlobalHUD();notifyIslandStateChanged();}
};

triggerGoalDeliverableUpload = function (id, event) {
  event?.stopPropagation();const box=document.getElementById('goal-media-box-'+id);if(!box)return;
  const mode=document.getElementById('goal-deliverable-type-'+id)?.value || 'photo';
  const input=document.createElement('input');input.type='file';input.accept=mode==='video'?'video/*':'image/*';
  input.onchange=async()=>{if(!input.files?.[0])return;try{const file=input.files[0];const saved=await window.__saveIslandAttachment(file);box.dataset.uploaded='true';box.dataset.evidencePath=saved.path;box.textContent='✓ 已保存交付物：'+file.name;saveCurrentProjectCanvasSnapshot();notifyIslandStateChanged();}catch(error){showIslandToast(error.message);}};input.click();
};
const oldDepositGoal=depositGoalToAchievement;
depositGoalToAchievement=function(id,event){
  const button=document.getElementById('btn-deposit-'+id);
  if(button?.dataset.deposited==='true'){oldDepositGoal(id,event);return;}
  const mode=document.getElementById('goal-deliverable-type-'+id)?.value || 'photo';
  const box=document.getElementById('goal-media-box-'+id);const text=document.getElementById('goal-deliverable-text-'+id)?.value.trim();
  if((mode==='text'&&!text)||(mode!=='text'&&!box?.dataset.evidencePath)){showIslandToast('请先提交真实交付物后再归档成果');return;}
  oldDepositGoal(id,event);
  const achievement=window.ACHIEVEMENT_STATE.cultivationItems[0];if(achievement){achievement.proof=mode==='text'?text:box.dataset.evidencePath;achievement.sourceProjectId=window.currentTertiaryProjId;achievement.sourceNodeId=id;}
  saveCurrentProjectCanvasSnapshot();notifyIslandStateChanged();
};

const oldTreasuryRecord=recordLiveTreasuryTransaction;
recordLiveTreasuryTransaction=function(){
  const amount=document.getElementById('treasury-tx-amount-input');if(!amount)return;
  const raw=Number(amount.value);if(!Number.isFinite(raw)||raw<=0||!Number.isSafeInteger(Math.round(raw*100))||Math.abs(raw*100-Math.round(raw*100))>1e-7){showIslandToast('金额必须为正数，最多保留两位小数');return;}
  oldTreasuryRecord();
  const treasury=window.TREASURY_STATE;for(const key of ['totalBalance','totalIncome','totalExpense'])treasury[key]=Math.round(treasury[key]*100)/100;
  if(treasury.ledger[0])treasury.ledger[0].balanceAfter=treasury.totalBalance;notifyIslandStateChanged();
};

const originalDerive = deriveNodesFromReflectionCard;
deriveNodesFromReflectionCard = function (id, event) {
  const world = document.getElementById('tertiary-canvas-world');
  const parent = document.getElementById(id); if (!parent || !world?.contains(parent)) return;
  const before = new Set(Array.from(world.querySelectorAll('.tertiary-card')).map(c => c.id));
  originalDerive(id, event);
  const children = Array.from(world.querySelectorAll('.tertiary-card')).filter(c => !before.has(c.id));
  if (!children.length) return;
  parent.dataset.groupId = parent.dataset.groupId || 'group-' + id; parent.dataset.groupRoot = id;
  children.forEach(c => { c.dataset.groupId = parent.dataset.groupId; c.dataset.groupRoot = id; });
  saveCurrentProjectCanvasSnapshot();
};
handleTertiaryDeleteNode = function () {
  const world = document.getElementById('tertiary-canvas-world');
  const cards = Array.from(world?.querySelectorAll('.tertiary-card') || []);
  const target = cards.find(c => c.classList.contains('is-selected'));
  if (!target) { showIslandToast('请先选中要移除的节点'); return; }
  if (target.dataset.groupId && target.dataset.groupRoot !== target.id) { showIslandToast('派生节点受成组保护，请选择主复盘节点操作整组'); return; }
  pushTertiaryHistory();
  const ids = new Set(cards.filter(c => c === target || (target.dataset.groupId && c.dataset.groupId === target.dataset.groupId)).map(c => c.id));
  cards.filter(c => ids.has(c.id)).forEach(c => c.remove());
  document.querySelectorAll('#day-card-deck .exec-task-card').forEach(c => { if (ids.has(c.dataset.nodeId)) c.remove(); });
  WEEK_BOARD_DATA.forEach(col => { col.tasks = col.tasks.filter(t => !ids.has(t.sourceNodeId)); });
  window.TERTIARY_EDGES = (window.TERTIARY_EDGES || []).filter(e => !ids.has(e.sourceId) && !ids.has(e.targetId));
  renderTertiaryEdges(); saveCurrentProjectCanvasSnapshot(); recalcAndRenderGlobalHUD(); updateDayCarousel();
};

const oldStarter = buildStarterCanvasForProject;
buildStarterCanvasForProject = function (p) { return oldStarter(p ? {...p, title: escapeIslandText(p.title), desc: escapeIslandText(p.desc)} : p); };
let renderingSafeNote = false;
function withSafeNote(renderer) {
  if (renderingSafeNote) return renderer();
  const original = window.NOTE_STATE;
  const safe = value => typeof value === 'string' ? escapeIslandText(value) : Array.isArray(value) ? value.map(safe) : value && typeof value === 'object' ? Object.fromEntries(Object.entries(value).map(([k,v]) => [k,safe(v)])) : value;
  renderingSafeNote = true; window.NOTE_STATE = safe(original);
  try { return renderer(); } finally { window.NOTE_STATE = original; renderingSafeNote = false; }
}
const oldNoteWorkspace = renderNoteSpecializedWorkspace;
renderNoteSpecializedWorkspace = () => withSafeNote(oldNoteWorkspace);
const oldNoteHistory = renderNoteHistoryEntriesHtml;
renderNoteHistoryEntriesHtml = function () {
  return window.NOTE_STATE.historyEntries.map(entry=>'<div class="note-history-card"><strong>📅 '+escapeIslandText(entry.date)+' · '+escapeIslandText(entry.mood || '')+'</strong><div>'+(entry.autoLogs || []).map(l=>'<div>'+escapeIslandText(typeof l==='string'?l:l.text)+'</div>').join('')+'</div><p style="white-space:pre-wrap;">'+escapeIslandText(entry.text || entry.content || '')+'</p><div>'+(entry.media || []).map(m=>'<button class="note-media-action-btn" onclick="'+escapeIslandText('openNoteMediaPreviewModal('+JSON.stringify(m.id)+')')+'">'+escapeIslandText(m.name)+'</button>').join('')+'</div></div>').join('') || withSafeNote(oldNoteHistory);
};

// Rebind restored cards and the current project without re-saving sample DOM.
function restoreBusinessViews() {
  ensureBusinessDate();
  const streak = document.getElementById('hud-streak-count');
  if (streak) { streak.title='查看坚持记录与亲子审批保护'; streak.style.cursor='pointer'; streak.onclick=openStreakFreezeDialog; }
  const grid = document.getElementById('island-pavilion-grid');
  for (const [key, meta] of Object.entries(window.PAVILION_META || {})) {
    if (!key.startsWith('custom-') || document.getElementById('node-' + key) || !grid) continue;
    const node = document.createElement('div'); node.className = 'pavilion-node custom-module-node'; node.id = 'node-' + key;
    node.style.cssText = 'top:50%;left:' + (30 + grid.querySelectorAll('.custom-module-node').length * 12) + '%;';
    node.innerHTML = '<div class="pavilion-card-body"><div class="pavilion-3d-visual">' + escapeIslandText(meta.icon) + '</div></div><div class="pavilion-card-label">' + escapeIslandText(meta.name) + '</div>';
    node.onclick = () => handlePavilionClick(key); grid.appendChild(node); initNodeDragging(node);
    const picker = document.getElementById('proj-category-picker');
    if (picker && !Array.from(picker.children).some(c => c.dataset.cat === meta.cat)) { const chip = document.createElement('button'); chip.className = 'proj-cat-chip'; chip.dataset.cat = meta.cat; chip.textContent = meta.name; chip.onclick = () => selectProjCategory(chip, meta.cat); picker.appendChild(chip); }
  }
  const id = window.__restoredCanvasProjectId;
  const data = window.PROJECT_CANVAS_STORE[id];
  const world = document.getElementById('tertiary-canvas-world');
  if (data && world) {
    world.querySelectorAll('.tertiary-card').forEach(c => c.remove());
    const holder = document.createElement('div'); holder.innerHTML = data.cardsHtml || '';
    Array.from(holder.children).forEach(c => world.appendChild(c));
    window.TERTIARY_EDGES = data.edges || []; world.dataset.projectId = id;
    initTertiaryWorkspace();
  }
  document.querySelectorAll('#day-card-deck .exec-task-card[data-task-id]').forEach(card => card.setAttribute('onclick', "handleTaskCardClick(event, this.dataset.checkinType || 'drill')"));
  recalcAndRenderGlobalHUD();
}

function captureBusinessCanvas() {
  const world = document.getElementById('tertiary-canvas-world');
  syncFormStateToAttributes(world);
  return { cardsHtml: Array.from(world?.querySelectorAll('.tertiary-card') || []).map(c => {const copy=c.cloneNode(true);copy.removeAttribute('data-drag-bound');return copy.outerHTML;}).join('\n'), edges: JSON.parse(JSON.stringify(window.TERTIARY_EDGES || [])), deck: document.getElementById('day-card-deck')?.innerHTML || '', week: JSON.parse(JSON.stringify(WEEK_BOARD_DATA)) };
}
pushTertiaryHistory = function () { window.TERTIARY_HISTORY.undoStack.push(captureBusinessCanvas()); if(window.TERTIARY_HISTORY.undoStack.length>25)window.TERTIARY_HISTORY.undoStack.shift(); window.TERTIARY_HISTORY.redoStack=[]; };
function applyBusinessHistory(from, to) {
  const history = window.TERTIARY_HISTORY; if (!history[from].length) return;
  history[to].push(captureBusinessCanvas()); const state = history[from].pop();
  const world=document.getElementById('tertiary-canvas-world'); world.querySelectorAll('.tertiary-card').forEach(c=>c.remove());
  const holder=document.createElement('div');holder.innerHTML=state.cardsHtml || '';Array.from(holder.children).forEach(c=>world.appendChild(c));
  window.TERTIARY_EDGES=state.edges || []; if(state.week)WEEK_BOARD_DATA.splice(0,WEEK_BOARD_DATA.length,...state.week);
  const deck=document.getElementById('day-card-deck');if(deck && state.deck!==undefined)deck.innerHTML=state.deck;
  bindTertiaryCardsDrag();renderTertiaryEdges();saveCurrentProjectCanvasSnapshot();recalcAndRenderGlobalHUD();updateDayCarousel();
}
handleTertiaryUndo = () => applyBusinessHistory('undoStack','redoStack');
handleTertiaryRedo = () => applyBusinessHistory('redoStack','undoStack');

function openStreakFreezeDialog() {
  document.getElementById('island-freeze-dialog')?.remove();
  const overlay=document.createElement('div');overlay.id='island-freeze-dialog';overlay.style.cssText='position:absolute;inset:0;z-index:22000;background:#0009;display:flex;align-items:center;justify-content:center;';
  overlay.innerHTML='<div class="note-card-box" style="width:460px;max-width:90%;color:#334155;"><h3>坚持记录 · 亲子审批保护</h3><p>因生病、旅行等客观原因，每月最多保护两天。豁免只维持连续性，不增加打卡天数。</p><label>申请日期<input type="date" id="island-freeze-date"></label><label>客观原因<textarea id="island-freeze-reason" style="width:100%;"></textarea></label><label><input type="checkbox" id="island-freeze-confirm">家长已了解原因并同意保护本次断签</label><div style="display:flex;gap:8px;margin-top:12px;"><button class="ui-btn primary" onclick="submitStreakFreeze()">批准保护</button><button class="ui-btn" onclick="document.getElementById(\'island-freeze-dialog\').remove()">关闭</button></div></div>';
  document.querySelector('.youth-island-plugin-root').appendChild(overlay);
  const date=document.getElementById('island-freeze-date');date.value=shiftDate(localDateKey(),-1);date.max=date.value;date.min=localDateKey().slice(0,7)+'-01';
}
function submitStreakFreeze() {
  const date=document.getElementById('island-freeze-date')?.value;const reason=document.getElementById('island-freeze-reason')?.value.trim();
  const confirmed=document.getElementById('island-freeze-confirm')?.checked;const today=ensureBusinessDate();const profile=window.USER_PROFILE_STATE;
  profile.freezeRecords=profile.freezeRecords || [];profile.approvedFreezeDays=profile.approvedFreezeDays || [];
  if(!date || date>=today || date.slice(0,7)!==today.slice(0,7) || !reason || !confirmed){showIslandToast('请选择本月已过去的日期、填写原因并由家长批准');return;}
  if(profile.approvedFreezeDays.includes(date) || profile.checkinRecords.some(r=>r.date===date) || profile.violationRecords.some(r=>(r.time || r.date || '').slice(0,10)===date)){showIslandToast('该日期已有保护、有效打卡或违约事实，不能申请');return;}
  if(profile.freezeRecords.filter(r=>r.date.slice(0,7)===date.slice(0,7)).length>=2){showIslandToast('本月两次保护额度已用完');return;}
  profile.freezeRecords.push({date,reason,approvedAt:new Date().toISOString()});profile.approvedFreezeDays.push(date);profile.streakFreezeAllowance=2;profile.streakFreezeUsed=profile.freezeRecords.filter(r=>r.date.slice(0,7)===date.slice(0,7)).length;
  appendDailyAutoLog('🛡 亲子批准断签保护：'+date+'（'+reason+'）');recalcAndRenderGlobalHUD();document.getElementById('island-freeze-dialog').remove();notifyIslandStateChanged();
}
