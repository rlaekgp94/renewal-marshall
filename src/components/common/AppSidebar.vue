<template>
  <div class="sidebar-wrap">
    <img
      src="@/assets/image/icons/menu-close-icon.svg"
      class="menu-close-icon"
      alt="메뉴닫기아이콘"
      @click="$emit('close', true)"
    />
    <div class="sidebar">
      <div class="sub-event">
        <img
          src="@/assets/image/banner/sub-event.png"
          width="400"
          height="400"
          alt="서브이벤트"
        />
      </div>
      <div>
        <div class="sub_language">
          <select>
            <option value="SOUTH KOREA">SOUTH KOREA</option>
            <option value="CANADA">CANADA</option>
            <option value="FPANCE">FPANCE</option>
            <option value="GERMANY">GERMANY</option>
            <option value="ITALY">ITALY</option>
            <option value="NETHERLANDS">NETHERLANDS</option>
            <option value="SPAIN">SPAIN</option>
            <option value="SWEDEN">SWEDEN</option>
            <option value="USA">USA</option>
            <option value="SHOW ALL">SHOW ALL</option>
          </select>
        </div>
        <div class="sub_menu">
          <ul @click="$emit('close', true)">
            <li>
              <router-link to="/headphones">HEADPHONES</router-link>
              <ul class="sub_menu-category">
                <li>
                  <router-link to="/headphones/over-ear">OVER-EAR</router-link>
                </li>
                <li>
                  <router-link to="/headphones/on-ear">ON-EAR</router-link>
                </li>
                <li>
                  <router-link to="/headphones/true-wireless"
                    >TRUE WIRELESS</router-link
                  >
                </li>
                <li>
                  <router-link to="/headphones/in-ear">IN-EAR</router-link>
                </li>
                <li>
                  <router-link to="/headphones/noise-cancelling"
                    >NOISE CANCELLING</router-link
                  >
                </li>
              </ul>
            </li>
            <li>
              <router-link to="/speakers">SPEAKERS</router-link>
              <ul class="sub_menu-category">
                <li>
                  <router-link to="/speakers/bluetooth">BLUETOOTH</router-link>
                </li>
                <li>
                  <router-link to="/speakers/portable">PORTABLE</router-link>
                </li>
              </ul>
            </li>
            <li><router-link to="/acc">ACCESSORIES</router-link></li>
            <li>
              <a href="#">BACKSTAGE</a>
              <ul class="sub_menu-category">
                <li><a href="#">GUIDED BY MUSIC</a></li>
                <li><a href="#">HOMEWARD BOUND</a></li>
                <li><a href="#">ON THE ROAD</a></li>
                <li><a href="#">LIFE IN STEREO</a></li>
              </ul>
            </li>
          </ul>
          <!--sub_menu-->
        </div>

        <div class="sub_app-wrap">
          <p>
            MARSHALL BLUETOOTH APP<br />
            DOWNLOAD
          </p>
          <div class="app-button">
            <a
              href="https://apps.apple.com/se/app/marshall-bluetooth/id1351654161"
              target="_blank"
              ><img
                alt="ios"
                height="40"
                src="https://www.marshallheadphones.com/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dwefa71c39/images/categories/headphones/monitor-ii-anc/both/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
                width="130"
            /></a>
            <a
              href="https://play.google.com/store/apps/details?id=com.zoundindustries.marshallbt&amp;hl=en"
              target="_blank"
              ><img
                alt="google"
                height="40"
                src="https://www.marshallheadphones.com/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dwa9e725e5/images/categories/headphones/monitor-ii-anc/both/google-play-badge_new.svg"
                width="130"
            /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--sidebar-->
</template>

<script>
// import $ from "jquery";
export default {
  name: "AppSidebar",
  props: {
    ActiveSidebar: Object,
  },
  // mounted() {
  //   //서브메뉴 스크롤막기
  //   $(".sidebar-wrap").on("scroll touchmove mousewheel", function(e) {
  //     e.preventDefault();
  //     e.stopPropagation();
  //     return false;
  //   });
  // },
};
</script>

<style>
.sidebar-wrap {
  width: 100%;
  height: 100vh;
  display: block;
  z-index: 10;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
}

.menu-close-icon {
  filter: invert(100%);
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
  position: absolute;
  top: 1.75rem;
  left: 3rem;
  z-index: 15;
}

.sidebar {
  width: 100%;
  height: 100%;
  background: rgba(15, 15, 16, 1);
  display: flex;
  justify-content: center;
  align-items: center;
}

.sidebar > div {
  width: 85rem;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/*sub-event*/
.sub-event {
  position: absolute;
  top: -25%;
}

.sub-event img {
  animation: rotate_image 25s linear infinite;
  transform-origin: 50% 50%;
}

@keyframes rotate_image {
  100% {
    transform: rotate(360deg);
  }
}

/*sub_language*/
.sub_language {
  width: 100%;
  height: 2rem;
  display: flex;
  justify-content: flex-end;
  position: absolute;
  top: 2rem;
  right: 4rem;
}

.sub_language > select {
  width: 10rem;
  height: 2rem;
  line-height: 2rem;
  border: none;
  background-color: transparent;
  font-size: 1rem;
  font-weight: 500;
  color: #fff;
}

.sub_language > select > option {
  color: #252525;
  font-size: 0.75rem;
}

/*sub_menu*/
.sub_menu {
  width: 65rem;
  height: auto;
  position: absolute;
  top: 46%;
}

.sub_menu ul {
  display: flex;
  justify-content: space-between;
}

.sub_menu ul li {
  line-height: 3.5rem;
  text-align: center;
  width: 100%;
}

.sub_menu ul li a {
  color: #fff;
  font-size: 2rem;
}

/*sub_menu-category*/

.sub_menu ul ul {
  width: 15rem;
  display: none;
  background: rgba(255, 255, 255, 0.02);
}

.sub_menu ul li:hover ul {
  display: block;
  padding: 1rem 0;
}

.sub_menu .sub_menu-category li {
  height: 2.5rem;
  line-height: 2.5rem;
}

.sub_menu .sub_menu-category li a {
  font-size: 1rem;
  font-weight: 500;
}

/*sub_app-wrap*/
.sub_app-wrap {
  width: 30rem;
  position: absolute;
  bottom: 3rem;
  display: flex;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 6.25rem;
}

.sub_app-wrap p {
  color: #fff;
  font-size: 1rem;
  text-align: center;
  line-height: 1.5rem;
}
</style>
