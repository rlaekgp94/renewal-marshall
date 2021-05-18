import Vue from "vue";
import App from "./App.vue";

import router from "./router/index.js";

import "@/assets/css/reset.css"; // 공통 리셋 css

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
