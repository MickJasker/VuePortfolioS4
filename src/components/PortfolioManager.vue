  <template>
    <div class = "dashboard">
      <ToolbarComp/>

      <v-content>
        <v-container grid-list-lg>

          <v-layout row wrap>
            <v-flex v-for="card in cards" :key="card.id">
              <v-card>
                <v-card-title class="title">{{card.name}}</v-card-title>
                <v-card-title class="subheader">{{card.tag}}</v-card-title>
                <v-card-actions class="hidden-sm-and-up">
                  <v-btn flat color="primary">Instellingen</v-btn>
                </v-card-actions>
                <v-card-actions class="hidden-xs-only">
                  <v-spacer/>
                  <v-btn flat color="primary">Pas aan</v-btn>
                  <v-btn-toggle mandatory v-model="exclusive">
                    <v-btn color="primary" flat>Gepubliceerd</v-btn>
                    <v-btn color="secondary" flat>Niet gepubliceerd</v-btn>
                  </v-btn-toggle>
                  <v-btn flat color="error">Verwijder opdracht</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </div>


  </template>
  <script>
    import ToolbarComp from './ToolbarComp'
    import firebase from 'firebase'
    import 'firebase/firestore'

    export default {
      components: {
        ToolbarComp
      },
      data() {
        return {
          exclusive: 1,
          cards: [],
          tag: '',
          loader: true
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
      computed: {
        binding() {
          const binding = {}

          if (this.$vuetify.breakpoint.mdAndDown) binding.column = true

          return binding
        }
      }
    }


</script>

<style scoped>

</style>
