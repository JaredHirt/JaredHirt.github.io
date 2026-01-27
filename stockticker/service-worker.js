self.addEventListener('fetch', function(event) {
    // Simple pass-through. Required for PWA installation criteria.
    event.respondWith(fetch(event.request));
});