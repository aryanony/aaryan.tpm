// sw.js — High-Performance Service Worker for PWA
// Strategy: Cache-First for assets, Network-First for navigation, with intelligent prefetching
const CACHE_VERSION = 5;
const CACHE_NAME = `ag-cache-v${CACHE_VERSION}`;
const RUNTIME_CACHE = `ag-runtime-v${CACHE_VERSION}`;
const OFFLINE_FALLBACK = '/offline.html';

// Core shell: pages + data needed for instant app-like navigation
const PRECACHE_PAGES = [
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
];

const PRECACHE_DATA = [
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
  '/data/blog-meta.json',
];

const PRECACHE_ASSETS = [
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
      // Pre-cache in priority order: assets first (critical), then data, then pages
      // Use individual adds with error swallowing so one failure doesn't block all
      const allUrls = [...PRECACHE_ASSETS, ...PRECACHE_DATA, ...PRECACHE_PAGES];
      return Promise.allSettled(
        allUrls.map(url =>
          cache.add(url).catch(err => {
            console.warn(`[SW] Failed to cache: ${url}`, err);
          })
        )
      );
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME && key !== RUNTIME_CACHE) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Intelligent fetch handler with differentiated caching strategies
self.addEventListener('fetch', event => {
  const request = event.request;
  
  if (request.method !== 'GET') return;
  
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  // ── Navigation requests (HTML pages) — Stale-While-Revalidate for speed ──
  // Serve cached page INSTANTLY, then update cache in background
  // This makes page transitions feel instant in the PWA
  if (request.mode === 'navigate') {
    event.respondWith(
      caches.match(request).then(cached => {
        // Start network fetch in background to update cache
        const networkFetch = fetch(request)
          .then(networkResponse => {
            if (networkResponse && networkResponse.status === 200) {
              const clone = networkResponse.clone();
              caches.open(CACHE_NAME).then(cache => cache.put(request, clone));
            }
            return networkResponse;
          })
          .catch(() => null);

        // If we have a cached version, serve it immediately (instant navigation)
        // If not, wait for network (first visit)
        if (cached) {
          // Return cached immediately — background fetch will update for next visit
          return cached;
        }

        // No cache — must wait for network, with offline fallback
        return networkFetch.then(response => {
          if (response) return response;
          return caches.match(OFFLINE_FALLBACK).then(fallback => fallback || caches.match('/'));
        });
      })
    );
    return;
  }

  // ── JSON data files — Stale-While-Revalidate ──
  // Serve cached data instantly, update in background
  if (url.pathname.startsWith('/data/') && url.pathname.endsWith('.json')) {
    event.respondWith(
      caches.match(request).then(cached => {
        const networkFetch = fetch(request)
          .then(networkResponse => {
            if (networkResponse && networkResponse.status === 200) {
              const clone = networkResponse.clone();
              caches.open(CACHE_NAME).then(cache => cache.put(request, clone));
            }
            return networkResponse;
          })
          .catch(() => null);

        return cached || networkFetch;
      })
    );
    return;
  }

  // ── Static assets (CSS, JS, images, fonts) — Cache-First ──
  // These are hashed by Vite, so cached versions are always correct
  event.respondWith(
    caches.match(request).then(cached => {
      if (cached) return cached;

      return fetch(request).then(networkResponse => {
        if (networkResponse && networkResponse.status === 200) {
          const clone = networkResponse.clone();
          // Use runtime cache for dynamically discovered assets
          caches.open(RUNTIME_CACHE).then(cache => cache.put(request, clone));
        }
        return networkResponse;
      }).catch(() => {
        // For images, return nothing gracefully
        if (request.destination === 'image') {
          return new Response('', { status: 404 });
        }
        return new Response('', { status: 503 });
      });
    })
  );
});
