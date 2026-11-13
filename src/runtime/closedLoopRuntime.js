// Authoritative structured entities; HTML, calendar columns and cards are projections.
let activeDomainState = null;
let renderingDomain = false;
const domainTypeNames={goal:'🎯 目标分解',drill:'⚡ 攻坚实训',habit:'🌿 习惯践行',review:'📝 评估复盘',custom:'⚙️ 自定义配置',text:'📄 简单文本'};

function migrateCanvasNodes(snapshot,project) {
  if(Array.isArray(snapshot.nodes))return snapshot.nodes.map(n=>domainNode(n,project));
  const holder=document.createElement('div');holder.innerHTML=snapshot.cardsHtml||'';
  return Array.from(holder.querySelectorAll('.tertiary-card')).map(card=>{
    const value=selector=>card.querySelector(selector)?.value||'';
    const type=card.dataset.archetype||(['goal','drill','habit','reflection','custom','text'].find(t=>card.className.includes('tertiary-'+t))||'text');
    const cfg={id:card.id,title:card.querySelector('.work-node-title')?.textContent||card.dataset.label||'历史节点',archetype:type,
      canvasPosition:{x:parseFloat(card.style.left)||80,y:parseFloat(card.style.top)||90},groupId:card.dataset.groupId,groupRoot:card.dataset.groupRoot,
      duration:value('[id^=drill-duration-select]')||0,evidenceType:type==='drill'?'photo':'none',description:card.querySelector('.work-node-body')?.textContent.trim()||'',
      deliverableType:value('[id^=goal-deliverable-type]')||'text',deadline:value('input[type=datetime-local]')||null,
      metrics:Array.from(card.querySelectorAll('.card-goal-metric-item')).map(row=>({name:row.querySelector('.goal-metric-name')?.value||'指标',val:row.querySelector('.goal-metric-val')?.value||''})),
      checklistItems:Array.from(card.querySelectorAll('.habit-checklist-input')).map(input=>input.value),
      improvements:Array.from(card.querySelectorAll('.reflection-improvement-input')).map(input=>input.value),
      isCheckinNode:['drill','habit','reflection'].includes(type)||(type==='custom'&&!card.textContent.includes('纯信息沉淀'))};
    if(type==='goal')cfg.evidenceType=cfg.deliverableType;
    const node=domainNode(cfg,project);const record=snapshot.executionRecords?.[node.id];if(record)node.executionRecords=[record];
    return node;
  });
}
function bootstrapDomainState(force=false) {
  if(!force&&activeDomainState===window.DOMAIN_STATE&&activeDomainState)return activeDomainState;
  const previous=window.DOMAIN_STATE||{};
  const state={schemaVersion:3,revision:previous.revision||0,storageRevision:previous.storageRevision||0,projects:window.GANTT_PROJECTS||[],nodesByProject:{},records:previous.records?.length?previous.records:(window.USER_PROFILE_STATE.checkinRecords||[]),events:previous.events||[],bounties:previous.bounties||[],family:previous.family||{childName:'',guardianNames:'',signedAt:null,clauses:[]},historyByProject:previous.historyByProject||{},drafts:previous.drafts||{},taskAliases:previous.taskAliases||{},inquiries:window.INQUIRY_POOL_STATE||[]};
  for(const project of state.projects){const snapshot=window.PROJECT_CANVAS_STORE[project.id]||{};state.nodesByProject[project.id]=migrateCanvasNodes(snapshot,project);snapshot.nodes=state.nodesByProject[project.id];window.PROJECT_CANVAS_STORE[project.id]=snapshot;}
  if(window.BOUNTY_STATE&&!state.bounties.some(b=>b.id===window.BOUNTY_STATE.id))state.bounties.push(window.BOUNTY_STATE);
  if(window.BOUNTY_STATE)window.BOUNTY_STATE=state.bounties.find(b=>b.id===window.BOUNTY_STATE.id)||null;
  for(const b of state.bounties){b.createdDate=b.createdDate||domainDate();b.endDate=b.endDate||domainShift(b.createdDate,Math.max(0,(b.days||7)-1));}
  for(const record of state.records){record.id=record.id||domainId('record');if(record.validated===undefined){record.validated=false;record.legacyUnverified=true;}}
  window.DOMAIN_STATE=state;activeDomainState=state;window.USER_PROFILE_STATE.checkinRecords=state.records;
  return state;
}
function getDomainState(){return bootstrapDomainState();}
function getDomainNode(id){for(const nodes of Object.values(getDomainState().nodesByProject)){const node=nodes.find(n=>n.id===id);if(node)return node;}return null;}
function domainEvent(kind,sourceId,text,extra={}) {
  const state=getDomainState();const event={id:domainId('event'),kind,sourceId,date:domainDate(),timestamp:new Date().toISOString(),text,...extra};state.events.push(event);
  window.NOTE_STATE.todayAutoLogs.unshift({id:event.id,time:new Date().toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'}),text,sourceId,kind,projectId:extra.projectId||null,nodeId:extra.nodeId||null,recordId:extra.recordId||null});
  const entry=window.NOTE_STATE.historyEntries?.find(e=>e.date===event.date);if(entry)entry.autoLogs=[...window.NOTE_STATE.todayAutoLogs];
  state.revision++;window.dispatchEvent(new CustomEvent('youth-island:domain-event',{detail:event}));notifyIslandStateChanged();return event;
}
ensureBusinessDate=function(){
  const today=domainDate(),note=window.NOTE_STATE,profile=window.USER_PROFILE_STATE;
  profile.checkinRecords=profile.checkinRecords||[];profile.violationRecords=profile.violationRecords||[];note.historyEntries=note.historyEntries||[];
  if(note.dateKey&&note.dateKey!==today){
    const index=note.historyEntries.findIndex(e=>e.date===note.dateKey),old=index>=0?note.historyEntries[index]:{};
    const entry={...old,id:old.id||'entry-'+note.dateKey,date:note.dateKey,text:note.journalText??old.text??'',mood:note.currentMood,energy:note.currentEnergy,autoLogs:note.todayAutoLogs||[],media:note.mediaList||[],draft:true,updatedAt:new Date().toISOString()};
    if(index>=0){entry.versions=[...(old.versions||[]),{text:old.text||'',savedAt:old.savedAt||null}];note.historyEntries.splice(index,1,entry);}else note.historyEntries.unshift(entry);
    note.todayAutoLogs=[];note.todayFocusMinutes=0;note.journalText='';note.mediaList=[];
    // An execution crossing midnight is saved under its original occurrence.
    if(evidenceSession)saveExecutionDraft();evidenceSession=null;
  }
  note.dateKey=today;profile.statsDate=today;GANTT_TODAY=today;return today;
};
appendDailyAutoLog=function(text,minutes){ensureBusinessDate();const event=domainEvent('activity',null,String(text));window.NOTE_STATE.todayFocusMinutes=(window.NOTE_STATE.todayFocusMinutes||0)+(Number(minutes)||0);return event;};

function domainNodeHtml(node) {
  const p=node.cardPayload,project=getDomainState().projects.find(x=>x.id===node.projectId);const type=node.nodeType==='review'?'reflection':node.nodeType;
  const input=(field,value,kind='text')=>'<input class="add-module-text-input" type="'+kind+'" value="'+escapeIslandText(value??'')+'" onchange="updateDomainNode(\''+node.id+'\',\''+field+'\',this.value)">';
  let body='<label>主题'+input('title',node.title)+'</label><label>规划说明<textarea class="add-module-text-input" onchange="updateDomainNode(\''+node.id+'\',\'description\',this.value)">'+escapeIslandText(p.description)+'</textarea></label>';
  if(node.nodeType==='text')body='<textarea class="add-module-text-input" onchange="updateDomainNode(\''+node.id+'\',\'textContent\',this.value)">'+escapeIslandText(p.textContent)+'</textarea><button class="card-graphic-pill" onclick="acknowledgeDomainText(\''+node.id+'\')">👁 阅读留痕（'+node.readCount+'次）</button>';
  else {
    body+='<div class="domain-planning-row"><label>计划日期'+input('plannedDate',node.plannedDate,'date')+'</label><label>频次<select onchange="updateDomainNode(\''+node.id+'\',\'frequency\',this.value)">'+[['once','一次性'],['daily','每日'],['weekdays','周一至周五'],['weekly','每周同日']].map(([key,label])=>'<option value="'+key+'"'+(node.frequency===key?' selected':'')+'>'+label+'</option>').join('')+'</select></label></div>';
    if(node.nodeType==='goal')body+='<div>'+p.metrics.map(m=>'<div class="domain-planning-row">'+escapeIslandText(m.name)+'：'+escapeIslandText(m.targetValue)+'</div>').join('')+'</div><button class="card-graphic-pill" onclick="editDomainList(\''+node.id+'\',\'metrics\')">✏ 编辑指标</button><label>验收说明<textarea onchange="updateDomainNode(\''+node.id+'\',\'acceptanceCriteria\',this.value)">'+escapeIslandText(p.acceptanceCriteria)+'</textarea></label><label>期望截止时间'+input('targetDeadline',p.targetDeadline,'datetime-local')+'</label><button class="card-graphic-pill" onclick="depositGoalToAchievement(\''+node.id+'\',event)">🏆 记录已验收成果</button>';
    if(node.nodeType==='drill')body+='<label>专注分钟'+input('plannedMinutes',p.plannedMinutes,'number')+'</label>';
    if(node.nodeType==='habit')body+='<div>'+p.checklist.map(c=>'<div>□ '+escapeIslandText(c.title)+'</div>').join('')+'</div><button class="card-graphic-pill" onclick="editDomainList(\''+node.id+'\',\'checklist\')">✏ 编辑防守清单</button>';
    if(node.nodeType==='review')body+='<div>'+p.improvementList.map(c=>'<div>🌱 '+escapeIslandText(c.actionItem)+(c.derivedNodeId?' ✓ 已派生':'')+'</div>').join('')+'</div><button class="card-graphic-pill" onclick="editDomainList(\''+node.id+'\',\'improvementList\')">✏ 编辑提升清单</button><button class="card-graphic-pill" onclick="deriveNodesFromReflectionCard(\''+node.id+'\',event)">🌱 派生实训节点</button>';
    if(node.nodeType==='custom')body+='<div>'+p.customFieldsSchema.map(f=>'<div>'+escapeIslandText(f.label)+' · '+escapeIslandText(f.type)+(f.required?'（必填）':'')+'</div>').join('')+'</div><button class="card-graphic-pill" onclick="editDomainList(\''+node.id+'\',\'customFieldsSchema\')">✏ 编辑字段定义</button>';
    body+='<div class="domain-planning-row"><label><input type="checkbox"'+(node.isCheckinNode?' checked':'')+' onchange="updateDomainNode(\''+node.id+'\',\'isCheckinNode\',this.checked)">需要执行</label><label>物证<select onchange="updateDomainNode(\''+node.id+'\',\'evidenceType\',this.value)">'+[['none','无需附件'],['text','文字 ≥15字'],['photo','照片'],['video','视频'],['audio','音频']].map(([key,label])=>'<option value="'+key+'"'+(p.evidenceType===key?' selected':'')+'>'+label+'</option>').join('')+'</select></label></div>';
    body+='<label>前置节点<select multiple onchange="updateDomainDependencies(\''+node.id+'\',this)">'+(getDomainState().nodesByProject[node.projectId]||[]).filter(n=>n.id!==node.id&&n.isCheckinNode).map(n=>'<option value="'+n.id+'"'+(node.dependencies.includes(n.id)?' selected':'')+'>'+escapeIslandText(n.title)+'</option>').join('')+'</select></label>';
  }
  const records=getDomainState().records.filter(r=>r.nodeId===node.id);const status=records.length?'已留痕 '+records.length+' 次':'尚未执行';
  return '<div class="a-my-island-work-node-card tertiary-card tertiary-'+type+'-card" id="'+node.id+'" data-domain-node="true" data-label="'+escapeIslandText(node.title)+'" data-group-id="'+(node.groupId||'')+'" data-group-root="'+(node.groupRoot||'')+'" style="position:absolute;left:'+node.canvasPosition.x+'px;top:'+node.canvasPosition.y+'px;width:340px;"><div class="work-node-card-header" ondblclick="toggleTertiaryCardMinimize(\''+node.id+'\',event)"><span class="work-node-badge">'+domainTypeNames[node.nodeType]+'</span><span class="work-node-title">'+escapeIslandText(node.title)+'</span><span id="status-text-'+node.id+'">'+status+'</span></div><div class="work-node-body domain-planning-body">'+body+'</div><div class="work-card-connect-handle" data-card-id="'+node.id+'" onclick="startOrFinishConnecting(this.dataset.cardId,event)">🔗</div></div>';
}
function renderDomainCanvas(projectId) {
  const world=document.getElementById('tertiary-canvas-world');if(!world)return;
  world.querySelectorAll('.tertiary-card,.tertiary-node-card').forEach(c=>c.remove());
  for(const node of getDomainState().nodesByProject[projectId]||[]){world.insertAdjacentHTML('beforeend',domainNodeHtml(node));}
  world.dataset.projectId=projectId||'';window.currentTertiaryProjId=projectId||null;
  window.TERTIARY_EDGES=window.PROJECT_CANVAS_STORE[projectId]?.edges||[];bindTertiaryCardsDrag();renderTertiaryEdges();updateTertiaryNodeCountBadge();
}
saveCurrentProjectCanvasSnapshot=function(){
  const id=window.currentTertiaryProjId,world=document.getElementById('tertiary-canvas-world'),state=getDomainState();
  if(!id||world?.dataset.projectId!==id||!state.projects.some(p=>p.id===id))return;
  for(const node of state.nodesByProject[id]||[]){const card=document.getElementById(node.id);if(card&&world.contains(card))node.canvasPosition={x:parseFloat(card.style.left)||0,y:parseFloat(card.style.top)||0};}
  const existing=window.PROJECT_CANVAS_STORE[id]||{};
  window.PROJECT_CANVAS_STORE[id]={...existing,nodes:state.nodesByProject[id]||[],edges:window.TERTIARY_EDGES||[],cardsHtml:(state.nodesByProject[id]||[]).map(domainNodeHtml).join('\n')};
};
enterTertiaryWorkspace=function(id){const project=getDomainState().projects.find(p=>p.id===id);if(!project){showIslandToast('请先选择有效项目');return false;}saveCurrentProjectCanvasSnapshot();currentWsPavilion=project.pavilion;currentWsSubView='gantt';renderDomainCanvas(id);document.getElementById('tertiary-crumb-leaf').textContent=project.title;switchMainSection('tertiary');initTertiaryWorkspace();return true;};
function recordDomainHistory(){const id=window.currentTertiaryProjId;if(!id)return;const state=getDomainState();saveCurrentProjectCanvasSnapshot();const history=state.historyByProject[id]||(state.historyByProject[id]={undo:[],redo:[]});history.undo.push(JSON.parse(JSON.stringify({nodes:state.nodesByProject[id],edges:window.PROJECT_CANVAS_STORE[id]?.edges||[]})));if(history.undo.length>30)history.undo.shift();history.redo=[];}
pushTertiaryHistory=recordDomainHistory;
function restoreDomainHistory(from,to){const id=window.currentTertiaryProjId,state=getDomainState(),history=state.historyByProject[id];if(!history?.[from].length)return;history[to].push(JSON.parse(JSON.stringify({nodes:state.nodesByProject[id],edges:window.TERTIARY_EDGES||[]})));const next=history[from].pop();state.nodesByProject[id]=next.nodes;for(const node of next.nodes)node.executionRecords=getDomainState().records.filter(r=>r.nodeId===node.id).map(r=>r.id);window.PROJECT_CANVAS_STORE[id]={...window.PROJECT_CANVAS_STORE[id],nodes:next.nodes,edges:next.edges};renderDomainCanvas(id);refreshDomainProjections();notifyIslandStateChanged();}
handleTertiaryUndo=()=>restoreDomainHistory('undo','redo');handleTertiaryRedo=()=>restoreDomainHistory('redo','undo');
function updateDomainNode(id,key,value){const node=getDomainNode(id);if(!node)return;const project=getDomainState().projects.find(p=>p.id===node.projectId);
  if(key==='title'&&(value.trim().length<2||value.trim().length>30)){showIslandToast('节点标题须为2～30字');renderDomainCanvas(node.projectId);return;}
  if(key==='plannedDate'&&(!domainValidDate(value)||value<project.startDate||value>project.endDate)){showIslandToast('计划日期须在项目周期内');renderDomainCanvas(node.projectId);return;}
  if(key==='plannedMinutes'&&(!Number.isFinite(Number(value))||Number(value)<0||Number(value)>120)){showIslandToast('时长为0～120分钟');return;}
  recordDomainHistory();if(['title','frequency','plannedDate','isCheckinNode'].includes(key))node[key]=value;else node.cardPayload[key]=key==='plannedMinutes'?Number(value):value;node.updatedAt=new Date().toISOString();saveCurrentProjectCanvasSnapshot();refreshDomainProjections();notifyIslandStateChanged();
}
function domainDependencyCycle(node,dependencies){
  const nodes=getDomainState().nodesByProject[node.projectId];
  const reaches=(cursor,target,seen=new Set())=>{if(cursor===target)return true;if(seen.has(cursor))return false;seen.add(cursor);return (nodes.find(n=>n.id===cursor)?.dependencies||[]).some(next=>reaches(next,target,seen));};
  return dependencies.some(dep=>!nodes.some(n=>n.id===dep&&n.isCheckinNode)||reaches(dep,node.id));
}
function updateDomainDependencies(id,select){
  const node=getDomainNode(id),dependencies=Array.from(select.selectedOptions).map(o=>o.value);if(!node)return false;
  if(domainDependencyCycle(node,dependencies)){showIslandToast('前置须为同项目可执行节点，且不能形成循环');renderDomainCanvas(node.projectId);return false;}
  recordDomainHistory();node.dependencies=dependencies;
  const edges=(window.TERTIARY_EDGES||[]).filter(e=>e.targetId!==id||!['前置','依赖','阻塞'].includes(e.type));
  for(const sourceId of dependencies)edges.push({id:domainId('edge'),sourceId,targetId:id,type:'前置',label:'前置完成'});
  window.TERTIARY_EDGES=edges;saveCurrentProjectCanvasSnapshot();renderTertiaryEdges();refreshDomainProjections();notifyIslandStateChanged();return true;
}
const domainOldConnect=startOrFinishConnecting;
startOrFinishConnecting=function(id,event){const before=(window.TERTIARY_EDGES||[]).length;if(connectingSourceCardId&&connectingSourceCardId!==id)recordDomainHistory();domainOldConnect(id,event);if((window.TERTIARY_EDGES||[]).length!==before){saveCurrentProjectCanvasSnapshot();notifyIslandStateChanged();}};
handleEdgeTypeSelect=function(type){
  const edge=(window.TERTIARY_EDGES||[]).find(e=>e.id===currentActiveEdgeId);if(!edge)return false;
  const target=getDomainNode(edge.targetId),isDependency=['前置','依赖','阻塞'].includes(type),wasDependency=['前置','依赖','阻塞'].includes(edge.type);
  if(!target)return false;
  const remaining=target.dependencies.filter(id=>id!==edge.sourceId);
  if(isDependency&&domainDependencyCycle(target,[...remaining,edge.sourceId])){showIslandToast('前置须为同项目可执行节点，且不能形成循环');document.getElementById('edge-type-select').value=edge.type;return false;}
  recordDomainHistory();edge.type=type;edge.label=type==='none'?'':type;
  if(isDependency)target.dependencies=[...new Set([...remaining,edge.sourceId])];
  else if(wasDependency&&!window.TERTIARY_EDGES.some(e=>e.id!==edge.id&&e.sourceId===edge.sourceId&&e.targetId===edge.targetId&&['前置','依赖','阻塞'].includes(e.type)))target.dependencies=remaining;
  saveCurrentProjectCanvasSnapshot();renderTertiaryEdges();refreshDomainProjections();notifyIslandStateChanged();return true;
};
handleDeleteActiveEdge=function(){
  const edge=(window.TERTIARY_EDGES||[]).find(e=>e.id===currentActiveEdgeId);if(!edge)return false;recordDomainHistory();
  window.TERTIARY_EDGES=window.TERTIARY_EDGES.filter(e=>e.id!==edge.id);const target=getDomainNode(edge.targetId);
  if(target&&['前置','依赖','阻塞'].includes(edge.type)&&!window.TERTIARY_EDGES.some(e=>e.sourceId===edge.sourceId&&e.targetId===edge.targetId&&['前置','依赖','阻塞'].includes(e.type)))target.dependencies=target.dependencies.filter(id=>id!==edge.sourceId);
  document.getElementById('tertiary-edge-popover')?.classList.add('is-hidden');saveCurrentProjectCanvasSnapshot();renderTertiaryEdges();refreshDomainProjections();notifyIslandStateChanged();return true;
};
function editDomainList(id,key){const node=getDomainNode(id);const list=node.cardPayload[key]||[];const sample=key==='customFieldsSchema'?'[{"key":"count","label":"完成次数","type":"number","required":true}]':key==='metrics'?'[{"name":"正确率","targetValue":"≥98%"}]':key==='checklist'?'[{"title":"完成规范动作","required":true}]':'[{"actionItem":"下一次的具体行动","isChecked":true}]';
  document.getElementById('domain-list-editor')?.remove();const modal=document.createElement('div');modal.className='domain-modal';modal.id='domain-list-editor';modal.innerHTML='<div class="note-card-box"><h3>编辑'+({metrics:'通关指标',checklist:'防守清单',improvementList:'提升行动',customFieldsSchema:'填报项目'}[key])+'</h3><div id="domain-list-rows"></div><button class="ui-btn" id="domain-list-add">➕ 增加一项</button><div id="domain-list-error" role="alert"></div><button class="ui-btn primary" id="domain-list-save">保存</button><button class="ui-btn" onclick="document.getElementById(\'domain-list-editor\').remove()">取消</button></div>';(document.querySelector('.youth-island-plugin-root')||document.body).appendChild(modal);
  const rows=modal.querySelector('#domain-list-rows');const add=item=>{const row=document.createElement('div');row.className='domain-list-row';row.dataset.id=item.id||domainId('item');row.dataset.key=item.key||domainId('field');row.innerHTML='<input class="domain-item-label" placeholder="'+(key==='metrics'?'指标名称':key==='customFieldsSchema'?'填报项目名称':'具体行动')+'">'+(key==='metrics'?'<input class="domain-item-target" placeholder="例如 ≥98% 或文字验收标准">':'')+(key==='customFieldsSchema'?'<select class="domain-item-type"><option value="text">文字</option><option value="number">数字</option><option value="boolean">是/否</option><option value="date">日期</option></select><label><input class="domain-item-required" type="checkbox" checked>必填</label>':'')+'<button class="ui-btn">移除</button>';row.querySelector('.domain-item-label').value=item.name||item.title||item.actionItem||item.label||'';if(key==='metrics')row.querySelector('.domain-item-target').value=item.targetValue||'';if(key==='customFieldsSchema'){row.querySelector('select').value=item.type||'text';row.querySelector('input[type=checkbox]').checked=item.required!==false;}row.querySelector('button').onclick=()=>row.remove();rows.appendChild(row);};(list.length?list:[{}]).forEach(add);modal.querySelector('#domain-list-add').onclick=()=>add({});modal.querySelector('#domain-list-save').onclick=()=>{const parsed=Array.from(rows.children).map(row=>{const label=row.querySelector('.domain-item-label').value.trim(),id=row.dataset.id;if(!label)return null;if(key==='metrics')return {id,name:label,targetValue:row.querySelector('.domain-item-target').value.trim()};if(key==='customFieldsSchema')return {key:row.dataset.key,label,type:row.querySelector('select').value,required:row.querySelector('input[type=checkbox]').checked};const existing=list.find(x=>x.id===id);return key==='checklist'?{id,title:label,required:true}:{...existing,id,actionItem:label,isChecked:true};}).filter(Boolean);if(!parsed.length){modal.querySelector('#domain-list-error').textContent='请至少填写一项';return;}recordDomainHistory();node.cardPayload[key]=parsed;renderDomainCanvas(node.projectId);saveCurrentProjectCanvasSnapshot();refreshDomainProjections();modal.remove();notifyIslandStateChanged();};
}
function openDomainEditor(title,text,onSave){document.getElementById('domain-editor')?.remove();const modal=document.createElement('div');modal.id='domain-editor';modal.className='domain-modal';modal.innerHTML='<div class="note-card-box"><h3>'+escapeIslandText(title)+'</h3><textarea id="domain-editor-text" style="width:100%;min-height:240px;"></textarea><div id="domain-editor-error" role="alert"></div><button class="ui-btn primary" id="domain-editor-save">保存</button><button class="ui-btn" onclick="document.getElementById(\'domain-editor\').remove()">取消</button></div>';document.querySelector('.youth-island-plugin-root')?.appendChild(modal)||document.body.appendChild(modal);modal.querySelector('textarea').value=text;modal.querySelector('#domain-editor-save').onclick=()=>{try{onSave(modal.querySelector('textarea').value);modal.remove();notifyIslandStateChanged();}catch(error){modal.querySelector('#domain-editor-error').textContent=error.message;}};}
createTertiaryCustomPlanningCard=function(config){const state=getDomainState(),project=state.projects.find(p=>p.id===window.currentTertiaryProjId);if(!project){showIslandToast('请先选择项目再新增节点');return null;}recordDomainHistory();const nodes=state.nodesByProject[project.id]||(state.nodesByProject[project.id]=[]);const node=domainNode(config,project);node.canvasPosition=config.canvasPosition||{x:80+(nodes.length%3)*400,y:90+Math.floor(nodes.length/3)*440};nodes.push(node);renderDomainCanvas(project.id);saveCurrentProjectCanvasSnapshot();refreshDomainProjections();domainEvent('node.created',node.id,'新增规划节点《'+node.title+'》',{projectId:project.id});return document.getElementById(node.id);};
buildStarterCanvasForProject=function(project){const a=domainNode({id:'projnode-'+project.id+'-1',archetype:'goal',title:project.title+' · 阶段验收',isCheckinNode:false,evidenceType:'text'},project),b=domainNode({id:'projnode-'+project.id+'-2',archetype:'drill',title:project.title+' · 实训',duration:20,evidenceType:'photo'},project),c=domainNode({id:'projnode-'+project.id+'-3',archetype:'review',title:project.title+' · 复盘',dependencies:[b.id],evidenceType:'text'},project);a.canvasPosition={x:80,y:90};b.canvasPosition={x:480,y:90};c.canvasPosition={x:880,y:90};return {nodes:[a,b,c],edges:[{id:domainId('edge'),sourceId:b.id,targetId:c.id,label:'前置完成',type:'前置'}],cardsHtml:''};};
handleTertiaryDeleteNode=function(){const world=document.getElementById('tertiary-canvas-world'),target=world?.querySelector('.tertiary-card.is-selected');if(!target){showIslandToast('请先选择节点');return;}const state=getDomainState(),node=getDomainNode(target.id);if(!node)return;if(node.groupId&&node.groupRoot!==node.id){showIslandToast('请选择主节点操作整组');return;}recordDomainHistory();const nodes=state.nodesByProject[node.projectId],ids=new Set(nodes.filter(n=>n.id===node.id||(node.groupId&&n.groupId===node.groupId)).map(n=>n.id));state.nodesByProject[node.projectId]=nodes.filter(n=>!ids.has(n.id));for(const n of state.nodesByProject[node.projectId])n.dependencies=n.dependencies.filter(id=>!ids.has(id));window.PROJECT_CANVAS_STORE[node.projectId].edges=(window.TERTIARY_EDGES||[]).filter(e=>!ids.has(e.sourceId)&&!ids.has(e.targetId));renderDomainCanvas(node.projectId);saveCurrentProjectCanvasSnapshot();refreshDomainProjections();notifyIslandStateChanged();};

computeProjectProgressAndStatus=function(project){const state=getDomainState();const result=projectProgress(project,state.nodesByProject[project.id]||[],state.records);const today=domainDate();let status=project.isArchived?'已归档':result.complete?'已完成':today<project.startDate?(diffGanttDays(today,project.startDate)>5?'待规划':'待执行'):today>project.endDate?'待执行':'进行中';Object.assign(project,{progressPercent:result.progress,completedNodesCount:result.completedNodesCount,totalNodesCount:result.totalNodesCount});return {...result,status,totalDays:result.totalNodesCount,completedCount:result.completedNodesCount};};
const domainOldOpenProject=openAddProjectModal;
openAddProjectModal=function(){domainOldOpenProject();document.getElementById('input-proj-end').value=domainShift(domainDate(),13);handleProjDateChange();};
const domainOldConfirmProject=confirmAddNewProject;
confirmAddNewProject=function(){const title=document.getElementById('input-proj-title')?.value.trim(),start=document.getElementById('input-proj-start')?.value,end=document.getElementById('input-proj-end')?.value;if(!title||title.length<2||title.length>30||!domainValidDate(start)||!domainValidDate(end)||end<start){showIslandToast('请填写2～30字标题与有效起止日期');return false;}const editId=document.getElementById('input-proj-edit-id')?.value;const idBefore=new Set(window.GANTT_PROJECTS.map(p=>p.id));domainOldConfirmProject();const state=getDomainState(),project=window.GANTT_PROJECTS.find(p=>p.id===editId)||window.GANTT_PROJECTS.find(p=>!idBefore.has(p.id));if(!project)return false;const custom=Object.entries(PAVILION_META).find(([key,meta])=>key.startsWith('custom-')&&meta.cat===selectedNewProjCategory);if(custom)project.pavilion=custom[0];if(!state.nodesByProject[project.id])state.nodesByProject[project.id]=migrateCanvasNodes(window.PROJECT_CANVAS_STORE[project.id]||{},project);for(const node of state.nodesByProject[project.id]){node.pavilionId=project.pavilion;if(node.plannedDate<start)node.plannedDate=start;}refreshDomainProjections();domainEvent(editId?'project.updated':'project.created',project.id,project.title,{projectId:project.id});return true;};
toggleProjectArchive=function(id){const project=getDomainState().projects.find(p=>p.id===id);if(!project)return false;if(!project.isArchived&&!computeProjectProgressAndStatus(project).complete){showIslandToast('只有全部执行节点完成后才可归档；未完成任务请先调整规划');return false;}project.isArchived=!project.isArchived;project.archivedAt=project.isArchived?new Date().toISOString():null;refreshDomainProjections();renderGanttChart();domainEvent('project.archived',id,project.isArchived?'归档项目《'+project.title+'》':'恢复项目《'+project.title+'》');return true;};

function domainTasks(){const state=getDomainState();state.instances=scheduleDomain(state);return state.instances;}
function domainTodayTasks(tasks=domainTasks(),today=domainDate()){return tasks.filter(t=>t.date===today||(t.bountyId&&t.status!=='completed'));}
function resolveDomainTask(key){const state=getDomainState();return domainTasks().find(t=>t.id===key||t.id===state.taskAliases[key]||t.nodeId===key||('bounty-'+t.bountyId)===key)||null;}
syncNewNodeToHomeExecution=function(cfg){if(!cfg?.id)return;const state=getDomainState();let node=getDomainNode(cfg.sourceNodeId||cfg.id),project=state.projects.find(p=>p.id===(cfg.projectId||window.currentTertiaryProjId));if(!node&&project&&!cfg.id.startsWith('bounty-')){node=domainNode({id:cfg.id,title:cfg.title,description:cfg.desc,archetype:cfg.nodeType||'drill',duration:cfg.duration||0,evidenceType:cfg.evidenceType||'text',dependencies:cfg.dependencies||[]},project);state.nodesByProject[project.id].push(node);}if(node)state.taskAliases[cfg.id]=taskInstanceId(node.id,domainDate());refreshDomainProjections();notifyIslandStateChanged();};
function taskForCalendar(task){
  const state=getDomainState(),record=state.records.find(r=>r.id===task.recordId),node=getDomainNode(task.nodeId),meta=PAVILION_META[task.pavilionId]||{name:task.pavilionId,icon:'🎯'};
  const status={blocked:'前置未完成',ready:'就绪',scheduled:'未到期',completed:'已完成',overdue:'逾期'}[task.status];
  return {id:task.id,taskInstanceId:task.id,sourceNodeId:task.nodeId,projectId:task.projectId,pavilion:meta.name,pavilionBadge:meta.icon+' '+meta.name,title:task.title,status:task.status==='completed'?'done':task.status==='overdue'?'overdue':'pending',duration:record?Math.round(record.focusSeconds/60)+' 分钟':(node?.cardPayload.plannedMinutes||0)+' 分钟',time:'计划 '+task.date+(record?'；实际交付 '+record.date:''),instruction:(node?.cardPayload.description||'')+'（'+status+'）',evidence:record?.media?.map(m=>m.path).join('\n')||record?.reflection||'',reflection:record?.reflection||'',domainStatus:task.status};
}
getRecordsForDate=function(date){return domainTasks().filter(t=>t.date===date).map(taskForCalendar);};
syncWeekBoardToRealDate=function(){const monday=calMondayOf(new Date());for(let i=0;i<7;i++){const d=new Date(monday);d.setDate(d.getDate()+i);Object.assign(WEEK_BOARD_DATA[i],{dateKey:domainDate(d),dayIndex:i,dateStr:calPad2(d.getMonth()+1)+'/'+calPad2(d.getDate()),isToday:domainDate(d)===domainDate(),dayName:CAL_WEEK_NAMES[i],tasks:getRecordsForDate(domainDate(d))});}};
function refreshDomainProjections(){
  if(renderingDomain)return;renderingDomain=true;
  try{
    const today=ensureBusinessDate(),tasks=domainTasks(),deck=document.getElementById('day-card-deck');
    if(deck){
      deck.querySelectorAll('.exec-task-card').forEach(card=>card.remove());
      for(const task of domainTodayTasks(tasks,today).filter(t=>['ready','completed','overdue'].includes(t.status))){
        const card=document.createElement('div');card.id='exec-sync-'+task.id;card.className='exec-task-card tertiary-drill-card';
        Object.assign(card.dataset,{taskId:task.id,taskInstanceId:task.id,nodeId:task.nodeId||'',projectId:task.projectId||'',pavilion:task.pavilionId,label:task.title,checkinType:task.nodeType});
        card.setAttribute('onclick','handleTaskCardClick(event,this.dataset.checkinType)');
        card.innerHTML='<div class="work-node-card-header"><span class="work-node-badge">'+escapeIslandText(PAVILION_META[task.pavilionId]?.name||'悬赏')+'</span><span class="work-node-title">'+escapeIslandText(task.title)+'</span><span class="task-status-pill '+(task.status==='completed'?'completed':'pending')+'">'+({completed:'✓ 今日已完成',overdue:'逾期待执行',ready:'待执行'}[task.status])+'</span></div><div class="work-node-body"><p>'+escapeIslandText(getDomainNode(task.nodeId)?.cardPayload.description||'按契约执行并提交真实物证')+'</p><button class="card-graphic-pill" onclick="event.stopPropagation();openDomainTask(\''+task.id+'\')">打开任务</button></div>';
        deck.appendChild(card);
      }
      const empty=document.getElementById('day-deck-empty-placeholder');if(empty)empty.style.display=deck.querySelector('.exec-task-card')?'none':'flex';
      currentDayCardIndex=Math.min(currentDayCardIndex,Math.max(0,deck.querySelectorAll('.exec-task-card').length-1));
      const dots=document.getElementById('exec-carousel-dots');
      if(dots)dots.innerHTML=Array.from(deck.querySelectorAll('.exec-task-card'),(_,i)=>'<button class="pagination-dot-pill" aria-label="第'+(i+1)+'项任务" onclick="currentDayCardIndex='+i+';updateDayCarousel()"></button>').join('');
      updateDayCarousel();
    }
    syncWeekBoardToRealDate();renderWeekBoard(window.currentWeekFilter||'all');renderMonthCalendar();renderHomeSemesterGoalsBanner();recalcAndRenderGlobalHUD();
  }finally{renderingDomain=false;}
}
refreshBusinessMetrics=function(){const today=ensureBusinessDate(),state=getDomainState(),tasks=domainTodayTasks(domainTasks(),today),st=window.USER_PROFILE_STATE;const owed=tasks.filter(t=>t.status!=='blocked'&&t.status!=='scheduled');const planned=owed.filter(t=>!t.contract),contracts=owed.filter(t=>t.contract),done=list=>list.filter(t=>t.status==='completed').length;st.completedTodayCount=done(owed);st.totalTodayCount=owed.length;st.continuousDays=computeStreak(state.records.filter(r=>r.validated===true).map(r=>r.date),st.violationRecords.map(r=>(r.date||r.time||'').slice(0,10)),st.approvedFreezeDays||[],today);st.streakDays=st.continuousDays;st.maxContinuousDays=Math.max(st.maxContinuousDays||0,st.continuousDays);st.fulfillmentRate=fulfillmentRate(done(planned),planned.length,done(contracts),contracts.length,st.violationCount||0);st.totalFocusMinutes=Math.round(state.records.filter(r=>r.validated===true).reduce((sum,r)=>sum+(r.focusSeconds||0),0)/60);window.NOTE_STATE.todayFocusMinutes=state.records.filter(r=>r.date===today&&r.validated===true).reduce((sum,r)=>sum+(r.focusSeconds||0),0)/60;return st.fulfillmentRate;};
computeCurrentFulfillmentRate=refreshBusinessMetrics;
restoreBusinessViews=function(){bootstrapDomainState(true);const state=getDomainState();for(const project of state.projects)window.PROJECT_CANVAS_STORE[project.id].nodes=state.nodesByProject[project.id];if(state.projects.some(p=>p.id===window.currentTertiaryProjId))renderDomainCanvas(window.currentTertiaryProjId);else{document.getElementById('tertiary-canvas-world')?.querySelectorAll('.tertiary-card').forEach(c=>c.remove());window.currentTertiaryProjId=null;}refreshDomainProjections();};
