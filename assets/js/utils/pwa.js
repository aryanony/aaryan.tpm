// assets/js/utils/pwa.js

export function initPWA() {
  if ('serviceWorker' in navigator && import.meta.env.PROD) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then(reg => {
          console.log('[AG] PWA ServiceWorker registered successfully:', reg.scope);
        })
        .catch(err => {
          console.error('[AG] PWA ServiceWorker registration failed:', err);
        });
    });
  }
}
