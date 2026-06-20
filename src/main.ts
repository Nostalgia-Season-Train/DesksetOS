/* ==== 全局样式 ==== */
import './style.css'


/* ==== 路由 ==== */
import { createRouter, createWebHistory } from 'vue-router'
import inlineDesktopMap from './register'

const baseRoutes = Array.from(inlineDesktopMap, ([desktopPath, desktop]) => ({
  path: `/${desktopPath}`,
  name: desktopPath,
  component: desktop
}))

const demoRoutes = {
  path: '/demo',
  name: 'demo',
  component: () => import('./demo/View.vue'),
  children: [
    { path: '',        name: 'demo-overview',  component: () => import('./demo/pages/Overview.vue') },
    { path: 'features', name: 'demo-features', component: () => import('./demo/pages/Features.vue') },
    { path: 'contact',  name: 'demo-contact',  component: () => import('./demo/pages/Contact.vue') },
  ]
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: () => import('./Home.vue') },
    ...baseRoutes,
    demoRoutes
  ]
})


/* ==== 应用 ==== */
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
  .use(router)
  .mount('#app')
