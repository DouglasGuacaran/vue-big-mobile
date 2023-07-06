<template>
  <v-card width="160" class="text-center pt-2">
    <v-btn elevation="2" color="error" depressed right class="btn-cls p-0" @click="deleteCard()" style="position: absolute; top: 0; right: 0;">X</v-btn>
    <v-img width="100" max-height="100" contain :src="`${imgSrc}`" class="img">
    </v-img>

    <v-card-text cols="8">
      <h5 class="text--primary text-center">
        {{ nombre }}
      </h5>
      <h5 class="text--primary text-center">{{ precio }} $ Chilenos</h5>
      <h6>cantidad: {{ cantidad }}</h6>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data: () => ({
    width: 200,
  }),
  name: "CardCompra",
  props: {
    imgSrc: String,
    nombre: String,
    precio: String,
    cantidad: Number,
  },
  methods:{
    ...mapActions(['eliminarEquipo']),
    deleteCard(){
      const obj = {id:this.id,nombre:this.nombre,precio:this.precio,img:this.imgSrc,cantidad:this.cantidad }
      this.eliminarEquipo(obj);
    },
  }
};
</script>

<style>
.btn-cls{
  margin: 10px;
  height: 25px !important;
  min-width: 0px !important;
  width:25px !important;
  padding: 0px !important;
  color: #000!important;
}</style>
