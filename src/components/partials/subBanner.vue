<template>
  <section class="sub-banner">
    <div class="container-fluid">
      <div class="sub-banner__inner">
        <div class="sub-banner__content">
          <div class="title">Обсудим проект?</div>
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
    width: 100%;
    display: flex;
    align-items: center;
    background-image: url("/img/sentence-banner.437096ab.png");
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
      margin-bottom: 32px;
      font-size: 40px;
      color: #1e1e1e;
      font-weight: 800;
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

@media screen and (max-width: 767px) {
  .sub-banner {
    &__content {
      width: 100%;
      padding: 30px;
      background-color: transparent;
      .title {
        font-size: 28px;
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
