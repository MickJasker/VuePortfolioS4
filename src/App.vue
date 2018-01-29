<template>
  <v-app>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; {{copy}} - Mick Jasker - Fontys Hogeschool ICT</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    name: 'App',
    computed: {
      copy() {
        return new Date().getFullYear()
      }
    },
    data() {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        items: [{
          icon: 'home',
          title: 'Home',
          color: 'red'
        }, {
          icon: 'color_lens',
          title: 'SCO'
        }, {
          icon: 'people',
          title: 'UX'
        }, {
          icon: 'memory',
          title: 'DEV'
        }, {
          icon: 'explore',
          title: 'PTM'
        }],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Vuetify.js'
      }
    },
  }
</script>
