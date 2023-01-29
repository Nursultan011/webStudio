import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../pages/Main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../pages/About.vue')
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import('../pages/Services.vue')
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: () => import('../pages/Portfolio.vue')
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () => import('../pages/Contacts.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
