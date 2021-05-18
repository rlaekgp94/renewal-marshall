<template>
  <div id="speakers">
    <aside class="category-wrap">
      <h2>SHOP BY CATEGORY</h2>
      <ul class="category-inner">
        <li><router-link to="/speakers">ALL</router-link></li>
        <li><router-link to="/speakers">BLUETOOTH</router-link></li>
        <li><router-link to="/speakers">PORTABLE</router-link></li>
      </ul>
    </aside>
    <!-- category -->
    <section class="store-inner">
      <ul class="items-wrap">
        <li v-for="(item, index) in SpeakersItems" :key="index">
          <VstoreSpeakersItems
            :Speakers="item"
            :index="index"
            class="items-list"
          />
        </li>
      </ul>
      <!-- items-wrap -->
    </section>
    <!-- store-inner -->
  </div>
</template>

<script>
import $ from "jquery";
import VstoreSpeakersItems from "@/components/content/VstoreSpeakersItems.vue";
import SpeakersList from "@/assets/data/storeSpeakers.json";
export default {
  name: "TheSpeakers",
  data() {
    return {
      SpeakersItems: SpeakersList.Speakers,
      SpeakersStore: "",
      winScroll: "",
      fixedActive: true,
    };
  },
  components: {
    VstoreSpeakersItems,
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll: function() {
      this.winScroll = window.pageYOffset;
      this.SpeakersStore = $("#speakers").offset();
      let footerTop = document.getElementById("footer").offsetTop;

      if (
        this.winScroll > this.SpeakersStore.top + 0 &&
        footerTop > this.winScroll + window.innerHeight
      ) {
        document.getElementsByClassName("category-wrap")[0].style =
          "position: fixed; top: 15rem; left: 3rem;";
        this.fixedActive = false;

        //console.log("change fixed");
      } else if (this.winScroll < this.SpeakersStore.bottom - 0) {
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
#speakers {
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

.category-inner li a {
  color: #fff;
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
