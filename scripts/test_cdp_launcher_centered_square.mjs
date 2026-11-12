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
  console.log('Testing Bottom Launcher: Square Buttons, Adaptive Width Container, Horizontally Centered...');
  const chromeProc = spawn(CHROME_PATH, [
    '--headless=new',
    '--remote-debugging-port=9291',
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
      const list = await fetchJson('http://127.0.0.1:9291/json');
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

  // Match Obsidian plugin full-width mode
  await evalCode(`
    (() => {
      const wrapper = document.getElementById('ipad-wrapper');
      if (wrapper) wrapper.classList.remove('in-frame-mode');
    })()
  `);
  await new Promise(r => setTimeout(r, 200));

  try {
    // -------------------------------------------------------------------------
    // TEST 1: Square Buttons & Centered Launcher in 1200x800 Viewport
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
          return {
            id: b.id,
            width: bRect.width,
            height: bRect.height,
            isSquare: Math.abs(bRect.width - bRect.height) < 0.5
          };
        });

        const launcherCenterX = lRect.left + lRect.width / 2;
        const windowCenterX = window.innerWidth / 2;

        return {
          windowWidth: window.innerWidth,
          windowHeight: window.innerHeight,
          launcherWidth: lRect.width,
          launcherLeft: lRect.left,
          launcherRight: window.innerWidth - lRect.right,
          launcherCenterX,
          windowCenterX,
          centerOffset: Math.abs(launcherCenterX - windowCenterX),
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
      centerOffset: metrics1200.centerOffset,
      launcherBottomOffset: metrics1200.launcherBottomOffset,
      buttonsCount: metrics1200.buttonsCount,
      sampleBtnWidth: metrics1200.buttons[0]?.width,
      sampleBtnHeight: metrics1200.buttons[0]?.height
    });

    // Check all buttons are squares of 58px
    for (const b of metrics1200.buttons) {
      if (Math.abs(b.width - 58) > 0.5 || Math.abs(b.height - 58) > 0.5) {
        throw new Error(`Button ${b.id} is not 58x58 square: width=${b.width}, height=${b.height}`);
      }
    }
    console.log(`✔ All ${metrics1200.buttonsCount} buttons verified as exact 58x58 squares.`);

    // Check launcher is centered horizontally
    if (metrics1200.centerOffset > 1.0) {
      throw new Error(`Launcher is not centered: center offset=${metrics1200.centerOffset}px`);
    }
    console.log(`✔ Launcher is horizontally centered in 1200px viewport (center offset = ${metrics1200.centerOffset.toFixed(2)}px).`);

    // Check container width is adaptive to buttons (not stretched full screen)
    if (metrics1200.launcherWidth > 750 || metrics1200.launcherWidth < 650) {
      throw new Error(`Launcher container width expected ~690px, got: ${metrics1200.launcherWidth}px`);
    }
    console.log(`✔ Launcher container width is adaptively hugging buttons (${metrics1200.launcherWidth.toFixed(1)}px).`);

    // Check bottom safety clearance
    if (metrics1200.launcherBottomOffset < 48) {
      throw new Error(`Launcher bottom offset too small: ${metrics1200.launcherBottomOffset}px`);
    }
    console.log(`✔ Bottom safety clearance verified (${metrics1200.launcherBottomOffset}px >= 48px).`);

    // -------------------------------------------------------------------------
    // TEST 2: Button width remains fixed across different screen widths (1024px & 800px)
    // -------------------------------------------------------------------------
    console.log('\n--- Test 2: Fixed Square Size Across Multiple Viewports (1024px & 800px) ---');
    
    // Test 1024x768
    await send('Emulation.setDeviceMetricsOverride', {
      width: 1024,
      height: 768,
      deviceScaleFactor: 1,
      mobile: false
    });
    await new Promise(r => setTimeout(r, 200));

    const metrics1024 = await evalCode(`
      (() => {
        const launcher = document.getElementById('home-island-launcher');
        const lRect = launcher.getBoundingClientRect();
        const b = launcher.querySelector('.a-my-island-plugin-launcher-button');
        const bRect = b.getBoundingClientRect();
        const launcherCenterX = lRect.left + lRect.width / 2;
        const windowCenterX = window.innerWidth / 2;
        return {
          launcherWidth: lRect.width,
          btnWidth: bRect.width,
          btnHeight: bRect.height,
          centerOffset: Math.abs(launcherCenterX - windowCenterX)
        };
      })()
    `);

    console.log('1024x768 Metrics:', metrics1024);
    if (Math.abs(metrics1024.btnWidth - 58) > 0.5 || Math.abs(metrics1024.btnHeight - 58) > 0.5) {
      throw new Error(`1024px button is not 58x58 square: ${metrics1024.btnWidth}x${metrics1024.btnHeight}`);
    }
    if (metrics1024.centerOffset > 1.0) {
      throw new Error(`1024px launcher not centered: offset=${metrics1024.centerOffset}px`);
    }

    // Test 800x600
    await send('Emulation.setDeviceMetricsOverride', {
      width: 800,
      height: 600,
      deviceScaleFactor: 1,
      mobile: false
    });
    await new Promise(r => setTimeout(r, 200));

    const metrics800 = await evalCode(`
      (() => {
        const launcher = document.getElementById('home-island-launcher');
        const lRect = launcher.getBoundingClientRect();
        const b = launcher.querySelector('.a-my-island-plugin-launcher-button');
        const bRect = b.getBoundingClientRect();
        const launcherCenterX = lRect.left + lRect.width / 2;
        const windowCenterX = window.innerWidth / 2;
        return {
          launcherWidth: lRect.width,
          btnWidth: bRect.width,
          btnHeight: bRect.height,
          centerOffset: Math.abs(launcherCenterX - windowCenterX)
        };
      })()
    `);

    console.log('800x600 Metrics:', metrics800);
    if (Math.abs(metrics800.btnWidth - 58) > 0.5 || Math.abs(metrics800.btnHeight - 58) > 0.5) {
      throw new Error(`800px button is not 58x58 square: ${metrics800.btnWidth}x${metrics800.btnHeight}`);
    }
    if (metrics800.centerOffset > 1.0) {
      throw new Error(`800px launcher not centered: offset=${metrics800.centerOffset}px`);
    }
    console.log('✔ Buttons remain non-adaptive 58x58 squares across 1200px, 1024px, and 800px viewports!');

    // -------------------------------------------------------------------------
    // TEST 3: Container Width Adapts Dynamically When Island Settings Expand/Collapse
    // -------------------------------------------------------------------------
    console.log('\n--- Test 3: Container Width Adapts Dynamically When Buttons Increase/Decrease ---');
    await send('Emulation.setDeviceMetricsOverride', {
      width: 1200,
      height: 800,
      deviceScaleFactor: 1,
      mobile: false
    });
    await new Promise(r => setTimeout(r, 200));

    const adaptationResult = await evalCode(`
      (() => {
        const launcher = document.getElementById('home-island-launcher');
        const wInitial = launcher.getBoundingClientRect().width;
        
        // Click to expand settings (show 4 sub-setting buttons)
        document.getElementById('launcher-btn-settings').click();
        const wExpanded = launcher.getBoundingClientRect().width;
        const lRectExpanded = launcher.getBoundingClientRect();
        const expandedCenterOffset = Math.abs((lRectExpanded.left + lRectExpanded.width / 2) - (window.innerWidth / 2));
        
        // Click to collapse settings
        document.getElementById('launcher-btn-settings').click();
        const wCollapsed = launcher.getBoundingClientRect().width;
        const lRectCollapsed = launcher.getBoundingClientRect();
        const collapsedCenterOffset = Math.abs((lRectCollapsed.left + lRectCollapsed.width / 2) - (window.innerWidth / 2));

        return {
          wInitial,
          wExpanded,
          wCollapsed,
          expandedCenterOffset,
          collapsedCenterOffset
        };
      })()
    `);

    console.log('Dynamic Width Adaptation Result:', adaptationResult);
    if (adaptationResult.wExpanded <= adaptationResult.wInitial + 200) {
      throw new Error(`Container width did not expand when 4 buttons added: initial=${adaptationResult.wInitial}, expanded=${adaptationResult.wExpanded}`);
    }
    if (Math.abs(adaptationResult.wCollapsed - adaptationResult.wInitial) > 1.0) {
      throw new Error(`Container width did not restore when collapsed: initial=${adaptationResult.wInitial}, collapsed=${adaptationResult.wCollapsed}`);
    }
    if (adaptationResult.expandedCenterOffset > 1.0 || adaptationResult.collapsedCenterOffset > 1.0) {
      throw new Error(`Launcher lost centering during expand/collapse: expandedOffset=${adaptationResult.expandedCenterOffset}, collapsedOffset=${adaptationResult.collapsedCenterOffset}`);
    }
    console.log(`✔ Container adaptively widens from ${adaptationResult.wInitial.toFixed(1)}px to ${adaptationResult.wExpanded.toFixed(1)}px and shrinks back, perfectly centered at all times!`);

    // -------------------------------------------------------------------------
    // TEST 4: Plan View Switch & Minimap Dock Vertical Clearance
    // -------------------------------------------------------------------------
    console.log('\n--- Test 4: Plan View Switch & Minimap Dock Vertical Clearance ---');
    const planResult = await evalCode(`
      (() => {
        if (typeof switchHomeGlobalView === 'function') {
          switchHomeGlobalView('plan');
        }
        const launcher = document.getElementById('home-island-launcher');
        const lRect = launcher.getBoundingClientRect();
        const navDock = document.getElementById('island-navigation-dock');
        const dockRect = navDock ? navDock.getBoundingClientRect() : null;
        return {
          planActive: document.getElementById('launcher-view-plan')?.classList.contains('is-active'),
          launcherTop: lRect.top,
          dockBottom: dockRect ? dockRect.bottom : 0,
          dockVisible: navDock && window.getComputedStyle(navDock).display !== 'none'
        };
      })()
    `);

    console.log('Plan View Result:', planResult);
    if (!planResult.planActive) {
      throw new Error('Failed to switch to plan view');
    }
    if (planResult.dockVisible && planResult.launcherTop - planResult.dockBottom < 0) {
      throw new Error('Minimap dock overlaps launcher');
    }
    console.log('✔ Plan view switch and minimap dock position verified without overlap');

    console.log('\n🎉 ALL CENTERED SQUARE LAUNCHER TESTS PASSED SUCCESSFULLY!');
  } finally {
    ws.close();
    chromeProc.kill();
  }
}

run().catch((err) => {
  console.error('❌ Test failed:', err);
  process.exit(1);
});
