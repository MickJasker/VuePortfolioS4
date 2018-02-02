  <template>
    <div class = "dashboard">
      <ToolbarComp/>

      <v-content>
        <v-container grid-list-lg>

          <v-layout v-bind = "binding" row align-center>
            <v-flex>
              <v-card>
                <v-card-title class="title">Concepting</v-card-title>
                <v-card-title class="subheader">SCO - UXU</v-card-title>
                <v-card-actions>
                  <v-spacer/>
                  <v-btn flat color="blue">Pas aan</v-btn>
                  <v-btn-toggle mandatory v-model="exclusive">
                    <v-btn color="blue" flat>Gepubliceerd</v-btn>
                    <v-btn color="red" flat>Niet gepubliceerd</v-btn>
                  </v-btn-toggle>
                  <v-btn flat color="red">Verwijder opdracht</v-btn>
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

    export default {
      components: {
        ToolbarComp
      },
      data() {
        return {
          exclusive: 1
        }
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
