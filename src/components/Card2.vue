<template>
    <v-card
    class="mx-auto"
    max-width="344"
  >
  <v-img
      height="100"
      contain
      :src="`${imgSrc}`"
    ></v-img>
    <v-card-text>
      <div class="text-h6 text--primary text-center">
        {{parrafo}}    
      </div>
      <p class="text--primary text-end">
        {{subtitulo}}
      </p>
    </v-card-text>
  </v-card>
</template>

<script>

export default {
  name:"card2View",
    data:()=>({
      width: 200,
    }),
    name:"Card2",
    props:{
      imgSrc: String,
      subtitulo: String,
      parrafo: String,

    }
}
</script>

<style>

</style>