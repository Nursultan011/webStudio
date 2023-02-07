import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios";
import './styles/style.scss'
import AOS from 'aos'
import 'aos/dist/aos.css'
import loader from "vue-ui-preloader";
import VueI18n from 'vue-i18n';
import { messages } from './plugins/i18n';
import "./plugins/v-select"

Vue.use(VueI18n);
Vue.use(loader);
Vue.config.productionTip = false

export const i18n = new VueI18n({
  locale: 'ru',
  messages
});

new Vue({
  router,
  store,
  axios,
  render: h => h(App),
  i18n,
  mounted() {
    AOS.init()
  }
}).$mount('#app')