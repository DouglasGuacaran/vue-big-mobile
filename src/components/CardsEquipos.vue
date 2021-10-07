<template>
    <v-card
      class="mx-auto"
    >
    <v-img
      :width="width"
      src="https://www.inetshop.cl/sitionuevo/wp-content/uploads/2021/08/MOTOROLA-MOTO-G10-POWER-64GB-gray.jpg"
    ></v-img>
    <v-card-text>
      <v-row class="text-h4 text--primary">
        <v-col class="text-center">
          {{id}}
        </v-col>
      </v-row>
      <v-row class="text-h6 text--primary">
        <v-col class="text-center">
          {{subtitulo}}
        </v-col>
      </v-row>
      <v-row class="text--primary">
        <v-col>
          {{caracteristicas}}   
        </v-col>
      </v-row>
      <v-row class="text--primary">
        <v-col>
          Antes: {{precioAnt}}
        </v-col>
      </v-row>
      <v-row class="text--primary">
        <v-col>
          Ahora: {{precio}}  
        </v-col>
      </v-row> 
      <v-col class="text-center">
        <v-btn @click="agregarEquipos(); funcionSubTotal()" class="primary align-self-center text-center" small>
          Agregar 
        </v-btn>
      </v-col>    

    </v-card-text>
  </v-card>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
    data(){
      return{
        width: 200,
      }
    },
    name:"CardEquipos",
    props:{
        id:String,
        subtitulo: String,
        caracteristicas: String,
        precioAnt:String,
        precio:String,
        array1:[] 
    },
computed:{
      ...mapState(['equiposAgregados']),
      
    },
    methods:{
      ...mapActions(['agregarEquiposAction','funcionSubTotalAction']),
      agregarEquipos(){
        const obj = {nombre:this.subtitulo,precio:this.precio}
        this.agregarEquiposAction(obj);
      },
      funcionSubTotal(){
        let obj = {cantidad:parseInt(this.precio)}
        
        this.funcionSubTotalAction(obj)
    }
    },
    
}
</script>

<style>

</style>