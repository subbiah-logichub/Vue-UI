import { Module } from "vuex";

interface userState {
  isLoggedIn: boolean;
  isLoading: boolean;
  permissions: { [key: string]: any };
  name: string;
  email: string;
  id: string;
}

const Types = {
  APP_USER_SET_DETAILS: "APP_USER_SET_DETAILS",
  APP_USER_SET_IS_LOADING: "APP_USER_SET_IS_LOADING",
};

const user: Module<userState, any> = {
  namespaced: true,
  state: {
    isLoggedIn: false,
    isLoading: true,
    permissions: {},
    name: "",
    email: "",
    id: "",
  },
  getters: {
    getIsLoading(state) {
      return state.isLoading;
    },
    getIsLoggedIn(state) {
      return state.isLoggedIn;
    },
    getPermissions(state) {
      return state.permissions;
    },
  },
  mutations: {
    [Types.APP_USER_SET_IS_LOADING](state, isLoading: boolean) {
      state.isLoading = isLoading;
    },
    [Types.APP_USER_SET_DETAILS](state, payload: userState) {
      state.email = payload.email;
      state.name = payload.name;
      state.id = payload.id;
      state.isLoggedIn = true;
    },
  },
  actions: {
    async fetchUser({ commit }) {
      commit(Types.APP_USER_SET_IS_LOADING, true);

      setTimeout(() => {
        commit(Types.APP_USER_SET_DETAILS, {
          email: "subbiah2806@gmail.com",
          name: "subbiah",
          id: "1111",
        });
        commit(Types.APP_USER_SET_IS_LOADING, false);
      }, 2000);
    },
  },
};

export default {
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: { user },
};
