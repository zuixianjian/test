import {execFile} from 'node:child_process';
import fs from 'node:fs';
const suites=[['business','test_closed_loop_scenarios.js'],['design','test_design_scenario.js','--design'],...['canvas','navigation','node_cards','execution_queue','node_creator','phase_media','closure_audit'].flatMap(group=>[[group,`test_${group}_scenarios.mjs`],[group+'-design',`test_${group}_scenarios.mjs`,'--design']]),['mobile','test_mobile_scenarios.mjs']];
for(const item of suites)if(item[1]==='test_closure_audit_scenarios.mjs')item[1]='test_closure_audit.mjs';
const dir='scratch/browser-regression';fs.mkdirSync(dir,{recursive:true});let cursor=0,failed=false;
async function worker(){while(cursor<suites.length){const [name,file,mode]=suites[cursor++];await new Promise(resolve=>execFile(process.execPath,['scripts/audit_browser.mjs','scripts/'+file,...(mode?[mode]:[])],{windowsHide:true,timeout:180000,maxBuffer:4*1024*1024},(error,stdout,stderr)=>{fs.writeFileSync(`${dir}/${name}.log`,stdout+'\n'+stderr);if(error){failed=true;console.log('FAIL '+name+'\n'+(stderr||stdout).slice(-2200));}else console.log('PASS '+name+' '+(stdout.match(/Passed \d+ domain and integration checks/)?.[0]||''));resolve();}));}}
await Promise.all([worker(),worker()]);if(failed)process.exitCode=1;
