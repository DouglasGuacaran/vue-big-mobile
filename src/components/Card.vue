<template>
  <v-card 
  width="344"
  shaped
  class="d-flex flex-column align-center"
  >
  <v-spacer></v-spacer>
    <v-img
      width="340"
      height="350"
      :src="`${imgSrc}`"
      contain

    ></v-img>
    <v-card-title>
      <h3 class="text-h4 text-center">
        {{ subtitulo }}
      </h3>
    </v-card-title>
    <v-card-subtitle>
      <h3 class="mt-4">
        {{ parrafo }}
      </h3>
    </v-card-subtitle>
    <v-card-actions>
      <v-btn 
      to="/bigmobile.cl/equiposyaccesorios"
      class=" ma-5"
      >
      Entrar
    </v-btn>
    </v-card-actions>      
  </v-card>
</template>

<script>
export default {
  name:"cardView",
  data: () => ({
    width: 200,
  }),
  name: "Card",
  props: {
    imgSrc: String,
    subtitulo: String,
    parrafo: String
  },
};
</script>

<style>
.v-image{
  margin:auto
}

</style>
