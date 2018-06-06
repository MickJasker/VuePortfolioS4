<template>
  <div class="page">
    <transition name="fade">
      <div class="loader" v-show="loader">
        <v-progress-circular indeterminate color="primary"></v-progress-circular>
      <h1>De content wordt geladen. Even geduld aub...</h1>
    </div>
    </transition>
   <nav-bar/>
    <section class="landing" :style="'background-image: url(' +this.headerImg+')'">
      <h1>{{this.name}}</h1>
    </section>
    <section class="content">
      <h1 data-aos="fade-up">{{this.name}}</h1>
      <p data-aos="fade-up">{{this.text}}</p>
      <img data-aos="zoom-out" src="../../assets/line.svg" alt="line" class="line">
      <div class="assignment" v-for="item in assignment" :key="item.id">
        <h1 data-aos="fade-up">{{item.name}}</h1>
        <div data-aos="fade-up" v-html="item.html" class="html"/>
        <div data-aos="fade-up" class="tag">
          <h5>Sprint {{item.sprint}}</h5>
        </div>
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
  		docref.onSnapshot(doc => {
        	this.name = doc.data().name
  				this.headerImg = doc.data().headerImg
  				this.text = doc.data().desc
        })
  		docref.collection('items').orderBy("sprint").onSnapshot(snap => {
        this.assignment = []
        snap.forEach(doc => {
  				let html = doc.data().html
  				html = $.parseHTML(html)
  				const data = {
  					'id': doc.id,
  					'name': doc.data().name,
  					'html': html[0].innerHTML,
            'sprint': doc.data().sprint,
  				}
          this.assignment.push(data)
          this.loader = false
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
    margin: 0;
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
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
  }

  .html {
    text-align: left !important;
  }

  .assignment {
    margin-top: 100px;
  }

  .html p img {
    border-radius: 20px;
  }

  .tag {
    margin-top: 10px;
    border: #b1b0b0 solid 2px;
    border-radius: 15px;
    padding: 5px;
    width: 100px;
    color: #b1b0b0;
  }

  .tag h5 {
    margin: 0;
  }

  footer {
    background-image: url("../../assets/footer.png");
    background-size: cover;
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

  .html ol {
    padding: 10px !important;
  }
  .html ol li {
    margin: 10px !important;
  }

  pre code {
    text-align: left;
  }
</style>
