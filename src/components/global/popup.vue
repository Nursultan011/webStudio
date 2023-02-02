<template>
  <div v-if="modalState" class="popup">
    <form class="popup__form">
      <div @click="modalState = false" class="popup__close">X</div>
      <div class="popup__form-wrap" v-if="formStep == 1">
        <div class="title">Оставьте заявку</div>
        <div class="description">
          Оставьте ваши данные и мы свяжемся с вами в ближайшее время
        </div>
        <div class="text-field-group">
          <label for="name">Имя</label>
          <input
            v-model="form.name"
            required
            name="name"
            type="text"
            placeholder="Введите ваше имя"
          />
        </div>
        <div class="text-field-group">
          <label for="phone">Телефон</label>
          <input
            v-model="form.phone"
            required
            name="phone"
            type="phone"
            placeholder="Номер телефона"
          />
        </div>
        <div class="text-field-group">
          <label for="email">E-mail</label>
          <input
            v-model="form.email"
            name="email"
            type="email"
            placeholder="Введите адрес эль. почты"
          />
        </div>
        <button class="button" @click="sendRequest">Оставить заявку</button>
      </div>
      <div class="popup__form-wrap" v-else-if="formStep == 2">
        Форма успешно заполнено
      </div>
      <div class="popup__form-wrap" v-else-if="formStep == 3">Ошибка</div>
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
  overflow: scroll;
  background: rgba(0, 0, 0, 0.5);
  z-index: 4;
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
</style>
