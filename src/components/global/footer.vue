<template>
  <footer class="footer">
    <div class="container-fluid">
      <div class="footer__logo">
        {{ $t('footer.title') }}
        <span class="footer__logo-link">
          <router-link to="/">Digital <span>Lab</span></router-link>
        </span>
      </div>
      <div class="footer__rights">
        {{ $t('footer.rights') }} © 2023
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
    font-size: 16px;
    z-index: 3;
    margin-bottom: 10px;
    font-weight: 600;
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
}
</style>
