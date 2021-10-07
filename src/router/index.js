import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Confirmacion from "../views/Confirmacion.vue";
import Checkout from "../views/Ckeckout.vue";
import OficinaVirtual from "../views/OficinaVirtual.vue";
import Planes from "../views/Planes.vue";
import Prepago from "../views/Prepago.vue";
import EquiposAccesorios from "../views/Equipos&Accesorios.vue";
import Error404 from "../views/Error404.vue";
Vue.use(VueRouter);

const routes = [

  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/bigmobile.cl/equiposyaccesorios",
    name: "EquiposAccesorios",
    component: EquiposAccesorios,
  },
  {
    path: "/bigmobile.cl/planes",
    name: "Planes",
    component: Planes,
  },
  {
    path: "/bigmobile.cl/prepago",
    name: "Prepago",
    component: Prepago,
  },
  {
    path: "/bigmobile.cl/oficinavirtual",
    name: "OficinaVirtual",
    component: OficinaVirtual,
  },
  {
    path: "/bigmobile.cl/equiposyaccesorios/checkout",
    name: "Checkout",
    component: Checkout,
  },
  {
    path: "/bigmobile.cl/equiposyaccesorios/checkout/confirmacion",
    name: "Confirmacion",
    component: Confirmacion,
  },
  {
    path: "/bigmobile.cl/*",
    name: "Error404",
    component: Error404,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
