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
    // home
    {
      path: "/",
      name: "home",
      component: () => import("../view/TheMain"),
    },
    // headphones and subPage 5
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
    // speakers and subPage 2
    {
      path: "/speakers",
      name: "speakers",
      component: () => import("../view/speakers/TheSpeakers"),
      meta: { hideFixedSide: true },
    },
    {
      path: "/speakers/bluetooth",
      name: "speakers-bluetooth",
      component: () => import("../view/speakers/TheSpeakersBluetooth"),
      meta: { hideFixedSide: true },
    },
    {
      path: "/speakers/portable",
      name: "speakers-portable",
      component: () => import("../view/speakers/TheSpeakersPortable"),
      meta: { hideFixedSide: true },
    },
    // Acc
    {
      path: "/acc",
      name: "acc",
      component: () => import("../view/acc/TheAcc"),
      meta: { hideFixedSide: true },
    },
  ],
});
