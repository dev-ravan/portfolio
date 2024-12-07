'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "033923d03d410e2ceb0818e48a48aab3",
"version.json": "5d9730e01b5806eb5738e286ab10d7a5",
"index.html": "9a57eaaebb3ba74a20e7280b83e1b6c9",
"/": "9a57eaaebb3ba74a20e7280b83e1b6c9",
"main.dart.js": "ee27f257901e0ffa93f2ef036d9bfaa9",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "d1d34f98ef972bd7c945f1254b73e28d",
"icons/Icon-192.png": "30279ccca92063869884e3b356f94d4a",
"icons/Icon-maskable-192.png": "30279ccca92063869884e3b356f94d4a",
"icons/Icon-maskable-512.png": "671706048ebf4c4c0310da58cb2d6090",
"icons/Icon-512.png": "671706048ebf4c4c0310da58cb2d6090",
"manifest.json": "dc609229fe1e8bebb74c19c87bfc1db3",
"assets/AssetManifest.json": "a7f946af09c012a62ff65c28d1931f54",
"assets/NOTICES": "cbfede21625edc5ee267e5328a8569a0",
"assets/FontManifest.json": "578fa61108a9a871931214344b9060a7",
"assets/AssetManifest.bin.json": "4d3e50a092aebc516056183252e4ce8d",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "83c878235f9c448928034fe5bcba1c8a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "f7be47c67e0c24d94de4194672a5652f",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/images/my_folio.png": "dd7644f68670ca34ebcaa693d15bd56e",
"assets/assets/images/taskify.png": "bd87448184a301646cad654b553c81a3",
"assets/assets/images/mob_stick.png": "307cf956a7a2b4e28319f8744d919a54",
"assets/assets/images/folio-img.jpg": "731dc25b25590e11d87b093010fdff94",
"assets/assets/images/plantify.png": "45a81108108798a9b67803428fbc0648",
"assets/assets/images/atresite.png": "96b060fccd1bd219fc99b3f52bc0f0dc",
"assets/assets/images/my_profile.jpg": "162eb0861a94579dd5b2a16dbeef117e",
"assets/assets/images/logo.png": "eb073eda19f972fbffd9a040274766af",
"assets/assets/images/profile.jpg": "95b72c9c8b733f45fc22b3cd0633ee8f",
"assets/assets/images/3d_view.png": "a959d67792915e26388f932420e5ec25",
"assets/assets/icons/contact.svg": "41e1dc018404e117fd90c92e5182650e",
"assets/assets/icons/web-app.svg": "9db1be31c34bc93ca22fc80367393869",
"assets/assets/icons/home.svg": "12bb722461bae92fb5e1265648d78df0",
"assets/assets/icons/github.svg": "aaa31b38ea5241a1838df1b22387aadb",
"assets/assets/icons/services.svg": "ce449da56f2748c63fd683bc78b6bb13",
"assets/assets/icons/projects.svg": "6732d9adfaf49a78d8f4c00b6c46aeb9",
"assets/assets/icons/website.svg": "a90d04a702ec252113633304d77caf08",
"assets/assets/icons/github.png": "b8e8b5a0666a18fa1049f951cf0f32ac",
"assets/assets/icons/mail.svg": "6853556d6a0059901cba149e96e11735",
"assets/assets/icons/mobile-app.svg": "1f9ca0bc492b0a4b5fe05dedeb7f7840",
"assets/assets/icons/about.svg": "9e519ac4f8df56130a08593573dfec3b",
"assets/assets/icons/cross-app.svg": "d3ae223acd489a494f3802ca114bafc6",
"assets/assets/icons/api.svg": "a980d923dbbd4a17fafd33c09b5fe235",
"assets/assets/icons/ui-design.svg": "63cbca7ac472cc48b1b42cd9a29ace9c",
"assets/assets/icons/call.svg": "38adc818ef1bd8a69ab83d48cc110d49",
"assets/assets/icons/location.svg": "421e54f30082934af7de2d39b89c4d31",
"assets/assets/icons/linkedin.svg": "7d20bd1e4710a12ba1a1321e69580000",
"assets/assets/icons/twitter.svg": "9d768bdf3d2730c4ac8b7ca830ce6274",
"assets/assets/icons/calendar.svg": "f9d40189ce30322ead377d6a4d92912a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
