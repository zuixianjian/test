// Every page uses the same fallback; installed scene assets are not user settings.
const pageBackgroundSettings=getIslandSettings;
getIslandSettings=function(){
  const settings=pageBackgroundSettings();
  if(!settings.wallpapers||typeof settings.wallpapers!=='object'||Array.isArray(settings.wallpapers))settings.wallpapers={};
  return settings;
};
function setPageWallpaper(ids,target){
  const key=resolveWallpaperFor(target),configured=typeof WALLPAPER_PRESETS[key]==='string',css=configured?WALLPAPER_PRESETS[key]:WALLPAPER_PRESETS.grid;
  for(const id of ids){
    const page=document.getElementById(id);if(!page)continue;
    page.style.setProperty('background',css,'important');
    page.dataset.islandWallpaper=configured?key:'default-grid';
  }
}
function applyExecutionWallpaper(){
  const target=evidenceSession?.pavilionId||'all';
  setPageWallpaper(['exec-task-workspace','exec-popup-task-view','exec-popup-project-view'],target);
}
function applyMindmapWallpaper(){
  const project=getDomainState().projects.find(p=>p.id===window.currentTertiaryProjId);
  setPageWallpaper(['tertiary-workspace-view','tertiary-canvas-stage'],project?.pavilion||'all');
}
applyPavilionWallpaper=function(){
  setPageWallpaper(['secondary-workspace-view','ws-specialized-container'],currentWsPavilion||'study');
};
applyIslandWallpaper=function(){
  setPageWallpaper(['island-canvas-stage','gallery-stage-view'],'all');
  applyPavilionWallpaper();applyMindmapWallpaper();applyExecutionWallpaper();
};
const pageBackgroundRestore=restoreBusinessViews,pageBackgroundSection=switchMainSection,pageBackgroundHome=switchHomeGlobalView,pageBackgroundExecution=renderDomainExecution,pageBackgroundEditor=syncBgEditor;
restoreBusinessViews=function(...args){const result=pageBackgroundRestore(...args);applyIslandWallpaper();return result;};
switchMainSection=function(...args){const result=pageBackgroundSection(...args);applyIslandWallpaper();return result;};
switchHomeGlobalView=function(...args){const result=pageBackgroundHome(...args);applyIslandWallpaper();return result;};
renderDomainExecution=function(...args){const result=pageBackgroundExecution(...args);applyExecutionWallpaper();return result;};
syncBgEditor=function(){
  pageBackgroundEditor();const hint=document.getElementById('bg-editor-hint');if(!hint)return;
  const s=getIslandSettings();
  if(selectedBgTarget!=='all'&&s.bgGlobal)hint.textContent='全局背景已开启；所有页面使用全局设置，未设置全局背景时显示网格线。';
  else if(selectedBgTarget==='all')hint.textContent='未设置全局背景时默认显示网格线；开启全局背景可统一所有页面。';
  else hint.textContent='未单独设置时沿用全局背景；全局也未设置时显示网格线。';
};
