<template>
  <section class="sub-banner">
    <div class="container">
      <div class="sub-banner__inner">
        <div class="sub-banner__content">
          <div class="icon">
            <img src="../../assets/icons/banner-icon.svg" alt="" />
          </div>
          <div class="title">
            Готовое мобильное приложение для доставки еды и каталога товаров
          </div>
          <div class="actions">
            <span>От 4 500 руб. в месяц</span>
            <button class="button">О приложении</button>
          </div>
        </div>
        <div class="sub-banner__img">
          <img src="../../assets/images/banner-image.png" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.sub-banner {
  margin-bottom: 50px;
  &__inner {
    background: #f9f9f9;
    width: 100%;
    display: flex;
    align-items: flex-end;
  }
  &__content {
    width: 50%;
    padding: 50px;
    .icon {
      margin-bottom: 32px;
      img {
        width: 35px;
        height: 40px;
        object-fit: contain;
      }
    }
    .title {
      font-size: 24px;
      line-height: 30px;
      margin-bottom: 32px;
      font-weight: 800;
    }
    .actions {
      span {
        display: block;
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
        margin-bottom: 32px;
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
</style>
