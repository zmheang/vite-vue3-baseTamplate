import { createRouter, createWebHashHistory } from 'vue-router'
import home from './modules/home'
import module_1 from './modules/module-1'

const routes = [
  ...home,
  ...module_1
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
