<template>
  <div class = "page">
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
    <section class = "landingContent">
      <h1>Het Buro</h1>
      <h2>Semester 4</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores inventore numquam tempore vel vero. Amet
         debitis delectus doloribus ex odit perspiciatis porro quaerat quisquam voluptatibus voluptatum. Et maxime
         temporibus voluptates! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor facilis ipsum nesciunt
         possimus quo sint voluptatum. Animi at cum eligendi eveniet, iusto libero nobis reprehenderit saepe temporibus
         vel. Nobis, sunt!</p>
    </section>

    <div class = "content">
      <h1 data-aos = "fade-up">De opdracht</h1>
      <h4 data-aos = "fade-up">Geef vorm aan een passage uit het dagboek van Anne Frank dat jullie het meeste aanspreekt
                               en probeer deze in
                               de
                               dagelijkse leefwereld van een kind te plaatsen.</h4>
      <p data-aos = "fade-up">Van digitasLBi hebben we de opdracht gekregen om een cross media campagne op te zetten
                              voor de Anne Frank
                              Stichting.
                              De doelgroep bestaat uit kinderen van genaturaliseerde vluchtelingen en hun klasgenootjes,
                              het gaat hierom de
                              leeftijd van
                              10 tot 12 jaar. <br><br>

                              We moeten een beeld schetsen van Anne’s wereld en proberen de grenzen op te zoeken. Ook is
                              de uitdaging om de
                              gelijkenissen op te zoeken met het leven van de doelgroep. En wat zijn de duidelijke
                              verschillen. <br><br>

                              Een belangrijk punt van het project is wel: <br><br>

                              “Everyone has inside of him a piece of good news. The good news is that you don’t know how
                              great you can be!
                              How much you can love! What you can accomplish! And what your potential is! “ <br><br>

        <strong>- Anne Frank</strong><br><br>

                              De digitale middelen die we mogen gebruiken zijn vrij: mobile, oculus, cardboard, tablet,
                              website. De campagne
                              wordt crossmediaal ingezet en dus aangevuld met andere middelen zoals video content,
                              print, social media,
                              events, kunst, producten etc.</p>
      <img data-aos = "zoom-out" src = "../../assets/line.svg" alt = "line" class = "line">
      <div data-aos = "zoom-out" class = "sprint">
        <h1>Sprint 0</h1>
      </div>
      <div class = "vak" data-aos = "fade-up">
        <h2>Strategie en concepting</h2>
        <p>De eerste sprint heb ik me voornamelijk gefocust op het ontwikkelen van twee verschillende concepten. Om dit
           voor elkaar te krijgen hebben we in vier weken tijd in verschillende stappen ondernomen. Eerst begonnen met
           het bedenken van 250 ideeën. Hieruit heb ik samen met mijn proftaakgroep twee concepten ontwikkeld.</p>
        <router-link to = "Home">
          <button class = "elevation-5">
            Bekijk al het werk over SCO
          </button>
        </router-link>
      </div>
      <div class = "vak" data-aos = "fade-up">
        <h2>User experience design</h2>
        <p>Om ervoor te zorgen of onze verwachtingen kloppen hebben we deze sprint een onderzoek uitgevoerd op een
           basisschool in Eindhoven</p>
        <router-link to = "Home">
          <button class = "elevation-5">
            Bekijk al het werk over UXU
          </button>
        </router-link>
      </div>
      <div class = "vak" data-aos = "fade-up">
        <h2>Proftaak en SCRUM</h2>
        <p>De basis van het project valt onder proftaak. Tijdens de porftaak uren hebben we ook de basis van SCRUM en
           AGILE behandeld.</p>
        <router-link to = "Home">
          <button class = "elevation-5">
            Bekijk al het werk over PTM
          </button>
        </router-link>
      </div>
      <img data-aos = "zoom-out" src = "../../assets/line.svg" alt = "line" class = "line">
      <h1 id = "commingSoon" data-aos = "zoom-out">Binnenkort meer</h1>
    </div>
    <footer/>
    <div class = "footer">
      <h6>Mick Jasker 2018</h6>
      <router-link to = "Login" id = "footerLink">Admin login</router-link>
    </div>
  </div>
</template>

<script>
  import firebase from 'firebase'
  import 'firebase/firestore'

  export default {
    name: "home-page",
    data() {
      return {
        cards: [],
        tag: '',
        loader: true,
        sprintVal: null
      }
    },
    methods: {
      sprint(x) {
        return this.sprintVal = x
      },
      sprintIf(x) {
        if (this.sprintVal = x) {
          return true
        }
        else if (this.sprintVal = null) {
          return true
        }
      },
      media(x) {
        if (x == null) {
          return 'auto'
        }
        else {
          return '200px'
        }
      }
    },
    created() {
      const dbRef = firebase.firestore().collection('portfolio')
      dbRef.doc('SCO4/').collection('subjects').get().then(snap => {
        snap.forEach(doc => {
          const data = {
            'id': doc.id,
            'name': doc.data().name,
            'text': doc.data().text,
            'headerImg': doc.data().headerImg,
            'tag': doc.data().tag,
            'sprintCard': doc.data().sprint
          }
          this.cards.push(data)
          this.loader = false
        })
      })
    },
    computed: {}

  }
</script>

<style scoped>
  .page
  {
    background-image:  url("../../assets/landingBG.jpg");
    background-size:   100vw;
    min-height:        100vh;
    background-color:  #F5F5F5;
    background-repeat: no-repeat;
    text-align:        center;
  }

  h1
  {
    font-size:  60px;
    margin-top: 120px;
    color:      #0069AA;
    text-align: left;
  }

  h2
  {
    font-size:   24px;
    font-weight: 400;
    text-align:  left;
  }

  .landingContent p
  {
    text-align: left;
    max-width: 500px;
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
  }

  nav img
  {
    height:   57px;
    padding:  5px;
    position: static;
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

  .line
  {
    height: 250px;
    margin: 100px;
  }

  .content
  {
    display:     inline-block;
    padding-top: 50vh;
    max-width: 800px;
  }

  .content h1, h4
  {
    text-align: center;
    margin:     30px 0;
  }

  .content p
  {
    display: block;
    text-align: left;
  }

  .sprint
  {
    background-image: url('../../assets/sprint0.png');
    background-size:  contain;
    height:           400px;
  }

  .sprint h1
  {
    line-height: 400px;
  }

  .content h4
  {
    text-align:  left !important;
    font-weight: 400;
    margin-left: 0;
    font-size:   18px;
  }

  button
  {
    background-color: #F79520;
    color:            white;
    font-size:        18px;
    padding:          10px;
    border-radius:    24px;
    margin-top:       30px;
    margin-right:     15px;
    transition:       0.3s ease-out;
    text-align:       left;
  }

  button:hover
  {
    background-color: #0069AA;
  }

  footer
  {
    background-image: url("../../assets/footer.png");
    background-size:  cover;
    height:           60vw;
    position:         absolute;
    bottom:           0;
    width:            100vw;
    z-index:          0;
  }

  .vak
  {
    margin:   50px;
    z-index:  100;
    position: relative;
  }

  #commingSoon
  {
    position: relative;
    z-index:  100;
    color:    #F5F5F5;
  }

  .landingContent
  {
    padding: 100px;
  }

  .vak h2
  {
    font-size:   36px;
    font-weight: 900;
    color:       #0069AA;
  }

  .footer
  {
    z-index:    1000;
    position:   absolute;
    width:      100vw;
    background: #282828;
    text-align: center;
    color:      #F5F5F5;
    display:    inherit;
    padding:    10px;
  }

  .footer h6
  {
    font-weight: 400;
    font-size:   14px;
    opacity:     0.4;
  }

  .footer a
  {
    opacity:    0.4;
    color:      #F5F5F5;
    transition: 0.2s ease-out;
  }

  .footer a:hover
  {
    opacity: 1;
    color:   #F79520;
  }
</style>
