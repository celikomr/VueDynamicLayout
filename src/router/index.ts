import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import LayoutDefault from '../views/layouts/LayoutDefault.vue'
import LayoutNav from '../views/layouts/LayoutNav.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/pages/Home.vue'),
    meta: {
      layout: LayoutNav
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/pages/Login.vue'),
    meta: {
      layout: LayoutDefault
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/pages/Register.vue'),
    meta: {
      layout: LayoutDefault
    }
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router