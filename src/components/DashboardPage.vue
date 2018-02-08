<template>
  <div class = "dashboard">
    <ToolbarComp/>

    <v-content>
      <v-container grid-list-md>
        <v-layout v-bind = "binding" row align-center>
          <v-flex>
            <v-card>
              <v-card-media height = "200px"
                            src = "https://images.unsplash.com/photo-1512567100135-223e140cd167?ixlib=rb-0.3.5&s=665f0a178139c2de3f3dc8c56f77d696&auto=format&fit=crop&w=1950&q=80"/>
              <v-card-title><span class = "headline">Portfolio</span></v-card-title>
              <v-card-text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus earum facilis illum,
                           impedit laudantium maxime quibusdam? A aliquam assumenda delectus eligendi eum inventore
                           ipsum itaque odit, quasi quidem! Consequuntur, vel! Lorem ipsum dolor sit amet, consectetur
                           adipisicing elit. Ad amet deserunt doloribus dolorum eveniet expedita, explicabo fuga
                           incidunt mollitia, nam nisi nostrum odio quae quis quod quos sed soluta sunt!
              </v-card-text>
              <v-card-actions>
                <v-spacer/>
                <router-link to = "/admin/portfolioManager">
                  <v-btn flat color = "secondary">Portfolio Manager</v-btn>
                </router-link>

              </v-card-actions>
            </v-card>
          </v-flex>
          <v-flex>
            <v-card>
              <v-card-media height = "200px"
                            src = "https://images.unsplash.com/photo-1512567100135-223e140cd167?ixlib=rb-0.3.5&s=665f0a178139c2de3f3dc8c56f77d696&auto=format&fit=crop&w=1950&q=80"/>
              <v-card-title><span class = "headline">Gebruikers</span></v-card-title>
              <v-card-text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci, assumenda dignissimos, incidunt nihil non officia quam quisquam ratione sapiente soluta, unde voluptatibus. Dolorem dolorum et id in nihil numquam.
              </v-card-text>
              <v-card-actions>
                <v-spacer/>
                <v-btn flat color = "secondary">Gebuiker manager</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>


        </v-layout>
        <v-layout v-bind = "binding" row align-center>
          <v-flex>
            <v-card>
              <v-card-media height = "200px"
                            src = "https://images.unsplash.com/photo-1493689485253-f07fcbfc731b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ebe5bb8654d3816c9d934ff455abffb2&auto=format&fit=crop&w=1933&q=80"/>
              <v-card-title><span class = "headline">Feedback</span></v-card-title>
              <v-card-text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus earum facilis illum,
                           impedit laudantium maxime quibusdam? A aliquam assumenda delectus eligendi eum inventore
                           ipsum itaque odit, quasi quidem! Consequuntur, vel!
              </v-card-text>
              <v-card-actions>
                <v-spacer/>
                <router-link to = "/portfolioManager">
                  <v-btn flat color = "secondary">Ontvangen Feedback</v-btn>
                </router-link>

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
    computed: {
      binding() {
        const binding = {}

        if (this.$vuetify.breakpoint.mdAndDown) binding.column = true

        return binding
      }
    }
  }

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .dashboard
  {
    width: 100%;
  }

  a
  {
    text-decoration: none !important;
  }


</style>
