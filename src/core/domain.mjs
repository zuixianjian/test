/** Shared by the standalone design and the Obsidian runtime. No DOM dependencies. */
export function domainId(prefix='id') { return prefix+'-'+(globalThis.crypto?.randomUUID?.() || Date.now().toString(36)+'-'+Math.random().toString(36).slice(2)); }
export function domainDate(date=new Date()) { return date.getFullYear()+'-'+String(date.getMonth()+1).padStart(2,'0')+'-'+String(date.getDate()).padStart(2,'0'); }
export function domainShift(key,days) { const [y,m,d]=key.split('-').map(Number);return domainDate(new Date(y,m-1,d+days,12)); }
export function domainValidDate(key) { return /^\d{4}-\d{2}-\d{2}$/.test(key||'') && domainDate(new Date(key+'T12:00:00'))===key; }
export function domainType(value) { return String(value||'drill').replace(/^card-/,'').replace('reflection','review'); }
export function domainNode(config, project) {
  const type=domainType(config.nodeType||config.cardType||config.archetype);
  const payload=config.cardPayload || {};
  const evidence=config.evidenceType||payload.evidenceType||config.checkinType||config.evidence||config.deliverableType|| (type==='drill'?'photo':type==='goal'?'text':'none');
  const map={image:'photo',timer:'none',composite:'photo'};
  const now=new Date().toISOString();
  return { id:config.id||config.nodeId||domainId('node'), projectId:project.id,pavilionId:project.pavilion,title:String(config.title||'新节点').trim(),nodeType:type,
    isCheckinNode:type!=='text'&&(config.isCheckinNode ?? config.needsCheckin ?? config.isActionable ?? (type!=='goal')),
    status:config.status||'pending',weight:Number.isFinite(Number(config.weight))&&Number(config.weight)>0?Number(config.weight):1,plannedDate:config.plannedDate||project.startDate,
    frequency:['once','daily','weekdays','weekly','workday'].includes(config.frequency||payload.frequency)?(config.frequency||payload.frequency):'once',dependencies:[...new Set(config.dependencies||[])],
    canvasPosition:config.canvasPosition||{x:80,y:90},groupId:config.groupId||null,groupRoot:config.groupRoot||null,
    createdAt:config.createdAt||now,updatedAt:config.updatedAt||now,
    cardPayload:{...payload,description:payload.description||config.description||config.formula||config.quote||config.cause||config.content||'',
      plannedMinutes:Number(payload.plannedMinutes??config.plannedMinutes??config.duration??(type==='drill'?20:0)),
      evidenceType:map[evidence]||evidence,
      metrics:(payload.metrics||config.metrics||[]).map(m=>({id:m.id||domainId('metric'),name:m.name||String(m),targetValue:m.targetValue??m.val??m.target??'',unit:m.unit||''})),
      checklist:(payload.checklist||config.checklistItems||[]).map(c=>typeof c==='string'?{id:domainId('item'),title:c,required:true}:c),
      improvementList:(payload.improvementList||config.improvements||[]).map(c=>typeof c==='string'?{id:domainId('improvement'),actionItem:c,isChecked:true,derivedNodeId:null}:c),
      customFieldsSchema:(payload.customFieldsSchema||config.customFieldsSchema||config.fields||[]).map((f,i)=>({key:f.key||'field-'+i,label:f.label||f.key||'字段',type:f.type||'text',required:f.required!==false,placeholder:f.placeholder||'',defaultValue:f.defaultValue??f.value??''})),
      textContent:payload.textContent||config.content||'',acceptanceCriteria:payload.acceptanceCriteria||config.acceptance||'',targetDeadline:payload.targetDeadline||config.deadline||null},
    executionRecords:(config.executionRecords||[]).map(r=>typeof r==='string'?r:r?.id).filter(Boolean),readCount:config.readCount||0,lastReadTime:config.lastReadTime||null,achievementId:config.achievementId||null };
}
export function occurrenceDates(node,project,from=project.startDate,to=project.endDate) {
  const start=node.plannedDate||project.startDate;
  if(!domainValidDate(start)||!domainValidDate(project.endDate))return [];
  if(node.frequency==='once')return start>=from&&start<=to&&start<=project.endDate?[start]:[];
  const result=[];let cursor=start>from?start:from;
  for(let limit=0;cursor<=to&&cursor<=project.endDate&&limit<36600;limit++,cursor=domainShift(cursor,1)){
    const weekday=new Date(cursor+'T12:00:00').getDay();
    if((node.frequency==='weekdays'||node.frequency==='workday')&&(weekday===0||weekday===6))continue;
    if(node.frequency==='weekly'&&weekday!==new Date(start+'T12:00:00').getDay())continue;
    result.push(cursor);
  }return result;
}
export function taskInstanceId(nodeId,date) { return nodeId+'@'+date; }
export function projectProgress(project,nodes,records) {
  const required=nodes.filter(n=>n.isCheckinNode&&n.status!=='archived');
  let weight=0,fulfilled=0,completedNodesCount=0,totalInstances=0,completedInstances=0;
  for(const node of required){const dates=occurrenceDates(node,project);const done=dates.filter(date=>records.some(r=>r.projectId===project.id&&r.nodeId===node.id&&(r.taskInstanceId===taskInstanceId(node.id,date)||r.date===date)&&r.validated===true)).length;
    const w=node.weight||1;weight+=w;fulfilled+=w*(dates.length?done/dates.length:0);totalInstances+=dates.length;completedInstances+=done;
    if(dates.length&&done===dates.length)completedNodesCount++;
  }
  const progress=weight?Math.round(100*fulfilled/weight):0;
  return {progress,completedNodesCount,totalNodesCount:required.length,completedInstances,totalInstances,complete:required.length>0&&completedNodesCount===required.length};
}
export function scheduleDomain(state,today=domainDate()) {
  const result=[];const records=state.records||[];
  for(const project of state.projects||[]){if(project.isArchived||project.status==='archived'||project.status==='cancelled')continue;
    const nodes=state.nodesByProject?.[project.id]||[];
    for(const node of nodes){if(!node.isCheckinNode||node.status==='archived')continue;
      for(const date of occurrenceDates(node,project)){
        const record=records.find(r=>r.nodeId===node.id&&r.projectId===project.id&&(r.taskInstanceId===taskInstanceId(node.id,date)||r.date===date)&&r.validated===true);
        const blocked=node.dependencies.some(id=>{const dep=nodes.find(n=>n.id===id);if(!dep)return true;
          return !records.some(r=>r.nodeId===id&&r.projectId===project.id&&r.validated===true&&(dep.frequency==='once'||(r.scheduledDate||r.date)===date));});
        result.push({id:taskInstanceId(node.id,date),nodeId:node.id,projectId:project.id,pavilionId:project.pavilion,title:node.title,date,nodeType:node.nodeType,
          status:record?'completed':blocked?'blocked':date<today?'overdue':date===today?'ready':'scheduled',recordId:record?.id||null,contract:project.pavilion==='cultivation'});
      }
    }
  }
  for(const bounty of state.bounties||[]){if(!['accepted','redeemed'].includes(bounty.status))continue;
    const record=records.find(r=>r.bountyId===bounty.id&&r.validated===true);
    if(bounty.status==='redeemed'&&!record)continue;
    const occurrence=bounty.acceptedDate||bounty.createdDate||today;
    const date=bounty.status==='redeemed'?(bounty.verifiedDate||occurrence):(bounty.endDate||occurrence);
    result.push({id:'bounty-'+bounty.id+'@'+occurrence,nodeId:null,projectId:null,bountyId:bounty.id,pavilionId:bounty.pavilionId||'study',title:bounty.title,date,nodeType:'bounty',contract:true,recordId:record?.id||null,status:bounty.status==='redeemed'?'completed':bounty.endDate<today?'overdue':'ready'});
  }
  return result;
}
export function evaluateMetric(target,actual,confirmed=false) {
  const text=String(target||'').trim();const match=text.match(/^(>=|<=|≥|≤|>|<|=|等于)?\s*(-?\d+(?:\.\d+)?)\s*(%|分|次|秒|分钟|道|个)?$/);
  if(!match)return {passed:confirmed&&String(actual??'').trim().length>0,actual:String(actual??''),manual:true};
  const numeric=String(actual??'').trim().replace(/[%分次秒分钟道个\s]/g,'');const value=Number(numeric);
  if(!numeric||!Number.isFinite(value))return {passed:false,actual:String(actual??''),manual:false};
  const baseline=Number(match[2]);const op=match[1]||'=';
  const passed=op==='>='||op==='≥'?value>=baseline:op==='<='||op==='≤'?value<=baseline:op==='>'?value>baseline:op==='<'?value<baseline:value===baseline;
  return {passed,actual:String(actual),manual:false};
}
export function validateDomainExecution(node,input) {
  const errors=[];const p=node.cardPayload;const text=String(input.reflection||'').trim();const media=(input.media||[]).filter(m=>m.path);
  if(!Number.isFinite(Number(input.focusSeconds||0))||Number(input.focusSeconds||0)<0)errors.push('专注时长必须为有效的非负秒数');
  const type=p.evidenceType;
  if(['photo','video','audio'].includes(type)&&!media.some(m=>m.type===(type==='photo'?'image':type)))errors.push('请提交规划要求的'+({photo:'照片',video:'视频',audio:'音频'}[type])+'物证');
  if(type==='text'&&text.length<15)errors.push('文字交付至少15字');
  if(node.nodeType==='drill'&&(input.focusSeconds||0)<p.plannedMinutes*60)errors.push('实际专注时长尚未达到规划的'+p.plannedMinutes+'分钟');
  if(node.nodeType==='review'&&text.length<15)errors.push('复盘说明至少15字');
  if(node.nodeType==='review'&&!(input.improvementList||[]).some(x=>String(x.actionItem||'').trim()))errors.push('请填写至少一项提升行动');
  if(node.nodeType==='habit'&&p.checklist.some(c=>c.required!==false&&!input.checklistResults?.[c.id]))errors.push('请逐项核验全部必需的践行清单');
  const metrics=p.metrics.map(m=>({...m,...evaluateMetric(m.targetValue,input.metricValues?.[m.id],input.metricConfirmations?.[m.id])}));
  if(node.nodeType==='goal'&&!metrics.length)errors.push('请先在目标规划中维护至少一项验收指标');
  if(node.nodeType==='goal'&&metrics.some(m=>!String(m.name).trim()||!String(m.targetValue??'').trim()))errors.push('目标验收指标须包含名称和明确的目标标准');
  if(node.nodeType==='goal'&&metrics.some(m=>!m.passed))errors.push('目标实测指标尚未全部达标或未确认文字验收');
  if(node.nodeType==='custom')for(const f of p.customFieldsSchema){const value=input.customFieldValues?.[f.key];
    if(f.required&&(value===undefined||value===null||value===''))errors.push('请填写 '+f.label);
    if(value!==undefined&&value!==''&&f.type==='number'&&!Number.isFinite(Number(value)))errors.push(f.label+' 必须是数字');
    if(value&&f.type==='date'&&!domainValidDate(value))errors.push(f.label+' 必须是有效日期');
  }
  if(!media.length&&!text&&!(input.focusSeconds>=60)&&!Object.values(input.checklistResults||{}).some(Boolean)&&!metrics.length&&!Object.values(input.customFieldValues||{}).some(v=>v!==''&&v!==undefined))errors.push('请保留真实执行内容');
  return {valid:errors.length===0,errors,metrics};
}
