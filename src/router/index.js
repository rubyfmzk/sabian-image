import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component:() => import('@/views/Home.vue'),
  },
  {
    path: '/symbol/:sign/:degree',
    name: 'symbol',
    component:() => import('@/views/Symbol.vue'),
  },
  {
    path: '/sabian-list-print-ja',
    name: 'sabian-list-print-ja',
    component:() => import('@/views/SabianListPrintJa.vue'),
  },
  {
    path: '*', 
    name: 'home',
    component: () => import('@/views/Home.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
//  base: process.env.BASE_URL,
  routes,
})

export default router
