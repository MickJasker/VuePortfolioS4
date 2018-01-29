<template>
  <div>
    <v-toolbar>

    </v-toolbar>
    <v-navigation-drawer>

    </v-navigation-drawer>
    <v-container fluid>
      <v-slide-y-transition mode="out-in">
        <v-layout column align-center>
          <h1 class="display-4">Hello</h1>
          <v-btn @click="logOut">
            Uitloggen
          </v-btn>
        </v-layout>

      </v-slide-y-transition>
    </v-container>
  </div>

</template>

<script>
  import firebase from 'firebase'
  export default {
    name: "dashboard-page",
    methods: {
      logOut() {
        firebase.auth().signOut().then(() => {
          this.$router.replace('login')
        })
      }
    }
  }
</script>

<style scoped>

</style>
