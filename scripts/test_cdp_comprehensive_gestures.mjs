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
    '--remote-debugging-port=9299',
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
        const list = await fetchJson('http://127.0.0.1:9299/json');
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
    await new Promise(r => setTimeout(r, 1000));

    const evalCode = expr => send('Runtime.evaluate', { expression: expr, returnByValue: true }).then(r => r.result.value);

    console.log('==============================================');
    console.log('TEST 1: 规划视图 (PLAN VIEW) 缩放与滑动综合实测');
    console.log('==============================================');

    await evalCode("switchHomeGlobalView('plan')");
    await new Promise(r => setTimeout(r, 200));

    // 1.1 按钮放大
    const zoomInRes = await evalCode(`(() => {
      zoomIslandCanvas(1.18);
      return { zoom: window.islandZoom, badge: document.getElementById('island-zoom-badge')?.textContent };
    })()`);
    console.log('[1.1] 按钮放大 1.18x ->', zoomInRes);
    if (zoomInRes.zoom < 1.1 || zoomInRes.badge !== '118%') throw new Error('Plan button zoom-in failed');

    // 1.2 按钮缩小
    const zoomOutRes = await evalCode(`(() => {
      zoomIslandCanvas(0.85);
      return { zoom: window.islandZoom, badge: document.getElementById('island-zoom-badge')?.textContent };
    })()`);
    console.log('[1.2] 按钮缩小 0.85x ->', zoomOutRes);

    // 1.3 按钮还原
    const resetRes = await evalCode(`(() => {
      resetIslandCanvasZoom();
      return { zoom: window.islandZoom, panX: window.islandPanX, panY: window.islandPanY, badge: document.getElementById('island-zoom-badge')?.textContent };
    })()`);
    console.log('[1.3] 按钮还原 100% ->', resetRes);
    if (resetRes.zoom !== 1.0 || resetRes.badge !== '100%') throw new Error('Plan button reset failed');

    // 1.4 滚轮缩放
    const wheelRes = await evalCode(`(() => {
      const stage = document.getElementById('island-canvas-stage');
      stage.dispatchEvent(new WheelEvent('wheel', {
        clientX: 500, clientY: 400, deltaY: -100, bubbles: true, cancelable: true
      }));
      return { zoom: window.islandZoom, panX: window.islandPanX, panY: window.islandPanY };
    })()`);
    console.log('[1.4] 滚轮向上滚动缩放 ->', wheelRes);
    if (wheelRes.zoom <= 1.0) throw new Error('Plan wheel zoom failed');

    // 1.5 触屏/鼠标单指平移漫游
    const panRes = await evalCode(`(() => {
      const stage = document.getElementById('island-canvas-stage');
      const startX = window.islandPanX;
      stage.dispatchEvent(new PointerEvent('pointerdown', {
        pointerId: 10, pointerType: 'touch', clientX: 400, clientY: 300, bubbles: true
      }));
      window.dispatchEvent(new PointerEvent('pointermove', {
        pointerId: 10, pointerType: 'touch', clientX: 520, clientY: 380, bubbles: true
      }));
      window.dispatchEvent(new PointerEvent('pointerup', {
        pointerId: 10, pointerType: 'touch', clientX: 520, clientY: 380, bubbles: true
      }));
      return { startX, endX: window.islandPanX, diffX: window.islandPanX - startX };
    })()`);
    console.log('[1.5] 单指平移漫游 (+120px) ->', panRes);
    if (Math.abs(panRes.diffX - 120) > 1) throw new Error('Plan single-touch pan failed');

    // 1.6 双指捏合缩放 (Pinch-to-zoom)
    const pinchRes = await evalCode(`(() => {
      const stage = document.getElementById('island-canvas-stage');
      const startZoom = window.islandZoom;
      // 触碰点 1 与 2 间距 200px
      stage.dispatchEvent(new PointerEvent('pointerdown', {
        pointerId: 11, pointerType: 'touch', clientX: 300, clientY: 400, bubbles: true
      }));
      stage.dispatchEvent(new PointerEvent('pointerdown', {
        pointerId: 12, pointerType: 'touch', clientX: 500, clientY: 400, bubbles: true
      }));
      // 放大张开至间距 300px (1.5x)
      window.dispatchEvent(new PointerEvent('pointermove', {
        pointerId: 11, pointerType: 'touch', clientX: 250, clientY: 400, bubbles: true
      }));
      window.dispatchEvent(new PointerEvent('pointermove', {
        pointerId: 12, pointerType: 'touch', clientX: 550, clientY: 400, bubbles: true
      }));
      window.dispatchEvent(new PointerEvent('pointerup', {
        pointerId: 11, pointerType: 'touch', clientX: 250, clientY: 400, bubbles: true
      }));
      window.dispatchEvent(new PointerEvent('pointerup', {
        pointerId: 12, pointerType: 'touch', clientX: 550, clientY: 400, bubbles: true
      }));
      return { startZoom, endZoom: window.islandZoom, ratio: (window.islandZoom / startZoom).toFixed(2) };
    })()`);
    console.log('[1.6] 双指捏合缩放 (间距 200->300px) ->', pinchRes);
    if (pinchRes.endZoom <= pinchRes.startZoom) throw new Error('Plan pinch-to-zoom failed');

    // 1.7 场馆节点拖拽
    const nodeDragRes = await evalCode(`(() => {
      const node = document.getElementById('node-study');
      const initLeft = parseInt(node.style.left) || node.offsetLeft;
      node.dispatchEvent(new PointerEvent('pointerdown', {
        pointerId: 20, pointerType: 'touch', clientX: 200, clientY: 200, bubbles: true
      }));
      window.dispatchEvent(new PointerEvent('pointermove', {
        pointerId: 20, pointerType: 'touch', clientX: 280, clientY: 200, bubbles: true
      }));
      window.dispatchEvent(new PointerEvent('pointerup', {
        pointerId: 20, pointerType: 'touch', clientX: 280, clientY: 200, bubbles: true
      }));
      const newLeft = parseInt(node.style.left) || node.offsetLeft;
      return { initLeft, newLeft, moved: newLeft - initLeft };
    })()`);
    console.log('[1.7] 场馆节点拖拽移动 ->', nodeDragRes);
    if (nodeDragRes.moved <= 0) throw new Error('Plan node drag failed');

    console.log('\n==============================================');
    console.log('TEST 2: 三级脑图 (MINDMAP) 缩放与滑动综合实测');
    console.log('==============================================');

    await evalCode("switchMainSection('tertiary')");
    await new Promise(r => setTimeout(r, 200));

    // 2.1 脑图按钮放大
    const mmZoomInRes = await evalCode(`(() => {
      zoomTertiaryCanvas(1.18);
      return { zoom: window.tertiaryZoom, badge: document.getElementById('tertiary-zoom-badge')?.textContent };
    })()`);
    console.log('[2.1] 脑图按钮放大 1.18x ->', mmZoomInRes);
    if (mmZoomInRes.zoom < 1.1) throw new Error('Mindmap button zoom-in failed');

    // 2.2 脑图按钮缩小
    const mmZoomOutRes = await evalCode(`(() => {
      zoomTertiaryCanvas(0.85);
      return { zoom: window.tertiaryZoom, badge: document.getElementById('tertiary-zoom-badge')?.textContent };
    })()`);
    console.log('[2.2] 脑图按钮缩小 0.85x ->', mmZoomOutRes);

    // 2.3 脑图按钮还原
    const mmResetRes = await evalCode(`(() => {
      resetTertiaryCanvasZoom();
      return { zoom: window.tertiaryZoom, panX: window.tertiaryPanX, panY: window.tertiaryPanY, badge: document.getElementById('tertiary-zoom-badge')?.textContent };
    })()`);
    console.log('[2.3] 脑图按钮还原 100% ->', mmResetRes);
    if (mmResetRes.zoom !== 1.0 || mmResetRes.badge !== '100%') throw new Error('Mindmap button reset failed');

    // 2.4 脑图滚轮缩放
    const mmWheelRes = await evalCode(`(() => {
      const stage = document.getElementById('tertiary-canvas-stage');
      stage.dispatchEvent(new WheelEvent('wheel', {
        clientX: 500, clientY: 400, deltaY: -100, bubbles: true, cancelable: true
      }));
      return { zoom: window.tertiaryZoom, panX: window.tertiaryPanX, panY: window.tertiaryPanY };
    })()`);
    console.log('[2.4] 脑图滚轮向上滚动缩放 ->', mmWheelRes);
    if (mmWheelRes.zoom <= 1.0) throw new Error('Mindmap wheel zoom failed');

    // 2.5 脑图触屏/鼠标单指平移漫游
    const mmPanRes = await evalCode(`(() => {
      const stage = document.getElementById('tertiary-canvas-stage');
      const startX = window.tertiaryPanX;
      stage.dispatchEvent(new PointerEvent('pointerdown', {
        pointerId: 30, pointerType: 'touch', clientX: 400, clientY: 300, bubbles: true
      }));
      window.dispatchEvent(new PointerEvent('pointermove', {
        pointerId: 30, pointerType: 'touch', clientX: 550, clientY: 420, bubbles: true
      }));
      window.dispatchEvent(new PointerEvent('pointerup', {
        pointerId: 30, pointerType: 'touch', clientX: 550, clientY: 420, bubbles: true
      }));
      return { startX, endX: window.tertiaryPanX, diffX: window.tertiaryPanX - startX };
    })()`);
    console.log('[2.5] 脑图单指平移漫游 (+150px) ->', mmPanRes);
    if (Math.abs(mmPanRes.diffX - 150) > 1) throw new Error('Mindmap single-touch pan failed');

    // 2.6 脑图双指捏合缩放 (Pinch-to-zoom)
    const mmPinchRes = await evalCode(`(() => {
      const stage = document.getElementById('tertiary-canvas-stage');
      const startZoom = window.tertiaryZoom;
      stage.dispatchEvent(new PointerEvent('pointerdown', {
        pointerId: 31, pointerType: 'touch', clientX: 300, clientY: 400, bubbles: true
      }));
      stage.dispatchEvent(new PointerEvent('pointerdown', {
        pointerId: 32, pointerType: 'touch', clientX: 500, clientY: 400, bubbles: true
      }));
      window.dispatchEvent(new PointerEvent('pointermove', {
        pointerId: 31, pointerType: 'touch', clientX: 200, clientY: 400, bubbles: true
      }));
      window.dispatchEvent(new PointerEvent('pointermove', {
        pointerId: 32, pointerType: 'touch', clientX: 600, clientY: 400, bubbles: true
      }));
      window.dispatchEvent(new PointerEvent('pointerup', {
        pointerId: 31, pointerType: 'touch', clientX: 200, clientY: 400, bubbles: true
      }));
      window.dispatchEvent(new PointerEvent('pointerup', {
        pointerId: 32, pointerType: 'touch', clientX: 600, clientY: 400, bubbles: true
      }));
      return { startZoom, endZoom: window.tertiaryZoom, ratio: (window.tertiaryZoom / startZoom).toFixed(2) };
    })()`);
    console.log('[2.6] 脑图双指捏合缩放 (间距 200->400px) ->', mmPinchRes);
    if (mmPinchRes.endZoom <= mmPinchRes.startZoom) throw new Error('Mindmap pinch-to-zoom failed');

    // 2.7 脑图卡片拖拽与连线重绘
    const cardDragRes = await evalCode(`(() => {
      const card = document.querySelector('.tertiary-card');
      const initLeft = parseInt(card.style.left) || card.offsetLeft;
      card.dispatchEvent(new PointerEvent('pointerdown', {
        pointerId: 40, pointerType: 'touch', clientX: 200, clientY: 200, bubbles: true
      }));
      window.dispatchEvent(new PointerEvent('pointermove', {
        pointerId: 40, pointerType: 'touch', clientX: 300, clientY: 250, bubbles: true
      }));
      window.dispatchEvent(new PointerEvent('pointerup', {
        pointerId: 40, pointerType: 'touch', clientX: 300, clientY: 250, bubbles: true
      }));
      const newLeft = parseInt(card.style.left) || card.offsetLeft;
      return { initLeft, newLeft, moved: newLeft - initLeft };
    })()`);
    console.log('[2.7] 脑图节点卡片拖拽移动 ->', cardDragRes);
    if (cardDragRes.moved <= 0) throw new Error('Mindmap card drag failed');

    console.log('\n🎉 ALL 14 PLAN VIEW & MINDMAP PAN/ZOOM TESTS PASSED 100%!');

    ws.close();
  } finally {
    chrome.kill();
  }
}

run().catch(err => {
  console.error('Test failed with error:', err);
  process.exit(1);
});
