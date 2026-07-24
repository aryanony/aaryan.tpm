// assets/js/utils/pwa.js — Clean & Reliable PWA Module

export function initPWA() {
  // 1. Service Worker Registration
  if ('serviceWorker' in navigator && import.meta.env.PROD) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then(reg => {
          const checkUpdate = () => reg.update().catch(() => {});
          document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'visible') checkUpdate();
          });
          window.addEventListener('online', checkUpdate);
          setInterval(checkUpdate, 120000);

          reg.addEventListener('updatefound', () => {
            const newWorker = reg.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  showUpdateBanner(reg);
                }
              });
            }
          });
        })
        .catch(() => {});
    });
  }

  // 2. Install Prompt Listener
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    window.deferredPrompt = e;
    document.dispatchEvent(new CustomEvent('pwa:installable'));

    if (window.innerWidth < 768 && !isStandalone()) {
      showInstallBanner();
    }
  });

  window.addEventListener('appinstalled', () => {
    window.deferredPrompt = null;
    const banner = document.getElementById('pwa-install-banner');
    if (banner) banner.remove();
  });

  // 3. Offline/Online Status Monitor
  window.addEventListener('offline', showOfflineIndicator);
  window.addEventListener('online', hideOfflineIndicator);

  // 4. Standalone Mode UI (App Bottom Nav Bar)
  if (isStandalone()) {
    initStandaloneUI();
  }
}

export function installPWA() {
  const promptEvent = window.deferredPrompt;
  if (!promptEvent) return;

  promptEvent.prompt();
  promptEvent.userChoice.then(() => {
    window.deferredPrompt = null;
    const banner = document.getElementById('pwa-install-banner');
    if (banner) banner.remove();
  });
}

function isStandalone() {
  return window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
}

// ── Standalone App Bottom Nav ──

function initStandaloneUI() {
  if (document.getElementById('pwa-bottom-nav')) return;

  const style = document.createElement('style');
  style.id = 'pwa-standalone-styles';
  style.textContent = `
    #pwa-bottom-nav {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      height: calc(56px + env(safe-area-inset-bottom, 0px));
      background: rgba(3, 13, 10, 0.98);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border-top: 1px solid rgba(16, 185, 129, 0.25);
      display: flex;
      justify-content: space-around;
      align-items: center;
      z-index: 10005;
      padding-bottom: env(safe-area-inset-bottom, 0px);
      box-shadow: 0 -4px 20px rgba(0,0,0,0.6);
    }

    .pwa-nav-item {
      position: relative;
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: #7b8c87;
      text-decoration: none;
      font-family: var(--font-mono, monospace);
      font-size: 10px;
      font-weight: 500;
      gap: 3px;
      height: 100%;
      min-height: 48px;
      cursor: pointer;
      background: none;
      border: none;
      padding: 4px 0;
      touch-action: manipulation;
      -webkit-tap-highlight-color: transparent;
      transition: color 0.15s ease, background-color 0.15s ease;
    }
    
    .pwa-nav-item i {
      font-size: 20px;
      transition: color 0.15s ease, transform 0.15s ease;
    }

    .pwa-nav-item.active {
      color: var(--prod-teal, #10b981) !important;
      background: rgba(16, 185, 129, 0.08);
    }
    
    .pwa-nav-item.active i {
      color: var(--prod-teal, #10b981) !important;
      filter: drop-shadow(0 0 6px rgba(16, 185, 129, 0.6));
      transform: translateY(-1px);
    }
    
    .pwa-nav-item.active span {
      color: var(--prod-teal, #10b981) !important;
      font-weight: 700;
    }
    
    .pwa-nav-item.active::before {
      content: '';
      position: absolute;
      top: 0;
      left: 20%;
      right: 20%;
      height: 3px;
      background: var(--prod-teal, #10b981);
      box-shadow: 0 0 10px var(--prod-teal, #10b981);
      border-radius: 0 0 4px 4px;
    }

    .pwa-nav-item:active {
      opacity: 0.7;
    }

    .pwa-nav-item--terminal {
      position: relative;
    }
    
    .pwa-nav-item--terminal::after {
      content: '';
      position: absolute;
      top: 8px;
      right: 28%;
      width: 5px;
      height: 5px;
      background: var(--prod-cyan, #06b6d4);
      border-radius: 50%;
      box-shadow: 0 0 6px var(--prod-cyan, #06b6d4);
    }

    body {
      padding-bottom: calc(70px + env(safe-area-inset-bottom, 0px)) !important;
    }

    .nav.nav-hidden {
      transform: none !important;
    }
  `;
  document.head.appendChild(style);

  // Path detection supporting root, .html, subpages, and pretty URLs
  const path = window.location.pathname.toLowerCase().replace(/\/$/, '') || '/';
  
  const isHome = path === '/' || path === '/index.html' || path.endsWith('/index.html');
  const isProducts = path === '/products' || path === '/products.html' || path.includes('products');
  const isServices = path === '/services' || path === '/services.html' || path.startsWith('/services/') || path.includes('services');

  const nav = document.createElement('nav');
  nav.id = 'pwa-bottom-nav';
  nav.setAttribute('aria-label', 'Mobile App Navigation');

  nav.innerHTML = `
    <a href="/" id="pwa-nav-home" class="pwa-nav-item ${isHome ? 'active' : ''}">
      <i class="ph-bold ph-house"></i>
      <span>Home</span>
    </a>
    <a href="https://aryanony.pages.dev/products.html" id="pwa-nav-products" class="pwa-nav-item ${isProducts ? 'active' : ''}">
      <i class="ph-bold ph-squares-four"></i>
      <span>Products</span>
    </a>
    <a href="https://aryanony.pages.dev/services.html" id="pwa-nav-services" class="pwa-nav-item ${isServices ? 'active' : ''}">
      <i class="ph-bold ph-briefcase"></i>
      <span>Services</span>
    </a>
    <button id="pwa-nav-term" class="pwa-nav-item pwa-nav-item--terminal" type="button" aria-label="Open Console">
      <i class="ph-bold ph-terminal-window"></i>
      <span>Console</span>
    </button>
  `;

  document.body.appendChild(nav);

  // If tapping active page tab, scroll smooth to top.
  // Otherwise, standard <a> click handles native instant navigation.
  const homeLink = nav.querySelector('#pwa-nav-home');
  if (homeLink && isHome) {
    homeLink.addEventListener('click', (e) => {
      e.preventDefault();
      vibrate();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  const productsLink = nav.querySelector('#pwa-nav-products');
  if (productsLink && isProducts) {
    productsLink.addEventListener('click', (e) => {
      e.preventDefault();
      vibrate();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  const servicesLink = nav.querySelector('#pwa-nav-services');
  if (servicesLink && isServices) {
    servicesLink.addEventListener('click', (e) => {
      e.preventDefault();
      vibrate();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  const termBtn = nav.querySelector('#pwa-nav-term');
  if (termBtn) {
    termBtn.addEventListener('click', (e) => {
      e.preventDefault();
      vibrate();
      window.dispatchEvent(new KeyboardEvent('keydown', {
        key: 'k',
        ctrlKey: true,
        bubbles: true
      }));
    });
  }
}

function showUpdateBanner(reg) {
  if (document.getElementById('pwa-update-banner')) return;

  const banner = document.createElement('div');
  banner.id = 'pwa-update-banner';
  banner.style.cssText = `
    position: fixed;
    top: 16px;
    left: 16px;
    right: 16px;
    background: #030D0A;
    border: 1px solid #06b6d4;
    padding: 12px 16px;
    z-index: 10001;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    font-family: monospace;
    font-size: 12px;
  `;

  banner.innerHTML = `
    <span style="color: #edf8f5;">✨ Update ready</span>
    <button id="pwa-update-btn" style="
      background: #06b6d4;
      color: #030D0A;
      border: none;
      padding: 6px 12px;
      font-weight: bold;
      cursor: pointer;
      text-transform: uppercase;
      font-size: 10px;
    ">Reload</button>
  `;

  document.body.appendChild(banner);

  document.getElementById('pwa-update-btn').addEventListener('click', () => {
    if (reg.waiting) {
      reg.waiting.postMessage({ type: 'SKIP_WAITING' });
    }
    setTimeout(() => window.location.reload(), 200);
  });
}

function showInstallBanner() {
  if (document.getElementById('pwa-install-banner')) return;

  const banner = document.createElement('div');
  banner.id = 'pwa-install-banner';
  banner.style.cssText = `
    position: fixed;
    bottom: 16px;
    left: 16px;
    right: 16px;
    background: #030D0A;
    border: 1px solid #10b981;
    padding: 16px;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    gap: 12px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    font-family: monospace;
  `;

  banner.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: flex-start;">
      <div style="font-size: 12px; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.1em;">Install Web App</div>
      <button id="pwa-close-btn" style="background:none; border:none; color:#94a3b8; font-size: 1.2rem; cursor:pointer; padding:0;">&times;</button>
    </div>
    <div style="font-size: 14px; color: #edf8f5; line-height: 1.4;">
      Install <strong>Aryanony</strong> for quick access.
    </div>
    <button id="pwa-install-btn" style="
      background: #10b981;
      color: #030D0A;
      border: none;
      padding: 8px 16px;
      font-weight: bold;
      font-size: 12px;
      cursor: pointer;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      width: 100%;
    ">Install App</button>
  `;

  document.body.appendChild(banner);
  document.getElementById('pwa-close-btn').addEventListener('click', () => banner.remove());
  document.getElementById('pwa-install-btn').addEventListener('click', () => installPWA());
}

function showOfflineIndicator() {
  if (document.getElementById('offline-bar')) return;

  const bar = document.createElement('div');
  bar.id = 'offline-bar';
  bar.style.cssText = `
    position: fixed;
    bottom: ${isStandalone() ? '60px' : '0'};
    left: 0;
    right: 0;
    background: #3b82f6;
    color: #edf8f5;
    text-align: center;
    padding: 8px;
    font-family: monospace;
    font-size: 12px;
    z-index: 10000;
    font-weight: bold;
  `;
  bar.innerHTML = `<i class="ph-bold ph-wifi-slash" style="margin-right: 6px;"></i> Offline — Serving cached content`;
  document.body.appendChild(bar);
}

function hideOfflineIndicator() {
  const bar = document.getElementById('offline-bar');
  if (!bar) return;

  bar.style.background = '#10b981';
  bar.innerHTML = `<i class="ph-bold ph-wifi" style="margin-right: 6px;"></i> Back online`;
  setTimeout(() => bar.remove(), 2500);
}

function vibrate() {
  try {
    if (navigator.vibrate) navigator.vibrate(10);
  } catch (e) {}
}
