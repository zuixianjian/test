import fs from 'node:fs';
import ts from 'typescript';
const file='high_fidelity_ui_preview.html';let html=fs.readFileSync(file,'utf8');
const version=JSON.parse(fs.readFileSync('package.json','utf8')).version;
html=html.replace(/data-product-contract="3">\d+\.\d+\.\d+/,'data-product-contract="3">'+version);
html=html.replace(/const GANTT_TODAY\s*=/g,'let GANTT_TODAY =');
// Shared modal scaffolds are identical in the design and plugin template.
function replaceDialog(id,file){
 const start=html.search(new RegExp('<div\\b[^>]*\\bid="'+id+'"[^>]*>'));
 if(start<0)throw new Error('Missing modal '+id);
 const tokens=/<\/?div\b[^>]*>/g;tokens.lastIndex=start;let depth=0,end=-1,token;
 while((token=tokens.exec(html))){depth+=token[0].startsWith('</')?-1:1;if(!depth){end=tokens.lastIndex;break;}}
 if(end<0)throw new Error('Unbalanced modal '+id);
 html=html.slice(0,start)+fs.readFileSync(file,'utf8').trim()+html.slice(end);
}
replaceDialog('modal-tertiary-add-node','src/ui/nodeCreator.html');
replaceDialog('bounty-modal-backdrop','src/ui/bountyDialog.html');
const start='// PRODUCT_RULES_START',end='// PRODUCT_RULES_END';
const growth=ts.transpileModule(fs.readFileSync('src/core/GrowthMetrics.ts','utf8'),{compilerOptions:{module:ts.ModuleKind.ESNext,target:ts.ScriptTarget.ES2020}}).outputText.replace(/^export /gm,'');
const domain=fs.readFileSync('src/core/domain.mjs','utf8').replace(/^export /gm,'');
const canvas=fs.readFileSync('src/core/canvas.mjs','utf8').replace(/^export /gm,'');
const script=[growth,domain,canvas,...['businessRules.js','closedLoopRuntime.js','closedLoopWorkflows.js','closedLoopModules.js','nodeCards.js','homeExecutionQueue.js','nodeCreator.js','planningBoundary.js','mediaPicker.js','bountyDialog.js','closedLoopIntegrity.js','canvasInteractions.js','canvasNavigation.js'].map(f=>fs.readFileSync('src/runtime/'+f,'utf8'))].join('\n');
const block=start+'\n'+script+'\n'+end;
if(html.includes(start))html=html.slice(0,html.indexOf(start))+block+html.slice(html.indexOf(end)+end.length);
else html=html.replace('</script>',block+'\n</script>');
const cssStart='/* PRODUCT_CSS_START */',cssEnd='/* PRODUCT_CSS_END */';
const cssBlock=cssStart+'\n'+['closedLoop.css','nodeCards.css','homeExecutionQueue.css','nodeCreator.css','phaseMedia.css'].map(f=>fs.readFileSync('src/ui/'+f,'utf8')).join('\n')+'\n'+cssEnd;
if(html.includes(cssStart))html=html.slice(0,html.indexOf(cssStart))+cssBlock+html.slice(html.indexOf(cssEnd)+cssEnd.length);
else html=html.replace('</style>',cssBlock+'\n</style>');
if(!html.includes('data-product-contract="3"'))html=html.replace('<body>','<body>\n<div class="global-header product-contract-banner" data-product-contract="3">1.1.0 闭环交互预览 · 按项目/节点/每日任务实例关联 · 本预览数据保存在当前浏览器，组件画板样例不计为实际执行</div>');
fs.writeFileSync(file,html);
console.log('Shared domain rules synchronized into standalone design.');
