<template>
  <v-app>
    <v-slide-y-transition mode="out-in">
      <router-view/>
    </v-slide-y-transition>
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
  body {
    font-family: 'Montserrat', 'Roboto', sans-serif !important;
    background-color: #f5f5f5;
  }

  .primary {
    background-color: #F79420 !important;
    color: #F79420;
  }

  a {
    text-decoration: none;
  }


</style>
