/* Service worker do Pequenos Gênios — funciona offline.
   Ao alterar qualquer arquivo do app, troque o número da VERSAO. */
const VERSAO = "pg-mobile-v9";
const CACHE = "pequenos-genios-" + VERSAO;
const ARQUIVOS = [
  "./", "index.html", "manifest.webmanifest",
  "fredoka-latin.woff2", "fredoka-latin-ext.woff2",
  "maia.webp", "teo.webp", "capi.webp", "maia-head.webp", "teo-head.webp", "capi-head.webp",
  "icon-192.png", "icon-512.png", "maskable-512.png", "apple-touch-icon.png"
];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ARQUIVOS)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => (k.startsWith("mundinho-") || k.startsWith("pequenos-genios-")) && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const r = e.request;
  if (r.method !== "GET" || new URL(r.url).origin !== location.origin) return;
  if (r.mode === "navigate") {
    e.respondWith(fetch(r).then(res => { const cp = res.clone(); caches.open(CACHE).then(c => c.put("index.html", cp)); return res; })
      .catch(() => caches.match("index.html")));
    return;
  }
  e.respondWith(caches.match(r).then(hit => hit || fetch(r).then(res => { if (res.ok) { const cp = res.clone(); caches.open(CACHE).then(c => c.put(r, cp)); } return res; })));
});
