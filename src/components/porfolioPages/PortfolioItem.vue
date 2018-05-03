<template>
  <div class="page">
    <div class="loader" v-show="loader">
      <h1>Loading content</h1>
    </div>
   <nav-bar/>
    <section class="landing" :style="'background-image: url(' +this.headerImg+')'">
      <h1>{{this.name}} | sprint 0</h1>
    </section>
    <section class="content">
      <h1 data-aos="fade-up">{{this.name}}</h1>
      <p data-aos="fade-up">{{this.text}}</p>
      <img data-aos="zoom-out" src="../../assets/line.svg" alt="line" class="line">
      <div class="assignment" v-for="item in assignment">
        <h2 data-aos="fade-up">{{item.name}}</h2>
        <div data-aos="fade-up" v-html="item.html" class="html"/>
      </div>
      <img data-aos="zoom-out" src="../../assets/line.svg" alt="line" class="line">
    </section>
    <footer/>
    <div class="footerRow">
      <h6>Mick Jasker 2018</h6>
      <router-link to="Login" id="footerLink">Admin login</router-link>
    </div>
  </div>
</template>

<script>
  import firebase from 'firebase'
  import 'firebase/firestore'
  import $ from 'jquery'
  import navBar from '../navBar'

  export default {
  	name: 'PorfolioItem',
  	props: {
  		id: {
  			required: true,
  			type: String
  		}
  	},
  	data () {
  		return {
  			loader: true,
  			name: '',
  			headerImg: '',
  			text: '',
  			assignment: []
  		}
  	},
  	components: {
  		navBar
  	},
  	created () {
  		const docref = firebase.firestore().collection('portfolio').doc('semesters').collection('s4').doc('sprints').collection('sprint0').doc(this.id)
  		docref.get()
  			.then(doc => {
  				this.name = doc.data().name
  				this.headerImg = doc.data().headerImg
  				this.text = doc.data().desc
  				this.loader = false
  			})
  		docref.collection('items').get().then((snap) => {
  			snap.forEach(doc => {
  				let html = doc.data().html
  				html = $.parseHTML(html)
  				const data = {
  					'id': doc.id,
  					'name': doc.data().name,
  					'html': html[0].innerHTML
  				}
  				this.assignment.push(data)
  			})
  		})
  	}
  }
</script>

<style scoped>
  .page {
    text-align: center;
  }

  .landing {
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
    font-size: 36px;
  }

  h2 {
    color: #0069AA;
    font-size: 24px;
  }

  .content {
    text-align: center;
    max-width: 800px;
    display: inline-block;
  }

  .content p {
    text-align: left !important;
  }

  .line {
    height: 250px;
    margin: 100px;
  }

  .loader {
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 100000;
    background-color: #fff;
  }

  .loader h1 {
    line-height: 100vh;
  }

  .html {
    text-align: left !important;
  }

  footer {
    background-image: url("../../assets/footer.png");
    background-size: cover;
    height: 60vw;
    position: absolute;
    bottom: 0;
    width: 100vw;
    z-index: 0;
  }

  .footerRow {
    z-index: 1000;
    position: absolute;
    width: 100vw;
    background: #282828;
    text-align: center;
    color: #F5F5F5;
    display: inherit;
    padding: 10px;
  }

  .footerRow h6 {
    font-weight: 400;
    font-size: 14px;
    opacity: 0.4;
  }

  .footerRow a {
    opacity: 0.4;
    color: #F5F5F5;
    transition: 0.2s ease-out;
  }

  .footerRow a:hover {
    opacity: 1;
    color: #F79520;
  }

  .html img {
    max-width: 800px !important;
    border-radius: 15px;
  }
</style>
