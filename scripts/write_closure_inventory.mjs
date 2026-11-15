import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';
const version=JSON.parse(fs.readFileSync('manifest.json','utf8')).version,dir=path.join('audit',version);
const read=name=>JSON.parse(fs.readFileSync(path.join(dir,name),'utf8'));
const functions=read('functions.json'),catalog=new Map(functions.map(f=>[f.name,f])),pages=read('pages-controls.json'),template=read('template-controls.json');
const md=value=>String(value??'').replace(/\|/g,'\\|').replace(/\r?\n/g,' ').replace(/`/g,"'");
const names=code=>[...new Set([...String(code).matchAll(/(?<![.\w])([a-zA-Z_$][\w$]*)\s*\(/g)].map(m=>m[1]).filter(n=>!['if','for','switch','function','Boolean','Number','String'].includes(n)))];
function trace(name,seen=new Set(),depth=0){if(depth>4||seen.has(name)||!catalog.has(name))return [];seen.add(name);const f=catalog.get(name);return [{name,line:f.line,aliasOf:f.aliasOf||null},...f.calls.flatMap(call=>trace(call,seen,depth+1))];}
function contract(page){
 if(/creator|list-editor|mindmap|edit-project|legacy-custom/.test(page))return ['WorkNode/cardPayload、Project、edgesByProject','domain_state.json → projects.json / nodes_<id>.json → 项目笔记'];
 if(/execution-(goal|drill|habit|review|custom)/.test(page))return ['当前TaskInstance、规划快照、drafts、CheckinRecord','domain_state.json.records/drafts → 项目 / 随记笔记、真实附件'];
 if(/settings/.test(page))return ['USER_PROFILE_STATE.settings / 插件设置','domain_state.json.stores / island_settings.json；数据目录为data.json设置'];
 if(/bounty/.test(page))return ['独立Bounty与家长核验记录','domain_state.json.bounties → bounties.json → CheckinRecord / Achievement'];
 if(/family|tree/.test(page))return ['FamilyPact、Violation、补救Project','domain_state.json.family → family_pact.json / family_pact.md；补救任务反向关联'];
 if(/journal|note/.test(page))return ['NOTE_STATE当日草稿、Journal历史、DomainEvent','domain_state.json.stores.NOTE_STATE → journal.json → 日期笔记'];
 if(/treasury/.test(page))return ['TREASURY_STATE.ledger与真实余额','domain_state.json.stores.TREASURY_STATE → ledger.json → 来源事件'];
 if(/highlight|achieve/.test(page))return ['Achievement、源记录 / 实测、实际原件','domain_state.json.stores.ACHIEVEMENT_STATE → achievements.json → 显式成果导出'];
 if(/inquiry/.test(page))return ['Inquiry → linkedProjectId → 实际进度','domain_state.json.stores.INQUIRY_POOL_STATE → inquiries.json → 项目与记录'];
 if(/classic/.test(page))return ['本地经典参考资料','参考内容，无成长记录写入'];
 if(/streak/.test(page))return ['有效记录、共同确认违约、批准保护','USER_PROFILE_STATE.freezeRecords / approvedFreezeDays；HUD派生'];
 return ['Project、TaskInstance、记录及界面呈现状态','领域事实或只读投影；导航不生成执行成功'];
}
const rows=[];
for(const page of pages)for(const control of page.controls){const code=Object.values(control.events).join(';'),entry=names(code),[owner,persistence]=contract(page.page);rows.push({...control,page:page.page,origin:'实际运行快照',entry,chain:entry.flatMap(n=>trace(n)),owner,persistence,coverage:'运行页面已采集；模块事务及边界见检查报告'});}
const shownIds=new Set(rows.map(r=>r.id).filter(Boolean));
for(const control of template){const entry=names(Object.values(control.events).join(';'));rows.push({...control,page:control.scopes?.slice(0,4).join(' / ')||'shell',origin:'完整生成模板',entry,chain:entry.flatMap(n=>trace(n)),owner:'按入口函数追踪，不能由模板外观判断数据事实',persistence:'未进入运行快照时不宣称逐按钮实测',coverage:shownIds.has(control.id)&&control.id?'ID已在运行页面采集':'静态入口已解析；可能为折叠菜单、旧模板或样例'});}
fs.writeFileSync(path.join(dir,'control-traceability.json'),JSON.stringify(rows,null,2));
let doc='# 按钮与输入字段逐项清单\n\n版本 '+version+'。实际运行页面的每一行是一个控件实例；同一按钮可能在多个状态出现。静态调用链仅证明入口和下游可解析，不能替代业务验收；模块事务、原件和恢复的相反断言见本版validation报告。未展示的模板项没有被包装成“逐按钮实测通过”。\n\n';
doc+='| # | 来源 / 页面 | 控件 | 名称 / 字段 | 入口 → 下游（最多四层，去重） | 数据来源 | 保存与回读 | 覆盖状态 |\n| --- | --- | --- | --- | --- | --- | --- | --- |\n';
for(const [i,row]of rows.entries()){const calls=[...new Map(row.chain.map(f=>[f.name,f])).values()].slice(0,15).map(f=>'['+f.name+'](../../src/runtime/prototypeScript.ts#L'+f.line+')').join(' → ');doc+='| '+[i+1,row.origin+' / '+row.page,row.id||row.tag+' '+row.type,row.text,calls||row.propertyClick||'原生输入 / 属性绑定 / 事件委托',row.owner,row.persistence,row.coverage].map(md).join(' | ')+' |\n';}
fs.writeFileSync(path.join(dir,'CONTROLS.md'),doc);
let displayDoc='# 页面展示值与来源模块\n\n以下是隔离审查夹具的展示值，不能当成用户真实数据。静态参考文字、配置默认值与实际记录需要区分；来源由当前页面的实际渲染模块读取，具体计算见源码和业务断言。\n\n| 页面 | DOM位置 | 展示值 | 来源对象 |\n| --- | --- | --- | --- |\n';
for(const page of pages)for(const field of page.displays||[])displayDoc+='| '+[page.page,field.id||field.scope,field.text,contract(page.page)[0]].map(md).join(' | ')+' |\n';
fs.writeFileSync(path.join(dir,'DISPLAY_VALUES.md'),displayDoc);
const entityRules={Attachment:['统一附件服务','执行/悬赏/随记/高光/导出','attachments原件 + 所属记录media'],DomainWorkNode:['规划编辑 / 新增 / 显式派生','调度 / 只读标准 / 项目笔记','nodesByProject → nodes_<id>.json'],TaskInstance:['调度器从节点和记录派生','日 / 周 / 月 / HUD / 同一执行入口','可重建投影；DOM不是事实源'],CheckinRecord:['类型校验通过的实际提交 / 家长核准','节点引用 / 项目进度 / 随记 / 成果','records；标准快照不随后续规划变化'],FamilyPact:['双方确认签署新版本','只读公约 / 裁决 / 当前镜像 / 显式导出','family、versions → family_pact.json/md'],DomainEvent:['成功的领域事务','当日流水 / 日记 / 来源记录','events + todayAutoLogs.sourceId']};
const source=ts.createSourceFile('domain.ts',fs.readFileSync('src/types/domain.ts','utf8'),ts.ScriptTarget.Latest,true),fields=[];
function properties(node,prefix,entity){if(!node)return;if(ts.isTypeLiteralNode(node)){for(const member of node.members)if(ts.isPropertySignature(member)){const key=member.name.getText(source),field=prefix?prefix+'.'+key:key;fields.push({entity,field,type:member.type?.getText(source)||'',...Object.fromEntries(['writer','reader','storage'].map((k,i)=>[k,entityRules[entity][i]]))});properties(member.type,field,entity);}}else if(ts.isArrayTypeNode(node))properties(node.elementType,prefix+'[]',entity);else if(ts.isTypeReferenceNode(node)&&node.typeName.getText(source)==='Array')properties(node.typeArguments?.[0],prefix+'[]',entity);else if(ts.isUnionTypeNode(node))node.types.forEach(type=>properties(type,prefix,entity));}
for(const item of source.statements)if(ts.isInterfaceDeclaration(item)&&entityRules[item.name.text])properties(ts.factory.createTypeLiteralNode(item.members),'',item.name.text);
const extras=[['Project','id,pavilion,category,title,desc,startDate,endDate,isArchived,archivedAt,sourceInquiryId,sourceViolationId,completedDays,createdAt','规划新增 / 编辑 / 归档、问道与裁决派发','甘特 / 脑图 / 调度 / 结业 / 笔记','projects → 分场馆projects.json → 项目笔记'],['Bounty','id,title,criteria,reward,createdDate,endDate,days,pavilionId,pavilionLabel,acceptedDate,status,evidence,parentComment,verifiedAt,verifiedDate,verifiedBy,achievementId,childReport','发布 / 揭榜 / 原件 / 家长核准','告示 / 独立任务 / 履约 / 历史 / 成果','bounties；items全历史 + activeId导出'],['Treasury','ledger[].id,ledger[].time,ledger[].date,ledger[].type,ledger[].category,ledger[].amount,ledger[].balanceAfter,ledger[].note,ledger[].proof,totalBalance,totalIncome,totalExpense,currentRecordType','合法金额的真实收入 / 支出','收支筛选、余额、来源事件','TREASURY_STATE → ledger.json；proof是说明，不是附件'],['Journal','date,text,mood,energy,autoLogs,media,draft,updatedAt,versions,dateKey,journalText,currentMood,currentEnergy,todayAutoLogs,mediaList,historyEntries','主观录入 / 真实事件 / 附件 / 封存 / 跨日保存','当日 / 历史 / 日期笔记 / 原件回放','NOTE_STATE → journal.json → YYYY/YYYY-MM-DD.md'],['Inquiry','id,question,classic,classicFull,guide,converted,linkedProjectId,resolutionStatus','本人提问 / 明确的本地经典参考 / 幂等转化','问道池、关联修身项目、结业回流','INQUIRY_POOL_STATE → inquiries.json'],['Achievement','id,title,date,desc,category,projectType,projectName,sourceProjectId,sourceNodeId,sourceRecordId,sourceRecordIds,bountyId,milestoneKey,metrics,media,proof,issuer,image','真实验收、核准、首次真实里程碑或生活高光','动态分组 / 实测详情 / 原件 / 回源 / 档案导出','ACHIEVEMENT_STATE → achievements.json → exports/*.md'],['Presentation','viewports.planning,viewports.projects,navigation.planning,navigation.projects,historyByProject,USER_PROFILE_STATE.settings,PAVILION_META','界面操作与设置，非成长验收','视口 / 地图 / 自定义场馆 / 外观 / 撤销','完整提交；navigation与viewports独立保存'],['DerivedHUD','continuousDays,streakDays,maxContinuousDays,fulfillmentRate,completedTodayCount,totalTodayCount,totalFocusMinutes,todayFocusMinutes','有效records、违约、保护、今日实例派生','HUD、周月、里程碑；不以DOM数量计算','统计投影；阅读、设置、记账不产生有效打卡']];
for(const [entity,list,writer,reader,storage]of extras)for(const field of list.split(','))fields.push({entity,field,type:'运行时契约',writer,reader,storage});
fs.writeFileSync(path.join(dir,'field-traceability.json'),JSON.stringify(fields,null,2));
let fieldDoc='# 数据字段读写与笔记落点\n\n逐项列出当前契约字段。执行事实与规划字段分离；TaskInstance和HUD是派生投影。旧兼容字段、缓存HTML和原型样例不能成为事实源。\n\n| 实体 | 字段 | 写入来源 | 读取/回路 | 存储/笔记 |\n| --- | --- | --- | --- | --- |\n';
for(const row of fields)fieldDoc+='| '+[row.entity,row.field,row.writer,row.reader,row.storage].map(md).join(' | ')+' |\n';fs.writeFileSync(path.join(dir,'FIELDS.md'),fieldDoc);
const observedPath=path.join(dir,'observed-domain.json'),storedFields=new Map();
function stored(value,prefix=''){
 if(value===null||typeof value!=='object'){storedFields.set(prefix,typeof value);return;}
 if(Array.isArray(value)){if(!value.length)storedFields.set(prefix+'[]','empty array');for(const item of value)stored(item,prefix+'[]');return;}
 for(const [key,item]of Object.entries(value)){
  const dynamic=['nodesByProject','edgesByProject','historyByProject','drafts','taskAliases','viewports.projects','navigation.projects','stores.PAVILION_META'].includes(prefix);
  stored(item,prefix?prefix+'.'+(dynamic?'*':key):key);
 }
}
if(fs.existsSync(observedPath))stored(JSON.parse(fs.readFileSync(observedPath,'utf8')));
let storedDoc='# 实际提交结构字段路径\n\n从本版隔离审查数据的完整提交逐字段采集，数组元素和按ID索引的对象归一化为[]或*。它补充FIELDS.md的契约表，不表示所有兼容字段都是独立事实源。stores中的记录/统计为兼容镜像，规范执行事实仍是records。此文件不包含用户Vault内容。\n\n| 保存路径 | 夹具中的值类型 |\n| --- | --- |\n';
for(const [key,type]of [...storedFields].sort())storedDoc+='| '+[key,type].map(md).join(' | ')+' |\n';fs.writeFileSync(path.join(dir,'STORED_FIELDS.md'),storedDoc);
const summary={version,pages:pages.length,liveControlInstances:rows.filter(r=>r.origin==='实际运行快照').length,templateControls:template.length,controlRows:rows.length,contractFields:fields.length,storedFieldPaths:storedFields.size,displayInstances:pages.reduce((sum,p)=>sum+(p.displays?.length||0),0),staticFunctions:functions.length,unresolvedStaticInlineFunctions:read('static-summary.json').unresolved,limitations:['A reachable function is not proof of a complete transaction.','Not every presentation button was independently clicked; source traces and module-level regression evidence are distinguished.','No user Vault or Android device was provided; generated files and real ItemView/StorageAdapter are tested using isolated fixtures and simulated Obsidian APIs.']};
fs.writeFileSync(path.join(dir,'inventory-summary.json'),JSON.stringify(summary,null,2));console.log(JSON.stringify(summary));
