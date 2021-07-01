const routes = [
    {
        path: "/",
        component: () => import(/* webpackChunkName: "login-component" */ "../components/LoginComponent.vue")
    }
];

export default routes;
