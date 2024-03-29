import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import combined from './routes/combine'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/notes'
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: () => ({ name: 'Login' })
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes.concat(combined)
})

export default router
