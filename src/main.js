import { createApp } from 'vue'
import App from './App.vue'
import { setupRouter } from './router';

import {
  create,
  NButton,
  NIcon,
  NSwitch,
  NSpace,
  NMenu,
  NLayoutHeader,
  NLayoutFooter,
  NLayoutContent,
  NLayout,
  NLayoutSider,
  NLoadingBarProvider
} from 'naive-ui'

const naive = create({
  components: [
    NButton,
    NIcon,
    NSwitch,
    NSpace,
    NMenu,
    NLayoutHeader,
    NLayoutFooter,
    NLayoutContent,
    NLayout,
    NLayoutSider,
    NLoadingBarProvider
  ]
})

const app = createApp(App)


// router
setupRouter(app);

app.use(naive)

// try {
//   await router.isReady()
//   // 成功
// } catch (err) {
//   // 报错
//   console.log('router is error:' + err)
// }

app.mount('#app', true)
