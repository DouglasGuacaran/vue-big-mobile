<template>
  <v-container>
    <v-row>
      <v-col cols="6" class="mx-auto titulo text-center">
        <h1>Confirmación</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6" class="mx-auto parrafo ">
        <v-card class="pa-2 text-center" justify="center">
          <p>
            La Orden <b class="font-weight-bold">N° {{ numeroOrden }} </b>ha sido <b class="font-weight-bold">{{ statusOrden }} </b> y ya la estamos preparando!
          </p>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4" class="mx-auto my-2 text-center">
        <v-btn class="primary text-center" to="/"> Ir al Home </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name:"confirmacion",
  data() {
    return {
      numeroOrden: "",
      statusOrden: "",
    };
  },
  created() {
    fetch("/orderprocessresp.json")
      .then((response) => response.json())
      .then((data) => {
        this.numeroOrden = data.orderNumber;
        this.statusOrden = data.status;
      });
  },
};
</script>

<style>
.titulo{
  height: 150px;
}
.parrafo{
  height: 150px;
  justify-content: center;
  align-items: center;
}
</style>