import fs from 'node:fs';
import path from 'node:path';
import {execFileSync} from 'node:child_process';
import {createHash} from 'node:crypto';

const root=process.cwd();
const manifest=JSON.parse(fs.readFileSync('manifest.json','utf8'));
if(!/^\d+\.\d+\.\d+$/.test(manifest.version))throw new Error('Invalid release version');
const release=path.join(root,'release'),folder=path.join(release,manifest.version,manifest.id);
fs.mkdirSync(folder,{recursive:true});
for(const file of ['manifest.json','versions.json','main.js','styles.css'])fs.copyFileSync(path.join(root,file),path.join(folder,file));
for(const [kind,names] of Object.entries({scenes:['scene-plaza.png','scene-desk.png','scene-board.png'],avatars:['avatar-cat.png','avatar-female.png','avatar-male.png']})){
  fs.mkdirSync(path.join(folder,'assets',kind),{recursive:true});
  for(const name of names)fs.copyFileSync(path.join(root,'assets',kind,name),path.join(folder,'assets',kind,name));
}
const zip=path.join(release,manifest.id+'-'+manifest.version+'.zip');
// Preserve other releases. Pass paths as environment values, never shell source.
execFileSync('powershell.exe',['-NoProfile','-Command','Compress-Archive -LiteralPath $env:YOUTH_ISLAND_PACKAGE_FOLDER -DestinationPath $env:YOUTH_ISLAND_PACKAGE_ZIP -Force'],{
  windowsHide:true,stdio:'inherit',env:{...process.env,YOUTH_ISLAND_PACKAGE_FOLDER:folder,YOUTH_ISLAND_PACKAGE_ZIP:zip}
});
const hashes={version:manifest.version,files:{}};
for(const file of ['manifest.json','versions.json','main.js','styles.css']){
  const input=fs.readFileSync(path.join(root,file)),output=fs.readFileSync(path.join(folder,file));
  if(!input.equals(output))throw new Error('Package mismatch: '+file);
  hashes.files[file]=createHash('sha256').update(output).digest('hex');
}
hashes.zipSha256=createHash('sha256').update(fs.readFileSync(zip)).digest('hex');
fs.writeFileSync(path.join(release,'hashes-'+manifest.version+'.json'),JSON.stringify(hashes,null,2));
console.log('Packaged '+manifest.version+' ('+(fs.statSync(zip).size/1048576).toFixed(2)+' MB): '+zip);
