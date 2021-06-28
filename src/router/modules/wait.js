
import utils from '@/utils/index'
export default [
    {
      key: utils.getUUID(),
      path: '/wait_1',
      label: 'wait_1',
      component: () => import('@/views/wait/wait_1.vue')
    }
  ]
