(async()=>{
  const checks=[],check=(ok,label)=>{if(!ok)throw new Error(label);checks.push(label);};
  check(window.getDomainState().schemaVersion===3,'standalone design runs the shared schema-3 engine');
  check(!!document.querySelector('[data-product-contract="3"]'),'design labels prototype and fact boundaries');
  window.enterSecondaryWorkspace('study','gantt');window.openAddProjectModal();const today=window.ensureBusinessDate();document.getElementById('input-proj-title').value='设计预览真实规划';document.getElementById('input-proj-end').value=today;check(window.confirmAddNewProject(),'standalone project creation is a real domain operation');
  const project=window.getDomainState().projects[0];window.enterTertiaryWorkspace(project.id);check(window.domainTasks().some(t=>t.projectId===project.id&&t.status==='ready'),'standalone design dispatches real ready tasks');
  const saved=await window.__saveIslandAttachment(new File(['standalone-image'],'design.png',{type:'image/png'}));check(saved.path.startsWith('attachments/design/'),'design uses its independent persistent attachment adapter');
  check((await window.designData(saved.path)).size===16,'standalone attachment stores the original Blob');
  check(window.INQUIRY_POOL_STATE.length===0,'fresh design has no invented personal inquiries');
  window.openDomainTask(window.domainTasks().find(t=>t.projectId===project.id&&t.status==='ready').id);
  check(document.getElementById('island-real-reflection').getBoundingClientRect().width>0,'standalone task opened from planning is visible');
  window.notifyIslandStateChanged();await new Promise(resolve=>setTimeout(resolve,450));check((await window.designData('state')).projects.some(p=>p.id===project.id),'standalone design persists real structured state');
  return {version:'1.1.0',checks,screenshot:true,portrait:true};
})()
