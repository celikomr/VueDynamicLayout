import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/order-entry',
    name: 'Order Entry',
    component: () => import(/* webpackChunkName: "about" */ '../views/OrderEntry.vue')
  },
  {
    path: '/worklist',
    name: 'Worklist',
    component: () => import(/* webpackChunkName: "about" */ '../views/Worklist.vue')
  },
  {
    path: '/user',
    name: 'User',
    component: () => import(/* webpackChunkName: "about" */ '../views/User.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
