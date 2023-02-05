<template>
  <section class="sub-banner">
    <div class="container-fluid">
      <div class="sub-banner__inner">
        <div class="sub-banner__content">
          <div class="icon">
            <img src="../../assets/icons/banner-icon.svg" alt="" />
          </div>
          <div class="title">Создадим сайт для вашего бизнеса за 14 дней с гарантией возврата средств</div>
          <div class="actions">
            <span>Оставьте заявку, и наш менеджер свяжется с вами в ближайшее время</span>
          </div>
          <form class="form">
            <input class="text-field" type="tel" placeholder="Телефон" />
            <button class="button">Обсудить проект</button>
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
export default {};
</script>

<style lang="scss">
.sub-banner {
  margin-bottom: 50px;
  &__inner {
    background-image: url("../../assets/images/sentence-banner.png");
    background-size: contain;
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
      font-size: 20px;
      line-height: 30px;
      margin-bottom: 16px;
      font-weight: 800;
    }
    .actions {
      span {
        display: block;
        font-weight: 500;
        font-size: 18px;
        opacity: .65;
        line-height: 23px;
        margin-bottom: 32px;
      }
    }
    .form {
      display: flex;
      align-items: center;
      input {
        height: 35px;
      }
      button {
        height: 35px;
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
</style>
