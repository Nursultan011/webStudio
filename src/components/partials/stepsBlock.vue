<template>
  <section class="steps">
    <div class="container-fluid">
      <div class="steps__inner">
        <div class="steps__title">{{ $t('stepsTitle') }}</div>
        <div class="steps__list">
          <div
            class="steps__item"
            v-for="(item, i) in $t('steps')"
            :key="i"
            data-aos="fade-up"
          >
            <div class="steps__item-icon"  v-html="item.icon"></div>
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

<style lang="scss">
.steps {
  background: white;
  padding: 100px 0;
  &__title {
    width: 100%;
    font-size: 50px;
    color: #1e1e1e;
    text-align: center;
    font-weight: 800;
    margin-bottom: 100px;
  }
  &__list {
    display: flex;
    justify-content: space-between;
  }
  &__item {
    width: 20%;
    &-icon {
      margin-bottom: 36px;
      display: flex;
      justify-content: center;
      svg {
        width: 100px;
      }
    }
    &-title {
      font-size: 18px;
      line-height: 20px;
      margin-bottom: 12px;
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

@media screen and (max-width: 767px) {
  .steps {
    padding-top: 20px;
    &__title {
      font-size: 26px;
      text-align: left;
      margin-bottom: 40px;
    }
    &__list {
      flex-wrap: wrap;
    }
    &__item {
      width: 100%;
      & + .steps__item {
        margin-top: 15px;
        border-top: 0.7px solid #1e1f20;
        padding-top: 15px;
      }
      &-icon {
        display: none;
      }
      &-title {
        text-align: left;
      }
      &-description {
        text-align: left;
      }
    }
  }
}
</style>
