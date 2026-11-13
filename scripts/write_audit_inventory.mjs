import fs from 'node:fs';
const evidence=JSON.parse(fs.readFileSync('audit/browser-evidence.json','utf8'));
const functions=JSON.parse(fs.readFileSync('audit/functions.json','utf8'));
const catalog=new Map(functions.map(f=>[f.name,f]));
const md=value=>String(value??'').replace(/\|/g,'\\|').replace(/\r?\n/g,' ').replace(/`/g,"'");
const functionNames=code=>[...new Set([...String(code).matchAll(/(?<![.\w])([a-zA-Z_$][\w$]*)\s*\(/g)].map(m=>m[1]).filter(n=>!['if','function','for','switch'].includes(n)))];
function trace(name,depth=0,seen=new Set()){
  if(depth>2||seen.has(name))return [];
  seen.add(name);const f=catalog.get(name);if(!f)return [];
  return [{name,line:f.line,kind:f.kind,aliasOf:f.aliasOf||null},...f.calls.flatMap(call=>trace(call,depth+1,seen))];
}
const rows=[];
function add(control,page,origin){
  const names=functionNames(Object.values(control.events).join(';'));
  const chains=names.map(name=>({name,chain:trace(name)}));
  const category=control.tag==='INPUT'||control.tag==='TEXTAREA'||control.tag==='SELECT'?'输入/配置':Object.values(control.events).some(code=>/^\s*showIslandToast\(/.test(code))?'直接提示，需核验业务动作':control.propertyClick&&!Object.keys(control.events).length?'属性绑定/运行时回调':names.length?'可解析调用':'原生控件/需核查委托';
  rows.push({...control,page,origin,names,chains,category});
}
for(const c of evidence.designControls)add(c,c.ancestors.slice().reverse().find(id=>/modal|frame|view|panel|workspace/.test(id))||'shell','设计模板');
for(const p of evidence.pageSnapshots)for(const c of p.controls)add(c,p.page,'运行页面快照');
fs.writeFileSync('audit/button-traceability.json',JSON.stringify(rows,null,2));
let doc='# 按钮与输入控件逐项调用清单\n\n来源：1.0.15 生成模板与浏览器页面快照。每行是一次控件实例，不是去重后的功能数量。同一个控件会出现在多个页面快照中。静态找得到函数只证明入口存在，不证明前置校验、业务写入或回写完成。属性绑定与事件委托需要结合具体函数核查。\n\n';
doc+='|序号|来源/页面|控件ID/类型|显示/输入|绑定入口|当前函数位置|下游调用（最多两层）|入口分类|\n|---|---|---|---|---|---|---|---|\n';
for(let i=0;i<rows.length;i++){
  const r=rows[i];const targets=r.names.map(n=>{const f=catalog.get(n);return f?'['+n+'](F:/self-improve/src/runtime/prototypeScript.ts:'+f.line+')':n;}).join(', ');
  doc+='|'+[i+1,r.origin+' / '+r.page,r.id||r.tag+' '+r.type,(r.text||r.value||'').slice(0,130),Object.values(r.events).join('; ').slice(0,210)||r.propertyClick?.slice(0,100)||'',targets,r.chains.flatMap(c=>c.chain.slice(1).map(n=>n.name)).slice(0,12).join(' → '),r.category].map(md).join('|')+'|\n';
}
fs.writeFileSync('audit/BUTTON_TRACEABILITY.md',doc);
const groups=[];
for(const p of evidence.pageSnapshots){const displays=p.displays||[];groups.push({page:p.page,method:p.method,controls:p.controls.length,displayItems:displays.length});}
fs.writeFileSync('audit/page-summary.json',JSON.stringify(groups,null,2));
let fieldDoc='# 页面展示值快照\n\n这些是审查夹具下的展示值，不能当作用户真实数据。字段来源与业务判断请结合主报告的页面矩阵。此表保留静态样例与实际运行页面的边界，避免把原型样例误判为真实业务记录。\n\n';
fieldDoc+='|页面|DOM位置|展示值|\n|---|---|---|\n';
for(const p of evidence.pageSnapshots)for(const field of p.displays||[])fieldDoc+='|'+[p.page,field.id||field.ancestor,field.text].map(md).join('|')+'|\n';
fs.writeFileSync('audit/DISPLAY_VALUES.md',fieldDoc);
const directToast=rows.filter(r=>r.category==='直接提示，需核验业务动作');
console.log(JSON.stringify({totalControlInstances:rows.length,designControls:evidence.designControls.length,runtimeSnapshots:evidence.pageSnapshots.length,displayInstances:evidence.pageSnapshots.reduce((n,p)=>n+(p.displays?.length||0),0),directToastInstances:directToast.length,positiveChecks:evidence.positiveChecks,unavailableSpecialized:evidence.unavailableSpecialized},null,2));
