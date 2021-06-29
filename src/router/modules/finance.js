
import Layout from '@/layout/index.vue'
import utils from '@/utils/index'
import { h } from "vue";
import {
  HomeIcon
} from '@/assets/icon/vicons-ionicoons5.js'

// svg => icon
function moneyIcon() {
  return () => h('svg', {xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 512 512'}, [
    h('path', {
      d: 'M448 32h-80L256 253.13L144 32H64l112.37 208H128v48h73.56L216 319v17h-88v48h88v96h80v-96h88v-48h-88v-17l14.89-31H384v-48h-48.29z',
      fill: 'currentColor'
    }),
  ])
}

export default [
  {
    path: '/finance',
    icon: moneyIcon(),
    key: utils.getUUID(),
    label: 'finance',
    component: Layout,
    redirect: '/finance/finance',
    children: [{
      key: utils.getUUID(),
      path: '/finance/finance-1',
      label: '基金',
      component: () => import('@/views/finance/fund.vue'),
    }]
  }
]
