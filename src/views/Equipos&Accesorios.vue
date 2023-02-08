<template>
  <div>
    <v-row>
      <v-col class="my-4 text-center">
        <h3>Equipos & Accesorios</h3>
      </v-col>
    </v-row>
    <v-container>
      <v-row>
      <v-col>
        <v-row>
          <h2>Bolsa de Compras BIG MOBILE</h2>
        </v-row>
        <v-row>
          <v-divider class="my-2"></v-divider>
        </v-row>
        <v-row>
        <v-col class="my-auto" v-for="(equipo, index) in equiposAgregados" :key="index">
          <CardCompra 
          :imgSrc="equipo.img"
          :nombre="equipo.nombre"
          :precio="equipo.precio"
          />
        </v-col>
        </v-row>
        <v-row>
          <v-divider class="my-2"></v-divider></v-row>
        <v-row>
          <h2>Subtotal Productos: ${{subTotal}}</h2>
        </v-row>
        <v-row>
          <h3>Descuentos: <b>${{descuento}}</b> </h3>
        </v-row>
        <v-row>
          <h3>Total: ${{total}}</h3>
        </v-row>
        <v-row>
          <v-btn class="primary m-3"  to="/bigmobile.cl/equiposyaccesorios/checkout"> Pagar </v-btn>
        </v-row>
      </v-col>
      <v-col cols="12" md="8" sm="12" >
        <v-row>
        <v-col v-for="(item, index) in Data.productos" :key="'A'+index" cols="12" sm="4" md="4">
          <Card
            :imgSrc="require(`../assets/img/${item.img}`)"
            
            :id="`${item.id}`"
            :subtitulo="`${item.nombre}`"
            :caracteristicas="`${item.caracteristicas}`"
            :precioAnt="`${item.precio_normal}`"
            :precio="`${item.precio_promo}`"
          />
        </v-col>
        </v-row>      
      </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-pagination
          v-model="page"
          :length="3">
          </v-pagination>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Card from "../components/CardsEquipos.vue";
import {mapState} from "vuex";
import CardCompra from '../components/CardCompra.vue';
import Data from '../data/equipos.json'
export default {
  name: "equiposyaccesoriosView",
  components: {
    Card,
    CardCompra,
  },
  data() {
    return {
      Data,
      data:{
  "pagedResult": {
    "page": 1,
    "size": 10,
    "total": 12
  }} ,
      productos: [],
      precio:0,
      sum:0,
      page:1  
    };
  },
  computed:{
    ...mapState(["equiposAgregados","subTotal","total","descuento"]),
  },
  methods:{
    
  },

};
</script>

<style scoped>
.cards{
  flex-wrap: wrap;
}
</style>
