'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "981e791b95164b4993ace35764c080ab",
"version.json": "13f6ce250125ac80cafc80aa105617b9",
"index.html": "872ec45f9da38c7c2f4d907d914ce702",
"/": "872ec45f9da38c7c2f4d907d914ce702",
"main.dart.js": "ce18fcedefe6a905cf9fe43d33120047",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "b0c0755c6e29513b6c052acdfb063259",
".git/config": "adbdd83a14d49fecc2959e41c170ed64",
".git/objects/92/57d414bc7f95a50f1e94cab6bbf6b8c17b0806": "39d1122d0022ba41c119ea643ae2029d",
".git/objects/92/17413155c6d24e6a13ac13fa1f6493e09e0f49": "138cd3827980c6d455d1993f84462caa",
".git/objects/9b/b40b759f941ed53b61c3973130e51df01b6776": "7ab286355bec6845ca6403a33f7edee4",
".git/objects/9e/6140d64f5515ebf5a28a500ed27349f994d964": "e5e23ad24d6b9558d6c5de0bb667592d",
".git/objects/04/a7149d00cff792eaa5058acb22962692a5d7d9": "85269078c0c243026670ed987343c2c0",
".git/objects/04/f5ec3c613225b5724f5242a321c8a711fb5192": "fb6f740627de3406ad3e7b4f41abbf4f",
".git/objects/56/a9837f030ca902ee9d80877c3ee0a82161dcb4": "473c9341b947f182440a0af983e14b66",
".git/objects/51/60a6fc170c6b0e8e109c3a16a0aa6971c310ad": "8d12a06bde7ef0eaefcb3fa650179766",
".git/objects/67/17071b22f76fc38ca3132b93fed4e31e913dc5": "1d690b71bbac2cbe63563f684ceb88ba",
".git/objects/93/254cfa36ee9d72a9c98748c1ad75b2228cba0a": "da8fc5a18dd83577dac56e710144c813",
".git/objects/0e/b8d4d0c9ab1bda1b2a3035dfcba6d79906417a": "46c23d2749d3965b3b806e64ce85e153",
".git/objects/0e/81f7d0c16e1979d1b72219fe644e7544fd4526": "54eba9db4da8840baf7f2b972f0d3fe7",
".git/objects/34/ebb1b03532379afb4194f2b14a258abf8dfdd1": "df7548c5690352481bcecc65377e1524",
".git/objects/b2/145668a43b3f700c15f62be45d6d1f9ef05160": "ddb1aa1b516b63f64c3a71741d940f63",
".git/objects/d9/b6acf733f98127fc72f4398ea9bce309e90788": "27a52a4a1285a74336126874680d5b6e",
".git/objects/ad/91c0a7b58e19aced0096bfa5d814d5f94c0d7a": "c81b9c5697ce14167d12e46d0eae10bc",
".git/objects/be/37283f699839253af5c1ae188920a80c7d8f16": "255e95a5d28a3d0cbeceb5a89066a082",
".git/objects/da/f7e7b46de39247a2628b1b3278da5936a1fb58": "e329f78224eab420654c0e61020e9572",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/64f1c05644f8bc5a68c1e26794b7f5fc01daae": "692b1ff4fe748dab7bec0ea9b55cfe5a",
".git/objects/e2/b8828ff035661453609e57e6019c0f1d411d21": "cce96c0719b31855f00b26daccd74653",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/51d5fe20d3ff7a690da769c57d8b438e8c6cce": "e26f5286d1505160aebb24994e95a22b",
".git/objects/f5/27dfc990e7010c6f09b47430a0585fd0f404d9": "91ce6088b81952f2fe216e67e5cd4948",
".git/objects/cf/a05dccd5c8efc2305e4a45e4c3b822628367d0": "eaa4a4dd8c693e4ac7fde2b9f43a0442",
".git/objects/ca/e093ae72c073183a69450e88e339254c36abea": "3712add438c5089aa972bfd07094454e",
".git/objects/ed/04af1b7785ea6972786fe850333fbf05f9a47d": "b957435bf7bbdd6acf3b20fdd23492a3",
".git/objects/c1/84aa531c0b674abce3f774eab36e10b7dc7678": "ed324cad9a35d828455fb0aa52dd5dcb",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/20/4b899788e8b8a83c8ff80ab4d8cbe6832c66fc": "2b3e97af3ad2c5f4b675db3968a22bff",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/4b/71a5f793491844caf45777661a61b426b685ee": "8a91624978c355036edf91249cb649c1",
".git/objects/7d/4d3ac53233a4d696d9e4db94267e1c98ba687f": "44fbf7d898362e4102e57961820511af",
".git/objects/7d/f830574d3e08c4658a898cf0fbab0ee55ef409": "c2b00b845c2a065dd9a29d569d284931",
".git/objects/7d/571f34a1863ac1864e3bed5b2eb94e349ba82e": "096db8e8e0c26b8ad78db25e857c14d4",
".git/objects/29/204b619cfb383ac41d962dac3aa7935bcb586d": "d6cf5b396636d23215cceefe3658d2f9",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/80/f2df1a8baf6c498c93ca7642fe85efc91f026e": "6e326c704781c97ff491a0bd3c0c6553",
".git/objects/74/8d568b1a748b0d0683a0c5a25698e452de0ec0": "3734a64609d47f766e95aa7766533af9",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/8d18185aad549483338fd110c72acaeb47a7e0": "fa0f3506db16e93f4c11b045d0c2ee05",
".git/objects/21/5d05e67cf3dea5a75c6796cfd4e0c450c5a9ca": "2c7841d1e2ad213fe701f3ca5d6eba64",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/36/91d38291f4114b8065e3acc3291ae36b7b9cee": "fe75ea77db6976dc8c894307d4db97c1",
".git/objects/65/fd225c486b32a09fc04945a011375d2d7c3701": "359586533b2213263e15698c56983219",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/99/c6d14fd7c2aa4596ab27d25d421df6745250d8": "ee9a0f51b7ec39016bb5fee834cba282",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/fff50cd74eb66febaff68baa3432f8ed69c92f": "51a83d82f98bfe7593d74985da1274ad",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/077b749fb8d30dbbf6974505d7f7588afc78a9": "bea2b1c5d54c7c9f5f4ee0fe25f9432d",
".git/objects/a8/c2dbae1a0156a1c18e85029cb62bfd77f46f5a": "ffd93478e202ce677d3a3947daeec85a",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c3/2995b3abe72a7502c043e4fc942e52dcfbbdaf": "8ac927e71a31cd75327ffcde26216c6e",
".git/objects/e1/1a4f1898def0a6af17f8bdffa28ac6b004a625": "e92c648e6277f53eb9e40e2073ca3007",
".git/objects/c2/df7b1b774c890840dc96fca4120260b604dc14": "bd99c3fdd73f160ffb97feee1f3cfc34",
".git/objects/f8/c20b85b00184633ebe3b208ae8182132e13918": "03c40a8533e5411b987e5900fb39287a",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/636d2b52c432e12f5d435d710d14a2b4b624d7": "5c3e106baf1db568323964b1b2e57e57",
".git/objects/79/1ea070960b82772b6ee59d2e1e6d7dc39f9fb5": "0b708035bc09f58b0f7f594d037e145c",
".git/objects/2d/fcdbe9f2df0332cee24295b9c0a4cdbf2478b7": "b40637ed7a305a7a7296f4f96b139cc1",
".git/objects/41/087fab42591ace11817bb583901c29dc22731e": "00f2f33e007adc8e4ff5983fce850bca",
".git/objects/4a/8685994e45c4bc806ff57474460a5fdc44a8ef": "8f516d65fc898f55dc8df9ae19480cda",
".git/objects/4f/346c3e43f95e778d7cef3cb6ceede9cd2bf1c8": "99981890f1649c8ef95c28d9e5a27d4e",
".git/objects/8c/f4d30bccaa62c6b56c5752a9afedd31892b069": "b98b14f0f8df6391ee1b5d8bd6c4c764",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/1c/8dfb8e46c0b7aeeea2b920f464ef6694ae44b2": "503966d7e9e8df2f075ca37fbfca11a6",
".git/objects/1c/8bc2f2e719865ba6cb2ddaeaf3d240b1fa4a9d": "7ca37cffba8dfe76d4b425f8cd035ae5",
".git/objects/1c/af9ec01f1513384750d99e5ff662c7e2e35ec6": "8761f00f20e89691ad05f1e58857384f",
".git/objects/78/0f3bd5a6d653aebd96b3db7d279e0fae6bd287": "bd8190a06b2ea6b97db5948177f40064",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/25/d3fc6b227bae827af1813de85ec7754e72f702": "d3b3271ef2eb9fa9a73457384785242b",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1d435e008063d856e34b6130bbeaab8a",
".git/logs/refs/heads/main": "1d435e008063d856e34b6130bbeaab8a",
".git/logs/refs/remotes/origin/main": "e6b86a47147261aa3c178b86f78e2470",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "3e4ef1346d176cc264bf65fd5ce21ec2",
".git/refs/remotes/origin/main": "3e4ef1346d176cc264bf65fd5ce21ec2",
".git/index": "09458c252dce2c465fcdb11d1947d1c6",
".git/COMMIT_EDITMSG": "43a41a83fba5d14d3559d6d0f34792d9",
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
