<template>
  <div class="items-img">
    <p>{{ headPhones.itemsReviews }}</p>
    <p>{{ headPhones.itemName }}</p>
    <p>&#36; {{ headPhones.itemPrice }}</p>
    <!-- <div class="items-color">
      <div class="items-color-black"></div>
      <div class="items-color-purple"></div>
    </div> -->
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
  justify-content: space-between;
  align-items: flex-end;
  /* position: relative; */
  background-size: cover;
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
/* 
.items-color {
  position: absolute;
  bottom: 4rem;
  left: 50%;
  transform: translateX(-50%);
  width: auto;
  height: 1rem;
  background: url(../assets/image/store/items01-01.png) no-repeat center / cover;
}

.items-color div {
  width: 1rem;
  height: 1rem;
  float: left;
  margin-right: 0.5rem;
  border-radius: 1.5rem;
  border: 0.02rem solid rgba(175, 175, 175, 0.2);
}

.items-color div:last-child {
  margin-right: 0;
}

.items-color-black {
  background-color: black;
}

.items-color-blue {
  background-color: rgb(88, 116, 139);
}

.items-color-purple {
  background-color: rgb(74, 30, 69);
}

.items-color-gold {
  background-color: rgb(178, 122, 44);
}

.items-color-white {
  background-color: rgb(255, 255, 255);
}

.items-color-brown {
  background-color: rgb(152, 90, 1);
} */
</style>
