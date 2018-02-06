<template>
  <v-content>
    <transition name = "fade">
      <v-container fluid fill-heigt align-center class = "loaderCont" v-show = "loader">
        <v-progress-circular class = "loader" indeterminate color = "secondary" :size = "100" :width = "2.5"/>
      </v-container>
    </transition>
    <v-container fluid fill-heigt class = "landing elevation-1">
      <v-layout column align-center>
        <v-content class = "landingBlock">
          <h1 class = "display-4 white--text">Het Buro</h1>
          <blockquote class = "white--text">Mick Jasker</blockquote>
        </v-content>
      </v-layout>
    </v-container>
    <v-toolbar color = "secondary">
      <v-spacer/>
      <v-toolbar-items>
        <v-menu offset-y>
          <v-btn flat dark slot = "activator">
            Sprint
          </v-btn>
          <v-list>
            <v-list-tile><v-list-tile-content @click="sprint('0')">0</v-list-tile-content></v-list-tile>
          </v-list>
        </v-menu>
        <v-menu offset-y>
          <v-btn flat dark slot = "activator">
            Vak
          </v-btn>
          <v-list>
            <v-list-tile>
              <v-list-tile-content>Strategie & concepting</v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-menu>

      </v-toolbar-items>
      <v-spacer/>
    </v-toolbar>
    <v-container grid-list-xl>
      <v-layout v-bind = "binding" row wrap>

        <v-flex md4 class = "" v-for = "card in cards" :key = "card.id" >
          <v-card>
            <v-card-media
              :height = "media(card.headerImg)"
              :src = "card.headerImg"/>
            <v-card-title class = "title">{{card.name}}</v-card-title>
            <v-card-text>{{card.text}}
            </v-card-text>
            <v-card-actions>
              <v-chip outline disabled>
                {{card.tags[0]}}
              </v-chip>
              <v-spacer/>
              <router-link :to = "{name: 'PortfolioItem', params: {name: card.name, id: card.id}}">
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
    data() {
      return {
        cards: [],
        tags: [],
        loader: true,
        sprintVal: null
      }
    },
    methods: {
      sprint (x) {
        return this.sprintVal = x
      },
      sprintIf (x) {
        if (this.sprintVal = x) {
          return true
        }
        else if (this.sprintVal = null) {
          return true
        }
      },
      media(x) {
        if (x == null) {
          return 'auto'
        }
        else {
          return '200px'
        }
      }

    },
    created() {
      const dbRef = firebase.firestore().collection('portfolio')
      dbRef.doc('SCO4/').collection('subjects').get().then(snap => {
        snap.forEach(doc => {
          const data = {
            'id': doc.id,
            'name': doc.data().name,
            'text': doc.data().text,
            'headerImg': doc.data().headerImg,
            'tags': doc.data().tags,
            'sprintCard': doc.data().sprint
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

  .progress-linear
  {
    margin: 0 !important;
  }

  .loaderCont
  {
    width:      100vw;
    height:     100vh;
    text-align: center;
    position:   fixed;
    z-index:    1000000000;
    background: white;
  }

  .loader
  {
    padding-top: calc(100vh - 100px);
  }

  .fade-enter-active, .fade-leave-active
  {
    transition: opacity .5s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
