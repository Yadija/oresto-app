if(!self.define){let e,i={};const n=(n,o)=>(n=new URL(n+".js",o).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(o,r)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let c={};const d=e=>n(e,s),f={module:{uri:s},exports:c,require:d};i[s]=Promise.all(o.map((e=>f[e]||d(e)))).then((e=>(r(...e),c)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"app.bundle.js",revision:"ddf3414e35f980068961024095d79831"},{url:"app.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"favicon.png",revision:"bdf60647a72916690ede8847c7b6078a"},{url:"icons/icon-128x128.png",revision:"e8940f8de5b03418108f1fc77f67046e"},{url:"icons/icon-144x144.png",revision:"1a9d32266e70fe53d92893eb50aa60b3"},{url:"icons/icon-152x152.png",revision:"3ce213b58d44b376b367a974e825c482"},{url:"icons/icon-192x192.png",revision:"446bd4de5107364e5e79a76a7fda1366"},{url:"icons/icon-384x384.png",revision:"4fa55e828f108549c9fa32eb884cdfe1"},{url:"icons/icon-512x512.png",revision:"bdf60647a72916690ede8847c7b6078a"},{url:"icons/icon-72x72.png",revision:"d002fbc6e8c5ab4ec398d04b4a20ffd2"},{url:"icons/icon-96x96.png",revision:"70110e009567dc957501973513370592"},{url:"images/heros/hero-image.jpg",revision:"a2f444d9e2e43a5d0373b1a0d8cb2236"},{url:"index.html",revision:"593563b549a73623855dd2bdac0860e5"},{url:"manifest.json",revision:"e3afcb9f99110fa07db7f1d1ab7de69e"}],{})}));
//# sourceMappingURL=sw.bundle.js.map
