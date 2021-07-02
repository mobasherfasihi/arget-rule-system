import VueRouter from "vue-router";
import routes from "./routes/routes";
import store from "./store/index";
import Vue from  "vue";

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");

window.Vue = require("vue");
window.Bus = new Vue();


Vue.store = store;

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes,
});

Vue.router = router;

/**
 * Adding vue-auth to the vue instance to implement vue authentication
 */
require("./auth");


Vue.component("v-loading", require("./components/LoadingComponent").default);
Vue.component("v-pagination", require("./components/shared/Pagination").default);
Vue.component("v-alert", require("./components/shared/Alert").default);

const app = new Vue({
  store,
  mode: history,
  router,
  el: "#app"
});

// Custom global event handler
// Please do not remove it from there
window.addEventListener("keyup", function(event) {
  app.$store.dispatch("toggleDropdown", false);
});
