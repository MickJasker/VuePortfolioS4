<template>
  <div>
    <transition name="fade">
      <v-container fluid fill-heigt align-center class="loaderCont" v-show="loader">
        <v-progress-circular class="loader" indeterminate color="secondary" :size="100" :width="2.5"/>
      </v-container>
    </transition>
    <v-toolbar
      app
      flat
      dark

      class="elevation-3 toolbar"
      :style="'width: 100vw; background-color: ' + color"
    >
      <v-toolbar-title class="hidden-sm-and-down">
        {{name}}
      </v-toolbar-title>
      <v-spacer class="hidden-sm-and-down"/>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat dark @click="goHome">Home</v-btn>
      </v-toolbar-items>
      <v-toolbar-items class="hidden-md-and-up">
        <v-btn flat dark @click="goHome">
          <v-icon>home</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <div class="landing elevation-1" :style="'background-image: url(' + headerImg + ' )' "></div>
      <v-layout>
        <v-container>
          <h1 :style="'color: ' + color">{{name}}</h1>
          <div v-html="text"/>
        </v-container>
      </v-layout>
    </v-content>
  </div>
</template>

<script>
  import firebase from 'firebase'
  import 'firebase/firestore'
  import $ from 'jquery'

  export default {
    name: "PorfolioItem",
    props: {
      id: {
        required: true,
        type: String
      }
    },
    data() {
      return {
        loader: true,
        name: '',
        headerImg: '',
        text: '',
        color: 'rgba(247, 148, 32, 1)'
      }
    },
    created() {
      firebase.firestore().collection('portfolio').doc('SCO4').collection('subjects').doc(this.id).get()
        .then(doc => {
          this.name = doc.data().name
          this.headerImg = doc.data().headerImg
          let text = doc.data().text
          this.text = text
          const color = "rgba(" + doc.data().color + ", 1)"
          if (color !== undefined) {
            this.color = color
          } else {
            this.color = "rgba(247, 148, 32, 1)"
          }
          this.loader = false
        })

    },
    methods: {
      goHome() {
        this.$router.replace('/')
      },

    }
  }
</script>

<style scoped>
  .toolbar {
    width: 100vw;
  }
  .container {
    max-width: 1000px !important;
  }

  .landing {
    height: 40vh;
    background-size: cover;
    background-position: center;
  }

  .loaderCont {
    width: 100vw;
    max-width: 100vw !important;
    height: 100vh;
    text-align: center;
    position: fixed;
    z-index: 1000000000;
    background: white;
  }

  .loader {
    padding-top: calc(100vh - 100px);
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
  {
    opacity: 0;
  }
</style>
