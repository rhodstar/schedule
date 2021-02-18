import Vue from 'vue';
import Vuex from 'vuex';
import timetable from './modules/timetable';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    globalSnackBarMessage: '',
    globalSnackBarState: false,
  },
  getters: {
    getSnackState(state) {
      return state.globalSnackBarState;
    },
    getSnackMessage(state) {
      return state.globalSnackBarMessage;
    },
  },
  mutations: {
    setSnackMessage(state, message) {
      state.globalSnackBarMessage = message;
    },
    setSnackState(state, status) {
      state.globalSnackBarState = status;
    },
  },
  actions: {
    triggerSnackMessage({ commit }, message) {
      commit('setSnackMessage', message);
      commit('setSnackState', true);
    },
  },
  modules: {
    timetable,
  },
});
