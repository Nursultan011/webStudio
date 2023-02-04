<template>
  <header class="header">
    <div class="container-fluid d-flex justify-space-between align-center">
      <div class="header__logo">
        <router-link to="/">Digital <span>Lab</span></router-link>
      </div>
      <div class="header__btns d-flex justify-space-between align-center">
        <div class="header__btns-request">
          <button>Получить предложение</button>
        </div>
        <div class="header__btns-langs">
          <button id="ruBtn">РУ</button>
          <button id="enBtn">EN</button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { ref, watchEffect } from "vue";

export default {
  setup() {
    watchEffect(() => {
      console.log(window.scrollY);
    });

    return {};
  },
};
</script>

<style lang="scss" scoped>
.header {
  position: absolute;
  width: 100%;
  padding: 35px 0;
  z-index: 5;
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
        }
      }
    }
    &-langs {
      button {
        color: white;
        background: none;
        border: none;
        font-weight: 500;
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
</style>
