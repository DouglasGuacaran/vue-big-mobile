<template>
  <v-container class="m-1">
    <v-row>
      <v-col align="center" class="my-4">
        <h3>Checkout</h3>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="8">
        <v-row>
          <v-col>
            <h3>Datos del Comprador</h3>
          </v-col>
        </v-row>
        <v-row>
        <v-divider></v-divider>
        </v-row>
        <v-row>
          <v-col>
        <v-text-field
          v-model="form.nombre"
          :rules="nameRules"
          label="Nombre"
          required
        ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          
        </v-row>
        <v-form>
          <v-text-field
          v-model="form.email"
          :rules="emailRules"
          label="Email"
          required
          id="eMail"
        ></v-text-field>

        <v-text-field
          v-model="form.email1"
          :rules="emailRules"
          label="Repetir Email"
          required
          @blur="check()"
          id="eMailRepeat"
        ></v-text-field>
        </v-form>
        

        <v-text-field
          v-model="form.apPaterno"
          :rules="nameRules"
          label="Teléfono:"
          required
        ></v-text-field>
        <h3>Datos del Despacho</h3>
        <v-divider></v-divider>

        <v-text-field
          v-model="form.direccion"
          :rules="direccionRules"
          label="Dirección"
          required
        ></v-text-field>

        <v-text-field
          v-model="form.comuna"
          :rules="comunaRules"
          label="Comuna"
          required
        ></v-text-field>

        <h3>Forma de Pago</h3>
        <v-divider></v-divider>
        <v-radio-group v-model="radioGroup">
          <v-radio label="Transferencia Bancaria"></v-radio>
          <v-radio label="Servipag"></v-radio>
          <v-radio label="Webpay"></v-radio>
          <v-radio label="Contraentrega"></v-radio>
        </v-radio-group>
        <v-col class="text-center">
        <v-btn
          class="primary"
          :disabled="activar"
          to="/bigmobile.cl/equiposyaccesorios/checkout/confirmacion"
        >
          Confirmar
        </v-btn>
        </v-col>

      </v-col>
      <v-col cols="4">
        <v-row>
          <v-col>
            <h3>Productos</h3>
          </v-col>
        </v-row>
        <v-row>
          <v-divider></v-divider>
        </v-row>
        <v-row>
          <v-col class="my-2" v-for="(equipo, index) in equiposAgregados" :key="'A'+index">
            <CardCompra 
            :nombre="equipo.nombre"
            :precio="equipo.precio"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-divider class="my-2"></v-divider>
        </v-row>
        <v-col>
        <v-row class="my-1">
          <h3>Subtotal Productos: ${{subTotal}}</h3>
        </v-row>
        <v-row class="my-1">
          <h3>Descuentos: ${{descuento}}</h3>
        </v-row>
        <v-row class="my-1">
          <h2>Total: ${{total}}</h2>
        </v-row>
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CardCompra from "../components/CardCompra.vue";
import {mapState} from "vuex";
export default {
  name: "checkoutView",
  components:{
    CardCompra
  },
  data() {
    return {
      radioGroup: 1,
      valid: false,
      activar:true,
      nameRules: [
        (v) => !!v || "Su nombre es requerido",
        (v) => v.length <= 10 || "El nombre debe contener al menos 10 caracteres",
      ],
      direccionRules: [
        (v) => !!v || "La dirección es requerida",
        (v) => v.length <= 10 || "La dirección debe contener al menos 10 caracteres",
      ],
      comunaRules: [
        (v) => !!v || "Ingrese el nombre de la comuna",
        (v) => v.length <= 10 || "La comuna debe contener al menos 10 caracteres",
      ],
      email: "",
      emailRules: [
        (v) => !!v || "El e-mail es requerido",
        (v) => /.+@.+/.test(v) || "el e-mail debe ser válido",
      ],
      resultado: false,
      form: {
        nombre: "",
        email: "",
        telefono: "",
        direccion: "",
        comuna: "",
      },
    };
  },
  computed: {
    ...mapState(["equiposAgregados","subTotal","total","descuento"]),
    },
  methods: {
    check(){
      let email=document.getElementById("eMail");
      let emailRepeat= document.getElementById("eMailRepeat");
      if (email.value != emailRepeat.value){
        alert("Los correos deben coincidir");
        this.activar=true
      }else{
        this.activar=false
      }
    }
  },
};
</script>
<style scoped>
</style>