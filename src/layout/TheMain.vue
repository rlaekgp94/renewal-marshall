<template>
  <div id="theMain">
    <MainBanner />
    <MainContent />
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  components: {
    MainBanner: () => import("@/layout/MainBanner"),
    MainContent: () => import("@/layout/MainContent"),
  },
};
</script>
<style scoped>
#theMain {
  position: relative;
  width: 100%;
  height: auto;
}
</style>
