import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { breadcrumb: 'Home' },
      children: [
        {
          path: '',
          name: 'league-fetcher',
          component: () => import('../components/LeagueFetcher.vue'),
          meta: { breadcrumb: 'Home' },
        },
        {
          path: 'league/:id',
          name: 'league',
          props: true,
          component: () => import('../components/LeagueDetails.vue'),
          meta: { breadcrumb: 'League Details' },
        },
      ],
    },
  ],
})

export default router
