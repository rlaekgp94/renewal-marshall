<template>
  <div id="items-warp">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide
        class="swiper-img"
        :style="{
          backgroundImage:
            'url(' +
            require('@/assets/image/store/' + headPhones.itemUrl01 + '.png') +
            ')',
        }"
      ></swiper-slide>
      <swiper-slide
        class="swiper-img"
        :style="{
          backgroundImage:
            'url(' +
            require('@/assets/image/store/' + headPhones.itemUrl02 + '.png') +
            ')',
        }"
      ></swiper-slide>
      <swiper-slide
        class="swiper-img"
        :style="{
          backgroundImage:
            'url(' +
            require('@/assets/image/store/' + headPhones.itemUrl03 + '.png') +
            ')',
        }"
      ></swiper-slide>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
    <div class="items-info">
      <p>{{ headPhones.itemsReviews }}</p>
      <p>{{ headPhones.itemName }}</p>
      <p>&#36; {{ headPhones.itemPrice }}</p>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "VstoreItems",
  data() {
    return {
      itemName: "",
      itemPrice: "",
      itemsReviews: "",
      swiperOption: {
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  props: {
    headPhones: Object,
    // index: Number,
  },
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

<style scoped>
#items-warp {
  position: relative;
}

/* swiper custom */
.swiper {
  width: 100%;
  height: 100%;
}

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
  justify-content: space-around;
  align-items: flex-end;
  font-size: 1.15rem;
}
</style>
