if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,t)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const o=e=>a(e,i),p={module:{uri:i},exports:c,require:o};s[i]=Promise.all(n.map((e=>p[e]||o(e)))).then((e=>(t(...e),c)))}}define(["./workbox-07a7b4f2"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/awesome-nextjs-app/_next/app-build-manifest.json",revision:"222c3a9f7e40053901db4d47e4e3b37d"},{url:"/awesome-nextjs-app/_next/static/Den1pMTnbq1F1ymRvzvJT/_buildManifest.js",revision:"2ec694eb52ae4f523f265a46bae4d768"},{url:"/awesome-nextjs-app/_next/static/Den1pMTnbq1F1ymRvzvJT/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/awesome-nextjs-app/_next/static/chunks/138-a6798dfc605f644e.js",revision:"Den1pMTnbq1F1ymRvzvJT"},{url:"/awesome-nextjs-app/_next/static/chunks/23-f80d642d11c065b7.js",revision:"Den1pMTnbq1F1ymRvzvJT"},{url:"/awesome-nextjs-app/_next/static/chunks/477-c5f5d92f369b3b6f.js",revision:"Den1pMTnbq1F1ymRvzvJT"},{url:"/awesome-nextjs-app/_next/static/chunks/833-5c6c19d3b6be07bf.js",revision:"Den1pMTnbq1F1ymRvzvJT"},{url:"/awesome-nextjs-app/_next/static/chunks/app/_not-found/page-3fb1e6d314c2d9fd.js",revision:"Den1pMTnbq1F1ymRvzvJT"},{url:"/awesome-nextjs-app/_next/static/chunks/app/error-ae5a02f922d71646.js",revision:"Den1pMTnbq1F1ymRvzvJT"},{url:"/awesome-nextjs-app/_next/static/chunks/app/layout-837cc743cacc7c00.js",revision:"Den1pMTnbq1F1ymRvzvJT"},{url:"/awesome-nextjs-app/_next/static/chunks/app/not-found-80b7ae7c3904c0a5.js",revision:"Den1pMTnbq1F1ymRvzvJT"},{url:"/awesome-nextjs-app/_next/static/chunks/app/page-7eb52224086a3980.js",revision:"Den1pMTnbq1F1ymRvzvJT"},{url:"/awesome-nextjs-app/_next/static/chunks/fd9d1056-51face16839d2cb0.js",revision:"Den1pMTnbq1F1ymRvzvJT"},{url:"/awesome-nextjs-app/_next/static/chunks/framework-aec844d2ccbe7592.js",revision:"Den1pMTnbq1F1ymRvzvJT"},{url:"/awesome-nextjs-app/_next/static/chunks/main-19d9b3caa150094d.js",revision:"Den1pMTnbq1F1ymRvzvJT"},{url:"/awesome-nextjs-app/_next/static/chunks/main-app-b6f5b474a8bc3027.js",revision:"Den1pMTnbq1F1ymRvzvJT"},{url:"/awesome-nextjs-app/_next/static/chunks/pages/_app-6a626577ffa902a4.js",revision:"Den1pMTnbq1F1ymRvzvJT"},{url:"/awesome-nextjs-app/_next/static/chunks/pages/_error-1be831200e60c5c0.js",revision:"Den1pMTnbq1F1ymRvzvJT"},{url:"/awesome-nextjs-app/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/awesome-nextjs-app/_next/static/chunks/webpack-6fe9983e51578a11.js",revision:"Den1pMTnbq1F1ymRvzvJT"},{url:"/awesome-nextjs-app/_next/static/css/6847180632516e15.css",revision:"6847180632516e15"},{url:"/awesome-nextjs-app/_next/static/media/0484562807a97172-s.p.woff2",revision:"b550bca8934bd86812d1f5e28c9cc1de"},{url:"/awesome-nextjs-app/_next/static/media/0a03a6d30c07af2e-s.woff2",revision:"79da53ebaf3308c806394df4882b343d"},{url:"/awesome-nextjs-app/_next/static/media/46c21389e888bf13-s.woff2",revision:"272930c09ba14c81bb294be1fe18b049"},{url:"/awesome-nextjs-app/_next/static/media/4c285fdca692ea22-s.p.woff2",revision:"42d3308e3aca8742731f63154187bdd7"},{url:"/awesome-nextjs-app/_next/static/media/8888a3826f4a3af4-s.p.woff2",revision:"792477d09826b11d1e5a611162c9797a"},{url:"/awesome-nextjs-app/_next/static/media/8d346445d24062b5-s.woff2",revision:"c965abed1310982a4d2148cb81765b56"},{url:"/awesome-nextjs-app/_next/static/media/eafabf029ad39a43-s.p.woff2",revision:"43751174b6b810eb169101a20d8c26f8"},{url:"/awesome-nextjs-app/_next/static/media/f5767adec246cdc1-s.woff2",revision:"7a1c6501aa2b3327c1cf556362a851cb"},{url:"/awesome-nextjs-app/favicon-16x16.png",revision:"da12bfdb416e651cbdc38c9a76b24dd2"},{url:"/awesome-nextjs-app/favicon-32x32.png",revision:"8a44af185645c4f87cafcf52a15cd924"},{url:"/awesome-nextjs-app/favicon.ico",revision:"fa6662dc2e3e0baaee38108abe1bf6db"},{url:"/awesome-nextjs-app/manifest.json",revision:"572deb18b93ee70db3dee193c1c5498a"},{url:"/awesome-nextjs-app/robots.txt",revision:"83daced97d66ba47ac4837f35a1be311"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/awesome-nextjs-app",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
