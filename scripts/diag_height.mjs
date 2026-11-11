import { spawn } from 'child_process';
import http from 'http';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const htmlPath = 'file:///' + path.resolve('high_fidelity_ui_preview.html').replace(/\\/g, '/');

async function run() {
  const chromeProc = spawn(CHROME_PATH, [
    '--headless=new',
    '--remote-debugging-port=9232',
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
      const list = await fetchJson('http://127.0.0.1:9232/json');
      const pageTarget = list.find(t => t.type === 'page');
      if (pageTarget) { wsUrl = pageTarget.webSocketDebuggerUrl; break; }
    } catch {}
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

  // Emulate Android Tablet full screen: 1200x800
  await send('Emulation.setDeviceMetricsOverride', {
    width: 1200,
    height: 800,
    deviceScaleFactor: 1.5,
    mobile: true
  });
  await new Promise(r => setTimeout(r, 400));

  const diag = await send('Runtime.evaluate', {
    expression: `(() => {
      const l = document.getElementById('home-island-launcher');
      const body = document.body;
      const html = document.documentElement;
      
      const chain = [];
      let cur = l;
      while (cur) {
        const r = cur.getBoundingClientRect();
        chain.push({
          tag: cur.tagName,
          id: cur.id,
          cls: cur.className,
          top: Math.round(r.top),
          bottom: Math.round(r.bottom),
          height: Math.round(r.height),
          scrollHeight: cur.scrollHeight,
          clientHeight: cur.clientHeight
        });
        cur = cur.parentElement;
      }

      return {
        windowHeight: window.innerHeight,
        bodyScrollHeight: body.scrollHeight,
        bodyClientHeight: body.clientHeight,
        chain
      };
    })()`,
    returnByValue: true
  });

  console.log('DOM Chain Height Diagnostics:');
  console.log(JSON.stringify(diag.result.value, null, 2));

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

run();
