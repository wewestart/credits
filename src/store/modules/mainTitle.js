const mainTitle = {
  state: {
    title: '',
    informmation: {}
  },
  mutations: {
    setTitle: (state, title) => {
      state.title = title
    },
    setInformmation: (state, informmation) => {
      state.informmation = informmation
    }
  },
  actions: {
    ToggleSetTitle: ({ commit }, title) => {
      commit('setTitle', title)
    },
    ToggleInformmation: ({ commit }, informmation) => {
      commit('setInformmation', informmation)
    }
  }
}
export default mainTitle
