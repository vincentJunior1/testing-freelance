import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloPage from '../views/Hello.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HelloPage',
    component: HelloPage,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router