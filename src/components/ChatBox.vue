<script setup>
import { computed } from 'vue';
import getCollection from '../composables/getCollection.js';

const { messages, error } = getCollection('messages');

const formattedMessages = computed(() => {
  return messages.value.map((reply) => {
    const date = reply.createdAt.toDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    if (minutes < 10) minutes = `0${minutes}`;
    let time = `${hours}:${minutes}`;
    return { ...reply, createdAt: time };
  });
});
</script>

<template>
  <main class="min-h-[100dvh]">
    <div v-if="messages" class="mx-auto max-w-7xl px-4 pt-4 sm:px-6 sm:pt-6 lg:px-8 lg:pt-8">
      <div v-if="error">{{ error }}</div>
      <figure v-for="reply in formattedMessages" :key="reply.id">
        <blockquote>{{ reply.message }}</blockquote>
        <figcaption>{{ reply.name }}</figcaption>
        <span>{{ reply.createdAt }}</span>
      </figure>
    </div>
  </main>
</template>
