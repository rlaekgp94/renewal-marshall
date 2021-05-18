import Vue from "vue";
import Router from "vue-router";
import TheMain from "../layout/TheMain.vue";

// 연결할 컴포넌트 import

const TheHeadPhones = () =>
  import(/* webpackChunName: "TheHeadPhones" */ "../layout/TheHeadPhones.vue");

const TheSpeakers = () =>
  import(/* webpackChunName: "TheSpeakers" */ "../layout/TheSpeakers.vue");

const TheAcc = () =>
  import(/* webpackChunName: "TheAcc" */ "../layout/TheAcc.vue");

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
      component: TheMain,
    },
    {
      path: "/headphones",
      name: "headphones",
      component: TheHeadPhones,
    },
    {
      path: "/speakers",
      name: "speakers",
      component: TheSpeakers,
    },
    {
      path: "/acc",
      name: "acc",
      component: TheAcc,
    },
  ],
});
