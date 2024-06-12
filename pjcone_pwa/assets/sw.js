// 서비스 워커 설치 및 캐싱
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('app-cache').then(cache => {
            return cache.addAll([
                '/',
                '/*',
            ]);
        })
    );
});

// 네트워크 요청 가로채기 및 캐싱된 리소스 반환
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});

// 오프라인 상황에서의 동작 정의
// self.addEventListener('fetch', event => {
//     event.respondWith(
//         caches.match(event.request).then(response => {
//             return response || fetch(event.request).catch(() => {
//                 return caches.match('/offline.html'); // 오프라인 메시지 페이지 반환
//             });
//         })
//     );
// });

// Push 알림 처리
// self.addEventListener('push', event => {
//     const title = 'Push 알림';
//     const options = {
//         body: event.data.text()
//     };
//     event.waitUntil(self.registration.showNotification(title, options));
// });