<template>
  <!-- Components prefaced with `v-` are vuetify components -->
  <v-app>
    <v-app-bar app dark color="primary">
      <v-toolbar-title>Vuetify Dashboard</v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- Use ES6 syntax for :key so it's unique from the footer key -->
      <v-btn
        text
        rounded
        :to="link.url"
        v-for="link in links"
        :key="`${link.label}-header-link`"
        >{{ link.label }}</v-btn
      >
    </v-app-bar>
    <!-- v-content Vuetify component helps with page layout -->
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer color="primary lighten-1" padless>
      <v-row justify="center" no-gutters>
        <!-- Use ES6 syntax for :key so it's unique from the navbar key -->
        <v-btn
          v-for="link in links"
          :key="`${link.label}-footer-link`"
          color="white"
          text
          rounded
          class="my-2"
          :to="link.url"
          >{{ link.label }}</v-btn
        >
        <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
          {{ new Date().getFullYear() }} —
          <strong>Vuetify Dashboard</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    // HelloWorld
  },

  data: () => ({
    links: [
      { label: "Home", url: "/" },
      { label: "Login", url: "/login" }
    ]
  })
};
</script>
