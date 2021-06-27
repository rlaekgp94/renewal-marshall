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
      component: () => import("../layout/TheMain.vue"),
    },
    {
      path: "/headphones",
      name: "headphones",
      component: () => import("../layout/TheHeadPhones.vue"),
      meta: { hideFixedSide: true },
    },
    {
      path: "/headphones/headphones-over-ear",
      name: "headphones-over-ear",
      component: () => import("../view/TheHeadPhonesOverEar.vue"),
      meta: { hideFixedSide: true },
    },
    {
      path: "/speakers",
      name: "speakers",
      component: () => import("../layout/TheSpeakers.vue"),
      meta: { hideFixedSide: true },
    },
    {
      path: "/acc",
      name: "acc",
      component: () => import("../layout/TheAcc.vue"),
      meta: { hideFixedSide: true },
    },
  ],
});
