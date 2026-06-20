/* ==== 全局样式 ==== */
import './style.css'


/* ==== 路由 ==== */
import { createRouter, createWebHistory } from 'vue-router'
import inlineDesktopMap from './os/register'

const baseRoutes = Array.from(inlineDesktopMap, ([desktopPath, desktop]) => ({
  path: `/${desktopPath}`,
  name: desktopPath,
  component: desktop
}))

const mainRoutes = {
  path: '/',
  name: 'main',
  component: () => import('./main/View.vue'),
  children: [
    { path: '',         name: 'overview',  component: () => import('./main/pages/Overview.vue') },
    { path: 'features', name: 'features',  component: () => import('./main/pages/Features.vue') },
    { path: 'contact',  name: 'contact',   component: () => import('./main/pages/Contact.vue') },
    { path: 'desktops', name: 'desktops',  component: () => import('./main/pages/Desktops.vue') },
  ]
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    mainRoutes,
    ...baseRoutes
  ]
})


/* ==== 应用 ==== */
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
  .use(router)
  .mount('#app')
