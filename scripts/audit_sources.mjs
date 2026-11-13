import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';

const output = path.resolve('audit'); fs.mkdirSync(output,{recursive:true});
const runtimePath='src/runtime/prototypeScript.ts';
const text=fs.readFileSync(runtimePath,'utf8');
const file=ts.createSourceFile(runtimePath,text,ts.ScriptTarget.Latest,true,ts.ScriptKind.TS);
const boot=file.statements.find(n=>ts.isFunctionDeclaration(n)&&n.name.text==='bootPrototypeRuntime');
const catalog=new Map(); const history=[];
function collect(name,node,kind){
  const calls=new Set(), writes=new Set();
  const visit=n=>{
    if(ts.isCallExpression(n)){const e=n.expression;if(ts.isIdentifier(e))calls.add(e.text);else if(ts.isPropertyAccessExpression(e)&&e.expression.getText(file)==='window')calls.add(e.name.text);}
    if(ts.isBinaryExpression(n)&&n.operatorToken.kind>=ts.SyntaxKind.FirstAssignment&&n.operatorToken.kind<=ts.SyntaxKind.LastAssignment)writes.add(n.left.getText(file));
    ts.forEachChild(n,visit);
  };visit(node);
  const start=file.getLineAndCharacterOfPosition(node.getStart(file)).line+1;
  const item={name,kind,line:start,endLine:file.getLineAndCharacterOfPosition(node.end).line+1,calls:[...calls],writes:[...writes],code:node.getText(file)};
  catalog.set(name,item);history.push(item);
}
for(const statement of boot.body.statements){
  if(ts.isFunctionDeclaration(statement)&&statement.name)collect(statement.name.text,statement,'declaration');
  if(ts.isVariableStatement(statement))for(const d of statement.declarationList.declarations){
    if(d.initializer&&(ts.isFunctionExpression(d.initializer)||ts.isArrowFunction(d.initializer)))collect(d.name.getText(file),d.initializer,'variable');
    else if(d.initializer&&ts.isIdentifier(d.initializer)&&catalog.has(d.initializer.text))catalog.set(d.name.getText(file),{...catalog.get(d.initializer.text),name:d.name.getText(file),aliasOf:d.initializer.text});
  }
  if(ts.isExpressionStatement(statement)&&ts.isBinaryExpression(statement.expression)){
    const expression=statement.expression;
    const name=ts.isIdentifier(expression.left)?expression.left.text:ts.isPropertyAccessExpression(expression.left)&&expression.left.expression.getText(file)==='window'?expression.left.name.text:null;
    if(name&&expression.operatorToken.kind===ts.SyntaxKind.EqualsToken&&(ts.isFunctionExpression(expression.right)||ts.isArrowFunction(expression.right)))collect(name,expression.right,'override');
  }
}
const all=[...catalog.values()];
fs.writeFileSync(path.join(output,'functions.json'),JSON.stringify(all,null,2));
const body=JSON.parse(fs.readFileSync('src/ui/template.ts','utf8').match(/ISLAND_UI_HTML: string = ([\s\S]*);\s*$/)[1]);
fs.writeFileSync(path.join(output,'template.html'),body);
const inline=[];
for(const match of body.matchAll(/\bon(click|change|input|dblclick|keydown|pointerdown|mousedown)="([^"]*)"/g)){
  const code=match[2].replace(/&apos;/g,"'").replace(/&quot;/g,'"').replace(/&amp;/g,'&');
  const names=[...new Set([...code.matchAll(/(?<![.\w])([a-zA-Z_$][\w$]*)\s*\(/g)].map(m=>m[1]).filter(n=>!['if','for','switch'].includes(n)))];
  inline.push({event:match[1],code,names,templateLine:body.slice(0,match.index).split('\n').length,functions:names.map(n=>({name:n,line:catalog.get(n)?.line||null,kind:catalog.get(n)?.kind||null}))});
}
fs.writeFileSync(path.join(output,'inline-handlers.json'),JSON.stringify(inline,null,2));
const stubs=all.filter(f=>!f.aliasOf&&f.calls.includes('showIslandToast')&&f.calls.filter(c=>!['showIslandToast','Number','String','Math','parseInt'].includes(c)).length===0);
fs.writeFileSync(path.join(output,'toast-only-candidates.json'),JSON.stringify(stubs,null,2));
const summary={resolvedFunctions:all.length,functionDeclarationsAndOverrides:history.length,inlineEventInstances:inline.length,uniqueInlineFunctions:new Set(inline.flatMap(e=>e.names)).size,unresolved:[...new Set(inline.flatMap(e=>e.names).filter(n=>!catalog.has(n)&&!['event','setTimeout','alert','confirm','prompt'].includes(n)))],toastOnlyCandidates:stubs.map(f=>({name:f.name,line:f.line}))};
fs.writeFileSync(path.join(output,'static-summary.json'),JSON.stringify(summary,null,2));
if(!process.argv[2])console.log(JSON.stringify(summary,null,2));

if(process.argv[2])for(const name of process.argv.slice(2)){const f=catalog.get(name);console.log('\n'+name+' @ '+f?.line+'\n'+f?.code);}
