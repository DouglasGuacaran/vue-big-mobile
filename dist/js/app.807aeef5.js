(function(t){function e(e){for(var r,n,s=e[0],c=e[1],l=e[2],m=0,p=[];m<s.length;m++)n=s[m],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&p.push(o[n][0]),o[n]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,s=1;s<a.length;s++){var c=a[s];0!==o[c]&&(r=!1)}r&&(i.splice(e--,1),t=n(n.s=a[0]))}return t}var r={},o={app:0},i=[];function n(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=r,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(a,r,function(e){return t[e]}.bind(null,r));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/vue-big-mobile/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"1a12":function(t,e,a){},"4f7f":function(t,e,a){"use strict";a("7bf6")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{staticClass:"app",attrs:{id:"app"}},[a("Navbar",{attrs:{id:"nav-bar-sticky"}}),a("v-main",[a("router-view")],1)],1)},i=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-app-bar",{attrs:{color:"deep-purple accent-4",dense:"",dark:""}},[a("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),a("v-toolbar-title",[t._v("Big Mobile")]),a("v-spacer"),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-heart")])],1),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-magnify")])],1),a("v-menu",{attrs:{left:"",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[a("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",o,!1),r),[a("v-icon",[t._v("mdi-dots-vertical")])],1)]}}])},[a("v-list",t._l(5,(function(e){return a("v-list-item",{key:e,on:{click:function(){}}},[a("v-list-item-title",[t._v("Option "+t._s(e))])],1)})),1)],1)],1),a("v-navigation-drawer",{staticClass:"navigation-drawer",attrs:{absolute:"",bottom:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list-item",[a("v-list-item-avatar",[a("v-img",{attrs:{src:"https://randomuser.me/api/portraits/lego/2.jpg"}})],1),a("v-list-item-content",[a("v-list-item-title",[t._v("Tienda Big Mobile")])],1)],1),a("v-divider"),a("v-list",{attrs:{nav:"",dense:""}},t._l(t.items,(function(e){return a("v-list-item",{key:e.title,attrs:{link:"",to:e.path}},[a("v-list-item-icon",[a("v-icon",[t._v(t._s(e.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.title))])],1)],1)})),1)],1)],1)},s=[],c={name:"navbarComponent",data:function(){return{drawer:!1,group:null,items:[{title:"Home",icon:"mdi-view-dashboard",path:"/"},{title:"Equipos y Acesorios",icon:"mdi-forum",path:"/bigmobile.cl/equiposyaccesorios"},{title:"Planes",icon:"mdi-forum",path:"/bigmobile.cl/planes"},{title:"Prepago",icon:"mdi-forum",path:"/bigmobile.cl/prepago"},{title:"Oficina Virtual",icon:"mdi-forum",path:"/bigmobile.cl/oficinavirtual"},{title:"Checkout",icon:"mdi-forum",path:"/bigmobile.cl/equiposyaccesorios/checkout"}]}},watch:{group:function(){this.drawer=!1}}},l=c,u=(a("5dfc"),a("2877")),m=a("6544"),p=a.n(m),d=a("40dc"),v=a("5bc1"),f=a("8336"),b=a("ce7e"),g=a("132d"),h=a("adda"),_=a("8860"),C=a("da13"),w=a("8270"),x=a("5d23"),y=a("34c3"),V=a("e449"),O=a("f774"),M=a("2fa4"),j=a("2a7f"),A=Object(u["a"])(l,n,s,!1,null,null,null),G=A.exports;p()(A,{VAppBar:d["a"],VAppBarNavIcon:v["a"],VBtn:f["a"],VDivider:b["a"],VIcon:g["a"],VImg:h["a"],VList:_["a"],VListItem:C["a"],VListItemAvatar:w["a"],VListItemContent:x["a"],VListItemIcon:y["a"],VListItemTitle:x["b"],VMenu:V["a"],VNavigationDrawer:O["a"],VSpacer:M["a"],VToolbarTitle:j["a"]});var q={name:"App",components:{Navbar:G},data:function(){return{}}},k=q,B=(a("034f"),a("7496")),R=a("f6c4"),S=Object(u["a"])(k,o,i,!1,null,null,null),E=S.exports;p()(S,{VApp:B["a"],VMain:R["a"]});var T,P=a("8c4f"),D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("div",[a("h3",{staticClass:"text-h1"},[t._v(" Bienvenido a mi sitio web ")])]),a("v-row",t._l(t.Data.opiniones,(function(t,e){return a("v-col",{key:e,staticClass:"mx-auto"},[a("Card",{attrs:{imgSrc:t.img,subtitulo:t.nombre,parrafo:t.texto}})],1)})),1)],1)},I=[],$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{attrs:{width:"344",shaped:""}},[a("v-img",{attrs:{width:"344","max-height":"325",src:""+t.imgSrc,contain:""}}),a("v-card-title",[a("h2",[t._v(" "+t._s(t.subtitulo)+" ")])]),a("v-card-subtitle",[a("h3",[t._v(" "+t._s(t.parrafo)+" ")])]),a("v-card-actions",[a("v-btn",{staticClass:"red--text",attrs:{dark:"",to:"/bigmobile.cl/equiposyaccesorios"}},[t._v(" Entrar ")])],1)],1)},L=[],N=a("ade3"),H=(T={name:"cardView",data:function(){return{width:200}}},Object(N["a"])(T,"name","Card"),Object(N["a"])(T,"props",{imgSrc:String,subtitulo:String,parrafo:String}),T),F=H,W=a("b0af"),z=a("99d9"),J=Object(u["a"])(F,$,L,!1,null,null,null),Y=J.exports;p()(J,{VBtn:f["a"],VCard:W["a"],VCardActions:z["a"],VCardSubtitle:z["b"],VCardTitle:z["d"],VImg:h["a"]});var Z=a("6070"),U={name:"homeView",components:{Card:Y},data:function(){return{Data:Z}}},K=U,X=a("62ad"),Q=a("a523"),tt=a("0fd9"),et=Object(u["a"])(K,D,I,!1,null,null,null),at=et.exports;p()(et,{VCol:X["a"],VContainer:Q["a"],VRow:tt["a"]});var rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",[a("v-col",{staticClass:"mx-auto titulo text-center",attrs:{cols:"6"}},[a("h1",[t._v("Confirmación")])])],1),a("v-row",[a("v-col",{staticClass:"mx-auto parrafo ",attrs:{cols:"6"}},[a("v-card",{staticClass:"pa-2 text-center",attrs:{justify:"center"}},[a("p",[t._v(" La Orden "),a("b",{staticClass:"font-weight-bold"},[t._v("N° "+t._s(t.data.orderNumber)+" ")]),t._v("ha sido "),a("b",{staticClass:"font-weight-bold"},[t._v(t._s(t.data.status)+" ")]),t._v(" y ya la estamos preparando! ")])])],1)],1),a("v-row",[a("v-col",{staticClass:"mx-auto my-2 text-center",attrs:{cols:"4"}},[a("v-btn",{staticClass:"primary text-center",attrs:{to:"/"}},[t._v(" Ir al Home ")])],1)],1)],1)},ot=[],it={name:"confirmacionView",data:function(){return{data:{orderNumber:4452239,status:"CONFIRMADO"}}},created:function(){}},nt=it,st=(a("4f7f"),Object(u["a"])(nt,rt,ot,!1,null,null,null)),ct=st.exports;p()(st,{VBtn:f["a"],VCard:W["a"],VCol:X["a"],VContainer:Q["a"],VRow:tt["a"]});var lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"m-1"},[a("v-row",[a("v-col",{staticClass:"my-4",attrs:{align:"center"}},[a("h3",[t._v("Checkout")])])],1),a("v-row",[a("v-col",{attrs:{cols:"8"}},[a("v-row",[a("v-col",[a("h3",[t._v("Datos del Comprador")])])],1),a("v-row",[a("v-divider")],1),a("v-row",[a("v-col",[a("v-text-field",{attrs:{rules:t.nameRules,label:"Nombre",required:""},model:{value:t.form.nombre,callback:function(e){t.$set(t.form,"nombre",e)},expression:"form.nombre"}})],1)],1),a("v-row"),a("v-form",[a("v-text-field",{attrs:{rules:t.emailRules,label:"Email",required:"",id:"eMail"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),a("v-text-field",{attrs:{rules:t.emailRules,label:"Repetir Email",required:"",id:"eMailRepeat"},on:{blur:function(e){return t.check()}},model:{value:t.form.email1,callback:function(e){t.$set(t.form,"email1",e)},expression:"form.email1"}})],1),a("v-text-field",{attrs:{rules:t.nameRules,label:"Teléfono:",required:""},model:{value:t.form.apPaterno,callback:function(e){t.$set(t.form,"apPaterno",e)},expression:"form.apPaterno"}}),a("h3",[t._v("Datos del Despacho")]),a("v-divider"),a("v-text-field",{attrs:{rules:t.direccionRules,label:"Dirección",required:""},model:{value:t.form.direccion,callback:function(e){t.$set(t.form,"direccion",e)},expression:"form.direccion"}}),a("v-text-field",{attrs:{rules:t.comunaRules,label:"Comuna",required:""},model:{value:t.form.comuna,callback:function(e){t.$set(t.form,"comuna",e)},expression:"form.comuna"}}),a("h3",[t._v("Forma de Pago")]),a("v-divider"),a("v-radio-group",{model:{value:t.radioGroup,callback:function(e){t.radioGroup=e},expression:"radioGroup"}},[a("v-radio",{attrs:{label:"Transferencia Bancaria"}}),a("v-radio",{attrs:{label:"Servipag"}}),a("v-radio",{attrs:{label:"Webpay"}}),a("v-radio",{attrs:{label:"Contraentrega"}})],1),a("v-col",{staticClass:"text-center"},[a("v-btn",{staticClass:"primary",attrs:{disabled:t.activar,to:"/bigmobile.cl/equiposyaccesorios/checkout/confirmacion"}},[t._v(" Confirmar ")])],1)],1),a("v-col",{attrs:{cols:"4"}},[a("v-row",[a("v-col",[a("h3",[t._v("Productos")])])],1),a("v-row",[a("v-divider")],1),a("v-row",t._l(t.equiposAgregados,(function(t,e){return a("v-col",{key:"A"+e,staticClass:"my-2"},[a("CardCompra",{attrs:{nombre:t.nombre,precio:t.precio}})],1)})),1),a("v-row",[a("v-divider",{staticClass:"my-2"})],1),a("v-col",[a("v-row",{staticClass:"my-1"},[a("h3",[t._v("Subtotal Productos: $"+t._s(t.subTotal))])]),a("v-row",{staticClass:"my-1"},[a("h3",[t._v("Descuentos: $"+t._s(t.descuento))])]),a("v-row",{staticClass:"my-1"},[a("h2",[t._v("Total: $"+t._s(t.total))])])],1)],1)],1)],1)},ut=[],mt=a("5530"),pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[a("v-row",[a("v-col",{attrs:{cols:"4"}},[a("v-img",{attrs:{height:"75",contain:"",src:"https://www.inetshop.cl/sitionuevo/wp-content/uploads/2021/08/MOTOROLA-MOTO-G10-POWER-64GB-gray.jpg"}})],1),a("v-col",{attrs:{cols:"8"}},[a("v-row",[a("v-col",[a("h5",{staticClass:"text--primary text-center"},[t._v(" "+t._s(t.nombre)+" ")]),a("h5",{staticClass:"text--primary text-center"},[t._v(" "+t._s(t.precio)+" ")])])],1)],1)],1)],1)},dt=[],vt={data:function(){return{width:200}},name:"CardCompra",props:{nombre:String,precio:String}},ft=vt,bt=Object(u["a"])(ft,pt,dt,!1,null,null,null),gt=bt.exports;p()(bt,{VCard:W["a"],VCol:X["a"],VImg:h["a"],VRow:tt["a"]});var ht=a("2f62"),_t={name:"checkoutView",components:{CardCompra:gt},data:function(){return{radioGroup:1,valid:!1,activar:!0,nameRules:[function(t){return!!t||"Su nombre es requerido"},function(t){return t.length<=10||"El nombre debe contener al menos 10 caracteres"}],direccionRules:[function(t){return!!t||"La dirección es requerida"},function(t){return t.length<=10||"La dirección debe contener al menos 10 caracteres"}],comunaRules:[function(t){return!!t||"Ingrese el nombre de la comuna"},function(t){return t.length<=10||"La comuna debe contener al menos 10 caracteres"}],email:"",emailRules:[function(t){return!!t||"El e-mail es requerido"},function(t){return/.+@.+/.test(t)||"el e-mail debe ser válido"}],resultado:!1,form:{nombre:"",email:"",telefono:"",direccion:"",comuna:""}}},computed:Object(mt["a"])({},Object(ht["c"])(["equiposAgregados","subTotal","total","descuento"])),methods:{check:function(){var t=document.getElementById("eMail"),e=document.getElementById("eMailRepeat");t.value!=e.value?(alert("Los correos deben coincidir"),this.activar=!0):this.activar=!1}}},Ct=_t,wt=a("4bd4"),xt=a("67b6"),yt=a("43a6"),Vt=a("8654"),Ot=Object(u["a"])(Ct,lt,ut,!1,null,"0edcea05",null),Mt=Ot.exports;p()(Ot,{VBtn:f["a"],VCol:X["a"],VContainer:Q["a"],VDivider:b["a"],VForm:wt["a"],VRadio:xt["a"],VRadioGroup:yt["a"],VRow:tt["a"],VTextField:Vt["a"]});var jt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("h1",{staticClass:"text-h2"},[t._v("Hola")])])},At=[],Gt={name:"virtualofficeView",components:{}},qt=Gt,kt=Object(u["a"])(qt,jt,At,!1,null,null,null),Bt=kt.exports;p()(kt,{VApp:B["a"]});var Rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[a("div",{staticClass:"d-flex align-center"},[a("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}}),a("v-img",{staticClass:"shrink mt-1 hidden-sm-and-down",attrs:{alt:"Vuetify Name",contain:"","min-width":"100",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png",width:"100"}})],1),a("v-spacer"),a("v-btn",{attrs:{href:"https://github.com/vuetifyjs/vuetify/releases/latest",target:"_blank",text:""}},[a("span",{staticClass:"mr-2"},[t._v("Latest Release")]),a("v-icon",[t._v("mdi-open-in-new")])],1)],1),a("v-main",[a("router-view")],1)],1)},St=[],Et={name:"App",data:function(){return{}}},Tt=Et,Pt=Object(u["a"])(Tt,Rt,St,!1,null,null,null),Dt=Pt.exports;p()(Pt,{VApp:B["a"],VAppBar:d["a"],VBtn:f["a"],VIcon:g["a"],VImg:h["a"],VMain:R["a"],VSpacer:M["a"]});var It=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("p",[t._v("Sitio en construcción")])])},$t=[],Lt={name:"prepagoView"},Nt=Lt,Ht=Object(u["a"])(Nt,It,$t,!1,null,null,null),Ft=Ht.exports;p()(Ht,{VApp:B["a"]});var Wt,zt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-row",[a("v-col",{staticClass:"my-4 text-center"},[a("h3",[t._v("Equipos & Accesorios")])])],1),a("v-container",{staticClass:"grey lighten-1"},[a("v-row",[a("v-col",{attrs:{md:"8",xl:"12"}},[a("v-row",[a("h2",[t._v("Bolsa de Compras BIG MOBILE")])]),a("v-row",[a("v-divider",{staticClass:"my-2"})],1),a("v-row",t._l(t.equiposAgregados,(function(t,e){return a("v-col",{key:e,staticClass:"my-2"},[a("CardCompra",{attrs:{nombre:t.nombre,precio:t.precio}})],1)})),1),a("v-row",[a("v-divider",{staticClass:"my-2"})],1),a("v-row",[a("h2",[t._v("Subtotal Productos: $"+t._s(t.subTotal))])]),a("v-row",[a("h3",[t._v("Descuentos: "),a("b",[t._v("$"+t._s(t.descuento))])])]),a("v-row",[a("h3",[t._v("Total: $"+t._s(t.total))])]),a("v-row",[a("v-btn",{staticClass:"primary m-3",attrs:{to:"/bigmobile.cl/equiposyaccesorios/checkout"}},[t._v(" Pagar ")])],1)],1),a("v-col",{staticClass:"cards",attrs:{cols:"10",md:"8",sm:"12"}},[a("v-row",t._l(t.data.productos,(function(t,e){return a("v-col",{key:"A"+e,attrs:{cols:"3"}},[a("Card",{attrs:{id:""+t.id,subtitulo:""+t.nombre,caracteristicas:""+t.caracteristicas,precioAnt:""+t.precio_normal,precio:""+t.precio_promo}})],1)})),1)],1)],1),a("v-row",[a("v-col",[a("v-pagination",{attrs:{length:3},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)],1)],1)],1)},Jt=[],Yt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"mx-auto"},[a("v-img",{staticClass:"grey darken-3",attrs:{height:"100",width:"45 px","border-radius":"15 px",contain:"",src:"https://depor.com/resizer/wxsfbFb8TFOb0WEf4BcrSaZ5I1M=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/KWPHGOXCA5EIFDUFDS6TUVE6LI.jpg"}}),a("v-card-text",[a("v-row",{staticClass:"text-h4 text--primary"},[a("v-col",{staticClass:"text-center"},[t._v(" "+t._s(t.id)+" ")])],1),a("v-row",{staticClass:"text-h6 text--primary"},[a("v-col",{staticClass:"text-center"},[t._v(" "+t._s(t.subtitulo)+" ")])],1),a("v-row",{staticClass:"text--primary"},[a("v-col",[t._v(" "+t._s(t.caracteristicas)+" ")])],1),a("v-row",{staticClass:"text--primary"},[a("v-col",[t._v(" Antes: "+t._s(t.precioAnt)+" ")])],1),a("v-row",{staticClass:"text--primary"},[a("v-col",[t._v(" Ahora: "+t._s(t.precio)+" ")])],1),a("v-col",{staticClass:"text-center"},[a("v-btn",{staticClass:"primary align-self-center text-center",attrs:{small:""},on:{click:function(e){t.agregarEquipos(),t.funcionSubTotal()}}},[t._v(" Agregar ")])],1)],1)],1)},Zt=[],Ut=(Wt={name:"equiposView",data:function(){return{}}},Object(N["a"])(Wt,"name","CardEquipos"),Object(N["a"])(Wt,"props",{id:String,subtitulo:String,caracteristicas:String,precioAnt:String,precio:String,array1:[]}),Object(N["a"])(Wt,"computed",Object(mt["a"])({},Object(ht["c"])(["equiposAgregados"]))),Object(N["a"])(Wt,"methods",Object(mt["a"])(Object(mt["a"])({},Object(ht["b"])(["agregarEquiposAction","funcionSubTotalAction"])),{},{agregarEquipos:function(){var t={nombre:this.subtitulo,precio:this.precio};this.agregarEquiposAction(t)},funcionSubTotal:function(){var t={cantidad:parseInt(this.precio)};this.funcionSubTotalAction(t)}})),Wt),Kt=Ut,Xt=Object(u["a"])(Kt,Yt,Zt,!1,null,null,null),Qt=Xt.exports;p()(Xt,{VBtn:f["a"],VCard:W["a"],VCardText:z["c"],VCol:X["a"],VImg:h["a"],VRow:tt["a"]});var te={name:"equiposyaccesoriosView",components:{Card:Qt,CardCompra:gt},data:function(){return{data:{productos:[{id:"2334",nombre:"Motorola G10",caracteristicas:["Camara 10 MPx","4 GB RAM","32 GB ROM","3G/4G","Chip Dual"],precio_normal:199e3,precio_promo:99e3,imagen:"prod_2334.jpg"},{id:"2335",nombre:"Motorola G20",caracteristicas:["Camara 10 MPx","4 GB RAM","32 GB ROM","3G/4G","Chip Dual"],precio_normal:149e3,precio_promo:79e3,imagen:"prod_2335.jpg"},{id:"2336",nombre:"Motorola G30",caracteristicas:["Camara 10 MPx","4 GB RAM","32 GB ROM","3G/4G","Chip Dual"],precio_normal:169e3,precio_promo:89e3,imagen:"prod_2336.jpg"},{id:"2337",nombre:"Samsung A10",caracteristicas:["Camara 10 MPx","4 GB RAM","32 GB ROM","3G/4G","Chip Dual"],precio_normal:129e3,precio_promo:59e3,imagen:"prod_2337.jpg"},{id:"2338",nombre:"Samsung A20",caracteristicas:["Camara 10 MPx","4 GB RAM","32 GB ROM","3G/4G","Chip Dual"],precio_normal:119e3,precio_promo:59e3,imagen:"prod_2338.jpg"},{id:"2339",nombre:"Samsung A30",caracteristicas:["Camara 10 MPx","4 GB RAM","32 GB ROM","3G/4G","Chip Dual"],precio_normal:189e3,precio_promo:89e3,imagen:"prod_2339.jpg"},{id:"2340",nombre:"Huawei Y6",caracteristicas:["Camara 10 MPx","4 GB RAM","32 GB ROM","3G/4G","Chip Dual"],precio_normal:139e3,precio_promo:79e3,imagen:"prod_2340.jpg"},{id:"2341",nombre:"Huawei Y7",caracteristicas:["Camara 10 MPx","4 GB RAM","32 GB ROM","3G/4G","Chip Dual"],precio_normal:149e3,precio_promo:69e3,imagen:"prod_2341.jpg"}],pagedResult:{page:1,size:10,total:12}},productos:[],precio:0,sum:0,page:1}},computed:Object(mt["a"])({},Object(ht["c"])(["equiposAgregados","subTotal","total","descuento"])),methods:{},created:function(){}},ee=te,ae=(a("d622"),a("891e")),re=Object(u["a"])(ee,zt,Jt,!1,null,"84966dae",null),oe=re.exports;p()(re,{VBtn:f["a"],VCol:X["a"],VContainer:Q["a"],VDivider:b["a"],VPagination:ae["a"],VRow:tt["a"]});var ie=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},ne=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("Error 404, esta ruta no existe!!!")])])}],se={name:"errorView"},ce=se,le=Object(u["a"])(ce,ie,ne,!1,null,null,null),ue=le.exports;r["a"].use(P["a"]);var me=[{path:"/",name:"Home",component:at},{path:"/bigmobile.cl/equiposyaccesorios",name:"EquiposAccesorios",component:oe},{path:"/bigmobile.cl/planes",name:"Planes",component:Dt},{path:"/bigmobile.cl/prepago",name:"Prepago",component:Ft},{path:"/bigmobile.cl/oficinavirtual",name:"OficinaVirtual",component:Bt},{path:"/bigmobile.cl/equiposyaccesorios/checkout",name:"Checkout",component:Mt},{path:"/bigmobile.cl/equiposyaccesorios/checkout/confirmacion",name:"Confirmacion",component:ct},{path:"/bigmobile.cl/*",name:"Error404",component:ue}],pe=new P["a"]({routes:me}),de=pe;r["a"].use(ht["a"]);var ve=new ht["a"].Store({state:{equiposAgregados:[],subTotal:0,total:0,descuento:0},mutations:{agregaraEquipos:function(t,e){console.log(e),t.equiposAgregados.push({nombre:e.nombre,precio:e.precio})},subTotalMutation:function(t,e){if(t.subTotal+=e.cantidad,t.subTotal<1e5){var a=.05*t.subTotal;t.descuento=parseInt(a),t.total=t.subTotal-t.descuento}else{var r=.07*t.subTotal;t.descuento=parseInt(r),t.total=t.subTotal-t.descuento}}},actions:{agregarEquiposAction:function(t,e){t.commit("agregaraEquipos",e)},funcionSubTotalAction:function(t,e){t.commit("subTotalMutation",e)}},modules:{}}),fe=a("f309");r["a"].use(fe["a"]);var be=new fe["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:de,store:ve,vuetify:be,render:function(t){return t(E)}}).$mount("#app")},"5dfc":function(t,e,a){"use strict";a("1a12")},6070:function(t){t.exports=JSON.parse('{"planes":[{"titulo":"Paga lo que hablas","texto":"En BigMobile, sólo pagas lo que hablas. Nada de perder minutos ni cobros de más"},{"titulo":"Cambiate cuando quiera","texto":"En BigMobile, no te amarramos. Puedes cambiarte de plan cuando quieras"},{"titulo":"Minutos adicionales","texto":"Si quedaste corto de minutos este mes, puedes agregar minutos adicionales al mismo precio que tu plan"}],"opiniones":[{"img":"https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","nombre":"José Pedreros","texto":"Son bacanes! Esta compañía te apaña caleta."},{"img":"https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tYnJlfGVufDB8fDB8fA%3D%3D&w=1000&q=80","nombre":"Miguel Cáceres","texto":"Acá sí te contestan el teléfono cuando los llamas"},{"img":"https://images.unsplash.com/photo-1616002411355-49593fd89721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZvdG8lMjBkZSUyMGNoaWNhc3xlbnwwfHwwfHw%3D&w=1000&q=80","nombre":"Soledad Gómez","texto":"Lo mejor es la señal"}]}')},7727:function(t,e,a){},"7bf6":function(t,e,a){},"85ec":function(t,e,a){},d622:function(t,e,a){"use strict";a("7727")}});
//# sourceMappingURL=app.807aeef5.js.map