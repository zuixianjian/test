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
    await send('Emulation.setTouchEmulationEnabled', { enabled: true, maxTouchPoints: 5 });
    await new Promise(r => setTimeout(r, 1000));

    const evalCode = expr => send('Runtime.evaluate', { expression: expr, returnByValue: true }).then(r => {
      if (r.exceptionDetails) {
        throw new Error(r.exceptionDetails.exception?.description || r.exceptionDetails.text);
      }
      return r.result.value;
    });

    // Inject helper function into page
    await evalCode(`
      window.__createTouchEvent = function(type, target, touchesData) {
        const touches = touchesData.map((t, idx) => new Touch({
          identifier: t.id || (idx + 1),
          target: target,
          clientX: t.clientX,
          clientY: t.clientY,
          screenX: t.clientX,
          screenY: t.clientY,
          pageX: t.clientX,
          pageY: t.clientY
        }));
        return new TouchEvent(type, {
          touches: type === 'touchend' ? [] : touches,
          targetTouches: type === 'touchend' ? [] : touches,
          changedTouches: touches,
          bubbles: true,
          cancelable: true
        });
      };
    `);

    // ==============================================================
    console.log('==============================================');
    console.log('TEST 1: 规划视图 (PLAN VIEW) 缩放与滑动综合实测');
    console.log('==============================================');
    // ==============================================================

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

    // 1.5 PointerEvent 单指平移漫游
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
    console.log('[1.5] Pointer 单指平移漫游 (+120px) ->', panRes);
    if (Math.abs(panRes.diffX - 120) > 1) throw new Error('Plan single-pointer pan failed');

    // 1.6 PointerEvent 双指捏合缩放 (Pinch-to-zoom)
    const pinchRes = await evalCode(`(() => {
      const stage = document.getElementById('island-canvas-stage');
      const startZoom = window.islandZoom;
      stage.dispatchEvent(new PointerEvent('pointerdown', {
        pointerId: 11, pointerType: 'touch', clientX: 300, clientY: 400, bubbles: true
      }));
      stage.dispatchEvent(new PointerEvent('pointerdown', {
        pointerId: 12, pointerType: 'touch', clientX: 500, clientY: 400, bubbles: true
      }));
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
    console.log('[1.6] Pointer 双指捏合缩放 (间距 200->300px) ->', pinchRes);
    if (pinchRes.endZoom <= pinchRes.startZoom) throw new Error('Plan pinch-to-zoom failed');

    // 1.7 原生 TouchEvent 单指平移漫游实测
    const nativeTouchPanRes = await evalCode(`(() => {
      const stage = document.getElementById('island-canvas-stage');
      const startX = window.islandPanX;
      stage.dispatchEvent(window.__createTouchEvent('touchstart', stage, [{ clientX: 300, clientY: 300 }]));
      stage.dispatchEvent(window.__createTouchEvent('touchmove', stage, [{ clientX: 420, clientY: 350 }]));
      stage.dispatchEvent(window.__createTouchEvent('touchend', stage, [{ clientX: 420, clientY: 350 }]));
      return { startX, endX: window.islandPanX, diffX: window.islandPanX - startX };
    })()`);
    console.log('[1.7] 原生 TouchEvent 单指平移漫游 (+120px) ->', nativeTouchPanRes);
    if (Math.abs(nativeTouchPanRes.diffX - 120) > 1) throw new Error('Plan native TouchEvent pan failed');

    // 1.8 原生 TouchEvent 双指双向捏合缩放实测
    const nativeTouchPinchRes = await evalCode(`(() => {
      const stage = document.getElementById('island-canvas-stage');
      const startZoom = window.islandZoom;
      stage.dispatchEvent(window.__createTouchEvent('touchstart', stage, [
        { id: 1, clientX: 200, clientY: 300 },
        { id: 2, clientX: 400, clientY: 300 }
      ]));
      stage.dispatchEvent(window.__createTouchEvent('touchmove', stage, [
        { id: 1, clientX: 150, clientY: 300 },
        { id: 2, clientX: 450, clientY: 300 }
      ]));
      stage.dispatchEvent(window.__createTouchEvent('touchend', stage, []));
      return { startZoom, endZoom: window.islandZoom, ratio: (window.islandZoom / startZoom).toFixed(2) };
    })()`);
    console.log('[1.8] 原生 TouchEvent 双指捏合缩放 (间距 200->300px) ->', nativeTouchPinchRes);
    if (nativeTouchPinchRes.endZoom <= nativeTouchPinchRes.startZoom) throw new Error('Plan native TouchEvent pinch-zoom failed');

    // 1.9 场馆节点拖拽移动
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
    console.log('[1.9] 场馆节点拖拽移动 ->', nodeDragRes);
    if (nodeDragRes.moved <= 0) throw new Error('Plan node drag failed');

    // ==============================================================
    console.log('\n==============================================');
    console.log('TEST 2: 三级脑图 (MINDMAP) 缩放与滑动综合实测');
    console.log('==============================================');
    // ==============================================================

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

    // 2.5 脑图原生 TouchEvent 单指平移漫游
    const mmTouchPanRes = await evalCode(`(() => {
      const stage = document.getElementById('tertiary-canvas-stage');
      const startX = window.tertiaryPanX;
      stage.dispatchEvent(window.__createTouchEvent('touchstart', stage, [{ clientX: 400, clientY: 300 }]));
      stage.dispatchEvent(window.__createTouchEvent('touchmove', stage, [{ clientX: 550, clientY: 400 }]));
      stage.dispatchEvent(window.__createTouchEvent('touchend', stage, [{ clientX: 550, clientY: 400 }]));
      return { startX, endX: window.tertiaryPanX, diffX: window.tertiaryPanX - startX };
    })()`);
    console.log('[2.5] 脑图原生 TouchEvent 单指平移 (+150px) ->', mmTouchPanRes);
    if (Math.abs(mmTouchPanRes.diffX - 150) > 1) throw new Error('Mindmap touch pan failed');

    // 2.6 脑图原生 TouchEvent 双指捏合缩放
    const mmTouchPinchRes = await evalCode(`(() => {
      const stage = document.getElementById('tertiary-canvas-stage');
      const startZoom = window.tertiaryZoom;
      stage.dispatchEvent(window.__createTouchEvent('touchstart', stage, [
        { id: 1, clientX: 300, clientY: 400 },
        { id: 2, clientX: 500, clientY: 400 }
      ]));
      stage.dispatchEvent(window.__createTouchEvent('touchmove', stage, [
        { id: 1, clientX: 200, clientY: 400 },
        { id: 2, clientX: 600, clientY: 400 }
      ]));
      stage.dispatchEvent(window.__createTouchEvent('touchend', stage, []));
      return { startZoom, endZoom: window.tertiaryZoom, ratio: (window.tertiaryZoom / startZoom).toFixed(2) };
    })()`);
    console.log('[2.6] 脑图原生 TouchEvent 双指捏合缩放 (间距 200->400px) ->', mmTouchPinchRes);
    if (mmTouchPinchRes.endZoom <= mmTouchPinchRes.startZoom) throw new Error('Mindmap touch pinch-zoom failed');

    // 2.7 脑图卡片拖拽与连线联动
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
    console.log('[2.7] 脑图卡片拖拽移动 ->', cardDragRes);
    if (cardDragRes.moved <= 0) throw new Error('Mindmap card drag failed');

    // ==============================================================
    console.log('\n==============================================');
    console.log('TEST 3: 执行视图当日卡片轮播 (EXEC DAY CAROUSEL) 跟手滑动与卡片切换实测');
    console.log('==============================================');
    // ==============================================================

    await evalCode("switchMainSection('island')");
    await evalCode("switchHomeGlobalView('exec')");
    await new Promise(r => setTimeout(r, 200));

    // Ensure at least 3 cards exist in carousel for gesture test
    await evalCode(`(() => {
      const deck = document.getElementById('day-card-deck');
      if (deck.querySelectorAll('.exec-task-card').length < 3) {
        deck.innerHTML = \`
          <div class="exec-task-card card-active" id="test-card-0"><h3>Card 0</h3></div>
          <div class="exec-task-card card-next" id="test-card-1"><h3>Card 1</h3></div>
          <div class="exec-task-card card-far-next" id="test-card-2"><h3>Card 2</h3></div>
        \`;
      }
      updateDayCarousel();
    })()`);

    // 3.1 触摸滑动过程中的实时视觉位移跟手实测
    const liveDragRes = await evalCode(`(() => {
      const stage = document.getElementById('exec-carousel-stage');
      const deck = document.getElementById('day-card-deck');
      stage.dispatchEvent(window.__createTouchEvent('touchstart', stage, [{ clientX: 300, clientY: 400 }]));
      stage.dispatchEvent(window.__createTouchEvent('touchmove', stage, [{ clientX: 220, clientY: 400 }]));
      const liveTransform = deck.style.transform;
      stage.dispatchEvent(window.__createTouchEvent('touchend', stage, [{ clientX: 220, clientY: 400 }]));
      return { liveTransform, hasTransform: liveTransform.includes('translateX') };
    })()`);
    console.log('[3.1] 触摸移动实时跟手位移 ->', liveDragRes);
    if (!liveDragRes.hasTransform) throw new Error('Carousel live drag transform failed');

    // 3.2 触摸滑动释放后卡片切换实测 (向左滑动切换到下一个卡片)
    const swipeNextRes = await evalCode(`(() => {
      const stage = document.getElementById('exec-carousel-stage');
      const initId = document.querySelector('.exec-task-card.card-active')?.id;
      stage.dispatchEvent(window.__createTouchEvent('touchstart', stage, [{ clientX: 300, clientY: 400 }]));
      stage.dispatchEvent(window.__createTouchEvent('touchmove', stage, [{ clientX: 200, clientY: 400 }]));
      stage.dispatchEvent(window.__createTouchEvent('touchend', stage, [{ clientX: 200, clientY: 400 }]));
      const newId = document.querySelector('.exec-task-card.card-active')?.id;
      return { initId, newId, switched: newId !== initId };
    })()`);
    console.log('[3.2] 触摸左滑切换下一张卡片 ->', swipeNextRes);
    if (!swipeNextRes.switched) throw new Error('Carousel touch swipe-next failed');

    // 3.3 触摸右滑切换上一张卡片实测
    const swipePrevRes = await evalCode(`(() => {
      const stage = document.getElementById('exec-carousel-stage');
      const initId = document.querySelector('.exec-task-card.card-active')?.id;
      stage.dispatchEvent(window.__createTouchEvent('touchstart', stage, [{ clientX: 200, clientY: 400 }]));
      stage.dispatchEvent(window.__createTouchEvent('touchmove', stage, [{ clientX: 310, clientY: 400 }]));
      stage.dispatchEvent(window.__createTouchEvent('touchend', stage, [{ clientX: 310, clientY: 400 }]));
      const newId = document.querySelector('.exec-task-card.card-active')?.id;
      return { initId, newId, switched: newId !== initId };
    })()`);
    console.log('[3.3] 触摸右滑切换上一张卡片 ->', swipePrevRes);
    if (!swipePrevRes.switched) throw new Error('Carousel touch swipe-prev failed');

    // 3.4 桌面端鼠标/Pointer 拖拽滑动实测
    const pointerDragRes = await evalCode(`(() => {
      const stage = document.getElementById('exec-carousel-stage');
      const initId = document.querySelector('.exec-task-card.card-active')?.id;
      stage.dispatchEvent(new PointerEvent('pointerdown', {
        pointerId: 99, pointerType: 'mouse', clientX: 400, clientY: 300, bubbles: true
      }));
      window.dispatchEvent(new PointerEvent('pointermove', {
        pointerId: 99, pointerType: 'mouse', clientX: 280, clientY: 300, bubbles: true
      }));
      window.dispatchEvent(new PointerEvent('pointerup', {
        pointerId: 99, pointerType: 'mouse', clientX: 280, clientY: 300, bubbles: true
      }));
      const newId = document.querySelector('.exec-task-card.card-active')?.id;
      return { initId, newId, switched: newId !== initId };
    })()`);
    console.log('[3.4] 鼠标拖拽左滑切换卡片 ->', pointerDragRes);
    if (!pointerDragRes.switched) throw new Error('Carousel mouse drag failed');

    // ==============================================================
    console.log('\n==============================================');
    console.log('TEST 4: CSS touch-action 与全局可滑动性实测');
    console.log('==============================================');
    // ==============================================================

    const touchActionCheck = await evalCode(`(() => {
      const rootWrapper = document.querySelector('.youth-island-plugin-root') || document.body;
      const computedRoot = window.getComputedStyle(rootWrapper).touchAction;
      const stage = document.getElementById('island-canvas-stage');
      const computedStage = stage ? window.getComputedStyle(stage).touchAction : '';
      const carousel = document.getElementById('exec-carousel-stage');
      const computedCarousel = carousel ? window.getComputedStyle(carousel).touchAction : '';
      const launcher = document.querySelector('.a-my-island-plugin-launcher');
      const computedLauncher = launcher ? window.getComputedStyle(launcher).touchAction : '';
      const weekBoard = document.getElementById('exec-view-week-container');
      const computedWeek = weekBoard ? window.getComputedStyle(weekBoard).touchAction : '';

      return {
        rootNotNone: computedRoot !== 'none',
        rootTouchAction: computedRoot,
        stageTouchAction: computedStage,
        carouselTouchAction: computedCarousel,
        launcherTouchAction: computedLauncher,
        weekTouchAction: computedWeek
      };
    })()`);
    console.log('[4.1] touch-action 规范验证 ->', touchActionCheck);
    if (!touchActionCheck.rootNotNone && touchActionCheck.rootTouchAction === 'none') {
      throw new Error('Root container still has touch-action: none !important');
    }

    console.log('\n🎉 ALL 18 GESTURE, SLIDING, PAN & ZOOM COMPREHENSIVE TESTS PASSED 100%!');

    ws.close();
  } finally {
    chrome.kill();
  }
}

run().catch(err => {
  console.error('Test failed with error:', err);
  process.exit(1);
});
