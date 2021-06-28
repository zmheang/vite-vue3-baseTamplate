import { createRouter, createWebHashHistory } from 'vue-router'
import home from './modules/home'
import poems from './modules/poems'
import wait from './modules/wait'
import login from './modules/login'

const routes = [
  ...home,
  ...login,
  ...wait,
  ...poems
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

// config router
export function setupRouter(app) {
  app.use(router);
}
