<template>
  <section class="about">
    <div class="container">
      <div class="about__inner">
        <div class="about__card" v-for="(item, i) in about_info" :key="i">
          <div class="about__card-img">
            <img src="" alt="" />
          </div>
          <div class="about__card-title">{{ item.title }}</div>
          <div class="about__card-description">
            <p v-for="(descr, index) in item.descr_list" :key="index">
              {{ descr }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const about_info = ref([
      {
        title: "Разработка сайтов",
        descr_list: [
          "Разработка информационных сайтов",
          "Разработка интернет-магазинов и сайтов каталогов",
          "Разработка Landing Page и квиз сайтов",
          "Разработка высокотехнологичных сайтов",
          "Создание фото и видео контента",
          "Копирайтинг",
        ],
      },
      {
        title: "Реклама и продвижение",
        descr_list: [
          "SEO (в поисковых системах)",
          "Таргетированная реклама",
          "Контекстная реклама (Яндекс.Директ, Google.Adwords)",
          "SMM/SMO (в соц. сетях)",
          "Промо видео (youtube, телевидение...)",
          "Аналитика и A/B тестирование для максимального эффекта от рекламы",
        ],
      },
      {
        title: "Дизайн и брендинг",
        descr_list: [
          "Логотип и фирменный стиль",
          "Полиграфическая продукция",
          "Упаковка",
          "Наружная реклама",
          "Сайты и веб-сервисы",
          "Мобильные приложения",
          "Моушн дизайн",
          "3D визуализация",
          "Промышленный дизайн",
          " Дизайн архитектурной среды",
        ],
      },
      {
        title: "Разработка мобильных приложений",
        descr_list: ["Android", "iOS", "Windows", "Разработка игр"],
      },
    ]);

    return {
      about_info,
    };
  },
};
</script>

<style lang="scss">
.about {
  padding: 100px 0;
  &__inner {
    display: flex;
    justify-content: space-between;
  }
  &__card {
    width: calc(25% - 22.5px);
    &-img {
      margin-bottom: 35px;
      img {
        width: 80px;
        height: 54px;
        object-fit: contain;
      }
    }
    &-title {
      font-size: 27px;
      color: #000;
      font-weight: 800;
      min-height: 135px;
      border-bottom: 1px solid #c8c8c8;
    }
    &-description {
      padding-top: 15px;
      margin-left: 15px;
      p {
        margin: 0;
        padding: 10px 0 10px 10px;
        font-size: 15px;
        color: #000;
        font-weight: 500;
        line-height: 25px;
        position: relative;
        &::before {
          content: "";
          background: #ffe34a;
          width: 7px;
          height: 7px;
          position: absolute;
          left: 0;
          top: 20px;
          left: -10px;
        }
      }
    }
  }
}
</style>
