<template>
  <div>
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
    <div class="fixed-phone-link" ref="fixedPhoneLink">
      <a href="tel:+77019997660" :class="{'black': fixedPhoneLinkBlackColor}">+7 (701) 999 76 60</a>
    </div>
    <div>
      <header-block ref="headerBlock" :class="{'sticky': headerSticky}"/>
      <main-block ref="mainBlock"/>
      <about-block />
      <sub-banner />
<!--      <sentence-banner />-->
      <steps-block />
      <breif-banner />
    </div>
  </div>
</template>

<style lang="scss">
.fixed-phone-link {
  color: white;
  transform: rotate(270deg);
  font-size: 24px;
  font-weight: 700;
  position: fixed;
  right: -5%;
  top: 50vh;
  text-transform: uppercase;
  a {
    text-decoration: none;
    color: white;
    transition: .5s;
  }
  a.black {
    color: black;
  }
}
</style>

<script>
import { ref, onMounted } from "vue";
export default {
  components: {
    headerBlock: () => import("../components/global/header.vue"),
    mainBlock: () => import("../components/partials/mainBlock.vue"),
    AboutBlock: () => import("../components/partials/aboutBlock.vue"),
    SubBanner: () => import("../components/partials/subBanner.vue"),
    SentenceBanner: () => import("../components/partials/sentenceBanner.vue"),
    StepsBlock: () => import("../components/partials/stepsBlock.vue"),
    BreifBanner: () => import("../components/partials/breifBanner.vue"),
  },
  methods: {
    handleScroll() {
      this.setHeaderStickyOption()
      this.setPhoneLinkColorOption()
    },
    setHeaderStickyOption() {
      const headerHeight = this.$refs.headerBlock.$el.clientHeight
      this.headerSticky = window.scrollY - headerHeight > 50;
    },
    setPhoneLinkColorOption() {
      const mainHeight = this.$refs.mainBlock.$el.clientHeight
      const fixedPhoneLinkHeight = this.$refs.fixedPhoneLink.clientHeight
      this.fixedPhoneLinkBlackColor = window.scrollY > (mainHeight / 1.8 + fixedPhoneLinkHeight)
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  setup() {
    const beforeLoader = ref(false);
    const headerSticky = ref(false);
    const fixedPhoneLinkBlackColor = ref(false);

    onMounted(() => {
      setTimeout(() => {
        beforeLoader.value = false;
      }, 1800);
    });

    return {
      beforeLoader,
      headerSticky,
      fixedPhoneLinkBlackColor
    };
  },
};
</script>
