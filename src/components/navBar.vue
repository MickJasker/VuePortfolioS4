<template>
  <nav class="elevation-10">
    <ul id="navL">
      <li>
        <router-link to="/Home">Media Design</router-link>
      </li>
      <li>Digital Publishing</li>
    </ul>
    <img src="../assets/logo.svg" alt="">
    <ul id="navR">
      <li>SCO</li>
      <li>UXU</li>
      <li>DEV</li>
      <li>PTM</li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: "nav-bar"
  }
</script>

<style scoped>

</style>
