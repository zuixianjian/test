// One visible planning card, with per-type drafts during this dialog session.
let nodeCreatorSession=null,nodeCreatorPreferredType='drill',nodeCreatorReturnFocus=null;
const nodeCreatorTypes=['goal','drill','habit','review','custom','text'];
function freshNodeCreatorDraft(type,project){
  return {id:domainId('node'),title:'',description:'',plannedDate:domainDefaultNodeDate(project),frequency:type==='habit'?'daily':'once',isCheckinNode:!['goal','text'].includes(type),evidenceType:type==='drill'?'photo':type==='review'?'text':'none',plannedMinutes:20,acceptanceCriteria:'',targetDeadline:'',textContent:'',dependencies:[],metrics:[],checklist:[],improvementList:[],customFieldsSchema:[]};
}
function nodeCreatorRow(key){
  if(key==='metrics')return {id:domainId('metric'),name:'',targetValue:''};
  if(key==='checklist')return {id:domainId('item'),title:'',required:true};
  if(key==='improvementList')return {id:domainId('improvement'),actionItem:'',isChecked:true};
  return {key:domainId('field'),label:'',type:'text',required:true};
}
function nodeCreatorField(key,label,value,{type='text',placeholder='',area=false,extra=''}={}){
  return '<label class="node-creator-field"><span>'+label+'</span>'+(area?'<textarea data-creator-field="'+key+'" rows="3" placeholder="'+escapeIslandText(placeholder)+'">'+escapeIslandText(value||'')+'</textarea>':'<input data-creator-field="'+key+'" type="'+type+'" value="'+escapeIslandText(value??'')+'" placeholder="'+escapeIslandText(placeholder)+'" '+extra+'>')+'</label>';
}
function nodeCreatorOptions(key,label,value,options){
  return '<label class="node-creator-field"><span>'+label+'</span><select data-creator-field="'+key+'">'+Object.entries(options).map(([k,v])=>'<option value="'+k+'"'+(k===value?' selected':'')+'>'+v+'</option>').join('')+'</select></label>';
}
function captureNodeCreatorDraft(){
  if(!nodeCreatorSession)return;
  const d=nodeCreatorSession.drafts[nodeCreatorSession.type],panel=document.getElementById('node-creator-card');if(!panel)return;
  panel.querySelectorAll('[data-creator-field]').forEach(el=>d[el.dataset.creatorField]=el.multiple?Array.from(el.selectedOptions,o=>o.value):el.type==='checkbox'?el.checked:el.value);
  const settings=panel.querySelector('.node-creator-settings');d.settingsOpen=!!settings?.open;
  if(settings)settings.querySelector('summary span').textContent=(d.plannedDate||'未排期')+' · '+({once:'一次性',daily:'每日',weekdays:'工作日',weekly:'每周'}[d.frequency]||'一次性');
  const list=panel.querySelector('[data-creator-list]');
  if(list)d[list.dataset.creatorList]=Array.from(list.children).map(row=>{const item={};for(const el of row.querySelectorAll('[data-row-field]'))item[el.dataset.rowField]=el.type==='checkbox'?el.checked:el.value;return {...JSON.parse(row.dataset.identity),...item};});
}
function renderNodeCreatorList(key,title,items){
  const text=(field,value,placeholder)=>'<input data-row-field="'+field+'" value="'+escapeIslandText(value||'')+'" placeholder="'+placeholder+'" aria-label="'+placeholder+'">';
  const checked=(field,value,label)=>'<label class="node-creator-row-check"><input type="checkbox" data-row-field="'+field+'"'+(value!==false?' checked':'')+'>'+label+'</label>';
  const rows=items.map((item,index)=>{
    let fields='';
    if(key==='metrics')fields=text('name',item.name,'指标名称')+text('targetValue',item.targetValue,'目标标准，例如 ≥90%');
    else if(key==='checklist')fields=text('title',item.title,'具体行动')+checked('required',item.required,'必需');
    else if(key==='improvementList')fields=text('actionItem',item.actionItem,'下一步提升行动')+checked('isChecked',item.isChecked,'可派生');
    else fields=text('label',item.label,'字段名称')+'<select data-row-field="type" aria-label="字段类型">'+Object.entries({text:'文字',number:'数字',boolean:'是 / 否',date:'日期'}).map(([v,label])=>'<option value="'+v+'"'+(item.type===v?' selected':'')+'>'+label+'</option>').join('')+'</select>'+checked('required',item.required,'必填');
    const identity=key==='customFieldsSchema'?{key:item.key}:{id:item.id};
    return '<div class="node-creator-list-row" data-kind="'+key+'" data-identity="'+escapeIslandText(JSON.stringify(identity))+'">'+fields+'<button type="button" class="node-creator-remove" aria-label="移除第'+(index+1)+'项" onclick="removeNodeCreatorRow('+index+')">✕</button></div>';
  }).join('');
  return '<section class="node-creator-list-section"><div class="node-creator-section-title"><span>'+title+'</span><button type="button" class="node-creator-add-row" onclick="addNodeCreatorRow()">＋ 添加一项</button></div><div data-creator-list="'+key+'">'+rows+'</div>'+(!items.length?'<p class="node-creator-empty">按需添加具体项目，也可以创建后继续完善。</p>':'')+'</section>';
}
function renderNodeCreatorCard(){
  const session=nodeCreatorSession;if(!session)return;
  const type=session.type,d=session.drafts[type],project=getDomainState().projects.find(p=>p.id===session.projectId),panel=document.getElementById('node-creator-card');if(!panel||!project)return;
  const meta={goal:['🎯','目标分解','明确目标、量化指标与验收方式'],drill:['⚡','攻坚实训','写下练习要领，安排专注时长与交付要求'],habit:['🌿','习惯践行','把每天要坚持的行动整理为清单'],review:['📝','评估复盘','回看过程，让复盘形成下一步行动'],custom:['⚙️','自定义配置','按需要定义填报字段与交付标准'],text:['📄','文本便签','记录想法或 Markdown 资料，不加入执行任务']}[type];
  let html='<header class="node-creator-card-heading"><span>'+meta[0]+' '+meta[1]+'</span><p>'+meta[2]+'</p></header>';
  html+=nodeCreatorField('title','节点名称',d.title,{placeholder:'填写 2～30 字名称',extra:'maxlength="30" required'});
  if(type==='text')html+=nodeCreatorField('textContent','正文 · 支持 Markdown',d.textContent,{area:true,placeholder:'写下资料、想法或备忘…'});
  else html+=nodeCreatorField('description',({goal:'目标说明',drill:'核心攻坚要领',habit:'践行初衷',review:'复盘标的与说明',custom:'任务说明'})[type],d.description,{area:true,placeholder:'填写这张卡片的说明…'});
  if(type==='goal')html+=renderNodeCreatorList('metrics','🎯 量化通关指标',d.metrics)+nodeCreatorField('acceptanceCriteria','验收标准',d.acceptanceCriteria,{area:true,placeholder:'什么成果可以说明目标达成？'})+nodeCreatorField('targetDeadline','期望完成时间',d.targetDeadline,{type:'datetime-local'});
  if(type==='drill')html+=nodeCreatorField('plannedMinutes','⏱ 计划专注时长（分钟）',d.plannedMinutes,{type:'number',extra:'min="0" max="120" step="1"'});
  if(type==='habit')html+=renderNodeCreatorList('checklist','🛡 践行防守清单',d.checklist);
  if(type==='review')html+=renderNodeCreatorList('improvementList','🚀 提升行动',d.improvementList);
  if(type==='custom')html+=renderNodeCreatorList('customFieldsSchema','📋 自定义字段',d.customFieldsSchema);
  if(type!=='text'){
    const options=(getDomainState().nodesByProject[project.id]||[]).filter(n=>n.isCheckinNode&&n.status!=='archived');
    html+='<details class="node-creator-settings"'+(d.settingsOpen?' open':'')+'><summary>计划与交付要求 <span>'+escapeIslandText(d.plannedDate)+' · '+({once:'一次性',daily:'每日',weekdays:'工作日',weekly:'每周'}[d.frequency])+'</span></summary><div class="node-creator-settings-body"><div class="node-creator-field-grid">'+nodeCreatorField('plannedDate','计划日期',d.plannedDate,{type:'date',extra:'min="'+escapeIslandText(project.startDate)+'" max="'+escapeIslandText(project.endDate)+'"'})+nodeCreatorOptions('frequency','执行频次',d.frequency,{once:'一次性',daily:'每日',weekdays:'工作日',weekly:'每周'})+'</div><div class="node-creator-field-grid"><label class="node-creator-execution"><input type="checkbox" data-creator-field="isCheckinNode"'+(d.isCheckinNode?' checked':'')+'>加入执行任务</label>'+nodeCreatorOptions('evidenceType','物证要求',d.evidenceType,{none:'无需附件',text:'文字说明',photo:'照片',video:'视频',audio:'音频'})+'</div><label class="node-creator-field"><span>前置节点 · 可多选</span><select data-creator-field="dependencies" multiple size="'+Math.min(3,Math.max(2,options.length))+'">'+options.map(n=>'<option value="'+escapeIslandText(n.id)+'"'+(d.dependencies.includes(n.id)?' selected':'')+'>'+escapeIslandText(n.title)+'</option>').join('')+'</select></label></div></details>';
  }
  panel.dataset.nodeType=type;panel.setAttribute('aria-labelledby','node-creator-tab-'+type);panel.innerHTML=html;
  document.querySelectorAll('#modal-tertiary-add-node [data-creator-type]').forEach(tab=>{const active=tab.dataset.creatorType===type;tab.setAttribute('aria-selected',String(active));tab.tabIndex=active?0:-1;});
  document.getElementById('node-creator-error').textContent='';
  document.getElementById('node-creator-hint').textContent=type==='text'?'文本便签仅供记录与阅读。':'规划标准将在执行时使用，实际结果在打卡页录入。';
  document.querySelector('.node-creator-body').scrollTop=0;
}
function openNodeCreator(){
  const project=getDomainState().projects.find(p=>p.id===window.currentTertiaryProjId);
  if(!project){showIslandToast('请先选择项目再新增节点');return false;}
  const modal=document.getElementById('modal-tertiary-add-node');if(!modal)return false;
  if(nodeCreatorSession&&modal.classList.contains('open'))return true;
  nodeCreatorReturnFocus=document.activeElement;
  nodeCreatorSession={projectId:project.id,type:nodeCreatorPreferredType,drafts:{},busy:false};
  nodeCreatorSession.drafts[nodeCreatorPreferredType]=freshNodeCreatorDraft(nodeCreatorPreferredType,project);
  document.getElementById('node-creator-project').textContent=project.title+' · 先选择类型，再填写内容';
  document.getElementById('node-creator-submit').disabled=false;
  renderNodeCreatorCard();modal.style.display='flex';modal.classList.add('open','is-open');
  document.getElementById('node-creator-tab-'+nodeCreatorPreferredType).focus();return true;
}
function closeNodeCreator(){
  const modal=document.getElementById('modal-tertiary-add-node');if(modal){modal.style.display='none';modal.classList.remove('open','is-open');}
  nodeCreatorSession=null;
  if(nodeCreatorReturnFocus?.isConnected)nodeCreatorReturnFocus.focus({preventScroll:true});nodeCreatorReturnFocus=null;
}
function selectNodeCreatorType(type){
  if(!nodeCreatorSession||!nodeCreatorTypes.includes(type)||nodeCreatorSession.type===type)return;
  captureNodeCreatorDraft();const project=getDomainState().projects.find(p=>p.id===nodeCreatorSession.projectId);if(!project)return;
  nodeCreatorSession.type=type;nodeCreatorPreferredType=type;
  nodeCreatorSession.drafts[type]??=freshNodeCreatorDraft(type,project);renderNodeCreatorCard();
}
function addNodeCreatorRow(){
  if(!nodeCreatorSession)return;captureNodeCreatorDraft();
  const key={goal:'metrics',habit:'checklist',review:'improvementList',custom:'customFieldsSchema'}[nodeCreatorSession.type];if(!key)return;
  const expanded=document.querySelector('.node-creator-settings')?.open;
  nodeCreatorSession.drafts[nodeCreatorSession.type][key].push(nodeCreatorRow(key));renderNodeCreatorCard();
  if(expanded)document.querySelector('.node-creator-settings').open=true;
  const last=document.querySelector('[data-creator-list]')?.lastElementChild;last?.querySelector('input')?.focus();
}
function removeNodeCreatorRow(index){
  if(!nodeCreatorSession)return;captureNodeCreatorDraft();const key={goal:'metrics',habit:'checklist',review:'improvementList',custom:'customFieldsSchema'}[nodeCreatorSession.type];if(!key)return;
  nodeCreatorSession.drafts[nodeCreatorSession.type][key].splice(index,1);renderNodeCreatorCard();document.querySelector('.node-creator-add-row')?.focus();
}
function submitNodeCreator(){
  const session=nodeCreatorSession;if(!session||session.busy)return false;captureNodeCreatorDraft();
  const d=session.drafts[session.type],project=getDomainState().projects.find(p=>p.id===session.projectId),fail=(text,selector)=>{document.getElementById('node-creator-error').textContent=text;const field=document.querySelector(selector||'[data-creator-field="title"]');if(field?.closest('details'))field.closest('details').open=true;field?.focus();return false;};
  if(!project||window.currentTertiaryProjId!==project.id)return fail('项目已切换，请关闭后重新新增节点。');
  if(d.title.trim().length<2||d.title.trim().length>30)return fail('节点名称须为 2～30 字。');
  if(!domainValidDate(d.plannedDate)||d.plannedDate<project.startDate||d.plannedDate>project.endDate)return fail('计划日期须在项目周期内。','[data-creator-field="plannedDate"]');
  if(session.type==='drill'&&(!Number.isFinite(Number(d.plannedMinutes))||Number(d.plannedMinutes)<0||Number(d.plannedMinutes)>120))return fail('专注时长须为 0～120 分钟。','[data-creator-field="plannedMinutes"]');
  if(session.type==='goal'&&d.metrics.some(m=>!!m.name.trim()!==!!m.targetValue.trim()))return fail('请为指标同时填写名称和目标标准。','[data-creator-list] input');
  const allowed=new Set((getDomainState().nodesByProject[project.id]||[]).filter(n=>n.isCheckinNode&&n.status!=='archived').map(n=>n.id));
  if(d.dependencies.some(id=>!allowed.has(id)))return fail('前置节点已变化，请重新选择。');
  const config={id:d.id,title:d.title.trim(),nodeType:session.type,plannedDate:d.plannedDate,frequency:d.frequency,isCheckinNode:d.isCheckinNode,dependencies:d.dependencies,cardPayload:{description:d.description,plannedMinutes:session.type==='drill'?Number(d.plannedMinutes):0,evidenceType:d.evidenceType,acceptanceCriteria:d.acceptanceCriteria,targetDeadline:d.targetDeadline||null,textContent:d.textContent,metrics:d.metrics.filter(m=>m.name.trim()).map(m=>({...m,name:m.name.trim(),targetValue:m.targetValue.trim()})),checklist:d.checklist.filter(i=>i.title.trim()),improvementList:d.improvementList.filter(i=>i.actionItem.trim()),customFieldsSchema:d.customFieldsSchema.filter(f=>f.label.trim())}};
  session.busy=true;document.getElementById('node-creator-submit').disabled=true;
  const card=createTertiaryCustomPlanningCard(config);
  if(!card){session.busy=false;document.getElementById('node-creator-submit').disabled=false;return fail('节点未能创建，请重试。');}
  closeNodeCreator();card.classList.add('is-selected');
  const stage=document.getElementById('tertiary-canvas-stage'),v=readMindmapViewport();
  if(stage)writeMindmapViewport({x:stage.clientWidth/2-(parseFloat(card.style.left)+card.offsetWidth/2)*v.zoom,y:Math.max(30,(stage.clientHeight-card.offsetHeight*v.zoom)/2)-parseFloat(card.style.top)*v.zoom,zoom:v.zoom});
  showIslandToast('已添加节点《'+config.title+'》');return true;
}
function handleNodeCreatorKeydown(event){
  if(event.isComposing)return;
  event.stopPropagation();
  if(event.key==='Escape'){event.preventDefault();event.stopPropagation();closeNodeCreator();return;}
  const modal=document.getElementById('modal-tertiary-add-node'),tab=event.target.closest?.('[data-creator-type]');
  if(tab&&['ArrowLeft','ArrowRight','Home','End'].includes(event.key)){
    event.preventDefault();const i=nodeCreatorTypes.indexOf(tab.dataset.creatorType),next=event.key==='Home'?0:event.key==='End'?5:(i+(event.key==='ArrowRight'?1:5))%6;
    selectNodeCreatorType(nodeCreatorTypes[next]);document.getElementById('node-creator-tab-'+nodeCreatorTypes[next]).focus();return;
  }
  if(event.key==='Tab'){
    const controls=Array.from(modal.querySelectorAll('button,input,textarea,select,[tabindex]')).filter(e=>!e.disabled&&e.tabIndex>=0&&e.getClientRects().length),first=controls[0],last=controls.at(-1);
    if(event.shiftKey&&document.activeElement===first){event.preventDefault();last?.focus();}
    else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first?.focus();}
  }
}
