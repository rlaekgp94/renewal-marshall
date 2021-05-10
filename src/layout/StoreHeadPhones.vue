<template>
  <div id="store">
    <div class="category-wrap">
      <h2>SHOP BY CATEGORY</h2>
      <ul class="category-inner">
        <li>ALL</li>
        <li>OVER-EAR</li>
        <li>ON-EAR</li>
        <li>TRUE WIRELESS</li>
        <li>IN-EAR</li>
        <li>NOISE CANCELLING</li>
      </ul>
    </div>
    <!-- category -->
    <section class="store-inner">
      <ul class="items-wrap">
        <li v-for="(item, index) in headPhoneItems" :key="index">
          <VstoreItems :headPhones="item" :index="index" class="items-list" />
        </li>
      </ul>
      <!-- items-wrap -->
    </section>
    <!-- store-inner -->
  </div>
</template>

<script>
import $ from "jquery";
import VstoreItems from "@/components/content/VstoreItems.vue";
import HeadPhonesList from "@/assets/data/storeHeadPhones.json";
export default {
  name: "StoreHeadPhones",
  data() {
    return {
      headPhoneItems: HeadPhonesList.headPhones,
    };
  },
  components: {
    VstoreItems,
  },
  mounted() {
    //config vars
    const lagAmount = 50;
    const maxSpeed = 100;
    const frameRate = 20;
    const selector = ".category-wrap";
    //code
    let scrollTop = 0;
    let pinTop = 0;
    let lastTime;
    const updatePinPosition = (time) => {
      if (!lastTime) lastTime = time;
      let delta = time - lastTime;
      if (delta >= frameRate) {
        scrollTop = $(window).scrollTop();
        var move = ((scrollTop - pinTop) * delta) / (lagAmount + delta);
        var direction = move === 0 ? 0 : move / Math.abs(move);
        pinTop = pinTop + Math.min(Math.abs(move), maxSpeed) * direction;
        $(selector).css("transform", `translateY(${-move}px`);
        lastTime = time;
      }
      requestAnimationFrame(updatePinPosition);
    };
    requestAnimationFrame(updatePinPosition);
  },
};
</script>

<style scoped>
#store {
  background: linear-gradient(
    90deg,
    rgba(15, 15, 16, 1),
    rgb(25, 25, 25),
    rgba(15, 15, 16, 1)
  );
  width: 100%;
  color: #fff;
  overflow: hidden;
}

.category-wrap {
  width: 20rem;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 15rem;
  left: 3rem;
  transition: transform 500ms linear;
}

.category-wrap h2 {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

.category-inner {
  display: flex;
  flex-direction: column;
  font-size: 1.15rem;
  line-height: 2rem;
}
.category-inner li:not(:last-child) {
  margin-right: 2rem;
}

/* store-inner */
.store-inner {
  width: 60%;
  color: #fff;
  height: auto;
  float: right;
}

.items-wrap {
  display: flex;
  flex-direction: column;
}

.items-list {
  width: 100%;
  height: 100vh;
}

.items-wrap li:nth-child(odd) {
  background: url(../assets/image/store/items-wrap-background-white.jpg)
    no-repeat center / cover;
  color: #252525;
}

.items-wrap li:nth-child(even) {
  background: url(../assets/image/store/items-wrap-background-black.jpg)
    no-repeat center / cover;
}
</style>
