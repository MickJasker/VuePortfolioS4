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
    <v-progress-linear transition="fade-transition" indeterminate color="secondary" v-show="loader"/>
    <v-container grid-list-md v-show="!loader">
      <v-layout v-bind="binding" row wrap>
        <v-flex md4 class="" v-for="card in cards" :key="card.id">
          <v-card >
            <v-card-media
              height = "200px"
              :src = "card.headerImg"/>
            <v-card-title class = "title">{{card.name}}</v-card-title>
            <v-card-text>{{card.text}}
            </v-card-text>
            <v-card-actions>
              <v-chip>
                {{card.tags[0]}}
              </v-chip>
              <v-spacer/>
              <router-link :to="{name: 'PortfolioItem', params: {name: card.name, id: card.id}}">
                <v-btn flat color = "secondary">Meer..</v-btn>
              </router-link>

            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>

</template>

<script>
  import firebase from 'firebase'
  import 'firebase/firestore'
  export default {
    name: "home-page",
    data () {
      return {
        cards: [],
        tags: [],
        loader: true
      }
    },
    created () {
      firebase.firestore().collection('portfolio/SCO4/subjects').get().then(snap => {
        snap.forEach(doc => {
          const data = {
            'id': doc.id,
            'name': doc.data().name,
            'text': doc.data().text,
            'headerImg': doc.data().headerImg,
            'tags': doc.data().tags
          }
          this.cards.push(data)
          this.loader = false
        })
      })
    },
    computed: {
      binding() {
        const binding = {}

        if (this.$vuetify.breakpoint.mdAndDown) binding.column = true

        return binding
      }
    }

  }
</script>

<style scoped>
  .landing
  {
    height:           80vh;
    background-image: url("../../assets/landing.jpg");
    background-size:  cover;
  }

  .landingBlock
  {
    padding-top: calc(40vh - (132.73px / 2) - 16px);
  }

  .progress-linear {
    margin: 0 !important;
  }
</style>
