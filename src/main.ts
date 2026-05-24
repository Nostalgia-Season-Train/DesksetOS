/* ==== 全局样式 ==== */
import './style.css'


/* ==== 路由 ==== */
import { createRouter, createWebHistory } from 'vue-router'
import inlineDesktopMap from './register'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: Array.from(inlineDesktopMap, ([desktopPath, desktop]) => ({
    path: `/${desktopPath}`,
    name: desktopPath,
    component: desktop
  }))
})


/* ==== 应用 ==== */
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
  .use(router)
  .mount('#app')
