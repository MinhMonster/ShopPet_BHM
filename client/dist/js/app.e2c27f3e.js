(function(){"use strict";var t={6807:function(t,e,s){var a=s(6369),i=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},n=[],r={components:{},methods:{}},o=r,c=s(3736),l=(0,c.Z)(o,i,n,!1,null,null,null),u=l.exports,d=s(3822);a["default"].use(d.ZP);var m=new d.ZP.Store({state:{count:0,user:{id:"",username:"",password:"",email:localStorage.getItem("email"),cash:"",token:localStorage.getItem("token")}},mutations:{update(t,e){t.user.username=e},setUsername(t,e){t.user.username=e},increment:t=>{t.count++}},actions:{async fetchProducts({commit:t}){const e=await axios.get("todos");t("setProducts",e.data)},click({commit:t}){t("update","value")}},modules:{},getters:{double:t=>2*t.count}}),f=s(2631),h=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"admin"}},[e("header-app"),e("menu-app"),e("router-view")],1)},p=[],g=function(){var t=this,e=t._self._c;return e("div",{class:{active:t.isOn,on:t.isOn,off:t.isOff},attrs:{id:"nav"}},[e("section",{attrs:{id:"header-mobile"}},[e("header",{attrs:{id:"header-admin"}},[t._m(0),t._m(1),e("client-app"),e("button",{staticClass:"menu-toggle hidden",on:{click:function(e){t.isOn=!t.isOn,t.isOff=!t.isOff}}},[e("i",{staticClass:"fa fa-bars"})])],1)])])},v=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"logo-header"},[e("img",{attrs:{src:"/images/logo.png",alt:""}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"form-search flex-row-space-between hidden"},[e("div",{staticClass:"flex-row-space-between rel"},[e("i",{staticClass:"icon-search fa fa-search abs"}),e("input",{staticClass:"input-search",attrs:{type:"text",placeholder:"Search"}})]),e("a",{staticClass:"icon default",attrs:{href:"#"}},[e("img",{attrs:{src:"/images/User.png",alt:""}})])])}],C=function(){var t=this,e=t._self._c;return e("div",{staticClass:"client"},[e("section",{staticClass:"text-white",attrs:{id:"client"}},["online"==this.client.login?e("div",{staticClass:"flex-row-space-between-center"},[e("h1",[t._v("Xin chào: "+t._s(t.client.username))]),e("button",{staticClass:"btn btn-danger mgl-20px",on:{click:t.logoutUser}},[t._v("Logout")])]):t._e(),"offline"==this.client.login?e("div",{staticClass:"flex-row-end"},[e("button",{staticClass:"btn btn-primary",attrs:{herf:"/login"},on:{click:t.logoutUser}},[t._v("Login")])]):t._e()])])},_=[],b=s(1998),w={data(){return{id:"",name:"",username:"",email:"",password:"",client:{email:localStorage.getItem("email"),token:localStorage.getItem("token"),username:"",login:localStorage.getItem("login")}}},created(){},mounted(){console.log(this),this.checkUser()},computed:{},methods:{logoutUser(){localStorage.removeItem("email"),localStorage.removeItem("token"),localStorage.setItem("login","offline"),window.location.href="/admin/login"},async checkUser(){await this.$request.post("http://localhost:8000/api/client",{email:this.$store.state.user.email}).then((t=>{t.data.success||(localStorage.setItem("login","offline"),window.location.href="/admin/login"),t.data.success&&(this.client.username=t.data.user.username,this.client.password=t.data.user.password,localStorage.setItem("login","online"))}))}},computed:{}},x=w,S=(0,c.Z)(x,C,_,!1,null,null,null),y=S.exports,A={components:{clientApp:y},data(){return{isOn:!1,isOff:!0}},created(){},mounted(){window.addEventListener("resize",this.getWindowWidth),this.windowWidth=document.documentElement.clientWidth,this.windowWidth>=576?(this.isOn=!0,this.isOff=!1):this.isOn=!1},methods:{getWindowWidth(t){this.windowWidth=document.documentElement.clientWidth,this.windowWidth>=576?(this.isOn=!0,this.isOff=!1):this.isOn=!1}}},k=A,O=(0,c.Z)(k,g,v,!1,null,"1de1f208",null),E=O.exports,W=function(){var t=this,e=t._self._c;return e("div",{staticClass:"menu-icon",class:{"menu-left-on":t.isActive,"menu-left-off":!t.isActive}},[e("section",{staticClass:"dark",class:{active:t.isActive},attrs:{id:"menu-icon"}},[t._m(0),e("button",{staticClass:"menu-left-toggle",class:{active:t.isActive,start:t.isStart},on:{click:function(e){return t.clickToggle()}}},[e("i",{staticClass:"fa-solid fa-angles-right"})]),e("ul",{staticClass:"icon-img"},[e("li",[e("router-link",{attrs:{to:"/admin/products"}},[e("img",{attrs:{src:"/images/Icon-1.png",alt:""}})])],1),e("li",[e("router-link",{attrs:{to:"/admin/users"}},[e("img",{attrs:{src:"/images/Icon-2.png",alt:""}})])],1),t._m(1),t._m(2),t._m(3),t._m(4)])]),e("section",{staticClass:"flex-column dark",class:{on:t.isActive,off:!t.isActive},attrs:{id:"menu-left"}},[t._m(5),e("h1",{staticClass:"pd-lr-20px"},[t._v("Projects")]),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),t._m(14)])])},T=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"logo"},[e("img",{attrs:{src:"/images/logo.png",alt:""}})])},function(){var t=this,e=t._self._c;return e("li",{staticClass:"active"},[e("a",{attrs:{href:"#"}},[e("img",{attrs:{src:"/images/Equalizer.png",alt:""}})])])},function(){var t=this,e=t._self._c;return e("li",[e("a",{attrs:{href:"#"}},[e("img",{attrs:{src:"/images/Icon-4.png",alt:""}})])])},function(){var t=this,e=t._self._c;return e("li",[e("a",{attrs:{href:"#"}},[e("img",{attrs:{src:"/images/Icon-5.png",alt:""}})])])},function(){var t=this,e=t._self._c;return e("li",[e("a",{attrs:{href:"#"}},[e("img",{attrs:{src:"/images/Icon-6.png",alt:""}})])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"form-search flex-row-space-between"},[e("div",{staticClass:"flex-row-space-between rel"},[e("i",{staticClass:"icon-search fa fa-search abs"}),e("input",{staticClass:"input-search",attrs:{type:"text",placeholder:"Search"}})]),e("a",{staticClass:"icon default",attrs:{href:"#"}},[e("img",{attrs:{src:"/images/User.png",alt:""}})])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex-row item-group"},[e("div",{staticClass:"icon bg-default"},[e("img",{attrs:{src:"/images/Vector.png",alt:""}})]),e("div",{staticClass:"mgl-15px"},[e("h6",{staticClass:"title"},[t._v("Top Authors")]),e("p",{staticClass:"content"},[t._v("Most Successful Fellas")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex item-group"},[e("div",{staticClass:"icon bg-default"},[e("img",{attrs:{src:"/images/Vector-2.png",alt:""}})]),e("div",{staticClass:"mgl-15px"},[e("h6",{staticClass:"title"},[t._v("Top Authors")]),e("p",{staticClass:"content"},[t._v("Most Successful Fellas")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex-row item-group"},[e("div",{staticClass:"icon bg-default"},[e("img",{attrs:{src:"/images/Vector-3.png",alt:""}})]),e("div",{staticClass:"mgl-15px"},[e("h6",{staticClass:"title"},[t._v("Top Authors")]),e("p",{staticClass:"content"},[t._v("Most Successful Fellas")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex-row item-group"},[e("div",{staticClass:"icon bg-default"},[e("img",{attrs:{src:"/images/Vector.png",alt:""}})]),e("div",{staticClass:"mgl-15px"},[e("h6",{staticClass:"title"},[t._v("Top Authors")]),e("p",{staticClass:"content"},[t._v("Most Successful Fellas")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex-row item-group"},[e("div",{staticClass:"icon bg-default"},[e("img",{attrs:{src:"/images/Vector-2.png",alt:""}})]),e("div",{staticClass:"mgl-15px"},[e("h6",{staticClass:"title"},[t._v("Top Authors")]),e("p",{staticClass:"content"},[t._v("Most Successful Fellas")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex-row item-group"},[e("div",{staticClass:"icon bg-default"},[e("img",{attrs:{src:"/images/Vector-3.png",alt:""}})]),e("div",{staticClass:"mgl-15px"},[e("h6",{staticClass:"title"},[t._v("Top Authors")]),e("p",{staticClass:"content"},[t._v("Most Successful Fellas")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex-row item-group"},[e("div",{staticClass:"icon bg-default"},[e("img",{attrs:{src:"/images/Vector.png",alt:""}})]),e("div",{staticClass:"mgl-15px"},[e("h6",{staticClass:"title"},[t._v("Top Authors")]),e("p",{staticClass:"content"},[t._v("Most Successful Fellas")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex-row item-group"},[e("div",{staticClass:"icon bg-default"},[e("img",{attrs:{src:"/images/Vector-2.png",alt:""}})]),e("div",{staticClass:"mgl-15px"},[e("h6",{staticClass:"title"},[t._v("Top Authors")]),e("p",{staticClass:"content"},[t._v("Most Successful Fellas")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex-row item-group"},[e("div",{staticClass:"icon bg-default"},[e("img",{attrs:{src:"/images/Vector-3.png",alt:""}})]),e("div",{staticClass:"mgl-15px"},[e("h6",{staticClass:"title"},[t._v("Top Authors")]),e("p",{staticClass:"content"},[t._v("Most Successful Fellas")])])])}],I={data(){return{isActive:!1,isStart:!1,windowWidth:0,windowHeight:0}},created(){},components:{},methods:{},mounted(){window.addEventListener("resize",this.getWindowWidth),window.addEventListener("resize",this.getWindowHeight),this.getWindowWidth(),this.getWindowHeight()},methods:{clickToggle(){0==this.isActive?(this.isActive=!0,this.isStart=!0):this.isActive=!1,this.$emit("clickToggle",this.menuleft)},getWindowWidth(t){this.windowWidth=document.documentElement.clientWidth,this.windowWidth>1200?(this.isActive=!0,this.isStart=!0):(this.isActive=!1,this.isStart=!0)},getWindowHeight(t){this.windowHeight=document.documentElement.clientHeight}},beforeDestroy(){window.removeEventListener("resize",this.getWindowWidth),window.removeEventListener("resize",this.getWindowHeight),this.windowWidth>800?this.isStart=!0:this.isStart=!1}},L=I,P=(0,c.Z)(L,W,T,!1,null,null,null),j=P.exports,M={name:"Admin",components:{headerApp:E,menuApp:j},methods:{toggle(){document.getElementsByClassName("sold").classList.toggle("hide")}},computed:{}},U=M,F=(0,c.Z)(U,h,p,!1,null,"e7bd8ff0",null),Z=F.exports,H=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"client"}},[e("header-client"),e("router-view")],1)},N=[],V=function(){var t=this;t._self._c;return t._m(0)},z=[function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"header-client"}},[e("header",{attrs:{id:"header"}},[e("section",{staticClass:"fixed",attrs:{id:"header-top"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"list-menu-header height-110px"},[e("div",{staticClass:"flex-row-space-between-center"},[e("div",{staticClass:"left-item-header flex-row"},[e("div",{staticClass:"logo"},[e("img",{attrs:{src:"images/Logo-M-3.png",alt:""}})]),e("select",{staticClass:"select dark color-default",attrs:{name:"select-header",id:"select-header"}},[e("option",{attrs:{value:"1"}},[e("a",{attrs:{href:"#"}},[t._v("SAAS Users")])]),e("option",{attrs:{value:"2"}},[t._v("SAAS Users")]),e("option",{attrs:{value:"3"}},[t._v("SAAS Users")]),e("option",{attrs:{value:"4"}},[t._v("SAAS Users")])])]),e("button",{staticClass:"menu-toggle"},[e("i",{staticClass:"fa fa-bars"})])]),e("div",{staticClass:"flex-row-wrap gap-10px"},[e("a",{staticClass:"icon warning",attrs:{href:""}},[e("img",{attrs:{src:"images/Cart3.png",alt:""}})]),e("a",{staticClass:"icon primary",attrs:{href:""}},[e("img",{attrs:{src:"images/Compiling.png",alt:""}})]),e("a",{staticClass:"icon warning",attrs:{href:""}},[e("img",{attrs:{src:"images/Equalizer.png",alt:""}})]),e("a",{staticClass:"icon warning",attrs:{href:""}},[e("img",{attrs:{src:"images/Layout-4-blocks.png",alt:""}})]),e("a",{staticClass:"icon-text",attrs:{href:"#"}},[t._v("Hi, Sean")]),e("a",{staticClass:"icon-big dark dark-3",attrs:{href:""}},[t._v("S")])])])])]),e("section",{staticClass:"top-110px",attrs:{id:"header-bottom"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"list-menu-header-bottom scroll-x"},[e("ul",{staticClass:"btn-list-dark",attrs:{id:"menu-row"}},[e("li",{staticClass:"active"},[e("a",{attrs:{href:"#"}},[t._v("Dashboard")])]),e("li",[e("a",{attrs:{href:"#"}},[t._v("Components")])]),e("li",[e("a",{attrs:{href:"#"}},[t._v("Crud")])]),e("li",[e("a",{attrs:{href:"#"}},[t._v("Apps")])]),e("li",[e("a",{attrs:{href:"#"}},[t._v("Pages")])])]),e("div",{staticClass:"form-input-search"},[e("i",{staticClass:"icon-search fa fa-search"}),e("input",{staticClass:"input-search",attrs:{type:"text",placeholder:"Search"}}),e("button",{staticClass:"icon-text button-search bg-danger-bland"},[t._v("Search")])])])])])])])}],q={components:{},data(){return{}},created(){},mounted(){},methods:{}},B=q,$=(0,c.Z)(B,V,z,!1,null,"6fb0ac24",null),D=$.exports,X={components:{headerClient:D},methods:{toggle(){document.getElementsByClassName("sold").classList.toggle("hide")}},computed:{}},G=X,K=(0,c.Z)(G,H,N,!1,null,"78ae7dd4",null),J=K.exports;a["default"].use(f.ZP);const Q=[{path:"/admin/login",name:"admin.login",component:()=>s.e(839).then(s.bind(s,6839))},{path:"/",name:"client",component:J,children:[{path:"/",name:"home.index",component:()=>s.e(238).then(s.bind(s,6238))},{path:"products",name:"home.products",component:()=>s.e(368).then(s.bind(s,7368))},{path:"products/detail/:id",name:"home.products.detail",component:()=>s.e(693).then(s.bind(s,6693))},{path:"carts",name:"home.carts",component:()=>s.e(553).then(s.bind(s,2553))}]},{path:"/admin/",name:"admin",component:Z,children:[{path:"",name:"admin.home",component:()=>s.e(352).then(s.bind(s,2352))},{path:"management/",name:"admin.management",component:()=>s.e(780).then(s.bind(s,4780)),children:[{path:"login",name:"admin.management.login",component:()=>s.e(724).then(s.bind(s,8724))},{path:"users",name:"admin.management.users",component:()=>s.e(650).then(s.bind(s,5650))},{path:"users/create",name:"admin.management.users.create",component:()=>s.e(610).then(s.bind(s,3610))},{path:"users/edit/:id",name:"admin.management.users.edit",component:()=>s.e(610).then(s.bind(s,3610))},{path:"products",name:"admin.management.products",component:()=>s.e(352).then(s.bind(s,2352))},{path:"products",name:"admin.products",component:()=>s.e(352).then(s.bind(s,2352))},{path:"products/create",name:"admin.management.products.create",component:()=>s.e(110).then(s.bind(s,1110))},{path:"products/edit/:id",name:"admin.management.products.edit",component:()=>s.e(110).then(s.bind(s,1110))}]}]}],R=new f.ZP({mode:"history",base:"/",routes:Q});var Y=R,tt=s(8126),et=s(2763),st=s(2806),at=s(7655),it=s(1533);s(5765);a["default"].config.productionTip=!1,new a["default"]({store:m,router:Y,render:t=>t(u)}).$mount("#app"),a["default"].use(et),a["default"].use(at.XG7),a["default"].use(it.A7),a["default"].use(tt.Z,{$request:b}),a["default"].component("paginate",st)}},e={};function s(a){var i=e[a];if(void 0!==i)return i.exports;var n=e[a]={id:a,loaded:!1,exports:{}};return t[a].call(n.exports,n,n.exports,s),n.loaded=!0,n.exports}s.m=t,function(){s.amdO={}}(),function(){var t=[];s.O=function(e,a,i,n){if(!a){var r=1/0;for(u=0;u<t.length;u++){a=t[u][0],i=t[u][1],n=t[u][2];for(var o=!0,c=0;c<a.length;c++)(!1&n||r>=n)&&Object.keys(s.O).every((function(t){return s.O[t](a[c])}))?a.splice(c--,1):(o=!1,n<r&&(r=n));if(o){t.splice(u--,1);var l=i();void 0!==l&&(e=l)}}return e}n=n||0;for(var u=t.length;u>0&&t[u-1][2]>n;u--)t[u]=t[u-1];t[u]=[a,i,n]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var a in e)s.o(e,a)&&!s.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){s.f={},s.e=function(t){return Promise.all(Object.keys(s.f).reduce((function(e,a){return s.f[a](t,e),e}),[]))}}(),function(){s.u=function(t){return"js/"+t+"."+{110:"0f6fa284",238:"023e8227",352:"b5a74b26",368:"03ac6cb3",553:"14a3a3a6",610:"e16a5c2f",650:"97fe24c4",693:"5a181e6f",724:"4385b9b7",780:"8b62a5e4",839:"3546c34c"}[t]+".js"}}(),function(){s.miniCssF=function(t){return"css/"+t+"."+{110:"3bcd778d",352:"473cf6d1",368:"15e2fadd",553:"67347728",610:"3bcd778d",650:"3cf5ea11",693:"f0636314",724:"60cddcad",780:"2dbfaed5",839:"8bad02a3"}[t]+".css"}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.hmd=function(t){return t=Object.create(t),t.children||(t.children=[]),Object.defineProperty(t,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+t.id)}}),t}}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="vue-router:";s.l=function(a,i,n,r){if(t[a])t[a].push(i);else{var o,c;if(void 0!==n)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==e+n){o=d;break}}o||(c=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,s.nc&&o.setAttribute("nonce",s.nc),o.setAttribute("data-webpack",e+n),o.src=a),t[a]=[i];var m=function(e,s){o.onerror=o.onload=null,clearTimeout(f);var i=t[a];if(delete t[a],o.parentNode&&o.parentNode.removeChild(o),i&&i.forEach((function(t){return t(s)})),e)return e(s)},f=setTimeout(m.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=m.bind(null,o.onerror),o.onload=m.bind(null,o.onload),c&&document.head.appendChild(o)}}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){s.p="/"}(),function(){var t=function(t,e,s,a){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var n=function(n){if(i.onerror=i.onload=null,"load"===n.type)s();else{var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.href||e,c=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=r,c.request=o,i.parentNode.removeChild(i),a(c)}};return i.onerror=i.onload=n,i.href=e,document.head.appendChild(i),i},e=function(t,e){for(var s=document.getElementsByTagName("link"),a=0;a<s.length;a++){var i=s[a],n=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(n===t||n===e))return i}var r=document.getElementsByTagName("style");for(a=0;a<r.length;a++){i=r[a],n=i.getAttribute("data-href");if(n===t||n===e)return i}},a=function(a){return new Promise((function(i,n){var r=s.miniCssF(a),o=s.p+r;if(e(r,o))return i();t(a,o,i,n)}))},i={143:0};s.f.miniCss=function(t,e){var s={110:1,352:1,368:1,553:1,610:1,650:1,693:1,724:1,780:1,839:1};i[t]?e.push(i[t]):0!==i[t]&&s[t]&&e.push(i[t]=a(t).then((function(){i[t]=0}),(function(e){throw delete i[t],e})))}}(),function(){var t={143:0};s.f.j=function(e,a){var i=s.o(t,e)?t[e]:void 0;if(0!==i)if(i)a.push(i[2]);else{var n=new Promise((function(s,a){i=t[e]=[s,a]}));a.push(i[2]=n);var r=s.p+s.u(e),o=new Error,c=function(a){if(s.o(t,e)&&(i=t[e],0!==i&&(t[e]=void 0),i)){var n=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src;o.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",o.name="ChunkLoadError",o.type=n,o.request=r,i[1](o)}};s.l(r,c,"chunk-"+e,e)}},s.O.j=function(e){return 0===t[e]};var e=function(e,a){var i,n,r=a[0],o=a[1],c=a[2],l=0;if(r.some((function(e){return 0!==t[e]}))){for(i in o)s.o(o,i)&&(s.m[i]=o[i]);if(c)var u=c(s)}for(e&&e(a);l<r.length;l++)n=r[l],s.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return s.O(u)},a=self["webpackChunkvue_router"]=self["webpackChunkvue_router"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=s.O(void 0,[998],(function(){return s(6807)}));a=s.O(a)})();
//# sourceMappingURL=app.e2c27f3e.js.map