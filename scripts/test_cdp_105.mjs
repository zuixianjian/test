import { spawn } from 'child_process';
import http from 'http';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const htmlPath = 'file:///' + path.resolve('high_fidelity_ui_preview.html').replace(/\\/g, '/');

async function run() {
  console.log('Testing Release 1.0.5: Bottom Launcher vertical clearance & no downward overflow...');
  const chromeProc = spawn(CHROME_PATH, [
    '--headless=new',
    '--remote-debugging-port=9233',
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
      const list = await fetchJson('http://127.0.0.1:9233/json');
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
  await new Promise(r => setTimeout(r, 600));

  const evaluate = async (expr) => {
    const res = await send('Runtime.evaluate', {
      expression: expr,
      returnByValue: true,
      awaitPromise: true
    });
    return res.result.value;
  };

  // Test across multiple tablet resolutions:
  // 1) 1200x800 (Common 10.1" / 11" Android Tablet)
  // 2) 1024x768 (Standard 4:3 iPad / Android Tablet)
  // 3) 800x600 (Compact 8" Tablet)
  const resolutions = [
    { w: 1200, h: 800, name: '1200x800 Android Tablet' },
    { w: 1024, h: 768, name: '1024x768 iPad/Tablet' },
    { w: 800, h: 600, name: '800x600 Compact Tablet' }
  ];

  for (const res of resolutions) {
    console.log(`\n--- Testing ${res.name} ---`);
    await send('Emulation.setDeviceMetricsOverride', {
      width: res.w,
      height: res.h,
      deviceScaleFactor: 1.5,
      mobile: true
    });
    await new Promise(r => setTimeout(r, 300));

    // A. Check Launcher and its buttons in Execution View
    const execViewCheck = await evaluate(`(() => {
      if (typeof switchHomeGlobalView === 'function') switchHomeGlobalView('exec');
      const launcher = document.getElementById('home-island-launcher');
      const lRect = launcher.getBoundingClientRect();
      const execCenter = document.getElementById('island-execution-center');
      const ecRect = execCenter?.getBoundingClientRect();
      const pagination = execCenter?.querySelector('.exec-carousel-pagination');
      const pagRect = pagination?.getBoundingClientRect();
      const winH = window.innerHeight;

      const buttons = Array.from(launcher.querySelectorAll('.a-my-island-plugin-launcher-button:not(.is-island-control-hidden)')).map(b => {
        const r = b.getBoundingClientRect();
        const label = b.querySelector('.a-my-island-plugin-launcher-label')?.textContent?.trim();
        return {
          label,
          top: Math.round(r.top),
          bottom: Math.round(r.bottom),
          height: Math.round(r.height),
          overflowsDown: r.bottom > winH,
          bottomGap: Math.round(winH - r.bottom)
        };
      });

      return {
        winH,
        launcherBottom: Math.round(lRect.bottom),
        launcherTop: Math.round(lRect.top),
        execCenterBottom: ecRect ? Math.round(ecRect.bottom) : null,
        paginationBottom: pagRect ? Math.round(pagRect.bottom) : null,
        allButtonsStayInsideScreen: buttons.every(b => !b.overflowsDown),
        minBottomGap: Math.min(...buttons.map(b => b.bottomGap)),
        buttons
      };
    })()`);

    console.log(`[Exec View] All buttons inside screen vertically: ${execViewCheck.allButtonsStayInsideScreen}`);
    console.log(`[Exec View] Minimum clearance above screen bottom: ${execViewCheck.minBottomGap}px (Android navbar safe)`);
    console.log(`[Exec View] Launcher top: ${execViewCheck.launcherTop}px, ExecCenter bottom: ${execViewCheck.execCenterBottom}px, Pagination bottom: ${execViewCheck.paginationBottom}px`);

    if (!execViewCheck.allButtonsStayInsideScreen) {
      throw new Error(`Buttons overflowed screen bottom in ${res.name}!`);
    }
    if (execViewCheck.minBottomGap < 30) {
      throw new Error(`Bottom clearance too small in ${res.name}: ${execViewCheck.minBottomGap}px!`);
    }

    // B. Check Planning View and Minimap
    const planViewCheck = await evaluate(`(() => {
      if (typeof switchHomeGlobalView === 'function') switchHomeGlobalView('plan');
      const launcher = document.getElementById('home-island-launcher');
      const lRect = launcher.getBoundingClientRect();
      const minimap = document.getElementById('island-minimap-dock');
      const mRect = minimap?.getBoundingClientRect();
      const winH = window.innerHeight;

      return {
        launcherBottom: Math.round(lRect.bottom),
        minimapBottom: mRect ? Math.round(mRect.bottom) : null,
        minimapTop: mRect ? Math.round(mRect.top) : null,
        minimapAboveLauncher: mRect ? mRect.bottom <= lRect.bottom : true
      };
    })()`);
    console.log(`[Plan View] Minimap bottom: ${planViewCheck.minimapBottom}px, Launcher bottom: ${planViewCheck.launcherBottom}px`);

    // C. Check Settings Toggle Expansion
    const settingsToggleCheck = await evaluate(`(() => {
      if (typeof toggleIslandControlsGroup === 'function') toggleIslandControlsGroup();
      const launcher = document.getElementById('home-island-launcher');
      const lRect = launcher.getBoundingClientRect();
      const visibleBtns = Array.from(launcher.querySelectorAll('.a-my-island-plugin-launcher-button:not(.is-island-control-hidden)')).map(b => {
        const r = b.getBoundingClientRect();
        const label = b.querySelector('.a-my-island-plugin-launcher-label')?.textContent?.trim();
        return {
          label,
          bottom: Math.round(r.bottom),
          overflowsDown: r.bottom > window.innerHeight
        };
      });

      // Restore collapsed state
      if (typeof toggleIslandControlsGroup === 'function') toggleIslandControlsGroup();

      return {
        expandedCount: visibleBtns.length,
        allStayInside: visibleBtns.every(b => !b.overflowsDown)
      };
    })()`);
    console.log(`[Settings Toggle] Expanded buttons (${settingsToggleCheck.expandedCount}) all inside screen: ${settingsToggleCheck.allStayInside}`);
    if (!settingsToggleCheck.allStayInside) {
      throw new Error(`Settings buttons overflowed downwards in ${res.name}!`);
    }
  }

  // D. Check 3D Sidebar Toggle buttons from topbar
  const topbarCheck = await evaluate(`(() => {
    const leftBtn = document.querySelector('#home-unified-topbar .btn-toggle-left-sidebar');
    const rightBtn = document.querySelector('#home-unified-topbar .btn-toggle-right-sidebar');
    return {
      leftLabel: leftBtn?.textContent?.trim(),
      rightLabel: rightBtn?.textContent?.trim(),
      hasLeft: !!leftBtn,
      hasRight: !!rightBtn
    };
  })()`);
  console.log('\n✅ 3D Topbar Sidebar Buttons:', topbarCheck);
  if (!topbarCheck.hasLeft || !topbarCheck.hasRight) {
    throw new Error('Topbar sidebar toggle buttons missing!');
  }

  console.log('\n🎉 ALL CDP VERIFICATION CHECKS PASSED FOR 1.0.5!');
  ws.close();
  chromeProc.kill();
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
