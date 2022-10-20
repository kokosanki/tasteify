import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomePage from '../pages/HomePage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
