<template>
  <section class="sub-banner">
    <div class="container-fluid">
      <div class="sub-banner__inner">
        <div class="sub-banner__content" data-aos="fade-right">
          <div class="title">{{ $t("subBanner.title") }}</div>
          <div class="description">{{ $t("subBanner.descr") }}</div>
          <form class="form" @submit.prevent="send">
            <input
              @change="validateTrig"
              v-model="form.phone"
              class="text-field"
              type="tel"
              required
              :placeholder="$t('subBanner.form.input')"
            />
            <button class="button" type="submit" :disabled="disabled">
              {{ $t("subBanner.form.btn") }}
            </button>
          </form>
        </div>
        <div class="sub-banner__img">
          <img src="../../assets/images/banner-image.png" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import { ref, watchEffect } from "vue";

export default {
  setup() {
    const disabled = ref(true);
    const form = ref({
      type: 2,
      phone: "",
    });

    const send = () => {
      axios
        .post("api/send_contact_form", form.value)
        .then((res) => {
          console.log(res);
          alert(res.data.message);
        })
        .catch((e) => {
          console.log(e);
        });
    };

    const validateTrig = () => {
      if (form.value.phone.length) {
        disabled.value = false;
      } else {
        disabled.value = true;
      }
    };

    return {
      form,
      send,
      disabled,
      validateTrig,
    };
  },
};
</script>

<style lang="scss">
.sub-banner {
  padding-bottom: 50px;
  background: white;
  &__inner {
    width: 100%;
    display: flex;
    align-items: center;
    background-image: url("../../assets/images/sentence-banner.png");
    background-repeat: no-repeat;
    background-size: cover;
    -o-object-position: center center;
    object-position: center center;
  }
  &__content {
    width: 50%;
    padding: 50px;
    background-color: #f9f9f9;
    .title {
      margin-bottom: 15px;
      font-size: 24px;
      color: #1e1e1e;
      font-weight: 800;
    }
    .description {
      margin-bottom: 36px;
      font-size: 16px;
      font-weight: 500;
      opacity: 0.7;
    }
    .form {
      display: flex;
      align-items: center;
      input {
        height: 45px;
      }
      button {
        height: 45px;
        padding: 0 30px;
        margin-left: 30px;
      }
    }
  }
  &__img {
    padding-top: 50px;
    width: 50%;
    display: flex;
    justify-content: center;
    img {
      width: 300px;
      height: 300px;
      object-fit: contain;
      object-position: left bottom;
    }
  }
}
@media screen and (max-width: 767px) {
  .sub-banner {
    &__content {
      width: 100%;
      padding: 30px;
      background-color: transparent;
      .title {
        font-size: 20px;
      }
      .form {
        flex-wrap: wrap;
        input {
          width: 100%;
        }
        button {
          margin-left: 0;
          margin-top: 20px;
        }
      }
    }
    &__img {
      display: none;
    }
  }
}
</style>
