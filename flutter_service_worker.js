'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "0f3327dc33addb11fd8c494d46fbea7b",
"version.json": "13f6ce250125ac80cafc80aa105617b9",
"index.html": "872ec45f9da38c7c2f4d907d914ce702",
"/": "872ec45f9da38c7c2f4d907d914ce702",
"main.dart.js": "7f1352d750338f13cec7f15223e0abed",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "b0c0755c6e29513b6c052acdfb063259",
"assets/AssetManifest.json": "cd81f2e7fe4c75f75b67dfbfcf708a5b",
"assets/NOTICES": "29dfaf999f88da685f76af2e1d5b0a41",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "5f8939a840a8bc9df92c588adb81ffee",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "596154818720caa08124125dd66e92bc",
"assets/fonts/MaterialIcons-Regular.otf": "80341073fcf82a578f1d624af335a2e4",
"assets/assets/icons/view_count.png": "875c238bb7b0b492d524dbb8f25f1964",
"assets/assets/icons/tab_item_community_on.png": "a552be9e0c11b9bc248dfb8bebdf9326",
"assets/assets/icons/profile_person_small.png": "6f234cafcc75247a952ddab5142f9c7d",
"assets/assets/icons/like_off.png": "dfde2d472b46e3af08c47130b395ed7b",
"assets/assets/icons/like_on.png": "705d3050b87ca8216e55f088df0482f3",
"assets/assets/icons/tab_item_mypage_on.png": "354eadc30356a6599879ac2d29066b5e",
"assets/assets/icons/profile_person_large.png": "11ddbfdfad3e3f1ab566f9cce18e5462",
"assets/assets/icons/chat_send_off.png": "a52f939b12a77403c942b7f28bbecec5",
"assets/assets/icons/tab_item_fortune_off.png": "035e4fc7b33fe6f76edd1a68b2971d2a",
"assets/assets/icons/arrow_left.png": "2777313286ba6ee3c4bafb652506f4c4",
"assets/assets/icons/reply_arrow.png": "392c87d5a30646842ef03760fc6aa00c",
"assets/assets/icons/tab_item_fortune_on.png": "0268f761ea8246fb9b564354857bb4d2",
"assets/assets/icons/fortune_sinsu_thisYearLuck.png": "85e662863a7ec662f8b2c342e1ac5f61",
"assets/assets/icons/plus_puple.png": "f62f025aff8b2e37819077616eb0ddc8",
"assets/assets/icons/send_comment_off.png": "d2e12662e01382b34e774bf6f5cfc3f6",
"assets/assets/icons/search.png": "23b08ee3c0921d563049131fba0a8790",
"assets/assets/icons/today_fortune.png": "52544e505ebbda0eee2eeb99be3d4cd0",
"assets/assets/icons/tab_item_chat_on.png": "8c640e1da3e0a98be73c4d91870cee03",
"assets/assets/icons/chat_send_on.png": "456f4159aabc29f921e0429cb0c256e7",
"assets/assets/icons/tab_item_mypage_off.png": "559088d85707649915b8ef94fffa3f90",
"assets/assets/icons/comment_count.png": "5adb6ade3215b87cbb8a49e239de5138",
"assets/assets/icons/menu_dot.png": "2e5ee81fd7ec7eb575c992a9d13829ee",
"assets/assets/icons/tab_item_community_off.png": "19cd85db1bbd4435bbd9d93a6f7197f7",
"assets/assets/icons/icon_profile_person.png": "aa6f0b7f7390df124f2897bb1841dfba",
"assets/assets/icons/image%252045.png": "8484351385cb17a2ca89ab54603c0757",
"assets/assets/icons/tab_item_chat_off.png": "ed898374937f30bf65456f3769e71875",
"assets/assets/icons/xmark_circle.png": "69d9ae273f8ccc47f007c92b3b80d22a",
"assets/assets/icons/tab_item_home_off.png": "a9d2e7d1adb3fd0ad8a322e1eff83854",
"assets/assets/icons/arrow_bottom.png": "53feacf343006bdf29d0dae0c8e4d941",
"assets/assets/icons/image%252046.png": "937399fd11388db5f37ef326e54c054f",
"assets/assets/icons/image%252047.png": "782ad0f9a5eb78e0ae25c11bd038882f",
"assets/assets/icons/send_comment_on.png": "357edd4108b92c917e66874a96771107",
"assets/assets/icons/camera.png": "a41746d9c7ef78123584f56771ee8df9",
"assets/assets/icons/apple_sign_in.png": "b3ed7c3bbceb00f204830c85357ccf56",
"assets/assets/icons/tab_item_home_on.png": "79c0cc76bfed5774d24e30025a1aab61",
"assets/assets/icons/setting.png": "67b1727a0d0d4ca6722a1d0a6becbd43",
"assets/assets/icons/google_sign_in.png": "4c179d91beb9a4af62f0377730d5fb21",
"assets/assets/icons/fortune/banner_compatibility.png": "937399fd11388db5f37ef326e54c054f",
"assets/assets/icons/fortune/banner_today.png": "8484351385cb17a2ca89ab54603c0757",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
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
