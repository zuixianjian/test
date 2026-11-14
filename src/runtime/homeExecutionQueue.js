// Today's coverflow cards share the original five-type design and canonical task instances.
let homeExecutionDate=null;
function homeExecutionType(type){
  return ({goal:['🎯','目标分解','🌟 开始验收'],drill:['⚡','攻坚实训','🌟 立即打卡'],habit:['🌿','习惯践行','🌿 知行打卡'],review:['📝','评估复盘','✍️ 笃行复盘'],custom:['⚙️','自定义配置','🌟 完成打卡'],bounty:['⚔️','悬赏挑战','⚔️ 提交挑战物证']})[type]||['⚡','执行任务','开始执行'];
}
function homeExecutionPanel(title,content,kind=''){
  return '<section class="home-execution-panel '+kind+'"><h4>'+title+'</h4>'+content+'</section>';
}
function homeExecutionCardHtml(task,node,project){
  const p=node?.cardPayload||{},meta=homeExecutionType(task.nodeType),state=getDomainState(),record=state.records.find(r=>r.id===task.recordId),blocked=task.status==='blocked',completed=task.status==='completed';
  const action='event.stopPropagation();'+(blocked?'jumpToDomainSource('+JSON.stringify(task.projectId)+','+JSON.stringify(task.nodeId)+')':'openDomainTask('+JSON.stringify(task.id)+')');
  const button=(text,cls='')=>'<button type="button" class="card-graphic-pill '+cls+'" onclick="'+escapeIslandText(action)+'">'+text+'</button>';
  const description=p.description||state.bounties.find(b=>b.id===task.bountyId)?.criteria||'';
  let body=description?'<p class="home-execution-description">'+escapeIslandText(description)+'</p>':'';
  if(task.nodeType==='goal'){
    body+=homeExecutionPanel('🎯 量化通关指标','<div class="home-execution-columns"><span>指标名</span><span>目标标准</span></div>'+(p.metrics||[]).map(m=>'<div class="home-execution-metric"><span>'+escapeIslandText(m.name)+'</span><strong>'+escapeIslandText(m.targetValue)+'</strong></div>').join('')+(!(p.metrics||[]).length?'<p class="home-execution-muted">请在目标规划中设置验收指标</p>':''));
    if(p.acceptanceCriteria)body+=homeExecutionPanel('📋 验收标准','<p>'+escapeIslandText(p.acceptanceCriteria)+'</p>','is-dashed');
    if(p.targetDeadline)body+='<div class="home-execution-deadline">📅 期望完成 <strong>'+escapeIslandText(p.targetDeadline.replace('T',' ').slice(0,16))+'</strong></div>';
  }else if(task.nodeType==='drill'){
    body+='<div class="home-execution-focus"><span>⏱️ 计划专注时长</span><strong>'+Number(p.plannedMinutes||0)+' <small>分钟</small></strong></div>';
  }else if(task.nodeType==='habit'){
    body+=homeExecutionPanel('🛡️ 践行防守清单','<ul class="home-execution-checklist">'+(p.checklist||[]).map(c=>'<li><span class="home-execution-check '+(record?.checklistResults?.[c.id]?'is-checked':'')+'" aria-hidden="true">'+(record?.checklistResults?.[c.id]?'✓':'□')+'</span><span>'+escapeIslandText(c.title)+'</span>'+(c.required!==false?'<small>必需</small>':'')+'</li>').join('')+'</ul>'+(!(p.checklist||[]).length?'<p class="home-execution-muted">请在习惯规划中设置具体行动</p>':''),'is-dashed');
  }else if(task.nodeType==='review'){
    body=homeExecutionPanel('📝 复盘说明','<p>'+escapeIslandText(record?.reflection||description||'回顾过程，记录发现与下一步改善。')+'</p>');
    body+=homeExecutionPanel('🚀 提升清单','<ol class="home-execution-improvements">'+(record?.improvementList||p.improvementList||[]).map(i=>'<li>'+escapeIslandText(i.actionItem)+'</li>').join('')+'</ol>'+(!(record?.improvementList||p.improvementList||[]).length?'<p class="home-execution-muted">执行时填写下一步具体行动</p>':''),'is-dashed');
  }else if(task.nodeType==='custom'){
    const types={text:'文字',number:'数字',boolean:'是 / 否',date:'日期'};
    body+=homeExecutionPanel('📋 自定义业务字段',(p.customFieldsSchema||[]).map(f=>'<div class="home-execution-field"><span>'+escapeIslandText(f.label)+'</span><small>'+escapeIslandText(types[f.type]||f.type)+' · '+(f.required?'必填':'选填')+'</small></div>').join('')||'<p class="home-execution-muted">请在规划中维护需要填报的项目</p>','is-dashed');
  }
  const evidence=task.nodeType==='bounty'?'照片或视频原件':domainEvidenceLabel(p.evidenceType||'none');
  body+=homeExecutionPanel('📦 交付物证要求','<p>'+escapeIslandText(evidence)+'</p>'+button(blocked?'查看前置要求':completed?'📂 查看已交付内容':'📎 进入打卡页填写与提交','home-execution-delivery-button'),'home-execution-delivery');
  if(blocked)body+='<p class="home-task-blocked">请先完成：'+escapeIslandText((node?.dependencies||[]).map(id=>getDomainNode(id)?.title||'缺失的前置节点').join('、'))+'</p>';
  const status=blocked?'待前置完成':completed?'✓ 今日已完成':'🟡 今日待打卡';
  return '<header class="work-node-card-header"><span class="work-node-badge">'+meta[0]+' '+meta[1]+'</span><span class="work-node-title">'+escapeIslandText(task.title)+'</span><span class="task-status-pill '+(blocked?'blocked':completed?'completed':'pending')+'">'+status+'</span></header><div class="home-task-origin">'+escapeIslandText(project?.title||'亲子契约')+' · 计划 '+escapeIslandText(task.date)+'</div><div class="work-node-body home-execution-content">'+body+'</div><footer class="home-execution-footer"><span>'+(task.nodeType==='drill'?'预计专注：⏱️ '+Number(p.plannedMinutes||0)+' 分钟':completed?'✓ 执行记录已保存':'👉 点击卡片进入打卡页面')+'</span>'+button(blocked?'查看前置规划':completed?'查看执行记录':meta[2],'home-execution-primary')+'</footer>';
}
function renderHomeExecutionQueue(tasks,today){
  const deck=document.getElementById('day-card-deck');if(!deck)return;
  const activeId=deck.querySelector('.card-active')?.dataset.taskInstanceId;
  const queue=domainExecutionQueue(tasks,today),state=getDomainState();
  deck.querySelectorAll('.exec-task-card').forEach(card=>card.remove());
  for(const task of queue){
    const node=getDomainNode(task.nodeId),project=state.projects.find(p=>p.id===task.projectId);
    const card=document.createElement('div');card.id='exec-sync-'+task.id;card.className='exec-task-card tertiary-'+(task.nodeType==='review'?'reflection':task.nodeType==='bounty'?'drill':task.nodeType)+'-card home-execution-card';
    Object.assign(card.dataset,{taskId:task.id,taskInstanceId:task.id,nodeId:task.nodeId||'',projectId:task.projectId||'',pavilion:task.pavilionId,label:task.title,checkinType:task.nodeType,taskStatus:task.status,nodeType:task.nodeType});
    card.setAttribute('onclick','handleTaskCardClick(event,this.dataset.checkinType)');
    card.innerHTML=homeExecutionCardHtml(task,node,project);
    deck.appendChild(card);
  }
  let empty=document.getElementById('day-deck-empty-placeholder');
  if(!empty){
    empty=document.createElement('div');empty.id='day-deck-empty-placeholder';empty.className='exec-card-empty-placeholder';
    empty.innerHTML='<span aria-hidden="true">🏝️</span><h3></h3><p></p><button type="button" class="card-graphic-pill" onclick="switchHomeGlobalView(\'plan\')">🧭 前往规划新课题</button>';deck.prepend(empty);
  }
  if(empty){
    empty.style.display=queue.length?'none':'flex';
    const future=tasks.filter(t=>t.date>today).sort((a,b)=>a.date.localeCompare(b.date))[0];
    const title=empty.querySelector('h3'),text=empty.querySelector('p');
    if(title)title.textContent=future?'任务尚未到计划日期':'今日暂无待执行任务';
    if(text)text.textContent=future?'下一项计划：'+future.date+' · '+future.title+'。可在规划中调整计划日期。':'可在规划视图新增实训、习惯、复盘或自定义任务，并勾选“加入执行任务”。目标里程碑和文本便签默认不进入执行队列。';
  }
  let summary=document.getElementById('home-execution-summary');
  if(!summary){summary=document.createElement('div');summary.id='home-execution-summary';summary.className='home-execution-summary';summary.setAttribute('aria-live','polite');document.getElementById('exec-subview-day')?.prepend(summary);}
  const counts=key=>queue.filter(t=>t.status===key).length;
  summary.textContent='今日待执行 '+counts('ready')+' · 待前置 '+counts('blocked')+' · 今日已完成 '+counts('completed');
  const activeIndex=queue.findIndex(t=>t.id===activeId);
  currentDayCardIndex=activeIndex>=0?activeIndex:Math.max(0,Math.min(currentDayCardIndex,queue.length-1));
  const dots=document.getElementById('exec-carousel-dots');
  if(dots)dots.innerHTML=queue.map((t,i)=>'<button type="button" class="pagination-dot-pill" aria-label="'+escapeIslandText('第'+(i+1)+'项：'+t.title)+'" onclick="goToDayCard('+i+')"><span class="dot-circle"></span><span class="dot-text">'+homeExecutionType(t.nodeType)[0]+' '+escapeIslandText(t.title.slice(0,6))+'</span></button>').join('');
  updateDayCarousel();homeExecutionDate=today;
}
const homeQueueSwitch=switchHomeGlobalView,homeQueueSubview=switchExecSubView;
switchHomeGlobalView=function(mode){homeQueueSwitch(mode);if(currentGlobalView==='exec')refreshDomainProjections();};
switchExecSubView=function(view){homeQueueSubview(view);if(view==='day')refreshDomainProjections();};
function refreshHomeExecutionDate(){
  if(document.visibilityState==='hidden'||homeExecutionDate===domainDate())return;
  refreshDomainProjections();notifyIslandStateChanged();
}
window.addEventListener('focus',refreshHomeExecutionDate);
window.addEventListener('pageshow',refreshHomeExecutionDate);
window.addEventListener('visibilitychange',refreshHomeExecutionDate,true);
setInterval(refreshHomeExecutionDate,30000);
