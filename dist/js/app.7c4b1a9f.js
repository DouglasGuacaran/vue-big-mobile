(function(t){function e(e){for(var r,n,s=e[0],c=e[1],l=e[2],p=0,m=[];p<s.length;p++)n=s[p],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&m.push(o[n][0]),o[n]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(m.length)m.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,s=1;s<a.length;s++){var c=a[s];0!==o[c]&&(r=!1)}r&&(i.splice(e--,1),t=n(n.s=a[0]))}return t}var r={},o={app:0},i=[];function n(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=r,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(a,r,function(e){return t[e]}.bind(null,r));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/vue-big-mobile/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0b73":function(t,e,a){"use strict";a("bb7a")},"4f7f":function(t,e,a){"use strict";a("7bf6")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-app-bar",{attrs:{app:"",color:"dark",dark:""}},[r("div",{staticClass:"d-flex align-center"},[r("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:a("8177"),transition:"scale-transition",width:"40"}}),r("v-toolbar-title",[r("router-link",{staticClass:"m-2 white--text",attrs:{to:"/"}},[t._v("Home")]),r("v-icon",[t._v("mdi-home")])],1),r("v-app-bar",{attrs:{color:"dark"}},[r("router-link",{staticClass:"white--text",attrs:{to:"/bigmobile.cl/equiposyaccesorios"}},[t._v("Equipos y Accesorios")])],1),r("v-app-bar",{attrs:{color:"dark"}},[r("router-link",{staticClass:"white--text",attrs:{to:"/bigmobile.cl/planes"}},[t._v("Planes")])],1),r("v-app-bar",{attrs:{color:"dark"}},[r("router-link",{staticClass:"white--text",attrs:{to:"/bigmobile.cl/prepago"}},[t._v("Prepago")])],1),r("v-app-bar",{attrs:{color:"dark"}},[r("router-link",{staticClass:"white--text",attrs:{to:"/bigmobile.cl/oficinavirtual"}},[t._v("Oficina Virtual")])],1)],1),r("v-spacer")],1),r("v-main",[r("router-view")],1)],1)},i=[],n={name:"App",data:function(){return{}}},s=n,c=a("2877"),l=a("6544"),u=a.n(l),p=a("7496"),m=a("40dc"),d=a("132d"),v=a("adda"),b=a("f6c4"),f=a("2fa4"),g=a("2a7f"),h=Object(c["a"])(s,o,i,!1,null,null,null),x=h.exports;u()(h,{VApp:p["a"],VAppBar:m["a"],VIcon:d["a"],VImg:v["a"],VMain:b["a"],VSpacer:f["a"],VToolbarTitle:g["a"]});var C=a("8c4f"),w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-container",{attrs:{id:"Jumbo"}},[a("v-layout",{attrs:{"align-center":""}},[a("v-flex",{attrs:{"text-xs-center":""}},[a("h1",{staticClass:"display-3 jumbo1"})])],1)],1),a("v-container",[a("v-row",[a("v-col",{attrs:{lg:"12",align:"center"}},[a("h2",[t._v("Planes Flexibles")])])],1),a("v-row",t._l(t.data.planes,(function(t,e){return a("v-col",{key:e,attrs:{lg:"4"}},[a("Card",{attrs:{subtitulo:""+t.titulo,parrafo:""+t.texto}})],1)})),1),a("v-row",[a("v-col",{attrs:{align:"center"}},[a("h2",[t._v("Qué dicen de nosotros")])])],1),a("v-row",t._l(t.data.opiniones,(function(t,e){return a("v-col",{key:"A"+e,attrs:{lg:"4"}},[a("Card2",{attrs:{subtitulo:""+t.nombre,parrafo:""+t.texto}})],1)})),1)],1)],1)},A=[],R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"344"}},[a("v-img",{attrs:{height:"110",contain:"",src:"https://cdn.vuetifyjs.com/images/parallax/material.jpg"}}),a("v-card-text",[a("div",{staticClass:"text-h6 text--primary text-center"},[t._v(" "+t._s(t.subtitulo)+" ")]),a("div",{staticClass:"text--primary text-center"},[t._v(" "+t._s(t.parrafo)+" ")])])],1)},y=[],S={data:function(){return{width:200}},name:"Card",props:{subtitulo:String,parrafo:String}},M=S,G=a("b0af"),_=a("99d9"),j=Object(c["a"])(M,R,y,!1,null,null,null),V=j.exports;u()(j,{VCard:G["a"],VCardText:_["a"],VImg:v["a"]});var q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"344"}},[a("v-img",{attrs:{height:"100",contain:"",width:"10 px",src:"data:image/png;base64,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"}}),a("v-card-text",[a("div",{staticClass:"text-h6 text--primary text-center"},[t._v(' "'+t._s(t.parrafo)+'" ')]),a("p",{staticClass:"text--primary text-end"},[t._v(" "+t._s(t.subtitulo)+" ")])])],1)},E=[],O={data:function(){return{width:200}},name:"Card2",props:{subtitulo:String,parrafo:String}},k=O,B=Object(c["a"])(k,q,E,!1,null,null,null),I=B.exports;u()(B,{VCard:G["a"],VCardText:_["a"],VImg:v["a"]});var T={name:"Home",components:{Card:V,Card2:I},data:function(){return{data:{planes:[{titulo:"Paga lo que hablas",texto:"En BigMobile, sólo pagas lo que hablas. Nada de perder minutos ni cobros de más"},{titulo:"Cambiate cuando quiera",texto:"En BigMobile, no te amarramos. Puedes cambiarte de plan cuando quieras"},{titulo:"Minutos adicionales",texto:"Si quedaste corto de minutos este mes, puedes agregar minutos adicionales al mismo precio que tu plan"}],opiniones:[{nombre:"José Pedreros",texto:"Son bacanes! Esta compañía te apaña caleta."},{nombre:"Miguel Cáceres",texto:"Acá sí te contestan el teléfono cuando los llamas"},{nombre:"Soledad Gómez",texto:"Lo mejor es la señal"}]},gradient:"to top, #7B1FA2, #E1BEE7"}},methods:{},created:function(){}},U=T,K=(a("cccb"),a("62ad")),N=a("a523"),D=a("0e8f"),F=a("a722"),P=a("0fd9"),J=Object(c["a"])(U,w,A,!1,null,null,null),L=J.exports;u()(J,{VCol:K["a"],VContainer:N["a"],VFlex:D["a"],VLayout:F["a"],VRow:P["a"]});var Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",[a("v-col",{staticClass:"mx-auto titulo text-center",attrs:{cols:"6"}},[a("h1",[t._v("Confirmación")])])],1),a("v-row",[a("v-col",{staticClass:"mx-auto parrafo ",attrs:{cols:"6"}},[a("v-card",{staticClass:"pa-2 text-center",attrs:{justify:"center"}},[a("p",[t._v(" La Orden "),a("b",{staticClass:"font-weight-bold"},[t._v("N° "+t._s(t.data.orderNumber)+" ")]),t._v("ha sido "),a("b",{staticClass:"font-weight-bold"},[t._v(t._s(t.data.status)+" ")]),t._v(" y ya la estamos preparando! ")])])],1)],1),a("v-row",[a("v-col",{staticClass:"mx-auto my-2 text-center",attrs:{cols:"4"}},[a("v-btn",{staticClass:"primary text-center",attrs:{to:"/"}},[t._v(" Ir al Home ")])],1)],1)],1)},H=[],z={name:"confirmacion",data:function(){return{data:{orderNumber:4452239,status:"CONFIRMADO"}}},created:function(){}},Q=z,X=(a("4f7f"),a("8336")),Z=Object(c["a"])(Q,Y,H,!1,null,null,null),W=Z.exports;u()(Z,{VBtn:X["a"],VCard:G["a"],VCol:K["a"],VContainer:N["a"],VRow:P["a"]});var $=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"m-1"},[a("v-row",[a("v-col",{staticClass:"my-4",attrs:{align:"center"}},[a("h3",[t._v("Checkout")])])],1),a("v-row",[a("v-col",{attrs:{cols:"8"}},[a("v-row",[a("v-col",[a("h3",[t._v("Datos del Comprador")])])],1),a("v-row",[a("v-divider")],1),a("v-row",[a("v-col",[a("v-text-field",{attrs:{rules:t.nameRules,label:"Nombre",required:""},model:{value:t.form.nombre,callback:function(e){t.$set(t.form,"nombre",e)},expression:"form.nombre"}})],1)],1),a("v-row"),a("v-form",[a("v-text-field",{attrs:{rules:t.emailRules,label:"Email",required:"",id:"eMail"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),a("v-text-field",{attrs:{rules:t.emailRules,label:"Repetir Email",required:"",id:"eMailRepeat"},on:{blur:function(e){return t.check()}},model:{value:t.form.email1,callback:function(e){t.$set(t.form,"email1",e)},expression:"form.email1"}})],1),a("v-text-field",{attrs:{rules:t.nameRules,label:"Teléfono:",required:""},model:{value:t.form.apPaterno,callback:function(e){t.$set(t.form,"apPaterno",e)},expression:"form.apPaterno"}}),a("h3",[t._v("Datos del Despacho")]),a("v-divider"),a("v-text-field",{attrs:{rules:t.direccionRules,label:"Dirección",required:""},model:{value:t.form.direccion,callback:function(e){t.$set(t.form,"direccion",e)},expression:"form.direccion"}}),a("v-text-field",{attrs:{rules:t.comunaRules,label:"Comuna",required:""},model:{value:t.form.comuna,callback:function(e){t.$set(t.form,"comuna",e)},expression:"form.comuna"}}),a("h3",[t._v("Forma de Pago")]),a("v-divider"),a("v-radio-group",{model:{value:t.radioGroup,callback:function(e){t.radioGroup=e},expression:"radioGroup"}},[a("v-radio",{attrs:{label:"Transferencia Bancaria"}}),a("v-radio",{attrs:{label:"Servipag"}}),a("v-radio",{attrs:{label:"Webpay"}}),a("v-radio",{attrs:{label:"Contraentrega"}})],1),a("v-col",{staticClass:"text-center"},[a("v-btn",{staticClass:"primary",attrs:{disabled:t.activar,to:"/bigmobile.cl/equiposyaccesorios/checkout/confirmacion"}},[t._v(" Confirmar ")])],1)],1),a("v-col",{attrs:{cols:"4"}},[a("v-row",[a("v-col",[a("h3",[t._v("Productos")])])],1),a("v-row",[a("v-divider")],1),a("v-row",t._l(t.equiposAgregados,(function(t,e){return a("v-col",{key:"A"+e,staticClass:"my-2"},[a("CardCompra",{attrs:{nombre:t.nombre,precio:t.precio}})],1)})),1),a("v-row",[a("v-divider",{staticClass:"my-2"})],1),a("v-col",[a("v-row",{staticClass:"my-1"},[a("h3",[t._v("Subtotal Productos: $"+t._s(t.subTotal))])]),a("v-row",{staticClass:"my-1"},[a("h3",[t._v("Descuentos: $"+t._s(t.descuento))])]),a("v-row",{staticClass:"my-1"},[a("h2",[t._v("Total: $"+t._s(t.total))])])],1)],1)],1)],1)},tt=[],et=a("5530"),at=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[a("v-row",[a("v-col",{attrs:{cols:"4"}},[a("v-img",{attrs:{height:"75",contain:"",src:"https://www.inetshop.cl/sitionuevo/wp-content/uploads/2021/08/MOTOROLA-MOTO-G10-POWER-64GB-gray.jpg"}})],1),a("v-col",{attrs:{cols:"8"}},[a("v-row",[a("v-col",[a("h5",{staticClass:"text--primary text-center"},[t._v(" "+t._s(t.nombre)+" ")]),a("h5",{staticClass:"text--primary text-center"},[t._v(" "+t._s(t.precio)+" ")])])],1)],1)],1)],1)},rt=[],ot={data:function(){return{width:200}},name:"CardCompra",props:{nombre:String,precio:String}},it=ot,nt=Object(c["a"])(it,at,rt,!1,null,null,null),st=nt.exports;u()(nt,{VCard:G["a"],VCol:K["a"],VImg:v["a"],VRow:P["a"]});var ct=a("2f62"),lt={name:"Checkout",components:{CardCompra:st},data:function(){return{radioGroup:1,valid:!1,activar:!0,nameRules:[function(t){return!!t||"Su nombre es requerido"},function(t){return t.length<=10||"El nombre debe contener al menos 10 caracteres"}],direccionRules:[function(t){return!!t||"La dirección es requerida"},function(t){return t.length<=10||"La dirección debe contener al menos 10 caracteres"}],comunaRules:[function(t){return!!t||"Ingrese el nombre de la comuna"},function(t){return t.length<=10||"La comuna debe contener al menos 10 caracteres"}],email:"",emailRules:[function(t){return!!t||"El e-mail es requerido"},function(t){return/.+@.+/.test(t)||"el e-mail debe ser válido"}],resultado:!1,form:{nombre:"",email:"",telefono:"",direccion:"",comuna:""}}},computed:Object(et["a"])({},Object(ct["c"])(["equiposAgregados","subTotal","total","descuento"])),methods:{check:function(){var t=document.getElementById("eMail"),e=document.getElementById("eMailRepeat");t.value!=e.value?(alert("Los correos deben coincidir"),this.activar=!0):this.activar=!1}}},ut=lt,pt=a("ce7e"),mt=a("4bd4"),dt=a("67b6"),vt=a("43a6"),bt=a("8654"),ft=Object(c["a"])(ut,$,tt,!1,null,"1061376c",null),gt=ft.exports;u()(ft,{VBtn:X["a"],VCol:K["a"],VContainer:N["a"],VDivider:pt["a"],VForm:mt["a"],VRadio:dt["a"],VRadioGroup:vt["a"],VRow:P["a"],VTextField:bt["a"]});var ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("p",[t._v("Sitio en construcción")])])},xt=[],Ct={},wt=Ct,At=Object(c["a"])(wt,ht,xt,!1,null,null,null),Rt=At.exports;u()(At,{VApp:p["a"]});var yt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("p",[t._v("Sitio en construcción")])])},St=[],Mt={},Gt=Mt,_t=Object(c["a"])(Gt,yt,St,!1,null,null,null),jt=_t.exports;u()(_t,{VApp:p["a"]});var Vt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("p",[t._v("Sitio en construcción")])])},qt=[],Et={},Ot=Et,kt=Object(c["a"])(Ot,Vt,qt,!1,null,null,null),Bt=kt.exports;u()(kt,{VApp:p["a"]});var It=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-row",[a("v-col",{staticClass:"my-4 text-center"},[a("h3",[t._v("Equipos & Accesorios")])])],1),a("v-container",[a("v-row",[a("v-col",{staticClass:"m-3",attrs:{cols:"2",md:"4",sm:"12"}},[a("v-row",[a("h2",[t._v("Bolsa de Compras BIG MOBILE")])]),a("v-row",[a("v-divider",{staticClass:"my-2"})],1),a("v-row",t._l(t.equiposAgregados,(function(t,e){return a("v-col",{key:e,staticClass:"my-2"},[a("CardCompra",{attrs:{nombre:t.nombre,precio:t.precio}})],1)})),1),a("v-row",[a("v-divider",{staticClass:"my-2"})],1),a("v-row",[a("h2",[t._v("Subtotal Productos: $"+t._s(t.subTotal))])]),a("v-row",[a("h3",[t._v("Descuentos: "),a("b",[t._v("$"+t._s(t.descuento))])])]),a("v-row",[a("h3",[t._v("Total: $"+t._s(t.total))])]),a("v-row",[a("v-btn",{staticClass:"primary m-3",attrs:{to:"/bigmobile.cl/equiposyaccesorios/checkout"}},[t._v(" Pagar ")])],1)],1),a("v-col",{staticClass:"cards",attrs:{cols:"10",md:"8",sm:"12"}},[a("v-row",t._l(t.data.productos,(function(t,e){return a("v-col",{key:"A"+e,attrs:{cols:"3"}},[a("Card",{attrs:{id:""+t.id,subtitulo:""+t.nombre,caracteristicas:""+t.caracteristicas,precioAnt:""+t.precio_normal,precio:""+t.precio_promo}})],1)})),1)],1)],1),a("v-row",[a("v-col",[a("v-pagination",{attrs:{length:3},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)],1)],1)],1)},Tt=[],Ut=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"mx-auto"},[a("v-img",{attrs:{width:t.width,src:"https://www.inetshop.cl/sitionuevo/wp-content/uploads/2021/08/MOTOROLA-MOTO-G10-POWER-64GB-gray.jpg"}}),a("v-card-text",[a("v-row",{staticClass:"text-h4 text--primary"},[a("v-col",{staticClass:"text-center"},[t._v(" "+t._s(t.id)+" ")])],1),a("v-row",{staticClass:"text-h6 text--primary"},[a("v-col",{staticClass:"text-center"},[t._v(" "+t._s(t.subtitulo)+" ")])],1),a("v-row",{staticClass:"text--primary"},[a("v-col",[t._v(" "+t._s(t.caracteristicas)+" ")])],1),a("v-row",{staticClass:"text--primary"},[a("v-col",[t._v(" Antes: "+t._s(t.precioAnt)+" ")])],1),a("v-row",{staticClass:"text--primary"},[a("v-col",[t._v(" Ahora: "+t._s(t.precio)+" ")])],1),a("v-col",{staticClass:"text-center"},[a("v-btn",{staticClass:"primary align-self-center text-center",attrs:{small:""},on:{click:function(e){t.agregarEquipos(),t.funcionSubTotal()}}},[t._v(" Agregar ")])],1)],1)],1)},Kt=[],Nt={data:function(){return{width:200}},name:"CardEquipos",props:{id:String,subtitulo:String,caracteristicas:String,precioAnt:String,precio:String,array1:[]},computed:Object(et["a"])({},Object(ct["c"])(["equiposAgregados"])),methods:Object(et["a"])(Object(et["a"])({},Object(ct["b"])(["agregarEquiposAction","funcionSubTotalAction"])),{},{agregarEquipos:function(){var t={nombre:this.subtitulo,precio:this.precio};this.agregarEquiposAction(t)},funcionSubTotal:function(){var t={cantidad:parseInt(this.precio)};this.funcionSubTotalAction(t)}})},Dt=Nt,Ft=Object(c["a"])(Dt,Ut,Kt,!1,null,null,null),Pt=Ft.exports;u()(Ft,{VBtn:X["a"],VCard:G["a"],VCardText:_["a"],VCol:K["a"],VImg:v["a"],VRow:P["a"]});var Jt={name:"EquiposyAccesorios",components:{Card:Pt,CardCompra:st},data:function(){return{data:{productos:[{id:"2334",nombre:"Motorola G10",caracteristicas:["Camara 10 MPx","4 GB RAM","32 GB ROM","3G/4G","Chip Dual"],precio_normal:199e3,precio_promo:99e3,imagen:"prod_2334.jpg"},{id:"2335",nombre:"Motorola G20",caracteristicas:["Camara 10 MPx","4 GB RAM","32 GB ROM","3G/4G","Chip Dual"],precio_normal:149e3,precio_promo:79e3,imagen:"prod_2335.jpg"},{id:"2336",nombre:"Motorola G30",caracteristicas:["Camara 10 MPx","4 GB RAM","32 GB ROM","3G/4G","Chip Dual"],precio_normal:169e3,precio_promo:89e3,imagen:"prod_2336.jpg"},{id:"2337",nombre:"Samsung A10",caracteristicas:["Camara 10 MPx","4 GB RAM","32 GB ROM","3G/4G","Chip Dual"],precio_normal:129e3,precio_promo:59e3,imagen:"prod_2337.jpg"},{id:"2338",nombre:"Samsung A20",caracteristicas:["Camara 10 MPx","4 GB RAM","32 GB ROM","3G/4G","Chip Dual"],precio_normal:119e3,precio_promo:59e3,imagen:"prod_2338.jpg"},{id:"2339",nombre:"Samsung A30",caracteristicas:["Camara 10 MPx","4 GB RAM","32 GB ROM","3G/4G","Chip Dual"],precio_normal:189e3,precio_promo:89e3,imagen:"prod_2339.jpg"},{id:"2340",nombre:"Huawei Y6",caracteristicas:["Camara 10 MPx","4 GB RAM","32 GB ROM","3G/4G","Chip Dual"],precio_normal:139e3,precio_promo:79e3,imagen:"prod_2340.jpg"},{id:"2341",nombre:"Huawei Y7",caracteristicas:["Camara 10 MPx","4 GB RAM","32 GB ROM","3G/4G","Chip Dual"],precio_normal:149e3,precio_promo:69e3,imagen:"prod_2341.jpg"}],pagedResult:{page:1,size:10,total:12}},productos:[],precio:0,sum:0,page:1}},computed:Object(et["a"])({},Object(ct["c"])(["equiposAgregados","subTotal","total","descuento"])),methods:{},created:function(){}},Lt=Jt,Yt=(a("0b73"),a("891e")),Ht=Object(c["a"])(Lt,It,Tt,!1,null,"37eb43de",null),zt=Ht.exports;u()(Ht,{VBtn:X["a"],VCol:K["a"],VContainer:N["a"],VDivider:pt["a"],VPagination:Yt["a"],VRow:P["a"]});var Qt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Xt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("Error 404, esta ruta no existe!!!")])])}],Zt={},Wt=Object(c["a"])(Zt,Qt,Xt,!1,null,null,null),$t=Wt.exports;r["a"].use(C["a"]);var te=[{path:"/",name:"Home",component:L},{path:"/bigmobile.cl/equiposyaccesorios",name:"EquiposAccesorios",component:zt},{path:"/bigmobile.cl/planes",name:"Planes",component:jt},{path:"/bigmobile.cl/prepago",name:"Prepago",component:Bt},{path:"/bigmobile.cl/oficinavirtual",name:"OficinaVirtual",component:Rt},{path:"/bigmobile.cl/equiposyaccesorios/checkout",name:"Checkout",component:gt},{path:"/bigmobile.cl/equiposyaccesorios/checkout/confirmacion",name:"Confirmacion",component:W},{path:"/bigmobile.cl/*",name:"Error404",component:$t}],ee=new C["a"]({routes:te}),ae=ee;r["a"].use(ct["a"]);var re=new ct["a"].Store({state:{equiposAgregados:[],subTotal:0,total:0,descuento:0},mutations:{agregaraEquipos:function(t,e){console.log(e),t.equiposAgregados.push({nombre:e.nombre,precio:e.precio})},subTotalMutation:function(t,e){if(t.subTotal+=e.cantidad,t.subTotal<1e5){var a=.05*t.subTotal;t.descuento=parseInt(a),t.total=t.subTotal-t.descuento}else{var r=.07*t.subTotal;t.descuento=parseInt(r),t.total=t.subTotal-t.descuento}}},actions:{agregarEquiposAction:function(t,e){t.commit("agregaraEquipos",e)},funcionSubTotalAction:function(t,e){t.commit("subTotalMutation",e)}},modules:{}}),oe=a("f309");r["a"].use(oe["a"]);var ie=new oe["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:ae,store:re,vuetify:ie,render:function(t){return t(x)}}).$mount("#app")},"5ced":function(t,e,a){},"7bf6":function(t,e,a){},8177:function(t,e,a){t.exports=a.p+"img/Logo2.0743a72c.jpg"},bb7a:function(t,e,a){},cccb:function(t,e,a){"use strict";a("5ced")}});
//# sourceMappingURL=app.7c4b1a9f.js.map