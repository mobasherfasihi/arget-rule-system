import * as types from "./mutation-types";

const actions = {
    setUser({ commit }, user) {
        commit(types.SET_USER, user);
    },

    toggleDropdown({ commit }, open) {
        commit(types.OPEN_DROPDOWN, open);
    },

    setRateLimit({ commit }, data) {
        commit(types.THROTTLING, data);
    },
};

export default actions;
