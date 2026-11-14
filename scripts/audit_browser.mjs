import {build} from 'esbuild';
import fs from 'node:fs';
import path from 'node:path';
import {spawn} from 'node:child_process';
import {pathToFileURL} from 'node:url';

const dir=path.resolve('scratch/closed-loop-audit');fs.mkdirSync(dir,{recursive:true});fs.mkdirSync('audit',{recursive:true});
const shim=`export class Notice {constructor(message){console.log(message)}} export class TFile {} export class App {} export class Plugin {} export class PluginSettingTab {} export class Setting {} export const normalizePath=p=>p.split(String.fromCharCode(92)).join('/');
export class ItemView {constructor(leaf){this.leaf=leaf;this.app=leaf.app;this.cleanups=[];this.containerEl=document.createElement('div');this.containerEl.className='workspace-leaf-content';this.containerEl.dataset.type='youth-holistic-growth-island-view';this.contentEl=document.createElement('div');this.contentEl.className='view-content';this.containerEl.append(this.contentEl);document.body.append(this.containerEl);}registerEvent(off){if(typeof off==='function')this.cleanups.push(off);}registerDomEvent(target,type,listener,options){target.addEventListener(type,listener,options);this.cleanups.push(()=>target.removeEventListener(type,listener,options));}releaseTestComponent(){for(const cleanup of this.cleanups.splice(0))cleanup();this.containerEl.remove();}}
`;
await build({stdin:{contents:`export {bootPrototypeRuntime} from './src/runtime/prototypeScript';export {ISLAND_UI_HTML} from './src/ui/template';export {VaultStorageAdapter} from './src/storage/VaultStorageAdapter';export {YouthIslandView} from './src/views/YouthIslandView';export {installMobileGestureIsolation} from './src/core/MobileGestureIsolation';export {default as YouthGrowthIslandPlugin} from './src/main';`,resolveDir:process.cwd()},bundle:true,format:'iife',globalName:'Harness',outfile:path.join(dir,'harness.js'),plugins:[{name:'test-obsidian',setup(b){b.onResolve({filter:/^obsidian$/},()=>({path:'obsidian',namespace:'mock'}));b.onLoad({filter:/.*/,namespace:'mock'},()=>({contents:shim,loader:'js'}));}}]});
fs.copyFileSync('styles.css',path.join(dir,'styles.css'));
fs.writeFileSync(path.join(dir,'index.html'),'<meta charset="utf-8"><link rel="stylesheet" href="styles.css"><div class="youth-island-plugin-root" style="width:1280px;height:900px;"></div><script src="harness.js"></script>');
const profile=path.join(dir,'chrome-profile-'+Date.now());
const designMode=process.argv.includes('--design');
const targetFile=designMode?path.resolve('high_fidelity_ui_preview.html'):path.join(dir,'index.html');
const chrome=spawn(process.env.CHROME_PATH||'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',['--headless=new','--disable-gpu','--remote-debugging-port=0','--remote-allow-origins=*','--window-size=1366,1000','--user-data-dir='+profile,'file:///'+targetFile.replace(/\\/g,'/')],{windowsHide:true});
let ws;
try{
  let port;for(let i=0;i<80;i++){const file=path.join(profile,'DevToolsActivePort');if(fs.existsSync(file)){port=fs.readFileSync(file,'utf8').split('\n')[0];break;}await new Promise(r=>setTimeout(r,100));}
  if(!port)throw new Error('Chrome startup failed');
  const pages=await(await fetch('http://127.0.0.1:'+port+'/json')).json();const page=pages.find(p=>p.type==='page');
  ws=new WebSocket(page.webSocketDebuggerUrl);await new Promise((res,rej)=>{ws.onopen=res;ws.onerror=rej;});let id=0;
  const send=(method,params={})=>new Promise((resolve,reject)=>{const key=++id;const timer=setTimeout(()=>reject(new Error('CDP timed out: '+method)),45000);const listener=e=>{const m=JSON.parse(e.data);if(m.id===key){clearTimeout(timer);ws.removeEventListener('message',listener);m.error?reject(m.error):resolve(m.result);}};ws.addEventListener('message',listener);ws.send(JSON.stringify({id:key,method,params}));});
  const evaluate=async expression=>{const r=await send('Runtime.evaluate',{expression,awaitPromise:true,returnByValue:true});if(r.exceptionDetails)throw new Error(r.exceptionDetails.exception?.description||r.exceptionDetails.text);return r.result.value;};
  for(let i=0;i<50;i++){if(await evaluate(designMode?'window.__YOUTH_ISLAND_DESIGN_READY__ === true':'typeof Harness !== "undefined"'))break;await new Promise(r=>setTimeout(r,100));}
  const scenario=process.argv[2]||'scripts/audit_scenarios.js';
  const result=scenario.endsWith('.mjs')?await (await import(pathToFileURL(path.resolve(scenario)).href)).default({evaluate,send,designMode}):await evaluate(fs.readFileSync(scenario,'utf8'));
  const version=result.version||'1.1.0',group=['canvas','navigation','mobile'].includes(result.suite)?result.suite:null,suite=group?group+(designMode?'-design-':'-'):designMode?'design-':'';
  if(result.checks){
    fs.writeFileSync('audit/'+suite+'validation-'+version+'.json',JSON.stringify(result,null,2));for(const c of result.checks)console.log('PASS: '+c);console.log('Passed '+result.checks.length+' domain and integration checks');
    if(result.screenshot){
      await new Promise(r=>setTimeout(r,1800));
      const shotName=group?group+(designMode?'-design':''):designMode?'design':'release';
      await send('Page.captureScreenshot',{format:'png'}).then(r=>fs.writeFileSync(path.join(dir,shotName+'-'+version+'.png'),Buffer.from(r.data,'base64')));
      if(result.portrait){
        await send('Emulation.setDeviceMetricsOverride',{width:768,height:1024,deviceScaleFactor:1,mobile:false});
        await new Promise(r=>setTimeout(r,300));
        await send('Page.captureScreenshot',{format:'png'}).then(r=>fs.writeFileSync(path.join(dir,(group?shotName:'design')+'-portrait-'+version+'.png'),Buffer.from(r.data,'base64')));
      }
      for(const view of result.capturePages||[]){
        await evaluate(view.code);await new Promise(r=>setTimeout(r,120));
        const name=view.name.replace(/[^a-z0-9-]/gi,'');
        await send('Page.captureScreenshot',{format:'png'}).then(r=>fs.writeFileSync(path.join(dir,'page-'+name+'-'+version+'.png'),Buffer.from(r.data,'base64')));
      }
    }
  }
  else {
  fs.writeFileSync('audit/browser-evidence.json',JSON.stringify(result,null,2));
  fs.writeFileSync('audit/page-controls.json',JSON.stringify(result.pageSnapshots,null,2));
  fs.writeFileSync('audit/design-controls.json',JSON.stringify(result.designControls,null,2));
  fs.writeFileSync('audit/design-displays.json',JSON.stringify(result.designDisplays,null,2));
  for(const probe of result.probes)console.log((probe.problemObserved?'CONFIRMED':'NOT REPRODUCED')+': '+probe.id+' '+probe.title+' '+JSON.stringify(probe.actual));
  console.log(JSON.stringify({pages:result.pageSnapshots.length,designControlInstances:result.designControls.length,liveControlInstances:result.pageSnapshots.reduce((n,p)=>n+p.controls.length,0),probes:result.probes.length,confirmed:result.probes.filter(p=>p.problemObserved).length}));
  }
}catch(error){
  if(ws?.readyState===1){const id=900000;await new Promise(resolve=>{const timer=setTimeout(resolve,1500),listener=event=>{const data=JSON.parse(event.data);if(data.id===id){ws.removeEventListener('message',listener);clearTimeout(timer);if(data.result?.data)fs.writeFileSync(path.join(dir,'last-failure.png'),Buffer.from(data.result.data,'base64'));resolve();}};ws.addEventListener('message',listener);ws.send(JSON.stringify({id,method:'Page.captureScreenshot',params:{format:'png'}}));});}
  throw error;
}finally{ws?.close();chrome.kill();}
