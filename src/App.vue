<template>
  <v-app>
    <v-app-bar app color="dark" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="../src/assets/Logo2.jpg"
          transition="scale-transition"
          width="40"
        />
        <v-toolbar-title>
          <router-link to="/" class="m-2 white--text"
            >Home</router-link
          >
          <v-icon>mdi-home</v-icon>
        </v-toolbar-title>
        <v-app-bar color="dark">
          <router-link to="/bigmobile.cl/equiposyaccesorios" class="white--text"
            >Equipos y Accesorios</router-link
          >
        </v-app-bar>
        <v-app-bar color="dark">
          <router-link to="/bigmobile.cl/planes" class="white--text"
            >Planes</router-link
          >
        </v-app-bar>
        <v-app-bar color="dark">
          <router-link to="/bigmobile.cl/prepago" class="white--text"
            >Prepago</router-link
          >
        </v-app-bar>
                <v-app-bar color="dark">
          <router-link to="/bigmobile.cl/oficinavirtual" class="white--text"
            >Oficina Virtual</router-link
          >
        </v-app-bar>
      </div>

      <v-spacer></v-spacer>


    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
