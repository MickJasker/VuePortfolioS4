<template>
<div>
  <v-toolbar
    app
    flat
    dark
    class = "primary elevation-3"
    style = "width: 100vw"
  >
    <v-toolbar-title>
      Concept
    </v-toolbar-title>
    <v-spacer/>
    <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat dark>Home</v-btn>
        <v-btn flat dark>Strategie & concepting</v-btn>
        <v-btn flat dark>User experience design</v-btn>
        <v-btn flat dark>Design and development</v-btn>
    </v-toolbar-items>
    <v-toolbar-items class="hidden-md-and-up">
        <v-btn flat dark>Home</v-btn>
        <v-btn flat dark>SCO</v-btn>
        <v-btn flat dark>UXU</v-btn>
        <v-btn flat dark>DED</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</div>
</template>

<script>
  export default {
    name: "PorfolioItem",
    props: {
      id: {
        required: true,
        type: String
      }
    }
  }
</script>

<style scoped>
.toolbar {
  width: 100vw;
}
</style>
