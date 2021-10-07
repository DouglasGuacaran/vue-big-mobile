<template>
  <div>
    <v-row>
      <v-col class="my-4 text-center">
        <h3>Equipos & Accesorios</h3>
      </v-col>
    </v-row>
    <v-container>
      <v-row>
      <v-col cols="2" md="4" sm="12" class="m-3">
        <v-row>
          <h2>Bolsa de Compras BIG MOBILE</h2>
        </v-row>
        <v-row>
          <v-divider class="my-2"></v-divider>
        </v-row>
        <v-row>
        <v-col class="my-2" v-for="(equipo, index) in equiposAgregados" :key="index">
          <CardCompra 
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
      <v-col cols="10" md="8" sm="12" class="cards">
        <v-row>
        <v-col v-for="(item, index) in productos" :key="'A'+index" cols="3">
          <Card
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
export default {
  name: "EquiposyAccesorios",
  components: {
    Card,
    CardCompra
  },
  data() {
    return {
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

  created() {
    fetch("/equipos.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        this.productos = data.productos;
        
      });
  },
};
</script>

<style scoped>
.cards{
  flex-wrap: wrap;
}
</style>
