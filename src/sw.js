self.addEventListener('fetch', event => {
  // Prevent the default, and handle the request ourselves.
  event.respondWith(new Response ('hijacked'))

});
