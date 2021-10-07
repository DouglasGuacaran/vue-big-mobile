<template>
  <div>
      <v-container id="Jumbo">
        <v-layout align-center>
          <v-flex text-xs-center>
            <h1 class="display-3 jumbo1"></h1>
          </v-flex>
        </v-layout>
      </v-container>
    <v-container>
      <v-row>
        <v-col lg="12" align="center">
          <h2>Planes Flexibles</h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col v-for="(planes, index) in dataPlanes" :key="index" lg="4">
          <Card :subtitulo="`${planes.titulo}`" :parrafo="`${planes.texto}`" />
        </v-col>
      </v-row>
          <v-row>
            <v-col align="center">
              <h2>Qué dicen de nosotros</h2> 
            </v-col>
            
          </v-row>
          <v-row>
            <v-col v-for="(item, index) in dataOpiniones" :key="'A'+index" lg="4">
              <Card2 :subtitulo="`${item.nombre}`" :parrafo="`${item.texto}`" />
            </v-col>
          </v-row>

    </v-container>
  </div>
</template>

<script>
import Card from "../components/Card.vue";
import Card2 from "../components/Card2.vue";
export default {
  name: "Home",

  components: {
    Card,
    Card2
  },
  data() {
    return {
      gradient: 'to top, #7B1FA2, #E1BEE7',
      dataPlanes :[],
      dataOpiniones:[],
    };
  },
  methods:{

  },
  created(){
    fetch("/home.json")
            .then(response => response.json())
            .then((data) => {
              this.dataPlanes=data.planes;
              this.dataOpiniones=data.opiniones;
            });
  }

};
</script>

<style>
  .jumbo1 {
    height: 200px;
    background-color: rgba(212, 216, 216, 0.842);
  }</style>

