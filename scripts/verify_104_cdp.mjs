import { spawn } from 'child_process';
import http from 'http';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const htmlPath = 'file:///' + path.resolve('high_fidelity_ui_preview.html').replace(/\\/g, '/');

async function run() {
  console.log('Starting comprehensive CDP verification for release 1.0.4...');
  const chromeProc = spawn(CHROME_PATH, [
    '--headless=new',
    '--remote-debugging-port=9230',
    '--no-sandbox',
    '--disable-gpu',
    '--disable-extensions',
    '--window-size=1024,768',
    htmlPath
  ]);

  let wsUrl = null;
  for (let i = 0; i < 40; i++) {
    await new Promise(r => setTimeout(r, 200));
    try {
      const list = await fetchJson('http://127.0.0.1:9230/json');
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
  await new Promise(r => setTimeout(r, 800));

  const evaluate = async (expr) => {
    const res = await send('Runtime.evaluate', {
      expression: expr,
      returnByValue: true,
      awaitPromise: true
    });
    return res.result.value;
  };

  // 1. Verify 3D Sidebar Buttons
  const sidebarButtonsRes = await evaluate(`(() => {
    const homeLeft = document.querySelector('#home-unified-topbar .btn-toggle-left-sidebar');
    const homeRight = document.querySelector('#home-unified-topbar .btn-toggle-right-sidebar');
    const wsLeft = document.querySelector('#ws-unified-topbar .btn-toggle-left-sidebar');
    const wsRight = document.querySelector('#ws-unified-topbar .btn-toggle-right-sidebar');
    const terLeft = document.querySelector('#tertiary-unified-topbar .btn-toggle-left-sidebar');
    const terRight = document.querySelector('#tertiary-unified-topbar .btn-toggle-right-sidebar');

    let triggered = [];
    window.__toggleObsidianSidebar = (side) => { triggered.push(side); };

    homeLeft.click();
    homeRight.click();

    return {
      homeLeftText: homeLeft?.textContent?.trim(),
      homeRightText: homeRight?.textContent?.trim(),
      wsExists: !!wsLeft && !!wsRight,
      terExists: !!terLeft && !!terRight,
      triggerEvents: triggered
    };
  })()`);

  console.log('✅ Topbar 3D Sidebar buttons check:', sidebarButtonsRes);
  if (!sidebarButtonsRes.homeLeftText.includes('左侧栏') || !sidebarButtonsRes.homeRightText.includes('右侧栏')) {
    throw new Error('Sidebar button label text incorrect!');
  }
  if (sidebarButtonsRes.triggerEvents[0] !== 'left' || sidebarButtonsRes.triggerEvents[1] !== 'right') {
    throw new Error('Sidebar click mapping failed!');
  }

  // 2. Switch to tertiary mindmap workspace & test free multi-touch pinch-to-zoom
  const zoomTestRes = await evaluate(`(() => {
    try {
      switchMainSection('tertiary');
      const stage = document.getElementById('tertiary-canvas-stage');
      if (!stage) return { error: 'stage not found' };

      const initialZoom = window.tertiaryZoom || 1.0;

      // Simulate multi-touch pinch-to-zoom (2 fingers spreading out from 100px to 250px)
      const tStart1 = new Touch({ identifier: 1, target: stage, clientX: 200, clientY: 300 });
      const tStart2 = new Touch({ identifier: 2, target: stage, clientX: 300, clientY: 300 });
      stage.dispatchEvent(new TouchEvent('touchstart', {
        bubbles: true, cancelable: true, touches: [tStart1, tStart2]
      }));

      // Pinch spread
      const tMove1 = new Touch({ identifier: 1, target: stage, clientX: 150, clientY: 300 });
      const tMove2 = new Touch({ identifier: 2, target: stage, clientX: 400, clientY: 300 });
      const moveEvent = new TouchEvent('touchmove', {
        bubbles: true, cancelable: true, touches: [tMove1, tMove2]
      });
      stage.dispatchEvent(moveEvent);

      const afterZoom = window.tertiaryZoom;
      const isPrevented = moveEvent.defaultPrevented;

      stage.dispatchEvent(new TouchEvent('touchend', {
        bubbles: true, cancelable: true, touches: []
      }));

      return {
        initialZoom,
        afterZoom,
        zoomScaledUp: afterZoom > initialZoom * 1.5,
        isPrevented
      };
    } catch (err) {
      return { error: err.message, stack: err.stack };
    }
  })()`);

  console.log('✅ Multi-touch pinch-to-zoom test on canvas stage:', zoomTestRes);
  if (!zoomTestRes.zoomScaledUp || !zoomTestRes.isPrevented) {
    throw new Error('Multi-touch pinch-to-zoom failed to scale canvas or prevent default!');
  }

  // 3. Test card collapse & expand edge line dynamics following
  const edgeFollowRes = await evaluate(`(async () => {
    const card1 = document.getElementById('tcard-1');
    if (!card1) return { error: 'card1 not found' };
    
    // Find connected edge path
    const pathEl = document.querySelector('#tertiary-lines-group path[id^="svg-line-"]');
    const dInitial = pathEl ? pathEl.getAttribute('d') : null;

    // Trigger minimize
    toggleTertiaryCardMinimize('tcard-1');
    const isMinimized = card1.classList.contains('is-minimized');

    // Wait 350ms for dynamics animation loop to complete
    await new Promise(r => setTimeout(r, 360));
    const dAfterMinimize = pathEl ? pathEl.getAttribute('d') : null;

    // Trigger expand again
    toggleTertiaryCardMinimize('tcard-1');
    await new Promise(r => setTimeout(r, 360));
    const dAfterExpand = pathEl ? pathEl.getAttribute('d') : null;

    return {
      isMinimized,
      dInitial,
      dAfterMinimize,
      dAfterExpand,
      dChangedOnMinimize: dInitial !== dAfterMinimize,
      dRestoredOnExpand: dAfterExpand !== dAfterMinimize
    };
  })()`);

  console.log('✅ Edge line following dynamics test on card collapse/expand:', {
    isMinimized: edgeFollowRes.isMinimized,
    dChangedOnMinimize: edgeFollowRes.dChangedOnMinimize,
    dRestoredOnExpand: edgeFollowRes.dRestoredOnExpand
  });

  if (!edgeFollowRes.dChangedOnMinimize) {
    throw new Error('Edge line did not update its path when card was minimized!');
  }

  // 4. Test Edge gestures interception (swipe from left edge)
  const edgeSwipeRes = await evaluate(`(() => {
    const stage = document.getElementById('tertiary-canvas-stage');
    let stopped = false;
    let prevented = false;

    const t = new Touch({ identifier: 9, target: stage, clientX: 10, clientY: 200 });
    const ev = new TouchEvent('touchmove', {
      bubbles: true, cancelable: true, touches: [t]
    });

    stage.dispatchEvent(ev);
    return {
      defaultPrevented: ev.defaultPrevented
    };
  })()`);

  console.log('✅ Edge swipe gesture blocker test:', edgeSwipeRes);
  if (!edgeSwipeRes.defaultPrevented) {
    throw new Error('Edge swipe gesture was not prevented on mindmap stage!');
  }

  ws.close();
  chromeProc.kill();
  console.log('🎉 ALL 1.0.4 COMPREHENSIVE REGRESSION TESTS PASSED 100%!');
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
  console.error('CDP Test failed:', err);
  process.exit(1);
});
