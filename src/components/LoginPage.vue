<template>
    <v-container fluid>
      <v-layout column align-center>
        <h1 class = "display-1">Administratie login</h1>
        <h3 class = "subheader">Deze omgeving is alleen bedoeld voor administrators, als u terug wilt naar de homepagina
                                kunt u hier onder drukken.</h3>
        <router-link to = "/">
          <v-btn color = "secondary" flat><v-icon>arrow_back</v-icon> Take me back!</v-btn>
        </router-link>
        <v-form lazy-validation>
          <v-text-field label = "Mail" type = "email" v-model = "email"
                        required/>
          <v-text-field label = "Wachtwoord" type = "password" v-model = "pass"
                        required/>
          <v-btn dark class = "primary" @click = "signIn">
            Inloggen
          </v-btn>
          <router-link to="/forgetPassword">
            <v-btn flat color="grey">
              ik ben mijn wachtwoord vergeten
            </v-btn>
          </router-link>
          <h3 class = "red--text subheader">{{errorMsg}}</h3>

        </v-form>
      </v-layout>
      <v-snackbar
        :timeout = "3000"
        color = "error"
        v-model = "snackbar"
        multi-line=""
      >
        {{ text }}
        <v-btn dark flat @click.native = "snackbar = false">Close</v-btn>
      </v-snackbar>

    </v-container>
</template>

<script>
  import firebase from 'firebase'

  export default {
    name: "HomePage",
    methods: {
      signIn() {
        firebase.auth().signInWithEmailAndPassword(this.email, this.pass)
          .then(e => {
            this.$router.replace('dashboard')
          })
          .catch(e => {
            this.text = e.message
            this.snackbar = true
          })
      },

    },
    data() {
      return {
        errorMsg: '',
        valid: true,
        email: '',
        pass: '',
        snackbar: false,
        text: ''
      }
    }
  }
</script>

<style scoped>
  form
  {
    width: 80vw;
    max-width: 450px;
  }
</style>
