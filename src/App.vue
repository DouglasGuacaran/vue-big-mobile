<template>
  <v-app id="app" class="app">
    <Navbar id="nav-bar-sticky" />
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
    
</template>

<script>
import Navbar from "./components/Navbar.vue"
export default {
  name: "App",
  components: {
    Navbar
  },
  data () {
      return {
        
      }
    },
};
</script>

<style>
.rounded-img {
  border-radius:15px;
}

.white--text{
  text-decoration: none;
}

</style>