const bountyDialogRender=renderBountyModalAndBillboard;
let bountyDialogLastId=null,bountyDialogFocus=null;
const bountyGuardianDrafts=new Map();
function invalidateBountyVerification(id){
  const draft=bountyGuardianDrafts.get(id);if(draft)draft.confirmed=false;
  if(window.BOUNTY_STATE?.id===id){const confirmation=document.getElementById('domain-parent-confirm');if(confirmation)confirmation.checked=false;}
}
renderBountyModalAndBillboard=function(){
  const current=window.BOUNTY_STATE,id=current?.id||null,comment=document.getElementById('bounty-parent-comment-input'),confirmation=document.getElementById('domain-parent-confirm');
  if(bountyDialogLastId&&bountyDialogLastId!==id)bountyGuardianDrafts.set(bountyDialogLastId,{comment:comment?.value||'',confirmed:confirmation?.checked||false});
  bountyDialogRender();const b=window.BOUNTY_STATE,modal=document.getElementById('bounty-modal-backdrop');if(!modal)return;
  modal.querySelector('.bounty-current').hidden=!b;modal.querySelector('.bounty-delivery').hidden=!b||b.status==='published';modal.querySelector('.bounty-verification').hidden=!b||b.status==='published';
  if(b){
    document.getElementById('bounty-modal-criteria').textContent=b.criteria;
    document.getElementById('bounty-modal-contract-no').textContent='立约 '+b.createdDate+' · 到期 '+b.endDate;
    document.getElementById('bounty-stage2-desc').textContent=b.status==='published'?'揭榜后开始挑战；完成后提交真实物证。':b.status==='accepted'?'按约定完成挑战并提交照片或视频，等待共同验收。':'原始物证和验收记录已归档。';
    document.getElementById('bounty-media-controls').innerHTML=mediaPickerControls('bounty','image/*,video/*',b.status!=='accepted');
    document.getElementById('bounty-media-list').innerHTML=(b.evidence||[]).map(m=>'<button type="button" class="bounty-media-item" onclick="openDomainMedia('+escapeIslandText(JSON.stringify(m.id))+')">'+(m.type==='video'?'🎥':'📷')+' '+escapeIslandText(m.name)+'</button>').join('')||'<p class="bounty-muted">还没有提交物证</p>';
    if(bountyDialogLastId!==id){const draft=bountyGuardianDrafts.get(id);comment.value=b.parentComment||draft?.comment||'';confirmation.checked=!!draft?.confirmed;}
    comment.disabled=b.status==='redeemed';confirmation.disabled=b.status==='redeemed';
    if(b.status==='redeemed'){comment.value=b.parentComment;confirmation.checked=true;document.getElementById('bounty-action-redeem-btn').disabled=true;}
  }
  const names={published:'待揭榜',accepted:'进行中',redeemed:'已兑现'};
  document.getElementById('domain-bounty-history').innerHTML='<h3>契约记录</h3>'+getDomainState().bounties.map(item=>'<button type="button" class="bounty-history-item" aria-pressed="'+(item.id===id)+'" onclick="selectDomainBounty('+escapeIslandText(JSON.stringify(item.id))+')"><span>'+escapeIslandText(item.title)+'</span><small>'+escapeIslandText(names[item.status]||item.status)+'</small></button>').join('');
  bountyDialogLastId=id;
};
const bountyDialogOpen=openBountyModal,bountyDialogClose=closeBountyModal;
openBountyModal=function(){bountyDialogFocus=document.activeElement;bountyDialogOpen();document.querySelector('#bounty-modal-backdrop .bounty-close')?.focus();};
closeBountyModal=function(){bountyDialogClose();if(bountyDialogFocus?.isConnected)bountyDialogFocus.focus({preventScroll:true});bountyDialogFocus=null;};
function handleBountyDialogKeydown(event){
  event.stopPropagation();if(event.key==='Escape'){event.preventDefault();closeBountyModal();return;}
  if(event.key==='Tab'){const list=Array.from(document.querySelectorAll('#bounty-modal-backdrop button,#bounty-modal-backdrop input,#bounty-modal-backdrop textarea,#bounty-modal-backdrop select')).filter(e=>!e.disabled&&e.getClientRects().length),first=list[0],last=list.at(-1);if(event.shiftKey&&document.activeElement===first){event.preventDefault();last?.focus();}else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first?.focus();}}
}
