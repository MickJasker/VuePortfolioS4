<template>
  <div class = "landingPage">
    <v-content class = "data">
      <img src = "../assets/logo.svg" alt = "LOGO" class = "logo">
      <h2>Het Buro</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias asperiores aspernatur atque dicta distinctio
         dolorem exercitationem explicabo facere magni molestiae nobis omnis, perspiciatis, quibusdam quis quod rem
         repudiandae, sed velit?</p>
      <router-link to = "Home">
        <button class = "elevation-8">Media Design</button>
      </router-link>
      <router-link to = "porfolioPages/HomePage">
        <button class = "elevation-8">Digital Publishing</button>
      </router-link>
      <footer>
        <h6>Mick Jasker 2018</h6>
        <router-link to = "Login" id = "footerLink">Admin login</router-link>
      </footer>
    </v-content>
  </div>
</template>

<script>
  export default {
  	name: 'landing-page'
  }
</script>

<style scoped>
  .landingPage
  {
    width:            100vw;
    height:           100vh;
    background-image: url("../assets/landingBG.jpg");
    background-size:  cover;
  }

  h2
  {
    font-size:   40px;
    font-weight: 500;
  }

  .data
  {
    padding:   50px !important;
    max-width: 600px;
  }

  .logo
  {
    max-width: 600px;
  }

  button
  {
    background-color: #F79520;
    color:            white;
    font-size:        24px;
    padding:          15px;
    border-radius:    36px;
    margin-top: 30px;
    margin-right:     15px;
    transition:       0.3s ease-out;
  }

  button:hover
  {
    background-color: #0069AA;
  }

  footer
  {
    position: fixed;
    bottom:   0;
    padding:  10px;
  }

  h6
  {
    font-weight: 400;
    opacity:     0.6;
    font-size:   14px;
    padding:     5px;
    color:       #282828;
  }

  #footerLink
  {
    font-weight: 400;
    opacity:     0.6;
    font-size:   14px;
    padding:     5px;
    color:       #282828;
    transition:  0.2s ease-out;
  }

  #footerLink:hover
  {
    color:   #F79520;
    opacity: 1;
  }

  a:focus
  {
    border:  none;
    outline: none;
  }

  button:focus
  {
    outline: none;
  }
</style>
