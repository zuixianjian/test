// Execution facts never write back the user-entered planning standard.
function freezeExecutionPlanning(node,saved){
  if(!node)return null;
  const snapshot=saved?.sourceSnapshot;
  return JSON.parse(JSON.stringify(snapshot?{...node,...snapshot,cardPayload:snapshot.cardPayload}:node));
}
function planningWriteAllowed(){
  if(!evidenceSession)return true;
  showIslandToast('请先返回规划视图，再修改项目规划。');return false;
}
function executionPlanningHtml(node,bounty){
  const p=node?.cardPayload||{},items=[];
  if(p.metrics?.length)items.push('<p>目标指标</p><ul>'+p.metrics.map(m=>'<li>'+escapeIslandText(m.name)+'：'+escapeIslandText(m.targetValue)+'</li>').join('')+'</ul>');
  if(p.acceptanceCriteria)items.push('<p>验收标准：'+escapeIslandText(p.acceptanceCriteria)+'</p>');
  if(p.checklist?.length)items.push('<p>规划清单</p><ul>'+p.checklist.map(c=>'<li>'+escapeIslandText(c.title)+(c.required!==false?'（必需）':'')+'</li>').join('')+'</ul>');
  if(p.improvementList?.length)items.push('<p>规划提升行动</p><ul>'+p.improvementList.map(c=>'<li>'+escapeIslandText(c.actionItem)+'</li>').join('')+'</ul>');
  if(p.customFieldsSchema?.length)items.push('<p>规划字段：'+p.customFieldsSchema.map(f=>escapeIslandText(f.label)+(f.required?'（必填）':'')).join('、')+'</p>');
  return '<section id="island-execution-standard"><h4>规划标准 · 只读</h4><p>'+escapeIslandText(p.description||bounty?.criteria||'')+'</p>'+items.join('')+'<p>计划专注：'+Number(p.plannedMinutes||0)+' 分钟 · '+escapeIslandText(bounty?'照片或视频原件':domainEvidenceLabel(p.evidenceType||'none'))+'</p></section>';
}
const boundaryUpdateNode=updateDomainNode,boundaryUpdateDependencies=updateDomainDependencies,boundaryEditList=editDomainList,boundaryCreateNode=createTertiaryCustomPlanningCard;
updateDomainNode=function(...args){if(planningWriteAllowed())return boundaryUpdateNode(...args);return false;};
updateDomainDependencies=function(...args){if(planningWriteAllowed())return boundaryUpdateDependencies(...args);return false;};
editDomainList=function(...args){if(planningWriteAllowed())return boundaryEditList(...args);return false;};
createTertiaryCustomPlanningCard=function(...args){if(planningWriteAllowed())return boundaryCreateNode(...args);return null;};
const boundaryDerive=deriveNodesFromReflectionCard;
deriveNodesFromReflectionCard=function(id,event){
  if(!planningWriteAllowed())return false;
  const source=getDomainNode(id),state=getDomainState(),record=[...state.records].reverse().find(r=>r.nodeId===id&&r.validated&&r.improvementList?.length);
  if(!source||!record)return boundaryDerive(id,event);
  event?.stopPropagation();const project=state.projects.find(p=>p.id===source.projectId),nodes=state.nodesByProject[project.id];let count=0;
  recordDomainHistory();
  source.groupId=source.groupId||domainId('group');source.groupRoot=id;
  for(const action of record.improvementList.filter(i=>i.isChecked!==false&&i.actionItem?.trim())){
    if(nodes.some(n=>n.cardPayload.derivedFrom?.recordId===record.id&&n.cardPayload.derivedFrom?.actionId===action.id))continue;
    const date=domainDefaultNodeDate(project),child=domainNode({title:action.actionItem.slice(0,30),nodeType:'drill',plannedDate:date,groupId:source.groupId,groupRoot:id,cardPayload:{description:action.actionItem,plannedMinutes:20,evidenceType:'photo',derivedFrom:{nodeId:id,recordId:record.id,actionId:action.id}}},project);
    child.canvasPosition={x:source.canvasPosition.x+400,y:source.canvasPosition.y+count*400};nodes.push(child);
    window.PROJECT_CANVAS_STORE[project.id].edges.push({id:domainId('edge'),sourceId:id,targetId:child.id,type:'派生',label:'复盘后续规划'});count++;
  }
  renderDomainCanvas(project.id);saveCurrentProjectCanvasSnapshot();refreshDomainProjections();
  if(count)domainEvent('review.derived',id,'基于已保存复盘创建 '+count+' 项后续规划',{projectId:project.id,recordId:record.id});else showIslandToast('该复盘行动已创建后续规划');return count;
};
const boundaryEnterPlanning=enterTertiaryWorkspace,boundarySwitchHome=switchHomeGlobalView;
enterTertiaryWorkspace=function(...args){if(evidenceSession)closeExecCardPopupView();return boundaryEnterPlanning(...args);};
switchHomeGlobalView=function(view){if(['plan','planning'].includes(view)&&evidenceSession)closeExecCardPopupView();return boundarySwitchHome(view);};
