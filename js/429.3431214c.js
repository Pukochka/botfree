(self["webpackChunkwebappbott"]=self["webpackChunkwebappbott"]||[]).push([[429],{429:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>Q});var l=a(9835),A=a(6970),s=a(744),o=a.n(s);const c=e=>((0,l.dD)("data-v-7540e860"),e=e(),(0,l.Cn)(),e),i={key:0,class:"fit text-h5 text-primary q-pa-sm text-weight-bold"},d={key:1,class:"row"},r={class:"q-ml-lg"},n=c((()=>(0,l._)("div",{class:"q-pa-xs fit"},[(0,l._)("img",{src:o(),alt:"bott"})],-1))),p={class:"row no-wrap"},w={class:"col-4"},g={class:"col-4"},k={class:"col-4"},b={class:"fit row"},f={class:"col-4"},u={class:"col-4"},m={class:"col-4"};function x(e,t,a,s,o,c){const x=(0,l.up)("q-avatar"),v=(0,l.up)("q-btn"),B=(0,l.up)("q-badge"),C=(0,l.up)("q-header"),E=(0,l.up)("router-view"),M=(0,l.up)("q-page-container"),z=(0,l.up)("q-toolbar"),h=(0,l.up)("q-footer"),J=(0,l.up)("q-layout");return(0,l.wg)(),(0,l.j4)(J,{view:"lHr lpR lFf"},{default:(0,l.w5)((()=>[(0,l.Wm)(C,{bordered:"",class:"text-primary-7 row items-center bg-grey-2"},{default:(0,l.w5)((()=>[e.width?((0,l.wg)(),(0,l.iD)("div",i,(0,A.zw)(e.viewInfo.bot.title),1)):(0,l.kq)("",!0),e.width?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("div",d,[(0,l._)("div",r,[(0,l.Wm)(x,{color:"brand",size:"50px",rounded:""},{default:(0,l.w5)((()=>[n])),_:1})]),(0,l._)("div",p,[(0,l._)("div",w,[(0,l.Wm)(v,{padding:"0 64px",size:"16px",flat:"",unelevated:"",class:(0,A.C_)(["fit text-weight-bold text-teal-5",{"text-teal-9":"catalog"==e.viewTabs}]),label:"Каталог","no-caps":"","no-wrap":"",onClick:t[0]||(t[0]=t=>e.correctWork("catalog"))},null,8,["class"])]),(0,l._)("div",g,[(0,l.Wm)(v,{size:"16px",flat:"",unelevated:"",class:(0,A.C_)(["fit text-weight-bold text-teal-5",{"text-teal-9 ":"basket"==e.viewTabs}]),label:"Корзина","no-caps":"","no-wrap":"",onClick:t[1]||(t[1]=t=>e.correctWork("basket"))},{default:(0,l.w5)((()=>[0!=e.viewBasket.data.countItems?((0,l.wg)(),(0,l.j4)(B,{key:0,class:"absolute-top-right",rounded:"",color:"red-4"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,A.zw)(e.viewBasket.data.countItems),1)])),_:1})):(0,l.kq)("",!0)])),_:1},8,["class"])]),(0,l._)("div",k,[(0,l.Wm)(v,{size:"16px",flat:"",unelevated:"",class:(0,A.C_)(["fit text-weight-bold text-teal-5",{"text-teal-9":"profile"==e.viewTabs}]),color:"primary",label:"Профиль","no-caps":"","no-wrap":"",onClick:t[2]||(t[2]=t=>e.correctWork("profile"))},null,8,["class"])])])]))])),_:1}),(0,l.Wm)(M,null,{default:(0,l.w5)((()=>[(0,l.Wm)(E)])),_:1}),e.width?((0,l.wg)(),(0,l.j4)(h,{key:0,bordered:"",class:"bg-grey-2 text-primary mobile-footer"},{default:(0,l.w5)((()=>[(0,l.Wm)(z,{class:"",style:{padding:"0"}},{default:(0,l.w5)((()=>[(0,l._)("div",b,[(0,l._)("div",f,[(0,l.Wm)(v,{flat:"",stack:"",unelevated:"",class:(0,A.C_)(["fit column text-teal-5",{"text-teal-9":"catalog"==e.viewTabs}]),icon:"manage_search",label:"Каталог","no-caps":"",size:"13px",onClick:t[3]||(t[3]=t=>e.correctWork("catalog"))},null,8,["class"])]),(0,l._)("div",u,[(0,l.Wm)(v,{flat:"",stack:"",unelevated:"",class:(0,A.C_)(["fit text-teal-5",{"text-teal-9":"basket"==e.viewTabs}]),icon:"shopping_cart",label:"Корзина","no-caps":"",size:"13px",onClick:t[4]||(t[4]=t=>e.correctWork("basket"))},{default:(0,l.w5)((()=>[0!=e.viewBasket.data.countItems?((0,l.wg)(),(0,l.j4)(B,{key:0,class:"absolute-top-right",rounded:"",color:"red"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,A.zw)(e.viewBasket.data.countItems),1)])),_:1})):(0,l.kq)("",!0)])),_:1},8,["class"])]),(0,l._)("div",m,[(0,l.Wm)(v,{flat:"",stack:"",unelevated:"",class:(0,A.C_)(["fit text-teal-5",{"text-teal-9":"profile"==e.viewTabs}]),icon:"person",label:"Профиль","no-caps":"",size:"13px",onClick:t[5]||(t[5]=t=>e.correctWork("profile"))},null,8,["class"])])])])),_:1})])),_:1})):(0,l.kq)("",!0)])),_:1})}var v=a(499),B=a(3100),C=a(9302);const E=(0,l.aZ)({setup(){const e=(0,C.Z)(),t=(0,l.Fl)((()=>e.screen.lt.sm));return{width:t,info:(0,v.iH)(!1),tab:(0,v.iH)("mails")}},computed:{...(0,B.Se)({viewBasket:"basket/viewBasket",viewInfo:"info/viewInfo",viewTabs:"user/viewTab"})},methods:{...(0,B.OI)({initApp:"user/initApp",changeTabs:"user/changeUserTab",changeInfoDialogs:"info/changeInfoDialogs"}),correctWork(e){this.viewInfo.dialogs.order.danger?this.changeInfoDialogs({section:"order",value:e}):this.changeTabs(e)}},watch:{},mounted(){this.initApp()}});var M=a(1639),z=a(7605),h=a(6602),J=a(1357),S=a(4455),Z=a(990),O=a(2133),D=a(1378),y=a(1663),G=a(9984),Y=a.n(G);const I=(0,M.Z)(E,[["render",x],["__scopeId","data-v-7540e860"]]),Q=I;Y()(E,"components",{QLayout:z.Z,QHeader:h.Z,QAvatar:J.Z,QBtn:S.Z,QBadge:Z.Z,QPageContainer:O.Z,QFooter:D.Z,QToolbar:y.Z})},744:e=>{e.exports="data:image/png;base64,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"}}]);