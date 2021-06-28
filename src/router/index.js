import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  // eslint-disable-next-line no-unused-vars
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../view/TheMain"),
    },
    {
      path: "/headphones",
      name: "headphones",
      component: () => import("../view/headphones/TheHeadPhones"),
      meta: { hideFixedSide: true },
    },
    {
      path: "/headphones/headphones-over-ear",
      name: "headphones-over-ear",
      component: () => import("../view/headphones/TheHeadPhonesOverEar"),
      meta: { hideFixedSide: true },
    },
    {
      path: "/speakers",
      name: "speakers",
      component: () => import("../view/speakers/TheSpeakers"),
      meta: { hideFixedSide: true },
    },
    {
      path: "/acc",
      name: "acc",
      component: () => import("../view/acc/TheAcc"),
      meta: { hideFixedSide: true },
    },
  ],
});
