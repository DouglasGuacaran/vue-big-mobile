import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    equiposAgregados: [],
    subTotal: 0,
    total: 0,
    descuento: 0
  },
  mutations: {
    agregarEquipos(state, post) {
      console.log(post);
      state.equiposAgregados.push({
        id: post.id,
        nombre: post.nombre,
        precio: post.precio,
        img: post.img
      })
    },
    subTotalMutation(state, post) {
      state.subTotal += post.cantidad
      if (state.subTotal < 100000) {
        let descuentofinal = 0.05 * state.subTotal
        state.descuento = parseInt(descuentofinal)
        state.total = state.subTotal - state.descuento
      } else {
        let descuentofinal = 0.07 * state.subTotal
        state.descuento = parseInt(descuentofinal)
        state.total = state.subTotal - state.descuento
      }

    },
    eliminarEquipo(state, equipo) {
      console.log(equipo);
      const index = state.equiposAgregados.findIndex((e) => e.nombre === equipo.nombre);
      if (index !== -1) {
        state.subTotal -= state.equiposAgregados[index].precio;
        state.equiposAgregados.splice(index, 1);
        state.descuento = state.subTotal < 100000 ? parseInt(0.05 * state.subTotal) : parseInt(0.07 * state.subTotal);
        state.total = state.subTotal - state.descuento;
      }
    },
  },
  actions: {
    agregarEquiposAction(context, post) {
      context.commit("agregarEquipos", post)
    },
    funcionSubTotalAction(context, post) {
      context.commit("subTotalMutation", post)
    },
    eliminarEquipo(context, equipo) {
      context.commit('eliminarEquipo', equipo);
    },
  },
  modules: {},
});