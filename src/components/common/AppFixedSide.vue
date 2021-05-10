<template>
  <div class="fixed-wrap">
    <p class="fixed-top-btn">UP</p>

    <div class="fixed-icons">
      <a
        href="https://www.facebook.com/marshallheadphones/"
        target="_blank"
        class="icon-facebook"
      ></a>
      <a
        href="https://www.instagram.com/marshallheadphones/"
        target="_blank"
        class="icon-instagram"
      ></a>
      <a
        href="https://www.pinterest.com/marshallheadphones/"
        target="_blank"
        class="icon-pinterest"
      ></a>
    </div>
  </div>
  <!--fixed-wrap sns고정-->
</template>
<script>
import $ from "jquery";
export default {
  name: "AppFixedSide",
  mounted() {
    $(".fixed-top-btn").click(function() {
      $("html,body")
        .stop()
        .animate(
          {
            scrollTop: 0,
          },
          1000
        );
    });
  },
};
</script>

<style scoped>
/*fixed-wrap*/

.fixed-wrap {
  width: 3rem;
  height: 17rem;
  position: fixed;
  bottom: 2rem;
  right: 2.25rem;
  z-index: 2;
}

.fixed-top-btn {
  color: #fff;
  width: 3rem;
  height: 2rem;
  display: block;
  text-align: center;
  font-size: 0.8rem;
  font-weight: 800;
  cursor: pointer;
  opacity: 0.6;
  line-height: 1.5rem;
}

.fixed-icons::before {
  background: #fff;
  width: 0.05rem;
  height: 6rem;
  position: absolute;
  top: -4rem;
  left: 50%;
  transform: translateY(-50%);
  content: "";
  opacity: 0.3;
}

.fixed-icons {
  width: 3rem;
  height: 7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 0;
}

.fixed-icons a {
  width: 1.5rem;
  height: 1.5rem;
  margin: 0.5rem 0;
  opacity: 0.6;
}

.icon-facebook {
  background: url(../../assets/image/icons/facebook_icons.png) no-repeat center /
    contain;
}

.icon-instagram {
  background: url(../../assets/image/icons/insta_icons.png) no-repeat center /
    contain;
}

.icon-pinterest {
  background: url(../../assets/image/icons/pinter_icons.png) no-repeat center /
    contain;
}
</style>
