<template>
  <section class="sentence-banner">
    <div class="container-fluid">
      <div class="sentence-banner__inner">
        <div class="sentence-banner__wrap">
          <div class="title">Обсудим проект?</div>
          <form class="form">
            <input class="text-field" type="tel" placeholder="Телефон" />
            <button class="button">Обсудить проект</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.sentence-banner {
  margin-bottom: 50px;
  &__inner {
    background-image: url("../../assets/images/sentence-banner.png");
    background-repeat: no-repeat;
    background-size: cover;
    object-position: center center;
    display: flex;
    justify-content: center;
    padding: 50px 0;
  }
  &__wrap {
    background-color: #f9f9f9;
    padding: 30px 45px;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    .title {
      font-size: 40px;
      color: #1e1e1e;
      margin-right: 90px;
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
}
</style>
