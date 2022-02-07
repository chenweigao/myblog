/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "c4ce8e448b060449b1db5097f9d8cd99"
  },
  {
    "url": "Algorithm/algorithm.html",
    "revision": "42424eee8068b985fd6880e35614d7e7"
  },
  {
    "url": "Algorithm/array.html",
    "revision": "9182df1e30ad99807be2f5f0f2aa83c5"
  },
  {
    "url": "Algorithm/backtrack.html",
    "revision": "82c10f69a8cf508df05759bab93c0baa"
  },
  {
    "url": "Algorithm/binary_search.html",
    "revision": "73d3ce31d703cf99c238b8031869a478"
  },
  {
    "url": "Algorithm/bit_opt.html",
    "revision": "6ae72d32e51b7b475fca38c1a533f609"
  },
  {
    "url": "Algorithm/dfs_bfs.html",
    "revision": "6c62b5949ab1dffec0c1d0bec86322c3"
  },
  {
    "url": "Algorithm/dp.html",
    "revision": "333a6c25079e7016b6f1158ebf34afe1"
  },
  {
    "url": "Algorithm/fibonacci.html",
    "revision": "a581fe6b317223f79252998cc249dc35"
  },
  {
    "url": "Algorithm/lcs.html",
    "revision": "096eeb5f6ff9bf6194ee772747a52265"
  },
  {
    "url": "Algorithm/linked_list.html",
    "revision": "f3a1e70a6d1b5a787969108b7c44bf76"
  },
  {
    "url": "Algorithm/math.html",
    "revision": "370c54a87c1f6d03e482d2768eb509e0"
  },
  {
    "url": "Algorithm/package.html",
    "revision": "02d48a3bc44e8461e01291ccf6e4d1be"
  },
  {
    "url": "Algorithm/prefix.html",
    "revision": "610c8679cfe74a29d934ae2e06228444"
  },
  {
    "url": "Algorithm/priority_queue.html",
    "revision": "a053ff92299351b5d2bcb7a344c60640"
  },
  {
    "url": "Algorithm/slide_window.html",
    "revision": "d1667c70d2bd49ac7804182463ff36bb"
  },
  {
    "url": "Algorithm/sort.html",
    "revision": "11fae83945cfb7be2442044b00d6aca2"
  },
  {
    "url": "Algorithm/stack.html",
    "revision": "32daa659328c89e97ed9439d835f5b7a"
  },
  {
    "url": "Algorithm/string.html",
    "revision": "c0dc3e959b1756eb27a924b53a8428aa"
  },
  {
    "url": "assets/css/0.styles.71994f2f.css",
    "revision": "c74b77e340129a649bf378df95e52f07"
  },
  {
    "url": "assets/fonts/MathJax_AMS-Regular.07173fb7.woff",
    "revision": "07173fb77d2ee655811499d40c8388e7"
  },
  {
    "url": "assets/fonts/MathJax_Fraktur-Bold.bc421258.woff",
    "revision": "bc42125861bd5bfc8686deeb612dcbb3"
  },
  {
    "url": "assets/fonts/MathJax_Fraktur-Regular.b80e08d5.woff",
    "revision": "b80e08d5a79acbd1fafb1ca6f3515664"
  },
  {
    "url": "assets/fonts/MathJax_Main-Bold.c9423d5d.woff",
    "revision": "c9423d5dc9d82a38ca215f74e9cdd9f2"
  },
  {
    "url": "assets/fonts/MathJax_Main-Italic.7e83626b.woff",
    "revision": "7e83626ba8bf2d20dc41565f1e6d0afc"
  },
  {
    "url": "assets/fonts/MathJax_Main-Regular.9995de47.woff",
    "revision": "9995de4787f908d8237dba7007f6c3fe"
  },
  {
    "url": "assets/fonts/MathJax_Math-BoldItalic.77dbcee3.woff",
    "revision": "77dbcee3c3d9a82a0c04a4ae7992b895"
  },
  {
    "url": "assets/fonts/MathJax_Math-Italic.5589d1a8.woff",
    "revision": "5589d1a8fc62be6613020ef2fa13e410"
  },
  {
    "url": "assets/fonts/MathJax_SansSerif-Bold.07281897.woff",
    "revision": "07281897a98a61c3733e1670f82a9fd5"
  },
  {
    "url": "assets/fonts/MathJax_SansSerif-Italic.3d580bd5.woff",
    "revision": "3d580bd561716bfb1f0b4fdd7063a802"
  },
  {
    "url": "assets/fonts/MathJax_SansSerif-Regular.bc3af04f.woff",
    "revision": "bc3af04f9a671fcabd6498042c57478f"
  },
  {
    "url": "assets/fonts/MathJax_Script-Regular.4c74e33b.woff",
    "revision": "4c74e33b0feb1fdbda49403a5e7ed604"
  },
  {
    "url": "assets/fonts/MathJax_Typewriter-Regular.72815766.woff",
    "revision": "72815766b08ca24d4d29ad1f5d4ecb45"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.76b01c69.js",
    "revision": "933c7c5efed57c4856ade3526c2bf8b6"
  },
  {
    "url": "assets/js/10.0a183579.js",
    "revision": "d03b80f59ae00864765ae96fbbdd9219"
  },
  {
    "url": "assets/js/11.a03ef169.js",
    "revision": "42513648a01d4f2833a07b87f41f34ea"
  },
  {
    "url": "assets/js/12.f26a7d7a.js",
    "revision": "2e426769249dc795d098d49976aa370c"
  },
  {
    "url": "assets/js/13.d3b95d41.js",
    "revision": "7e6d8fa4b34d5a3a13a6ed7821487eb1"
  },
  {
    "url": "assets/js/14.4ea22ee2.js",
    "revision": "629d00a6a6fa94d503df9f2e27ee2d06"
  },
  {
    "url": "assets/js/15.8fb23eac.js",
    "revision": "2fbcd7ec2a18bfd443d6e56bfcac5793"
  },
  {
    "url": "assets/js/16.cf8de121.js",
    "revision": "e32489e376bb201187313676f50efed2"
  },
  {
    "url": "assets/js/17.c225ab11.js",
    "revision": "7474fbf44f0d649456551b61389cd964"
  },
  {
    "url": "assets/js/18.11e29de6.js",
    "revision": "680f4e3360bcf21fc304223dc951bed1"
  },
  {
    "url": "assets/js/19.8a55d76b.js",
    "revision": "058dfee0992332a399292a17edd84e5c"
  },
  {
    "url": "assets/js/20.e4a0d4f9.js",
    "revision": "d0c6292b42e28503a5bd2845556ed1fb"
  },
  {
    "url": "assets/js/21.bfa3ed5f.js",
    "revision": "44876252a51c1b17570ed236c73e8cf2"
  },
  {
    "url": "assets/js/22.881078d3.js",
    "revision": "e2790b89482b142cfb8b1af425a01cdd"
  },
  {
    "url": "assets/js/23.b7063063.js",
    "revision": "dc80c66d286f5e2632d1e940c863a17f"
  },
  {
    "url": "assets/js/24.21afc6da.js",
    "revision": "b4400f5896b835c3643c6890b5d06c9b"
  },
  {
    "url": "assets/js/25.863e4060.js",
    "revision": "95b5e96f405f685b43cd2efd933cc836"
  },
  {
    "url": "assets/js/26.3b9440f2.js",
    "revision": "2bc80ea9272144f0165e0a9c6e39ed06"
  },
  {
    "url": "assets/js/27.02956fa3.js",
    "revision": "3d18cb032cb92a6202fa4aab2bb4dc92"
  },
  {
    "url": "assets/js/28.d326838a.js",
    "revision": "820b435154344dc0a9922e120ace97c9"
  },
  {
    "url": "assets/js/29.f4789005.js",
    "revision": "dd89ef102daa6107c01acd27d630a073"
  },
  {
    "url": "assets/js/3.a9798fbe.js",
    "revision": "b42243b49a6c7a2c48f58eb0e08f627c"
  },
  {
    "url": "assets/js/30.178fccd3.js",
    "revision": "7f29e1bf5381c1ee08ab724ef8abec1e"
  },
  {
    "url": "assets/js/31.5e994fb5.js",
    "revision": "356e0833674b8f4c4bf93679d5c18469"
  },
  {
    "url": "assets/js/32.69ace0dc.js",
    "revision": "3b11e8685fae50acd5104543ec28be09"
  },
  {
    "url": "assets/js/33.e80e519b.js",
    "revision": "1bba19b8f23ab744c1800abffcf800cf"
  },
  {
    "url": "assets/js/34.11406db4.js",
    "revision": "a41327b831d9e6227ba842c64f1393e8"
  },
  {
    "url": "assets/js/35.70105e9a.js",
    "revision": "5df59a90e2e67c7f1de9fbbf24143a3d"
  },
  {
    "url": "assets/js/36.7e1aa7a6.js",
    "revision": "279637df111ce41c50fca8c769bc0b43"
  },
  {
    "url": "assets/js/37.8f4fbae0.js",
    "revision": "67f40e0e5e98c9c339f60396efb3ab2e"
  },
  {
    "url": "assets/js/38.c0b3f0ad.js",
    "revision": "1c446ed1fb54f7e4f7dd3c22fb3647c6"
  },
  {
    "url": "assets/js/39.2910de4d.js",
    "revision": "c4ef1126eff5c2c21a7422941193fe62"
  },
  {
    "url": "assets/js/4.d53fc5cb.js",
    "revision": "ac94268bf4121893860c3aecd85cd79f"
  },
  {
    "url": "assets/js/40.96057ad6.js",
    "revision": "a1552388c81c512cc43cee47dfad1844"
  },
  {
    "url": "assets/js/41.7b92e916.js",
    "revision": "ab0e88d357975a5f9e1babad996e9ada"
  },
  {
    "url": "assets/js/42.cc499b8b.js",
    "revision": "f60c291b1588617c26ad34db5eb43e32"
  },
  {
    "url": "assets/js/43.29ddf432.js",
    "revision": "7817d73151c296d7996ddfddff59edba"
  },
  {
    "url": "assets/js/44.49411b58.js",
    "revision": "00dc0113caa66542b66f91c1421947c1"
  },
  {
    "url": "assets/js/45.f28f6522.js",
    "revision": "ddbb56ea67f859dc346a1c4452eafaba"
  },
  {
    "url": "assets/js/46.e9ddcabc.js",
    "revision": "281cb6829c9aebf410270334a6bc9e49"
  },
  {
    "url": "assets/js/47.282e2a7d.js",
    "revision": "9e51486ef9a70713a194190a139e6947"
  },
  {
    "url": "assets/js/48.519e3a8e.js",
    "revision": "15cb856dba4447a568aa1863d806dbef"
  },
  {
    "url": "assets/js/49.242aa181.js",
    "revision": "a940abd298dbfca799d51c8cf1100533"
  },
  {
    "url": "assets/js/5.7aedaec4.js",
    "revision": "f5bc60908ed0aa65902ef8854c84ddc4"
  },
  {
    "url": "assets/js/50.1317de68.js",
    "revision": "150fa96ba69ec00bfd3a32282f9eaaf8"
  },
  {
    "url": "assets/js/51.c34b4a17.js",
    "revision": "617ef5f0f91b1ab0eb3520deaeea8e18"
  },
  {
    "url": "assets/js/52.3b7dd990.js",
    "revision": "1210a39b39f7d012704599794d32a6f6"
  },
  {
    "url": "assets/js/53.ed1e8e58.js",
    "revision": "4672275bb0b24a5cfed47cdc97937648"
  },
  {
    "url": "assets/js/54.e8e04427.js",
    "revision": "b2f6039a722f62512ec222bf1c5084e3"
  },
  {
    "url": "assets/js/55.91b961cc.js",
    "revision": "e0f78fee00d27e2fdc831fb62cfb88b2"
  },
  {
    "url": "assets/js/56.1f4b4373.js",
    "revision": "c3618bcf78fc56869ee86c577ff9112f"
  },
  {
    "url": "assets/js/57.24930676.js",
    "revision": "1736fc8593a7d1a88d2391a57e90756b"
  },
  {
    "url": "assets/js/58.0c07ef31.js",
    "revision": "aa85f2606fac0f0c8caa29086b2e37b2"
  },
  {
    "url": "assets/js/59.97c8f9ce.js",
    "revision": "a0727e5f1b250b68fc30e61dec89b98f"
  },
  {
    "url": "assets/js/6.56dd9870.js",
    "revision": "ce880f71dc9b58e729ab2de17b473602"
  },
  {
    "url": "assets/js/60.f576cac3.js",
    "revision": "1d0024ab8fe20e5759eba9e6b75d6686"
  },
  {
    "url": "assets/js/61.6e4fb3ef.js",
    "revision": "dacb04ab32d4308b5e4e54a84690b0bd"
  },
  {
    "url": "assets/js/62.500fedcd.js",
    "revision": "4de4bbe92d11efe12b601a2eabfca809"
  },
  {
    "url": "assets/js/63.7f31b89f.js",
    "revision": "c871085d0f2dbad286dde9c5c9d6ab23"
  },
  {
    "url": "assets/js/64.31554884.js",
    "revision": "524a658c3b2bdf13bc00a12ccd3df38f"
  },
  {
    "url": "assets/js/65.18b55458.js",
    "revision": "2cf551830f8c5604f40fe221a7989038"
  },
  {
    "url": "assets/js/66.4afdc430.js",
    "revision": "bb2aa3dcb60c0557ea3b68a8ff7d5971"
  },
  {
    "url": "assets/js/67.61362a31.js",
    "revision": "e86fc2e64632be214d3b1733bc1eeb59"
  },
  {
    "url": "assets/js/68.65a12531.js",
    "revision": "21e4694f484743a5de88fd9fbc0a4ac0"
  },
  {
    "url": "assets/js/69.541c8690.js",
    "revision": "acc72ff6e0f5b389389636465146c8c0"
  },
  {
    "url": "assets/js/7.799fb789.js",
    "revision": "a0921b4b8ba888789769c519117c8711"
  },
  {
    "url": "assets/js/70.ed1a8749.js",
    "revision": "37d91d7ad927230f1a47d6263a2a70d2"
  },
  {
    "url": "assets/js/71.201c3cf0.js",
    "revision": "1a2c490bee72325d900272cdc027c947"
  },
  {
    "url": "assets/js/72.e314ebf4.js",
    "revision": "a83f7ad5ab500af20927343733dce66b"
  },
  {
    "url": "assets/js/73.83a7e061.js",
    "revision": "41ab4c7bc2c046d1b2dcb625d1d6e338"
  },
  {
    "url": "assets/js/74.b3e1c780.js",
    "revision": "113a604db30a13795cb615d9d5ff08f6"
  },
  {
    "url": "assets/js/75.c79f5b1a.js",
    "revision": "9301debd6d223ffc1e7ac9f3b973e1b7"
  },
  {
    "url": "assets/js/76.1a92c366.js",
    "revision": "52bdbe0945f9f4d4558686823e144f2f"
  },
  {
    "url": "assets/js/77.7c7a602c.js",
    "revision": "32edb0dc3967868c7cb7f6929359e0cf"
  },
  {
    "url": "assets/js/78.dd3c1e50.js",
    "revision": "4ca413465984cfa81a2855ad2015c772"
  },
  {
    "url": "assets/js/79.ff0da6f3.js",
    "revision": "4dd6952e36f98707407556bae0ada2ca"
  },
  {
    "url": "assets/js/8.d10012db.js",
    "revision": "685c5be4a3c629d9119f6ce052383d62"
  },
  {
    "url": "assets/js/80.4fdb3bf5.js",
    "revision": "08439657cf0ad8d05a7a3f1939700534"
  },
  {
    "url": "assets/js/81.e8c76ed8.js",
    "revision": "2f5cdfa469355a04ff8f9887483052e8"
  },
  {
    "url": "assets/js/82.bacff8ea.js",
    "revision": "e91976bc4630c36906583097098ff0d4"
  },
  {
    "url": "assets/js/83.355ad832.js",
    "revision": "0226812fcf9fef5afb35289660fd7a75"
  },
  {
    "url": "assets/js/84.7aaaca56.js",
    "revision": "c651ee222079ee1f2530d427658943c1"
  },
  {
    "url": "assets/js/85.5cfb875b.js",
    "revision": "53e9d8839fb345fbd0ad36a1e9f14526"
  },
  {
    "url": "assets/js/86.03aa4eeb.js",
    "revision": "9aa04f9210ae5ac1f193aa58c80858ab"
  },
  {
    "url": "assets/js/87.eacb2bae.js",
    "revision": "f3118ef259b3f1d75a2c07c6f80c8388"
  },
  {
    "url": "assets/js/88.eb7da425.js",
    "revision": "e7277064e7763e9de541b3b37e1828c2"
  },
  {
    "url": "assets/js/89.8d98fea8.js",
    "revision": "92e2200065f8079a338792e67f09ec6d"
  },
  {
    "url": "assets/js/9.0cdfd736.js",
    "revision": "8ad5e4868e505c2b3bbc78ccb0d7c745"
  },
  {
    "url": "assets/js/90.912b6c51.js",
    "revision": "931d432a65db3afc9b23f7744dbb031f"
  },
  {
    "url": "assets/js/91.47042b16.js",
    "revision": "9ccb07300dc334133e4497d014542f19"
  },
  {
    "url": "assets/js/92.2bab0beb.js",
    "revision": "3cfeced99bbc7767616c41a93bef9003"
  },
  {
    "url": "assets/js/93.fe1eb37c.js",
    "revision": "1fba6d20670263b34497eec1d4abadd3"
  },
  {
    "url": "assets/js/94.ddb8318d.js",
    "revision": "23df8fcbde3956c7721d7075e2637970"
  },
  {
    "url": "assets/js/95.026e939f.js",
    "revision": "734a056f8e50b5e748c0b678305c2db7"
  },
  {
    "url": "assets/js/96.7f41b6ed.js",
    "revision": "d30a1ed1baa5032fd7e2f04cce7b8a9f"
  },
  {
    "url": "assets/js/app.ff413545.js",
    "revision": "0ced3e78cf16ed6ebeb7e7ec7722751a"
  },
  {
    "url": "avatar.png",
    "revision": "3ff998db4460c874a197c47584933a8f"
  },
  {
    "url": "binary_search/binary_search_1.png",
    "revision": "16a20193f3b324ab061dd0c36c6d77ac"
  },
  {
    "url": "binary_search/binary_search_2.png",
    "revision": "5d93e57e613d7614658220674c28270c"
  },
  {
    "url": "binary_search/binary_search_3.png",
    "revision": "f9a7a88c25194a9047806ebf6e5df661"
  },
  {
    "url": "categories/Algorithm/index.html",
    "revision": "bada8913f60f471cddfb0230b620c9a7"
  },
  {
    "url": "categories/Algorithm/page/2/index.html",
    "revision": "2ddd23cb897db4f3feff8a2ab52c80ce"
  },
  {
    "url": "categories/Algorithm/page/3/index.html",
    "revision": "5e9d821ca72a8aa2ccd1cb0ffdeecac7"
  },
  {
    "url": "categories/Cloud/index.html",
    "revision": "efe79b55b6a6a78d3718935ff0240bff"
  },
  {
    "url": "categories/Database/index.html",
    "revision": "3e80841c2ff6e2a9240d811016578457"
  },
  {
    "url": "categories/Frameworks/index.html",
    "revision": "451d017f3f520828aaaa2443a1a6fec7"
  },
  {
    "url": "categories/Frontend/index.html",
    "revision": "18fef8e6231b5c52b77945a3eb26e266"
  },
  {
    "url": "categories/Grammar/index.html",
    "revision": "e09426450025f3dc726a1e94c279124f"
  },
  {
    "url": "categories/index.html",
    "revision": "ee9b0a12ee77b51b552139faf73e9601"
  },
  {
    "url": "categories/Linux/index.html",
    "revision": "06eb0f64306c63d5ae0279e76c183420"
  },
  {
    "url": "categories/Networks/index.html",
    "revision": "41565581356409eb03df29d40e2d679d"
  },
  {
    "url": "categories/Others/index.html",
    "revision": "bad7215fd106331fdc5749b84d471f45"
  },
  {
    "url": "categories/Projects/index.html",
    "revision": "4c55ea6c0a9030168adeea241b9d454d"
  },
  {
    "url": "categories/Python/index.html",
    "revision": "f543e136408175f5361bd7ac52df375f"
  },
  {
    "url": "categories/Research/index.html",
    "revision": "dfb1b5d0a97f059ac41bc77701f4dbc3"
  },
  {
    "url": "categories/Research/page/2/index.html",
    "revision": "b9586867efff592b8943104c176190ea"
  },
  {
    "url": "categories/Server/index.html",
    "revision": "8d9f9dd6c3acb6c2f4e03ea0ff055e89"
  },
  {
    "url": "categories/Tools/index.html",
    "revision": "bfd82e9a6af22baf0a1f0c679decdc63"
  },
  {
    "url": "Cloud&Server/design-pattern.html",
    "revision": "dace61cb5d800de33103f9b9ba591cd7"
  },
  {
    "url": "Cloud&Server/Docker.html",
    "revision": "9bcd83094d1d5b8c46e5abefd7c62971"
  },
  {
    "url": "Cloud&Server/huawei_cloud.html",
    "revision": "f783db8ab470fa6c9c1f3417f3ca956a"
  },
  {
    "url": "Cloud&Server/kernel.html",
    "revision": "a29575728c037d00e29a62676f00a506"
  },
  {
    "url": "Cloud&Server/kvm.html",
    "revision": "478e69dddab1e2a44e22a242d78ded92"
  },
  {
    "url": "Cloud&Server/linux_os.html",
    "revision": "fdffdcd894129cc06f96b9151f1e3272"
  },
  {
    "url": "Cloud&Server/nginx.html",
    "revision": "cddff90e2fd0c61c25da0a383093c5d2"
  },
  {
    "url": "Cloud&Server/openresty.html",
    "revision": "1b3541ad2aed5ff0777fb596de9b1c6d"
  },
  {
    "url": "Cloud&Server/snap.html",
    "revision": "3994af36ee126161ff1f85ed8283fc6e"
  },
  {
    "url": "cwnd.jpg",
    "revision": "7cc34e0970901f093d60099907180682"
  },
  {
    "url": "Database/mongodb.html",
    "revision": "891b0976a2fddb792d1b7d38443cada2"
  },
  {
    "url": "Database/mysql.html",
    "revision": "e2724e3d8c09d321640dcbe79a0a9aef"
  },
  {
    "url": "Database/peewee.html",
    "revision": "4459a2b1569f11b0522c4aebbb05a4c5"
  },
  {
    "url": "Database/redis.html",
    "revision": "f125bb1d9d1ec3cf413be2668754ed65"
  },
  {
    "url": "docker/wsl.png",
    "revision": "ae5895a3e36ee0afe95f15912a38ba3d"
  },
  {
    "url": "favicon.png",
    "revision": "075f347773af0db553df5ed77bd94896"
  },
  {
    "url": "Frameworks/celery.html",
    "revision": "6cee9127ca511a1ce8def04cd754597f"
  },
  {
    "url": "Frameworks/flask.html",
    "revision": "794d2689167f232716a8aeeb8941e4c7"
  },
  {
    "url": "Frontend/chartsjs.html",
    "revision": "9edcf66b7982eb5623806ebb70c9d1ac"
  },
  {
    "url": "Frontend/css.html",
    "revision": "0a221cf9bd8c42a1e8d71b7c748ea2b9"
  },
  {
    "url": "Frontend/jsnote.html",
    "revision": "22117c6e59745ae74e01b7644ed61fb7"
  },
  {
    "url": "Frontend/node_install.html",
    "revision": "93be315cc880acb7dd19125af181589b"
  },
  {
    "url": "Frontend/vue.html",
    "revision": "6ffa00ded3cb6de779b80ca9c139d019"
  },
  {
    "url": "Grammar/code_content.html",
    "revision": "08cd1364fceb84ea510dbea9f4586969"
  },
  {
    "url": "Grammar/data_struct.html",
    "revision": "3219d49078e47e0f24c003cdf0a346f3"
  },
  {
    "url": "Grammar/newcpp.html",
    "revision": "60f1d349904d252c7238f1a08fc10a9c"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "1d0d7e21e1e21f712c17c84cedcb0760"
  },
  {
    "url": "logo.png",
    "revision": "570c6a21ca40c032f1f5d6f2b87f1179"
  },
  {
    "url": "Networks/epoll.html",
    "revision": "0280df9ce7fec003da7f24e408f6fced"
  },
  {
    "url": "Networks/http.html",
    "revision": "0bcac7bce2952784eb4006bcfc7c6901"
  },
  {
    "url": "Networks/networks.html",
    "revision": "bd732e46fe331e3bf1ee7911781addfe"
  },
  {
    "url": "Others/code_life.html",
    "revision": "701852eb7245bfaa8e0b0b6ab38298b5"
  },
  {
    "url": "Others/new.html",
    "revision": "531a3f155230db84e2364d8b9aaa86d2"
  },
  {
    "url": "Others/paper_report.html",
    "revision": "5b6238a213e565dbaa097352cf585d6c"
  },
  {
    "url": "Others/soft_skills.html",
    "revision": "357fb7001e3a468cdafff49afa46da15"
  },
  {
    "url": "Others/thoughts-2018.html",
    "revision": "d6c21e18b336bb38cd0ffab85404187e"
  },
  {
    "url": "Others/worklog.html",
    "revision": "6ba62d42add362d23afea6a3c062f740"
  },
  {
    "url": "Others/zen_of_python.html",
    "revision": "597ce44015917ff9f17c2920272c3df8"
  },
  {
    "url": "Projects/blog_plan.html",
    "revision": "4044584e9ba910e3853a04dc379ee2ab"
  },
  {
    "url": "Projects/jekyll.html",
    "revision": "17d817c36a169d8141224ec007240929"
  },
  {
    "url": "Projects/kilo.html",
    "revision": "cde670734c5dd23bc68fda1ec8dc533c"
  },
  {
    "url": "Projects/qqbot.html",
    "revision": "ca46761bb689233ad14ee7f784f259c5"
  },
  {
    "url": "Projects/vueblog.html",
    "revision": "bf47980042f9255350e43019cfc4d55f"
  },
  {
    "url": "Python/coroutines.html",
    "revision": "953dac453420f986714a42fc250df515"
  },
  {
    "url": "Python/crontab.html",
    "revision": "e1577126f9e363a5b3c89813af0aff9b"
  },
  {
    "url": "Python/hash.html",
    "revision": "d85d1c77e21f1b70392c9807a244857c"
  },
  {
    "url": "Python/io.html",
    "revision": "945dd9ea473e272368a71fba878805e8"
  },
  {
    "url": "Python/py_interview.html",
    "revision": "97242eade116a6f6c38a869f7a0251f3"
  },
  {
    "url": "Python/pytest.html",
    "revision": "2cce7ca22b3bdd2110865d98b31db34e"
  },
  {
    "url": "Python/python-oo.html",
    "revision": "c095ccca669fd37340361befc127861f"
  },
  {
    "url": "Python/python.html",
    "revision": "4d652e19a02eb641712fb33857a34804"
  },
  {
    "url": "Python/virtualenv.html",
    "revision": "a5ab0dcf34dd5e33acbad91db0786120"
  },
  {
    "url": "Research/ArrayTrack.html",
    "revision": "d20a4a944158e68fd97c57b5af7f1b0e"
  },
  {
    "url": "Research/cnn.html",
    "revision": "5ca52f87b41863a64b42afd628cd739d"
  },
  {
    "url": "Research/csitool.html",
    "revision": "a5517a71035c238d98b848526a57e14d"
  },
  {
    "url": "Research/cvpr.html",
    "revision": "9cdb1dadbbea3ed72431926920bb0e3f"
  },
  {
    "url": "Research/face_recognition.html",
    "revision": "6acf971c91f6a10d9ad86b38e750c99b"
  },
  {
    "url": "Research/information_theory.html",
    "revision": "d86096d1479e2ed1c12cf962ee6f2375"
  },
  {
    "url": "Research/latex.html",
    "revision": "2ba23dc37f342a7ce25bf5e935e09fae"
  },
  {
    "url": "Research/mnist.html",
    "revision": "f36cfb6ca699100333951e1c33bf1c6b"
  },
  {
    "url": "Research/opencv.html",
    "revision": "a87b5ed78eb35523c499d4528eb02a77"
  },
  {
    "url": "Research/RF-Pose.html",
    "revision": "47fe4c50a3e5f3ddeaf757f57130d2d8"
  },
  {
    "url": "Research/splicer.html",
    "revision": "246d5524472cb81ec7003aab234c7161"
  },
  {
    "url": "Research/tensorflow.html",
    "revision": "c39de48573dd081f046e9d9a36adbe49"
  },
  {
    "url": "Research/tensorflowio.html",
    "revision": "a426bfa6c0ad7d75a0dc75fda5761408"
  },
  {
    "url": "stack_queue.jpg",
    "revision": "316ea130afcc03ba2acf5f44dbb0dd67"
  },
  {
    "url": "tag/algorithm/index.html",
    "revision": "1a4ba7b272e9cb81be84666663b51170"
  },
  {
    "url": "tag/algorithm/page/2/index.html",
    "revision": "a91af53caeed5b91ad90007d7b012db0"
  },
  {
    "url": "tag/apt/index.html",
    "revision": "612f738f97e4054817391a71f96309d7"
  },
  {
    "url": "tag/Backend/index.html",
    "revision": "39fbc191096df2152ef0c274e7ad5f96"
  },
  {
    "url": "tag/binary_search/index.html",
    "revision": "8f0105de69930626fcc2b35a7112ac7d"
  },
  {
    "url": "tag/bitmap/index.html",
    "revision": "71f35bd7af53019ed2aa63fc257153aa"
  },
  {
    "url": "tag/blog/index.html",
    "revision": "ad63af02d8f18e812aab9ea1892f2bfa"
  },
  {
    "url": "tag/bug log/index.html",
    "revision": "3081cf2f5b2bf5460e91d588adcbaee1"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "548f2987d0b47303f017056a3c3fc63d"
  },
  {
    "url": "tag/celery/index.html",
    "revision": "985b65a41547c41aa8e2334b814a13a0"
  },
  {
    "url": "tag/cloud/index.html",
    "revision": "0d1dde8a34fef09cc00995a7155178be"
  },
  {
    "url": "tag/codelife/index.html",
    "revision": "e222b7dbc9eebb410a4aeb3e0c3c2c6d"
  },
  {
    "url": "tag/CSI/index.html",
    "revision": "58a6dccf9a0e1d14a07b6924a03eb7f5"
  },
  {
    "url": "tag/CV/index.html",
    "revision": "493f93667b1239ac8088b9ac2ba7c29c"
  },
  {
    "url": "tag/database/index.html",
    "revision": "e91de339bd9406db6f80d6cc3af07e29"
  },
  {
    "url": "tag/datastruct/index.html",
    "revision": "6d812017adc35b473a2c533cd3e7202d"
  },
  {
    "url": "tag/deeplearning/index.html",
    "revision": "6d92d4c9a41e0e5ddf3f0b10cf04e735"
  },
  {
    "url": "tag/dfs/bfs/index.html",
    "revision": "305c8bd12ee6dd3d6addaa5d2c38a0f2"
  },
  {
    "url": "tag/dict/index.html",
    "revision": "6509aed52dc96257eefc3d5f04aac2c0"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "67b8cd2e61796b0d302ca869f8370ab6"
  },
  {
    "url": "tag/dp/index.html",
    "revision": "7f6e0626aba11648d04a00ed7486346c"
  },
  {
    "url": "tag/Fibonacci/index.html",
    "revision": "499833c53330d32c0d28405f87c94aab"
  },
  {
    "url": "tag/figures/index.html",
    "revision": "748ea9fbf2e92e1cec2955e7d4dfbe9c"
  },
  {
    "url": "tag/frontend/index.html",
    "revision": "7c2cb7098259ddbd297e018c70cb8fa1"
  },
  {
    "url": "tag/hash map/index.html",
    "revision": "5174a2a98d4fe560140dda6c1364ba5e"
  },
  {
    "url": "tag/http/index.html",
    "revision": "db6d33ffc16d7ecb102a5084e4862e95"
  },
  {
    "url": "tag/huawei/index.html",
    "revision": "68cea897539d313d37f4851e0d58effd"
  },
  {
    "url": "tag/index.html",
    "revision": "9bc9047347bd24e41b534c4c4539068e"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "a2e1b58433a7e3617a8d74cb03b9ff39"
  },
  {
    "url": "tag/javascript/index.html",
    "revision": "c958eacd8ed6316b952f73d6e9cf03bb"
  },
  {
    "url": "tag/latex/index.html",
    "revision": "311d920ce25ae6e2b7fceffd8155dd5d"
  },
  {
    "url": "tag/lcs/index.html",
    "revision": "e228009a960e0966e579b3aef53c8de2"
  },
  {
    "url": "tag/leetcode/index.html",
    "revision": "91075746c74f82a082eb108b3382ce22"
  },
  {
    "url": "tag/leetcode/page/2/index.html",
    "revision": "b53176afeec9286f8f96085d2ba7ad57"
  },
  {
    "url": "tag/linked_list/index.html",
    "revision": "5bebc855d389fc252f5f982aadad6f3f"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "d9bf8e87adb1e73d59ba7b18fab2adcf"
  },
  {
    "url": "tag/math/index.html",
    "revision": "03d654edc9aacf53afa187f7f7180216"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "36eb3b5e5e743cabde9c3d66e1070c8f"
  },
  {
    "url": "tag/node.js/index.html",
    "revision": "26427cd5b0f07ddd77d2e1f5a814b3b4"
  },
  {
    "url": "tag/others/index.html",
    "revision": "af81fbd77b092e3b043585f4f67bafe2"
  },
  {
    "url": "tag/paper/index.html",
    "revision": "8973e984ecbfd8a07b23452cccecd0a2"
  },
  {
    "url": "tag/paper/page/2/index.html",
    "revision": "f7151342e9082039095db4400377c44a"
  },
  {
    "url": "tag/pip/index.html",
    "revision": "7ec64115fbd12234181651c160f1e9d8"
  },
  {
    "url": "tag/prefix/index.html",
    "revision": "fe6c36a76b9a81366f72edfa1847598a"
  },
  {
    "url": "tag/pytest/index.html",
    "revision": "91b567af876709b345998938855b22f6"
  },
  {
    "url": "tag/python/index.html",
    "revision": "9f5d6bc2206391def3e3e23e180ae133"
  },
  {
    "url": "tag/Python/index.html",
    "revision": "53d84f553791d82466304d505604217a"
  },
  {
    "url": "tag/redis/index.html",
    "revision": "dbca3a4c9c456dc940d3c534f8882090"
  },
  {
    "url": "tag/server/index.html",
    "revision": "4808132fbe5154151d1eb6912f8827a5"
  },
  {
    "url": "tag/slide_window/index.html",
    "revision": "faea195f7701ef9494f0d7ff50d5ade9"
  },
  {
    "url": "tag/sort/index.html",
    "revision": "bf5f945a82737ec04b1292fce860b0c7"
  },
  {
    "url": "tag/source/index.html",
    "revision": "aa18ec6e2ae86d89336a452e483a5ec0"
  },
  {
    "url": "tag/stack/index.html",
    "revision": "b54f57e016a61873fba441a8b1d7b429"
  },
  {
    "url": "tag/string/index.html",
    "revision": "8efe59c6e71f985d56e063a5c0e95a7a"
  },
  {
    "url": "tag/tcp/ip/index.html",
    "revision": "c0409e4a83a9c42d93f76ded6c47fb8c"
  },
  {
    "url": "tag/thoughts/index.html",
    "revision": "a06bf82b98088f2f4a55b3efb014e375"
  },
  {
    "url": "tag/Thread/index.html",
    "revision": "3e77b43463afadf8855b463f1ef60b88"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "2956683cdf764ee7a9ec175283e0bf4a"
  },
  {
    "url": "tag/virtualenv/index.html",
    "revision": "b1322b37365630a9fd5ce0b583c947ae"
  },
  {
    "url": "tag/vue.js/index.html",
    "revision": "27c38f050122698b0eb9017b7b5b99f2"
  },
  {
    "url": "tag/web framework/index.html",
    "revision": "c58a4ead38df4ffeeac5509987fc9bfc"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "9a3d9609f63c3cf6c0c90c8d3d2d4e62"
  },
  {
    "url": "tcp.jpg",
    "revision": "23b6a16174d0e52b8813ab9b92b7c20f"
  },
  {
    "url": "timeline/index.html",
    "revision": "997fb23e1da334afbe09009d113020f7"
  },
  {
    "url": "Tools/apt.html",
    "revision": "7990576cdc7924d30f8d27fe58c5b117"
  },
  {
    "url": "Tools/git.html",
    "revision": "80b7835d0002fa18f4b9601dbcaeb4d0"
  },
  {
    "url": "Tools/tools.html",
    "revision": "64dca34de00a996a0b11e3a2e3a4aef2"
  },
  {
    "url": "Tools/vim.html",
    "revision": "9e0de11b25fb9f88fc05839ebde27879"
  },
  {
    "url": "Tools/vps.html",
    "revision": "0dd1a52f4ed2be9b49fd2cd1fcaa22d0"
  },
  {
    "url": "value-result.jpg",
    "revision": "01d0b6e58890e02b9dff4613916a6b50"
  },
  {
    "url": "weigao.jpg",
    "revision": "6e15083ba85e32febdb9f17d58093c3a"
  },
  {
    "url": "xidian.png",
    "revision": "fe75c7911d52a47e6295e65687c5a554"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
