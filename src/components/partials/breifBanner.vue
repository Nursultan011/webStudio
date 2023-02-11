<template>
  <section class="brief">
    <div class="container-fluid">
      <div class="brief__inner">
        <div class="brief__content">
          <div class="title">
            {{ $t('brief.title') }}
          </div>
          <div class="actions">
            <button class="button" @click="$router.push('/breif')">
              {{ $t('brief.btn') }}
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
  padding-top: 80px;
  padding-bottom: 100px;
  background: white;
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
    padding: 0;
    width: calc(100% - 600px);
    height: 100%;
    display: flex;
    justify-content: center;
    img {
      max-width: 100%;
      max-height: 400px;
      margin-top: -80px;
      object-fit: contain;
      object-position: left center;
    }
  }
}

@media screen and (max-width: 767px) {
  .brief {
    &__inner {
      margin-top: 50px;
    }
    &__content {
      padding: 25px;
      .title {
        font-size: 28px;
        line-height: 32px;
      }
    }
  }
}
</style>
