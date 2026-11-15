// Separate ordinary media selection from direct camera requests. No simulated uploads.
const mediaJobs=new Set();
const mediaPromises=new Set();
let mediaClosing=false;
function handleNativeMediaFiles(input){
  if(mediaClosing)return Promise.resolve(false);
  const job=processNativeMediaFiles(input);mediaPromises.add(job);
  job.then(()=>mediaPromises.delete(job),()=>mediaPromises.delete(job));return job;
}
async function flushMediaBeforeClose(){mediaClosing=true;await Promise.allSettled(Array.from(mediaPromises));}
function mediaOwner(context){
  if(context==='execution')return evidenceSession?.taskId||'';
  if(context==='bounty')return window.BOUNTY_STATE?.id||'';
  if(context==='journal')return window.NOTE_STATE.dateKey||domainDate();
  if(context==='achievement')return window.__accidentalUploadToken||'';
  if(context==='resource')return window.currentTertiaryProjId||'';
  return context;
}
function mediaPickerControls(context,accept='image/*,video/*',disabled=false){
  const owner=mediaOwner(context),busy=mediaJobs.has(context+':'+owner),off=disabled||busy||mediaClosing;
  const input=(source,label,types,capture='')=>'<label class="island-media-source" aria-disabled="'+off+'">'+label+'<input class="island-native-media-input" type="file" accept="'+types+'" '+(capture?'capture="'+capture+'"':'multiple')+' data-media-context="'+context+'" data-media-owner="'+escapeIslandText(owner)+'" data-media-source="'+source+'" aria-label="'+label+'" onchange="handleNativeMediaFiles(this)"'+(off?' disabled':'')+'></label>';
  const audioOnly=context==='execution'&&accept==='audio/*';
  const sources=audioOnly?input('audio','🎵 选择录音','audio/*')+input('recording','🎙 录制音频','audio/*','user'):input('gallery','🖼 选择照片/视频',accept)+input('photo','📷 拍摄照片','image/*','environment')+input('video','🎥 拍摄视频','video/*','environment')+(context==='execution'?input('audio','🎙 选择录音','audio/*'):'');
  return '<div class="island-media-picker" data-picker-context="'+context+'" aria-busy="'+busy+'">'+sources+'<span class="island-media-status" role="status">'+(busy?'正在保存原件…':audioOnly?'原件保存到当前知识库；系统不支持直接录制时，可先录音再选择文件':'原件保存到当前知识库')+'</span></div>';
}
function mediaFileWithType(file){
  if(file.type)return file;
  const extension=file.name.split('.').pop().toLowerCase(),mime={jpg:'image/jpeg',jpeg:'image/jpeg',png:'image/png',webp:'image/webp',gif:'image/gif',heic:'image/heic',heif:'image/heif',mp4:'video/mp4',mov:'video/quicktime',webm:'video/webm',m4v:'video/mp4','3gp':'video/3gpp',mp3:'audio/mpeg',m4a:'audio/mp4',wav:'audio/wav',ogg:'audio/ogg',aac:'audio/aac',amr:'audio/amr',opus:'audio/ogg',flac:'audio/flac','3ga':'audio/3gpp'}[extension];
  return mime?new File([file],file.name,{type:mime,lastModified:file.lastModified}):file;
}
function refreshMediaBusy(context,owner){
  const busy=mediaJobs.has(context+':'+owner);
  document.querySelectorAll('.island-native-media-input').forEach(input=>{if(input.dataset.mediaContext===context&&input.dataset.mediaOwner===owner){input.disabled=busy||(context==='execution'&&!!evidenceSession?.saved);input.parentElement.setAttribute('aria-disabled',String(input.disabled));input.closest('.island-media-picker').setAttribute('aria-busy',String(busy));input.closest('.island-media-picker').querySelector('.island-media-status').textContent=busy?'正在保存原件…':'原件保存到当前知识库';}});
  if(context==='execution'&&evidenceSession?.taskId===owner){const button=document.getElementById('island-real-submit');if(button)button.disabled=busy||evidenceSession.saved;}
  if(context==='bounty'&&window.BOUNTY_STATE?.id===owner){const button=document.getElementById('bounty-action-redeem-btn');if(button)button.disabled=busy||window.BOUNTY_STATE.status!=='accepted';}
  if(context==='achievement'&&window.__accidentalUploadToken===owner){const button=document.querySelector('#register-accidental-achievement-modal [onclick="submitRegisterAccidentalAchievement()"]');if(button)button.disabled=busy;}
}
async function processNativeMediaFiles(input){
  const files=Array.from(input.files||[]),context=input.dataset.mediaContext,owner=input.dataset.mediaOwner,key=context+':'+owner;
  if(!files.length||mediaJobs.has(key))return false;
  const session=context==='execution'?evidenceSession:null,bounty=context==='bounty'?getDomainState().bounties.find(b=>b.id===owner):null;
  if(context==='execution'&&(!session||session.taskId!==owner||session.saved))return false;
  if(context==='bounty'&&bounty?.status!=='accepted')return false;
  if(context==='resource'&&window.currentTertiaryProjId!==owner)return false;
  if(context==='achievement'&&window.__accidentalUploadToken!==owner)return false;
  mediaJobs.add(key);refreshMediaBusy(context,owner);
  try{
    for(const original of files){
      const file=mediaFileWithType(original),accept=input.accept.split(',');
      if(!accept.some(a=>a.endsWith('/*')?file.type.startsWith(a.slice(0,-1)):file.type===a))throw new Error('请选择此入口支持的照片、视频或录音');
      const media=await persistDomainMedia(file);
      if(context==='execution'){
        const active=evidenceSession?.taskId===owner&&!evidenceSession.saved?evidenceSession:session;
        active.media.push(media);
        if(active===evidenceSession){renderDomainEvidence();saveExecutionDraft();}
        else getDomainState().drafts[owner]={...(getDomainState().drafts[owner]||{}),media:[...active.media]};
      }else if(context==='bounty'){
        bounty.evidence=[...(bounty.evidence||[]),media];bounty.evidencePath=media.path;bounty.evidenceName=media.name;bounty.evidenceUploaded=true;
        invalidateBountyVerification(owner);
        if(window.BOUNTY_STATE?.id===owner)renderBountyModalAndBillboard();
      }else if(context==='journal'){
        ensureBusinessDate();const note=window.NOTE_STATE,entry=note.dateKey===owner?null:note.historyEntries.find(e=>e.date===owner);
        if(note.dateKey===owner)note.mediaList.unshift(media);else if(entry)entry.media=[...(entry.media||[]),media];
        if(note.dateKey===owner)refreshNoteMediaGallery();
      }else if(context==='achievement'){
        if(window.__accidentalUploadToken!==owner)throw new Error('该高光记录已关闭，请重新选择附件');
        window.__accidentalDomainMedia=media;const preview=document.getElementById('achieve-acc-image-preview');if(preview){preview.textContent='已保存原件：'+media.name;preview.style.display='block';}
      }else if(context==='resource'){
        if(window.currentTertiaryProjId!==owner)throw new Error('项目已切换，请在目标项目重新选择资料');
        if(!planningWriteAllowed())throw new Error('请返回规划视图插入资料');
        createTertiaryCustomPlanningCard({nodeType:'text',title:'资料 · '+media.name.slice(0,23),content:'![['+media.path+']]'});
      }
      notifyIslandStateChanged();
    }
    return true;
  }catch(error){showIslandToast('附件保存失败：'+error.message);return false;}
  finally{input.value='';mediaJobs.delete(key);refreshMediaBusy(context,owner);}
}
function openMediaSourceDialog(context){
  document.getElementById('island-media-source-dialog')?.remove();
  const dialog=document.createElement('div');dialog.id='island-media-source-dialog';dialog.className='domain-modal';dialog.innerHTML='<div class="note-card-box"><h3>添加照片或视频</h3>'+mediaPickerControls(context)+'<button type="button" onclick="document.getElementById(\'island-media-source-dialog\').remove()">完成 / 关闭</button></div>';
  (document.querySelector('.youth-island-plugin-root')||document.body).append(dialog);
}
uploadBountyEvidence=function(){const input=document.querySelector('#bounty-media-controls [data-media-source="gallery"]');if(input&&!input.disabled)input.click();};
createImageEvidencePrompt=function(){if(planningWriteAllowed())openMediaSourceDialog('resource');};
const nativeMediaNoteRenderer=renderNoteSpecializedWorkspace;
renderNoteSpecializedWorkspace=function(){const holder=document.createElement('div');holder.innerHTML=nativeMediaNoteRenderer();const input=holder.querySelector('#note-photo-file-input');if(input)input.parentElement.innerHTML=mediaPickerControls('journal');return holder.innerHTML;};
renderNoteMediaGalleryHtml=function(){return window.NOTE_STATE.mediaList.map(m=>'<div class="note-history-card"><button class="ui-btn" onclick="openDomainMedia('+escapeIslandText(JSON.stringify(m.id))+')">'+escapeIslandText(m.name)+'</button><span>'+escapeIslandText(m.type==='image'?'照片原件':m.duration==null?'视频 / 录音原件':Math.round(m.duration)+'秒')+'</span><button class="ui-btn" onclick="removeNoteMedia('+escapeIslandText(JSON.stringify(m.id))+')">移除</button></div>').join('');};
const nativeMediaAchievementOpen=openRegisterAccidentalAchievementModal;
openRegisterAccidentalAchievementModal=function(){nativeMediaAchievementOpen();window.__accidentalUploadToken=domainId('highlight');window.__accidentalDomainMedia=null;const input=document.getElementById('accidental-image-file');if(input){const container=input.parentElement;container.innerHTML=mediaPickerControls('achievement');container.parentElement.querySelector('label').textContent='照片或视频物证';}else{const controls=document.querySelector('#register-accidental-achievement-modal .island-media-picker');if(controls)controls.outerHTML=mediaPickerControls('achievement');}};
const nativeMediaAchievementClose=closeRegisterAccidentalAchievementModal;
closeRegisterAccidentalAchievementModal=function(){window.__accidentalUploadToken=null;window.__accidentalDomainMedia=null;return nativeMediaAchievementClose();};
const mediaSubmitAchievement=submitRegisterAccidentalAchievement;
submitRegisterAccidentalAchievement=function(){if(mediaJobs.has('achievement:'+window.__accidentalUploadToken)){showIslandToast('请等待原件保存完成');return false;}return mediaSubmitAchievement();};
const mediaSubmitExecution=submitRealExecution;
submitRealExecution=function(){if(evidenceSession&&mediaJobs.has('execution:'+evidenceSession.taskId)){showIslandToast('请等待原件保存完成');return false;}return mediaSubmitExecution();};
const mediaRedeemBounty=completeBountyDemo;
completeBountyDemo=function(){if(mediaJobs.has('bounty:'+window.BOUNTY_STATE?.id)){showIslandToast('请等待原件保存完成');return false;}return mediaRedeemBounty();};
