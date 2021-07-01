import * as types from "./mutation-types";

const mutations = {
    [types.SET_USER](state, user) {
        state.user = user;
    },
    [types.OPEN_DROPDOWN](state, open) {
        state.isShowDropDown = open;
    },
    [types.THROTTLING](state, data) {
        state.rateLimit = data;
    }
};

export default mutations;
