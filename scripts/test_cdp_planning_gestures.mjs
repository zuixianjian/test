import { spawn } from 'child_process';
import http from 'http';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const htmlPath = 'file:///' + path.resolve('high_fidelity_ui_preview.html').replace(/\\/g, '/');

async function run() {
  console.log('Testing Planning View Gestures: Pan, Zoom, and Node Dragging (Mouse & Touch)...');
  const chromeProc = spawn(CHROME_PATH, [
    '--headless=new',
    '--remote-debugging-port=9266',
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
      const list = await fetchJson('http://127.0.0.1:9266/json');
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

  await new Promise(r => setTimeout(r, 1000));

  // 1. Switch to plan view
  console.log('\n--- 1. Switching to Planning View ---');
  await evalCode(`switchHomeGlobalView('plan');`);
  await new Promise(r => setTimeout(r, 300));

  const planStatus = await evalCode(`(() => {
    const world = document.getElementById('island-world-canvas');
    return {
      currentGlobalView,
      worldDisplay: window.getComputedStyle(world).display,
      worldTransformOrigin: window.getComputedStyle(world).transformOrigin
    };
  })()`);
  console.log('Planning view status:', planStatus);
  if (planStatus.currentGlobalView !== 'plan' || planStatus.worldDisplay === 'none') {
    throw new Error('Planning view failed to activate');
  }
  console.log('✅ PASS: Planning view active and world canvas rendered');

  // 2. Test Mouse Wheel Zoom
  console.log('\n--- 2. Testing Mouse Wheel Zoom ---');
  const initZoom = await evalCode(`islandZoom`);
  await evalCode(`(() => {
    const stage = document.getElementById('island-canvas-stage');
    stage.dispatchEvent(new WheelEvent('wheel', { deltaY: -100, bubbles: true, cancelable: true }));
  })()`);
  await new Promise(r => setTimeout(r, 100));
  const afterWheelZoom = await evalCode(`islandZoom`);
  console.log('Zoom changed from', initZoom, 'to', afterWheelZoom);
  if (afterWheelZoom <= initZoom) {
    throw new Error('Wheel zoom did not increase zoom factor');
  }
  console.log('✅ PASS: Mouse wheel zoom works smoothly');

  // 3. Test Mouse / Pointer Canvas Pan
  console.log('\n--- 3. Testing Mouse / Pointer Drag Pan ---');
  const initPan = await evalCode(`({ x: islandPanX, y: islandPanY })`);
  await evalCode(`(() => {
    const stage = document.getElementById('island-canvas-stage');
    stage.dispatchEvent(new PointerEvent('pointerdown', { pointerType: 'mouse', clientX: 400, clientY: 300, bubbles: true, cancelable: true }));
    stage.dispatchEvent(new PointerEvent('pointermove', { pointerType: 'mouse', clientX: 520, clientY: 380, bubbles: true, cancelable: true }));
    stage.dispatchEvent(new PointerEvent('pointerup', { pointerType: 'mouse', clientX: 520, clientY: 380, bubbles: true, cancelable: true }));
  })()`);
  await new Promise(r => setTimeout(r, 100));
  const afterMousePan = await evalCode(`({ x: islandPanX, y: islandPanY })`);
  console.log('Pan changed from', initPan, 'to', afterMousePan);
  if (afterMousePan.x === initPan.x && afterMousePan.y === initPan.y) {
    throw new Error('Mouse drag did not pan the canvas');
  }
  console.log('✅ PASS: Mouse canvas pan works smoothly');

  // 4. Test Mouse / Pointer Node Dragging
  console.log('\n--- 4. Testing Mouse / Pointer Node Dragging ---');
  const initNodePos = await evalCode(`(() => {
    const node = document.getElementById('node-study');
    return { left: node.offsetLeft, top: node.offsetTop };
  })()`);
  await evalCode(`(() => {
    const node = document.getElementById('node-study');
    const rect = node.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const stage = document.getElementById('island-canvas-stage');

    node.dispatchEvent(new PointerEvent('pointerdown', { pointerType: 'mouse', clientX: cx, clientY: cy, bubbles: true, cancelable: true }));
    stage.dispatchEvent(new PointerEvent('pointermove', { pointerType: 'mouse', clientX: cx + 80, clientY: cy + 50, bubbles: true, cancelable: true }));
    stage.dispatchEvent(new PointerEvent('pointerup', { pointerType: 'mouse', clientX: cx + 80, clientY: cy + 50, bubbles: true, cancelable: true }));
    // Also test that click event was suppressed
    node.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
  })()`);
  await new Promise(r => setTimeout(r, 100));
  const afterNodePos = await evalCode(`(() => {
    const node = document.getElementById('node-study');
    const wsView = document.getElementById('secondary-workspace-view');
    return {
      left: node.offsetLeft,
      top: node.offsetTop,
      wsViewVisible: wsView ? window.getComputedStyle(wsView).display !== 'none' : false
    };
  })()`);
  console.log('Node position changed from', initNodePos, 'to', afterNodePos);
  if (afterNodePos.left === initNodePos.left && afterNodePos.top === initNodePos.top) {
    throw new Error('Node dragging did not change node position');
  }
  if (afterNodePos.wsViewVisible) {
    throw new Error('Node dragging erroneously triggered secondary workspace navigation!');
  }
  console.log('✅ PASS: Mouse node dragging moved icon and click navigation was safely suppressed');

  // 5. Test Tablet Single-Finger Touch Pan
  console.log('\n--- 5. Testing Tablet Touch Pan ---');
  const touchPanStart = await evalCode(`({ x: islandPanX, y: islandPanY })`);
  await evalCode(`(() => {
    const stage = document.getElementById('island-canvas-stage');
    const t0 = new Touch({ identifier: 1, target: stage, clientX: 300, clientY: 250 });
    const tStart = new TouchEvent('touchstart', {
      bubbles: true,
      cancelable: true,
      touches: [t0],
      targetTouches: [t0]
    });
    stage.dispatchEvent(tStart);

    const t1 = new Touch({ identifier: 1, target: stage, clientX: 420, clientY: 340 });
    const tMove = new TouchEvent('touchmove', {
      bubbles: true,
      cancelable: true,
      touches: [t1],
      targetTouches: [t1]
    });
    stage.dispatchEvent(tMove);

    const tEnd = new TouchEvent('touchend', {
      bubbles: true,
      cancelable: true,
      touches: [],
      targetTouches: []
    });
    stage.dispatchEvent(tEnd);
  })()`);
  await new Promise(r => setTimeout(r, 100));
  const touchPanEnd = await evalCode(`({ x: islandPanX, y: islandPanY })`);
  console.log('Touch Pan changed from', touchPanStart, 'to', touchPanEnd);
  if (touchPanEnd.x === touchPanStart.x && touchPanEnd.y === touchPanStart.y) {
    throw new Error('Touch pan did not change canvas pan coordinates');
  }
  console.log('✅ PASS: Single-finger touch pan works smoothly on tablets');

  // 6. Test Tablet Multi-Touch Pinch-to-Zoom
  console.log('\n--- 6. Testing Tablet Two-Finger Pinch-to-Zoom ---');
  const pinchZoomStart = await evalCode(`islandZoom`);
  await evalCode(`(() => {
    const stage = document.getElementById('island-canvas-stage');
    const p1 = new Touch({ identifier: 1, target: stage, clientX: 400, clientY: 300 });
    const p2 = new Touch({ identifier: 2, target: stage, clientX: 500, clientY: 300 });
    const tStart = new TouchEvent('touchstart', {
      bubbles: true,
      cancelable: true,
      touches: [p1, p2],
      targetTouches: [p1, p2]
    });
    stage.dispatchEvent(tStart);

    const m1 = new Touch({ identifier: 1, target: stage, clientX: 350, clientY: 300 });
    const m2 = new Touch({ identifier: 2, target: stage, clientX: 550, clientY: 300 });
    const tMove = new TouchEvent('touchmove', {
      bubbles: true,
      cancelable: true,
      touches: [m1, m2],
      targetTouches: [m1, m2]
    });
    stage.dispatchEvent(tMove);

    const tEnd = new TouchEvent('touchend', {
      bubbles: true,
      cancelable: true,
      touches: [],
      targetTouches: []
    });
    stage.dispatchEvent(tEnd);
  })()`);
  await new Promise(r => setTimeout(r, 100));
  const pinchZoomEnd = await evalCode(`islandZoom`);
  console.log('Pinch Zoom changed from', pinchZoomStart, 'to', pinchZoomEnd);
  if (pinchZoomEnd <= pinchZoomStart) {
    throw new Error('Two-finger pinch did not zoom the canvas');
  }
  console.log('✅ PASS: Two-finger pinch-to-zoom works smoothly on tablets');

  // 7. Test Tablet Single-Finger Node Dragging
  console.log('\n--- 7. Testing Tablet Single-Finger Node Dragging ---');
  const dojoInitPos = await evalCode(`(() => {
    const node = document.getElementById('node-dojo');
    return { left: node.offsetLeft, top: node.offsetTop };
  })()`);
  await evalCode(`(() => {
    const node = document.getElementById('node-dojo');
    const stage = document.getElementById('island-canvas-stage');
    const rect = node.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    const t0 = new Touch({ identifier: 1, target: node, clientX: cx, clientY: cy });
    const tStart = new TouchEvent('touchstart', {
      bubbles: true,
      cancelable: true,
      touches: [t0],
      targetTouches: [t0]
    });
    node.dispatchEvent(tStart);

    const t1 = new Touch({ identifier: 1, target: node, clientX: cx + 110, clientY: cy + 70 });
    const tMove = new TouchEvent('touchmove', {
      bubbles: true,
      cancelable: true,
      touches: [t1],
      targetTouches: [t1]
    });
    stage.dispatchEvent(tMove);

    const tEnd = new TouchEvent('touchend', {
      bubbles: true,
      cancelable: true,
      touches: [],
      targetTouches: []
    });
    stage.dispatchEvent(tEnd);
    // Suppressed click
    node.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
  })()`);
  await new Promise(r => setTimeout(r, 100));
  const dojoAfterPos = await evalCode(`(() => {
    const node = document.getElementById('node-dojo');
    const wsView = document.getElementById('secondary-workspace-view');
    return {
      left: node.offsetLeft,
      top: node.offsetTop,
      wsViewVisible: wsView ? window.getComputedStyle(wsView).display !== 'none' : false
    };
  })()`);
  console.log('Dojo node position changed from', dojoInitPos, 'to', dojoAfterPos);
  if (dojoAfterPos.left === dojoInitPos.left && dojoAfterPos.top === dojoInitPos.top) {
    throw new Error('Tablet touch drag did not move the dojo icon');
  }
  if (dojoAfterPos.wsViewVisible) {
    throw new Error('Tablet touch drag erroneously triggered workspace navigation!');
  }
  console.log('✅ PASS: Tablet single-finger touch node dragging works smoothly and suppresses click');

  // 8. Test Clean Tap / Click on Node triggers navigation
  console.log('\n--- 8. Testing Clean Tap / Click on Node triggers navigation ---');
  await evalCode(`(() => {
    const node = document.getElementById('node-cultivation');
    node.click();
  })()`);
  await new Promise(r => setTimeout(r, 200));
  const clickNavStatus = await evalCode(`(() => {
    const wsView = document.getElementById('secondary-workspace-view');
    return {
      wsViewDisplay: window.getComputedStyle(wsView).display
    };
  })()`);
  console.log('Clean click navigation status:', clickNavStatus);
  if (clickNavStatus.wsViewDisplay === 'none') {
    throw new Error('Clean click on node did not open workspace');
  }
  console.log('✅ PASS: Clean tap/click correctly opens the secondary workspace');

  console.log('\n🎉 ALL 8 PLANNING VIEW GESTURE VERIFICATIONS PASSED SUCESSFULLY!');
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
  console.error('❌ Test failed:', err);
  process.exit(1);
});
