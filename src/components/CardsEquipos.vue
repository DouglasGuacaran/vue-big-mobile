<template>
    <v-card
      class="mx-auto"
    >
    <v-img
    height="100"
    width="45 px"
    border-radius="15 px"
    contain
    src="https://depor.com/resizer/wxsfbFb8TFOb0WEf4BcrSaZ5I1M=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/KWPHGOXCA5EIFDUFDS6TUVE6LI.jpg"
    class="grey darken-3"
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
  name: 'equiposView',
    data(){
      return{
        // width: 100,
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