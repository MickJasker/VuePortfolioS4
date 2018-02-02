// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import firebase from 'firebase'

let config = {
  apiKey: "AIzaSyDHcC1PXjoEkktDNfOlk0Ap4--CFdU_ib4",
  authDomain: "portfolio-af2cb.firebaseapp.com",
  databaseURL: "https://portfolio-af2cb.firebaseio.com",
  projectId: "portfolio-af2cb",
  storageBucket: "portfolio-af2cb.appspot.com",
  messagingSenderId: "661253050916"
}

firebase.initializeApp(config)

Vue.use(Vuetify, {
  theme: {
    primary: '#0068a9',
    secondary: '#f79420'
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
