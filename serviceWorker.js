const staticMusic = "music-site-v1";
const assets = [
  "/",
  "/index.html",
  "/styles.css",
  "/css/blog.css",
  "/css/about.css",
  "/css/aboutme.css",
  "/css/gallery.css",
  "/css/news.css",
  "/js/model.js",
  "/js/script.js",
  "/js/songs.js",
  "/pages/about.html",
  "/pages/aboutme.html",
  "/pages/blog.html",
  "/pages/contact.html",
  "/pages/gallery.html",
  "/pages/header.html",
  "/pages/main.html",
  "/pages/news.html",
  "/image/banner.jpg",
  "/image/bang-bang.jpg",
  "/image/faded.jpg",
  "/image/about.jpg",
  "/image/na-na.jpg",
  "/image/vedalam.jpg",
  "/image/galti.jpg",
  "/image/banner-bg.jpg",
  "/image/blog.jpg",
  "/image/g1.jpg",
  "/image/g2.jpg",
  "/image/g3.jpg",
  "/image/g4.jpg",
  "/image/g5.jpg",
  "/image/g6.jpg",
  "/image/g7.jpg",
  "/image/g8.jpg",
  "/image/g9.jpg",
  "/image/g10.png",
  "/image/g11.jpg",
  "/image/g12.jpg",
  "/image/g13.jpg",
  "/image/g14.jpg",
  "/image/jaga.jpg",
  "/image/m1.jpg",
  "/image/m1.webp",
  "/image/m2.jpg",
  "/image/m3.jpg",
  "/image/img/bg-img/16.jpg",
  "/image/img/bg-img/17.jpg",
  "/image/img/bg-img/18.jpg",
  "/image/img/bg-img/19.jpg",
  "/image/img/bg-img/20.jpg",
  "/image/img/bg-img/21.jpg",
  "/image/img/bg-img/22.jpg",
  "/image/img/bg-img/23.jpg",
  "/image/img/bg-img/24.jpg",
  "/image/img/bg-img/25.jpg",
  "/image/img/bg-img/hero-add.gif",
  "/image/img/core-img/chat.jpg",
  "/image/img/core-img/like.jpg"

];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticMusic).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});
