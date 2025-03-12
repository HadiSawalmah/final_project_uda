    const CACHE_NAME = 'site-cache-v1';
    const urlsToCache = [
    '/',
    '/index.html',
    '/styles/resets.css',
    '/styles/base.css',
    '/styles/form.css',
    '/styles/header.css',
    '/styles/footer.css',
    '/js/formHandler.js',
    '/images/some-image.jpg',
    ];

    self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => {
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
        })
    );
    });

    self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
        .then(response => {
            if (response) {
            return response;
            }

            return fetch(event.request).then(
            networkResponse => {
                return caches.open(CACHE_NAME).then(cache => {
                cache.put(event.request, networkResponse.clone());
                return networkResponse;
                });
            }
            );
        })
    );
    });

    self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
        return Promise.all(
            cacheNames.map(cacheName => {
            if (cacheWhitelist.indexOf(cacheName) === -1) {
                return caches.delete(cacheName);
            }
            })
        );
        })
    );
    });
