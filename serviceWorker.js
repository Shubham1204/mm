const staticMusic = "music-site-v1";
const assets = [
  "/",
  "/index.html",
  
  "/css/styles.css",
  "/css/blog.css",
  "/css/about.css",
  "/css/aboutme.css",
  "/css/gallery.css",
  "/css/news.css",
  "/css/contact.css",
  "/css/lyrics.css",
  
  "/js/model.js",
  "/js/script.js",
  "/js/songs.js",
  
  "/pages/about.html",
  "/pages/aboutme.html",
  "/pages/blog.html",
  "/pages/contact.html",
  "/pages/gallery.html",
  "/pages/header.html",
  "/pages/lyric.html",
  "/pages/lyrics.html",
  "/pages/main.html",
  "/pages/news.html",
  "/pages/theory.html",
  "/pages/track.html",
  "/pages/lyrics-image.html",

  "/image/banner.jpg",
  "/image/bang-bang.jpg",
  "/image/faded.jpg",
  "/image/about.jpg",
  "/image/na-na.jpg",
  "/image/vedalam.jpg",
  "/image/galti.jpg",
  "/image/banner-bg.jpg",
  "/image/blog.jpg",
  "/image/conatct.png",
  "/image/theory.jpg",
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
  "/image/img/core-img/like.jpg",
  "/image/icons/icon.jpg",

  "/songs/bang.mp3",
  "/songs/faded.mp3",
  "/songs/galti.mp3",
  "/songs/jaga.mp3",
  "/songs/nana.mp3",
  "/songs/vedalam.mp3",

  "/navabar/bootstrap/css/bootstrap-grid.css",
  "/navabar/bootstrap/css/bootstrap-grid.css.map",
  "/navabar/bootstrap/css/bootstrap-grid.min.css",
  "/navabar/bootstrap/css/bootstrap-grid.min.css.map",
  "/navabar/bootstrap/css/bootstrap-reboot.css",
  "/navabar/bootstrap/css/bootstrap-reboot.css.map",
  "/navabar/bootstrap/css/bootstrap-reboot.min.css",
  "/navabar/bootstrap/css/bootstrap-reboot.min.css.map",
  "/navabar/bootstrap/css/bootstrap.css",
  "/navabar/bootstrap/css/bootstrap.css.map",
  "/navabar/bootstrap/css/bootstrap.min.css",
  "/navabar/bootstrap/css/bootstrap.min.css.map",

  "/navabar/bootstrap/js/bootstrap.bundle.js",
  "/navabar/bootstrap/js/bootstrap.bundle.js.map",
  "/navabar/bootstrap/js/bootstrap.bundle.min.js",
  "/navabar/bootstrap/js/bootstrap.bundle.min.js.map",
  "/navabar/bootstrap/js/bootstrap.js",
  "/navabar/bootstrap/js/bootstrap.js.map",
  "/navabar/bootstrap/js/bootstrap.min.js",
  "/navabar/bootstrap/js/bootstrap.min.js.map",

  "/navabar/jquery/jquery.js",
  "/navabar/jquery/jquery.min.js",
  "/navabar/jquery/jquery.min.map",
  "/navabar/jquery/jquery.slim.js",
  "/navabar/jquery/jquery.slim.min.js",
  "/navabar/jquery/jquery.slim.min.map",

  "/mainifest.json",
  "/serviceWorker.js"

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
