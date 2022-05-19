<template>
  <v-app>

    <v-app-bar app color="secondary" dark>

      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" color="#DCDCDC" app>
      <v-list-item class="secondary pb-1">
        <v-list-item-content>
          <v-list-item-title class="text-h6 white--text pt-3">
            Tópicos em vigência
          </v-list-item-title>

        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-pencil-outline</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>
              <h3>Tópico 1</h3>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider class="pt-1 ml-1 mr-1" color="white"></v-divider>

        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-pencil-outline</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>
              <h3>Tópico 2 </h3>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider class="pt-1 ml-1 mr-1" color="white"></v-divider>

        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-pencil-outline</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>
              <h3>Tópico 3 </h3>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <HelloWorld />
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {

  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({

    drawer: false,
  }),
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@500&display=swap");
</style>