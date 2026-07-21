// sw.js — Service Worker for Aaryan Gupta Portfolio

const CACHE_NAME = 'ag-cache-v3';
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

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('[SW] Pre-caching offline fallbacks and static assets');
      return cache.addAll(STATIC_ASSETS);
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
            console.log('[SW] Deleting stale cache:', key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Stale-while-revalidate for assets, network-first for documents
self.addEventListener('fetch', event => {
  const request = event.request;
  
  // Ignore non-GET requests
  if (request.method !== 'GET') return;
  
  // Ignore Chrome Extensions and external scripts
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then(response => {
          // Update cache with fresh version
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, clone));
          return response;
        })
        .catch(() => {
          // If network fails, serve cache, then fallback
          return caches.match(request).then(cached => {
            return cached || caches.match(OFFLINE_FALLBACK);
          });
        })
    );
  } else {
    event.respondWith(
      caches.match(request).then(cached => {
        const fetchPromise = fetch(request)
          .then(networkResponse => {
            if (networkResponse.status === 200) {
              const clone = networkResponse.clone();
              caches.open(CACHE_NAME).then(cache => cache.put(request, clone));
            }
            return networkResponse;
          })
          .catch(() => null); // Fail silently on resource network error
          
        return cached || fetchPromise;
      })
    );
  }
});
