<template>
  <div id="items-warp">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide swiper-img"
          :style="{
            backgroundImage:
              'url(' +
              require('@/assets/image/store/' + Speakers.itemUrl01 + '.png') +
              ')',
          }"
        ></div>
        <div
          class="swiper-slide swiper-img"
          :style="{
            backgroundImage:
              'url(' +
              require('@/assets/image/store/' + Speakers.itemUrl02 + '.png') +
              ')',
          }"
        ></div>
        <div
          class="swiper-slide swiper-img"
          :style="{
            backgroundImage:
              'url(' +
              require('@/assets/image/store/' + Speakers.itemUrl03 + '.png') +
              ')',
          }"
        ></div>
      </div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </div>
    <div class="items-info">
      <div class="items-info-inner">
        <p>{{ Speakers.itemName }}</p>
        <ul>
          <li>{{ Speakers.itemsType }}</li>
          <li>&#36; {{ Speakers.itemPrice }}</li>
        </ul>
      </div>
      <button type="button" class="items-cart-button">ADD TO CART</button>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";
export default {
  name: "VstoreSpeakersItems",
  data() {
    return {
      itemName: "",
      itemPrice: "",
      itemsType: "",
    };
  },
  props: {
    Speakers: Object,
    // index: Number,
  },
  mounted() {
    // eslint-disable-next-line no-unused-vars
    const swiper = new Swiper(".swiper-container", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  },
};
</script>

<style scoped>
#items-warp {
  position: relative;
}

/* swiper custom */
.swiper-container {
  width: 100%;
  height: 100%;
}

.swiper-wrapper {
  width: 100%;
  height: 100%;
}

/* Swiper Custom */
.swiper-button-prev,
.swiper-button-next {
  color: rgba(93, 92, 92, 0.836);
  padding: 0 2rem;
  transform: scale(1.25);
  z-index: 3;
}

.swiper-img {
  width: 100%;
  height: 100%;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

.items-info {
  position: absolute;
  bottom: 3rem;
  left: 0;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  z-index: 1;
}
.items-info-inner {
  display: flex;
  flex-direction: column;
  margin-left: 2.5rem;
}

.items-info p {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.75rem;
}

.items-info ul li {
  float: left;
  font-size: 1.25rem;
  font-weight: bold;
}

.items-info ul li:not(:first-child) {
  margin-left: 1rem;
}

.items-cart-button {
  width: 15rem;
  height: 4rem;
  border: none;
  outline: none;
  font-size: 1rem;
  font-weight: bold;
  margin-right: 2.5rem;
  box-shadow: 0 0 1rem 0.5rem rgba(0, 0, 0, 0.03);
  cursor: pointer;
}
</style>
