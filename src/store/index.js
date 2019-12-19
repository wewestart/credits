import Vue from 'vue'
import Vuex from 'vuex'
import mainTitle from './modules/mainTitle'
import defaultParam from './modules/defaultParam'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    mainTitle,
    defaultParam
  },
  getters
})

export default store
