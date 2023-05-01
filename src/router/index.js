import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/board',
    name: 'BoardList',
    component: () => import('../views/BoardList.vue')
  },
  {
    path: '/boardwrite',
    name: 'BoardWrite',
    component: () => import('../views/BoardWrite.vue')
  },
  {
  path: '/login',
  name: 'LoginView',
  component: () => import('../views/LoginView.vue')
  },
  {
    path:'/signup',
    name: 'SignUpView',
    component: () => import('../views/SignUpView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
