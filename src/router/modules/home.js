
import Layout from '@/layout/index.vue'
import utils from '@/utils/index'
import {
  renderIcon,HomeIcon
} from '@/assets/icon/vicons-ionicoons5.js'

export default [
  // {path: '/', component: () => import('@/views/home/index.vue'), meta: {title: 'Home'}},
  {
    path: '/',
    key: utils.getUUID(),
    hidden: true,
    component: Layout,
    redirect: '/home',
  },
  {
    path: '/home',
    icon: renderIcon(HomeIcon),
    key: utils.getUUID(),
    label: 'home',
    component: Layout,
    redirect: '/home/index',
    children: [{
      key: utils.getUUID(),
      path: 'index',
      label: 'home-1',
      component: () => import('@/views/home/index.vue'),
      meta: { title: 'home', icon: 'home' }
    }]
  },
]
