<template>
  <div id="app">
    <loader
      v-if="beforeLoader"
      object="#ffffff"
      color1="#ffffff"
      color2="#17fd3d"
      size="18"
      speed="2.2"
      bg="#1e1f20"
      objectbg="#ffffff"
      opacity="100"
      disableScrolling="false"
      name="loading"
    ></loader>
    <router-view v-else />
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
export default {
  setup() {
    const beforeLoader = ref(true);

    onMounted(() => {
      setTimeout(() => {
        beforeLoader.value = false;
      }, 1800);
    });

    return {
      beforeLoader,
    };
  },
};
</script>

<style lang="scss">
.loader-bar {
  font-weight: 700 !important;
}
</style>
