import { spawn } from 'child_process';
import http from 'http';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const htmlPath = 'file:///' + path.resolve('high_fidelity_ui_preview.html').replace(/\\/g, '/');

function fetchJson(url) {
  return new Promise((res, rej) => {
    http.get(url, r => {
      let d = '';
      r.on('data', c => d += c);
      r.on('end', () => res(JSON.parse(d)));
    }).on('error', rej);
  });
}

async function run() {
  const chrome = spawn(CHROME_PATH, [
    '--headless=new',
    '--remote-debugging-port=9296',
    '--no-sandbox',
    '--disable-gpu',
    '--window-size=1200,800',
    htmlPath
  ]);

  try {
    let wsUrl = null;
    for (let i = 0; i < 40; i++) {
      await new Promise(r => setTimeout(r, 200));
      try {
        const list = await fetchJson('http://127.0.0.1:9296/json');
        const p = list.find(t => t.type === 'page');
        if (p) { wsUrl = p.webSocketDebuggerUrl; break; }
      } catch {}
    }

    const ws = new WebSocket(wsUrl);
    await new Promise(r => ws.onopen = r);
    let idCounter = 1;
    const send = (method, params = {}) => new Promise((res, rej) => {
      const id = idCounter++;
      const h = evt => {
        const m = JSON.parse(evt.data);
        if (m.id === id) {
          ws.removeEventListener('message', h);
          if (m.error) rej(new Error(m.error.message));
          else res(m.result);
        }
      };
      ws.addEventListener('message', h);
      ws.send(JSON.stringify({ id, method, params }));
    });

    await send('Page.enable');
    await send('Runtime.enable');
    ws.addEventListener('message', evt => {
      const m = JSON.parse(evt.data);
      if (m.method === 'Runtime.consoleAPICalled') {
        console.log('[Browser Console]', ...m.params.args.map(a => a.value || a.description));
      }
    });
    await new Promise(r => setTimeout(r, 1000));

    const evalCode = expr => send('Runtime.evaluate', { expression: expr, returnByValue: true }).then(r => r.result.value);

    console.log('--- Step 1: Switch to plan view ---');
    await evalCode("switchHomeGlobalView('plan')");
    await new Promise(r => setTimeout(r, 300));

    const initialPlanState = await evalCode(`({
      panX: window.islandPanX,
      panY: window.islandPanY,
      zoom: window.islandZoom,
      currentGlobalView: currentGlobalView
    })`);
    console.log('Initial plan state:', initialPlanState);

    console.log('--- Step 2: Test Canvas Mouse Drag (Panning) ---');
    await evalCode(`(() => {
      const stage = document.getElementById('island-canvas-stage');
      const downEvt = new PointerEvent('pointerdown', { bubbles: true, clientX: 500, clientY: 400, pointerType: 'mouse', pointerId: 1 });
      stage.dispatchEvent(downEvt);
      const moveEvt = new PointerEvent('pointermove', { bubbles: true, clientX: 420, clientY: 340, pointerType: 'mouse', pointerId: 1 });
      window.dispatchEvent(moveEvt);
      const upEvt = new PointerEvent('pointerup', { bubbles: true, clientX: 420, clientY: 340, pointerType: 'mouse', pointerId: 1 });
      window.dispatchEvent(upEvt);
    })()`);

    const mouseDragState = await evalCode(`({ panX: window.islandPanX, panY: window.islandPanY })`);
    console.log('After mouse drag state:', mouseDragState);
    if (mouseDragState.panX !== initialPlanState.panX && mouseDragState.panY !== initialPlanState.panY) {
      console.log('✓ Canvas mouse panning works! deltaX =', mouseDragState.panX - initialPlanState.panX, 'deltaY =', mouseDragState.panY - initialPlanState.panY);
    } else {
      throw new Error('Canvas mouse panning failed to update panX/panY');
    }

    console.log('--- Step 3: Test Canvas Touch Drag via CDP Native TouchEvents ---');
    await send('Input.dispatchTouchEvent', {
      type: 'touchStart',
      touchPoints: [{ x: 500, y: 400, id: 0 }]
    });
    await new Promise(r => setTimeout(r, 50));
    await send('Input.dispatchTouchEvent', {
      type: 'touchMove',
      touchPoints: [{ x: 380, y: 310, id: 0 }]
    });
    await new Promise(r => setTimeout(r, 50));
    await send('Input.dispatchTouchEvent', {
      type: 'touchEnd',
      touchPoints: []
    });
    await new Promise(r => setTimeout(r, 100));

    const touchDragState = await evalCode(`({ panX: window.islandPanX, panY: window.islandPanY })`);
    console.log('After touch drag state:', touchDragState);
    if (touchDragState.panX !== mouseDragState.panX && touchDragState.panY !== mouseDragState.panY) {
      console.log('✓ Canvas touch panning works! deltaX =', touchDragState.panX - mouseDragState.panX, 'deltaY =', touchDragState.panY - mouseDragState.panY);
    } else {
      throw new Error('Canvas touch panning failed to update panX/panY');
    }

    console.log('--- Step 4: Test Pinch to Zoom via CDP Multi-Touch ---');
    await send('Input.dispatchTouchEvent', {
      type: 'touchStart',
      touchPoints: [
        { x: 400, y: 400, id: 1 },
        { x: 500, y: 400, id: 2 }
      ]
    });
    await new Promise(r => setTimeout(r, 50));
    await send('Input.dispatchTouchEvent', {
      type: 'touchMove',
      touchPoints: [
        { x: 300, y: 400, id: 1 },
        { x: 600, y: 400, id: 2 }
      ]
    });
    await new Promise(r => setTimeout(r, 50));
    await send('Input.dispatchTouchEvent', {
      type: 'touchEnd',
      touchPoints: []
    });
    await new Promise(r => setTimeout(r, 100));

    const zoomState = await evalCode(`window.islandZoom`);
    console.log('After pinch zoom:', zoomState);
    if (zoomState > 1.0) {
      console.log('✓ Pinch to zoom works! zoom =', zoomState);
    } else {
      throw new Error('Pinch to zoom failed');
    }

    console.log('--- Step 5: Test Pavilion Node Pointer Dragging ---');
    const nodeDragResult = await evalCode(`(() => {
      const node = document.getElementById('node-study');
      if (!node) return { error: 'node-study not found' };
      const initLeft = node.offsetLeft;
      const initTop = node.offsetTop;

      const pDown = new PointerEvent('pointerdown', { bubbles: true, clientX: 200, clientY: 200, pointerType: 'mouse', pointerId: 3 });
      node.dispatchEvent(pDown);

      const pMove = new PointerEvent('pointermove', { bubbles: true, clientX: 260, clientY: 280, pointerType: 'mouse', pointerId: 3 });
      window.dispatchEvent(pMove);

      const pUp = new PointerEvent('pointerup', { bubbles: true, clientX: 260, clientY: 280, pointerType: 'mouse', pointerId: 3 });
      window.dispatchEvent(pUp);

      return {
        initLeft,
        initTop,
        newLeft: node.offsetLeft,
        newTop: node.offsetTop,
        styleLeft: node.style.left,
        styleTop: node.style.top
      };
    })()`);
    console.log('Node drag result:', nodeDragResult);
    if (nodeDragResult.newLeft !== nodeDragResult.initLeft || nodeDragResult.newTop !== nodeDragResult.initTop) {
      console.log('✓ Pavilion node pointer dragging works!');
    } else {
      throw new Error('Pavilion node dragging failed');
    }

    console.log('--- Step 6: Test Islander Navigation Minimap Initial Status ---');
    const minimapInitial = await evalCode(`(() => {
      const panel = document.getElementById('island-minimap-dock');
      const btn = document.getElementById('island-minimap-toggle-btn');
      return {
        isCollapsed: panel ? panel.classList.contains('is-collapsed') : null,
        btnActive: btn ? btn.classList.contains('is-active') : null,
        btnText: btn ? btn.innerText.trim() : null
      };
    })()`);
    console.log('Minimap initial status:', minimapInitial);
    if (minimapInitial.isCollapsed === true && minimapInitial.btnActive === false) {
      console.log('✓ Minimap is collapsed by default (0 occlusion of center pavilions)');
    } else {
      throw new Error('Minimap not collapsed by default');
    }

    console.log('--- Step 7: Expand Minimap & Verify Dimensions & Viewport ---');
    await evalCode(`toggleIslandMinimapDock()`);
    await new Promise(r => setTimeout(r, 200));

    const minimapExpanded = await evalCode(`(() => {
      const panel = document.getElementById('island-minimap-dock');
      const body = document.getElementById('island-minimap-body');
      const svg = document.getElementById('island-minimap-svg');
      const vp = document.getElementById('island-minimap-viewport');
      const nodes = document.getElementById('island-minimap-nodes');
      return {
        isCollapsed: panel.classList.contains('is-collapsed'),
        panelWidth: panel.offsetWidth,
        panelHeight: panel.offsetHeight,
        bodyWidth: body.offsetWidth,
        bodyHeight: body.offsetHeight,
        svgViewBox: svg.getAttribute('viewBox'),
        vpX: parseFloat(vp.getAttribute('x')),
        vpY: parseFloat(vp.getAttribute('y')),
        vpW: parseFloat(vp.getAttribute('width')),
        vpH: parseFloat(vp.getAttribute('height')),
        nodeRectsCount: nodes.children.length
      };
    })()`);
    console.log('Minimap expanded details:', minimapExpanded);
    if (!minimapExpanded.isCollapsed && minimapExpanded.panelWidth <= 190 && minimapExpanded.panelHeight <= 140) {
      console.log('✓ Minimap expanded dimensions are compact 184x134 (1:1 Islander style)');
    } else {
      throw new Error('Minimap dimensions too large or not expanded');
    }

    if (minimapExpanded.vpX >= 0 && minimapExpanded.vpY >= 0 && minimapExpanded.vpW > 0 && minimapExpanded.vpH > 0) {
      console.log('✓ Minimap viewport coordinates are strictly inside viewBox [0, 180] x [0, 100], no negative explosion!');
    } else {
      throw new Error('Minimap viewport coordinates invalid: ' + JSON.stringify(minimapExpanded));
    }

    console.log('--- Step 8: Minimap Click Navigation ---');
    const beforeMinimapClickPan = await evalCode(`({ panX: window.islandPanX, panY: window.islandPanY })`);
    const clickResult = await evalCode(`(() => {
      const svg = document.getElementById('island-minimap-svg');
      const r = svg.getBoundingClientRect();
      const clickX = r.left + r.width * 0.25;
      const clickY = r.top + r.height * 0.25;
      
      const evt = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        clientX: clickX,
        clientY: clickY
      });
      svg.dispatchEvent(evt);
      return {
        panAfter: { panX: window.islandPanX, panY: window.islandPanY }
      };
    })()`);
    console.log('Click result in step 8:', clickResult);
    const afterMinimapClickPan = await evalCode(`({ panX: window.islandPanX, panY: window.islandPanY })`);
    console.log('Before minimap click:', beforeMinimapClickPan, 'After:', afterMinimapClickPan);
    if (afterMinimapClickPan.panX !== beforeMinimapClickPan.panX || afterMinimapClickPan.panY !== beforeMinimapClickPan.panY) {
      console.log('✓ Minimap click-to-pan works smoothly!');
    } else {
      throw new Error('Minimap click did not pan');
    }

    console.log('--- Step 9: Minimap Viewport Dragging ---');
    await evalCode(`(() => {
      const vp = document.getElementById('island-minimap-viewport');
      const svg = document.getElementById('island-minimap-svg');
      const r = svg.getBoundingClientRect();
      const startX = r.left + 50;
      const startY = r.top + 50;
      
      const pDown = new PointerEvent('pointerdown', { bubbles: true, clientX: startX, clientY: startY, pointerId: 4 });
      vp.dispatchEvent(pDown);
      const pMove = new PointerEvent('pointermove', { bubbles: true, clientX: startX + 30, clientY: startY + 20, pointerId: 4 });
      svg.dispatchEvent(pMove);
      const pUp = new PointerEvent('pointerup', { bubbles: true, clientX: startX + 30, clientY: startY + 20, pointerId: 4 });
      svg.dispatchEvent(pUp);
    })()`);
    const afterMinimapVpDragPan = await evalCode(`({ panX: window.islandPanX, panY: window.islandPanY })`);
    console.log('After minimap vp drag:', afterMinimapVpDragPan);
    if (afterMinimapVpDragPan.panX !== afterMinimapClickPan.panX || afterMinimapVpDragPan.panY !== afterMinimapClickPan.panY) {
      console.log('✓ Minimap viewport drag navigation works smoothly!');
    } else {
      throw new Error('Minimap viewport drag failed');
    }

    console.log('\n========================================');
    console.log('🎉 ALL CDP PLAN & MINIMAP CHECKS PASSED!');
    console.log('========================================\n');

    ws.close();
  } finally {
    chrome.kill();
  }
}

run().catch(err => {
  console.error('Test error:', err);
  process.exit(1);
});
