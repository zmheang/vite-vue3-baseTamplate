import { createApp } from 'vue'
import App from './App.vue'
import { router, setupRouter } from './router';

import {
  create,
  NButton
} from 'naive-ui'

const naive = create({
  components: [NButton]
})

const app = createApp(App)


// router
setupRouter(app);

app.use(naive)
app.use(router)

// try {
//   await router.isReady()
//   // 成功
// } catch (err) {
//   // 报错
//   console.log('router is error:' + err)
// }



app.mount('#app', true)
