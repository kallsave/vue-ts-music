import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import home from '../views/home/home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    component: home
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
