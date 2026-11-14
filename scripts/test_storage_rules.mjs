import assert from 'node:assert/strict';
import {build} from 'esbuild';
import vm from 'node:vm';

const bundle=await build({entryPoints:['src/storage/VaultStorageAdapter.ts'],bundle:true,write:false,platform:'node',format:'cjs',plugins:[{name:'obsidian-contract',setup(b){b.onResolve({filter:/^obsidian$/},()=>({path:'obsidian',namespace:'mock'}));b.onLoad({filter:/.*/,namespace:'mock'},()=>({contents:'export class Notice{} export class App{} export const normalizePath=p=>p.split(String.fromCharCode(92)).join("/");',loader:'js'}));}}]});
const win={DOMAIN_STATE:{schemaVersion:3,storageRevision:0,projects:[],nodesByProject:{},records:[]},USER_PROFILE_STATE:{settings:{}},GANTT_PROJECTS:[],PROJECT_CANVAS_STORE:{},PAVILION_META:{},TREASURY_STATE:{},ACHIEVEMENT_STATE:{},NOTE_STATE:{journalText:'',historyEntries:[]},BOUNTY_STATE:null,INQUIRY_POOL_STATE:[]};
const module={exports:{}},expectedErrors=[];vm.runInNewContext(bundle.outputFiles[0].text,{module,exports:module.exports,window:win,document:{getElementById:()=>null},console:{...console,error:(...args)=>expectedErrors.push(args[0])},Date,setTimeout,clearTimeout});
const {VaultStorageAdapter}=module.exports,files=new Map(),fault={primary:0,export:0,renames:0};
const adapter={exists:async p=>files.has(p),read:async p=>{if(!files.has(p))throw new Error('Missing '+p);return files.get(p);},write:async(p,value)=>{if(p.endsWith('/domain_state.json')&&fault.primary>0){fault.primary--;files.set(p,'{interrupted');throw new Error('interrupted write');}if(p.endsWith('/journal.json')&&fault.export>0){fault.export--;throw new Error('export failure');}files.set(p,value);},remove:async p=>files.delete(p),rename:async(a,b)=>{fault.renames++;if(files.has(b))throw new Error('Destination file already exists!');files.set(b,files.get(a));files.delete(a);}};
const app={vault:{adapter,createFolder:async p=>files.set(p,'folder')}},settings=()=>({vaultRootFolder:'growth',autoSyncVaultMarkdown:false});
let storage=new VaultStorageAdapter(app,settings);await storage.hydrateRuntimeFromVault();
for(let i=1;i<=3;i++){win.NOTE_STATE.journalText='save-'+i;await storage.syncRuntimeToVault();}
const primary='growth/00_Island_Core/domain_state.json',pending='growth/00_Island_Core/domain_state.pending.json';
assert.equal(JSON.parse(files.get(primary)).stores.NOTE_STATE.journalText,'save-3');assert.equal(fault.renames,0);
const saves=[];for(const value of ['a','b','c']){win.NOTE_STATE.journalText=value;saves.push(storage.syncRuntimeToVault());}await Promise.all(saves);assert.equal(JSON.parse(files.get(primary)).stores.NOTE_STATE.journalText,'c');
win.NOTE_STATE.journalText='recover-me';fault.primary=2;await assert.rejects(storage.syncRuntimeToVault(),/domain_state.json.*interrupted write/);assert.equal(JSON.parse(files.get(pending)).stores.NOTE_STATE.journalText,'recover-me');
await storage.dispose();storage=new VaultStorageAdapter(app,settings);await storage.hydrateRuntimeFromVault();assert.equal(win.NOTE_STATE.journalText,'recover-me');assert.ok(!files.has(pending));assert.ok([...files.keys()].some(p=>p.includes('domain_state.corrupt-')));
fault.export=1;win.NOTE_STATE.journalText='core-saved';assert.equal(await storage.syncRuntimeToVault(),true);assert.equal(JSON.parse(files.get(primary)).stores.NOTE_STATE.journalText,'core-saved');assert.match(storage.getSaveStatus().exportError,/journal.json/);assert.ok(expectedErrors.some(message=>message.includes('主档案已保存')));await storage.syncRuntimeToVault();assert.equal(storage.getSaveStatus().exportError,'');
files.set(primary,'{manual corruption');await assert.rejects(storage.hydrateRuntimeFromVault());assert.equal(await storage.syncRuntimeToVault(),false);assert.equal(files.get(primary),'{manual corruption');await storage.dispose();
console.log('PASS: strict rename contract, serialized saves, interrupted-write journal recovery, separate export warnings and corrupt-primary protection');
