<template>
  <v-app>
    <v-slide-y-transition mode = "out-in">
      <router-view/>
    </v-slide-y-transition>
  </v-app>
</template>

<script>
  export default {
  	name: 'App',
  	data () {
  		return {
  			fixed: false
  		}
  	}
  }
</script>

<style>
  body
  {
    font-family:      'Montserrat', 'Roboto', sans-serif !important;
    background-color: #282828;
    margin: 0;
  }

  .primary
  {
    background-color: #F79420 !important;
    color:            #F79420;
  }

  a
  {
    text-decoration: none;
  }
  h6 {
    margin: 5px;
  }
  nav
  {
    background-color: #F5F5F5;
    border-radius:    15px;
    height:           57px;
    position:         fixed;
    margin:           30px;
    width:            calc(100% - 60px);
    z-index:          10000;
    opacity: 0.95;
    -webkit-backdrop-filter: blur(300px);
  }

  nav ul li
  {
    list-style: none;
    font-size:  18px !important;
    display:    inline;
    padding:    0 10px;
  }

  nav ul
  {
    padding:   15px;
    min-width: 370px;
    margin: 0;
  }

  nav img
  {
    height:   57px;
    padding:  5px;
    position: static;
    text-align: center;
  }

  #navL
  {
    text-align: left;
    float:      left;
  }

  #navR
  {
    text-align: right;
    float:      right;
  }

</style>
