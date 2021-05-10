<template>
  <div
    class="items-img"
    :style="{
      backgroundImage:
        'url(' +
        require('@/assets/image/store/' + headPhones.itemUrl + '.png') +
        ')',
    }"
  >
    <p>{{ headPhones.itemsReviews }}</p>
    <p>{{ headPhones.itemName }}</p>
    <p>&#36; {{ headPhones.itemPrice }}</p>
  </div>
</template>

<script>
export default {
  name: "VstoreItems",
  data() {
    return {
      itemName: "",
      itemPrice: "",
      itemsReviews: "",
    };
  },
  props: {
    headPhones: Object,
    index: Number,
  },
};
</script>

<style scoped>
.items-img {
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

.items-img p {
  width: 10rem;
  height: 5rem;
  text-align: center;
  line-height: 5rem;
  font-weight: bold;
}

.items-img:nth-child(2) p {
  color: #afafaf;
}
</style>
