import {build} from 'esbuild';
import fs from 'node:fs';
import path from 'node:path';
import {spawn} from 'node:child_process';
import assert from 'node:assert/strict';

const dir = path.resolve('scratch/runtime-regression'); fs.mkdirSync(dir,{recursive:true});
const shim = `export class Notice { constructor(message) { console.log(message); } } export class TFile {} export function normalizePath(p) {return p.split(String.fromCharCode(92)).join('/');} export class App {}`;
await build({stdin:{contents:`export {bootPrototypeRuntime} from './src/runtime/prototypeScript'; export {ISLAND_UI_HTML} from './src/ui/template'; export {VaultStorageAdapter} from './src/storage/VaultStorageAdapter';`,resolveDir:process.cwd()},bundle:true,format:'iife',globalName:'Harness',outfile:path.join(dir,'harness.js'),plugins:[{name:'obsidian-test',setup(b){b.onResolve({filter:/^obsidian$/},()=>({path:'obsidian',namespace:'test'}));b.onLoad({filter:/.*/,namespace:'test'},()=>({contents:shim,loader:'js'}));}}]});
fs.copyFileSync('styles.css',path.join(dir,'styles.css'));
fs.writeFileSync(path.join(dir,'index.html'),'<html><head><meta charset="utf-8"><link rel="stylesheet" href="styles.css"></head><body><button id="outside">Obsidian host button</button><div class="youth-island-plugin-root" style="width:1200px;height:800px;"></div><script src="harness.js"></script></body></html>');
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const profilePath = path.join(dir,'chrome-profile-'+Date.now());
const chrome = spawn(chromePath,['--headless=new','--remote-debugging-port=0','--remote-allow-origins=*','--disable-gpu',`--user-data-dir=${profilePath}`,'--window-size=1280,900','file:///'+path.join(dir,'index.html').replace(/\\/g,'/')],{windowsHide:true});
let ws;
try {
  const portFile=path.join(profilePath,'DevToolsActivePort');
  let port;
  for(let i=0;i<80;i++) {if(fs.existsSync(portFile)){port=fs.readFileSync(portFile,'utf8').split('\n')[0];break;} await new Promise(r=>setTimeout(r,100));}
  if(!port) throw new Error('Chrome did not start');
  let page;
  for(let i=0;i<50;i++){const pages=await (await fetch(`http://127.0.0.1:${port}/json`)).json();page=pages.find(p=>p.type==='page');if(page)break;await new Promise(r=>setTimeout(r,100));}
  ws=new WebSocket(page.webSocketDebuggerUrl); await new Promise((res,rej)=>{ws.onopen=res;ws.onerror=rej;});
  let id=0;const send=(method,params={})=>new Promise((res,rej)=>{const key=++id;const listener=event=>{const m=JSON.parse(event.data);if(m.id===key){ws.removeEventListener('message',listener);m.error?rej(m.error):res(m.result);}};ws.addEventListener('message',listener);ws.send(JSON.stringify({id:key,method,params}));});
  await send('Runtime.enable');
  const evaluate=async expression=>{const r=await send('Runtime.evaluate',{expression,awaitPromise:true,returnByValue:true});if(r.exceptionDetails)throw new Error(r.exceptionDetails.exception?.description||r.exceptionDetails.text);return r.result.value;};
  for(let i=0;i<50;i++){if(await evaluate('typeof Harness !== "undefined"'))break;await new Promise(r=>setTimeout(r,100));}
  const results=await evaluate(`(async()=>{
    const checks=[]; const check=(condition,label)=>{if(!condition)throw new Error(label);checks.push(label);};
    const root=document.querySelector('.youth-island-plugin-root');root.innerHTML=Harness.ISLAND_UI_HTML;
    const before=getComputedStyle(document.body).margin;
    window.__saveIslandAttachment=async f=>({path:'attachments/'+f.name,url:'data:'+f.type+';base64,AAAA'});
    window.__islandAttachmentUrl=p=>'data:image/png;base64,AAAA';
    let dispose=Harness.bootPrototypeRuntime();
    check(getComputedStyle(document.body).margin===before,'host styles remain isolated');
    check(getComputedStyle(document.getElementById('modal-tertiary-add-node')).display==='none','creation dialog stays hidden until opened');
    window.GANTT_PROJECTS.splice(0,window.GANTT_PROJECTS.length,{id:'user-1',title:'真实项目',pavilion:'study',startDate:'2026-01-01',endDate:'2027-01-01',completedDays:[]});
    window.PROJECT_CANVAS_STORE['user-1']=window.buildStarterCanvasForProject(window.GANTT_PROJECTS[0]);
    window.enterTertiaryWorkspace('user-1');
    window.syncNewNodeToHomeExecution({id:'projnode-user-1-2',projectId:'user-1',title:'测试实训',pavilionId:'study'});
    const card=document.getElementById('exec-sync-projnode-user-1-2');
    window.openExecCardPopupView('drill',card);
    window.submitRealExecution();check(window.USER_PROFILE_STATE.checkinRecords.length===0,'empty checkin rejected');
    document.getElementById('island-real-reflection').value='尚未提交的执行草稿';window.saveExecutionDraft();window.closeExecCardPopupView();window.openExecCardPopupView('drill',card);
    check(document.getElementById('island-real-reflection').value==='尚未提交的执行草稿','execution draft survives accidental exit');
    document.getElementById('island-real-reflection').value='我完成了真实推导';window.submitRealExecution();
    check(window.USER_PROFILE_STATE.checkinRecords.length===1,'real reflection accepted');
    check(window.USER_PROFILE_STATE.checkinRecords[0].focusSeconds===0,'no invented focus minutes');
    window.submitRealExecution();check(window.USER_PROFILE_STATE.checkinRecords.length===1,'duplicate submit is idempotent');
    check(window.GANTT_PROJECTS[0].completedDays.length===1,'only actual date marked');
    check(window.PROJECT_CANVAS_STORE['user-1'].executionRecords['projnode-user-1-2'].reflection==='我完成了真实推导','source node receives execution record');
    check(document.getElementById('projnode-user-1-2').dataset.status==='completed','planning node displays completed execution status');
    const parent=document.getElementById('projnode-user-1-3');
    window.deriveNodesFromReflectionCard(parent.id);
    const child=Array.from(document.querySelectorAll('#tertiary-canvas-world .tertiary-card')).find(c=>c.dataset.groupRoot===parent.id && c.id!==parent.id);
    check(!!child,'reflection generates grouped training node');
    child.classList.add('is-selected');window.handleTertiaryDeleteNode();check(!!document.getElementById(child.id),'derived child cannot be deleted alone');child.classList.remove('is-selected');
    parent.classList.add('is-selected');window.handleTertiaryDeleteNode();check(!document.getElementById(parent.id)&&!document.getElementById(child.id),'root deletes the whole derived group');
    window.handleTertiaryUndo();check(!!document.getElementById(parent.id)&&!!document.getElementById(child.id),'undo restores the whole group');
    window.handleTertiaryRedo();check(!document.getElementById(parent.id),'redo preserves grouped deletion');
    window.closeExecCardPopupView();window.enterSecondaryWorkspace('note','specialized');
    document.getElementById('note-journal-textarea').value='今天的真实随笔';window.saveNoteDailyEntry();window.saveNoteDailyEntry();
    check(window.NOTE_STATE.historyEntries.length===1,'same day journal updates without duplication');
    check(window.NOTE_STATE.historyEntries[0].autoLogs.length===window.NOTE_STATE.todayAutoLogs.length && !window.NOTE_STATE.historyEntries[0].autoLogs.some(l=>l.includes('清零错题 3 道')),'journal contains only actual events');
    const now=new Date();
    if(now.getDate()>3){
      const past=offset=>{const d=new Date(now);d.setDate(d.getDate()-offset);return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');};
      for(let i=1;i<=3;i++){window.openStreakFreezeDialog();document.getElementById('island-freeze-date').value=past(i);document.getElementById('island-freeze-reason').value='生病休息';document.getElementById('island-freeze-confirm').checked=true;window.submitStreakFreeze();}
      check(window.USER_PROFILE_STATE.freezeRecords.length===2,'parental freeze allowance capped at two per month');
      document.getElementById('island-freeze-dialog')?.remove();
    }
    const file=new File(['binary-proof'],'proof.png',{type:'image/png'});await window.handleNotePhotoFile({files:[file],value:''});
    check(window.NOTE_STATE.mediaList[0].path==='attachments/proof.png','real note attachment path saved');
    window.openNoteMediaPreviewModal(window.NOTE_STATE.mediaList[0].id);check(!!document.querySelector('#note-preview-modal-body img'),'real image preview rendered');
    window.NOTE_STATE.journalText='<img src=x onerror="window.injected=true">';const markup=window.renderNoteSpecializedWorkspace();check(markup.includes('&lt;img'),'journal HTML is escaped');
    const files=new Map();const adapter={exists:async p=>files.has(p),read:async p=>files.get(p),write:async(p,t)=>files.set(p,t),writeBinary:async(p,b)=>files.set(p,b),getResourcePath:p=>'app://'+p,rename:async(a,b)=>{files.set(b,files.get(a));files.delete(a);}};
    const app={vault:{adapter,createFolder:async p=>files.set(p,'directory')}};
    const settings={vaultRootFolder:'growth',autoSyncVaultMarkdown:true};
    const storage=new Harness.VaultStorageAdapter(app,()=>settings);
    await storage.syncRuntimeToVault();check(files.size===0,'sync before hydration cannot overwrite a vault');
    // Hydrate a fresh vault before adding test data (opening alone must not purge saved IDs).
    await storage.hydrateRuntimeFromVault();
    const savedFile=await storage.saveAttachment(file);check(files.get(savedFile.path).byteLength===12,'attachment binary is written to the Vault');
    window.GANTT_PROJECTS.push({id:'p1',title:'用户真实 p1',pavilion:'custom-user',startDate:'2026-11-01',endDate:'2026-11-20',completedDays:[]});
    window.PAVILION_META['custom-user']={name:'用户场馆',icon:'🎨',cat:'用户场馆',hasGantt:true};
    window.PROJECT_CANVAS_STORE.p1={cardsHtml:'',edges:[]};
    window.BOUNTY_STATE={id:'real-bounty',status:'accepted',title:'真实契约'};
    window.NOTE_STATE.historyEntries=[{date:'2026-11-12',text:'昨日',autoLogs:[],media:[]},{date:'2026-11-11',text:'前日',autoLogs:[],media:[]}];
    await storage.syncRuntimeToVault();
    check(files.has('growth/10_Custom_自定义场馆/custom-user/projects.json'),'custom pavilion exported');
    check(files.has('growth/08_Daily_每日随记/2026/2026-11-11.md')&&files.has('growth/08_Daily_每日随记/2026/2026-11-12.md'),'all journal dates exported');
    const snapshot=files.get('growth/00_Island_Core/app_state_snapshot.json');
    window.BOUNTY_STATE=null;await storage.hydrateRuntimeFromVault();
    check(window.BOUNTY_STATE.id==='real-bounty','active bounty restored from null');
    check(window.GANTT_PROJECTS.some(p=>p.id==='p1'),'user project with legacy ID preserved');
    const canvasKey=Array.from(files.keys()).find(p=>p.endsWith('.canvas'));files.set(canvasKey,'user native canvas edit');
    await storage.syncRuntimeToVault();check(files.get(canvasKey)==='user native canvas edit','native Canvas edits preserved');
    window.USER_PROFILE_STATE.nickname='first';const save1=storage.syncRuntimeToVault();window.USER_PROFILE_STATE.nickname='second';const save2=storage.syncRuntimeToVault();await Promise.all([save1,save2]);
    check(JSON.parse(files.get('growth/00_Island_Core/app_state_snapshot.json')).USER_PROFILE_STATE.nickname==='second','concurrent saves commit in order');
    window.BOUNTY_STATE=null;await storage.syncRuntimeToVault();window.BOUNTY_STATE={id:'stale'};await storage.hydrateRuntimeFromVault();check(window.BOUNTY_STATE===null,'cleared bounty remains cleared after restart');
    files.set('growth/00_Island_Core/app_state_snapshot.json','corrupt');let rejected=false;try{await storage.hydrateRuntimeFromVault();}catch{rejected=true;}await storage.syncRuntimeToVault();
    check(rejected&&files.get('growth/00_Island_Core/app_state_snapshot.json')==='corrupt','corruption blocks overwriting');
    await storage.dispose();
    dispose();check(!window.__YOUTH_ISLAND_RUNTIME_BOOTED__,'runtime globals removed on close');
    root.innerHTML=Harness.ISLAND_UI_HTML;dispose=Harness.bootPrototypeRuntime();check(!!window.__YOUTH_ISLAND_RUNTIME_BOOTED__,'runtime reopens cleanly');
    window.GANTT_PROJECTS.push({id:'screenshot',title:'几何原理推导',pavilion:'study',startDate:'2026-01-01',endDate:'2027-01-01',completedDays:[]});
    window.PROJECT_CANVAS_STORE.screenshot=window.buildStarterCanvasForProject(window.GANTT_PROJECTS[0]);window.enterTertiaryWorkspace('screenshot');
    window.syncNewNodeToHomeExecution({id:'projnode-screenshot-2',projectId:'screenshot',title:'几何原理推导 · 每日实训',pavilionId:'study'});
    window.switchMainSection('island');window.switchHomeGlobalView('exec');window.openExecCardPopupView('drill',document.getElementById('exec-sync-projnode-screenshot-2'));
    document.getElementById('island-real-reflection').value='通过辅助线完成推导，记录实际思路。';
    window.__testDispose=dispose;
    return checks;
  })()`);
  assert.ok(results.length>=18);for(const result of results)console.log('PASS:',result);
  await send('Page.captureScreenshot',{format:'png'}).then(r=>fs.writeFileSync(path.join(dir,'result.png'),Buffer.from(r.data,'base64')));
  await evaluate('window.__testDispose()');
} finally {ws?.close();chrome.kill();}
