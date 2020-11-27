import Vue from 'vue'
import VueRouter from 'vue-router'
import main from '../components/main.vue'
import dashboard from '../components/dashboard.vue'
// import scanner from '../components/scanner'
import Admin from '../components/Admin'
import table from '../components/table'
import Borrow from '../components/Borrow.vue'
import inventory from '../components/inventory.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: main
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: dashboard
  },
  {
    path: '/scanner',
    name: 'Scanner',
    component: () => import(/* webpackChunkName: "about" */ '../views/scanner.vue')
  },
  {
    path: '/Admin',
    name: 'Admin',
    component: Admin
  }
  ,
  {
    path: '/table',
    name: 'table',
    component: table
  }
  ,
  {
    path: '/Borrow',
    name: 'Borrow',
    component: Borrow
  },
  {
    path: '/inventory',
    name: 'inventory',
    component: inventory
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
