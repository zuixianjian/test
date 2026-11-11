import { spawn } from 'child_process';
import http from 'http';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const htmlPath = 'file:///' + path.resolve('high_fidelity_ui_preview.html').replace(/\\/g, '/');

async function run() {
  console.log('Testing Goal Cards Dock: Adaptive width for 1, 2, and 3 cards...');
  const chromeProc = spawn(CHROME_PATH, [
    '--headless=new',
    '--remote-debugging-port=9277',
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
      const list = await fetchJson('http://127.0.0.1:9277/json');
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

  // Make sure we are in exec view
  await evalCode(`switchHomeGlobalView('exec');`);
  await new Promise(r => setTimeout(r, 300));

  // -------------------------------------------------------------------------
  // Case 1: Exactly 1 Active Goal Card
  // -------------------------------------------------------------------------
  console.log('\n--- Case 1: Testing 1 Active Goal Card ---');
  await evalCode(`(() => {
    window.GANTT_PROJECTS = [{
      id: 'p-test-1',
      title: '数学压轴题满分冲刺',
      category: '学业攻坚',
      pavilion: 'study',
      desc: '每日一道几何综合压轴题攻坚',
      startDate: '2026-11-01',
      endDate: '2026-11-30',
      completedDays: ['2026-11-01', '2026-11-02']
    }];
    renderHomeSemesterGoalsBanner();
  })()`);
  await new Promise(r => setTimeout(r, 200));

  const check1 = await evalCode(`(() => {
    const dock = document.getElementById('island-goal-cards-dock');
    const list = document.getElementById('island-goal-cards-list');
    const card = list.querySelector('.island-goal-item-card');
    const dockRect = dock.getBoundingClientRect();
    const cardRect = card ? card.getBoundingClientRect() : null;

    return {
      dockWidth: dockRect.width,
      cardWidth: cardRect ? cardRect.width : 0,
      blankRightSpace: cardRect ? (dockRect.right - cardRect.right) : 0,
      dockLeft: dockRect.left,
      dockRight: dockRect.right
    };
  })()`);
  console.log('Case 1 (1 card) metrics:', check1);

  if (check1.cardWidth < 290 || check1.cardWidth > 310) {
    throw new Error('Card width changed unexpectedly: ' + check1.cardWidth);
  }
  // Dock should be snugly wrapped around 1 card (~320px), NOT 960px!
  if (check1.dockWidth > 360) {
    throw new Error('Dock failed to adapt width for 1 card, got ' + check1.dockWidth + ' (expected <= 350px)');
  }
  // Blank space on right should be around padding (~10px), NOT a huge 600px+ void!
  if (check1.blankRightSpace > 30) {
    throw new Error('Blank space on the right side is too large: ' + check1.blankRightSpace + 'px');
  }
  console.log('✅ PASS: Dock snugly wrapped around 1 card with width ' + check1.dockWidth.toFixed(1) + 'px and zero right-side void');

  // -------------------------------------------------------------------------
  // Case 2: Exactly 2 Active Goal Cards
  // -------------------------------------------------------------------------
  console.log('\n--- Case 2: Testing 2 Active Goal Cards ---');
  await evalCode(`(() => {
    window.GANTT_PROJECTS = [
      {
        id: 'p-test-1',
        title: '数学压轴题满分冲刺',
        category: '学业攻坚',
        pavilion: 'study',
        desc: '每日一道几何综合压轴题攻坚',
        startDate: '2026-11-01',
        endDate: '2026-11-30',
        completedDays: ['2026-11-01', '2026-11-02']
      },
      {
        id: 'p-test-2',
        title: '书法篆书临摹打磨',
        category: '兴趣特长',
        pavilion: 'dojo',
        desc: '石鼓文临习与笔力修养',
        startDate: '2026-11-05',
        endDate: '2026-11-25',
        completedDays: ['2026-11-05']
      }
    ];
    renderHomeSemesterGoalsBanner();
  })()`);
  await new Promise(r => setTimeout(r, 200));

  const check2 = await evalCode(`(() => {
    const dock = document.getElementById('island-goal-cards-dock');
    const cards = Array.from(document.querySelectorAll('.island-goal-item-card'));
    const dockRect = dock.getBoundingClientRect();
    const lastCardRect = cards[1].getBoundingClientRect();

    return {
      dockWidth: dockRect.width,
      cardCount: cards.length,
      card0Width: cards[0].getBoundingClientRect().width,
      card1Width: lastCardRect.width,
      blankRightSpace: dockRect.right - lastCardRect.right
    };
  })()`);
  console.log('Case 2 (2 cards) metrics:', check2);

  if (check2.card0Width < 290 || check2.card0Width > 310) {
    throw new Error('Card width changed: ' + check2.card0Width);
  }
  // Dock should wrap around 2 cards (300*2 + 10 gap + 20 pad = 630px)
  if (check2.dockWidth > 670 || check2.dockWidth < 600) {
    throw new Error('Dock failed to adapt width for 2 cards: ' + check2.dockWidth);
  }
  if (check2.blankRightSpace > 30) {
    throw new Error('Blank space on the right side is too large for 2 cards: ' + check2.blankRightSpace);
  }
  console.log('✅ PASS: Dock snugly wrapped around 2 cards with width ' + check2.dockWidth.toFixed(1) + 'px');

  // -------------------------------------------------------------------------
  // Case 3: Exactly 3 Active Goal Cards
  // -------------------------------------------------------------------------
  console.log('\n--- Case 3: Testing 3 Active Goal Cards ---');
  await evalCode(`(() => {
    window.GANTT_PROJECTS = [
      {
        id: 'p-test-1',
        title: '数学压轴题满分冲刺',
        category: '学业攻坚',
        pavilion: 'study',
        desc: '每日一道几何综合压轴题攻坚',
        startDate: '2026-11-01',
        endDate: '2026-11-30',
        completedDays: ['2026-11-01']
      },
      {
        id: 'p-test-2',
        title: '书法篆书临摹打磨',
        category: '兴趣特长',
        pavilion: 'dojo',
        desc: '石鼓文临习与笔力修养',
        startDate: '2026-11-05',
        endDate: '2026-11-25',
        completedDays: ['2026-11-05']
      },
      {
        id: 'p-test-3',
        title: '曾国藩家书精读践行',
        category: '修身立宪',
        pavilion: 'cultivation',
        desc: '日课反省与晨起静坐',
        startDate: '2026-11-01',
        endDate: '2026-11-30',
        completedDays: ['2026-11-01', '2026-11-02']
      }
    ];
    renderHomeSemesterGoalsBanner();
  })()`);
  await new Promise(r => setTimeout(r, 200));

  const check3 = await evalCode(`(() => {
    const dock = document.getElementById('island-goal-cards-dock');
    const cards = Array.from(document.querySelectorAll('.island-goal-item-card'));
    const dockRect = dock.getBoundingClientRect();
    const lastCardRect = cards[2].getBoundingClientRect();

    return {
      dockWidth: dockRect.width,
      cardCount: cards.length,
      cardWidths: cards.map(c => c.getBoundingClientRect().width),
      blankRightSpace: dockRect.right - lastCardRect.right
    };
  })()`);
  console.log('Case 3 (3 cards) metrics:', check3);

  if (check3.cardWidths.some(w => w < 290 || w > 310)) {
    throw new Error('Card widths inconsistent: ' + JSON.stringify(check3.cardWidths));
  }
  // Dock should wrap around 3 cards (300*3 + 20 gap + 20 pad = 940px)
  if (check3.dockWidth > 960 || check3.dockWidth < 900) {
    throw new Error('Dock width incorrect for 3 cards: ' + check3.dockWidth);
  }
  console.log('✅ PASS: Dock comfortably fits 3 cards with width ' + check3.dockWidth.toFixed(1) + 'px and zero right-side void');

  console.log('\n🎉 ALL GOAL DOCK ADAPTIVE WIDTH VERIFICATIONS PASSED SUCESSFULLY!');
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
