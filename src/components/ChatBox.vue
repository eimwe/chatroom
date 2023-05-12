<script setup>
import getCollection from '../composables/getCollection.js';

const { messages, error } = getCollection('messages');
</script>

<template>
  <main>
    <div v-if="messages" class="mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
      <div v-if="error">{{ error }}</div>
      <figure v-for="reply in messages" :key="reply.id">
        <blockquote>{{ reply.message }}</blockquote>
        <figcaption>{{ reply.name }}</figcaption>
        <span>{{ reply.createdAt.toDate() }}</span>
      </figure>
    </div>
  </main>
</template>
