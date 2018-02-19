<template>
  <v-app>
    <v-slide-y-transition mode="out-in">
      <router-view/>
    </v-slide-y-transition>

    <v-footer class="elevation-1" dark :fixed="fixed" app>
      <span class="grey--text lighten-2"><span class="hidden-xs-only">Fontys Hogeschool ICT & Media Design | </span>Mick Jasker &copy; 2018</span>
      <v-spacer/>
      <router-link to="/login">
        <v-btn flat color="grey lighten-1">
          <v-icon>build</v-icon>
          Admin login
        </v-btn>
      </router-link>

    </v-footer>
  </v-app>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        fixed: false
      }
    }
  }
</script>

<style>
  .primary {
    background-color: #F79420 !important;
    color: #F79420;
  }

  a {
    text-decoration: none;
  }


</style>
