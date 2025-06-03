const CACHE_NAME = 'todo-cache-v1';
const FILES_TO_CACHE = [
    '/',
    'index.html',
    'styles.css',
    'app.js',
    'offline.html',
    'manifest.json'
];

self.addEventListener('install', evt => {
    evt.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE))
    )
});

self.addEventListener('activate', evt => {
    evt.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
            )
        })
    )
})

self.addEventListener('fetch', evt => {
    evt.respondWith(
        caches.match(evt.request).then(response => {
            return response || fetch(evt.request).catch(() => caches.match('offline.html'))
        })
    )
})


self.addEventListener('message', (event) => {
    const task = event.data.task;
    console.log("SW: message entered")

    if (task && task.toLowerCase().includes("erinnern")) {
        setTimeout(() => {
            self.registration.showNotification("Erinnerung", {
                body: `Nicht vergessen: ${task}`,
                icon: 'icons/icon-192.png'
            });
        }, 5000);
    }
});