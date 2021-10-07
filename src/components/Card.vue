<template>
    <v-card
    class="mx-auto"
    max-width="344"
  >
  <v-img
      height="110"
      contain
      src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
    ></v-img>
    <v-card-text>
      
      <div class="text-h6 text--primary text-center">
        {{subtitulo}}
      </div>
      <div class="text--primary text-center">
        {{parrafo}}     
      </div>
    </v-card-text>
  </v-card>
</template>

<script>

export default {
    data:()=>({
      width: 200,
    }),
    name:"Card",
    props:{
        subtitulo: String,
        parrafo: String,
    }
}
</script>

<style>

</style>