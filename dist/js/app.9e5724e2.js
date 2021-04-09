(function(t){function e(e){for(var a,s,i=e[0],c=e[1],l=e[2],u=0,p=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&p.push(n[s][0]),n[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],a=!0,i=1;i<r.length;i++){var c=r[i];0!==n[c]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=r[0]))}return t}var a={},n={app:0},o=[];function s(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=a,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(r,a,function(e){return t[e]}.bind(null,a));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var d=c;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"2dd2":function(t,e,r){"use strict";r("e2a1")},"3fe1":function(t,e,r){"use strict";r("5ae8")},"4a75":function(t,e,r){"use strict";r("9fdf")},"56d7":function(t,e,r){"use strict";r.r(e);var a=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("vMainWrapper")],1)},o=[],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"v-main-wrapper"},[r("header",[r("div",{staticClass:"container"},[r("h2",[t._v("eShop")]),r("v-search",{on:{search:t.searchHandler}}),r("button",{staticClass:"cart-button",attrs:{type:"button"},on:{click:t.cartRenderHandler}},[t._v("Корзина "),0!=t.cart.length?r("span",[t._v(t._s(t.cart.length))]):t._e()])],1)]),r("div",{staticClass:"container"},[r("main",[r("v-cart",{attrs:{"is-cart-visible":t.isCartVisible,"cart-list":t.cart}}),r("v-catalog",{attrs:{"prod-list":t.filtredGoods}})],1)])])},i=[],c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.isCartVisible?r("div",{staticClass:"v-cart"},[r("h3",[t._v("Корзина товаров на сумму "+t._s(t.getCartTotal()))]),t.isEmptyCart?r("ul",t._l(t.cartList,(function(t,e){return r("li",{key:t.art},[r("cart-item",{attrs:{"cart-item":t,"cart-index":e}})],1)})),0):r("v-error-msg",[t._v("Нет добавленных товаров")])],1):t._e()},l=[],d=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",{staticClass:"noData"},[t._t("default")],2)},u=[],p={name:"v-error-msg",data(){return{}},methods:{}},h=p,f=(r("2dd2"),r("2877")),m=Object(f["a"])(h,d,u,!1,null,"60b984eb",null),v=m.exports,b={components:{vErrorMsg:v},name:"v-cart",data(){return{}},props:["isCartVisible","cartList"],computed:{isEmptyCart(){return!!this.cartList.length}},methods:{getCartTotal(){let t=0;return this.cartList.forEach(e=>{t+=e.price*e.count}),t}}},g=b,C=(r("bc0b"),Object(f["a"])(g,c,l,!1,null,"c4a7c620",null)),_=C.exports,y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"v-catalog"},[t.isEmptyProd?r("v-error-msg",[t._v("Нет данных для отображения")]):t._l(t.prodList,(function(t){return r("v-catalog-item",{key:t.art,attrs:{"prod-item":t}})}))],2)},j=[],O=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"v-catalog-item"},[r("div",{staticClass:"item-img"},[r("img",{attrs:{src:t.prodItem.link,alt:t.prodItem.title}})]),r("h3",[t._v(t._s(t.prodItem.title))]),r("p",[t._v(t._s(t.prodItem.price))]),r("button",{staticClass:"add-button",attrs:{"data-art":t.prodItem.art,type:"button"},on:{click:t.addToCart}},[t._v("Добавить")])])},x=[],$={name:"v-catalog-item",data(){return{}},props:["prodItem"],methods:{addToCart(t){this.$root.$emit("addItemToCart",t)}}},S=$,w=(r("3fe1"),Object(f["a"])(S,O,x,!1,null,"135943d3",null)),E=w.exports,T={components:{vCatalogItem:E,VErrorMsg:v},name:"v-catalog",data(){return{}},props:["prodList"],computed:{isEmptyProd(){return!this.prodList.length}}},H=T,P=(r("4a75"),Object(f["a"])(H,y,j,!1,null,null,null)),V=P.exports,G=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"v-search"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.searchStr,expression:"searchStr"}],attrs:{id:"search"},domProps:{value:t.searchStr},on:{input:[function(e){e.target.composing||(t.searchStr=e.target.value)},t.search]}})])},I=[],k={name:"v-search",data(){return{searchStr:""}},methods:{search(){this.$emit("search",this.searchStr)}}},F=k,M=(r("a411"),Object(f["a"])(F,G,I,!1,null,"1b17780e",null)),L=M.exports,J={name:"v-main-wrapper",components:{VSearch:L,VCatalog:V,VCart:_},props:{},data(){return{goods:[],filtredGoods:[],isCartVisible:!1,cart:[]}},methods:{cartRenderHandler(){return this.isCartVisible=!this.isCartVisible},addToCartHandler(t){const e=t.target.dataset.art,r=this.filtredGoods.find(t=>t.art==e);fetch("http://127.0.0.1:3000/cart",{method:"post",mode:"no-cors",headers:{Accept:"*/*","Content-Type":"application/json"},body:JSON.stringify({...r})}).then(()=>this.fetchCart())},reduceFromCartHandler(t){const e=t.target.dataset.art,r=this.filtredGoods.find(t=>t.art==e);fetch("http://127.0.0.1:3000/cart",{method:"put",headers:{Accept:"*/*","Content-Type":"application/json"},body:JSON.stringify({...r})}).then(()=>this.fetchCart())},deleteFromCartHandler(t){const e=t.target.dataset.index;fetch("http://127.0.0.1:3000/cart",{method:"delete",headers:{Accept:"*/*","Content-Type":"application/json"},body:JSON.stringify({index:e})}).then(()=>this.fetchCart())},searchHandler(t){""===t&&(this.filtredGoods=this.goods);const e=new RegExp(t,"gi");this.filtredGoods=this.goods.filter(t=>e.test(t.title))},fetchGoods(){fetch("./goods.json").then(t=>t.json()).then(t=>{this.goods=t,this.filtredGoods=t}).catch(t=>console.error("Fetch goods data error: ",t))},fetchCart(){fetch("./cart.json").then(t=>t.json()).then(t=>{this.cart=t}).catch(t=>console.error("Fetch cart data error: ",t))}},created(){this.$root.$on("addItemToCart",t=>{this.addToCartHandler(t)}),this.$root.$on("reduceFromCart",t=>{this.reduceFromCartHandler(t)}),this.$root.$on("deleteFromCart",t=>{this.deleteFromCartHandler(t)})},mounted(){this.fetchGoods(),this.fetchCart()}},A=J,N=(r("669a"),Object(f["a"])(A,s,i,!1,null,null,null)),R=N.exports,W={name:"App",components:{vMainWrapper:R}},D=W,q=Object(f["a"])(D,n,o,!1,null,null,null),z=q.exports;a["a"].config.productionTip=!1,new a["a"]({render:t=>t(z)}).$mount("#app")},"5ae8":function(t,e,r){},"669a":function(t,e,r){"use strict";r("eeeb")},"800c":function(t,e,r){},"9fdf":function(t,e,r){},a411:function(t,e,r){"use strict";r("800c")},bc06:function(t,e,r){},bc0b:function(t,e,r){"use strict";r("bc06")},e2a1:function(t,e,r){},eeeb:function(t,e,r){}});
//# sourceMappingURL=app.9e5724e2.js.map