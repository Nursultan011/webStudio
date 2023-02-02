<template>
  <section class="steps">
    <div class="container-fluid">
      <div class="steps__inner">
        <div class="steps__title">Этапы работы</div>
        <div class="steps__list">
          <div class="steps__item" v-for="(item, i) in step_list" :key="i">
            <div class="steps__item-icon">
              <img src="" alt="" />
              <!-- <img :src="require(`@/assets/icons/${item.icon}`)" alt="" /> -->
            </div>
            <div class="steps__item-title">
              {{ item.title }}
            </div>
            <div class="steps__item-description">
              {{ item.description }}
            </div>
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
    const step_list = ref([
      {
        icon: "",
        title: "Маркетинг и разработка макетов",
        description:
          "Анализ и построение архитектуры сайта (прототипов) на основе заключения маркетолога",
      },
      {
        icon: "",
        title: "Создание дизайна",
        description:
          "Разработка дизайна с возможностью внесения правок до полного утверждения с Заказчиком",
      },
      {
        icon: "",
        title: "Адаптивная верстка и программирование",
        description:
          "Мы используем новые технологии, которые легко поддерживаются и масштабируются",
      },
      {
        icon: "",
        title: "Наполнение контентом",
        description:
          "Команда опытных специалистов поможет вам сформировать необходимый контент, а также обучит пользоваться возможностями административной панели",
      },
      {
        icon: "",
        title: "Тестирование сайта и улучшение",
        description:
          "Тестируем сайт после запуска в течение 3-х месяцев для улучшения юзабилити и увеличения конверсии",
      },
    ]);

    return {
      step_list,
    };
  },
};
</script>

<style lang="scss">
.steps {
  margin: 100px 0;
  &__title {
    width: 100%;
    font-size: 50px;
    color: #1e1e1e;
    text-align: center;
    font-weight: 800;
    margin-bottom: 100px;
    text-align: center;
  }
  &__list {
    display: flex;
    justify-content: space-between;
  }
  &__item {
    width: 20%;
    &-icon {
      margin-bottom: 50px;
      display: flex;
      justify-content: center;
      img {
        width: 90px;
        height: 90px;
        object-fit: contain;
      }
    }
    &-title {
      font-size: 18px;
      line-height: 20px;
      margin-bottom: 20px;
      font-weight: 700;
      text-align: center;
      padding: 0 12px;
    }
    &-description {
      font-size: 14px;
      font-weight: 500;
      text-align: center;
      padding: 0 12px;
    }
  }
}
</style>
