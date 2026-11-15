// Cross-module transactions audited against PRD 1.2.2.
const integrityConfirmProject=confirmAddNewProject;
confirmAddNewProject=function(){
  const id=document.getElementById('input-proj-edit-id')?.value,project=getDomainState().projects.find(p=>p.id===id);
  if(project){
    const start=document.getElementById('input-proj-start').value,end=document.getElementById('input-proj-end').value;
    const outside=(getDomainState().nodesByProject[id]||[]).filter(node=>node.plannedDate<start||node.plannedDate>end);
    if(outside.length){showIslandToast('新周期会排除已有节点，请先调整节点计划日：'+outside.map(n=>n.title).join('、'));return false;}
  }
  return integrityConfirmProject();
};
confirmAddProject=confirmAddNewProject;

// This legacy entry must create the same structured node as the ordinary creator.
handleConfirmTertiaryCreateModule=submitNodeCreator;
openTertiaryCreateModuleModal=function(){if(!openNodeCreator())return false;selectNodeCreatorType('custom');return true;};
closeTertiaryCreateModuleModal=closeNodeCreator;
createCustomModule=openTertiaryCreateModuleModal;
const integrityCollapse=toggleTertiaryCardMinimize,integrityCycleLayout=cycleHomeLayout,integrityFollow=toggleChildrenFollowToolbar;
toggleTertiaryCardMinimize=function(id,event){
  const result=integrityCollapse(id,event),node=getDomainNode(id);if(!node)return result;
  const nav=getDomainState().navigation,previous=nav.projects[node.projectId]||{collapsed:false},ids=new Set(previous.collapsedNodeIds||[]);
  if(document.getElementById(id)?.classList.contains('is-minimized'))ids.add(id);else ids.delete(id);
  nav.projects[node.projectId]={...previous,collapsedNodeIds:[...ids]};notifyIslandStateChanged();return result;
};
cycleHomeLayout=function(){
  const prefs=getDomainState().navigation.planning,nodes=Array.from(document.querySelectorAll('#island-pavilion-grid .pavilion-node')).filter(node=>getComputedStyle(node).display!=='none');
  if(currentHomeLayoutIndex===0)prefs.freeLayout=Object.fromEntries(nodes.map(node=>[node.id,{left:node.style.left,top:node.style.top}]));
  const result=integrityCycleLayout();
  if(currentHomeLayoutIndex===1){const cols=Math.ceil(Math.sqrt(nodes.length)),rows=Math.ceil(nodes.length/cols);nodes.forEach((node,i)=>{node.style.left=((i%cols+1)*100/(cols+1))+'%';node.style.top=((Math.floor(i/cols)+1)*100/(rows+1))+'%';});}
  if(currentHomeLayoutIndex===0&&prefs.freeLayout)for(const node of nodes){const pos=prefs.freeLayout[node.id];if(pos){node.style.left=pos.left;node.style.top=pos.top;}}
  prefs.layoutIndex=currentHomeLayoutIndex;captureDomainLayout();notifyIslandStateChanged();return result;
};
toggleChildrenFollowToolbar=function(){const result=integrityFollow();getDomainState().navigation.followChildren=childrenFollowEnabled;notifyIslandStateChanged();return result;};

confirmAddNewModule=function(){
  const name=document.getElementById('input-module-name')?.value.trim(),description=document.getElementById('input-module-badge')?.value.trim()||'';
  if(!name||name.length<2||name.length>30){showIslandToast('场馆名称须为2～30字');return false;}
  const id=domainId('custom'),icon=String(selectedModuleIcon||'🎨');
  PAVILION_META[id]={name,icon,description,cat:id,specializedTitle:name+'规划空间',hasGantt:true,hasTertiary:true,position:{left:'50%',top:'50%'}};
  window.PAVILION_CARDS=window.PAVILION_CARDS||{};window.PAVILION_CARDS[id]={id,name,icon,category:id,description};
  closeAddModuleModal();restoreBusinessViews();domainEvent('pavilion.created',id,'新增规划场馆《'+name+'》');return id;
};
const integrityRestore=restoreBusinessViews;
restoreBusinessViews=function(){
  integrityRestore();const nav=getDomainState().navigation;
  if(typeof nav.followChildren==='boolean')childrenFollowEnabled=nav.followChildren;
  document.querySelectorAll('#btn-ws-children-follow,#btn-tertiary-children-follow').forEach(button=>button.classList.toggle('is-active',childrenFollowEnabled));
  if(Number.isInteger(nav.planning.layoutIndex)&&nav.planning.layoutIndex>=0&&nav.planning.layoutIndex<3){currentHomeLayoutIndex=nav.planning.layoutIndex;const label=document.getElementById('lbl-home-layout');if(label)label.textContent=homeLayoutNames[currentHomeLayoutIndex];document.getElementById('btn-home-layout')?.classList.toggle('is-active',currentHomeLayoutIndex===0);}
  for(const [id,meta]of Object.entries(PAVILION_META)){
    const node=document.getElementById('node-'+id);if(!node)continue;
    if(meta.position?.left)node.style.left=meta.position.left;if(meta.position?.top)node.style.top=meta.position.top;
    if(!id.startsWith('custom-'))continue;let caption=node.querySelector('.custom-module-description');if(!caption){caption=document.createElement('div');caption.className='custom-module-description';caption.style.cssText='font-size:10px;color:#8c7355;text-align:center';node.querySelector('.pavilion-card-label')?.after(caption);}caption.textContent=meta.description||'';
  }
};

exportDomainDocument=async function(path,title,content){
  try{
    if(window.__exportIslandDocument){await window.__exportIslandDocument(path,content);return true;}
    const url=URL.createObjectURL(new Blob([content],{type:'text/markdown;charset=utf-8'})),link=document.createElement('a');link.href=url;link.download=title+'.md';link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);return true;
  }catch(error){showIslandToast('档案导出失败：'+error.message);return false;}
};
function domainNotePath(relative){return window.__islandDocumentPath?window.__islandDocumentPath(relative):relative;}
exportDomainAchievement=async function(id){
  const award=[...window.ACHIEVEMENT_STATE.cultivationItems,...window.ACHIEVEMENT_STATE.accidentalItems].find(a=>a.id===id);if(!award)return false;
  const state=getDomainState(),project=state.projects.find(p=>p.id===award.sourceProjectId),recordIds=[...new Set([award.sourceRecordId,...(award.sourceRecordIds||[])].filter(Boolean))],records=state.records.filter(r=>recordIds.includes(r.id));
  const projectPath=project&&window.__islandProjectNotePath?.(project);
  const source=projectPath?'[['+projectPath+'|来源项目]]':project?'来源项目：'+project.title+'（笔记自动导出未启用）':award.bountyId?'来源：亲子悬赏契约':'来源：生活高光或历史记录';
  const standards=records.map(r=>'### 来源记录 '+r.id+'\n任务实例ID：'+(r.taskInstanceId||r.taskId||'历史缺失')+'\n计划日：'+(r.scheduledDate||'历史缺失')+'\n实际日：'+r.date+'\n实际专注：'+(r.focusSeconds||0)+'秒\n\n'+(r.reflection||'')+'\n\n'+(r.sourceSnapshot?'```json\n'+JSON.stringify(r.sourceSnapshot,null,2)+'\n```':'历史标准快照不完整')).join('\n\n');
  const body='# '+award.title+'\n\n成果ID：'+award.id+'\n日期：'+award.date+'\n源项目ID：'+(award.sourceProjectId||'无')+'\n源节点ID：'+(award.sourceNodeId||'无')+'\n源契约ID：'+(award.bountyId||'无')+'\n源记录ID：'+(recordIds.join('、')||'历史缺失或生活高光')+'\n审核/授予说明：'+(award.issuer||'未记录')+'\n\n'+source+'\n\n'+(award.metrics||[]).map(m=>'- '+m.name+'：目标 '+(m.target??m.targetValue??'未记录')+'；实测 '+(m.actual??'未记录')).join('\n')+'\n\n'+(award.desc||'')+'\n\n'+standards+'\n\n'+(award.media||[]).filter(m=>m.path).map(m=>'原件ID：'+m.id+'\n![['+m.path+']]').join('\n\n');
  return exportDomainDocument('exports/achievement-'+award.id+'.md',award.title,body);
};
const integrityJournalMood=switchNoteMood,integrityJournalEnergy=switchNoteEnergy;
switchNoteMood=function(...args){ensureBusinessDate();const result=integrityJournalMood(...args);notifyIslandStateChanged();return result;};
switchNoteEnergy=function(...args){ensureBusinessDate();const result=integrityJournalEnergy(...args);notifyIslandStateChanged();return result;};
