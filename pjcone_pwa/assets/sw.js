addEventListener('notificationclick', ev => {
    ev.notification.close();

    let targetUrl = ev.notification.data?.data?.url || '/';

    ev.waitUntil(
        (async () => {
            const allClients = await clients.matchAll({
                type: 'window',
                includeUncontrolled: true,
            });

            // 이미 같은 사이트가 열려 있다면 그 탭을 포커스
            for (const client of allClients) {
                if (client.url.includes(self.location.origin)) {
                    client.focus();
                    client.postMessage({ type: 'notificationclick', action: ev.action, data: ev.notification.data, id: ev.notification.tag, reply: ev.reply });
                    return;
                }
            }
            // scope 검토 후 시작부 변경하기
            if (self.registration.scope.includes('/pjcone_pwa/'))
                targetUrl = '/pjcone_pwa' + targetUrl;
            // 아니면 새 창 열기
            await clients.openWindow(targetUrl);
        })()
    );
});

self.addEventListener('push', e => {
    e.waitUntil((async () => {
        const data = e.data?.json();
        if (!data) return;
        await self.registration.showNotification(data.title, {
            body: data.body,
            badge: `https://is2you2.github.io/pjcone_pwa/assets/badge/${data.icon || 'favicon'}.png`,
            icon: `https://is2you2.github.io/pjcone_pwa/assets/icon/${data.icon || 'favicon'}.png`,
            image: data.image,
            tag: `${data.id}`,
            data: data,
        });
    })());
});