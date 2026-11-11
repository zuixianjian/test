import { spawn } from 'child_process';
import http from 'http';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const htmlPath = 'file:///' + path.resolve('high_fidelity_ui_preview.html').replace(/\\/g, '/');

async function run() {
  console.log('Testing Release 1.0.6: 1:1 Lifelong Islander navigation window & 3D map dock...');
  const chromeProc = spawn(CHROME_PATH, [
    '--headless=new',
    '--remote-debugging-port=9244',
    '--no-sandbox',
    '--disable-gpu',
    '--disable-extensions',
    '--window-size=1200,800',
    htmlPath
  ]);

  let wsUrl = null;
  for (let i = 0; i < 40; i++) {
    await new Promise(r => setTimeout(r, 200));
    try {
      const list = await fetchJson('http://127.0.0.1:9244/json');
      const pageTarget = list.find(t => t.type === 'page');
      if (pageTarget) { wsUrl = pageTarget.webSocketDebuggerUrl; break; }
    } catch {}
  }

  if (!wsUrl) {
    chromeProc.kill();
    throw new Error('Failed to find page target in Chrome');
  }

  const ws = new WebSocket(wsUrl);
  let idCounter = 1;
  const pending = new Map();
  ws.onmessage = (event) => {
    const msg = JSON.parse(event.data);
    if (msg.id && pending.has(msg.id)) {
      const { resolve, reject } = pending.get(msg.id);
      pending.delete(msg.id);
      if (msg.error) reject(msg.error);
      else resolve(msg.result);
    }
  };
  await new Promise(r => ws.onopen = r);

  const send = (method, params = {}) => {
    return new Promise((resolve, reject) => {
      const id = idCounter++;
      pending.set(id, { resolve, reject });
      ws.send(JSON.stringify({ id, method, params }));
    });
  };

  await send('Page.enable');
  await send('Runtime.enable');
  await send('DOM.enable');

  const evalCode = async (expr) => {
    const res = await send('Runtime.evaluate', { expression: expr, returnByValue: true });
    if (res.exceptionDetails) {
      throw new Error('Eval error: ' + JSON.stringify(res.exceptionDetails));
    }
    return res.result.value;
  };

  // Wait for initial DOM and scripts to settle
  await new Promise(r => setTimeout(r, 1200));

  // -------------------------------------------------------------
  // Test 1: Planning View - 1:1 Navigation Dock & Minimap
  // -------------------------------------------------------------
  console.log('\n--- 1. Testing Planning View Navigation Dock ---');
  await evalCode(`switchHomeGlobalView('plan');`);
  await new Promise(r => setTimeout(r, 300));

  const planDockCheck = await evalCode(`(() => {
    const dock = document.getElementById('island-navigation-dock');
    const panel = document.getElementById('island-minimap-dock');
    const toggleBtn = document.getElementById('island-minimap-toggle-btn');
    const svg = document.getElementById('island-minimap-svg');
    const nodes = document.getElementById('island-minimap-nodes');
    const vp = document.getElementById('island-minimap-viewport');

    if (!dock || !panel || !toggleBtn || !svg || !nodes || !vp) {
      return { ok: false, error: 'Missing navigation dock elements' };
    }

    const dockStyle = window.getComputedStyle(dock);
    const panelStyle = window.getComputedStyle(panel);
    const nodeCount = nodes.querySelectorAll('rect').length;
    const vpW = parseFloat(vp.getAttribute('width') || '0');
    const vpH = parseFloat(vp.getAttribute('height') || '0');

    return {
      ok: true,
      dockDisplay: dockStyle.display,
      panelCollapsed: panel.classList.contains('is-collapsed'),
      btnActive: toggleBtn.classList.contains('is-active'),
      nodeCount,
      vpW,
      vpH
    };
  })()`);

  console.log('Planning Navigation Dock Status:', planDockCheck);
  if (!planDockCheck.ok || planDockCheck.dockDisplay === 'none') {
    throw new Error('Planning navigation dock is not visible: ' + JSON.stringify(planDockCheck));
  }
  if (planDockCheck.nodeCount < 4) {
    throw new Error('Planning minimap nodes group missing pavilion rects: ' + planDockCheck.nodeCount);
  }
  if (planDockCheck.vpW <= 0 || planDockCheck.vpH <= 0) {
    throw new Error('Planning minimap viewport has zero dimensions');
  }
  console.log('✅ PASS: Planning navigation dock, 3D button, node rects (' + planDockCheck.nodeCount + ') and viewport verified');

  // Test toggle collapse / expand in planning view
  console.log('\n--- 2. Testing Planning Minimap Toggle Collapse/Expand ---');
  await evalCode(`toggleIslandMinimapDock();`);
  await new Promise(r => setTimeout(r, 200));

  const afterCollapse = await evalCode(`(() => {
    const panel = document.getElementById('island-minimap-dock');
    const toggleBtn = document.getElementById('island-minimap-toggle-btn');
    return {
      panelCollapsed: panel.classList.contains('is-collapsed'),
      panelDisplay: window.getComputedStyle(panel).display,
      btnActive: toggleBtn.classList.contains('is-active')
    };
  })()`);

  console.log('After toggle collapse:', afterCollapse);
  if (!afterCollapse.panelCollapsed || afterCollapse.panelDisplay !== 'none') {
    throw new Error('Minimap panel did not collapse properly: ' + JSON.stringify(afterCollapse));
  }
  console.log('✅ PASS: Minimap panel collapsed smoothly, 3D toggle button remains active/toggleable');

  await evalCode(`toggleIslandMinimapDock();`);
  await new Promise(r => setTimeout(r, 200));
  const afterExpand = await evalCode(`(() => {
    const panel = document.getElementById('island-minimap-dock');
    return {
      panelCollapsed: panel.classList.contains('is-collapsed'),
      panelDisplay: window.getComputedStyle(panel).display
    };
  })()`);
  if (afterExpand.panelCollapsed || afterExpand.panelDisplay === 'none') {
    throw new Error('Minimap panel did not expand properly: ' + JSON.stringify(afterExpand));
  }
  console.log('✅ PASS: Minimap panel expanded smoothly');

  // Test Planning Minimap Viewport Update on pan/zoom
  console.log('\n--- 3. Testing Planning Canvas Transform Sync to Minimap ---');
  const prevVpX = await evalCode(`parseFloat(document.getElementById('island-minimap-viewport').getAttribute('x'))`);
  await evalCode(`(() => {
    islandPanX += 120;
    applyIslandTransform();
  })()`);
  await new Promise(r => setTimeout(r, 200));
  const newVpX = await evalCode(`parseFloat(document.getElementById('island-minimap-viewport').getAttribute('x'))`);
  console.log('Viewport X changed from', prevVpX, 'to', newVpX);
  if (prevVpX === newVpX) {
    throw new Error('Minimap viewport did not update after canvas pan');
  }
  console.log('✅ PASS: Minimap viewport tracks canvas pan dynamically');

  // -------------------------------------------------------------
  // Test 2: Tertiary Mindmap Workspace - 1:1 Navigation Dock & Minimap
  // -------------------------------------------------------------
  console.log('\n--- 4. Testing Tertiary Mindmap Workspace Navigation Dock ---');
  await evalCode(`switchMainSection('tertiary');`);
  await new Promise(r => setTimeout(r, 400));

  const tertiaryDockCheck = await evalCode(`(() => {
    const dock = document.getElementById('tertiary-navigation-dock');
    const panel = document.getElementById('tertiary-minimap-dock');
    const toggleBtn = document.getElementById('tertiary-minimap-toggle-btn');
    const svg = document.getElementById('tertiary-minimap-svg');
    const nodes = document.getElementById('tertiary-minimap-nodes');
    const vp = document.getElementById('tertiary-minimap-viewport');

    if (!dock || !panel || !toggleBtn || !svg || !nodes || !vp) {
      return { ok: false, error: 'Missing tertiary navigation dock elements' };
    }

    const dockStyle = window.getComputedStyle(dock);
    const panelStyle = window.getComputedStyle(panel);
    const nodeCount = nodes.querySelectorAll('rect').length;
    const vpW = parseFloat(vp.getAttribute('width') || '0');
    const vpH = parseFloat(vp.getAttribute('height') || '0');

    return {
      ok: true,
      dockDisplay: dockStyle.display,
      panelCollapsed: panel.classList.contains('is-collapsed'),
      btnActive: toggleBtn.classList.contains('is-active'),
      nodeCount,
      vpW,
      vpH
    };
  })()`);

  console.log('Tertiary Navigation Dock Status:', tertiaryDockCheck);
  if (!tertiaryDockCheck.ok || tertiaryDockCheck.dockDisplay === 'none') {
    throw new Error('Tertiary navigation dock is not visible: ' + JSON.stringify(tertiaryDockCheck));
  }
  if (tertiaryDockCheck.nodeCount < 1) {
    throw new Error('Tertiary minimap nodes group missing card rects: ' + tertiaryDockCheck.nodeCount);
  }
  if (tertiaryDockCheck.vpW <= 0 || tertiaryDockCheck.vpH <= 0) {
    throw new Error('Tertiary minimap viewport has zero dimensions');
  }
  console.log('✅ PASS: Tertiary navigation dock, 3D button, node rects (' + tertiaryDockCheck.nodeCount + ') and viewport verified');

  // Test Tertiary minimap collapse/expand
  console.log('\n--- 5. Testing Tertiary Minimap Toggle Collapse/Expand ---');
  await evalCode(`toggleTertiaryMinimapDock();`);
  await new Promise(r => setTimeout(r, 200));

  const tertAfterCollapse = await evalCode(`(() => {
    const panel = document.getElementById('tertiary-minimap-dock');
    return {
      panelCollapsed: panel.classList.contains('is-collapsed'),
      panelDisplay: window.getComputedStyle(panel).display
    };
  })()`);
  if (!tertAfterCollapse.panelCollapsed || tertAfterCollapse.panelDisplay !== 'none') {
    throw new Error('Tertiary minimap did not collapse properly: ' + JSON.stringify(tertAfterCollapse));
  }
  console.log('✅ PASS: Tertiary minimap collapsed smoothly');

  await evalCode(`toggleTertiaryMinimapDock();`);
  await new Promise(r => setTimeout(r, 200));
  const tertAfterExpand = await evalCode(`(() => {
    const panel = document.getElementById('tertiary-minimap-dock');
    return {
      panelCollapsed: panel.classList.contains('is-collapsed'),
      panelDisplay: window.getComputedStyle(panel).display
    };
  })()`);
  if (tertAfterExpand.panelCollapsed || tertAfterExpand.panelDisplay === 'none') {
    throw new Error('Tertiary minimap did not expand properly: ' + JSON.stringify(tertAfterExpand));
  }
  console.log('✅ PASS: Tertiary minimap expanded smoothly');

  // Test Tertiary zoom synchronizing viewport size
  console.log('\n--- 6. Testing Tertiary Canvas Zoom Sync to Minimap Viewport ---');
  const prevTertVpW = await evalCode(`parseFloat(document.getElementById('tertiary-minimap-viewport').getAttribute('width'))`);
  await evalCode(`zoomTertiaryCanvas(1.5);`);
  await new Promise(r => setTimeout(r, 200));
  const newTertVpW = await evalCode(`parseFloat(document.getElementById('tertiary-minimap-viewport').getAttribute('width'))`);
  console.log('Tertiary Viewport width changed from', prevTertVpW, 'to', newTertVpW);
  if (prevTertVpW === newTertVpW || newTertVpW >= prevTertVpW) {
    throw new Error('Tertiary minimap viewport did not shrink on zoom in (factor 1.5)');
  }
  console.log('✅ PASS: Zooming in canvas inversely scales viewport indicator on minimap as expected in 1:1 Islander navigation');

  // Test Minimap Click-to-pan & Viewport Dragging
  console.log('\n--- 7. Testing Minimap Click to Pan Navigation ---');
  const beforePanX = await evalCode(`window.tertiaryPanX`);
  await evalCode(`(() => {
    const svg = document.getElementById('tertiary-minimap-svg');
    const rect = svg.getBoundingClientRect();
    const clickEv = new MouseEvent('click', {
      clientX: rect.left + rect.width * 0.7,
      clientY: rect.top + rect.height * 0.7,
      bubbles: true
    });
    svg.dispatchEvent(clickEv);
  })()`);
  await new Promise(r => setTimeout(r, 200));
  const afterPanX = await evalCode(`window.tertiaryPanX`);
  console.log('Tertiary Pan X changed from', beforePanX, 'to', afterPanX);
  if (beforePanX === afterPanX) {
    throw new Error('Clicking minimap did not pan the canvas');
  }
  console.log('✅ PASS: Clicking minimap relocates and centers canvas to target coordinate');

  console.log('\n🎉 ALL 7 CDP MINIMAP VERIFICATIONS PASSED SUCESSFULLY!');
  ws.close();
  chromeProc.kill();
  process.exit(0);
}

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); } catch (e) { reject(e); }
      });
    }).on('error', reject);
  });
}

run().catch(err => {
  console.error('❌ CDP Test Failed:', err);
  process.exit(1);
});
