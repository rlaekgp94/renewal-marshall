<template>
  <div id="theMain">
    <MainBanner />
    <MainContent />
  </div>
</template>
<script>
import MainBanner from "@/layout/MainBanner";
import MainContent from "@/layout/MainContent";

export default {
  data() {
    return {};
  },
  components: {
    MainBanner,
    MainContent,
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
