<template>
  <div>

    <v-toolbar
      app
      :clipped-left = "clipped"
      flat
      dark
      class = "primary elevation-3"
      style = "width: 100%"
    >
      <v-toolbar-title class = "hidden-xs-only" v-text = "user"/>
      <v-toolbar-items class = "hidden-xs-only">
        <v-btn flat @click = "dashboard">
          <v-icon>dashboard</v-icon>
          Dashboard
        </v-btn>
      </v-toolbar-items>
      <v-toolbar-items class = "hidden-sm-and-up">
        <v-btn flat @click.stop = "drawer = !drawer">
          <v-icon>menu</v-icon>
        </v-btn>
      </v-toolbar-items>
      <v-spacer/>
      <v-toolbar-items class = "hidden-xs-only">
        <v-btn flat @click = "logOut">Uitloggen</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer
      temporary
      v-model = "drawer"
      light
      absolute
      class = "hidden-sm-and-up"
    >
      <v-toolbar flat class = "transparent">
        <v-list class = "pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src = "https://cdn3.iconfinder.com/data/icons/users-6/100/654853-user-men-2-512.png"/>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>{{user}}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-list class = "pt-0" dense>
        <v-divider/>
        <v-list-tile @click = "dashboard">
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Dashboard</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click = "logOut">
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Uitloggen</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>

</template>

<script>
  import firebase from 'firebase'
  import 'firebase/firestore'

  export default {
    data() {
      return {
        clipped: false,
        drawer: null,
        fixed: false,
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'S4 portfolio',
        user: '...',
        items: [
          {title: 'Dashboard', icon: 'dashboard', redirect: '/dashboard'},
          {title: 'Portfolio', icon: 'question_answer', redirect: '/portfolioManager'}
        ]
      }
    },
    computed: {},
    methods: {
      logOut() {
        firebase.auth().signOut().then(() => {
          this.$router.replace('login')
        }).catch((e) => {
          console.log(e.message)
        })
      },
      dashboard() {
        this.$router.replace('dashboard')
      }
    },
    created() {
      let user = firebase.auth().currentUser.uid
      firebase.firestore().collection('users').doc(user).onSnapshot((doc) => {
        this.user = doc.data().name
      })
    }
  }
</script>

<style lang = "scss" scoped>

</style>
