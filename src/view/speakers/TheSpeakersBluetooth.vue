<template>
  <div id="speakersBluetooth">
    <aside class="category-wrap">
      <h2>SHOP BY CATEGORY</h2>
      <ul class="category-inner">
        <li><router-link to="/speakers">ALL</router-link></li>
        <li>
          <router-link to="/speakers/bluetooth" class="on-click"
            >BLUETOOTH</router-link
          >
        </li>
        <li><router-link to="/speakers/portable">PORTABLE</router-link></li>
      </ul>
      <VcontentScroll />
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
import VcontentScroll from "@/components/content/VcontentScroll.vue";
import SpeakersList from "@/assets/data/storeSpeakers.json";
export default {
  name: "TheSpeakersBluetooth",
  data() {
    return {
      SpeakersItems: SpeakersList.Speakers,
    };
  },
  components: {
    VstoreSpeakersItems,
    VcontentScroll,
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    const link = $(".category-inner li a"),
      onLink = $(".on-click");

    onLink.addClass("onClick");

    link.not(onLink).hover(
      function() {
        $(this).addClass("onlink");
        onLink.removeClass("onClick");
      },
      function() {
        $(this).removeClass("onlink");
        onLink.addClass("onClick");
      }
    );
  },
};
</script>

<style lang="scss" scoped>
#speakersBluetooth {
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
}

@keyframes beforeLine {
  0% {
    width: 0;
  }
  100% {
    width: 1rem;
  }
}
.category-inner {
  display: flex;
  flex-direction: column;
  font-size: 1.15rem;
  line-height: 2.25rem;
  li {
    width: 100%;
    a {
      width: 70%;
      display: inline-block;
      position: relative;
      color: rgb(150, 150, 150);
    }
    .onlink {
      padding-left: 1.5rem;
      transition: ease-in 0.2s;
      color: #fff;
      &:before {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        content: "";
        display: inline-block;
        animation: beforeLine 0.2s ease-in forwards;
        height: 0.15rem;
        background: #fff;
      }
    }
    .onClick {
      padding-left: 1.5rem;
      color: #fff;
      &:before {
        width: 1rem;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        content: "";
        display: inline-block;
        height: 0.15rem;
        background: #fff;
      }
    }
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
    &:nth-child(even) {
      background: url(../../assets/image/store/items-wrap-background-white.jpg)
        no-repeat center / cover;
      color: #252525;
    }
    &:nth-child(odd) {
      background: url(../../assets/image/store/items-wrap-background-black.jpg)
        no-repeat center / cover;
    }
  }
}
</style>
