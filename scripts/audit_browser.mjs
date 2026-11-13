import {build} from 'esbuild';
import fs from 'node:fs';
import path from 'node:path';
import {spawn} from 'node:child_process';

const dir=path.resolve('scratch/closed-loop-audit');fs.mkdirSync(dir,{recursive:true});fs.mkdirSync('audit',{recursive:true});
const shim=`export class Notice {constructor(message){console.log(message)}} export class TFile {} export class App {} export const normalizePath=p=>p.split(String.fromCharCode(92)).join('/');`;
await build({stdin:{contents:`export {bootPrototypeRuntime} from './src/runtime/prototypeScript';export {ISLAND_UI_HTML} from './src/ui/template';export {VaultStorageAdapter} from './src/storage/VaultStorageAdapter';`,resolveDir:process.cwd()},bundle:true,format:'iife',globalName:'Harness',outfile:path.join(dir,'harness.js'),plugins:[{name:'test-obsidian',setup(b){b.onResolve({filter:/^obsidian$/},()=>({path:'obsidian',namespace:'mock'}));b.onLoad({filter:/.*/,namespace:'mock'},()=>({contents:shim,loader:'js'}));}}]});
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
  const result=await evaluate(fs.readFileSync(scenario,'utf8'));
  if(result.checks){
    fs.writeFileSync(designMode?'audit/design-validation-1.1.0.json':'audit/validation-1.1.0.json',JSON.stringify(result,null,2));for(const c of result.checks)console.log('PASS: '+c);console.log('Passed '+result.checks.length+' domain and integration checks');
    if(result.screenshot){
      await new Promise(r=>setTimeout(r,1800));
      await send('Page.captureScreenshot',{format:'png'}).then(r=>fs.writeFileSync(path.join(dir,designMode?'design-1.1.0.png':'release-1.1.0.png'),Buffer.from(r.data,'base64')));
      if(result.portrait){
        await send('Emulation.setDeviceMetricsOverride',{width:768,height:1024,deviceScaleFactor:1,mobile:false});
        await new Promise(r=>setTimeout(r,300));
        await send('Page.captureScreenshot',{format:'png'}).then(r=>fs.writeFileSync(path.join(dir,'design-portrait-1.1.0.png'),Buffer.from(r.data,'base64')));
      }
      for(const view of result.capturePages||[]){
        await evaluate(view.code);await new Promise(r=>setTimeout(r,120));
        const name=view.name.replace(/[^a-z0-9-]/gi,'');
        await send('Page.captureScreenshot',{format:'png'}).then(r=>fs.writeFileSync(path.join(dir,'page-'+name+'-1.1.0.png'),Buffer.from(r.data,'base64')));
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
}finally{ws?.close();chrome.kill();}
