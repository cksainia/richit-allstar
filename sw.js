const CACHE="richit-allstar-v1";
const ASSETS=["./","index.html","data.js","manifest.webmanifest","icon-192.png","icon-512.png","icon-180.png"];
self.addEventListener("install",e=>{
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c=>
    Promise.all(ASSETS.map(u=>fetch(u,{cache:"no-store"}).then(r=>c.put(u,r)).catch(()=>{})))
  ));
});
self.addEventListener("activate",e=>{
  e.waitUntil(caches.keys()
    .then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k))))
    .then(()=>self.clients.claim()));
});
// Network-first (bypass HTTP cache) so updates appear immediately; fall back to cache offline.
self.addEventListener("fetch",e=>{
  if(e.request.method!=="GET")return;
  e.respondWith(
    fetch(e.request,{cache:"no-store"})
      .then(r=>{const cp=r.clone();caches.open(CACHE).then(c=>c.put(e.request,cp));return r;})
      .catch(()=>caches.match(e.request).then(m=>m||caches.match("index.html")))
  );
});
