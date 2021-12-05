import Vue from "vue";
import VueRouter from "vue-router";
import Perfil from "../components/Perfil.vue";
import Feed from "../components/Feed.vue"
import About from "../views/About.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Feed",
    component: Feed,
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/perfil",
    name: "Perfil",
    component: Perfil,
  },
  {
    path: "/feed",
    name: "Feed",
    component: Feed,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
