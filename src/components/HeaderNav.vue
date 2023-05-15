<script setup>
import { useRouter } from 'vue-router';
import logoImage from '../assets/images/logo.png';
import UserArea from './UserArea.vue';

const router = useRouter();

const returnHome = () => {
  router.push({ path: '/' });
};
</script>

<template>
  <header class="sticky top-0 bg-cyan-950">
    <nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="flex flex-shrink-0 items-center">
          <img class="h-8 w-auto" :src="logoImage" alt="Chatroom" />
        </div>
        <div class="flex items-center gap-3">
          <UserArea @signedOut="returnHome" />
        </div>
      </div>
    </nav>
  </header>
</template>
