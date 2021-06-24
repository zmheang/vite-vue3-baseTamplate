
import Layout from '@/layout/index.vue'

export default [
  // {path: '/', component: () => import('@/views/home/index.vue'), meta: {title: 'Home'}},
  {
    path: '/',
    component: Layout,
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: Layout,
    redirect: '/home/index',
    children: [{
      path: 'index',
      name: 'home',
      component: () => import('@/views/home/index.vue'),
      meta: { title: 'home', icon: 'home' }
    }]
  },
]
