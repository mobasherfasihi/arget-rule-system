import VueRouter from "vue-router";
import routes from "./routes/routes";
import store from "./store/index";
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");

window.Vue = require("vue").default;

Vue.store = store;

const router = new VueRouter({
    mode: "history",
    scrollBehavior() {
        return { x: 0, y: 0 };
    },
    routes,
    linkActiveClass: "tw-font-bold tw-text-primary", // active class for non-exact links.
    linkExactActiveClass: "tw-font-bold tw-text-primary" // active class for *exact* links.
});

Vue.router = router;

/**
 * Adding vue-auth to the vue instance to implement vue authentication
 */
require("./auth");

Vue.use(VueRouter);


/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

 const app = new Vue({
    store,
    mode: history,
    router,
    el: "#app"
  });
