self.addEventListener('fetch', event => {
    event.respondWith(new Response('hijacked'));
});

self.addEventListener('install', function(event) {
  event.waitUntil(self.skipWaiting('BOOM'));
});
