// A shared, stable SVG navigator for both canvases. Geometry and camera updates are separate.
const canvasNavigators=new Map();
function canvasNavigationPreferences(){const state=getDomainState();state.navigation=state.navigation||{};state.navigation.planning=state.navigation.planning||{collapsed:true};state.navigation.projects=state.navigation.projects||{};return state.navigation;}
function canvasNavigationPreference(kind){const state=canvasNavigationPreferences();return kind==='planning'?state.planning:state.projects[window.currentTertiaryProjId]||{collapsed:false};}
function canvasNavigationPoint(svg,clientX,clientY){
  const matrix=svg.getScreenCTM();if(matrix){const point=svg.createSVGPoint();point.x=clientX;point.y=clientY;return point.matrixTransform(matrix.inverse());}
  const r=svg.getBoundingClientRect(),v=svg.viewBox.baseVal,scale=Math.min(r.width/v.width,r.height/v.height)||1;
  return {x:v.x+(clientX-r.left-(r.width-v.width*scale)/2)/scale,y:v.y+(clientY-r.top-(r.height-v.height*scale)/2)/scale};
}
function canvasNavigationNodes(kind){
  const selector=kind==='planning'?'#island-pavilion-grid .pavilion-node':'#tertiary-canvas-world .tertiary-card';
  return Array.from(document.querySelectorAll(selector)).filter(node=>!node.hidden&&getComputedStyle(node).display!=='none').map(node=>{
    const entity=kind==='project'?getDomainNode(node.id):null,pavilion=node.id.replace(/^node-/,'');
    const type=entity?({goal:'root',drill:'task',habit:'stage',review:'project',custom:'domain',text:'text'}[entity.nodeType]||'stage'):({study:'stage',dojo:'project',cultivation:'task',cognition:'root'}[pavilion]||'domain');
    return {...canvasNodeRect(node),type,title:entity?.title||PAVILION_META[pavilion]?.name||node.dataset.label||node.id};
  });
}
function getCanvasNavigator(kind){
  const prefix=kind==='planning'?'island':'tertiary',stage=document.getElementById(prefix+'-canvas-stage'),svg=document.getElementById(prefix+'-minimap-svg');if(!stage||!svg)return null;
  let nav=canvasNavigators.get(kind);if(nav?.svg===svg)return nav;
  nav={kind,prefix,stage,svg,dock:document.getElementById(prefix+'-navigation-dock'),panel:document.getElementById(prefix+'-minimap-dock'),toggle:document.getElementById(prefix+'-minimap-toggle-btn'),nodes:document.getElementById(prefix+'-minimap-nodes'),viewport:document.getElementById(prefix+'-minimap-viewport'),projection:null,key:null,signature:'',size:'',frame:null,reframeTimer:null,force:false,drag:null,suppressUntil:0};
  nav.read=kind==='planning'?readPlanViewport:readMindmapViewport;nav.write=kind==='planning'?writePlanViewport:writeMindmapViewport;
  svg.setAttribute('viewBox','0 0 220 130');svg.setAttribute('tabindex','0');svg.setAttribute('aria-label','导航地图：点击定位，拖动视口框漫游，方向键移动，Home适应画布');
  svg.querySelector('.a-my-island-work-minimap-hit-area')?.setAttribute('width','220');svg.querySelector('.a-my-island-work-minimap-hit-area')?.setAttribute('height','130');
  nav.toggle?.setAttribute('aria-controls',prefix+'-minimap-dock');canvasNavigators.set(kind,nav);bindCanvasNavigation(nav);
  if(window.ResizeObserver){const observer=new window.ResizeObserver(()=>{queueCanvasNavigation(kind);if(kind==='project'){positionCanvasEdgeLabels();positionCanvasEdgePopover();}});observer.observe(stage);}
  return nav;
}
function cancelCanvasNavigationDrag(nav){const drag=nav?.drag;if(!drag)return;nav.drag=null;nav.suppressUntil=Date.now()+500;nav.svg.classList.remove('is-navigating');try{nav.svg.releasePointerCapture(drag.pointerId);}catch{}queueCanvasNavigation(nav.kind);}
function canvasNavigationOutside(nav){if(!nav.projection)return true;const r=canvasWorldViewport(nav.read(),nav.stage.clientWidth,nav.stage.clientHeight),p=nav.projection;return r.x<p.minX||r.y<p.minY||r.x+r.width>p.maxX||r.y+r.height>p.maxY;}
function queueCanvasNavigation(kind,reframe=false){
  const nav=getCanvasNavigator(kind);if(!nav)return;nav.force=nav.force||reframe;if(nav.frame!==null)return;
  nav.frame=requestAnimationFrame(()=>{nav.frame=null;renderCanvasNavigation(nav);});
}
function renderCanvasNavigation(nav){
  const key=nav.kind==='planning'?'planning':window.currentTertiaryProjId||'',collapsed=canvasNavigationPreference(nav.kind).collapsed===true;
  nav.panel.classList.toggle('is-collapsed',collapsed);nav.dock.dataset.minimapCollapsed=String(collapsed);nav.toggle?.classList.toggle('is-active',!collapsed);nav.toggle?.setAttribute('aria-expanded',String(!collapsed));nav.toggle?.setAttribute('aria-label',collapsed?'展开导航地图':'收起导航地图');
  if(nav.key!==key){cancelCanvasNavigationDrag(nav);nav.key=key;nav.projection=null;nav.signature='';}
  if(collapsed){cancelCanvasNavigationDrag(nav);clearTimeout(nav.reframeTimer);nav.reframeTimer=null;return;}
  const width=nav.stage.clientWidth,height=nav.stage.clientHeight;if(!width||!height||(nav.kind==='planning'&&currentGlobalView!=='plan')){clearTimeout(nav.reframeTimer);nav.reframeTimer=null;return;}
  const boxes=canvasNavigationNodes(nav.kind),signature=JSON.stringify(boxes),size=width+','+height,geometryChanged=nav.signature!==signature||nav.size!==size;
  let rebuild=geometryChanged;
  if(nav.drag&&geometryChanged)nav.force=true;
  if(!nav.drag&&(!nav.projection||geometryChanged||nav.force)){nav.projection=canvasMinimapProjection(boxes,nav.read(),width,height);nav.force=false;rebuild=true;}
  if(!nav.projection)return;
  const projection=nav.projection;
  if(rebuild){
    const existing=new Map(Array.from(nav.nodes.children).map(node=>[node.dataset.nodeId,node])),fragment=document.createDocumentFragment();
    for(const box of boxes){const marker=existing.get(box.id)||document.createElementNS('http://www.w3.org/2000/svg','rect'),w=Math.max(4,box.width*projection.scale),h=Math.max(4,box.height*projection.scale),center=canvasMinimapPoint(projection,{x:box.x+box.width/2,y:box.y+box.height/2});
      marker.dataset.nodeId=box.id;marker.setAttribute('class','a-my-island-work-minimap-node is-'+box.type);for(const [name,value]of Object.entries({x:center.x-w/2,y:center.y-h/2,width:w,height:h,rx:Math.min(3,w/3,h/3)}))marker.setAttribute(name,String(value));
      let title=marker.querySelector('title');if(!title){title=document.createElementNS('http://www.w3.org/2000/svg','title');marker.appendChild(title);}title.textContent=box.title;fragment.appendChild(marker);
    }
    nav.nodes.replaceChildren(fragment);nav.signature=signature;nav.size=size;
  }
  const viewport=canvasWorldViewport(nav.read(),width,height),point=canvasMinimapPoint(projection,viewport);for(const [name,value]of Object.entries({x:point.x,y:point.y,width:Math.max(4,viewport.width*projection.scale),height:Math.max(4,viewport.height*projection.scale)}))nav.viewport.setAttribute(name,String(value));
  if(!nav.drag&&canvasNavigationOutside(nav)){
    const camera=JSON.stringify(nav.read());if(nav.reframeTimer===null||camera!==nav.reframeCamera){clearTimeout(nav.reframeTimer);nav.reframeCamera=camera;nav.reframeTimer=setTimeout(()=>{nav.reframeTimer=null;queueCanvasNavigation(nav.kind,true);},180);}
  }else{clearTimeout(nav.reframeTimer);nav.reframeTimer=null;}
}
function bindCanvasNavigation(nav){
  const svg=nav.svg;
  const move=event=>{const drag=nav.drag;if(!drag||drag.pointerId!==event.pointerId)return;
    const point=canvasNavigationPoint(svg,event.clientX,event.clientY);if(Math.hypot(event.clientX-drag.clientX,event.clientY-drag.clientY)>3)drag.moved=true;
    if(drag.moved&&drag.viewport)nav.write(canvasMinimapDrag(drag.camera,point.x-drag.point.x,point.y-drag.point.y,drag.projection));
  };
  svg.addEventListener('pointerdown',event=>{
    if(event.button>0||!nav.projection)return;event.preventDefault();event.stopPropagation();
    if(nav.drag){cancelCanvasNavigationDrag(nav);return;}
    nav.stage._cancelCanvasWheel?.();clearTimeout(nav.reframeTimer);nav.reframeTimer=null;
    nav.drag={pointerId:event.pointerId,clientX:event.clientX,clientY:event.clientY,point:canvasNavigationPoint(svg,event.clientX,event.clientY),camera:nav.read(),projection:{...nav.projection},viewport:event.target===nav.viewport,moved:false};svg.classList.add('is-navigating');try{svg.setPointerCapture(event.pointerId);}catch{}
  });
  svg.addEventListener('pointermove',move);
  const finish=event=>{const drag=nav.drag;if(!drag||drag.pointerId!==event.pointerId)return;move(event);
    if(event.type==='pointerup'&&!drag.moved){const point=canvasNavigationPoint(svg,event.clientX,event.clientY),world=canvasMinimapWorldPoint(drag.projection,point),camera=nav.read();nav.write({...camera,x:nav.stage.clientWidth/2-world.x*camera.zoom,y:nav.stage.clientHeight/2-world.y*camera.zoom});}
    cancelCanvasNavigationDrag(nav);
  };
  svg.addEventListener('pointerup',finish);for(const type of ['pointercancel','lostpointercapture'])svg.addEventListener(type,event=>{if(nav.drag?.pointerId===event.pointerId)cancelCanvasNavigationDrag(nav);});
  svg.addEventListener('click',event=>{event.preventDefault();event.stopPropagation();});svg.addEventListener('dblclick',event=>event.stopPropagation());
  nav.dock.addEventListener('wheel',event=>{event.preventDefault();event.stopPropagation();},{passive:false});
  svg.addEventListener('keydown',event=>{if(['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Home'].includes(event.key)){event.preventDefault();event.stopPropagation();if(event.key==='Home'){(nav.kind==='planning'?fitHomeCanvasView:fitCanvasView)();queueCanvasNavigation(nav.kind,true);return;}const camera=nav.read();nav.write({...camera,x:camera.x+({'ArrowLeft':80,'ArrowRight':-80}[event.key]||0),y:camera.y+({'ArrowUp':80,'ArrowDown':-80}[event.key]||0)});}});
  window.addEventListener('blur',()=>cancelCanvasNavigationDrag(nav));window.addEventListener('keydown',event=>{if(event.key==='Escape')cancelCanvasNavigationDrag(nav);});
}
function toggleCanvasNavigation(kind,forceState){
  const nav=getCanvasNavigator(kind);if(!nav)return;const prefs=canvasNavigationPreferences(),collapsed=typeof forceState==='boolean'?!forceState:!canvasNavigationPreference(kind).collapsed;
  if(kind==='planning')prefs.planning={collapsed};else if(window.currentTertiaryProjId)prefs.projects[window.currentTertiaryProjId]={collapsed};
  cancelCanvasNavigationDrag(nav);queueCanvasNavigation(kind,true);notifyIslandStateChanged();
}
updateIslandMinimap=function(){queueCanvasNavigation('planning');};
updateTertiaryMinimap=function(){queueCanvasNavigation('project');};
initIslandMinimapEvents=function(){getCanvasNavigator('planning');};
initTertiaryMinimapEvents=function(){getCanvasNavigator('project');};
toggleIslandMinimapDock=function(forceState){toggleCanvasNavigation('planning',forceState);};
toggleTertiaryMinimapDock=function(forceState){toggleCanvasNavigation('project',forceState);};
const navigationFitHome=fitHomeCanvasView,navigationFitProject=fitCanvasView,navigationResetHome=resetIslandCanvasZoom,navigationResetProject=resetTertiaryCanvasZoom;
fitHomeCanvasView=function(){navigationFitHome();queueCanvasNavigation('planning',true);};
fitCanvasView=function(){navigationFitProject();queueCanvasNavigation('project',true);};
resetIslandCanvasZoom=function(){navigationResetHome();queueCanvasNavigation('planning',true);};
resetTertiaryCanvasZoom=function(){navigationResetProject();queueCanvasNavigation('project',true);};
const navigationRestoreBusinessViews=restoreBusinessViews;
restoreBusinessViews=function(){navigationRestoreBusinessViews();queueCanvasNavigation('planning',true);queueCanvasNavigation('project',true);};
const navigationRenderDomainCanvas=renderDomainCanvas,navigationSwitchMain=switchMainSection,navigationSwitchHome=switchHomeGlobalView;
renderDomainCanvas=function(id){const nav=canvasNavigators.get('project');if(nav&&nav.key!==id){cancelCanvasNavigationDrag(nav);nav.projection=null;}navigationRenderDomainCanvas(id);queueCanvasNavigation('project');};
switchMainSection=function(section){for(const nav of canvasNavigators.values())cancelCanvasNavigationDrag(nav);navigationSwitchMain(section);queueCanvasNavigation('planning');queueCanvasNavigation('project');};
switchHomeGlobalView=function(view){cancelCanvasNavigationDrag(canvasNavigators.get('planning'));navigationSwitchHome(view);queueCanvasNavigation('planning');};
window.addEventListener('youth-island:state-changed',()=>{queueCanvasNavigation('planning');queueCanvasNavigation('project');});
