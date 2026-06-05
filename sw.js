/* sw.js — service worker for https://marjanstoimchev.github.io
 * Strategy:
 *   - Navigations: network-first, fall back to cached /index.html when offline.
 *   - Same-origin static assets: cache-first with background network update (stale-while-revalidate).
 *   - Cross-origin requests: ignored (pass through to network, never cached).
 * Bump CACHE_VERSION to ship a new app shell and purge old caches.
 */
'use strict';

const CACHE_VERSION = 'v6';
const CACHE_NAME = 'marjan-portfolio-' + CACHE_VERSION;

// Same-origin app shell to precache. Keep this minimal and same-origin only.
const APP_SHELL = [
  '/',
  '/index.html',
  '/assets/img/marjan-portrait.jpg',
  '/assets/icons/icon-192.png',
  '/assets/icons/icon-512.png'
];

// Install: precache the app shell, then activate immediately.
self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      // addAll is atomic-ish; if any item 404s the whole install fails, so
      // cache each entry individually and ignore the ones that are missing.
      await Promise.all(
        APP_SHELL.map(async (url) => {
          try {
            const response = await fetch(url, { cache: 'no-cache' });
            if (response && response.ok) {
              await cache.put(url, response.clone());
            }
          } catch (e) {
            /* ignore individual precache failures */
          }
        })
      );
      await self.skipWaiting();
    })()
  );
});

// Activate: drop old caches and take control of open clients.
self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
          return undefined;
        })
      );
      await self.clients.claim();
    })()
  );
});

// Helper: is this a same-origin request?
function isSameOrigin(url) {
  return new URL(url, self.location.href).origin === self.location.origin;
}

self.addEventListener('fetch', (event) => {
  const request = event.request;

  // Only handle GET; let everything else go straight to the network.
  if (request.method !== 'GET') {
    return;
  }

  // Ignore cross-origin requests entirely — do not call respondWith,
  // so the browser handles them normally (CDN fonts, analytics, etc.).
  if (!isSameOrigin(request.url)) {
    return;
  }

  // Navigations (HTML page loads): network-first with offline fallback.
  if (request.mode === 'navigate') {
    event.respondWith(
      (async () => {
        try {
          const networkResponse = await fetch(request, { cache: 'no-cache' });
          // Refresh BOTH canonical home keys so the offline fallback never serves stale.
          if (networkResponse && networkResponse.ok) {
            const copy = networkResponse.clone();
            event.waitUntil((async () => {
              const cache = await caches.open(CACHE_NAME);
              await Promise.all([cache.put('/', copy.clone()), cache.put('/index.html', copy)]);
            })());
          }
          return networkResponse;
        } catch (e) {
          const cache = await caches.open(CACHE_NAME);
          const cached =
            (await cache.match(request)) ||
            (await cache.match('/index.html')) ||
            (await cache.match('/'));
          if (cached) {
            return cached;
          }
          return new Response(
            '<!doctype html><meta charset="utf-8"><title>Offline</title>' +
              '<h1>Offline</h1><p>This page is not available offline yet.</p>',
            { status: 503, headers: { 'Content-Type': 'text/html; charset=utf-8' } }
          );
        }
      })()
    );
    return;
  }

  // Same-origin static assets: cache-first, update in background.
  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      const cached = await cache.match(request);

      const networkFetch = fetch(request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.ok) {
            cache.put(request, networkResponse.clone());
          }
          return networkResponse;
        })
        .catch(() => undefined);

      if (cached) {
        // Serve cached immediately; revalidate in the background.
        event.waitUntil(networkFetch);
        return cached;
      }

      const networkResponse = await networkFetch;
      if (networkResponse) {
        return networkResponse;
      }
      return new Response('', { status: 504, statusText: 'Gateway Timeout' });
    })()
  );
});
