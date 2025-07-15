/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'

import LayoutDefault from '@/layouts/default.vue'
import LayoutLogin from '@/layouts/layoutLogin.vue'

const manualRoutes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/login',
    component: LayoutLogin,
    children: [
      {
        path: '',
        component: () => import('@/pages/Login.vue'),
        name: 'Login',
      },
    ],
  },
  {
    path: '/home',
    component: LayoutDefault,
    children: [
      {
        path: '',
        component: () => import('@/pages/Home.vue'),
        name: 'home',
      },
    ],
  },
  {
    path: '/about',
    component: LayoutDefault,
    children: [
      {
        path: '',
        component: () => import('@/pages/About.vue'),
        name: 'about',
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: manualRoutes,
})

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (localStorage.getItem('vuetify:dynamic-reload')) {
      console.error('Dynamic import error, reloading page did not fix it', err)
    } else {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
