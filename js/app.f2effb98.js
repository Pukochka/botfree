(()=>{"use strict";var e={4901:(e,t,r)=>{r(8964),r(702);var a=r(1957),o=r(1947),i=r(499),n=r(9835);function s(e,t,r,a,o,i){const s=(0,n.up)("router-view");return(0,n.wg)(),(0,n.j4)(s)}const d=(0,n.aZ)({name:"App"});var c=r(1639);const l=(0,c.Z)(d,[["render",s],["__scopeId","data-v-cbfda788"]]),u=l;var p=r(663),f=r(3340),h=r(8910);const g=[{path:"/auth",component:()=>Promise.all([r.e(736),r.e(171)]).then(r.bind(r,171)),children:[{path:"/auth",component:()=>Promise.all([r.e(736),r.e(3)]).then(r.bind(r,660))}]},{path:"/",component:()=>Promise.all([r.e(736),r.e(370)]).then(r.bind(r,3370)),children:[{path:"/",component:()=>Promise.all([r.e(736),r.e(111)]).then(r.bind(r,7315))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(736),r.e(93)]).then(r.bind(r,3093))}],v=g,b=(0,f.BC)((function(){const e=h.PO,t=(0,h.p7)({scrollBehavior:()=>({left:0,top:0}),routes:v,history:e("/botfree/")});return t}));async function m(e,t){const a=e(u);a.use(o.Z,t);const n="function"===typeof p["default"]?await(0,p["default"])({}):p["default"],{storeKey:s}=await Promise.resolve().then(r.bind(r,663)),d=(0,i.Xl)("function"===typeof b?await b({store:n}):b);return n.$router=d,{app:a,store:n,storeKey:s,router:d}}var y=r(6827);const w={config:{},plugins:{Notify:y.Z}};var O=r(7779);const k="/botfree/",_=/\/\//,D=e=>(k+e).replace(_,"/");async function C({app:e,router:t,store:r,storeKey:a},o){let i=!1;const n=e=>{try{return D(t.resolve(e).href)}catch(r){}return Object(e)===e?null:e},s=e=>{if(i=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=n(e);null!==t&&(window.location.href=t)},d=window.location.href.replace(window.location.origin,"");for(let l=0;!1===i&&l<o.length;l++)try{await o[l]({app:e,router:t,store:r,ssrContext:null,redirect:s,urlPath:d,publicPath:k})}catch(c){return c&&c.url?void s(c.url):void O.error("[Quasar] boot error:",c)}!0!==i&&(e.use(t),e.use(r,a),e.mount("#q-app"))}m(a.ri,w).then((e=>Promise.all([Promise.resolve().then(r.bind(r,1569))]).then((t=>{const r=t.map((e=>e.default)).filter((e=>"function"===typeof e));C(e,r)}))))},1569:(e,t,r)=>{r.r(t),r.d(t,{api:()=>n,default:()=>s});var a=r(3340),o=r(9981),i=r.n(o);const n=i().create({baseURL:"https://api.example.com"}),s=(0,a.xr)((({app:e})=>{e.config.globalProperties.$axios=i(),e.config.globalProperties.$api=n}))},663:(e,t,r)=>{r.r(t),r.d(t,{default:()=>u});var a=r(3340),o=r(3100),i=r(9981),n=r.n(i),s=r(499),d=r(7779);const c={actions:{getUserData({commit:e,dispatch:t,getters:r}){n().post(`https://api.bot-t.ru/v1/bot/user-key/view-by-telegram-id?secretKey=${r.viewInitData.search.secretKey}`,{bot_id:r.viewInitData.search.bot_id,telegram_id:r.viewInitData.data.user.id}).then((r=>{d.log(r),200==r.status&&(e("openUserData",r.data.data),t("actionsWithBasket",{action:"get"}),t("actionsWithOrders",{action:"count"}),t("actionsWithOrders",{action:"index",offset:0}))}))},getAllProducts({commit:e,getters:t},r=0){n().post(`https://api.bot-t.ru/v1/shoppublic/category/view?secretKey=${t.viewInitData.search.secretKey}`,{bot_id:t.viewInitData.search.bot_id,category_id:r}).then((t=>{d.log(t);let r=[];for(let e in t.data.data)r.push(t.data.data[e]);e("changeCategory",r)}))},getChosenCategory({commit:e,dispatch:t},r){t("getAllProducts",r.id)},actionsWithBasket({commit:e,getters:t},{action:r,category_id:a,count:o}){function i(...e){let r=["category_id","count"],a={bot_id:t.viewInitData.search.bot_id,user_id:t.viewUserData.id,secret_user_key:t.viewUserData.secret_user_key};for(let t=0;t<e.length;t++)null==e[t]&&void 0==e[t]||(a[r[t]]=e[t]);return d.log(a),a}n().post(`https://api.bot-t.ru/v1/shopcart/cart/${r}?secretKey=${t.viewInitData.search.secretKey}`,i(a,o)).then((t=>{d.log(t),e("changeBasket",t.data.data.items)}))},actionsWithOrders({commit:e,getters:t},{action:r,order_id:a,offset:o}){function i(...e){let r=["order_id","offset"],a={bot_id:t.viewInitData.search.bot_id,user_id:t.viewUserData.id,secret_user_key:t.viewUserData.secret_user_key};for(let t=0;t<e.length;t++)null==e[t]&&void 0==e[t]||(a[r[t]]=e[t]);return d.log(a),a}"index"==r&&e("changeInfoOrdersLoading",!0),n().post(`https://api.bot-t.ru/v1/shopcart/order/${r}?secretKey=${t.viewInitData.search.secretKey}`,i(a,o)).then((t=>{200==t.status&&("count"==r?(d.log(t),e("changeInfoOrders",t.data.data.count)):(d.log(t),e("changeInfoOrdersLoading",!1),e("changeOrders",t.data.data)))}))}},mutations:{changeInitData(e,t){if(""==t.search||""==t.data)e.initData={data:{user:{id:1028741753}},search:{bot_id:12845,secretKey:"db0b766fdbc2274841d28673d0f4cf15dc311b9827f7c7cb2539d05a0f1c317e"}};else{let r=t;r.data.user=JSON.parse(t.data.user),e.initData=r}},changeBasket(e,t){e.basket=t},changeOrders(e,t){e.orders=t},changeInfoOrders(e,t){e.infoOrders.count=t},changeInfoOrdersLoading(e,t){e.infoOrders.loading=t},changeValidator(e,t){e.userValidate=t},changeInitLoading(e,t){e.initLoading=t},changeCategory(e,t){e.products=t},changeCategoryView(e,t){e.selectCategoryView=t},openBasket(e){e.dialBasket=!e.dialBasket},openOrder(e){e.dialOrder=!e.dialOrder},openDialForm(e){e.dialForm=!e.dialForm},openUserData(e,t){e.userData=t}},getters:{viewUserData(e){return e.userData},viewDialBasket(e){return e.dialBasket},viewDialOrder(e){return e.dialOrder},viewDialForm(e){return e.dialForm},viewUserValid(e){return e.userValidate},viewAllProducts(e){return e.products},viewInitLoading(e){return e.initLoading},viewInitData(e){return e.initData},viewSelectCategory(e){return e.selectCategoryView},viewBasket(e){return e.basket},viewOrders(e){return e.orders},viewInfoOrders(e){return e.infoOrders}},state:{basket:(0,s.iH)([]),orders:(0,s.iH)([]),products:(0,s.iH)([]),infoOrders:(0,s.iH)({count:0,loading:!0}),dialOrder:(0,s.iH)(!1),dialForm:(0,s.iH)(!1),dialBasket:(0,s.iH)(!1),userValidate:(0,s.iH)(!1),initLoading:(0,s.iH)(!0),userData:(0,s.iH)({}),selectCategoryView:(0,s.iH)(0),initData:(0,s.iH)({data:{},search:{}})}},l={actions:{},mutations:{},getters:{showpoppins(e){return e.poppins}},state:{poppins:0}},u=(0,a.h)((function(){const e=(0,o.MT)({modules:{basket:c,protucts:l},strict:!1});return e}))}},t={};function r(a){var o=t[a];if(void 0!==o)return o.exports;var i=t[a]={exports:{}};return e[a].call(i.exports,i,i.exports,r),i.exports}r.m=e,(()=>{var e=[];r.O=(t,a,o,i)=>{if(!a){var n=1/0;for(l=0;l<e.length;l++){for(var[a,o,i]=e[l],s=!0,d=0;d<a.length;d++)(!1&i||n>=i)&&Object.keys(r.O).every((e=>r.O[e](a[d])))?a.splice(d--,1):(s=!1,i<n&&(n=i));if(s){e.splice(l--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[a,o,i]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,a)=>(r.f[a](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{3:"b4d47857",93:"65e44760",111:"f2df0ffe",171:"575423b3",370:"a3d8ef48"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+({143:"app",736:"vendor"}[e]||e)+"."+{3:"9d53b59d",143:"86f6c5af",171:"74cb3572",370:"3faa7d1f",736:"59777c2f"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="botfree:";r.l=(a,o,i,n)=>{if(e[a])e[a].push(o);else{var s,d;if(void 0!==i)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var u=c[l];if(u.getAttribute("src")==a||u.getAttribute("data-webpack")==t+i){s=u;break}}s||(d=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.setAttribute("data-webpack",t+i),s.src=a),e[a]=[o];var p=(t,r)=>{s.onerror=s.onload=null,clearTimeout(f);var o=e[a];if(delete e[a],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((e=>e(r))),t)return t(r)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),d&&document.head.appendChild(s)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p="/botfree/"})(),(()=>{var e=(e,t,r,a)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=i=>{if(o.onerror=o.onload=null,"load"===i.type)r();else{var n=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.href||t,d=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=n,d.request=s,o.parentNode.removeChild(o),a(d)}};return o.onerror=o.onload=i,o.href=t,document.head.appendChild(o),o},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),a=0;a<r.length;a++){var o=r[a],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var n=document.getElementsByTagName("style");for(a=0;a<n.length;a++){o=n[a],i=o.getAttribute("data-href");if(i===e||i===t)return o}},a=a=>new Promise(((o,i)=>{var n=r.miniCssF(a),s=r.p+n;if(t(n,s))return o();e(a,s,o,i)})),o={143:0};r.f.miniCss=(e,t)=>{var r={3:1,171:1,370:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=a(e).then((()=>{o[e]=0}),(t=>{throw delete o[e],t})))}})(),(()=>{var e={143:0};r.f.j=(t,a)=>{var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)a.push(o[2]);else{var i=new Promise(((r,a)=>o=e[t]=[r,a]));a.push(o[2]=i);var n=r.p+r.u(t),s=new Error,d=a=>{if(r.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=a&&("load"===a.type?"missing":a.type),n=a&&a.target&&a.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+n+")",s.name="ChunkLoadError",s.type=i,s.request=n,o[1](s)}};r.l(n,d,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,a)=>{var o,i,[n,s,d]=a,c=0;if(n.some((t=>0!==e[t]))){for(o in s)r.o(s,o)&&(r.m[o]=s[o]);if(d)var l=d(r)}for(t&&t(a);c<n.length;c++)i=n[c],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(l)},a=self["webpackChunkbotfree"]=self["webpackChunkbotfree"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var a=r.O(void 0,[736],(()=>r(4901)));a=r.O(a)})();