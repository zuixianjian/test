import { spawn } from 'child_process';
import http from 'http';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const htmlPath = 'file:///' + path.resolve('high_fidelity_ui_preview.html').replace(/\\/g, '/');

async function run() {
  console.log('Diagnosing Planning View: Pan, Zoom, and Node Dragging...');
  const chromeProc = spawn(CHROME_PATH, [
    '--headless=new',
    '--remote-debugging-port=9255',
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
      const list = await fetchJson('http://127.0.0.1:9255/json');
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
  console.log('\n--- Switching to Plan View ---');
  await evalCode(`switchHomeGlobalView('plan');`);
  await new Promise(r => setTimeout(r, 300));

  // 2. Check elements at points on screen
  const hitTest = await evalCode(`(() => {
    const stage = document.getElementById('island-canvas-stage');
    const stageRect = stage.getBoundingClientRect();
    const cx = stageRect.left + stageRect.width / 2;
    const cy = stageRect.top + stageRect.height / 2;
    const hitCenter = document.elementFromPoint(cx, cy);

    const studyNode = document.getElementById('node-study');
    const studyRect = studyNode ? studyNode.getBoundingClientRect() : null;
    const hitStudy = studyRect ? document.elementFromPoint(studyRect.left + studyRect.width / 2, studyRect.top + studyRect.height / 2) : null;

    return {
      stageRect: { width: stageRect.width, height: stageRect.height },
      hitCenter: hitCenter ? { id: hitCenter.id, tag: hitCenter.tagName, cls: hitCenter.className } : null,
      studyRect: studyRect ? { left: studyRect.left, top: studyRect.top, width: studyRect.width, height: studyRect.height } : null,
      hitStudy: hitStudy ? { id: hitStudy.id, tag: hitStudy.tagName, cls: hitStudy.className, closestNode: !!hitStudy.closest('.pavilion-node') } : null
    };
  })()`);
  console.log('Hit test results:', JSON.stringify(hitTest, null, 2));

  // 3. Test Wheel Zoom on stage
  console.log('\n--- Testing Wheel Zoom ---');
  const initialZoom = await evalCode(`islandZoom`);
  const wheelResult = await evalCode(`(() => {
    const stage = document.getElementById('island-canvas-stage');
    const ev = new WheelEvent('wheel', { deltaY: -100, bubbles: true, cancelable: true });
    stage.dispatchEvent(ev);
    return { before: ${initialZoom}, after: islandZoom };
  })()`);
  console.log('Wheel zoom result:', wheelResult);

  // 4. Test Mouse Drag Pan on stage
  console.log('\n--- Testing Mouse Drag Pan ---');
  const initialPan = await evalCode(`({ panX: islandPanX, panY: islandPanY })`);
  const mousePanResult = await evalCode(`(() => {
    const stage = document.getElementById('island-canvas-stage');
    const stageRect = stage.getBoundingClientRect();
    const cx = stageRect.left + stageRect.width / 2;
    const cy = stageRect.top + stageRect.height / 2;
    const hit = document.elementFromPoint(cx, cy);

    // Mousedown on the hit element
    hit.dispatchEvent(new MouseEvent('mousedown', { clientX: cx, clientY: cy, bubbles: true, cancelable: true }));
    // Mousemove on window
    window.dispatchEvent(new MouseEvent('mousemove', { clientX: cx + 100, clientY: cy + 80, bubbles: true, cancelable: true }));
    window.dispatchEvent(new MouseEvent('mouseup', { clientX: cx + 100, clientY: cy + 80, bubbles: true, cancelable: true }));

    return {
      initialPan: ${JSON.stringify(initialPan)},
      afterPan: { panX: islandPanX, panY: islandPanY }
    };
  })()`);
  console.log('Mouse pan result:', mousePanResult);

  // 5. Test Touch Pan and Touch Pinch Zoom on mobile/touch
  console.log('\n--- Testing Touch Pan & Pinch Zoom ---');
  const touchResult = await evalCode(`(() => {
    const stage = document.getElementById('island-canvas-stage');
    const stageRect = stage.getBoundingClientRect();
    const cx = stageRect.left + stageRect.width / 2;
    const cy = stageRect.top + stageRect.height / 2;
    const hit = document.elementFromPoint(cx, cy);

    const panStart = { panX: islandPanX, panY: islandPanY, zoom: islandZoom };

    // Simulate single-finger touch pan
    const touch1 = { identifier: 1, clientX: cx, clientY: cy, target: hit };
    const tStartEv = new Event('touchstart', { bubbles: true, cancelable: true });
    tStartEv.touches = [touch1];
    tStartEv.targetTouches = [touch1];
    hit.dispatchEvent(tStartEv);

    const touch1Move = { identifier: 1, clientX: cx + 80, clientY: cy + 60, target: hit };
    const tMoveEv = new Event('touchmove', { bubbles: true, cancelable: true });
    tMoveEv.touches = [touch1Move];
    tMoveEv.targetTouches = [touch1Move];
    hit.dispatchEvent(tMoveEv);

    const afterSingleTouch = { panX: islandPanX, panY: islandPanY };

    // Simulate pinch
    const tEndEv = new Event('touchend', { bubbles: true, cancelable: true });
    tEndEv.touches = [];
    hit.dispatchEvent(tEndEv);

    const pTouch1 = { identifier: 1, clientX: cx - 50, clientY: cy, target: hit };
    const pTouch2 = { identifier: 2, clientX: cx + 50, clientY: cy, target: hit };
    const pinchStartEv = new Event('touchstart', { bubbles: true, cancelable: true });
    pinchStartEv.touches = [pTouch1, pTouch2];
    hit.dispatchEvent(pinchStartEv);

    const pTouch1M = { identifier: 1, clientX: cx - 100, clientY: cy, target: hit };
    const pTouch2M = { identifier: 2, clientX: cx + 100, clientY: cy, target: hit };
    const pinchMoveEv = new Event('touchmove', { bubbles: true, cancelable: true });
    pinchMoveEv.touches = [pTouch1M, pTouch2M];
    hit.dispatchEvent(pinchMoveEv);

    const afterPinch = { zoom: islandZoom };

    return { panStart, afterSingleTouch, afterPinch };
  })()`);
  console.log('Touch pan & pinch result:', touchResult);

  // 6. Test Node Dragging
  console.log('\n--- Testing Node Dragging ---');
  const nodeDragResult = await evalCode(`(() => {
    const node = document.getElementById('node-study');
    if (!node) return { error: 'node-study not found' };
    const rect = node.getBoundingClientRect();
    const initLeft = node.offsetLeft;
    const initTop = node.offsetTop;
    const initStyleLeft = node.style.left;
    const initStyleTop = node.style.top;

    // Simulate mousedown on node
    node.dispatchEvent(new MouseEvent('mousedown', { clientX: rect.left + 20, clientY: rect.top + 20, bubbles: true, cancelable: true }));
    // Simulate mousemove on window
    window.dispatchEvent(new MouseEvent('mousemove', { clientX: rect.left + 70, clientY: rect.top + 70, bubbles: true, cancelable: true }));
    window.dispatchEvent(new MouseEvent('mouseup', { clientX: rect.left + 70, clientY: rect.top + 70, bubbles: true, cancelable: true }));

    return {
      initLeft, initTop, initStyleLeft, initStyleTop,
      afterStyleLeft: node.style.left,
      afterStyleTop: node.style.top,
      afterLeft: node.offsetLeft,
      afterTop: node.offsetTop
    };
  })()`);
  console.log('Node drag result:', nodeDragResult);

  // 7. Check Touch Events on Pavilion Node (does it have touch listeners? what happens on mobile touch?)
  console.log('\n--- Checking Node Touch Event Listeners ---');
  const nodeTouchCheck = await evalCode(`(() => {
    const node = document.getElementById('node-study');
    return {
      hasTouchHandler: typeof node.ontouchstart !== 'undefined',
      styleTouchAction: window.getComputedStyle(node).touchAction,
      stylePointerEvents: window.getComputedStyle(node).pointerEvents
    };
  })()`);
  console.log('Node touch check:', nodeTouchCheck);

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
  console.error('Diagnosis failed:', err);
  process.exit(1);
});
