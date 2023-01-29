<template>
  <section class="main">
    <div class="container">
      <div class="main__inner">
        <header></header>
        <div class="content">
          <h1>Разработка и продвижение сайтов на высоком уровне</h1>
          <div class="main__request">
            <span> Оставьте заявку на расчет стоимости сайта </span>
            <img src="../../assets/icons/arrow-right.svg" alt="" />
          </div>
        </div>
        <a class="scroll">
          <img src="../../assets/icons/arrow-down.svg" alt="" />
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.main {
  background-color: #1e1f20;
  min-height: 100vh;
  &__inner {
    min-height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 50px;
    .content {
      h1 {
        font-size: 56px;
        line-height: 60px;
        color: #fefefe;
        font-weight: 700;
        pointer-events: none;
        z-index: 2;
        max-width: 700px;
      }
    }
    .scroll {
      position: relative;
      display: flex;
      justify-content: center;
      img {
        width: 16px;
        height: 18px;
        cursor: pointer;
      }
    }
  }
  &__request {
    display: flex;
    align-items: center;
    margin-top: 50px;
    span {
      font-size: 18px;
      line-height: 20px;
      font-weight: 700;
      color: #fff243;
      cursor: pointer;
      text-decoration: none;
      pointer-events: all;
      z-index: 2;
    }
    img {
      margin-left: 12px;
    }
  }
}
</style>
