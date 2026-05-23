/* ==== 全局样式 ==== */
import './main.css'


/* ==== 路由 ==== */
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/noname1', name: 'noname1', component: () => import('./noname1/App.vue') }
  ]
})


/* ==== 应用 ==== */
import { createApp } from 'vue'
import Main from './Main.vue'

const app = createApp(Main)
  .use(router)
  .mount('#app')
