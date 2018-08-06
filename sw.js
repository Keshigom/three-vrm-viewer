var CACHE_NAME = "VRM-Viewer-1.1.0";
var urlsToCache = [
    "https://vrm-viewer.yukimochi.io/",
    "https://vrm-viewer.yukimochi.io/assets/favicon.ico",
    "https://vrm-viewer.yukimochi.io/assets/icons/glTF-Viewer.png",
    "https://vrm-viewer.yukimochi.io/bundle.js?v=r95",
    "https://vrm-viewer.yukimochi.io/index.html",
    "https://vrm-viewer.yukimochi.io/lib/gltf-validator.js",
    "https://vrm-viewer.yukimochi.io/style.css"
];

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(
                function (cache) {
                    return cache.addAll(urlsToCache);
                })
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
            .then(
                function (response) {
                    if (response) {
                        return response;
                    }
                    return fetch(event.request);
                })
    );
});
