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
          <VstoreItems
            :headPhones="item"
            :index="index"
            class="items-list"
            :style="{
              backgroundImage:
                'url(' +
                require('../assets/image/store/' + item.itemUrl + '.png') +
                ')',
            }"
          />
        </li>
      </ul>
      <!-- items-wrap -->
    </section>
    <!-- store-inner -->
  </div>
</template>

<script>
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
  padding-top: 6rem;
  overflow: hidden;
}

.category-wrap {
  margin-left: 3rem;
  width: 92.5vw;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.category-wrap h2 {
  font-size: 1.5rem;
}

.category-inner {
  display: flex;
  font-size: 1rem;
  heihgt: 1.5rem;
  line-height: 1.5rem;
}
.category-inner li:not(:last-child) {
  margin-right: 2rem;
}

/* store-inner */
.store-inner {
  margin: 3rem 0 0 3rem;
  width: 92.5vw;
  color: #fff;
  height: auto;
}

.items-wrap {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.items-list {
  width: 100%;
  height: 100vh;
}
</style>
