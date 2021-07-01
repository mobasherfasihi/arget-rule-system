import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";
import state from "./state";
import createPersistedState from "vuex-persistedstate";
import locale from "./modules/locale";

Vue.use(Vuex);

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules: {},
    plugins: [createPersistedState()],
    modules: {
        locale
    }
});

export default store;
