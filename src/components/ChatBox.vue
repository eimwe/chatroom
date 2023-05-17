<script setup>
import { ref, computed, onUpdated } from 'vue';
import getCollection from '../composables/getCollection.js';
import getUser from '../composables/getUser.js';

const { messages, error } = getCollection('messages');
const { user } = getUser();

const messageContainer = ref(null);

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

const scrollToLastMessage = () => {
  messageContainer.value?.scrollIntoView({
    block: 'end',
    behavior: 'smooth'
  });
};

const formatUserMessages = (currentUser, dataBaseUser) => {
  return { 'place-self-end items-end': currentUser == dataBaseUser };
};

onUpdated(() => {
  scrollToLastMessage();
});
</script>

<template>
  <main class="min-h-[100dvh]">
    <div
      v-if="messages"
      ref="messageContainer"
      class="mx-auto max-w-7xl scroll-mb-16 px-4 pt-4 sm:scroll-mb-28 sm:px-6 sm:pt-6 lg:scroll-mb-32 lg:px-8 lg:pt-8"
    >
      <div v-if="error" class="text-center text-red-600">{{ error }}</div>
      <div v-if="user" class="grid gap-2">
        <figure
          v-for="reply in formattedMessages"
          :key="reply.id"
          class="flex flex-col-reverse"
          :class="formatUserMessages(user.displayName, reply.name)"
        >
          <blockquote class="w-fit rounded-md bg-blue-100 px-2 py-1 text-blue-900">
            {{ reply.message }}
          </blockquote>
          <figcaption class="flex items-center gap-1 text-sm text-white">
            <span class="font-medium">{{ reply.name }}</span>
            <span class="text-xs text-gray-200">{{ reply.createdAt }}</span>
          </figcaption>
        </figure>
      </div>
    </div>
  </main>
</template>
