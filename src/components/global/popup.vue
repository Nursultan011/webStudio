<template>
  <div v-if="modalState" class="popup">
    <form class="popup__form"
          @submit.prevent="sendRequest"
          data-aos="zoom-in"
          data-aos-duration="500"
    >
      <div @click="modalState = false"
           class="popup__close"
      >X</div>
      <div class="popup__form-wrap" v-if="formStep == 1">
        <div class="title">{{ $t('popup.title') }}</div>
        <div class="description">
          {{ $t('popup.descr') }}
        </div>
        <div class="text-field-group">
          <label for="name">{{ $t('popup.form.name.label') }}</label>
          <input
            v-model="form.name"
            required
            name="name"
            type="text"
            :placeholder="$t('popup.form.name.input')"
          />
        </div>
        <div class="text-field-group">
          <label for="phone">{{ $t('popup.form.phone.label') }}</label>
          <input
            v-model="form.phone"
            required
            name="phone"
            type="phone"
            :placeholder="$t('popup.form.phone.input')"
          />
        </div>
        <div class="text-field-group">
          <label for="email">{{ $t('popup.form.email.label') }}</label>
          <input
            v-model="form.email"
            name="email"
            type="email"
            :placeholder="$t('popup.form.email.input')"
          />
        </div>
        <button class="button" type="submit">{{ $t('popup.form.btn') }}</button>
      </div>
      <div class="popup__form-wrap" v-else-if="formStep == 2">
        {{ $t('popup.form.success') }}
      </div>
      <div class="popup__form-wrap" v-else-if="formStep == 3">{{ $t('popup.form.failed') }}</div>
    </form>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import axios from "axios";
export default {
  props: ["activePopup"],
  setup(props, context) {
    axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;
    const formStep = ref(1);
    const form = ref({
      type: 1,
      name: "",
      phone: "",
      email: "",
    });

    const modalState = computed({
      get() {
        return props.activePopup;
      },
      set(value) {
        return context.emit("close", value);
      },
    });

    const sendRequest = () => {
      axios
        .post("api/send_contact_form", form.value)
        .then((res) => {
          console.log(res);
          formStep.value = 2;
        })
        .catch((e) => {
          console.log(e);
          formStep.value = 3;
        });
    };

    return {
      modalState,
      form,
      formStep,
      sendRequest,
    };
  },
};
</script>

<style lang="scss">
.popup {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.5);
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  &__close {
    position: absolute;
    cursor: pointer;
    right: 30px;
    top: 30px;
    font-size: 24px;
    font-weight: 500;
  }
  &__form {
    margin: 20px 0;
    text-align: left;
    white-space: normal;
    position: relative;
    width: 570px;
    background: #fefefe;
    padding: 65px 15px 0;
    max-width: 100%;
    max-height: 90vh;
    overflow: auto;
    &-wrap {
      margin: 0 auto;
      max-width: 370px;
      width: 100%;
      padding-bottom: 50px;
    }
    .title {
      width: 100%;
      font-size: 25px;
      text-align: center;
      color: #1e1e1e;
      font-weight: 900;
    }
    .description {
      margin-top: 30px;
      line-height: 25px;
      font-size: 16px;
      color: #1e1e1e;
      text-align: center;
      width: 100%;
      margin-bottom: 45px;
    }
    .text-field-group {
      width: 100%;
      margin-bottom: 15px;
      label {
        display: inline-block;
        margin-bottom: 10px;
        font-size: 12px;
        color: #a0a0a0;
      }
      input {
        width: 100%;
        padding: 12px 20px;
        font-size: 15px;
        border-radius: 2px;
        border: 1px solid #ddd;
        background: 0 0;
        -webkit-transition: 0.3s;
        -o-transition: 0.3s;
        transition: 0.3s;
      }
    }
    .button {
      margin-top: 45px;
      text-align: center;
      margin-left: auto;
      margin-right: auto;
    }
  }
}

@media screen and (max-width: 767px) {
  .popup {
    &__form {
      max-width: calc(100% - 32px);
    }
  }
}
</style>
