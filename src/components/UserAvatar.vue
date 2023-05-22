<script setup>
import { ref, onMounted } from 'vue';
import getRandomImage from '../composables/getRandomImage.js';
import { UserCircleIcon } from '@heroicons/vue/24/outline';
import { url, options } from '../api/userAvatarConfig.js';

const { getImageHref } = getRandomImage();
const userAvatar = ref(null);

onMounted(async () => {
  userAvatar.value = await getImageHref(url, options);
});
</script>

<template>
  <img v-if="userAvatar" class="h-10 w-10 rounded-full" :src="userAvatar" />
  <UserCircleIcon v-else class="h-10 w-10 text-gray-200" />
</template>
