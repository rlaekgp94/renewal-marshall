<template>
  <div id="Acc">
    <aside class="category-wrap">
      <h2>ACCESSORIES</h2>
      <p>EXTRAS FOR YOUR<br />SPEAKERS AND HEADPHONES.</p>
      <VcontentScroll />
    </aside>
    <section class="store-inner">
      <ul class="items-wrap">
        <li v-for="(item, index) in AccItems" :key="index">
          <VstoreAccItems :Acc="item" :index="index" class="items-list" />
        </li>
      </ul>
      <!-- items-wrap -->
    </section>
    <!-- store-inner -->
  </div>
</template>

<script>
import VstoreAccItems from "@/components/content/VstoreAccItems.vue";
import VcontentScroll from "@/components/content/VcontentScroll.vue";
import AccList from "@/assets/data/storeAcc.json";
export default {
  name: "TheAcc",
  data() {
    return {
      AccItems: AccList.Acc,
    };
  },
  components: {
    VstoreAccItems,
    VcontentScroll,
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>

<style lang="scss" scoped>
#Acc {
  background: linear-gradient(
    90deg,
    rgba(15, 15, 16, 1),
    rgb(25, 25, 25),
    rgba(15, 15, 16, 1)
  );
  width: 100%;
  height: auto;
  color: #fff;
  display: flex;
  justify-content: space-between;
}

.category-wrap {
  width: 20rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: sticky;
  margin-bottom: 15rem;
  top: 15rem;
  left: 3rem;
  h2 {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
  p {
    font-size: 1.25rem;
    line-height: 2rem;
    margin-bottom: 5rem;
  }
}

/* store-inner */
.store-inner {
  width: 60%;
  color: #fff;
  height: auto;
}

.items-list {
  width: 100%;
  height: 100vh;
}

.items-wrap {
  display: flex;
  flex-direction: column;
  li {
    &:nth-child(odd) {
      background: url(../../assets/image/store/items-wrap-background-white.jpg)
        no-repeat center / cover;
      color: #252525;
    }
    &:nth-child(even) {
      background: url(../../assets/image/store/items-wrap-background-black.jpg)
        no-repeat center / cover;
    }
  }
}
</style>
