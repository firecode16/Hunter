import { RouteConfig } from 'vue-router'

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    meta: {
      reload: true
    },
    children: [
      {
        path: '',
        component: () => import('pages/Index.vue'),
        meta: {
          reload: true
        }
      },
      {
        path: '/home',
        component: () => import('components/tabsocial/TabHomeComponent.vue')
      },
      {
        path: '/profile',
        component: () => import('components/tabsocial/TabProfileComponent.vue')
      },
      {
        path: '/contacts',
        component: () => import('components/tabsocial/TabContactsComponent.vue')
      },
      {
        path: '/chat',
        component: () => import('components/tabsocial/TabChatComponent.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
