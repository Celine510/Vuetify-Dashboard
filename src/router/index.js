// Composables
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/DefaultView.vue'),
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('@/views/HomeView.vue'),
        },
        {
          path: '/posts',
          name: 'Posts',
          component: () => import('@/views/PostsView.vue'),
        },
        {
          path: '/comments',
          name: 'Comments',
          component: () => import('@/views/CommentsView.vue'),
        },
      ],
    },
  ],
})

export default router
