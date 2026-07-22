// sw.js — High-Performance Service Worker for Live Sync & Complete Offline PWA
const CACHE_NAME = 'ag-cache-v4';
const OFFLINE_FALLBACK = '/offline.html';

const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/about.html',
  '/services.html',
  '/products.html',
  '/contact.html',
  '/jaipur.html',
  '/ahmedabad.html',
  '/pune.html',
  '/404.html',
  OFFLINE_FALLBACK,
  '/manifest.webmanifest',
  '/favicon.ico',
  '/favicon.svg',
  '/apple-touch-icon.png',
  '/assets/images/icons/icon.svg',
  '/assets/images/icons/icon.png',
  '/assets/images/icons/icon-192.png',
  '/assets/images/icons/icon-192x192.png',
  '/assets/images/icons/icon-512.png',
  '/assets/images/icons/icon-512x512.png',
  '/services/technical-project-management.html',
  '/services/healthtech-consulting.html',
  '/services/ai-automation.html',
  '/services/micro-saas-software.html',
  '/services/website-maintenance.html',
  '/work/index.html',
  '/work/uibrium.html',
  '/work/projectport.html',
  '/work/aryanony-ai-bot.html',
  '/blog/index.html',
  '/data/site.config.json',
  '/data/services.json',
  '/data/projects.json',
  '/data/experience.json',
  '/data/skills.json',
  '/data/faq.json',
  '/data/stats.json',
  '/data/products.json',
  '/data/testimonials.json',
  '/data/chatbot-data.json',
  '/data/blog-meta.json'
];

// Handle SKIP_WAITING message sent from PWA client for live update activation
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('[SW] Pre-caching all static assets and subpages');
      return cache.addAll(STATIC_ASSETS).catch(err => {
        console.warn('[SW] Pre-cache partial failure:', err);
      });
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            console.log('[SW] Purging stale cache:', key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Network-First for Navigation (HTML Docs), Stale-While-Revalidate for Assets
self.addEventListener('fetch', event => {
  const request = event.request;
  
  if (request.method !== 'GET') return;
  
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then(networkResponse => {
          if (networkResponse && networkResponse.status === 200) {
            const clone = networkResponse.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(request, clone));
          }
          return networkResponse;
        })
        .catch(() => {
          // Offline fallback: Match requested page from cache, or return /offline.html
          return caches.match(request).then(cached => {
            return cached || caches.match(OFFLINE_FALLBACK) || caches.match('/');
          });
        })
    );
  } else {
    event.respondWith(
      caches.match(request).then(cached => {
        const fetchPromise = fetch(request)
          .then(networkResponse => {
            if (networkResponse && networkResponse.status === 200) {
              const clone = networkResponse.clone();
              caches.open(CACHE_NAME).then(cache => cache.put(request, clone));
            }
            return networkResponse;
          })
          .catch(() => null);
          
        return cached || fetchPromise;
      })
    );
  }
});
