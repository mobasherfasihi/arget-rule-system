let RegisterComponent = () => import(/* webpackChunkName: "signup-component" */ "../components/SignupComponent.vue")

const routes = [
    {
        path: "/login",
        component: () => import(/* webpackChunkName: "login-component" */ "../components/LoginComponent.vue"),
    },
    {
        path: '/register',
		name: "register",
        component: RegisterComponent
    }
];

export default routes;
