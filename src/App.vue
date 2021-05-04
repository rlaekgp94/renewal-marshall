<template>
  <div id="#app">
    <AppHeader />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "./components/common/AppHeader.vue";
import AppFooter from "./components/common/AppFooter.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>
<style src="./assets/css/reset.css"></style>
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

html {
  font-size: 20px;
}

body {
  font-size: 1rem;
  background-color: rgb(20, 36, 184);
  font-family: "Poppins";
}

#app {
  position: relative;
  height: 300vh;
}

footer {
  position: absolute;
  bottom: 0;
  left: 0;
}
</style>
