import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#f36c27',
        secondary: '#9c27b0',
        accent: '#8c9eff',
        error: '#b71c1c',
      },
    },
  },
});