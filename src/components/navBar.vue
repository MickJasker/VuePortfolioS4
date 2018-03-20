<template>
  <nav class="elevation-10">
    <ul id="navL"/>
    <img src="../assets/logo.svg" alt="">
    <ul id="navR">
      <li>
        <router-link to="/Home">Media Design</router-link>
      </li>
      <li><router-link to="/Home">Digital Publishing</router-link></li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: "nav-bar"
  }
</script>

<style scoped>
  a {
    transition: 0.2s ease-out;
  }

  a:hover {
    color: #F79520;
  }
</style>
