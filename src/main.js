import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { auth } from './firebase/config.js';
import { onAuthStateChanged } from 'firebase/auth';

import './assets/main.css';

let app;

onAuthStateChanged(auth, () => {
  if (!app) {
    app = createApp(App).use(router).mount('#app');
  }
});
