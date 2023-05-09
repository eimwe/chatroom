import { createRouter, createWebHistory } from 'vue-router';
import { auth } from '../firebase/config.js';
import WelcomeView from '../views/WelcomeView.vue';
import ChatView from '../views/ChatView.vue';

const requireAuth = (to, from, next) => {
  let user = auth.currentUser;

  if (!user) {
    next({ path: '/' });
  } else {
    next();
  }
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: WelcomeView
    },
    {
      path: '/chat',
      name: 'chat',
      component: ChatView,
      beforeEnter: requireAuth
    }
  ]
});

export default router;
