<template>
  <v-container>
    <div>
      <h3 class="text-h5 text-sm-h4 text-center">
        Bienvenido a Big Mobile
      </h3>
    </div>
    <v-row class="">
      <v-col class="ma-2 text-center" v-for="(item, index) in Data.opiniones" :key="index" >
        <Card centered :imgSrc="item.img" :subtitulo="item.nombre" :parrafo="item.texto"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Card from '../components/Card.vue'
import Data from '../data/home.json'
export default {
  name: "homeView",
  components: {
    Card,
  },
  data () {
    return {
      Data
    }
  },

}
</script>

<style>


</style>
