(()=>{"use strict";var e={4901:(e,t,r)=>{r(8964),r(702);var a=r(1957),o=r(1947),n=r(499),i=r(9835);function s(e,t,r,a,o,n){const s=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(s)}const c=(0,i.aZ)({name:"App"});var d=r(1639);const l=(0,d.Z)(c,[["render",s],["__scopeId","data-v-cbfda788"]]),u=l;var p=r(663),h=r(3340),f=r(8910);const g=[{path:"/auth",component:()=>Promise.all([r.e(736),r.e(145)]).then(r.bind(r,8145)),children:[{path:"/auth",component:()=>Promise.all([r.e(736),r.e(367)]).then(r.bind(r,5367))}]},{path:"/",component:()=>Promise.all([r.e(736),r.e(370)]).then(r.bind(r,3370)),children:[{path:"/",component:()=>Promise.all([r.e(736),r.e(299)]).then(r.bind(r,6906))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(736),r.e(93)]).then(r.bind(r,3093))}],b=g,v=(0,h.BC)((function(){const e=f.PO,t=(0,f.p7)({scrollBehavior:()=>({left:0,top:0}),routes:b,history:e("/botfree/")});return t}));async function m(e,t){const a=e(u);a.use(o.Z,t);const i="function"===typeof p["default"]?await(0,p["default"])({}):p["default"],{storeKey:s}=await Promise.resolve().then(r.bind(r,663)),c=(0,n.Xl)("function"===typeof v?await v({store:i}):v);return i.$router=c,{app:a,store:i,storeKey:s,router:c}}var y=r(6827);const w={config:{},plugins:{Notify:y.Z}};var k=r(7779);const _="/botfree/",D=/\/\//,P=e=>(_+e).replace(D,"/");async function C({app:e,router:t,store:r,storeKey:a},o){let n=!1;const i=e=>{try{return P(t.resolve(e).href)}catch(r){}return Object(e)===e?null:e},s=e=>{if(n=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=i(e);null!==t&&(window.location.href=t)},c=window.location.href.replace(window.location.origin,"");for(let l=0;!1===n&&l<o.length;l++)try{await o[l]({app:e,router:t,store:r,ssrContext:null,redirect:s,urlPath:c,publicPath:_})}catch(d){return d&&d.url?void s(d.url):void k.error("[Quasar] boot error:",d)}!0!==n&&(e.use(t),e.use(r,a),e.mount("#q-app"))}m(a.ri,w).then((e=>Promise.all([Promise.resolve().then(r.bind(r,1569))]).then((t=>{const r=t.map((e=>e.default)).filter((e=>"function"===typeof e));C(e,r)}))))},1569:(e,t,r)=>{r.r(t),r.d(t,{api:()=>i,default:()=>s});var a=r(3340),o=r(9981),n=r.n(o);const i=n().create({baseURL:"https://api.example.com"}),s=(0,a.xr)((({app:e})=>{e.config.globalProperties.$axios=n(),e.config.globalProperties.$api=i}))},663:(e,t,r)=>{r.r(t),r.d(t,{default:()=>p});var a=r(3340),o=r(3100),n=r(9981),i=r.n(n),s=r(499),c=r(6827),d=r(7779);const l={actions:{getUserData({commit:e,dispatch:t,getters:r}){i().post(`https://api.bot-t.ru/v1/bot/user-key/view-by-telegram-id?secretKey=${r.getInitData.search.secretKey}`,{bot_id:r.getInitData.search.bot_id,telegram_id:r.getInitData.data.id}).then((r=>{200==r.status&&(e("openUserData",r.data.data),t("actionsWithBasket",{action:"get"}))}))},viewAllProducts({commit:e,getters:t},r=0){i().post(`https://api.bot-t.ru/v1/shoppublic/category/view?secretKey=${t.getInitData.search.secretKey}`,{bot_id:t.getInitData.search.bot_id,category_id:r}).then((t=>{d.log(t);let r=[];for(let e in t.data.data)r.push(t.data.data[e]);e("viewCategory",r)}))},actionsWithBasket({commit:e,getters:t},{action:r,category_id:a,count:o}){function n(...e){let r=["category_id","count"],a={bot_id:t.getInitData.search.bot_id,user_id:t.viewUserData.id,secret_user_key:t.viewUserData.secret_user_key};for(let t=0;t<e.length;t++)null==e[t]&&void 0==e[t]||(a[r[t]]=e[t]);return d.log(a),a}i().post(`https://api.bot-t.ru/v1/shopcart/cart/${r}?secretKey=${t.getInitData.search.secretKey}`,n(a,o)).then((t=>{d.log(t),e("toBasket",t.data.data.items)}))},viewChosenCategory({commit:e,dispatch:t},r){t("viewAllProducts",r.id)}},mutations:{changeInitData(e,t){""==t.search||""==t.data?e.initData={data:{id:1028741753},search:{bot_id:12845,secretKey:"db0b766fdbc2274841d28673d0f4cf15dc311b9827f7c7cb2539d05a0f1c317e"}}:e.initData=t},toBasket(e,t){e.basket=t},openBasket(e){e.dialBasket=!e.dialBasket},changeValidator(e,t){e.userValidate=t},changeInitLoading(e,t){e.initLoading=t},openUserData(e,t){e.userData=t},viewCategory(e,t){e.products=t},increaseCountInBasket(e,t){e.basket.find((e=>e.data.id==t.id)).count++},decreaseCountInBasket(e,t){e.basket.find((e=>e.data.id==t.id)).count--,e.basket.find((e=>e.data.id==t.id)).count<1&&(e.basket=e.basket.filter((e=>e.data.id!=t.id)),c.Z.create({message:`Товар ${t.design.title} удален из корзины`,color:"red-3",position:"top",timeout:1e3}))},addInBasket(e,t){e.basket.push({count:1,data:t}),c.Z.create({message:`Товар ${t.design.title} добавлен в корзину`,color:"orange-3",position:"top",timeout:1e3})}},getters:{viewUserData(e){return e.userData},open(e){return e.dialBasket},userValid(e){return e.userValidate},allProducts(e){return e.products},viewInitLoading(e){return e.initLoading},viewBasket(e){return e.basket},getInitData(e){return e.initData}},state:{basket:(0,s.iH)([]),userValidate:(0,s.iH)(!1),dialBasket:(0,s.iH)(!1),products:(0,s.iH)([]),colorScheme:(0,s.iH)(!0),userData:(0,s.iH)({}),initLoading:(0,s.iH)(!0),initData:(0,s.iH)({data:{},search:{}})}},u={actions:{},mutations:{},getters:{showpoppins(e){return e.poppins}},state:{poppins:0}},p=(0,a.h)((function(){const e=(0,o.MT)({modules:{basket:l,protucts:u},strict:!1});return e}))}},t={};function r(a){var o=t[a];if(void 0!==o)return o.exports;var n=t[a]={exports:{}};return e[a].call(n.exports,n,n.exports,r),n.exports}r.m=e,(()=>{var e=[];r.O=(t,a,o,n)=>{if(!a){var i=1/0;for(l=0;l<e.length;l++){for(var[a,o,n]=e[l],s=!0,c=0;c<a.length;c++)(!1&n||i>=n)&&Object.keys(r.O).every((e=>r.O[e](a[c])))?a.splice(c--,1):(s=!1,n<i&&(i=n));if(s){e.splice(l--,1);var d=o();void 0!==d&&(t=d)}}return t}n=n||0;for(var l=e.length;l>0&&e[l-1][2]>n;l--)e[l]=e[l-1];e[l]=[a,o,n]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,a)=>(r.f[a](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{93:"65e44760",145:"adaf1b7c",299:"f51d327b",367:"3c750a03",370:"b930e63e"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+({143:"app",736:"vendor"}[e]||e)+"."+{143:"f05ad09c",145:"4816fe5a",367:"c5534353",370:"3faa7d1f",736:"59777c2f"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="botfree:";r.l=(a,o,n,i)=>{if(e[a])e[a].push(o);else{var s,c;if(void 0!==n)for(var d=document.getElementsByTagName("script"),l=0;l<d.length;l++){var u=d[l];if(u.getAttribute("src")==a||u.getAttribute("data-webpack")==t+n){s=u;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.setAttribute("data-webpack",t+n),s.src=a),e[a]=[o];var p=(t,r)=>{s.onerror=s.onload=null,clearTimeout(h);var o=e[a];if(delete e[a],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((e=>e(r))),t)return t(r)},h=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),c&&document.head.appendChild(s)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p="/botfree/"})(),(()=>{var e=(e,t,r,a)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var n=n=>{if(o.onerror=o.onload=null,"load"===n.type)r();else{var i=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=s,o.parentNode.removeChild(o),a(c)}};return o.onerror=o.onload=n,o.href=t,document.head.appendChild(o),o},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),a=0;a<r.length;a++){var o=r[a],n=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(n===e||n===t))return o}var i=document.getElementsByTagName("style");for(a=0;a<i.length;a++){o=i[a],n=o.getAttribute("data-href");if(n===e||n===t)return o}},a=a=>new Promise(((o,n)=>{var i=r.miniCssF(a),s=r.p+i;if(t(i,s))return o();e(a,s,o,n)})),o={143:0};r.f.miniCss=(e,t)=>{var r={145:1,367:1,370:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=a(e).then((()=>{o[e]=0}),(t=>{throw delete o[e],t})))}})(),(()=>{var e={143:0};r.f.j=(t,a)=>{var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)a.push(o[2]);else{var n=new Promise(((r,a)=>o=e[t]=[r,a]));a.push(o[2]=n);var i=r.p+r.u(t),s=new Error,c=a=>{if(r.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var n=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;s.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",s.name="ChunkLoadError",s.type=n,s.request=i,o[1](s)}};r.l(i,c,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,a)=>{var o,n,[i,s,c]=a,d=0;if(i.some((t=>0!==e[t]))){for(o in s)r.o(s,o)&&(r.m[o]=s[o]);if(c)var l=c(r)}for(t&&t(a);d<i.length;d++)n=i[d],r.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return r.O(l)},a=self["webpackChunkbotfree"]=self["webpackChunkbotfree"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var a=r.O(void 0,[736],(()=>r(4901)));a=r.O(a)})();