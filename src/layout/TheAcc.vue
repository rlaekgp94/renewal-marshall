<template>
  <div id="Acc">
    <aside class="category-wrap">
      <h2>ACCESSORIES</h2>
      <p>EXTRAS FOR YOUR<br />SPEAKERS AND HEADPHONES.</p>
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
import $ from "jquery";
import VstoreAccItems from "@/components/content/VstoreAccItems.vue";
import AccList from "@/assets/data/storeAcc.json";
export default {
  name: "TheAcc",
  data() {
    return {
      AccItems: AccList.Acc,
      AccStore: "",
      winScroll: "",
      fixedActive: true,
    };
  },
  components: {
    VstoreAccItems,
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll: function() {
      this.winScroll = window.pageYOffset;
      this.AccStore = $("#Acc").offset();
      let footerTop = document.getElementById("footer").offsetTop;

      if (
        this.winScroll > this.AccStore.top + 0 &&
        footerTop > this.winScroll + window.innerHeight
      ) {
        document.getElementsByClassName("category-wrap")[0].style =
          "position: fixed; top: 15rem; left: 3rem;";
        this.fixedActive = false;

        //console.log("change fixed");
      } else if (this.winScroll < this.AccStore.bottom - 0) {
        document.getElementsByClassName("category-wrap")[0].style = "";
      } else {
        document.getElementsByClassName("category-wrap")[0].style =
          "position: absolute; bottom: 15rem;  left: 3rem;";
      }
    },
  },
};
</script>

<style scoped>
#Acc {
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
  position: absolute;
  /* top: 0;
  left: 0; */
  top: 15rem;
  left: 3rem;
  transition: transform 500ms linear;
}

.category-wrap h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
}
.category-wrap p {
  font-size: 1.25rem;
  line-height: 2rem;
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
