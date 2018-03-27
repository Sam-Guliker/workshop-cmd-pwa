self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('bs-v1-core').then(function(cache) {
      return cache.addAll(
        [
          '/css/bootstrap.css',
          '/css/main.css',
          '/js/bootstrap.min.js',
          '/js/jquery.min.js',
          '/offline'
        ]
      );
    })
  );
});
