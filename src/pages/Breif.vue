<template>
  <div>
    <header-block class="breif-header" />
    <section class="breif">
      <div class="container">
        <div class="breif__inner">
          <div class="title">Мы ценим Ваше время!</div>
          <div class="description">
            Именно поэтому, мы предлагаем Вам экспресс-бриф - всего за 1-3
            минуты вы опишите, что Вам нужно
          </div>
          <form class="breif__form" @submit.prevent="breifSubmit">
            <div class="breif__item">
              <div class="title">Данные о компании</div>
              <div class="breif__card">
                <div class="text-field-group">
                  <label for="">Опишите Вашу задачу</label>
                  <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
                <div class="text-field-group">
                  <label for="">Название компании</label>
                  <input type="text" placeholder="" />
                </div>
                <div class="breif__card-title">
                  Контактные данные для представления на сайте
                </div>
                <div class="text-field-group">
                  <label for="">Ваше имя</label>
                  <input type="text" placeholder="" />
                </div>
                <div class="text-field-group">
                  <label for="">Телефон</label>
                  <input type="text" placeholder="" />
                </div>
                <div class="text-field-group">
                  <label for="">E-mail</label>
                  <input type="text" placeholder="" />
                </div>
                <div class="breif__card-title">
                  Чем занимается Ваша компания
                </div>
                <div class="text-field-group">
                  <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
                <div class="breif__card-title">
                  Основные преимущества Вашей компании
                </div>
                <div class="text-field-group">
                  <input type="text" placeholder="" />
                </div>
                <div class="breif__card-title">Отличия от конкурентов</div>
                <div class="text-field-group">
                  <label for="">
                    Основные преимущества Вашего товара или услуги, отличия от
                    конкурентов
                  </label>
                  <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
                <div class="breif__card-title">Информация о конкурентах</div>
                <div class="text-field-group">
                  <label for="">
                    Имеющиеся конкуренты - название компаний и их сайты
                  </label>
                  <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
              </div>
            </div>
            <div class="breif__item">
              <div class="title">Кто Ваша целевая аудитория?</div>
              <div class="breif__card">
                <div class="text-field-radio">
                  <input type="radio" id="one" value="One" v-model="picked" />
                  <label for="one">Мужчины</label>
                  <input type="radio" id="two" value="Two" v-model="picked" />
                  <label for="two">Женщины</label>
                  <input type="radio" id="two" value="Two" v-model="picked" />
                  <label for="two">Мужчины и Женщины</label>
                </div>
                <div class="text-field-group">
                  <label for="">Возраст</label>
                  <input type="text" placeholder="" />
                </div>
                <div class="text-field-group">
                  <label for="">Уровень дохода</label>
                  <input type="text" placeholder="" />
                </div>
                <div class="text-field-group">
                  <label for="">Основная причина обращения к Вам</label>
                  <input type="text" placeholder="" />
                </div>
              </div>
            </div>
            <button class="button" type="submit">Отправить</button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
export default {
  components: {
    headerBlock: () => import("../components/global/header.vue"),
  },
  setup() {
    const form = ref({
      company_info: {
        describe: "",
        company_name: "",
        name: "",
        phone: "",
        email: "",
      },
      target_audience: {
        gender: "",
        age: "",
      },
    });

    const breifSubmit = () => {
      axios.post("/example/", form.value);
    };

    return {
      form,
      breifSubmit,
    };
  },
};
</script>

<style lang="scss">
.breif {
  &-header {
    position: fixed !important;
    background: white !important;
    .header__logo {
      a {
        color: black !important;
      }
    }
    .header__btns-request {
      display: block !important;
      button {
        color: black !important;
        border: 1px solid black !important;
      }
    }
    .header__btns-langs {
      button {
        color: black !important;
      }
    }
  }
  &__inner {
    padding: 200px 70px 0;
    .title {
      font-size: 26px;
      font-weight: 800;
      margin: 0;
    }
    .description {
      font-size: 16px;
      margin: 16px 0;
    }
  }
  &__form {
    margin-top: 70px;
    padding-bottom: 50px;
  }
  &__card {
    border: none;
    padding: 50px;
    background: #f4f4f4;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 30px;
    &-title {
      margin-top: 40px;
      margin-bottom: 20px;
      padding-bottom: 10px;
      border-bottom: 1px solid #e8e8e8;
      font-weight: 500;
    }
    .text-field-group {
      label {
        display: block;
        margin: 15px 0;
        font-size: 14px;
      }
      textarea {
        resize: none;
        width: 100%;
        height: 200px;
        border: 1px solid #e8e8e8;
        overflow: auto;
      }
      input {
        width: 100%;
        border: 1px solid #e8e8e8;
        padding: 13px;
        overflow: visible;
      }
    }
    .text-field-radio {
      display: flex;
      align-items: center;
      margin-bottom: 40px;
      label {
        margin-left: 5px;
        margin-right: 20px;
      }
    }
  }
}

@media screen and (max-width: 767px) {
  .breif {
    &-header {
      .header__btns-request {
        display: none !important;
      }
    }
    &__inner {
      padding: 120px 0 0 0;
    }
    &__form {
      margin-top: 40px;
    }
    &__card {
      padding: 20px;
      .text-field-radio {
        display: none;
      }
    }
  }
}
</style>
