import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
  },
  mutations: {
    SET_DRAWER: (state, payload) => state.drawer = payload,
  },
  actions: {
  },
  modules: {
  }
})
