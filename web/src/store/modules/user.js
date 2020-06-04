export default {
  namespaced: true,
  state: {
    id: 0,
    name: '',
    realName:''
  },
  mutations: {
    updateId (state, id) {
      state.id = id
    },
    updateName (state, name) {
      state.name = name
    },
    updateRealName (state, realname){
      state.realName =  realname
    }
  }
}
