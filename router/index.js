import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'


Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'Home',
    component: Home
  },
  {
    path: '/Insurance',
    name: 'Insurance',
    component: () => import(/* webpackChunkName: "about" */ '../views/Insurance.vue')
  },
  {
    path: '/Question',
    name: 'Question',
    component: () => import(/* webpackChunkName: "about" */ '../views/Question.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
