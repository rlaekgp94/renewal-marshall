<template>
  <div id="app">
    <AppHeader />
    <router-view />
    <AppFooter />
    <AppFixedSide v-if="!$route.meta.hideFixedSide" />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    AppHeader: () => import("./components/common/AppHeader.vue"),
    AppFooter: () => import("./components/common/AppFooter.vue"),
    AppFixedSide: () => import("./components/common/AppFixedSide.vue"),
  },
};
</script>
<style>
/*영문폰트*/
/* poppins-500 - latin */
@font-face {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  src: url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap");
  /* IE9 Compat Modes */
}
/* 최상위 root에 font-size부여 */
:root {
  font-size: 20px;
}

body {
  font-size: 1rem;
  font-family: "Poppins";
}

#app {
  position: relative;
}
</style>
