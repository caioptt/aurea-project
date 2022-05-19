<template>
  <v-app>
    <v-app-bar app color="secondary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" color="#DCDCDC" app>
      <v-img
        src="@/assets/aurea.jpg"
        height="100%"
        gradient="to top right, #80000071, #80000071"
      >
        <v-list-item class="secondary pb-2">
          <v-list-item-content>
            <v-list-item-title class="text-h6 white--text pt-2">
              Tópicos em vigência
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense nav>
          <v-list-item to="/" link>
            <v-list-item-icon>
              <v-icon class="white--text">mdi-clipboard-text</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title class="white--text pb-1 pt-1">
                <h2>Introdução</h2>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-divider class="pt-1 ml-1 mr-1" color="white"></v-divider>

          <v-list-item to="/first" link>
            <v-list-item-icon>
              <v-icon class="white--text">mdi-pencil-outline</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title class="white--text pb-1 pt-1">
                <h2>Tópico 1</h2>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-divider class="pt-1 ml-1 mr-1" color="white"></v-divider>

          <v-list-item to="/second" link>
            <v-list-item-icon>
              <v-icon class="white--text">mdi-pencil-outline</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title class="white--text pb-1 pt-1">
                <h2>Tópico 2</h2>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-img>
    </v-navigation-drawer>
    <v-main>
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    drawer: false,
  }),
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@500&display=swap");

.a {
  color: #00008b70;
}
</style>