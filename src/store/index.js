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
    agregaraEquipos(state, post) {
      console.log(post)
      state.equiposAgregados.push({
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

    }
  },
  actions: {
    agregarEquiposAction(context, post) {
      context.commit("agregaraEquipos", post)
    },
    funcionSubTotalAction(context, post) {
      context.commit("subTotalMutation", post)
    }
  },
  modules: {},
});