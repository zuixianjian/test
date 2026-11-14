// The execution queue includes unfinished past occurrences without changing today's metrics.
let homeExecutionDate=null;
function renderHomeExecutionQueue(tasks,today){
  const deck=document.getElementById('day-card-deck');if(!deck)return;
  const activeId=deck.querySelector('.card-active')?.dataset.taskInstanceId;
  const queue=domainExecutionQueue(tasks,today),state=getDomainState();
  deck.querySelectorAll('.exec-task-card').forEach(card=>card.remove());
  for(const task of queue){
    const node=getDomainNode(task.nodeId),project=state.projects.find(p=>p.id===task.projectId),blocked=task.status==='blocked';
    const card=document.createElement('div');card.id='exec-sync-'+task.id;card.className='exec-task-card tertiary-drill-card home-execution-card';
    Object.assign(card.dataset,{taskId:task.id,taskInstanceId:task.id,nodeId:task.nodeId||'',projectId:task.projectId||'',pavilion:task.pavilionId,label:task.title,checkinType:task.nodeType,taskStatus:task.status});
    card.setAttribute('onclick','handleTaskCardClick(event,this.dataset.checkinType)');
    const status={ready:'待执行',overdue:'逾期待执行',blocked:task.date<today?'待前置 · 已逾期':'待前置完成',completed:'✓ 今日已完成'}[task.status]||'未到期';
    const dependencies=(node?.dependencies||[]).map(id=>getDomainNode(id)?.title||'缺失的前置节点').join('、');
    const action=blocked?'event.stopPropagation();jumpToDomainSource('+JSON.stringify(task.projectId)+','+JSON.stringify(task.nodeId)+')':'event.stopPropagation();openDomainTask('+JSON.stringify(task.id)+')';
    card.innerHTML='<div class="work-node-card-header"><span class="work-node-badge">'+escapeIslandText(PAVILION_META[task.pavilionId]?.name||'悬赏')+'</span><span class="work-node-title">'+escapeIslandText(task.title)+'</span><span class="task-status-pill '+(blocked?'blocked':task.status==='completed'?'completed':'pending')+'">'+status+'</span></div><div class="work-node-body"><p class="home-task-origin">'+escapeIslandText(project?.title||'亲子契约')+' · 计划 '+escapeIslandText(task.date)+'</p><p>'+escapeIslandText(node?.cardPayload.description||'按规划要求执行并提交真实内容')+'</p>'+(blocked?'<p class="home-task-blocked">请先完成：'+escapeIslandText(dependencies||'规划中的前置要求')+'</p>':'')+'<button type="button" class="card-graphic-pill" onclick="'+escapeIslandText(action)+'">'+(blocked?'查看前置规划':task.status==='completed'?'查看执行记录':'打开任务')+'</button></div>';
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
  summary.textContent='待执行 '+counts('ready')+' · 逾期 '+counts('overdue')+' · 待前置 '+counts('blocked')+' · 今日已完成 '+counts('completed');
  const activeIndex=queue.findIndex(t=>t.id===activeId);
  currentDayCardIndex=activeIndex>=0?activeIndex:Math.max(0,Math.min(currentDayCardIndex,queue.length-1));
  const dots=document.getElementById('exec-carousel-dots');
  if(dots)dots.innerHTML=queue.map((t,i)=>'<button type="button" class="pagination-dot-pill" aria-label="'+escapeIslandText('第'+(i+1)+'项：'+t.title)+'" onclick="goToDayCard('+i+')">'+(i+1)+'</button>').join('');
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
