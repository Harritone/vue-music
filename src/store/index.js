/* eslint-disable comma-dangle */
import { createStore } from 'vuex';
import { auth, db } from '@/includes/firebase';

export default createStore({
  state: {
    authModalShow: false,
    userLoggedIn: false,
  },
  mutations: {
    toggleAuthModal: (state) => {
      state.authModalShow = !state.authModalShow;
    },
    toggleAuth(state) {
      state.userLoggedIn = !state.userLoggedIn;
    },
  },
  getters: {
    // authModalShow: (state) => state.authModalShow,
  },
  actions: {
    async register({ commit }, payload) {
      const userCred = await auth.createUserWithEmailAndPassword(
        payload.email,
        payload.password
      );
      await db
        .collection('users')
        .doc(userCred.user.uid)
        .set({
          name: payload.name,
          email: payload.email,
          country: payload.country,
          age: payload.age,
        });

      await userCred.user.updateProfile({
        displayName: payload.name,
      });

      commit('toggleAuth');
    },
    async init_login({ commit }) {
      const user = auth.currentUser;

      if (user) {
        commit('toggleAuth');
      }
    },
  },
});
