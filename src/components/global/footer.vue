<template>
  <footer class="footer">
    <div class="container-fluid">
      <div class="footer__logo">
        Made with ❤️ from
        <span class="footer__logo-link">
          <router-link to="/">Digital <span>Lab</span></router-link>
        </span>
      </div>
      <div class="footer__rights">
        Все права защищены © 2023
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
.footer {
  background: #1e1f20;
  width: 100%;
  padding: 35px 0;
  text-align: center;
  &__logo {
    color: white;
    a {
      color: white;
    }
    text-transform: uppercase;
    font-family: "Raleway", sans-serif;
    font-size: 28px;
    z-index: 3;
    margin-bottom: 10px;
    span.footer__logo-link {
      font-weight: 800;
    }
    span {
      font-weight: 200;
    }
  }
  &__rights {
    color: white;
  }
}

@media screen and (max-width: 767px) {
  .footer {
    &__logo {
      font-size: 20px;
    }
    &__rights {
      font-size: 14px;
    }
  }
  //.steps {
  //  padding-top: 20px;
  //  &__title {
  //    font-size: 26px;
  //    text-align: left;
  //    margin-bottom: 40px;
  //  }
  //  &__list {
  //    flex-wrap: wrap;
  //  }
  //  &__item {
  //    width: 100%;
  //    & + .steps__item {
  //      margin-top: 15px;
  //      border-top: 0.7px solid #1e1f20;
  //      padding-top: 15px;
  //    }
  //    &-icon {
  //      display: none;
  //    }
  //    &-title {
  //      text-align: left;
  //    }
  //    &-description {
  //      text-align: left;
  //    }
  //  }
  //}
}
</style>
