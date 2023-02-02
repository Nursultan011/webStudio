<template>
  <header class="header">
    <div class="container-fluid d-flex justify-content-between">
      <div class="header__logo">
        Digital <span>Lab</span>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: absolute;
  width: 100%;
  &__logo {
    color: white;
    text-transform: uppercase;
    font-family: 'Raleway', sans-serif;
    font-size: 28px;
    font-weight: 800;
    z-index: 3;
    padding: 20px 0;
    span {
      font-weight: 200;
    }
  }
}
</style>
