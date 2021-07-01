import VueAxios from "vue-axios";
import VueAuth from "@websanova/vue-auth";
import Vue from "vue";
import axios from "axios";

Vue.use(VueAxios, axios);
Vue.use(VueAuth, {
    auth: require("@websanova/vue-auth/drivers/auth/bearer.js"),
    http: require("@websanova/vue-auth/drivers/http/axios.1.x.js"),
    router: require("@websanova/vue-auth/drivers/router/vue-router.2.x.js"),
    loginData: {
        url: "/api/auth/login",
        method: "POST",
    },
    logoutData: {
        url: "/auth/logout",
        method: "POST",
        redirect: null,
        makeRequest: false
    },
    refreshData: {
        url: "/auth/refresh",
        method: "POST",
        enabled: false,
        interval: 30000
    },
    // fetchData: { url: "/auth/user", method: "GET", enabled: false },
    rolesVar: "perms"
});
