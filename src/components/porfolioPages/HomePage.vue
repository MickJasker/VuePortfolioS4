<template>
  <v-content>
    <v-container fluid fill-heigt class = "landing elevation-1">
      <v-layout column align-center>
        <v-content class = "landingBlock">
          <h1 class = "display-4 white--text">Het Buro</h1>
          <blockquote class = "white--text">Mick Jasker</blockquote>
        </v-content>
      </v-layout>
    </v-container>
    <v-container grid-list-xl>
      <v-layout row align-center>
        <v-flex>
          <v-card>
            <v-card-media
              height = "200px"
              src = "https://images.unsplash.com/photo-1499334844006-d49df7788949?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4dfea9b7bc57a31ea188b2de2bf8e736&auto=format&fit=crop&w=1350&q=80"/>
            <v-card-title class = "title">Concept</v-card-title>
            <v-card-text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, consectetur consequuntur
                         ea ex nisi veniam voluptas.
            </v-card-text>
            <v-card-actions>
              <v-chip outline disabled color="gray">SCO</v-chip>
              <v-chip outline disabled color="gray">UXU</v-chip>
              <v-spacer/>
              <v-btn flat color = "secondary">Meer..</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>


      </v-layout>
    </v-container>
  </v-content>

</template>

<script>
  export default {
    name: "home-page"
  }
</script>

<style scoped>
  .landing
  {
    height:           100vh;
    background-image: url("../../assets/landing.jpg");
    background-size:  cover;
  }

  .landingBlock
  {
    padding-top: calc(50vh - (132.73px / 2) - 16px);
  }
</style>
