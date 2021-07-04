const routes = [
    {
        path: "",
        meta: {auth: true},
        component: { render: (c) => c('router-view') },
        children: [
            {
                path: '/',
                name: "rules",
                component: () => import(/* webpackChunkName: "page-target-component" */ "../components/pageTarget/ListComponent.vue"),
            },
            {
                path: "add",
                name: "page-target-add",
                component: () =>  import(/* webpackChunkName: "page-target-add-component" */ "../components/pageTarget/AddComponent.vue")
            },
            {
                path: '/:id/edit',
                name: "rule-edit",
                component: () => import(/* webpackChunkName: "page-target-component" */ "../components/pageTarget/AddComponent.vue"),
            },
        ]
    },
    {
        path: "/login",
        name: "login",
        component: () => import(/* webpackChunkName: "login-component" */ "../components/LoginComponent.vue"),
    },
    {
        path: "/register",
		name: "register",
        component: () => import(/* webpackChunkName: "signup-component" */ "../components/SignupComponent.vue")
    }
];

export default routes;
