<template>
  <header>
    <transition name="fade">
      <AppSidebar v-if="ActiveSidebar" />
    </transition>
    <div class="nav-wrap">
      <div class="nav-submenu">
        <input type="checkbox" id="menuicon" @change="ActiveSidebarBtn" />
        <label for="menuicon" class="total">
          <span></span>
        </label>
        <!-- 사이더바 넣을자리 -->
      </div>
      <!--nav-submenu-->

      <div class="menu-logo">
        <h1>
          <router-link to="/"
            ><img
              src="@/assets/image/logo.png"
              alt="logo"
              width="200"
              height="51"
          /></router-link>
        </h1>
      </div>
      <!--menu-logo-->

      <div class="menu-icon">
        <ul>
          <li>
            <form class="search-form">
              <input
                type="text"
                placeholder="Search"
                maxlength="20"
                minlength="2"
                autofocus
                autocomplete="off"
              />
              <button type="submit">
                <img
                  src="@/assets/image/icons/search_.png"
                  alt="검색버튼"
                  width="20"
                  height="20"
                />
              </button>
            </form>
          </li>

          <li>
            <a href="#"
              ><img
                src="@/assets/image/icons/cart_.png"
                alt="장바구니"
                width="25"
                height="25"
            /></a>
          </li>
          <li>
            <a href="#"
              ><img
                src="@/assets/image/icons/user.png"
                alt="마이페이지"
                width="25"
                height="25"
            /></a>
          </li>
        </ul>
      </div>
      <!--menu-icon-->
    </div>
  </header>
  <!--nav_wrap fixed고정-->
</template>
<script>
import $ from "jquery";
import AppSidebar from "@/components/common/AppSidebar.vue";
export default {
  name: "Header",
  data() {
    return {
      ActiveSidebar: false,
    };
  },
  components: {
    AppSidebar,
  },
  methods: {
    ActiveSidebarBtn: function() {
      this.ActiveSidebar = !this.ActiveSidebar;
    },
  },
  mounted() {
    //서브메뉴
    $(".total").click(function() {
      $(this).toggleClass("on");
    });

    // $(".sub_menu a").click(function() {
    //   console.log("하이");
    // });

    // let links = document.querySelectorAll(".sub_menu a");

    // links.forEach((link) => {
    //   link.addEventListener("click", () => (this.$data.ActiveSidebar = false));
    // });
  },
};
</script>
<style scoped>
header {
  background: rgba(15, 15, 16, 0);
  width: 100%;
  height: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  position: fixed;
  top: 0;
  left: 0;
  transition: all 0.35s;
}

/*nav-wrap*/

.nav-wrap {
  width: 92.5vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-wrap > div:nth-child(1) {
  flex: 1;
}

.nav-wrap > div:nth-child(2) {
  flex: 9;
}

.nav-wrap > div:nth-child(3) {
  align-items: flex-end;
}

/*nav search*/

.menu-icon ul {
  width: 22.5rem;
  height: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.menu-icon li:first-child {
  width: 17rem;
  height: 2rem;
  position: relative;
}

.menu-icon li {
  height: 1.25rem;
}

.search-form input {
  border: none;
  width: 17rem;
  background: rgba(255, 255, 255, 0.05);
  height: 2rem;
  border-radius: 10rem;
  text-indent: 1.25rem;
  letter-spacing: 0.1rem;
  outline: none;
  color: #fff;
}

.search-form input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.search-form button {
  background: none;
  border: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 1.25rem;
  width: 1rem;
  height: 1rem;
}

/*menuicon*/

input[id="menuicon"] {
  display: none;
}

.total {
  display: block;
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
  text-decoration: none;
  cursor: pointer;
  transform: translateY(-50%);
}

.total span {
  display: block;
  position: absolute;
  width: 100%;
  height: 0.15rem;
  background: rgba(255, 255, 255, 1);
  color: transparent;
  transition: all 0.5s;
  border-radius: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
}

.total span:before,
.total span:after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 0.15rem;
  background: rgba(255, 255, 255, 1);
  transition: all 0.5s;
  border-radius: 0.5rem;
}

.total span:before {
  top: -0.5rem;
}

.total span:after {
  top: 0.5rem;
}

.total.on span {
  background: rgba(255, 255, 255, 0);
}

.total.on span:before {
  top: 0;
  transform: rotate(45deg);
}

.total.on span:after {
  top: 0;
  transform: rotate(-45deg);
}

/*checked*/
input[id="menuicon"]:checked + label {
  z-index: 11;
}

input[id="menuicon"]:checked + label span {
  background: transparent;
}

input[id="menuicon"]:checked + label span:before {
  background: #fff;
}

input[id="menuicon"]:checked + label span:after {
  background: #fff;
}
/* 
input[id="menuicon"]:checked + label + .sidebar-wrap {
  display: block;
} */

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
