import { createApp } from 'vue'
import App from './App.vue'
import { router, setupRouter } from './router';

import {
  create,
  NButton,
  NSwitch,
  NSpace,
  NMenu,
  NLayoutHeader,
  NLayoutFooter,
  NLayoutContent,
  NLayout,
  NLayoutSider
} from 'naive-ui'

const naive = create({
  components: [ NButton, NSwitch, NSpace, NMenu, NLayoutHeader, NLayoutFooter, NLayoutContent, NLayout, NLayoutSider ]
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
