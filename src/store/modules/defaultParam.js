const defaultParam = {
  state: {
    defaultParam: {}
  },
  mutations: {
    setDefaultParam: (state, defaultParam) => {
      state.defaultParam = defaultParam
    }
  },
  actions: {
    ToggleDefaultParam: ({ commit }, defaultParam) => {
      commit('setDefaultParam', defaultParam)
    }
  }
}
export default defaultParam
