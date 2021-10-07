<template>
    <v-card>
      <v-row>
            <v-col cols="4" >          
              <v-img
              height="75"
              contain
              src="https://www.inetshop.cl/sitionuevo/wp-content/uploads/2021/08/MOTOROLA-MOTO-G10-POWER-64GB-gray.jpg"
              >
              </v-img>
            </v-col>
            <v-col cols="8">
              <v-row>
                <v-col >
                  <h5 class="text--primary text-center">
                    {{nombre}}
                  </h5>
                  <h5 class="text--primary text-center">
                    {{precio}}     
                  </h5>
                </v-col>
              </v-row>
          </v-col>
      </v-row>      
  </v-card>
</template>

<script>

export default {
    data:()=>({
      width: 200,
    }),
    name:"CardCompra",
    props:{
        nombre:String,
        precio:String
    },
}
</script>

<style>

</style>