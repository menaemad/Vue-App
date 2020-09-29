import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Help from "../views/Help.vue";
import ListUsers from "../views/ListUsers.vue";
import ListResources from "../views/ListResources.vue";
import SingleResource from "../views/SingleResource.vue";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";





Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/About.vue")
    },
    {
        path: "/help",
        name: "Help",
        component: Help
    },
    {
        path: "/ListUsers",
        name: "ListUsers",
        component: ListUsers
    },
    {
        path: "/ListResources",
        name: "ListResources",
        component: ListResources
    },
    {
        path: "/SingleResource",
        name: "SingleResource",
        component: SingleResource
    },
    {
        path: "/Register",
        name: "Register",
        component: Register
    },
    {
        path: "/Login",
        name: "Login",
        component: Login
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
