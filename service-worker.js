const CACHE_NAME = 'quacker-cache-jan-30-2025'; //date this so i can easily update it
const urlsToCache = [
  '/',
  '/index.html',
  '/stylesheets/all.css',
  '/scripts/app.js',
  '/manifest.json',
  // Add other assets you want to cache
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});