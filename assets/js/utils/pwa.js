// assets/js/utils/pwa.js

export function initPWA() {
  // 1. Service Worker Registration & Automatic Update Reloader
  if ('serviceWorker' in navigator && import.meta.env.PROD) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then(reg => {
          console.log('[AG] PWA ServiceWorker registered successfully:', reg.scope);
          
          // Check for service worker updates
          reg.addEventListener('updatefound', () => {
            const newWorker = reg.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  // Show update banner
                  showUpdateBanner(reg);
                }
              });
            }
          });
        })
        .catch(err => {
          console.error('[AG] PWA ServiceWorker registration failed:', err);
        });
    });

    // Automatically reload when service worker is updated (skipWaiting called)
    let refreshing = false;
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (!refreshing) {
        refreshing = true;
        window.location.reload();
      }
    });
  }

  // 2. Custom PWA Install Prompt Listener
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    window.deferredPrompt = e;
    document.dispatchEvent(new CustomEvent('pwa:installable'));
    
    // Show themed bottom installation banner on mobile browser viewports (not installed yet)
    if (window.innerWidth < 768 && !isStandalone()) {
      showInstallBanner();
    }
  });

  window.addEventListener('appinstalled', (evt) => {
    console.log('[AG] Aryanony PWA was installed successfully');
    window.deferredPrompt = null;
    const banner = document.getElementById('pwa-install-banner');
    if (banner) banner.remove();
  });

  // 3. Offline/Online Status Monitor
  window.addEventListener('offline', () => {
    showOfflineIndicator();
  });

  window.addEventListener('online', () => {
    hideOfflineIndicator();
  });

  // 4. Standalone Mode UI Optimizations (App Navigation Bar)
  if (isStandalone()) {
    initStandaloneUI();
  }
}

export function installPWA() {
  const promptEvent = window.deferredPrompt;
  if (!promptEvent) return;
  
  promptEvent.prompt();
  promptEvent.userChoice.then((choiceResult) => {
    if (choiceResult.outcome === 'accepted') {
      console.log('[AG] User accepted the PWA install prompt');
    } else {
      console.log('[AG] User dismissed the PWA install prompt');
    }
    window.deferredPrompt = null;
    const banner = document.getElementById('pwa-install-banner');
    if (banner) banner.remove();
  });
}

function isStandalone() {
  return window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
}

function showUpdateBanner(reg) {
  if (document.getElementById('pwa-update-banner')) return;

  const banner = document.createElement('div');
  banner.id = 'pwa-update-banner';
  banner.style.cssText = `
    position: fixed;
    top: var(--sp-4, 16px);
    left: var(--sp-4, 16px);
    right: var(--sp-4, 16px);
    background: #030D0A;
    border: 1px solid var(--prod-cyan, #06b6d4);
    padding: var(--sp-3, 12px) var(--sp-4, 16px);
    z-index: 10001;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 0 !important;
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    font-family: var(--font-mono, monospace);
    font-size: var(--text-xs, 12px);
  `;

  banner.innerHTML = `
    <span style="color: var(--text-primary, #edf8f5);">✨ Update Available: A fresh version of Aryanony is ready.</span>
    <button id="pwa-update-btn" style="
      background: var(--prod-cyan, #06b6d4);
      color: #030D0A;
      border: none;
      padding: 6px 12px;
      font-weight: bold;
      cursor: pointer;
      text-transform: uppercase;
      font-size: 10px;
      border-radius: 0 !important;
    ">Relaunch</button>
  `;

  document.body.appendChild(banner);

  document.getElementById('pwa-update-btn').addEventListener('click', () => {
    if (reg.waiting) {
      reg.waiting.postMessage({ type: 'SKIP_WAITING' });
    } else {
      window.location.reload();
    }
  });
}

function showInstallBanner() {
  if (document.getElementById('pwa-install-banner')) return;

  const banner = document.createElement('div');
  banner.id = 'pwa-install-banner';
  banner.style.cssText = `
    position: fixed;
    bottom: var(--sp-4, 16px);
    left: var(--sp-4, 16px);
    right: var(--sp-4, 16px);
    background: #030D0A;
    border: 1px solid var(--prod-teal, #10b981);
    padding: var(--sp-4, 16px);
    z-index: 9999;
    display: flex;
    flex-direction: column;
    gap: var(--sp-3, 12px);
    border-radius: 0 !important;
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    font-family: var(--font-mono, monospace);
  `;

  banner.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: flex-start;">
      <div style="font-size: var(--text-xs, 12px); color: var(--text-muted, #94a3b8); text-transform: uppercase; letter-spacing: 0.1em;">Install Web App</div>
      <button id="pwa-close-btn" style="background:none; border:none; color:var(--text-muted, #94a3b8); font-size: 1.2rem; cursor:pointer; padding:0; line-height:1;">&times;</button>
    </div>
    <div style="font-size: var(--text-sm, 14px); color: var(--text-primary, #edf8f5); line-height: 1.4; margin-bottom: 2px;">
      Install <strong>Aryanony</strong> to your home screen for quick, offline-first access.
    </div>
    <button id="pwa-install-btn" style="
      background: var(--prod-teal, #10b981);
      color: #030D0A;
      border: none;
      padding: var(--sp-2, 8px) var(--sp-4, 16px);
      font-weight: bold;
      font-size: var(--text-xs, 12px);
      cursor: pointer;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      border-radius: 0 !important;
      text-align: center;
      width: 100%;
    ">Install App</button>
  `;

  document.body.appendChild(banner);

  document.getElementById('pwa-close-btn').addEventListener('click', () => {
    banner.remove();
  });

  document.getElementById('pwa-install-btn').addEventListener('click', () => {
    installPWA();
  });
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
    background: var(--prod-blue, #3b82f6);
    color: #edf8f5;
    text-align: center;
    padding: var(--sp-2, 8px);
    font-family: var(--font-mono, monospace);
    font-size: var(--text-xs, 12px);
    z-index: 10000;
    border-top: 1px solid rgba(255,255,255,0.1);
    font-weight: bold;
    border-radius: 0 !important;
    letter-spacing: 0.05em;
  `;
  bar.innerHTML = `<i class="ph-bold ph-wifi-slash" style="margin-right: 6px;"></i> Offline Mode Active — Serving cached content`;
  document.body.appendChild(bar);
}

function hideOfflineIndicator() {
  const bar = document.getElementById('offline-bar');
  if (!bar) return;

  bar.style.background = 'var(--prod-teal, #10b981)';
  bar.innerHTML = `<i class="ph-bold ph-wifi" style="margin-right: 6px;"></i> Connection Restored — Back online`;
  
  setTimeout(() => {
    bar.remove();
  }, 3000);
}

function initStandaloneUI() {
  // Inject app mode styles
  const style = document.createElement('style');
  style.id = 'pwa-standalone-styles';
  style.textContent = `
    #pwa-bottom-nav {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      height: calc(60px + env(safe-area-inset-bottom, 0px));
      background: rgba(3, 13, 10, 0.96);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border-top: 1px solid rgba(16, 185, 129, 0.25);
      display: flex;
      justify-content: space-around;
      align-items: center;
      z-index: 10005;
      padding-bottom: env(safe-area-inset-bottom, 0px);
      box-shadow: 0 -4px 24px rgba(0,0,0,0.6);
    }
    .pwa-nav-item {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: #94a3b8;
      text-decoration: none;
      font-family: var(--font-mono, monospace);
      font-size: 10px;
      gap: 4px;
      height: 100%;
      min-height: 48px;
      cursor: pointer;
      background: none;
      border: none;
      padding: 6px 0;
      touch-action: manipulation;
      transition: color 0.2s ease, transform 0.1s ease;
      -webkit-tap-highlight-color: transparent;
    }
    .pwa-nav-item i {
      font-size: 20px;
    }
    .pwa-nav-item.active {
      color: var(--prod-teal, #10b981);
    }
    .pwa-nav-item:active {
      transform: scale(0.92);
    }
    .pwa-nav-item--terminal {
      position: relative;
    }
    .pwa-nav-item--terminal::after {
      content: '';
      position: absolute;
      top: 10px;
      right: 28%;
      width: 6px;
      height: 6px;
      background: var(--prod-cyan, #06b6d4);
      border-radius: 50%;
      box-shadow: 0 0 8px var(--prod-cyan);
      animation: pwa-pulse 2s infinite;
    }
    @keyframes pwa-pulse {
      0% { transform: scale(0.9); opacity: 0.6; }
      50% { transform: scale(1.3); opacity: 1; }
      100% { transform: scale(0.9); opacity: 0.6; }
    }
    body {
      padding-bottom: calc(76px + env(safe-area-inset-bottom, 0px)) !important;
      overscroll-behavior-y: contain !important;
    }
    /* Hide scroll indicator top bar elements in standalone if needed */
    .scroll-progress-bar {
      top: 0 !important;
    }
    
    /* Standalone secure launch overlay */
    #pwa-secure-launch {
      position: fixed;
      inset: 0;
      background: #030D0A;
      z-index: 11000;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 24px;
      color: var(--prod-teal, #10b981);
      font-family: var(--font-mono, monospace);
      transition: opacity 0.5s ease;
    }
    .pwa-biometric {
      font-size: 3rem;
      color: var(--prod-teal, #10b981);
      animation: biometric-pulse 1.5s infinite;
    }
    .pwa-progress-container {
      width: 200px;
      height: 2px;
      background: rgba(16, 185, 129, 0.1);
      position: relative;
      overflow: hidden;
    }
    .pwa-progress-bar {
      position: absolute;
      left: 0; top: 0; bottom: 0;
      width: 0%;
      background: var(--prod-teal, #10b981);
      box-shadow: 0 0 8px var(--prod-teal);
      transition: width 0.1s linear;
    }
    @keyframes biometric-pulse {
      0% { opacity: 0.4; transform: scale(0.95); }
      50% { opacity: 1; transform: scale(1.05); }
      100% { opacity: 0.4; transform: scale(0.95); }
    }
  `;
  document.head.appendChild(style);

  // 1. Build Standalone App Bottom Nav
  const nav = document.createElement('div');
  nav.id = 'pwa-bottom-nav';

  const pathname = window.location.pathname;
  const isHome = pathname === '/' || pathname.endsWith('index.html');
  const isProducts = pathname.includes('products.html');
  const isServices = pathname.includes('services.html') || pathname.includes('/services/');
  const servicesHref = isHome ? '/#services' : '/services.html';

  nav.innerHTML = `
    <a href="/" class="pwa-nav-item ${isHome ? 'active' : ''}">
      <i class="ph-bold ph-house"></i>
      <span>Home</span>
    </a>
    <a href="/products.html" class="pwa-nav-item ${isProducts ? 'active' : ''}">
      <i class="ph-bold ph-squares-four"></i>
      <span>Products</span>
    </a>
    <a href="${servicesHref}" id="pwa-nav-services" class="pwa-nav-item ${isServices ? 'active' : ''}">
      <i class="ph-bold ph-briefcase"></i>
      <span>Services</span>
    </a>
    <button id="pwa-nav-term" class="pwa-nav-item pwa-nav-item--terminal">
      <i class="ph-bold ph-terminal-window"></i>
      <span>Console</span>
    </button>
  `;

  document.body.appendChild(nav);

  // Tactile feedback & event handling for Services bottom tab
  const servicesBtn = nav.querySelector('#pwa-nav-services');
  if (servicesBtn) {
    servicesBtn.addEventListener('click', (e) => {
      if (isHome) {
        const target = document.querySelector('#services');
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      } else if (isServices) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }

  // Tactile feedback on nav tap safely
  const navItems = nav.querySelectorAll('.pwa-nav-item');
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      if (typeof navigator !== 'undefined' && 'vibrate' in navigator && typeof navigator.vibrate === 'function') {
        try { navigator.vibrate(12); } catch (err) {}
      }
    });
  });

  // Bind Console action to dispatch CTRL+K keyboard event dynamically opening Command-K palette
  document.getElementById('pwa-nav-term').addEventListener('click', (e) => {
    e.preventDefault();
    if (typeof navigator !== 'undefined' && 'vibrate' in navigator && typeof navigator.vibrate === 'function') {
      try { navigator.vibrate(20); } catch (err) {}
    }
    window.dispatchEvent(new KeyboardEvent('keydown', {
      key: 'k',
      ctrlKey: true,
      bubbles: true
    }));
  });

  // 2. Inject Biometric/Decryption Startup Screen on fresh launch session
  if (!sessionStorage.getItem('pwa-sys-unlocked')) {
    showSecureLaunchScreen();
  }
}

function showSecureLaunchScreen() {
  const overlay = document.createElement('div');
  overlay.id = 'pwa-secure-launch';
  overlay.innerHTML = `
    <div class="pwa-biometric"><i class="ph-bold ph-fingerprint"></i></div>
    <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--prod-teal);">Aryanony Cryptographic Boot</div>
    <div class="pwa-progress-container">
      <div class="pwa-progress-bar" id="pwa-boot-progress"></div>
    </div>
    <div id="pwa-boot-status" style="font-size: 10px; color: #6b7c77; text-transform: uppercase;">Decrypting key store...</div>
  `;
  document.body.appendChild(overlay);

  const bar = document.getElementById('pwa-boot-progress');
  const status = document.getElementById('pwa-boot-status');
  
  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.floor(Math.random() * 15) + 5;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      bar.style.width = '100%';
      status.style.color = 'var(--prod-teal)';
      status.innerHTML = '🔓 Access Granted';
      
      if ('vibrate' in navigator) navigator.vibrate([30, 40]);
      
      setTimeout(() => {
        overlay.style.opacity = '0';
        setTimeout(() => {
          overlay.remove();
          sessionStorage.setItem('pwa-sys-unlocked', 'true');
        }, 500);
      }, 400);
    } else {
      bar.style.width = `${progress}%`;
      status.innerHTML = `Decrypting key store... ${progress}%`;
    }
  }, 100);
}

