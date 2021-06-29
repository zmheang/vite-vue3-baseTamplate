import utils from '@/utils/index'

export default [
  {
    key: utils.getUUID(),
    path: '/wait_1',
    label: 'wait_1',
    component: () => import('@/views/wait/wait_1.vue')
  },
  {
    key: utils.getUUID(),
    path: '/wait_2',
    label: 'wait_2',
    component: () => import('@/views/wait/wait_2.vue')
  }
]
