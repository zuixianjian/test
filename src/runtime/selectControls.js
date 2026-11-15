// Keep native select values/events as the business interface; render one shared menu.
const islandSelectEntries=new WeakMap();
let islandSelectSequence=0,openIslandSelect=null;
function syncIslandSelect(entry){
  const select=entry.select,selected=Array.from(select.selectedOptions).map(option=>option.label);
  const label=select.multiple?(selected.length?selected.join('、'):'选择项目'):selected[0]||'请选择';
  if(entry.caption.textContent!==label)entry.caption.textContent=label;
  entry.button.disabled=select.matches(':disabled');entry.button.title=label;
  if(entry.button.disabled&&openIslandSelect?.entry===entry)closeIslandSelect();
  entry.wrapper.hidden=select.hidden||select.style.display==='none'||select.classList.contains('is-hidden');
}
function closeIslandSelect(restoreFocus=false){
  const open=openIslandSelect;if(!open)return;
  openIslandSelect=null;open.entry.button.setAttribute('aria-expanded','false');open.entry.button.removeAttribute('aria-activedescendant');
  open.entry.button.classList.remove('is-open','opens-up');open.menu.remove();
  if(restoreFocus&&open.entry.button.isConnected&&!open.entry.button.disabled)open.entry.button.focus({preventScroll:true});
}
function positionIslandSelect(){
  const open=openIslandSelect;if(!open)return;
  const {entry,root,menu}=open,anchor=entry.button.getBoundingClientRect(),r=root.getBoundingClientRect();
  if(!entry.select.isConnected||!entry.button.getClientRects().length){closeIslandSelect();return;}
  const sx=r.width/(root.offsetWidth||r.width||1),sy=r.height/(root.offsetHeight||r.height||1);
  const viewport=window.visualViewport,vx=viewport?.offsetLeft||0,vy=viewport?.offsetTop||0;
  const left=Math.max(vx,r.left)+8,right=Math.min(vx+(viewport?.width||innerWidth),r.right)-8,top=Math.max(vy,r.top)+8,bottom=Math.min(vy+(viewport?.height||innerHeight),r.bottom)-8;
  const width=Math.min(Math.max(anchor.width,230),Math.max(0,right-left)),below=bottom-anchor.bottom-5,above=anchor.top-top-5;
  const upward=below<Math.min(280,menu.scrollHeight*sy)&&above>below,space=Math.max(0,upward?above:below);
  const setStyle=(name,value)=>{const normalized=Math.round(parseFloat(value)*1000)/1000+'px';if(menu.style[name]!==normalized)menu.style[name]=normalized;};
  setStyle('width',width/sx+'px');setStyle('maxHeight',Math.min(360,space/sy)+'px');
  const height=menu.getBoundingClientRect().height,x=Math.max(left,Math.min(anchor.left,right-width)),y=upward?anchor.top-height-5:anchor.bottom+5;
  setStyle('left',(x-r.left)/sx+'px');setStyle('top',(Math.max(top,Math.min(y,bottom-height))-r.top)/sy+'px');
  if(entry.button.classList.contains('opens-up')!==upward)entry.button.classList.toggle('opens-up',upward);menu.dataset.direction=upward?'up':'down';
}
function highlightIslandSelect(index){
  const open=openIslandSelect;if(!open)return;
  const choices=open.choices.filter(choice=>!choice.disabled);if(!choices.length)return;
  const clamped=Math.max(0,Math.min(index,choices.length-1));open.active=clamped;
  for(const choice of open.choices)choice.classList.toggle('is-highlighted',choice===choices[clamped]);
  open.entry.button.setAttribute('aria-activedescendant',choices[clamped].id);
  choices[clamped].scrollIntoView({block:'nearest',inline:'nearest'});
}
function commitIslandSelect(indices){
  const open=openIslandSelect;if(!open)return;
  const select=open.entry.select,entry=open.entry,before=Array.from(select.options).map(option=>option.selected).join(',');
  closeIslandSelect(true);
  Array.from(select.options).forEach((option,index)=>option.selected=indices.has(index));
  syncIslandSelect(entry);
  if(before!==Array.from(select.options).map(option=>option.selected).join(',')){
    select.dispatchEvent(new Event('input',{bubbles:true}));select.dispatchEvent(new Event('change',{bubbles:true}));
  }
}
function chooseIslandSelect(index){
  const open=openIslandSelect;if(!open)return;
  if(!open.entry.select.multiple){commitIslandSelect(new Set([index]));return;}
  if(open.draft.has(index))open.draft.delete(index);else open.draft.add(index);
  for(const choice of open.choices){const selected=open.draft.has(Number(choice.dataset.optionIndex));choice.setAttribute('aria-selected',String(selected));choice.querySelector('.island-select-check').textContent=selected?'✓':'';}
  open.count.textContent='已选 '+open.draft.size+' 项';
}
function handleIslandSelectKey(event,entry){
  if(event.isComposing||entry.button.disabled)return;
  const open=openIslandSelect?.entry===entry?openIslandSelect:null;
  if(!open&&['ArrowDown','ArrowUp','Enter',' '].includes(event.key)){event.preventDefault();event.stopPropagation();openIslandSelectMenu(entry);return;}
  if(!open)return;
  if(event.key==='Escape'){event.preventDefault();event.stopPropagation();closeIslandSelect(true);return;}
  if(event.key==='Tab'){closeIslandSelect(true);return;}
  const choices=open.choices.filter(choice=>!choice.disabled);
  if(['ArrowDown','ArrowUp','Home','End'].includes(event.key)){
    event.preventDefault();event.stopPropagation();highlightIslandSelect(event.key==='Home'?0:event.key==='End'?choices.length-1:open.active+(event.key==='ArrowDown'?1:-1));
  }else if(['Enter',' '].includes(event.key)){
    event.preventDefault();event.stopPropagation();const choice=choices[open.active];if(choice)chooseIslandSelect(Number(choice.dataset.optionIndex));
  }else if(event.key.length===1){
    const now=Date.now();open.search=now-open.typedAt<700?open.search+event.key:event.key;open.typedAt=now;
    const index=choices.findIndex(choice=>choice.textContent.trim().toLocaleLowerCase().startsWith(open.search.toLocaleLowerCase()));if(index>=0)highlightIslandSelect(index);
  }
}
function openIslandSelectMenu(entry){
  if(entry.button.disabled)return;
  if(openIslandSelect?.entry===entry){closeIslandSelect(true);return;}
  closeIslandSelect();syncIslandSelect(entry);
  const root=entry.select.closest('.youth-island-plugin-root')||document.querySelector('.youth-island-plugin-root')||document.body,menu=document.createElement('div'),list=document.createElement('div');
  menu.className='island-select-popup';menu.id='island-select-popup';list.className='island-select-options';list.setAttribute('role','listbox');list.id=menu.id+'-list';list.setAttribute('aria-label',entry.button.getAttribute('aria-label'));list.setAttribute('aria-multiselectable',String(entry.select.multiple));menu.append(list);root.append(menu);
  const open={entry,root,menu,list,choices:[],draft:new Set(),active:0,search:'',typedAt:0,count:null};openIslandSelect=open;
  let group=null;
  Array.from(entry.select.options).forEach((option,index)=>{
    if(option.hidden)return;
    const parent=option.parentElement,isGroup=parent.tagName==='OPTGROUP';
    if(isGroup&&group!==parent){group=parent;const heading=document.createElement('div');heading.className='island-select-group';heading.textContent=parent.label;list.append(heading);}
    const choice=document.createElement('button'),text=document.createElement('span'),mark=document.createElement('span');choice.type='button';choice.className='island-select-option';choice.id=menu.id+'-option-'+index;choice.dataset.optionIndex=index;choice.tabIndex=-1;choice.setAttribute('role','option');choice.disabled=option.disabled||isGroup&&parent.disabled;choice.setAttribute('aria-selected',String(option.selected));
    text.className='island-select-option-label';text.textContent=option.label;mark.className='island-select-check';mark.setAttribute('aria-hidden','true');mark.textContent=option.selected?'✓':'';choice.append(text,mark);choice.onclick=()=>chooseIslandSelect(index);list.append(choice);open.choices.push(choice);if(option.selected)open.draft.add(index);
  });
  if(!open.choices.length){const empty=document.createElement('p');empty.className='island-select-empty';empty.textContent='暂无可选项目';list.append(empty);}
  if(entry.select.multiple){
    const footer=document.createElement('div'),count=document.createElement('span'),actions=document.createElement('div');footer.className='island-select-footer';count.textContent='已选 '+open.draft.size+' 项';open.count=count;
    for(const [label,action]of [['取消',()=>closeIslandSelect(true)],['应用',()=>commitIslandSelect(open.draft)]]){const button=document.createElement('button');button.type='button';button.textContent=label;button.className='island-select-footer-button';button.onclick=action;actions.append(button);}footer.append(count,actions);menu.append(footer);
  }
  menu.addEventListener('keydown',event=>handleIslandSelectKey(event,entry));menu.addEventListener('pointerdown',event=>event.stopPropagation());menu.addEventListener('click',event=>event.stopPropagation());
  entry.button.setAttribute('aria-expanded','true');entry.button.setAttribute('aria-controls',list.id);entry.button.classList.add('is-open');
  positionIslandSelect();const enabled=open.choices.filter(choice=>!choice.disabled),selected=enabled.findIndex(choice=>choice.getAttribute('aria-selected')==='true');highlightIslandSelect(Math.max(0,selected));
}
function enhanceIslandSelect(select){
  let entry=islandSelectEntries.get(select);if(entry){syncIslandSelect(entry);return;}
  const stale=select.parentElement;if(stale?.classList.contains('island-select-control')){stale.before(select);stale.remove();}
  const wrapper=document.createElement('span'),button=document.createElement('button'),caption=document.createElement('span'),arrow=document.createElement('span');
  const label=select.getAttribute('aria-label')||Array.from(select.labels||[]).map(label=>Array.from(label.childNodes).filter(node=>node.nodeType===Node.TEXT_NODE||node.nodeType===Node.ELEMENT_NODE&&node.tagName==='SPAN').map(node=>node.textContent).join(' ').trim()).join(' ')||select.title||'选择项目';
  wrapper.className='island-select-control';wrapper.dataset.selectId=select.id||'select-'+(++islandSelectSequence);if(select.style.width)wrapper.style.width=select.style.width;
  button.type='button';button.className='island-select-trigger';button.setAttribute('role','combobox');button.setAttribute('aria-label',label);button.setAttribute('aria-haspopup','listbox');button.setAttribute('aria-expanded','false');
  caption.className='island-select-caption';arrow.className='island-select-chevron';arrow.setAttribute('aria-hidden','true');button.append(caption,arrow);
  select.before(wrapper);wrapper.append(select,button);select.classList.add('island-select-native');select.setAttribute('aria-hidden','true');select.tabIndex=-1;
  entry={select,wrapper,button,caption};islandSelectEntries.set(select,entry);button.onclick=()=>openIslandSelectMenu(entry);button.onkeydown=event=>handleIslandSelectKey(event,entry);select.addEventListener('change',()=>syncIslandSelect(entry));
  for(const property of ['value','selectedIndex']){
    const descriptor=Object.getOwnPropertyDescriptor(window.HTMLSelectElement.prototype,property);
    if(descriptor?.get&&descriptor?.set)try{Object.defineProperty(select,property,{configurable:true,get(){return descriptor.get.call(this);},set(value){descriptor.set.call(this,value);if(openIslandSelect?.entry===entry)closeIslandSelect();syncIslandSelect(entry);}});}catch{}
  }
  select.focus=options=>button.focus(options);syncIslandSelect(entry);
}
function enhanceIslandSelects(scope=document.querySelector('.youth-island-plugin-root')||document.body){
  if(scope.matches?.('select'))enhanceIslandSelect(scope);scope.querySelectorAll?.('select').forEach(enhanceIslandSelect);
}
function installIslandSelects(){
  const root=document.querySelector('.youth-island-plugin-root')||document.body;enhanceIslandSelects(root);
  const observer=new window.MutationObserver(records=>{
    let reposition=false;
    for(const record of records){
      if(openIslandSelect?.menu.contains(record.target))continue;
      if(record.type==='childList'){
        for(const node of record.addedNodes)if(node.nodeType===Node.ELEMENT_NODE&&(node.matches('select')||node.querySelector('select')))enhanceIslandSelects(node);
        if(record.target.matches?.('select,optgroup')){const select=record.target.closest('select'),entry=islandSelectEntries.get(select);if(entry)syncIslandSelect(entry);}
      }else if(record.target.matches?.('select,option,optgroup')){const select=record.target.closest('select'),entry=islandSelectEntries.get(select);if(entry)syncIslandSelect(entry);}
      else if(record.target.matches?.('fieldset'))enhanceIslandSelects(record.target);
      if(openIslandSelect){
        const select=openIslandSelect.entry.select;
        if(record.target.closest?.('select')===select&&(record.type==='childList'||record.attributeName==='disabled'))closeIslandSelect();
        else if(record.target===select||record.target.contains?.(select))reposition=true;
      }
    }
    if(openIslandSelect&&(!openIslandSelect.entry.select.isConnected||reposition))positionIslandSelect();
  });
  observer.observe(root,{childList:true,subtree:true,attributes:true,attributeFilter:['disabled','selected','multiple','hidden','class','style']});
  window.addEventListener('pointerdown',event=>{const open=openIslandSelect;if(open&&!open.menu.contains(event.target)&&!open.entry.wrapper.contains(event.target))closeIslandSelect();},true);
  window.addEventListener('wheel',event=>{if(openIslandSelect&&!openIslandSelect.menu.contains(event.target))closeIslandSelect();},{capture:true,passive:true});
  window.addEventListener('resize',positionIslandSelect);window.addEventListener('scroll',event=>{if(openIslandSelect&&!openIslandSelect.menu.contains(event.target))positionIslandSelect();},{capture:true,passive:true});
}
installIslandSelects();
