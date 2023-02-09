<template>
  <header class="header">
    <div class="container-fluid d-flex justify-space-between align-center">
      <div class="header__logo">
        <router-link to="/">Digital <span>Lab</span></router-link>
      </div>
      <div class="header__btns d-flex justify-space-between align-center">
        <div class="header__btns-request">
          <button @click="openPopup">{{ $t("message.header_cta_btn") }}</button>
        </div>
        <div class="header__btns-langs">
          <button
            id="ruBtn"
            @click="localeChange('ru')"
            :class="{ active: true ? $i18n.locale == 'ru' : false }"
          >
            РУ
          </button>
          <button
            id="enBtn"
            @click="localeChange('en')"
            :class="{ active: true ? $i18n.locale == 'en' : false }"
          >
            EN
          </button>
        </div>
      </div>
    </div>
    <Popup :activePopup="activePopup" @close="activePopup = false" />
  </header>
</template>

<script>
import { ref, watchEffect } from "vue";
import { i18n } from "../../main";
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

    const langs = ref(["ru", "en"]);

    const localeChange = (val) => {
      i18n.locale = val;
    };

    return {
      langs,
      localeChange,
      activePopup,
      openPopup,
    };
  },
};
</script>

<style lang="scss">
.header {
  position: absolute;
  width: 100%;
  padding: 35px 0;
  z-index: 5;
  transition: 0.25s ease-in;
  &__logo {
    a {
      color: white;
    }
    text-transform: uppercase;
    font-family: "Raleway", sans-serif;
    font-size: 28px;
    font-weight: 800;
    z-index: 3;
    span {
      font-weight: 200;
    }
  }
  &__btns {
    &-request {
      display: none;
      margin-right: 30px;
      button {
        border: 2px solid white;
        background: none;
        padding: 10px 25px;
        color: white;
        transition: 0.2s;
        font-weight: 500;
        &:hover {
          background: white;
          color: black;
          cursor: pointer;
        }
      }
    }
    &-langs {
      select {
        cursor: pointer;
        border: 1.5px solid white;
        color: white;
        width: 60px;
        height: 28px;
        font-size: 16px;
        padding: 0;
        font-weight: 500;
        background: transparent;
        appearance: none;
      }
      .active {
        border-bottom: 1.5px solid #fff243 !important;
        color: #fff243 !important;
        font-size: 14px !important;
        font-weight: 700 !important;
      }
      button {
        color: white;
        background: none;
        border: none;
        font-weight: 500;
        font-size: 14px;
        transition: 0.3s;
        &:hover {
          cursor: pointer;
        }
      }
      #ruBtn {
        margin-right: 5px;
      }
    }
  }
}
.header.sticky {
  background: white;
  position: fixed;
  padding: 20px 0;
  .header__logo {
    a {
      color: black;
    }
  }
  .header__btns {
    &-request {
      display: block;
      button {
        color: black;
        border: 2px solid black;
        &:hover {
          background: black;
          color: white;
        }
      }
    }
    &-langs {
      button {
        color: black;
      }
    }
  }
}

@media screen and (max-width: 767px) {
  .header {
    padding: 20px 0;
    &__btns-request {
      display: none !important;
    }
    &__logo {
      font-size: 24px;
    }
  }
}
</style>
