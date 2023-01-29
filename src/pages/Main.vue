<template>
  <div>
    <main-block />
    <about-block />
    <sub-banner />
    <sentence-banner />
    <steps-block />
    <breif-banner />
  </div>
</template>

<script>
export default {
  components: {
    mainBlock: () => import("../components/partials/mainBlock.vue"),
    AboutBlock: () => import("../components/partials/aboutBlock.vue"),
    SubBanner: () => import("../components/partials/subBanner.vue"),
    SentenceBanner: () => import("../components/partials/sentenceBanner.vue"),
    StepsBlock: () => import("../components/partials/stepsBlock.vue"),
    BreifBanner: () => import("../components/partials/breifBanner.vue"),
  },
};
</script>
