<template>
  <v-container>

    <v-row>
      <v-col class="mx-auto" v-for="(item, index) in Data.opiniones" :key="index" >
        <Card :imgSrc="item.img" :subtitulo="item.nombre" :parrafo="item.texto"/>
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
