import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/login",
    name: "login",
    // use anonymous function to import the Login component, so that it only loads when the user hits the route
    component: () => import("../views/Login.vue")
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("../views/Dashboard.vue")
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import("../views/Signup.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
