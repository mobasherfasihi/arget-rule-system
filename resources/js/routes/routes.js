const routes = [
    {
        path: '/rules',
		name: "rules",
        meta: {auth: true},
        component: () => import(/* webpackChunkName: "page-target-component" */ "../components/PageTargetComponent.vue")
    },
    {
        path: "/login",
        name: "login",
        component: () => import(/* webpackChunkName: "login-component" */ "../components/LoginComponent.vue"),
    },
    {
        path: '/register',
		name: "register",
        component: () => import(/* webpackChunkName: "signup-component" */ "../components/SignupComponent.vue")
    }
];

export default routes;
