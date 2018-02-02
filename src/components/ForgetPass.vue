<template>
  <v-container fluid>
    <v-layout column align-center>
      <h1 class = "display-1">Administratie login</h1>
      <h3 class = "subheader">Vul uw mail adres in waarmee u geregistreerd staat dan sturen wij u een mail om uw wachtwoord te heractiveren.</h3>
      <v-form lazy-validation>
        <v-text-field label = "Mail" type = "email" v-model = "email"
                      required/>
        <v-btn dark class = "primary" @click = "forgetPass">
          Versturen
        </v-btn>
        <router-link to="/login">
          <v-btn flat color="grey">
            annuleren
          </v-btn>
        </router-link>

      </v-form>
    </v-layout>
    <v-snackbar
      :timeout = "timeout"
      :color = "color"
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
      forgetPass() {
        firebase.auth().sendPasswordResetEmail(this.email).then(() => {
          this.text = "Er is een reset mail verzonden naar: " + this.email
          this.snackbar = true
          this.color = 'success'
        }).catch((e) => {
          this.text = "Er is een fout opgetreden: " + e.message
          this.snackbar = true
          this.color = 'error'
          this.timeout = 10000
        })
      }

    },
    data() {
      return {
        errorMsg: '',
        valid: true,
        email: '',
        pass: '',
        color: 'info',
        snackbar: false,
        text: '',
        timeout: 3000
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
