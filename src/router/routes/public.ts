const publicRoutes = [
    {
        path: '/register',
        name: 'Register',
        component: () => import('@/views/RegisterView.vue'),
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/LoginView.vue'),
    },

];

export default publicRoutes;