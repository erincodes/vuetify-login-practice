import Vue from "vue";
import Vuetify from "vuetify/lib";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  // icons: {
  //     iconfont: 'mdi'
  // },
  theme: {
    themes: {
      light: {
        primary: colors.green,
        secondary: colors.grey.darken1,
        accent: colors.shades.black,
        error: colors.red.accent3,
        anchor: "#8c9eff"
      },
      dark: {
        primary: colors.blue.lighten3
        // anchor: "#8c9eff"
      }
    }
  }
});
