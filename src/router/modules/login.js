
import utils from '@/utils/index'
export default [
    // {path: '/', component: () => import('@/views/home/index.vue'), meta: {title: 'Home'}},
    {
      key: utils.getUUID(),
      path: '/login_1',
      label: 'login-1',
      component: () => import('@/views/login/login_1.vue')
    }
  ]
