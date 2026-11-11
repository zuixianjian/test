import { spawn } from 'child_process';
import http from 'http';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const htmlPath = 'file:///' + path.resolve('high_fidelity_ui_preview.html').replace(/\\/g, '/');

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

async function run() {
  console.log('Testing Bottom Launcher: Fullscreen horizontal expansion & evenly distributed buttons...');
  const chromeProc = spawn(CHROME_PATH, [
    '--headless=new',
    '--remote-debugging-port=9288',
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
      const list = await fetchJson('http://127.0.0.1:9288/json');
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

  const evalCode = async (expression) => {
    const res = await send('Runtime.evaluate', {
      expression,
      returnByValue: true,
      awaitPromise: true
    });
    if (res.exceptionDetails) {
      throw new Error('Eval failed: ' + JSON.stringify(res.exceptionDetails));
    }
    return res.result.value;
  };

  await new Promise(r => setTimeout(r, 1200));

  // Switch to true fullscreen (remove iPad showcase bezel frame, exactly matching Obsidian plugin runtime)
  await evalCode(`
    (() => {
      const wrapper = document.getElementById('ipad-wrapper');
      if (wrapper) wrapper.classList.remove('in-frame-mode');
    })()
  `);
  await new Promise(r => setTimeout(r, 200));

  try {
    // -------------------------------------------------------------------------
    // TEST 1: 1200x800 Resolution - Launcher expands horizontally across screen
    // -------------------------------------------------------------------------
    console.log('\n--- Test 1: 1200x800 Viewport Verification ---');
    await send('Emulation.setDeviceMetricsOverride', {
      width: 1200,
      height: 800,
      deviceScaleFactor: 1,
      mobile: false
    });
    await new Promise(r => setTimeout(r, 300));

    const metrics1200 = await evalCode(`
      (() => {
        const launcher = document.getElementById('home-island-launcher');
        const lRect = launcher.getBoundingClientRect();
        const lStyle = window.getComputedStyle(launcher);
        
        const buttons = Array.from(launcher.querySelectorAll('.a-my-island-plugin-launcher-button'))
          .filter(b => !b.classList.contains('is-island-control-hidden'));
        
        const btnMetrics = buttons.map(b => {
          const bRect = b.getBoundingClientRect();
          const icon = b.querySelector('.a-my-island-plugin-launcher-icon');
          const label = b.querySelector('.a-my-island-plugin-launcher-label');
          const iStyle = icon ? window.getComputedStyle(icon) : null;
          const lbStyle = label ? window.getComputedStyle(label) : null;
          return {
            id: b.id,
            width: bRect.width,
            height: bRect.height,
            iconWidth: icon ? icon.getBoundingClientRect().width : 0,
            iconFontSize: iStyle ? iStyle.fontSize : '',
            labelFontSize: lbStyle ? lbStyle.fontSize : ''
          };
        });

        return {
          windowWidth: window.innerWidth,
          windowHeight: window.innerHeight,
          launcherWidth: lRect.width,
          launcherLeft: lRect.left,
          launcherRight: window.innerWidth - lRect.right,
          launcherBottomOffset: window.innerHeight - lRect.bottom,
          buttonsCount: buttons.length,
          buttons: btnMetrics
        };
      })()
    `);

    console.log('1200x800 Metrics:', {
      windowWidth: metrics1200.windowWidth,
      launcherWidth: metrics1200.launcherWidth,
      launcherLeft: metrics1200.launcherLeft,
      launcherRight: metrics1200.launcherRight,
      launcherBottomOffset: metrics1200.launcherBottomOffset,
      buttonsCount: metrics1200.buttonsCount,
      sampleBtnWidth: metrics1200.buttons[0]?.width,
      sampleBtnHeight: metrics1200.buttons[0]?.height
    });

    if (metrics1200.launcherWidth < 1150) {
      throw new Error(`Launcher container width expected >= 1150px on 1200px screen, got: ${metrics1200.launcherWidth}px`);
    }
    if (metrics1200.launcherLeft > 20 || metrics1200.launcherRight > 20) {
      throw new Error(`Launcher margins expected around 14px, got left=${metrics1200.launcherLeft}, right=${metrics1200.launcherRight}`);
    }
    if (metrics1200.launcherBottomOffset < 48) {
      throw new Error(`Launcher bottom offset too small (risk of overflow), expected >= 48px, got: ${metrics1200.launcherBottomOffset}px`);
    }

    const btnWidths1200 = metrics1200.buttons.map(b => b.width);
    const minW1200 = Math.min(...btnWidths1200);
    const maxW1200 = Math.max(...btnWidths1200);
    console.log(`1200px Button Width Range: min=${minW1200.toFixed(2)}px, max=${maxW1200.toFixed(2)}px (diff=${(maxW1200 - minW1200).toFixed(2)}px)`);

    if (minW1200 < 100) {
      throw new Error(`Buttons on 1200px screen expected >= 100px wide, got min: ${minW1200}px`);
    }
    if (maxW1200 - minW1200 > 2.0) {
      throw new Error(`Buttons not evenly distributed: width diff=${maxW1200 - minW1200}px exceeds 2.0px`);
    }
    console.log('✔ Test 1 Passed: Launcher is horizontally full and buttons are evenly distributed (~111px each)');

    // -------------------------------------------------------------------------
    // TEST 2: 1024x768 Resolution - Standard tablet screen test
    // -------------------------------------------------------------------------
    console.log('\n--- Test 2: 1024x768 Viewport Verification ---');
    await send('Emulation.setDeviceMetricsOverride', {
      width: 1024,
      height: 768,
      deviceScaleFactor: 1,
      mobile: false
    });
    await new Promise(r => setTimeout(r, 300));

    const metrics1024 = await evalCode(`
      (() => {
        const launcher = document.getElementById('home-island-launcher');
        const lRect = launcher.getBoundingClientRect();
        const buttons = Array.from(launcher.querySelectorAll('.a-my-island-plugin-launcher-button'))
          .filter(b => !b.classList.contains('is-island-control-hidden'));
        
        return {
          windowWidth: window.innerWidth,
          launcherWidth: lRect.width,
          launcherBottomOffset: window.innerHeight - lRect.bottom,
          btnWidths: buttons.map(b => b.getBoundingClientRect().width)
        };
      })()
    `);

    const minW1024 = Math.min(...metrics1024.btnWidths);
    const maxW1024 = Math.max(...metrics1024.btnWidths);
    console.log('1024x768 Metrics:', {
      launcherWidth: metrics1024.launcherWidth,
      launcherBottomOffset: metrics1024.launcherBottomOffset,
      minBtnWidth: minW1024,
      maxBtnWidth: maxW1024
    });

    if (metrics1024.launcherWidth < 980) {
      throw new Error(`Launcher container width expected >= 980px on 1024px screen, got: ${metrics1024.launcherWidth}px`);
    }
    if (minW1024 < 85) {
      throw new Error(`Buttons on 1024px screen expected >= 85px wide, got min: ${minW1024}px`);
    }
    if (maxW1024 - minW1024 > 2.0) {
      throw new Error(`Buttons not evenly distributed on 1024px screen: diff=${maxW1024 - minW1024}px`);
    }
    console.log('✔ Test 2 Passed: 1024x768 tablet screen launcher width and flex button stretch verified (~93px each)');

    // -------------------------------------------------------------------------
    // TEST 3: 800x600 Resolution - Narrower tablet screen test
    // -------------------------------------------------------------------------
    console.log('\n--- Test 3: 800x600 Viewport Verification ---');
    await send('Emulation.setDeviceMetricsOverride', {
      width: 800,
      height: 600,
      deviceScaleFactor: 1,
      mobile: false
    });
    await new Promise(r => setTimeout(r, 300));

    const metrics800 = await evalCode(`
      (() => {
        const launcher = document.getElementById('home-island-launcher');
        const lRect = launcher.getBoundingClientRect();
        const buttons = Array.from(launcher.querySelectorAll('.a-my-island-plugin-launcher-button'))
          .filter(b => !b.classList.contains('is-island-control-hidden'));
        
        return {
          windowWidth: window.innerWidth,
          launcherWidth: lRect.width,
          launcherBottomOffset: window.innerHeight - lRect.bottom,
          btnWidths: buttons.map(b => b.getBoundingClientRect().width)
        };
      })()
    `);

    const minW800 = Math.min(...metrics800.btnWidths);
    const maxW800 = Math.max(...metrics800.btnWidths);
    console.log('800x600 Metrics:', {
      launcherWidth: metrics800.launcherWidth,
      launcherBottomOffset: metrics800.launcherBottomOffset,
      minBtnWidth: minW800,
      maxBtnWidth: maxW800
    });

    if (metrics800.launcherWidth < 760) {
      throw new Error(`Launcher container width expected >= 760px on 800px screen, got: ${metrics800.launcherWidth}px`);
    }
    if (minW800 < 65) {
      throw new Error(`Buttons on 800px screen expected >= 65px wide, got min: ${minW800}px`);
    }
    if (maxW800 - minW800 > 2.0) {
      throw new Error(`Buttons not evenly distributed on 800px screen: diff=${maxW800 - minW800}px`);
    }
    console.log('✔ Test 3 Passed: 800x600 viewport launcher width and flex button stretch verified (~71px each)');

    // -------------------------------------------------------------------------
    // TEST 4: Plan View Switch & Minimap Dock Vertical Clearance
    // -------------------------------------------------------------------------
    console.log('\n--- Test 4: Plan View Switch & Minimap Dock Vertical Clearance ---');
    await send('Emulation.setDeviceMetricsOverride', {
      width: 1200,
      height: 800,
      deviceScaleFactor: 1,
      mobile: false
    });
    await new Promise(r => setTimeout(r, 300));

    const planSwitchResult = await evalCode(`
      (() => {
        // Switch to plan view
        if (typeof switchHomeGlobalView === 'function') {
          switchHomeGlobalView('plan');
        }
        
        const launcher = document.getElementById('home-island-launcher');
        const lRect = launcher.getBoundingClientRect();
        
        const navDock = document.getElementById('island-navigation-dock');
        const dockRect = navDock ? navDock.getBoundingClientRect() : null;
        const dockVisible = navDock && window.getComputedStyle(navDock).display !== 'none';
        
        return {
          planActive: document.getElementById('launcher-view-plan')?.classList.contains('is-active'),
          launcherTop: lRect.top,
          dockVisible,
          dockBottom: dockRect ? dockRect.bottom : 0,
          verticalClearance: dockRect ? (lRect.top - dockRect.bottom) : null
        };
      })()
    `);

    console.log('Plan View Switch Result:', planSwitchResult);

    if (!planSwitchResult.planActive) {
      throw new Error('Failed to switch to plan view');
    }
    if (planSwitchResult.dockVisible && planSwitchResult.verticalClearance !== null) {
      if (planSwitchResult.verticalClearance < 0) {
        throw new Error(`Minimap dock overlaps with bottom launcher: clearance=${planSwitchResult.verticalClearance}px`);
      }
      console.log(`Minimap dock safely positioned above launcher with ${planSwitchResult.verticalClearance.toFixed(1)}px clearance.`);
    }
    console.log('✔ Test 4 Passed: Plan view switch works cleanly without overlap');

    // -------------------------------------------------------------------------
    // TEST 5: Island Settings Expand & Collapse Interaction
    // -------------------------------------------------------------------------
    console.log('\n--- Test 5: Island Settings Expand & Collapse Interaction ---');
    const settingsToggleResult = await evalCode(`
      (() => {
        const settingsBtn = document.getElementById('launcher-btn-settings');
        // Toggle open
        settingsBtn.click();
        const bgBtn = document.getElementById('launcher-btn-bg');
        const isBgVisibleOpen = bgBtn && window.getComputedStyle(bgBtn).display !== 'none';
        
        // Toggle close
        settingsBtn.click();
        const isBgVisibleClosed = bgBtn && window.getComputedStyle(bgBtn).display !== 'none';
        
        return {
          isBgVisibleOpen,
          isBgVisibleClosed
        };
      })()
    `);

    console.log('Settings Toggle Result:', settingsToggleResult);
    if (!settingsToggleResult.isBgVisibleOpen) {
      throw new Error('Background settings button should be visible when island settings expanded');
    }
    if (settingsToggleResult.isBgVisibleClosed) {
      throw new Error('Background settings button should be hidden when island settings collapsed');
    }
    console.log('✔ Test 5 Passed: Settings expand & collapse works properly');

    console.log('\n🎉 ALL FULLSCREEN LAUNCHER TESTS PASSED SUCCESSFULLY!');
  } finally {
    ws.close();
    chromeProc.kill();
  }
}

run().catch((err) => {
  console.error('❌ Test failed:', err);
  process.exit(1);
});
