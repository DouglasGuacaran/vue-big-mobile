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
      const existingItem = state.equiposAgregados.find(item => item.nombre === post.nombre);
      if (!existingItem) {
        state.equiposAgregados.push({
          id: post.id,
          nombre: post.nombre,
          precio: post.precio,
          img: post.img,
          cantidad: 1
        });
      }else {
        existingItem.cantidad += 1; // Incrementar la cantidad si ya existe el elemento
      }
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
      const index = state.equiposAgregados.findIndex((e) => e.id === equipo.id);
      if (index !== -1) {
        const equipoEliminado = state.equiposAgregados[index];
        state.subTotal -= equipoEliminado.precio * equipoEliminado.cantidad; // Restar el precio del equipo eliminado del subtotal
        state.equiposAgregados.splice(index, 1);

        if (state.subTotal < 100000) {
          state.descuento = parseInt(0.05 * state.subTotal);
        } else {
          state.descuento = parseInt(0.07 * state.subTotal);
        }

        state.total = state.subTotal - state.descuento;
      }}
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