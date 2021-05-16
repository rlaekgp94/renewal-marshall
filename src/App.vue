<template>
  <div id="app">
    <AppHeader />
    <TheHeadPhones />
    <AppFooter />
    <!-- <AppFixedSide /> -->
  </div>
</template>

<script>
import AppHeader from "./components/common/AppHeader.vue";
import TheHeadPhones from "./layout/TheHeadPhones.vue";
import AppFooter from "./components/common/AppFooter.vue";
// import AppFixedSide from "./components/common/AppFixedSide.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    TheHeadPhones,
    AppFooter,
    // AppFixedSide,
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
