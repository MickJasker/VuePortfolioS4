<template>
  <v-layout row wrap>
    <v-flex md6>
      <router-link to="/home">
        <h1 class="display-3">Media Design</h1>
      </router-link>
    </v-flex>
    <v-flex md6>
      <router-link to="/home">
        <h1 class="display-3">Digital Publishing</h1>
      </router-link>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    name: "landing-page"
  }
</script>

<style scoped>
  .flex
  {
    text-align: center;
    height: 100vh;
  }
  h1 {
    line-height: 100vh !important;
    height: 100%;
  }

</style>
