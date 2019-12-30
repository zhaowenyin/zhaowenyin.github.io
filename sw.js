const VERSION = 'v2'
let cacheWhitelist = [VERSION];

self.addEventListener('install', function (event) {
  self.skipWaiting() // 强行插队
})

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keylist = await caches.keys()
    await Promise.all(keylist.map((key) => {
      if (cacheWhitelist.indexOf(key) === -1) {
        return caches.delete(key);
      }
    }))
  })())
})

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return
  event.respondWith((async () => {
    try {
      const response = await caches.match(event.request)
      if (response) {
        return response 
      }

      let networkResponse = await fetch(event.request)

      const cache = await caches.open(VERSION)
      cache.put(event.request, networkResponse.clone())

      return networkResponse
    } catch (error) { // 没有匹配到缓存中的任何资源的时候，以及网络不可用
      console.log(error)
      // return caches.match('/star.jpg')
    }
    
  })())
})
