<template>
  <div class="content-scroll">
    <img
      src="@/assets/image/icons/content-up-scroll.svg"
      class="scroll-icon"
      alt="맨위로이동"
    />
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "VcontentScroll",
  mounted() {
    $(".scroll-icon").click(function() {
      $("html,body")
        .stop()
        .animate(
          {
            scrollTop: 0,
          },
          700
        );
    });
  },
};
</script>

<style lang="scss" scoped>
.scroll-icon {
  margin-top: 2rem;
  filter: invert(100%);
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
}
</style>
