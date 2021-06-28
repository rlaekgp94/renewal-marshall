<template>
  <header>
    <transition name="fade">
      <AppSidebar v-if="ActiveSidebar" @close="ActiveSidebarClose" />
    </transition>
    <div class="nav-wrap">
      <div class="nav-submenu">
        <img
          src="@/assets/image/icons/menu-icon.svg"
          class="menu-icon"
          alt="메뉴아이콘"
          @click="ActiveSidebarBtn"
        />
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

      <div class="menu-icon-wrap">
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
      <!--menu-icon-wrap-->
    </div>
  </header>
  <!--nav_wrap fixed고정-->
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      ActiveSidebar: false,
    };
  },
  components: {
    AppSidebar: () => import("@/components/common/AppSidebar.vue"),
  },
  methods: {
    ActiveSidebarBtn: function() {
      this.ActiveSidebar = !this.ActiveSidebar;
    },
    ActiveSidebarClose: function() {
      this.ActiveSidebar = false;
    },
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

.menu-icon {
  filter: invert(100%);
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
  margin-left: -0.25rem;
}

.menu-icon-wrap ul {
  width: 22.5rem;
  height: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.menu-icon-wrap li:first-child {
  width: 17rem;
  height: 2rem;
  position: relative;
}

.menu-icon-wrap li {
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
