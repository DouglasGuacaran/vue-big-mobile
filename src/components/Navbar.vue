<template>
  <div>
    <v-app-bar
      color="deep-purple accent-4"
      dense
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Big Mobile</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      left
      temporary
      class="navigation-drawer"
    >
    <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/lego/2.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Tienda Big Mobile</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list nav dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.path"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name:"navbarComponent",
  data: () => ({
      drawer: false,
      group: null,
      items: [
          { title: 'Home', icon: 'mdi-view-dashboard', path:'/' },
          { title: 'Equipos y Acesorios', icon: 'mdi-forum', path:'/bigmobile.cl/equiposyaccesorios' },
          { title: 'Planes', icon: 'mdi-forum', path:'/bigmobile.cl/planes' },
          { title: 'Prepago', icon: 'mdi-forum', path:'/bigmobile.cl/prepago' },
          { title: 'Contacto', icon: 'mdi-forum', path:'/bigmobile.cl/contacto' },
          { title: 'Checkout', icon: 'mdi-forum', path:'/bigmobile.cl/equiposyaccesorios/checkout' },

        ],
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },

}
</script>

<style>
@media screen and (min-width: 769px) {
  .navigation-drawer{
    background-color: red;
  }
}
</style>