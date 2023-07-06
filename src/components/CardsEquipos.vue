<template>
    <v-card
      class="mx-auto"
    >
    <v-img
    height="180"
    border-radius="15 px"
    contain
    :src="`${imgSrc}`"
    class="ligth"
    ></v-img>
    <div>
      
    </div>
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
  name: 'equiposView',
    data(){
      return{
        cantidadItem: 0,
      }
    },
    name:"CardEquipos",
    props:{
        imgSrc: String,
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
        
        const obj = {nombre:this.subtitulo,precio:this.precio,img:this.imgSrc }
        this.agregarEquiposAction(obj);
        this.cantidadItem += 1;
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