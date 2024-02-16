const publicRoutes = [
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/Auth/RegisterView.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Auth/LoginView.vue')
  }
]

export default publicRoutes
