<template>
      <v-container>
        <v-form ref="form">
          <v-row class="d-flex flex-column align-center mt-4">
            <v-text-title class="text-h6 text-sm-h4">Formulario de Contacto</v-text-title>
            <v-col cols="10" xs="9" sm="8" md="6" lg="6" xl="6">
              <v-text-field
              label="Nombre"
              :rules="rules"
              hide-details="auto"
              ></v-text-field>
            <v-text-field 
            label="E-mail"
            v-model="email"
            :rules="emailRules"></v-text-field>
            <v-textarea
            label="Mensaje"
            ></v-textarea>
          </v-col>
          <v-btn type="submit">Enviar consulta</v-btn>
        </v-row>
      </v-form>
    </v-container>
  </template>

<script>
  
export default {
  
  name:"contactoView",
  components: {
    
  },
  data: () => ({
    rules: [
      value => !!value || 'Su nombre es requerido.',
      value => (value && value.length >= 2) || 'Mínimo 2 caracteres',
    ],
    emailRules: [ 
    v => !!v || 'El email es requerido',
    v => /.+@.+/.test(v) || 'El email debe ser válido '
      ],
  }),


}
</script>

<style>

</style>