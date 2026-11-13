(async()=>{
  const root=document.querySelector('.youth-island-plugin-root');root.innerHTML=Harness.ISLAND_UI_HTML;
  const controls=scope=>Array.from(scope.querySelectorAll('button,input,textarea,select,[onclick],[role=button]')).map(el=>({tag:el.tagName,id:el.id,type:el.type||'',text:(el.textContent||el.title||el.placeholder||'').trim().replace(/\s+/g,' ').slice(0,180),value:el.value??null,visible:!!el.getClientRects().length,disabled:!!el.disabled,readOnly:!!el.readOnly,events:Object.fromEntries(Array.from(el.attributes).filter(a=>a.name.startsWith('on')).map(a=>[a.name,a.value])),propertyClick:el.onclick?.toString().slice(0,300)||null,ancestors:Array.from((function*(node){for(let i=0;node&&i<15;i++,node=node.parentElement)if(node.id)yield node.id;})(el)).reverse()}));
  const designControls=controls(root);
  const displays=scope=>Array.from(scope.querySelectorAll('span,strong,p,h1,h2,h3,h4,td,li')).filter(el=>el.textContent.trim()&&!el.querySelector('span,strong,p,td,li')).map(el=>({id:el.id,tag:el.tagName,text:el.textContent.trim().replace(/\s+/g,' ').slice(0,220),visible:!!el.getClientRects().length,ancestor:el.closest('[id]')?.id||''}));
  const designDisplays=displays(root);
  const containers=Array.from(root.querySelectorAll('[id]')).filter(el=>/view|modal|frame|panel|workspace/.test(el.id)).map(el=>({id:el.id,parentId:el.parentElement?.closest('[id]')?.id||'',tag:el.tagName}));
  window.__saveIslandAttachment=async file=>({path:'attachments/audit/'+file.name,url:'data:'+file.type+';base64,AAAA'});window.__islandAttachmentUrl=p=>'app://'+p;
  const dispose=Harness.bootPrototypeRuntime();
  const probes=[],pageSnapshots=[];
  const probe=(id,title,actual,problemObserved)=>probes.push({id,title,problemObserved,actual});
  const snap=(page,method)=>pageSnapshots.push({page,method,controls:controls(root).filter(c=>c.visible),displays:displays(root).filter(c=>c.visible)});
  const today=(()=>{const n=new Date();return n.getFullYear()+'-'+String(n.getMonth()+1).padStart(2,'0')+'-'+String(n.getDate()).padStart(2,'0')})();
  const project=(id,title,pavilion='study')=>({id,title,pavilion,category:pavilion==='cultivation'?'修身立宪':pavilion==='dojo'?'兴趣特长':'学业攻坚',startDate:today,endDate:today,completedDays:[],isArchived:false});
  window.GANTT_PROJECTS.splice(0,window.GANTT_PROJECTS.length);window.PROJECT_CANVAS_STORE={};document.getElementById('day-card-deck').querySelectorAll('.exec-task-card').forEach(c=>c.remove());window.currentTertiaryProjId=null;
  for(const page of ['exec','plan']){window.switchMainSection('island');window.switchHomeGlobalView(page);snap('home-'+page,'top-level');}
  for(const type of ['week','month']){window.switchHomeGlobalView('exec');window.switchExecSubView(type);snap('home-'+type,'switchExecSubView');}window.switchExecSubView('day');
  for(const key of ['study','dojo','cognition','cultivation','treasury','tree','note','achieve']){window.enterSecondaryWorkspace(key,'gantt');snap(key+'-main','enterSecondaryWorkspace');}
  const unavailableSpecialized=[];
  for(const key of ['study','dojo','cognition']){window.enterSecondaryWorkspace(key,'gantt');window.switchSecondarySubView('specialized');unavailableSpecialized.push({key,specializedVisible:document.getElementById('ws-specialized-container').style.display!=='none',ganttVisible:document.getElementById('ws-gantt-main-container').style.display==='flex'});}
  for(const key of ['bg','char','env','immersive']){window.openOriginalSettingsPanel(key);snap('settings-'+key,'openOriginalSettingsPanel');window.closeOriginalSettingsPanel();}
  window.openDaxueItemDetailModal('gewu');snap('daxue-item','openDaxueItemDetailModal');window.closeDaxueItemDetailModal();
  for(const [fn,page] of [['openBountyModal','bounty'],['openInquiryModal','inquiry'],['openFamilyPactModal','pact'],['openDaxuePhilosophyModal','daxue'],['openRegisterAccidentalAchievementModal','accidental'],['openStreakFreezeDialog','freeze']]){
    try{window[fn]();snap(page,fn);const modalIds=['bounty-modal-backdrop','inquiry-pool-modal','family-pact-modal','daxue-philosophy-modal','register-accidental-achievement-modal'];modalIds.forEach(id=>{const el=document.getElementById(id);if(el){el.style.display='none';el.classList.remove('open','is-open');}});document.getElementById('island-freeze-dialog')?.remove();}catch(error){probe('route-'+page,'route failed',{message:error.message},true);}
  }
  window.enterSecondaryWorkspace('study','gantt');window.openAddProjectModal();snap('add-project','openAddProjectModal');
  const start=document.getElementById('input-proj-start').value,end=document.getElementById('input-proj-end').value;
  probe('D01','新增项目默认结束日期已经早于开始日期',{start,end},end<start);
  document.getElementById('input-proj-title').value='审查新建项目';document.getElementById('input-proj-end').value=today;window.confirmAddNewProject();
  const created=window.GANTT_PROJECTS[0];
  probe('D02','新建项目的默认实训节点没有注册今日待办',{projectId:created.id,canvasHasDrill:window.PROJECT_CANVAS_STORE[created.id].cardsHtml.includes('tertiary-drill-card'),tasks:document.querySelectorAll('#day-card-deck .exec-task-card').length},document.querySelectorAll('#day-card-deck .exec-task-card').length===0);
  window.enterTertiaryWorkspace(created.id);snap('tertiary-planning','enterTertiaryWorkspace');
  window.openTertiaryAddNodeModal();snap('add-node','openTertiaryAddNodeModal');window.closeTertiaryAddNodeModal?.();
  window.openTertiaryCreateModuleModal();snap('create-node-module','openTertiaryCreateModuleModal');window.closeTertiaryCreateModuleModal?.();
  const beforeCount=document.querySelectorAll('#tertiary-canvas-world .tertiary-card').length;
  const empty=project('audit-empty','空项目');window.GANTT_PROJECTS.push(empty);window.PROJECT_CANVAS_STORE[empty.id]={cardsHtml:'',edges:[]};window.enterTertiaryWorkspace(empty.id);
  const ghostCount=document.querySelectorAll('#tertiary-canvas-world .tertiary-card').length;
  probe('D03','切换至空画布项目仍显示上一项目节点',{beforeCount,ghostCount,active:window.currentTertiaryProjId},ghostCount>0);
  window.enterTertiaryWorkspace(created.id);
  const b=project('audit-second','第二个项目');window.GANTT_PROJECTS.push(b);window.PROJECT_CANVAS_STORE[b.id]=window.buildStarterCanvasForProject(b);
  window.pushTertiaryHistory();window.enterTertiaryWorkspace(b.id);window.handleTertiaryUndo();
  const contaminated=Array.from(document.querySelectorAll('#tertiary-canvas-world .tertiary-card')).some(c=>c.id.includes(created.id));
  probe('D04','撤销历史跨项目共享造成项目节点串入',{active:window.currentTertiaryProjId,contaminated},contaminated);
  window.enterTertiaryWorkspace(created.id);
  window.syncNewNodeToHomeExecution({id:'task-a',projectId:created.id,sourceNodeId:'projnode-'+created.id+'-2',title:'今天任务A',pavilionId:'study'});
  window.syncNewNodeToHomeExecution({id:'task-b',projectId:created.id,sourceNodeId:'projnode-'+created.id+'-3',title:'今天任务B',pavilionId:'study'});
  const a=document.getElementById('exec-sync-task-a');window.openExecCardPopupView('drill',a);snap('actual-execution','openExecCardPopupView with bound card');
  document.getElementById('island-real-reflection').value='x';window.submitRealExecution();
  probe('D05','一字心得可绕过规划时长和照片要求',{record:window.USER_PROFILE_STATE.checkinRecords.find(r=>r.taskId==='task-a')},window.USER_PROFILE_STATE.checkinRecords.some(r=>r.taskId==='task-a'));
  const progress=window.computeProjectProgressAndStatus(created);const canvas=window.PROJECT_CANVAS_STORE[created.id];
  probe('D06','仅完成一个节点就把单日多节点项目算为100%',{progress,nodeRecords:Object.keys(canvas.executionRecords||{}),totalCanvasNodes:3},progress.progress===100&&Object.keys(canvas.executionRecords||{}).length===1);
  const oldRate=window.computeCurrentFulfillmentRate();document.getElementById('exec-sync-task-b').remove();const newRate=window.computeCurrentFulfillmentRate();
  probe('D07','删除待办DOM即可改变履约率分母',{oldRate,newRate,recordsUnchanged:window.USER_PROFILE_STATE.checkinRecords.length===1},newRate!==oldRate);
  window.closeExecCardPopupView();
  const clonedProof=document.querySelector('#checkin-frame-drill #island-real-reflection');
  probe('D20','退出真实执行页把任务私有表单写回同类型公共设计模板',{publicTemplateHasRealForm:!!clonedProof,publicTemplateReflection:clonedProof?.value},!!clonedProof);
  window.syncNewNodeToHomeExecution({id:'task-week',projectId:created.id,title:'从周看板执行',pavilionId:'study'});window.switchMainSection('island');window.switchHomeGlobalView('exec');window.switchExecSubView('week');window.renderWeekBoard('all');
  const weekCard=document.querySelector('.week-task-card[data-id="w-task-week"]');window.showWeekTaskDetail(weekCard);snap('week-task-detail','showWeekTaskDetail');
  document.querySelector('#td-modal-actions-right button').click();
  const beforeWeekSubmit=window.USER_PROFILE_STATE.checkinRecords.length;const weekReflection=document.getElementById('island-real-reflection');if(weekReflection)weekReflection.value='周卡的真实心得';window.submitRealExecution();
  probe('D08','周任务立即打卡未传源卡片，无法提交当前周任务',{activeCard:window.currentActiveExecDeckCardId,expectedCard:'exec-sync-task-week',realForm:!!weekReflection,beforeWeekSubmit,afterWeekSubmit:window.USER_PROFILE_STATE.checkinRecords.length},window.currentActiveExecDeckCardId!=='exec-sync-task-week'&&window.USER_PROFILE_STATE.checkinRecords.length===beforeWeekSubmit);
  window.closeTaskDetailModal();window.closeExecCardPopupView();
  const col=window.WEEK_BOARD_DATA.find(c=>c.dateKey<today);if(col){col.tasks.push({id:'audit-old',title:'昨日未完成',status:'pending'});window.syncWeekBoardToRealDate();probe('D09','同一周过去日期的未完成任务仍为pending',{date:col.dateKey,status:col.tasks.find(t=>t.id==='audit-old')?.status},col.tasks.find(t=>t.id==='audit-old')?.status==='pending');}
  const notDone=project('audit-archive','未完成归档测试');window.GANTT_PROJECTS.push(notDone);window.toggleProjectArchive(notDone.id);
  probe('D10','未完成项目可以直接归档',{archived:notDone.isArchived,completedDays:notDone.completedDays},notDone.isArchived);
  window.enterSecondaryWorkspace('study','gantt');window.enterTertiaryWorkspace(created.id);const g=window.createTertiaryCustomPlanningCard({archetype:'goal',title:'必须达到98%的目标',metrics:[{name:'正确率',val:'≥98%'}],deliverableType:'text'});document.getElementById('goal-deliverable-text-'+g.id).value='尚未填写任何实测值';window.depositGoalToAchievement(g.id);
  const award=window.ACHIEVEMENT_STATE.cultivationItems.find(x=>x.id==='ACH-CULT-'+g.id);
  probe('D11','成果指标和所属项目名称来自固定样例而非目标实测',{title:award?.title,metrics:award?.metrics,projectName:award?.projectName,sourceProjectId:award?.sourceProjectId},!!award&&award.metrics.some(m=>m.actual==='100% 达成'));
  window.jumpFromAchieveToProjectWorkspace('study',award.projectName);probe('D12','成就回源只进入场馆总览而不定位源项目',{activeProject:window.currentTertiaryProjId,wsDisplay:document.getElementById('secondary-workspace-view').style.display,tertiaryDisplay:document.getElementById('tertiary-workspace-view').style.display},document.getElementById('secondary-workspace-view').style.display==='flex');
  window.openRegisterAccidentalAchievementModal();const img=new File(['proof'],'accidental.jpg',{type:'image/jpeg'});window.handleAccidentalImageUpload({files:[img]});document.getElementById('achieve-acc-title').value='实际照片审查';document.getElementById('achieve-acc-desc').value='这张照片必须保留';document.getElementById('achieve-acc-date').value=today;window.submitRegisterAccidentalAchievement();const accidental=window.ACHIEVEMENT_STATE.accidentalItems[0];
  probe('D13','偶然成就照片仍只保留文件名提示',{image:accidental.image,path:accidental.path},!accidental.path&&accidental.image.includes('accidental.jpg'));
  window.BOUNTY_STATE={id:'audit-b1',title:'悬赏甲',pavilionId:'study',reward:'陪伴',status:'accepted',days:7,criteria:'测试',evidencePath:'attachments/proof.jpg',evidenceName:'proof.jpg',parentComment:''};window.openBountyModal();document.getElementById('bounty-parent-comment-input').value='';window.completeBountyDemo();
  probe('D14','家长寄语为空仍可核验兑现',{status:window.BOUNTY_STATE.status,parentComment:window.BOUNTY_STATE.parentComment},window.BOUNTY_STATE.status==='redeemed');window.closeBountyModal();
  window.syncNewNodeToHomeExecution({id:'bounty-audit-b1',title:'悬赏甲',pavilionId:'study'});window.syncNewNodeToHomeExecution({id:'bounty-audit-b2',title:'悬赏乙',pavilionId:'study'});window.computeCurrentFulfillmentRate();
  const wrong=document.querySelector('#exec-sync-bounty-audit-b2 .task-status-pill')?.textContent;
  probe('D15','所有悬赏卡共用一个悬赏状态，甲兑现会让乙显示完成',{bountyA:window.BOUNTY_STATE.status,bountyBLabel:wrong},wrong?.includes('已完成'));
  window.INQUIRY_POOL_STATE.splice(0,window.INQUIRY_POOL_STATE.length,{id:'audit-inq',question:'真实困惑',classic:'知行合一',converted:false});window.convertInquiryToPlan('真实困惑','知行合一');await new Promise(r=>setTimeout(r,3));window.convertInquiryToPlan('真实困惑','知行合一');
  probe('D16','同一问道记录可重复转化且没有源项目ID',{projects:window.GANTT_PROJECTS.filter(p=>p.id.startsWith('proj_inq_')).length,inquiry:window.INQUIRY_POOL_STATE[0]},window.GANTT_PROJECTS.filter(p=>p.id.startsWith('proj_inq_')).length===2);
  window.NOTE_STATE.dateKey='2026-01-01';window.NOTE_STATE.historyEntries=[{date:'2026-01-01',text:'已封存旧版本'}];window.NOTE_STATE.journalText='封存后又修改的最新草稿';window.ensureBusinessDate();
  probe('D17','跨日时已封存日记的未封存修改被清空',{history:window.NOTE_STATE.historyEntries[0].text,draft:window.NOTE_STATE.journalText},window.NOTE_STATE.historyEntries[0].text==='已封存旧版本'&&window.NOTE_STATE.journalText==='');
  const fn=window.createTableDataPrompt.toString();probe('D18','插入表格按钮仅显示成功提示没有创建数据',{body:fn},fn.includes('showIslandToast')&&!fn.includes('createElement'));
  const future=project('audit-future','未来排程测试');future.startDate='2027-01-01';future.endDate='2027-01-05';window.GANTT_PROJECTS.push(future);window.enterSecondaryWorkspace('study','gantt');
  probe('D21','甘特时间轴写死在2026年10到11月导致未来项目无方格',{squares:document.querySelectorAll('.gantt-day-square[data-id="audit-future"]').length,header:document.querySelector('.gantt-month-row')?.textContent},document.querySelectorAll('.gantt-day-square[data-id="audit-future"]').length===0);
  const awards=window.renderCultivationGroupsHtml([{id:'aud-cog',projectType:'cognition',date:today,title:'思辨真实荣誉'},{id:'aud-custom',projectType:'custom-test',date:today,title:'自定义真实荣誉'}]);
  probe('D22','思辨馆与自定义场馆的养成成就写入后不显示',{cognitionVisible:awards.includes('思辨真实荣誉'),customVisible:awards.includes('自定义真实荣誉'),treasuryCabinet:awards.includes('藏金屋')},!awards.includes('思辨真实荣誉')&&!awards.includes('自定义真实荣誉'));
  window.enterTertiaryWorkspace(created.id);const custom=window.createTertiaryCustomPlanningCard({archetype:'custom',title:'需要填报数量的任务',isActionable:true,checkinType:'image',fields:[{key:'完成次数',value:'10'}]});window.saveCurrentProjectCanvasSnapshot();window.openExecCardPopupView('custom',document.getElementById('exec-sync-'+custom.id));
  probe('D23','自定义执行字段全部只读，无法填报实测值',{fieldInputs:Array.from(document.querySelectorAll('#island-execution-standard input')).map(i=>({value:i.value,disabled:i.disabled})),hasCustomValuesInSubmit:window.submitRealExecution.toString().includes('customFieldValues')},Array.from(document.querySelectorAll('#island-execution-standard input')).every(i=>i.disabled)&&!window.submitRealExecution.toString().includes('customFieldValues'));window.closeExecCardPopupView();
  const beforeReviewTasks=document.querySelectorAll('#day-card-deck .exec-task-card').length;window.createTertiaryCustomPlanningCard({archetype:'reflection',title:'需要执行的复盘',cause:'尚未执行',improvements:['下一步行动']});
  probe('D24','新建复盘节点不自动进入执行待办',{before:beforeReviewTasks,after:document.querySelectorAll('#day-card-deck .exec-task-card').length},beforeReviewTasks===document.querySelectorAll('#day-card-deck .exec-task-card').length);
  window.enterSecondaryWorkspace('treasury','specialized');window.TREASURY_STATE.totalBalance=0;window.TREASURY_STATE.totalIncome=0;window.TREASURY_STATE.totalExpense=0;window.TREASURY_STATE.ledger=[];
  for(const [type,amount] of [['income','0.10'],['income','0.20'],['expense','0.30']]){window.switchTreasuryRecordType(type);document.getElementById('treasury-tx-amount-input').value=amount;window.recordLiveTreasuryTransaction();}
  const positiveChecks=[{id:'T01',title:'藏金屋真实收支与精度',passed:window.TREASURY_STATE.totalBalance===0&&window.TREASURY_STATE.ledger.length===3,actual:{balance:window.TREASURY_STATE.totalBalance,ledgerCount:window.TREASURY_STATE.ledger.length}}];
  window.switchTreasuryRecordType('expense');document.getElementById('treasury-tx-amount-input').value='1';window.recordLiveTreasuryTransaction();positiveChecks.push({id:'T02',title:'藏金屋透支拦截',passed:window.TREASURY_STATE.ledger.length===3});
  const files=new Map();const adapter={exists:async p=>files.has(p),read:async p=>files.get(p),write:async(p,t)=>files.set(p,t),writeBinary:async(p,b)=>files.set(p,b),getResourcePath:p=>'app://'+p,rename:async(a,b)=>{files.set(b,files.get(a));files.delete(a);}};const app={vault:{adapter,createFolder:async p=>files.set(p,'dir')}};
  const storage=new Harness.VaultStorageAdapter(app,()=>({vaultRootFolder:'growth',autoSyncVaultMarkdown:true}));await storage.hydrateRuntimeFromVault();
  const p=project('audit-files','文件来源测试');window.GANTT_PROJECTS.push(p);window.PROJECT_CANVAS_STORE[p.id]={cardsHtml:'',edges:[]};await storage.syncRuntimeToVault();const leafPath='growth/01_School_校史馆/projects.json';const leaf=JSON.parse(files.get(leafPath));leaf[0].title='从项目JSON修改的名称';files.set(leafPath,JSON.stringify(leaf));await storage.hydrateRuntimeFromVault();
  probe('D19','存在快照时修改projects.json不会被加载',{leafTitle:JSON.parse(files.get(leafPath))[0].title,runtimeTitle:window.GANTT_PROJECTS.find(x=>x.id===p.id).title},window.GANTT_PROJECTS.find(x=>x.id===p.id).title!==JSON.parse(files.get(leafPath))[0].title);
  await storage.dispose();dispose();
  return {version:'1.0.15',date:today,containers,designControls,designDisplays,pageSnapshots,unavailableSpecialized,positiveChecks,probes};
})()
