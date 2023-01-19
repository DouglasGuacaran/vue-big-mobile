<template>
  <v-card 
  width="344"
  shaped
  >
    <v-img
      width="344"
      max-height="325"
      :src="`${imgSrc}`"
      contain

    ></v-img>
    <v-card-title>
      <h2>
        {{ subtitulo }}
      </h2>
    </v-card-title>
    <v-card-subtitle>
      <h3>
        {{ parrafo }}
      </h3>
    </v-card-subtitle>
    <v-card-actions>
      <v-btn 
      dark
      to="/bigmobile.cl/equiposyaccesorios"
      class="red--text"
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

</style>
