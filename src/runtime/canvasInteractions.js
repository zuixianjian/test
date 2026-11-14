// One gesture/viewport implementation for the planning sandbox and project canvas.
function canvasLocalPoint(stage,clientX,clientY){const r=stage.getBoundingClientRect();return {x:(clientX-r.left)*stage.clientWidth/(r.width||1),y:(clientY-r.top)*stage.clientHeight/(r.height||1)};}
function readPlanViewport(){return {x:islandPanX,y:islandPanY,zoom:islandZoom};}
function writePlanViewport(v){islandPanX=v.x;islandPanY=v.y;islandZoom=v.zoom;applyIslandTransform();}
function readMindmapViewport(){return {x:window.tertiaryPanX||0,y:window.tertiaryPanY||0,zoom:window.tertiaryZoom||1};}
let restoringCanvasViewport=false,canvasViewportSaveTimer=null;
function canvasViewportStore(){const state=getDomainState();state.viewports=state.viewports||{};state.viewports.projects=state.viewports.projects||{};return state.viewports;}
function rememberCanvasViewport(kind,viewport){
  if(restoringCanvasViewport||!canvasValidViewport(viewport))return;
  const store=canvasViewportStore(),id=window.currentTertiaryProjId;
  if(kind==='project'&&!id)return;
  const before=kind==='planning'?store.planning:store.projects[id];
  if(before&&['x','y','zoom'].every(key=>before[key]===viewport[key]))return;
  if(kind==='planning')store.planning={...viewport};else store.projects[id]={...viewport};
  clearTimeout(canvasViewportSaveTimer);canvasViewportSaveTimer=setTimeout(notifyIslandStateChanged,180);
}
const canvasApplyIsland=applyIslandTransform,canvasApplyMindmap=applyTertiaryTransform;
applyIslandTransform=function(){canvasApplyIsland();if(currentGlobalView==='plan')rememberCanvasViewport('planning',readPlanViewport());};
applyTertiaryTransform=function(){canvasApplyMindmap();rememberCanvasViewport('project',readMindmapViewport());positionCanvasEdgeLabels();positionCanvasEdgePopover();};
const canvasSwitchHome=switchHomeGlobalView;
switchHomeGlobalView=function(view){
  const saved=canvasViewportStore().planning,stage=document.getElementById('island-canvas-stage');stage?._cancelCanvasWheel?.();
  restoringCanvasViewport=true;try{canvasSwitchHome(view);if(currentGlobalView==='plan'&&canvasValidViewport(saved))writePlanViewport(saved);}finally{restoringCanvasViewport=false;}
  if(stage)stage.dataset.canvasMode=currentGlobalView;
};
const canvasRenderBounty=renderBountyModalAndBillboard;
renderBountyModalAndBillboard=function(){canvasRenderBounty();const billboard=document.getElementById('home-bounty-billboard');if(billboard)billboard.hidden=!window.BOUNTY_STATE;};
function writeMindmapViewport(v){window.tertiaryPanX=v.x;window.tertiaryPanY=v.y;window.tertiaryZoom=v.zoom;applyTertiaryTransform();positionCanvasEdgePopover();}
function zoomCanvasViewport(stage,read,write,factor){if(stage){stage._cancelCanvasWheel?.();write(canvasZoomAt(read(),factor,{x:stage.clientWidth/2,y:stage.clientHeight/2}));}}
zoomIslandCanvas=function(factor){zoomCanvasViewport(document.getElementById('island-canvas-stage'),readPlanViewport,writePlanViewport,factor);};
zoomTertiaryCanvas=function(factor){zoomCanvasViewport(document.getElementById('tertiary-canvas-stage'),readMindmapViewport,writeMindmapViewport,factor);};
function canvasNodeRect(node){return {id:node.id,x:node.style.left.endsWith('px')?parseFloat(node.style.left):node.offsetLeft,y:node.style.top.endsWith('px')?parseFloat(node.style.top):node.offsetTop,width:node.offsetWidth||340,height:node.offsetHeight||640};}
fitHomeCanvasView=function(){const stage=document.getElementById('island-canvas-stage');if(stage)writePlanViewport(canvasFit(Array.from(document.querySelectorAll('#island-pavilion-grid .pavilion-node'),canvasNodeRect),stage.clientWidth,stage.clientHeight));};
fitCanvasView=function(){const stage=document.getElementById('tertiary-canvas-stage');if(stage)writeMindmapViewport(canvasFit(Array.from(document.querySelectorAll('#tertiary-canvas-world .tertiary-card'),canvasNodeRect),stage.clientWidth,stage.clientHeight));};

function bindCanvasViewport(config){
  const stage=config.stage;if(!stage||stage.dataset.sharedCanvasBound)return;stage.dataset.sharedCanvasBound='true';
  const pointers=new Map();let gesture=null,drag=null,suppressClick=false;
  let wheelUnits=0,wheelFrame=null,wheelPivot=null;
  stage._cancelCanvasWheel=()=>{if(wheelFrame!==null)cancelAnimationFrame(wheelFrame);wheelFrame=null;wheelUnits=0;};
  const interactive=target=>target.closest('button,input,textarea,select,a,[contenteditable=true],.work-card-connect-handle,[data-edge-id],#tertiary-edge-popover,.a-my-island-work-navigation-dock,.a-my-island-work-minimap,.hud-profile-container,.a-my-island-plugin-launcher,.a-my-island-graph-toolbar,.parent-bounty-billboard,.a-my-island-island-settings-panel');
  const finishDrag=()=>{if(!drag)return;drag.node.classList.remove(config.dragClass);if(drag.moved){config.finish?.();suppressClick=true;setTimeout(()=>{suppressClick=false;window._islandNodeDragMoved=false;},220);}drag=null;};
  stage.addEventListener('click',event=>{if(suppressClick){event.preventDefault();event.stopImmediatePropagation();}},true);
  stage.addEventListener('wheel',event=>{
    if(!config.active())return;
    if(event.target.closest('#tertiary-edge-popover,.a-my-island-work-navigation-dock'))return;
    if(!event.ctrlKey&&event.target.closest('input,textarea,select,.domain-planning-body'))return;
    event.preventDefault();event.stopPropagation();
    if(event.ctrlKey||(!event.shiftKey&&Math.abs(event.deltaX)<2)){
      wheelUnits=Math.max(-2,Math.min(2,wheelUnits+canvasWheelUnits(event.deltaY,event.deltaMode,stage.clientHeight)));
      wheelPivot=canvasLocalPoint(stage,event.clientX,event.clientY);
      if(wheelFrame===null)wheelFrame=requestAnimationFrame(()=>{const units=wheelUnits;wheelFrame=null;wheelUnits=0;if(config.active())config.write(canvasZoomAt(config.read(),canvasWheelFactor(units),wheelPivot));});
    }else{stage._cancelCanvasWheel();const before=config.read(),unit=event.deltaMode===1?16:event.deltaMode===2?stage.clientHeight:1;config.write({...before,x:before.x-(event.shiftKey&&!event.deltaX?event.deltaY:event.deltaX)*unit,y:before.y-(event.shiftKey?0:event.deltaY)*unit});}
  },{passive:false});
  stage.addEventListener('pointerdown',event=>{
    if(!config.active()||event.button>0||interactive(event.target))return;
    stage._cancelCanvasWheel();
    const point=canvasLocalPoint(stage,event.clientX,event.clientY);pointers.set(event.pointerId,point);
    if(pointers.size===2){finishDrag();const [a,b]=[...pointers.values()];gesture={kind:'pinch',start:config.read(),middle:{x:(a.x+b.x)/2,y:(a.y+b.y)/2},distance:Math.hypot(a.x-b.x,a.y-b.y)};return;}
    if(pointers.size!==1)return;
    const node=event.target.closest(config.nodes);config.select?.(node);
    if(node&&config.canDrag()){
      drag={node,start:point,x:node.offsetLeft,y:node.offsetTop,moved:false,followers:config.followers?.(node)||[]};node.classList.add(config.dragClass);gesture={kind:'node'};
    }else if(node){gesture={kind:'tap'};return;}
    else{gesture={kind:'pan',start:config.read(),point};stage.classList.add('is-dragging-canvas');}
    if(gesture?.kind==='pan')try{stage.setPointerCapture(event.pointerId);}catch{}
  });
  const move=event=>{
    if(!pointers.has(event.pointerId))return;const point=canvasLocalPoint(stage,event.clientX,event.clientY);pointers.set(event.pointerId,point);
    if(gesture?.kind==='pinch'&&pointers.size>=2){
      const [a,b]=[...pointers.values()],middle={x:(a.x+b.x)/2,y:(a.y+b.y)/2},distance=Math.hypot(a.x-b.x,a.y-b.y);
      const next=canvasZoomAt(gesture.start,distance/(gesture.distance||1),gesture.middle);next.x+=middle.x-gesture.middle.x;next.y+=middle.y-gesture.middle.y;config.write(next);return;
    }
    if(drag){const zoom=config.read().zoom,dx=(point.x-drag.start.x)/zoom,dy=(point.y-drag.start.y)/zoom;
      if(!drag.moved&&Math.hypot(dx,dy)>3){config.start?.();drag.moved=true;window._islandNodeDragMoved=true;try{stage.setPointerCapture(event.pointerId);}catch{}}
      if(!drag.moved)return;drag.node.style.left=drag.x+dx+'px';drag.node.style.top=drag.y+dy+'px';
      for(const follower of drag.followers){follower.node.style.left=follower.x+dx+'px';follower.node.style.top=follower.y+dy+'px';}config.move?.();return;
    }
    if(gesture?.kind==='pan'){const before=gesture.start;config.write({...before,x:before.x+point.x-gesture.point.x,y:before.y+point.y-gesture.point.y});}
  };
  const up=event=>{
    if(!pointers.has(event.pointerId))return;pointers.delete(event.pointerId);finishDrag();
    if(pointers.size===1){const point=[...pointers.values()][0];gesture={kind:'pan',start:config.read(),point};}
    else if(!pointers.size){gesture=null;stage.classList.remove('is-dragging-canvas');}
    try{stage.releasePointerCapture(event.pointerId);}catch{}
  };
  window.addEventListener('pointermove',move);window.addEventListener('pointerup',up);window.addEventListener('pointercancel',up);
  window.addEventListener('blur',()=>{stage._cancelCanvasWheel();pointers.clear();gesture=null;finishDrag();stage.classList.remove('is-dragging-canvas');});
}
initCanvasPanZoomAndDrag=function(){
  const stage=document.getElementById('island-canvas-stage');
  bindCanvasViewport({stage,read:readPlanViewport,write:writePlanViewport,active:()=>currentGlobalView==='plan'&&stage.getBoundingClientRect().width>0,nodes:'.pavilion-node',canDrag:()=>!window.isBrowseMode,dragClass:'is-node-dragging',move:()=>updateIslandMinimap(),finish:()=>{captureDomainLayout();updateIslandMinimap();notifyIslandStateChanged();}});
  bindPavilionNodesClickGuards();
};
getDownstreamChildCardIds=function(rootId){const seen=new Set([rootId]),queue=[rootId],result=[];while(queue.length){const source=queue.shift();for(const edge of window.TERTIARY_EDGES||[])if(edge.sourceId===source&&['包含','派生'].includes(edge.type)&&!seen.has(edge.targetId)){seen.add(edge.targetId);queue.push(edge.targetId);result.push(edge.targetId);}}return result;};
initTertiaryCanvasPanZoom=function(){
  const stage=document.getElementById('tertiary-canvas-stage');applyTertiaryTransform();
  bindCanvasViewport({stage,read:readMindmapViewport,write:writeMindmapViewport,active:()=>stage.getBoundingClientRect().width>0,nodes:'.tertiary-card',canDrag:()=>true,dragClass:'is-card-dragging',start:recordDomainHistory,
    select:node=>{document.querySelectorAll('#tertiary-canvas-world .tertiary-card.is-selected').forEach(c=>c.classList.remove('is-selected'));node?.classList.add('is-selected');},
    followers:node=>childrenFollowEnabled?getDownstreamChildCardIds(node.id).map(id=>document.getElementById(id)).filter(Boolean).map(child=>({node:child,x:child.offsetLeft,y:child.offsetTop})):[],
    move:scheduleTertiaryEdgeRefresh,finish:()=>{saveCurrentProjectCanvasSnapshot();updateTertiaryEdgesFast();notifyIslandStateChanged();}});
};

let canvasEdgeLayouts=new Map();
function positionCanvasEdgeLabels(){
  const stage=document.getElementById('tertiary-canvas-stage'),layer=document.getElementById('tertiary-edge-labels-layer');if(!stage||!layer)return;
  if(layer.parentElement!==stage)stage.appendChild(layer);
  const v=readMindmapViewport(),items=[];for(const label of layer.children){const point=canvasEdgeLayouts.get(label.dataset.edgeId)?.label;if(!point)continue;
    const x=v.x+point.x*v.zoom,y=v.y+point.y*v.zoom;label.style.left=x+'px';label.style.top=y+'px';label.style.fontSize=Math.max(10,Math.min(15,12*v.zoom))+'px';label.hidden=x< -120||y< -120||x>stage.clientWidth+120||y>stage.clientHeight+120;
    if(!label.hidden)items.push({id:label.dataset.edgeId,label,x,y,anchorX:x,anchorY:y,width:label.offsetWidth,height:label.offsetHeight});
  }
  let guides=document.getElementById('canvas-edge-label-guides');if(!guides){guides=document.createElementNS('http://www.w3.org/2000/svg','svg');guides.id='canvas-edge-label-guides';guides.setAttribute('aria-hidden','true');stage.appendChild(guides);}guides.setAttribute('width',stage.clientWidth);guides.setAttribute('height',stage.clientHeight);guides.replaceChildren();
  for(const item of canvasLabelPositions(items,stage.clientWidth,stage.clientHeight)){item.label.style.left=item.x+'px';item.label.style.top=item.y+'px';if(Math.hypot(item.x-item.anchorX,item.y-item.anchorY)>3){const guide=document.createElementNS('http://www.w3.org/2000/svg','line');for(const [key,value]of Object.entries({x1:item.anchorX,y1:item.anchorY,x2:item.x,y2:item.y,stroke:'#7d9387','stroke-width':1,'stroke-dasharray':'3 3'}))guide.setAttribute(key,String(value));guides.appendChild(guide);}}
}
function bindCanvasEdgeActivation(element,id){
  let press=null,lastTouch=0;
  element.addEventListener('pointerdown',event=>{if(event.pointerType==='touch'){press={id:event.pointerId,x:event.clientX,y:event.clientY};event.stopPropagation();}});
  element.addEventListener('pointercancel',()=>{press=null;});
  element.addEventListener('pointerup',event=>{if(event.pointerType!=='touch'||press?.id!==event.pointerId)return;const tap=Math.hypot(event.clientX-press.x,event.clientY-press.y)<8;press=null;if(tap){lastTouch=Date.now();event.preventDefault();event.stopPropagation();openEdgePopover(id,event);}});
  element.onclick=event=>{event.stopPropagation();if(Date.now()-lastTouch<500)return;openEdgePopover(id,event);};
}
function layoutCanvasEdges(){
  const cards=Array.from(document.querySelectorAll('#tertiary-canvas-world .tertiary-card'),canvasNodeRect),byId=new Map(cards.map(r=>[r.id,r]));
  const edges=window.TERTIARY_EDGES||[],layouts=new Map();
  for(const edge of edges){const source=byId.get(edge.sourceId),target=byId.get(edge.targetId);if(!source||!target||edge.sourceId===edge.targetId)continue;
    Object.assign(edge,canvasEdgeStyle(edge));edge.sourceLabel=getDomainNode(edge.sourceId)?.title||edge.sourceLabel||edge.sourceId;edge.targetLabel=getDomainNode(edge.targetId)?.title||edge.targetLabel||edge.targetId;
    const incident=id=>edges.filter(e=>e.sourceId===id||e.targetId===id).sort((a,b)=>String(a.id).localeCompare(String(b.id))),from=incident(edge.sourceId),to=incident(edge.targetId);
    layouts.set(edge.id,canvasRouteEdge(source,target,cards,Math.max(0,from.indexOf(edge)),from.length,Math.max(0,to.indexOf(edge)),to.length));
  }canvasEdgeLayouts=layouts;return layouts;
}
function resizeCanvasEdgeSurface(layouts){
  const svg=document.getElementById('tertiary-svg-lines');if(!svg)return;
  const points=Array.from(layouts.values()).flatMap(layout=>layout.points),cards=Array.from(document.querySelectorAll('#tertiary-canvas-world .tertiary-card'),canvasNodeRect);
  for(const card of cards)points.push({x:card.x,y:card.y},{x:card.x+card.width,y:card.y+card.height});
  const left=Math.min(0,...points.map(p=>p.x))-64,top=Math.min(0,...points.map(p=>p.y))-64,width=Math.max(1,...points.map(p=>p.x))-left+64,height=Math.max(1,...points.map(p=>p.y))-top+64;
  svg.setAttribute('viewBox',[left,top,width,height].join(' '));svg.setAttribute('width',width);svg.setAttribute('height',height);svg.style.left=left+'px';svg.style.top=top+'px';svg.style.setProperty('width',width+'px','important');svg.style.setProperty('height',height+'px','important');
}
renderTertiaryEdges=function(){
  const lines=document.getElementById('tertiary-lines-group'),labels=document.getElementById('tertiary-edge-labels-layer'),defs=document.getElementById('tertiary-svg-defs');if(!lines||!labels||!defs)return;
  const layouts=layoutCanvasEdges();resizeCanvasEdgeSurface(layouts);lines.replaceChildren();labels.replaceChildren();defs.replaceChildren();
  const svg=(tag,attributes)=>{const el=document.createElementNS('http://www.w3.org/2000/svg',tag);for(const [name,value]of Object.entries(attributes))el.setAttribute(name,String(value));return el;};
  for(const [i,edge]of (window.TERTIARY_EDGES||[]).entries()){
    const layout=layouts.get(edge.id);if(!layout)continue;const markerId='canvas-arrow-'+i;
    const marker=svg('marker',{id:markerId,viewBox:'0 0 10 10',refX:9,refY:5,markerWidth:7,markerHeight:7,orient:'auto-start-reverse'});marker.appendChild(svg('path',{d:'M 0 0 L 10 5 L 0 10 z',fill:edge.color}));defs.appendChild(marker);
    const hit=svg('path',{id:'svg-hit-'+edge.id,d:layout.d,stroke:'transparent','stroke-width':20,fill:'none','pointer-events':'stroke','vector-effect':'non-scaling-stroke','data-edge-id':edge.id});
    const line=svg('path',{id:'svg-line-'+edge.id,d:layout.d,stroke:edge.color,'stroke-width':edge.lineWidth,fill:'none','stroke-linejoin':'round','stroke-dasharray':edge.lineStyle==='dashed'?'7 5':'none','pointer-events':'stroke','vector-effect':'non-scaling-stroke','data-edge-id':edge.id});
    if(edge.arrowMode!=='none')line.setAttribute('marker-end','url(#'+markerId+')');if(edge.arrowMode==='double')line.setAttribute('marker-start','url(#'+markerId+')');
    for(const path of [hit,line]){bindCanvasEdgeActivation(path,edge.id);lines.appendChild(path);}
    const label=document.createElement('button');label.type='button';label.id='edge-label-'+edge.id;label.className='a-my-island-work-edge-label';label.dataset.edgeId=edge.id;label.textContent=(layout.blocked?'⚠ 节点重叠 · ':'')+(edge.label||(['none',undefined].includes(edge.type)?'路线设置':edge.type));label.classList.toggle('is-route-blocked',!!layout.blocked);
    label.style.left=layout.label.x+'px';label.style.top=layout.label.y+'px';label.title=label.textContent+' · '+edge.sourceLabel+' → '+edge.targetLabel+'；点击设置路线';bindCanvasEdgeActivation(label,edge.id);labels.appendChild(label);
  }
  positionCanvasEdgeLabels();observeTertiaryCards();updateTertiaryMinimap();positionCanvasEdgePopover();
};
updateTertiaryEdgesFast=function(){
  const layouts=layoutCanvasEdges();resizeCanvasEdgeSurface(layouts);for(const [id,layout]of layouts){const line=document.getElementById('svg-line-'+id),hit=document.getElementById('svg-hit-'+id),label=document.getElementById('edge-label-'+id);if(!line||!!layout.blocked!==label?.classList.contains('is-route-blocked')){renderTertiaryEdges();return;}line.setAttribute('d',layout.d);hit?.setAttribute('d',layout.d);if(label){label.style.left=layout.label.x+'px';label.style.top=layout.label.y+'px';}}
  positionCanvasEdgeLabels();updateTertiaryMinimap();positionCanvasEdgePopover();
};
function positionCanvasEdgePopover(point){
  const popover=document.getElementById('tertiary-edge-popover'),stage=document.getElementById('tertiary-canvas-stage');if(!popover||!stage||popover.classList.contains('is-hidden'))return;
  if(popover.parentElement!==stage)stage.appendChild(popover);
  const label=document.getElementById('edge-label-'+currentActiveEdgeId),r=label?.getBoundingClientRect(),pivot=point||(r?canvasLocalPoint(stage,r.left+r.width/2,r.bottom):{x:stage.clientWidth/2,y:stage.clientHeight/2});
  popover.style.left=Math.max(8,Math.min(stage.clientWidth-popover.offsetWidth-8,pivot.x+12))+'px';popover.style.top=Math.max(8,Math.min(stage.clientHeight-popover.offsetHeight-8,pivot.y+14))+'px';
}
const canvasLegacyOpenEdge=openEdgePopover;
let canvasEdgeDirectionAnchor=null;
openEdgePopover=function(id,event){event?.stopPropagation();const edge=window.TERTIARY_EDGES?.find(e=>e.id===id);if(!edge)return false;Object.assign(edge,canvasEdgeStyle(edge));edge.sourceLabel=getDomainNode(edge.sourceId)?.title||'起点';edge.targetLabel=getDomainNode(edge.targetId)?.title||'终点';
  if(!canvasEdgeDirectionAnchor||canvasEdgeDirectionAnchor.id!==id||canvasEdgeDirectionAnchor.projectId!==window.currentTertiaryProjId||![edge.sourceId,edge.targetId].includes(canvasEdgeDirectionAnchor.a))canvasEdgeDirectionAnchor={id,projectId:window.currentTertiaryProjId,a:edge.sourceId,b:edge.targetId};
  canvasLegacyOpenEdge(id,event);const anchor=canvasEdgeDirectionAnchor,a=getDomainNode(anchor.a)?.title||anchor.a,b=getDomainNode(anchor.b)?.title||anchor.b;
  for(const [buttonId,sourceId,text]of [['btn-edge-hier-forward',anchor.a,a+' → '+b],['btn-edge-hier-backward',anchor.b,b+' → '+a]]){const button=document.getElementById(buttonId);if(button){button.textContent=text;button.classList.toggle('is-active',edge.sourceId===sourceId);button.setAttribute('aria-pressed',String(edge.sourceId===sourceId));}}
  positionCanvasEdgePopover(event?canvasLocalPoint(document.getElementById('tertiary-canvas-stage'),event.clientX,event.clientY):null);return true;};
function changeCanvasEdge(patch,remove=false){
  const edges=window.TERTIARY_EDGES||[],edge=edges.find(e=>e.id===currentActiveEdgeId);if(!edge)return false;
  if(!remove&&Object.entries(patch).every(([key,value])=>edge[key]===value))return true;
  const candidate={...edge,...patch};if(!remove&&['sourceId','targetId'].some(key=>key in patch)&&edges.some(e=>e.id!==edge.id&&e.sourceId===candidate.sourceId&&e.targetId===candidate.targetId)){showIslandToast('已存在相同方向的路线，请编辑已有路线');return false;}
  if(!remove&&!['type','sourceId','targetId'].some(key=>Object.prototype.hasOwnProperty.call(patch,key))){recordDomainHistory();Object.assign(edge,patch);saveCurrentProjectCanvasSnapshot();renderTertiaryEdges();notifyIslandStateChanged();return true;}
  const next=remove?edges.filter(e=>e.id!==edge.id):edges.map(e=>e.id===edge.id?{...e,...patch}:e),nodes=getDomainState().nodesByProject[window.currentTertiaryProjId]||[],dependency=e=>['前置','依赖','阻塞'].includes(e.type);
  const hierarchy=new Map(nodes.map(n=>[n.id,next.filter(e=>e.sourceId===n.id&&['包含','派生'].includes(e.type)).map(e=>e.targetId)]));
  const visits=new Set(),finished=new Set(),hierarchyCycle=id=>{if(visits.has(id))return true;if(finished.has(id))return false;visits.add(id);if((hierarchy.get(id)||[]).some(hierarchyCycle))return true;visits.delete(id);finished.add(id);return false;};
  if(!remove&&nodes.some(n=>hierarchyCycle(n.id))){showIslandToast('上下级包含关系不能形成循环');return false;}
  const deps=new Map(nodes.map(node=>[node.id,node.dependencies.filter(id=>!edges.some(e=>dependency(e)&&e.targetId===node.id&&e.sourceId===id))]));
  for(const item of next.filter(dependency)){if(!remove&&item.id===edge.id&&(!deps.has(item.targetId)||!nodes.some(n=>n.id===item.sourceId&&n.isCheckinNode))){showIslandToast('前置须为同项目可执行节点');return false;}deps.get(item.targetId)?.push(item.sourceId);}
  const visiting=new Set(),done=new Set(),cycle=id=>{if(visiting.has(id))return true;if(done.has(id))return false;visiting.add(id);if((deps.get(id)||[]).some(cycle))return true;visiting.delete(id);done.add(id);return false;};
  if(!remove&&nodes.some(n=>cycle(n.id))){showIslandToast('前置依赖不能形成循环');return false;}
  recordDomainHistory();if(remove)window.TERTIARY_EDGES=next;else Object.assign(edge,patch);
  for(const node of nodes)node.dependencies=[...new Set(deps.get(node.id))];saveCurrentProjectCanvasSnapshot();renderTertiaryEdges();refreshDomainProjections();notifyIslandStateChanged();return true;
}
handleEdgeTypeSelect=function(type){const edge=window.TERTIARY_EDGES?.find(e=>e.id===currentActiveEdgeId);if(!edge)return false;const label=!edge.label||edge.label===edge.type||edge.label==='前置完成'?(type==='none'?'':type):edge.label;const result=changeCanvasEdge({type,label});openEdgePopover(edge.id);return result;};
reverseEdgeDirection=function(){const edge=window.TERTIARY_EDGES?.find(e=>e.id===currentActiveEdgeId);if(!edge)return false;const result=changeCanvasEdge({sourceId:edge.targetId,targetId:edge.sourceId});openEdgePopover(edge.id);return result;};
handleEdgeHierarchy=function(reverse){const edge=window.TERTIARY_EDGES?.find(e=>e.id===currentActiveEdgeId);if(!edge)return false;if(!canvasEdgeDirectionAnchor||canvasEdgeDirectionAnchor.id!==edge.id)openEdgePopover(edge.id);const anchor=canvasEdgeDirectionAnchor,type=['关联','none',undefined].includes(edge.type)?'包含':edge.type,label=edge.label===edge.type?type:edge.label;const result=changeCanvasEdge({type,label,sourceId:reverse?anchor.b:anchor.a,targetId:reverse?anchor.a:anchor.b});openEdgePopover(edge.id);return result;};
setEdgeArrowMode=function(mode){if(!['none','single','double'].includes(mode))return false;const result=changeCanvasEdge({arrowMode:mode});if(result)openEdgePopover(currentActiveEdgeId);return result;};
setEdgeLineStyle=function(style){if(!['solid','dashed'].includes(style))return false;const result=changeCanvasEdge({lineStyle:style});if(result)openEdgePopover(currentActiveEdgeId);return result;};
handleEdgeColorSelect=function(color){if(!/^#[\da-f]{3,8}$/i.test(color))return false;const result=changeCanvasEdge({color});if(result)openEdgePopover(currentActiveEdgeId);return result;};
handleEdgeLabelChange=function(label){return changeCanvasEdge({label:String(label).slice(0,60)});};
handleEdgeWidthInput=function(value){const width=Math.max(1,Math.min(6,Number(value)||3)),result=changeCanvasEdge({lineWidth:width});document.getElementById('edge-width-display').textContent=width+'档';return result;};
handleDeleteActiveEdge=function(){if(!changeCanvasEdge({},true))return false;document.getElementById('tertiary-edge-popover').classList.add('is-hidden');currentActiveEdgeId=null;return true;};
let canvasConnectionGesture=null;
function cancelCanvasConnection(){canvasConnectionGesture=null;document.getElementById('canvas-connection-preview')?.remove();document.querySelectorAll('.tertiary-card.is-connecting-source,.tertiary-card.is-connecting-target').forEach(c=>c.classList.remove('is-connecting-source','is-connecting-target'));connectingSourceCardId=null;}
function bindCanvasConnectionDrag(){
  const stage=document.getElementById('tertiary-canvas-stage');if(!stage||stage.dataset.connectionDragBound)return;stage.dataset.connectionDragBound='true';let suppressUntil=0;
  stage.addEventListener('click',event=>{if(Date.now()<suppressUntil){event.preventDefault();event.stopImmediatePropagation();}},true);
  stage.addEventListener('pointerdown',event=>{
    const handle=event.target.closest('.work-card-connect-handle'),card=handle?.closest('.tertiary-card');if(!card||event.button>0)return;
    event.stopPropagation();canvasConnectionGesture={sourceId:card.id,pointerId:event.pointerId,x:event.clientX,y:event.clientY,dragging:false};
  });
  window.addEventListener('pointermove',event=>{
    const gesture=canvasConnectionGesture;if(!gesture||gesture.pointerId!==event.pointerId)return;
    if(!gesture.dragging&&Math.hypot(event.clientX-gesture.x,event.clientY-gesture.y)<6)return;
    if(!gesture.dragging){gesture.dragging=true;connectingSourceCardId=gesture.sourceId;document.getElementById(gesture.sourceId)?.classList.add('is-connecting-source');try{stage.setPointerCapture(event.pointerId);}catch{}}
    const target=document.elementFromPoint(event.clientX,event.clientY)?.closest('.tertiary-card');gesture.targetId=target&&stage.contains(target)&&target.id!==gesture.sourceId?target.id:null;
    stage.querySelectorAll('.is-connecting-target').forEach(card=>card.classList.remove('is-connecting-target'));if(gesture.targetId)target.classList.add('is-connecting-target');
    const source=document.getElementById(gesture.sourceId),v=readMindmapViewport(),point=canvasLocalPoint(stage,event.clientX,event.clientY);if(!source)return;
    let preview=document.getElementById('canvas-connection-preview');if(!preview){preview=document.createElementNS('http://www.w3.org/2000/svg','path');preview.id='canvas-connection-preview';preview.setAttribute('fill','none');preview.setAttribute('stroke','#f05f35');preview.setAttribute('stroke-width','3');preview.setAttribute('stroke-dasharray','7 5');preview.setAttribute('vector-effect','non-scaling-stroke');preview.setAttribute('pointer-events','none');document.getElementById('tertiary-lines-group')?.appendChild(preview);}
    preview.setAttribute('d',canvasConnectionPreview(canvasNodeRect(source),{x:(point.x-v.x)/v.zoom,y:(point.y-v.y)/v.zoom}));
  });
  const finish=event=>{const gesture=canvasConnectionGesture;if(!gesture||gesture.pointerId!==event.pointerId)return;canvasConnectionGesture=null;
    if(gesture.dragging){suppressUntil=Date.now()+450;try{stage.releasePointerCapture(event.pointerId);}catch{}if(event.type==='pointerup'&&gesture.targetId)startOrFinishConnecting(gesture.targetId,event);else cancelCanvasConnection();}
  };
  window.addEventListener('pointerup',finish);window.addEventListener('pointercancel',finish);window.addEventListener('blur',cancelCanvasConnection);
}
startOrFinishConnecting=function(id,event){
  event?.stopPropagation();const node=getDomainNode(id);if(!node||node.projectId!==window.currentTertiaryProjId)return false;
  if(!connectingSourceCardId){connectingSourceCardId=id;document.getElementById(id)?.classList.add('is-connecting-source');showIslandToast('拖线到目标节点，或点击目标连线按钮；Esc取消');return true;}
  const sourceId=connectingSourceCardId;cancelCanvasConnection();if(sourceId===id)return false;
  const existing=(window.TERTIARY_EDGES||[]).find(e=>e.sourceId===sourceId&&e.targetId===id);if(existing)return openEdgePopover(existing.id);
  recordDomainHistory();const edge=canvasEdgeStyle({id:domainId('edge'),sourceId,targetId:id,type:'关联',label:'关联'});window.TERTIARY_EDGES.push(edge);saveCurrentProjectCanvasSnapshot();renderTertiaryEdges();notifyIslandStateChanged();return openEdgePopover(edge.id);
};
handleTertiaryStageClick=function(event){if(event.target.closest('#tertiary-edge-popover,[data-edge-id],.work-card-connect-handle'))return;document.getElementById('tertiary-edge-popover')?.classList.add('is-hidden');};
window.addEventListener('keydown',event=>{if(event.key==='Escape'){cancelCanvasConnection();document.getElementById('tertiary-edge-popover')?.classList.add('is-hidden');}});
const canvasOriginalRender=renderDomainCanvas;
renderDomainCanvas=function(id){
  cancelCanvasConnection();document.getElementById('tertiary-canvas-stage')?._cancelCanvasWheel?.();currentActiveEdgeId=null;document.getElementById('tertiary-edge-popover')?.classList.add('is-hidden');
  const saved=canvasViewportStore().projects[id];restoringCanvasViewport=true;try{canvasOriginalRender(id);writeMindmapViewport(canvasValidViewport(saved)?saved:{x:60,y:40,zoom:1});}finally{restoringCanvasViewport=false;}
  bindCanvasConnectionDrag();
};
function placeCanvasNodeInFreeSpace(card){
  const others=Array.from(document.querySelectorAll('#tertiary-canvas-world .tertiary-card')).filter(c=>c!==card).map(canvasNodeRect),size=canvasNodeRect(card),position=canvasFreePosition(others,size.width,size.height);
  card.style.left=position.x+'px';card.style.top=position.y+'px';getDomainNode(card.id).canvasPosition=position;
}
const canvasCreateNode=createTertiaryCustomPlanningCard;
createTertiaryCustomPlanningCard=function(config){const card=canvasCreateNode(config);if(card&&!config.canvasPosition){placeCanvasNodeInFreeSpace(card);saveCurrentProjectCanvasSnapshot();renderTertiaryEdges();notifyIslandStateChanged();}return card;};
const canvasDeriveReview=deriveNodesFromReflectionCard;
deriveNodesFromReflectionCard=function(id,event){const before=new Set((getDomainState().nodesByProject[getDomainNode(id)?.projectId]||[]).map(n=>n.id)),count=canvasDeriveReview(id,event);if(count){for(const node of getDomainState().nodesByProject[getDomainNode(id).projectId])if(!before.has(node.id)){const card=document.getElementById(node.id);if(card)placeCanvasNodeInFreeSpace(card);}saveCurrentProjectCanvasSnapshot();renderTertiaryEdges();notifyIslandStateChanged();}return count;};
alignGridLayout=function(){
  const cards=Array.from(document.querySelectorAll('#tertiary-canvas-world .tertiary-card'));if(!cards.length)return false;recordDomainHistory();let y=90;
  for(let row=0;row<cards.length;row+=3){const items=cards.slice(row,row+3),height=Math.max(...items.map(c=>canvasNodeRect(c).height));for(const [column,card]of items.entries()){card.style.left=80+column*420+'px';card.style.top=y+'px';}y+=height+80;}
  saveCurrentProjectCanvasSnapshot();renderTertiaryEdges();fitCanvasView();notifyIslandStateChanged();return true;
};
cycleGridMode=alignGridLayout;
