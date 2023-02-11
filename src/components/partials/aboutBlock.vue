<template>
  <section class="about">
    <div class="container-fluid">
      <div class="about__inner">
        <div
          class="about__card"
          v-for="(service, index) in $t('services')" :key="index"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div class="about__card-img">
            <img
              :src="require(`../../assets/icons/ico${index + 1}.svg`)"
              alt=""
            />
          </div>
          <div class="about__card-title">{{ service.title }}</div>
          <div class="about__card-description">
            <p v-for="(descr, key) in service.descr_list" :key="key">
              {{ descr }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.about {
  padding: 100px 0;
  background: white;
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

@media screen and (max-width: 767px) {
  .about {
    &__inner {
      flex-wrap: wrap;
    }
    &__card {
      width: 100%;
      &-img {
        margin-bottom: 20px;
      }
      &-title {
        min-height: auto;
        padding-bottom: 20px;
        margin-bottom: 0px;
        font-size: 24px;
        line-height: 28px;
      }
      & + .about__card {
        margin-top: 30px;
      }
    }
  }
}
</style>
