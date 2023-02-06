<template>
  <section class="brief">
    <div class="container-fluid">
      <div class="brief__inner">
        <div class="brief__content">
          <div class="title">
            Хотите узнать стоимость разработки вашего сайта?
          </div>
          <div class="actions">
            <button class="button" @click="$router.push('/breif')">
              Заполнить бриф
            </button>
          </div>
        </div>
        <div class="brief__img">
          <img src="../../assets/images/breif-banner.png" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss">
.brief {
  margin-bottom: 50px;
  &__inner {
    background: #f9f9f9;
    width: 100%;
    display: flex;
    align-items: center;
  }
  &__content {
    width: 600px;
    padding: 40px 0 40px 40px;
    .title {
      font-size: 40px;
      line-height: 48px;
      color: #1e1e1e;
      font-weight: 800;
    }
    .actions {
      margin-top: 50px;
    }
  }
  &__img {
    padding: 35px 0 25px 0;
    width: calc(100% - 600px);
    height: 100%;
    display: flex;
    justify-content: center;
    img {
      max-width: 100%;
      max-height: 310px;
      object-fit: contain;
      object-position: left center;
    }
  }
}
</style>
