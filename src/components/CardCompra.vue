<template>
    <v-card 
    width="160" class="text-center pt-2">
              <v-img
              width="100"
              max-height="100"
              contain
              :src="`${imgSrc}`"
              class="img"
              >
              </v-img>

            <v-card-text cols="8">
              
                  <h5 class="text--primary text-center">
                    {{nombre}}
                  </h5>
                  <h5 class="text--primary text-center">
                    {{precio}} $ Chilenos
                  </h5>
          </v-card-text>
  </v-card>
</template>

<script>

export default {
    data:()=>({
      width: 200,
    }),
    name:"CardCompra",
    props:{
        imgSrc:String,
        nombre:String,
        precio:String
    },
}
</script>

<style>

</style>