import { createRouter, createWebHistory } from 'vue-router';
import Landing from '@/components/Landing/Landing.vue';
import { authStore } from '@/stores/authStore';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Landing
    },
    {
      path: "/login",
      component: () => import('@/components/Login/Login.vue')
    },
    {
      path: "/profile",
      component: () => import('@/components/Profile/Profile.vue'),
      children: [
        {
          path: "contacts",
          component: () => import('@/components/Contacts/ContactPage/ContactPage.vue')
        }
      ]
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.path == "/login" || to.path == "/" || authStore().isAuthenticated) {
    next();
  } else {
    next("/login");
  }
});

export default router;
