<template>
  <div id="mainBanner">
    <div class="banner">
      <div class="swiper-content-wrap">
        <div class="swiper-container swiper-main-banner">
          <div class="swiper-wrapper">
            <div class="swiper-slide banner-content01">
              <div class="banner-video">
                <div class="banner-video-text">
                  <div>
                    <p>NEW</p>
                    <img
                      src="@/assets/image/icons/next.png"
                      alt="next-animation"
                      width="25"
                      height="25"
                    />
                    <p>
                      MODE II<br />
                      <span>Full Overview</span>
                    </p>
                  </div>
                </div>

                <div class="banner-background">
                  <p>01</p>
                  <video muted autoplay loop>
                    <source
                      src="@/assets/video/content01-video.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>

              <div class="banner-image"></div>
              <div class="banner-title"></div>
              <div class="banner-goods-text">
                <p>
                  TRUE<br />WIRELESS,<br />BUILT FOR LOUD<br />
                  <span>WITH 25 HOURS OF WIRELESS PLAYTIME</span>
                </p>
                <button>VIEW MORE</button>
              </div>
            </div>
            <!--banner-content01-->

            <div class="swiper-slide banner-content02">
              <div class="banner-video">
                <div class="banner-video-text">
                  <div>
                    <p>ORIGINAL</p>
                    <img
                      src="@/assets/image/icons/next.png"
                      alt="next-animation"
                      width="25"
                      height="25"
                    />
                    <p>
                      MONITOR II A.N.C.<br />
                      <span>Full Overview</span>
                    </p>
                  </div>
                </div>

                <div class="banner-background">
                  <p>02</p>
                  <video muted autoplay loop>
                    <source
                      src="@/assets/video/content02-video.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
              <div class="banner-image"></div>
              <div class="banner-goods-text">
                <p>
                  SUPERIOR<br />SIGNATURE SOUND<br />
                  <span>WITH ACTIVE NOISE CANCELLING</span>
                </p>
                <button>VIEW MORE</button>
              </div>
            </div>
            <!--banner-content02-->

            <div class="swiper-slide banner-content03">
              <div class="banner-video">
                <div class="banner-video-text">
                  <div>
                    <p>PORTABLE</p>
                    <img
                      src="@/assets/image/icons/next.png"
                      alt="next-animation"
                      width="25"
                      height="25"
                    />
                    <p>
                      STOCKWELL II<br />
                      <span>Full Overview</span>
                    </p>
                  </div>
                </div>

                <div class="banner-background">
                  <p>03</p>
                  <video muted autoplay loop>
                    <source
                      src="@/assets/video/content03-video.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
              <div class="banner-image"></div>
              <div class="banner-goods-text">
                <p>
                  TRAVELS LIGHT,<br />
                  SOUNDS HEAVY<br />
                  <span
                    >Built for life on the road, this compact <br />
                    portable speaker offers 20+ hours of playtime.</span
                  >
                </p>
                <button>VIEW MORE</button>
              </div>
            </div>
            <!--banner-content03-->
          </div>
          <!--swiper-wrapper-->

          <div class="swiper-pagination"></div>

          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
        <!--swiper-container-->
      </div>
      <!--swiper-content-wrap-->
    </div>
    <!--banner-->
  </div>
</template>
<script>
import $ from "jquery";
import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";
export default {
  name: "MainBanner",
  mounted() {
    //main banner swiper
    let myArray = ["01", "01", "02", "03"];
    // eslint-disable-next-line no-unused-vars
    let swiper = new Swiper(".swiper-main-banner", {
      loop: true,
      effect: "fade",
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function(index, className) {
          return (
            '<span class="' + className + '">' + myArray[index + 1] + "</span>"
          );
        },
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    //banner-video에 hover시 autoplay멈춤
    $(".swiper-main-banner").each(function(elem, target) {
      let swp = target.swiper;
      $(".banner-video, .banner-goods-text button").hover(
        function() {
          swp.autoplay.stop();
        },
        function() {
          swp.autoplay.start();
        }
      );
    });
  },
};
</script>

<style scoped>
/*banner*/
#mainBanner {
  width: 100%;
  height: 100vh;
  position: relative;
}
.banner {
  width: 100%;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
}

/*swiper-content-wrap*/
.swiper-content-wrap {
  width: 100%;
  height: 100%;
}

/*swiper-container*/
.swiper-container {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  width: 100%;
  height: 100%;
  font-size: 18px;
}

/*common*/

/*.banner-video*/
.banner-video {
  position: absolute;
  top: 10rem;
  right: 3rem;
  width: 23rem;
  height: 12.95rem;
  z-index: 2;
  overflow: hidden;
  cursor: pointer;
}

.banner-video-text {
  width: 75%;
  height: 100%;
  background: rgba(15, 15, 16, 1);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  transition: all 0.35s;
}

.banner-video:hover .banner-video-text {
  position: absolute;
  left: -75%;
}

.banner-video-text div {
  width: 75%;
  height: 70%;
  display: grid;
  grid-template-rows: 3fr 1fr 1fr;
}

.banner-video-text div p:first-child {
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.5rem;
  text-align: center;
  width: 2rem;
  height: 1.5rem;
}

.banner-video-text div p:last-child {
  line-height: 1.25rem;
  font-weight: bold;
}

.banner-video-text div p:last-child span {
  font-size: 0.75rem;
  font-weight: 300;
}

.banner-video-text img {
  animation-duration: 1s;
  animation-name: img-next;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  margin: 0 0 0.75rem 0.5rem;
  opacity: 0.85;
}

/*banner-video-wrap img*/

@keyframes img-next {
  from {
    margin-left: 5%;
  }

  to {
    margin-left: 0%;
  }
}

.banner-background {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.banner-background video {
  width: 100%;
  height: 100%;
}

.banner-background p {
  position: absolute;
  top: 2rem;
  right: 2rem;
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
}

.banner-content01 > .banner-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(25, 25, 25, 0)),
    url(../assets/image/banner/content01-banner-img.jpg) no-repeat center /
      cover;
  z-index: 1;
}

.banner-content02 > .banner-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(16, 16, 16, 0.7), rgba(25, 25, 25, 0)),
    url(../assets/image/banner/content02-banner-img.jpg) no-repeat center /
      cover;
  z-index: 1;
}

.banner-content03 > .banner-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(16, 16, 16, 0.7), rgba(25, 25, 25, 0)),
    url(../assets/image/banner/content03-banner-img.jpg) no-repeat center /
      cover;
  z-index: 1;
}

.banner-goods-text {
  width: 30rem;
  height: 20rem;
  position: absolute;
  top: 24.75rem;
  left: 10rem;
  transform: translateY(-45%);
  color: #fff;
  z-index: 1;
}

.banner-goods-text p {
  font-size: 3rem;
  line-height: 3.5rem;
  font-weight: bold;
}

.banner-goods-text span {
  font-size: 1.25rem;
  line-height: 1.25rem;
  font-weight: 500;
}

.banner-content03 > .banner-goods-text p span {
  font-size: 1.25rem;
  line-height: 1.75rem;
  display: inline-block;
  margin-top: 1.5rem;
}

.banner-goods-text button {
  border: 1px solid #fff;
  background: none;
  width: 12rem;
  height: 3rem;
  font-weight: bold;
  color: #fff;
  font-size: 0.85rem;
  letter-spacing: 0.05rem;
  position: absolute;
  left: 0;
  bottom: 0;
  border-radius: 10rem;
  cursor: pointer;
}

.banner-goods-text button:hover {
  background-color: #fff;
  color: rgba(15, 15, 16, 1);
  transition: all 0.5s;
}

/* Swiper Custom */

/*.swiper-pagination-bullet*/
.swiper-pagination >>> .swiper-pagination-bullet {
  width: 3rem;
  height: 3rem;
  text-align: center;
  line-height: 20px;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.35);
  opacity: 1;
  background-color: transparent;
  text-align: left;
}

.swiper-pagination >>> .swiper-pagination-bullet-active {
  color: #fff;
  font-size: 1.5rem;
}

.swiper-container-horizontal > .swiper-pagination-bullets,
.swiper-pagination-custom,
.swiper-pagination-fraction {
  /*page number*/
  top: 16.5rem;
  left: 3rem;
  width: 3rem;
  height: 7rem;
  display: flex;
  flex-direction: column;
  text-align: left;
  color: #fff;
}

.swiper-button-prev,
.swiper-button-next {
  position: absolute;
  width: calc(var(--swiper-navigation-size) / 44 * 27);
  height: var(--swiper-navigation-size);
  z-index: 10;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  margin-top: 17rem;
}

.swiper-button-prev {
  left: 10rem;
}
.swiper-button-next {
  left: 14rem;
}
</style>
