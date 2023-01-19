<template>
  <v-container>

    <v-row>
      <v-col class="mx-auto" v-for="(item, index) in dataOpiniones" :key="index" >
        <Card :imgSrc="item.img" :subtitulo="item.nombre" :parrafo="item.texto"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Card from '../components/Card.vue'
export default {
  name: "homeView",
  components: {
    Card 
  },
  data () {
    return {
      dataOpiniones:[],
      dataplanes:[]
    }
  },
  created(){
    fetch("/home.json")
        .then(response => response.json())
        .then((data) => {
          this.dataPlanes=data.planes;
          this.dataOpiniones=data.opiniones;
      });
  }



}
</script>

<style>


</style>
