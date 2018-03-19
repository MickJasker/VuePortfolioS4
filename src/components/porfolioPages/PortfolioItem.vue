<template>
  <div class="page">
    <nav class = "elevation-10">
      <ul id = "navL">
        <li>Media Design</li>
        <li>Digital Publishing</li>
      </ul>
      <img src = "../../assets/logo.svg" alt = "">
      <ul id = "navR">
        <li>SCO</li>
        <li>UXU</li>
        <li>DEV</li>
        <li>PTM</li>
      </ul>
    </nav>
    <section class = "landing" :style = "'background-image: url(' +this.headerImg+')'">
      <h1>{{this.name}}</h1>
    </section>
    <section class="content">
      <h1 data-aos="fade-up">{{this.name}}</h1>
      <p data-aos="fade-up">{{this.text}}</p>
    </section>
  </div>
</template>

<script>
  import firebase from 'firebase'
  import 'firebase/firestore'
  import $ from 'jquery'

  export default {
    name: "PorfolioItem",
    props: {
      id: {
        required: true,
        type: String
      }
    },
    data() {
      return {
        loader: true,
        name: '',
        headerImg: '',
        text: '',
        color: 'rgba(247, 148, 32, 1)'
      }
    },
    created() {
      firebase.firestore().collection('portfolio').doc('semesters').collection('s4').doc('sprints').collection('sprint0').doc(this.id).get()
        .then(doc => {
          this.name = doc.data().name
          this.headerImg = doc.data().headerImg
          this.text = doc.data().desc
        })

    }
  }
</script>

<style scoped>
  .page {
    text-align: center;
  }
  .landing
  {
    height: 80vh;
    width: 100vw;
    background-size: cover;
    background-position: bottom;
  }
  .landing h1 {
    text-align: right;
    line-height: 80vh;
    padding-right: 100px;
    font-size: 50px;
    color: #F5F5F5;
  }

  h1 {
    color: #0069AA;
  }

  .content {
    text-align: left;
    max-width: 800px;
    display: inline-block;
  }
</style>
