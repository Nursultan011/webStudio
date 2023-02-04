<template>
  <section class="main">
    <div class="container-fluid">
      <div class="main__bg">D</div>
      <div class="main__inner">
        <header></header>
        <div class="content">
          <div class="main__contact-phone">
            <a href="tel:+77019997660">+7 (701) 999 76 60</a>
          </div>
          <h1>Разработка и продвижение сайтов на высоком уровне</h1>
          <div class="main__request" @click="openPopup">
            <span> Оставьте заявку на расчет стоимости сайта </span>
            <img src="../../assets/icons/arrow-right.svg" alt="" />
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
  &__bg {
    position: absolute;
    left: -6vw;
    top: -13vw;
    text-shadow: 0 40px 70px rgba(0, 0, 0, 0.4);
    font-weight: 800;
    font-size: 44vw;
    font-family: "Raleway", sans-serif;
    color: #272727;
    opacity: 0.8;
  }
  &__contact-phone {
    color: white;
    transform: rotate(270deg);
    font-size: 24px;
    font-weight: 700;
    position: fixed;
    right: 0;
    top: 50vh;
    text-transform: uppercase;
    a {
      text-decoration: none;
      color: white;
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
        font-size: 56px;
        line-height: 60px;
        color: #fefefe;
        font-weight: 700;
        pointer-events: none;
        z-index: 2;
        max-width: 700px;
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
    &__inner {
      .content {
        h1 {
          font-size: 24px;
          line-height: 40px;
        }
      }
    }
  }
}
</style>
