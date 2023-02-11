<template>
  <section class="main">
    <div class="container-fluid">
      <div class="main__bg">
        <div class="d" data-aos-duration="2000">D</div>
        <div class="geek-img">
          <img src="../../assets/images/geek-img.svg" alt="" />
        </div>
      </div>

      <div class="main__inner">
        <header></header>
        <div class="content">
          <h1 data-aos="fade-left" data-aos-duration="800" data-aos-offset="0">
            {{ $t("message.main_title") }}
          </h1>
          <div
            class="main__request"
            @click="openPopup"
            data-aos="fade-left"
            data-aos-duration="1200"
          >
            <span> {{ $t("message.cta_btn") }} </span>
            <img src="../../assets/icons/arrow-right.svg" alt="" />
          </div>
          <div class="main__geek-img">
            <img src="../../assets/images/geek-img.svg" alt="" />
          </div>
          <a class="main__email-link" href="mailto:info@digital-lab.kz">
            info@digital-lab.kz
          </a>
        </div>
        <a class="scroll">
          <img src="../../assets/icons/arrow-down.svg" alt="" />
        </a>
      </div>
    </div>
    <Popup :activePopup="activePopup" @close="activePopup = false" />
  </section>
</template>

<script>
import { ref } from "vue";
export default {
  components: {
    Popup: () => import("../global/popup.vue"),
  },
  setup() {
    const activePopup = ref(false);

    const openPopup = () => {
      activePopup.value = true;
      console.log(activePopup.value);
    };

    return {
      activePopup,
      openPopup,
    };
  },
};
</script>

<style lang="scss">
.main {
  background-color: #1e1f20;
  min-height: 100vh;
  &__geek-img {
    display: none;
  }
  .geek-img {
    position: absolute;
    top: 10vh;
    right: 11vw;
    display: flex;
    justify-content: center;
    vertical-align: middle;
    height: 100%;
    width: 40%;
    padding: 0 1% 0 0;
    img {
      width: 100%;
      height: 75%;
      display: block;
    }
  }
  &__bg {
    position: absolute;
    right: 10vw;
    top: 0;
    text-shadow: 0 40px 70px rgba(0, 0, 0, 0.4);
    font-weight: 800;
    font-size: 44vw;
    font-family: "Raleway", sans-serif;
    color: #272727;
    opacity: 0.8;
    & > .d {
      font-size: 100%;
      height: 100%;
      display: block;
    }
  }
  &__inner {
    min-height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 50px;
    .content {
      h1 {
        font-size: 48px;
        line-height: 60px;
        color: #fefefe;
        font-weight: 700;
        pointer-events: none;
        z-index: 2;
        max-width: 55%;
      }
    }
    .scroll {
      position: relative;
      display: flex;
      justify-content: center;
      -webkit-animation: scrollDown 1s infinite alternate;
      animation: scrollDown 1s infinite alternate;
      img {
        width: 16px;
        height: 18px;
        cursor: pointer;
      }
    }
  }
  &__email-link {
    position: absolute;
    right: 0;
    bottom: 5vh;
    text-decoration: none;
    color: #6d6d6d;
    font-size: 14px;
    font-weight: 700;
    transition: 0.2s;
    &:hover {
      color: white;
    }
  }
  &__request {
    display: flex;
    align-items: center;
    margin-top: 50px;
    transition: 0.3s;
    cursor: pointer;
    &:hover {
      img {
        margin-left: 18px;
      }
    }
    span {
      font-size: 18px;
      line-height: 20px;
      font-weight: 700;
      color: #fff243;
      cursor: pointer;
      text-decoration: none;
      pointer-events: all;
      z-index: 2;
    }
    img {
      margin-left: 12px;
      transition: 0.4s;
    }
  }
}

@-webkit-keyframes scrollDown {
  from {
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
  }
  to {
    -webkit-transform: translateY(50%);
    transform: translateY(50%);
    opacity: 0.5;
  }
}

@keyframes scrollDown {
  from {
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    opacity: 1;
  }
  to {
    -webkit-transform: translateY(50%);
    transform: translateY(50%);
    opacity: 0.5;
  }
}

@media screen and (max-width: 767px) {
  .main {
    &__geek-img {
      position: absolute;
      display: block;
      height: 400px;
      margin-top: 30px;
      img {
        height: 100%;
      }
    }
    .geek-img {
      display: none;
    }
    &__inner {
      padding-bottom: 100px;
      .content {
        h1 {
          font-size: 26px;
          line-height: 34px;
          max-width: 100%;
        }
      }
    }
    &__request {
      margin-top: 30px;
      span {
        font-size: 16px;
        line-height: 26px;
        font-weight: 800;
        max-width: 70%;
      }
    }
    &__contact-phone {
      display: none;
    }
    &__email-link {
      display: none;
    }
    &__bg {
      left: -10vw;
      bottom: 0vw;
      font-size: 130vw;
      top: unset;
    }
  }
}
</style>
