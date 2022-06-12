(()=>{"use strict";var e={4901:(e,t,r)=>{r(8964),r(702);var o=r(1957),a=r(1947),n=r(499),i=r(9835);function s(e,t,r,o,a,n){const s=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(s)}const l=(0,i.aZ)({name:"App"});var d=r(1639);const c=(0,d.Z)(l,[["render",s],["__scopeId","data-v-cbfda788"]]),u=c;var p=r(663),f=r(3340),h=r(8910);const b=[{path:"/auth",component:()=>Promise.all([r.e(736),r.e(112)]).then(r.bind(r,8112)),children:[{path:"/auth",component:()=>Promise.all([r.e(736),r.e(490)]).then(r.bind(r,7490))}]},{path:"/",component:()=>Promise.all([r.e(736),r.e(370)]).then(r.bind(r,3370)),children:[{path:"/",component:()=>Promise.all([r.e(736),r.e(23)]).then(r.bind(r,8285))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(736),r.e(93)]).then(r.bind(r,3093))}],v=b,m=(0,f.BC)((function(){const e=h.PO,t=(0,h.p7)({scrollBehavior:()=>({left:0,top:0}),routes:v,history:e("/botfree/")});return t}));async function g(e,t){const o=e(u);o.use(a.Z,t);const i="function"===typeof p["default"]?await(0,p["default"])({}):p["default"],{storeKey:s}=await Promise.resolve().then(r.bind(r,663)),l=(0,n.Xl)("function"===typeof m?await m({store:i}):m);return i.$router=l,{app:o,store:i,storeKey:s,router:l}}var y=r(6827);const w={config:{},plugins:{Notify:y.Z}};var k=r(7779);const P="/botfree/",C=/\/\//,O=e=>(P+e).replace(C,"/");async function j({app:e,router:t,store:r,storeKey:o},a){let n=!1;const i=e=>{try{return O(t.resolve(e).href)}catch(r){}return Object(e)===e?null:e},s=e=>{if(n=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=i(e);null!==t&&(window.location.href=t)},l=window.location.href.replace(window.location.origin,"");for(let c=0;!1===n&&c<a.length;c++)try{await a[c]({app:e,router:t,store:r,ssrContext:null,redirect:s,urlPath:l,publicPath:P})}catch(d){return d&&d.url?void s(d.url):void k.error("[Quasar] boot error:",d)}!0!==n&&(e.use(t),e.use(r,o),e.mount("#q-app"))}g(o.ri,w).then((e=>Promise.all([Promise.resolve().then(r.bind(r,1569))]).then((t=>{const r=t.map((e=>e.default)).filter((e=>"function"===typeof e));j(e,r)}))))},1569:(e,t,r)=>{r.r(t),r.d(t,{api:()=>i,default:()=>s});var o=r(3340),a=r(9981),n=r.n(a);const i=n().create({baseURL:"https://api.example.com"}),s=(0,o.xr)((({app:e})=>{e.config.globalProperties.$axios=n(),e.config.globalProperties.$api=i}))},663:(e,t,r)=>{r.r(t),r.d(t,{default:()=>p});var o=r(3340),a=r(3100),n=r(9981),i=r.n(n),s=r(499),l=r(6827),d=r(7779);const c={actions:{getUserData({commit:e},t=1028741753,r=12845){i().post("https://api.bot-t.ru/v1/bot/user-key/view-by-telegram-id?secretKey=db0b766fdbc2274841d28673d0f4cf15dc311b9827f7c7cb2539d05a0f1c317e",{bot_id:r,telegram_id:t}).then((t=>{d.log(t.data.data),e("openUserData",t.data.data)}))},viewAllProducts({commit:e},t=0){i().post("https://api.bot-t.ru/v1/shoppublic/category/view?secretKey=db0b766fdbc2274841d28673d0f4cf15dc311b9827f7c7cb2539d05a0f1c317e",{bot_id:12845,category_id:t}).then((t=>{d.log(t);let r=[];for(let e in t.data.data)r.push(t.data.data[e]);e("viewCategory",r)}))},viewChosenCategory({commit:e,dispatch:t},r){t("viewAllProducts",r.id)}},mutations:{openBasket(e){e.dialBasket=!e.dialBasket},changeValidator(e,t){e.userValidate=t},openUserData(e,t){e.userData=t},viewCategory(e,t){e.products=t},increaseCountInBasket(e,t){e.basket.find((e=>e.data==t)).count++},decreaseCountInBasket(e,t){e.basket.find((e=>e.data==t)).count--,e.basket.find((e=>e.data==t)).count<1&&(e.basket=e.basket.filter((e=>e.data!=t)),l.Z.create({message:`Товар ${t.design.title} удален из корзины`,color:"red-3",position:"top",timeout:1e3}))},addInBasket(e,t){e.basket.push({count:1,data:t}),l.Z.create({message:`Товар ${t.design.title} добавлен в корзину`,color:"orange-3",position:"top",timeout:1e3})}},getters:{viewUserData(e){return e.userData},open(e){return e.dialBasket},userValid(e){return e.userValidate},allProducts(e){return e.products},viewBasket(e){return e.basket}},state:{basket:(0,s.iH)([]),userValidate:(0,s.iH)(!1),dialBasket:(0,s.iH)(!1),products:(0,s.iH)([]),colorScheme:(0,s.iH)(!0),userData:(0,s.iH)({})}},u={actions:{},mutations:{},getters:{showpoppins(e){return e.poppins}},state:{poppins:0}},p=(0,o.h)((function(){const e=(0,a.MT)({modules:{basket:c,protucts:u},strict:!1});return e}))}},t={};function r(o){var a=t[o];if(void 0!==a)return a.exports;var n=t[o]={exports:{}};return e[o].call(n.exports,n,n.exports,r),n.exports}r.m=e,(()=>{var e=[];r.O=(t,o,a,n)=>{if(!o){var i=1/0;for(c=0;c<e.length;c++){for(var[o,a,n]=e[c],s=!0,l=0;l<o.length;l++)(!1&n||i>=n)&&Object.keys(r.O).every((e=>r.O[e](o[l])))?o.splice(l--,1):(s=!1,n<i&&(i=n));if(s){e.splice(c--,1);var d=a();void 0!==d&&(t=d)}}return t}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[o,a,n]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,o)=>(r.f[o](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{23:"92a5de9f",93:"04efdfd2",112:"8369a6b8",370:"427bfa97",490:"4d036d62"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+({143:"app",736:"vendor"}[e]||e)+"."+{23:"24e2cdcb",112:"aace094d",143:"5438a879",370:"3faa7d1f",490:"932bf7c6",736:"59777c2f"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="botfree:";r.l=(o,a,n,i)=>{if(e[o])e[o].push(a);else{var s,l;if(void 0!==n)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var u=d[c];if(u.getAttribute("src")==o||u.getAttribute("data-webpack")==t+n){s=u;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.setAttribute("data-webpack",t+n),s.src=o),e[o]=[a];var p=(t,r)=>{s.onerror=s.onload=null,clearTimeout(f);var a=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach((e=>e(r))),t)return t(r)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),l&&document.head.appendChild(s)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p="/botfree/"})(),(()=>{var e=(e,t,r,o)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var n=n=>{if(a.onerror=a.onload=null,"load"===n.type)r();else{var i=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=s,a.parentNode.removeChild(a),o(l)}};return a.onerror=a.onload=n,a.href=t,document.head.appendChild(a),a},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var a=r[o],n=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(n===e||n===t))return a}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){a=i[o],n=a.getAttribute("data-href");if(n===e||n===t)return a}},o=o=>new Promise(((a,n)=>{var i=r.miniCssF(o),s=r.p+i;if(t(i,s))return a();e(o,s,a,n)})),a={143:0};r.f.miniCss=(e,t)=>{var r={23:1,112:1,370:1,490:1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=o(e).then((()=>{a[e]=0}),(t=>{throw delete a[e],t})))}})(),(()=>{var e={143:0};r.f.j=(t,o)=>{var a=r.o(e,t)?e[t]:void 0;if(0!==a)if(a)o.push(a[2]);else{var n=new Promise(((r,o)=>a=e[t]=[r,o]));o.push(a[2]=n);var i=r.p+r.u(t),s=new Error,l=o=>{if(r.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var n=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",s.name="ChunkLoadError",s.type=n,s.request=i,a[1](s)}};r.l(i,l,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,o)=>{var a,n,[i,s,l]=o,d=0;if(i.some((t=>0!==e[t]))){for(a in s)r.o(s,a)&&(r.m[a]=s[a]);if(l)var c=l(r)}for(t&&t(o);d<i.length;d++)n=i[d],r.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return r.O(c)},o=self["webpackChunkbotfree"]=self["webpackChunkbotfree"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var o=r.O(void 0,[736],(()=>r(4901)));o=r.O(o)})();