import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger';

Vue.use(Vuex)

const debug = process.env.NODE_NEV !== 'production';

export default new Vuex.Store({
  plugins: debug ? [createLogger()] : [],
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
