if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,n,o)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const i={uri:location.origin+s.slice(1)};return Promise.all(n.map((s=>{switch(s){case"exports":return r;case"module":return i;default:return e(s)}}))).then((e=>{const s=o(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-a8b10d99"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/0b7b90cd.29e69a5732431035a8f0.js",revision:"fzkOh3oRArzZUVocJDj8w"},{url:"/_next/static/chunks/13.e6039f14265b81cdfa44.js",revision:"fzkOh3oRArzZUVocJDj8w"},{url:"/_next/static/chunks/612a5669ed7988766ff3084011b359dc5de30d6c.820263e11a1050b6c749.js",revision:"fzkOh3oRArzZUVocJDj8w"},{url:"/_next/static/chunks/bb9a4470b984507ac537ac1324ab5e51b615490f.a79bd759dd81f3d16e2c.js",revision:"fzkOh3oRArzZUVocJDj8w"},{url:"/_next/static/chunks/commons.80ab4ecdab229b2cdab9.js",revision:"fzkOh3oRArzZUVocJDj8w"},{url:"/_next/static/chunks/framework.ce4a96022bc463719e4f.js",revision:"fzkOh3oRArzZUVocJDj8w"},{url:"/_next/static/chunks/main-0a1b85c8fd54c3325eb3.js",revision:"fzkOh3oRArzZUVocJDj8w"},{url:"/_next/static/chunks/pages/%5Bslug%5D-0c251834e5342b0103f5.js",revision:"fzkOh3oRArzZUVocJDj8w"},{url:"/_next/static/chunks/pages/_app-242fb331ad91f4206c61.js",revision:"fzkOh3oRArzZUVocJDj8w"},{url:"/_next/static/chunks/pages/_error-d9f703e4d91f5615f63c.js",revision:"fzkOh3oRArzZUVocJDj8w"},{url:"/_next/static/chunks/pages/index-7814ec8b35ed8db794b7.js",revision:"fzkOh3oRArzZUVocJDj8w"},{url:"/_next/static/chunks/pages/place/%5Bslug%5D-68a9a39b14127f81716f.js",revision:"fzkOh3oRArzZUVocJDj8w"},{url:"/_next/static/chunks/polyfills-6f7c72e370684550d611.js",revision:"fzkOh3oRArzZUVocJDj8w"},{url:"/_next/static/chunks/webpack-dd930cc3a43033bfedde.js",revision:"fzkOh3oRArzZUVocJDj8w"},{url:"/_next/static/fzkOh3oRArzZUVocJDj8w/_buildManifest.js",revision:"fzkOh3oRArzZUVocJDj8w"},{url:"/_next/static/fzkOh3oRArzZUVocJDj8w/_ssgManifest.js",revision:"fzkOh3oRArzZUVocJDj8w"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/img/hero-illustration.svg",revision:"5fd5143cba1046a214d9a359fce22e89"},{url:"/img/icon-192.png",revision:"d27169d080684ebb57b8387d05c4b444"},{url:"/img/icon-512.png",revision:"f1d74b43a3832183202483a40d9e9d84"},{url:"/img/logo-gh.svg",revision:"e3a0c31390db72fd374570f4a57c56b0"},{url:"/img/logo.svg",revision:"202525302ad30aca5b2b790d4b0b5796"},{url:"/manifest.json",revision:"00fe96a5bc6f3a10230b1e8df5130933"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
