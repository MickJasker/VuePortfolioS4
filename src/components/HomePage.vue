<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <v-form>
          <v-text-field label="Mail" v-model="email"
                        :rules="emailRules"
                        required/>
          <v-text-field label="Wachtwoord" type="password" v-model="pass"
                        :rules="passRules"
                        required/>
          <v-btn class="blue" @click="signIn">
            Inloggen
          </v-btn>
          <h3 class="red--text subheader">Error</h3>
        </v-form>
      </v-layout>
    </v-slide-y-transition>
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
            return e.message
          })
      },

    },
    data() {
      return {
        valid: true,
        email: '',
        emailRules: [
          (v) => !!v || 'Mail is vereist',
          (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ],
        pass: '',
        passRules: [
          (v) => !!v || 'Wachtwoord is vereist!'
        ]
      }

    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
