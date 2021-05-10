import Vue from "vue";
import App from "./App.vue";

import "@/assets/css/reset.css";
// import "swiper/swiper-bundle.css"; /* 기본값css */
import "@/assets/css/swiper-bundle.css";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
