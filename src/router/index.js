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
      path: "/headphones/over-ear",
      name: "headphones-over-ear",
      component: () => import("../view/headphones/TheHeadPhonesOverEar"),
      meta: { hideFixedSide: true },
    },
    {
      path: "/headphones/on-ear",
      name: "headphones-on-ear",
      component: () => import("../view/headphones/TheHeadPhonesOnEar"),
      meta: { hideFixedSide: true },
    },
    {
      path: "/headphones/true-wireless",
      name: "headphones-true-wireless",
      component: () => import("../view/headphones/TheHeadPhonesWireless"),
      meta: { hideFixedSide: true },
    },
    {
      path: "/headphones/in-ear",
      name: "headphones-in-ear",
      component: () => import("../view/headphones/TheHeadPhonesInEar"),
      meta: { hideFixedSide: true },
    },
    {
      path: "/headphones/noise-cancelling",
      name: "headphones-noise-cancelling",
      component: () => import("../view/headphones/TheHeadPhonesNoiseCan"),
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
