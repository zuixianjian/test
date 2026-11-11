import { spawn } from 'child_process';
import http from 'http';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const htmlPath = 'file:///' + path.resolve('high_fidelity_ui_preview.html').replace(/\\/g, '/');

async function run() {
  console.log('Launching headless Chrome via CDP on port 9225...');
  const chromeProc = spawn(CHROME_PATH, [
    '--headless=new',
    '--remote-debugging-port=9225',
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
      const list = await fetchJson('http://127.0.0.1:9225/json');
      const pageTarget = list.find(t => t.type === 'page');
      if (pageTarget && pageTarget.webSocketDebuggerUrl) {
        wsUrl = pageTarget.webSocketDebuggerUrl;
        break;
      }
    } catch {}
  }

  if (!wsUrl) {
    chromeProc.kill();
    throw new Error('Failed to find page target in Chrome');
  }

  console.log('Connected to Page target:', wsUrl);
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

  // 1. Verify Topbar Obsidian Split buttons
  const splitBtnsResult = await evaluate(`(() => {
    const homeLeft = !!document.querySelector('#home-unified-topbar .btn-split-left');
    const homeRight = !!document.querySelector('#home-unified-topbar .btn-split-right');
    const wsLeft = !!document.querySelector('#ws-unified-topbar .btn-split-left');
    const wsRight = !!document.querySelector('#ws-unified-topbar .btn-split-right');
    const terLeft = !!document.querySelector('#tertiary-unified-topbar .btn-split-left');
    const terRight = !!document.querySelector('#tertiary-unified-topbar .btn-split-right');
    return { homeLeft, homeRight, wsLeft, wsRight, terLeft, terRight };
  })()`);

  console.log('✅ Split buttons verification in DOM:', splitBtnsResult);
  if (!splitBtnsResult.homeLeft || !splitBtnsResult.homeRight) {
    throw new Error('Home topbar split buttons missing!');
  }

  // 2. Test split button onclick invocation
  const toggleTestResult = await evaluate(`(() => {
    let triggered = [];
    window.__toggleObsidianSidebar = (side) => { triggered.push(side); };
    document.querySelector('#home-unified-topbar .btn-split-left').click();
    document.querySelector('#home-unified-topbar .btn-split-right').click();
    return triggered;
  })()`);
  console.log('✅ Sidebar click triggering test:', toggleTestResult);
  if (toggleTestResult[0] !== 'left' || toggleTestResult[1] !== 'right') {
    throw new Error('Sidebar click event mapping incorrect!');
  }

  // 3. Test Launcher bounds in 1024px viewport
  const launcherBounds1024 = await evaluate(`(() => {
    const launcher = document.getElementById('home-island-launcher');
    const rect = launcher.getBoundingClientRect();
    const visibleBtns = Array.from(launcher.querySelectorAll('.a-my-island-plugin-launcher-button:not(.is-island-control-hidden)'));
    const details = visibleBtns.map(b => {
      const r = b.getBoundingClientRect();
      const label = b.querySelector('.a-my-island-plugin-launcher-label')?.textContent?.trim();
      return { label, left: Math.round(r.left), right: Math.round(r.right), isOut: r.right > window.innerWidth || r.left < 0 };
    });
    return {
      windowWidth: window.innerWidth,
      launcherRect: { left: Math.round(rect.left), right: Math.round(rect.right), width: Math.round(rect.width) },
      buttonCount: visibleBtns.length,
      allInScreen: details.every(d => !d.isOut),
      details
    };
  })()`);

  console.log('✅ Launcher 1024px evaluation:');
  console.log(' - Viewport width:', launcherBounds1024.windowWidth);
  console.log(' - Visible button count:', launcherBounds1024.buttonCount);
  console.log(' - Launcher width & span:', launcherBounds1024.launcherRect.width, `[${launcherBounds1024.launcherRect.left}px ~ ${launcherBounds1024.launcherRect.right}px]`);
  console.log(' - All buttons strictly inside screen:', launcherBounds1024.allInScreen);
  if (!launcherBounds1024.allInScreen) {
    console.error('Buttons overflow details:', launcherBounds1024.details.filter(d => d.isOut));
    throw new Error('Launcher buttons overflow in 1024px!');
  }

  // 4. Test setting toggle expand / collapse
  const settingsToggleResult = await evaluate(`(() => {
    const btn = document.getElementById('launcher-btn-settings');
    btn.click();
    const bg = document.getElementById('launcher-btn-bg');
    const char = document.getElementById('launcher-btn-char');
    const env = document.getElementById('launcher-btn-env');
    const imm = document.getElementById('launcher-btn-immersive');
    const expanded = !bg.classList.contains('is-island-control-hidden') &&
                     !char.classList.contains('is-island-control-hidden') &&
                     !env.classList.contains('is-island-control-hidden') &&
                     !imm.classList.contains('is-island-control-hidden');
    btn.click();
    const collapsed = bg.classList.contains('is-island-control-hidden') &&
                      imm.classList.contains('is-island-control-hidden');
    return { expanded, collapsed };
  })()`);
  console.log('✅ Settings launcher group toggle result:', settingsToggleResult);
  if (!settingsToggleResult.expanded || !settingsToggleResult.collapsed) {
    throw new Error('Settings launcher group toggle failed!');
  }

  // 5. Test 800px viewport emulation
  await send('Emulation.setDeviceMetricsOverride', {
    width: 800,
    height: 1000,
    deviceScaleFactor: 1,
    mobile: true
  });
  await new Promise(r => setTimeout(r, 400));

  const launcherBounds800 = await evaluate(`(() => {
    const launcher = document.getElementById('home-island-launcher');
    const rect = launcher.getBoundingClientRect();
    const visibleBtns = Array.from(launcher.querySelectorAll('.a-my-island-plugin-launcher-button:not(.is-island-control-hidden)'));
    const details = visibleBtns.map(b => {
      const r = b.getBoundingClientRect();
      const label = b.querySelector('.a-my-island-plugin-launcher-label')?.textContent?.trim();
      return { label, left: Math.round(r.left), right: Math.round(r.right), isOut: r.right > 800 || r.left < 0 };
    });
    return {
      windowWidth: window.innerWidth,
      launcherRect: { left: Math.round(rect.left), right: Math.round(rect.right), width: Math.round(rect.width) },
      buttonCount: visibleBtns.length,
      allInScreen: details.every(d => !d.isOut),
      details
    };
  })()`);

  console.log('✅ Launcher 800px evaluation:');
  console.log(' - Viewport width:', launcherBounds800.windowWidth);
  console.log(' - Visible button count:', launcherBounds800.buttonCount);
  console.log(' - Launcher width & span:', launcherBounds800.launcherRect.width, `[${launcherBounds800.launcherRect.left}px ~ ${launcherBounds800.launcherRect.right}px]`);
  console.log(' - All buttons strictly inside screen:', launcherBounds800.allInScreen);
  if (!launcherBounds800.allInScreen) {
    console.error('Buttons overflow details in 800px:', launcherBounds800.details.filter(d => d.isOut));
    throw new Error('Launcher buttons overflow in 800px!');
  }

  ws.close();
  chromeProc.kill();
  console.log('🎉 ALL CDP REGRESSION TESTS PASSED 100%!');
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
  console.error('Test execution failed:', err);
  process.exit(1);
});
