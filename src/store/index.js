import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 内容部分 高度/宽度
    sysContenHeight: 0,
    sysContenWidth: 0,
    isLogin: false,
    user:''
  },
  getters:{
    isLogin: state => state.isLogin,
    user:state=>state.user
  },
  mutations: {
    SET_SYS_CONTENT_HEIGHT_WIDTH(state, { height, width }) {
      state.sysContenHeight = height
      state.sysContenWidth = width
    },
    userStatus (state, flag) {
      state.isLogin = flag
    }
  },
  actions: {
    setUser ({commit}, flag) {
      commit('userStatus', flag)
    }
  },
  modules: {
  }
})
