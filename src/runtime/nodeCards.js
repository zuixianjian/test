// Type-specific planning cards. All controls write through the existing domain transactions.
function planningCardAction(code){return escapeIslandText(code);}
function planningCardInput(node,key,value,type='text',extra=''){
  return '<input data-node-field="'+key+'" type="'+type+'" value="'+escapeIslandText(value??'')+'" '+extra+' onchange="'+planningCardAction('updateDomainNode('+JSON.stringify(node.id)+','+JSON.stringify(key)+',this.value)')+'">';
}
function planningCardArea(node,key,value,placeholder){
  return '<textarea data-node-field="'+key+'" rows="2" placeholder="'+escapeIslandText(placeholder||'')+'" onchange="'+planningCardAction('updateDomainNode('+JSON.stringify(node.id)+','+JSON.stringify(key)+',this.value)')+'">'+escapeIslandText(value||'')+'</textarea>';
}
function planningCardListButton(node,key,label){return '<button type="button" class="node-section-edit" onclick="'+planningCardAction('editDomainList('+JSON.stringify(node.id)+','+JSON.stringify(key)+')')+'">'+label+'</button>';}
function planningCardSection(title,content,action='',className=''){
  return '<section class="node-card-section '+className+'"><div class="node-section-heading"><span>'+title+'</span>'+action+'</div>'+content+'</section>';
}
function planningCardSettings(node){
  const p=node.cardPayload,frequencyNames={once:'一次性',daily:'每日',weekdays:'工作日',weekly:'每周'},evidenceNames={none:'无需附件',text:'文字说明',photo:'照片',video:'视频',audio:'音频'};
  let fields='<label>节点名称'+planningCardInput(node,'title',node.title,'text','maxlength="30"')+'</label>';
  if(node.nodeType!=='text'){
    fields+='<div class="node-setting-grid"><label>计划日期'+planningCardInput(node,'plannedDate',node.plannedDate,'date')+'</label><label>执行频次<select data-node-field="frequency" onchange="'+planningCardAction('updateDomainNode('+JSON.stringify(node.id)+',"frequency",this.value)')+'">'+Object.entries(frequencyNames).map(([key,name])=>'<option value="'+key+'"'+(key===node.frequency?' selected':'')+'>'+name+'</option>').join('')+'</select></label></div>';
    fields+='<div class="node-setting-grid"><label class="node-execution-switch"><input data-node-field="isCheckinNode" type="checkbox"'+(node.isCheckinNode?' checked':'')+' onchange="'+planningCardAction('updateDomainNode('+JSON.stringify(node.id)+',"isCheckinNode",this.checked)')+'"><span>加入执行任务</span></label><label>物证要求<select data-node-field="evidenceType" onchange="'+planningCardAction('updateDomainNode('+JSON.stringify(node.id)+',"evidenceType",this.value)')+'">'+Object.entries(evidenceNames).map(([key,name])=>'<option value="'+key+'"'+(key===p.evidenceType?' selected':'')+'>'+name+'</option>').join('')+'</select></label></div>';
    const options=(getDomainState().nodesByProject[node.projectId]||[]).filter(n=>n.id!==node.id&&n.isCheckinNode);
    fields+='<label>前置节点<select data-node-field="dependencies" multiple size="'+Math.min(3,Math.max(2,options.length))+'" onchange="'+planningCardAction('updateDomainDependencies('+JSON.stringify(node.id)+',this)')+'">'+options.map(n=>'<option value="'+escapeIslandText(n.id)+'"'+(node.dependencies.includes(n.id)?' selected':'')+'>'+escapeIslandText(n.title)+'</option>').join('')+'</select><small>'+(options.length?'可多选；前置完成后才解锁执行。':'当前没有其他可执行节点。')+'</small></label>';
  }
  const summary=node.nodeType==='text'?'便签设置':'计划与交付要求',meta=node.nodeType==='text'?'编辑名称':((node.plannedDate?node.plannedDate.slice(5).replace('-','/'):'未排期')+' · '+(frequencyNames[node.frequency]||'一次性'));
  return '<details class="node-plan-settings"><summary><span>'+summary+'</span><span class="node-setting-summary">'+escapeIslandText(meta)+'</span></summary><div class="node-settings-content">'+fields+'</div></details>';
}
function editPlanningCardTitle(id,event){event?.stopPropagation();const card=document.getElementById(id),settings=card?.querySelector('.node-plan-settings');if(!settings)return;settings.open=true;const input=settings.querySelector('[data-node-field="title"]');input?.focus({preventScroll:true});input?.scrollIntoView({block:'nearest'});input?.select();}
function refreshPlanningCardSummary(id){
  const node=getDomainNode(id),card=document.getElementById(id);if(!node||!card?.classList.contains('domain-node-card'))return;
  const fresh=document.createElement('template');fresh.innerHTML=renderPlanningNodeCard(node);
  for(const selector of ['.work-node-title','.node-card-status','.node-setting-summary','.node-proof-note strong','.node-footer-chip']){
    const target=card.querySelector(selector),source=fresh.content.querySelector(selector);if(target&&source)target.textContent=source.textContent;
  }
  card.dataset.label=node.title;
}
function renderPlanningNodeCard(node){
  const p=node.cardPayload,type=node.nodeType,legacy=type==='review'?'reflection':type;
  const captions={goal:['🎯','目标分解','量化目标 · 明确验收'],drill:['⚡','攻坚实训','聚焦难点 · 专项练习'],habit:['🌿','习惯践行','守住日常 · 逐项落实'],review:['📝','评估复盘','回看过程 · 形成行动'],custom:['⚙️','自定义配置','自主定义 · 按需交付'],text:['📄','简单文本','记录想法 · 沉淀资料']},meta=captions[type]||captions.text;
  const records=getDomainState().records.filter(r=>r.nodeId===node.id),status=type==='text'?'已读 '+(node.readCount||0)+' 次':records.length?'已留痕 '+records.length+' 次':type==='goal'&&!node.isCheckinNode?'阶段里程碑':!node.isCheckinNode?'信息沉淀':'尚未执行';
  const descriptionLabels={goal:'目标说明',drill:'核心攻坚要领',habit:'践行初衷',review:'复盘标的与说明',custom:'任务说明'},descriptionHints={goal:'想达成什么？怎样才算真正掌握？',drill:'写下练习要点、关键步骤或易错提醒…',habit:'为什么坚持？在哪个场景落实？',review:'明确本次要回看的过程与问题…',custom:'说明任务背景和交付要求…'};
  let body='',footer='';
  if(type!=='text')body+=planningCardSection(descriptionLabels[type]||'规划说明',planningCardArea(node,'description',p.description,descriptionHints[type]),'','node-card-description');
  if(type==='goal'){
    const metrics=p.metrics.map(m=>'<div class="node-metric-row"><span>'+escapeIslandText(m.name)+'</span><strong>'+escapeIslandText(m.targetValue||'待设标准')+'</strong></div>').join('')||'<p class="node-card-empty">添加一个可以核验的通关指标。</p>';
    body+=planningCardSection('🎯 量化通关指标',metrics,planningCardListButton(node,'metrics','编辑指标'),'node-card-metrics');
    body+=planningCardSection('📋 验收标准',planningCardArea(node,'acceptanceCriteria',p.acceptanceCriteria,'写明成果与验收方式…'),'','node-card-acceptance');
    body+='<label class="node-deadline-row"><span>📅 期望完成</span>'+planningCardInput(node,'targetDeadline',p.targetDeadline,'datetime-local')+'</label>';
    footer='<span>验收通过后沉淀成果</span><button type="button" class="node-primary-action" onclick="'+planningCardAction('depositGoalToAchievement('+JSON.stringify(node.id)+',event)')+'">🏆 记录已验收成果</button>';
  }else if(type==='drill'){
    body+='<section class="node-focus-panel"><div><span class="node-focus-caption">⏱ 计划专注</span><div class="node-focus-value">'+planningCardInput(node,'plannedMinutes',p.plannedMinutes,'number','min="0" max="120" step="1" aria-label="计划专注分钟"')+'<span>分钟</span></div></div><span class="node-focus-mark" aria-hidden="true">◷</span></section>';
    body+='<div class="node-proof-note"><span>📦 交付要求</span><strong>'+escapeIslandText({none:'完成规定练习',text:'执行时提交文字心得',photo:'执行时提交照片物证',video:'执行时提交视频物证',audio:'执行时提交音频物证'}[p.evidenceType]||'按要求提交物证')+'</strong></div>';
    footer='<span>在执行中心计时与交付</span><span class="node-footer-chip">专注 '+Number(p.plannedMinutes||0)+' 分钟</span>';
  }else if(type==='habit'){
    const list=p.checklist.map((item,i)=>'<li><span class="node-list-marker" aria-hidden="true">□</span><span>'+escapeIslandText(item.title)+'</span>'+(item.required?'<small>必需</small>':'')+'</li>').join('');
    body+=planningCardSection('🛡 防守清单','<ul class="node-checklist">'+list+'</ul>'+(!list?'<p class="node-card-empty">定义每天要落实的具体动作。</p>':''),planningCardListButton(node,'checklist','编辑清单'));
    footer='<span>执行时逐项核验</span><span class="node-footer-chip">'+p.checklist.length+' 项行动</span>';
  }else if(type==='review'){
    const list=p.improvementList.map((item,i)=>'<li><span class="node-list-marker">'+(i+1)+'</span><span>'+escapeIslandText(item.actionItem)+'</span><small class="'+(item.derivedNodeId?'is-derived':'')+'">'+(item.derivedNodeId?'已派生':item.isChecked===false?'未选择':'待派生')+'</small></li>').join('');
    body+=planningCardSection('🚀 提升行动','<ol class="node-improvements">'+list+'</ol>'+(!list?'<p class="node-card-empty">把复盘结论变成下一次的具体行动。</p>':''),planningCardListButton(node,'improvementList','编辑行动'));
    footer='<span>复盘沉淀 · 靶向提升</span><button type="button" class="node-primary-action" onclick="'+planningCardAction('deriveNodesFromReflectionCard('+JSON.stringify(node.id)+',event)')+'">🌱 派生实训节点</button>';
  }else if(type==='custom'){
    const names={text:'文字',number:'数字',boolean:'是 / 否',date:'日期'},list=p.customFieldsSchema.map(field=>'<div class="node-custom-field"><span>'+escapeIslandText(field.label)+'</span><span class="node-field-kind">'+escapeIslandText(names[field.type]||field.type)+(field.required?' · 必填':' · 选填')+'</span></div>').join('');
    body+=planningCardSection('📋 自定义字段',list||'<p class="node-card-empty">添加需要填报的项目与字段类型。</p>',planningCardListButton(node,'customFieldsSchema','维护字段'));
    footer='<span>执行时填写实际结果</span><span class="node-footer-chip">'+p.customFieldsSchema.length+' 个字段</span>';
  }else{
    body+='<div class="node-text-paper">'+planningCardArea(node,'textContent',p.textContent,'写下想法、资料或 Markdown 正文…')+'</div>';
    footer='<span>纯记录 · 不计入履约</span><button type="button" class="node-secondary-action" onclick="'+planningCardAction('acknowledgeDomainText('+JSON.stringify(node.id)+')')+'">👁 阅读留痕</button>';
  }
  body+=planningCardSettings(node);
  return '<article class="a-my-island-work-node-card tertiary-card tertiary-'+legacy+'-card domain-node-card" id="'+escapeIslandText(node.id)+'" data-domain-node="true" data-node-type="'+type+'" data-label="'+escapeIslandText(node.title)+'" data-group-id="'+escapeIslandText(node.groupId||'')+'" data-group-root="'+escapeIslandText(node.groupRoot||'')+'" style="position:absolute;left:'+Number(node.canvasPosition.x)+'px;top:'+Number(node.canvasPosition.y)+'px;width:340px;"><header class="work-node-card-header" ondblclick="'+planningCardAction('toggleTertiaryCardMinimize('+JSON.stringify(node.id)+',event)')+'" title="拖动标题栏移动；双击折叠或展开"><div class="node-card-kicker"><span class="work-node-badge">'+meta[0]+' '+meta[1]+'</span><span class="node-card-status" id="status-text-'+escapeIslandText(node.id)+'">'+status+'</span><button type="button" class="node-card-collapse-toggle" aria-label="折叠或展开节点" onclick="'+planningCardAction('toggleTertiaryCardMinimize('+JSON.stringify(node.id)+',event)')+'">⌃</button></div><div class="node-card-title-row"><span class="work-node-title">'+escapeIslandText(node.title)+'</span><button type="button" class="node-title-edit" aria-label="编辑节点名称" onclick="'+planningCardAction('editPlanningCardTitle('+JSON.stringify(node.id)+',event)')+'">✎</button></div><p class="node-card-subtitle">'+meta[2]+'</p></header><div class="work-node-body domain-planning-body">'+body+'</div><footer class="node-card-footer">'+footer+'</footer><button type="button" class="work-card-connect-handle" data-card-id="'+escapeIslandText(node.id)+'" aria-label="从此节点连接路线" title="拖向目标节点，或点击选择连线起点" onclick="startOrFinishConnecting(this.dataset.cardId,event)">🔗</button></article>';
}
