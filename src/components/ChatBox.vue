<script setup>
import { ref, onUpdated } from 'vue';
import { UseTimeAgo } from '@vueuse/components';
import getCollection from '../composables/getCollection.js';
import getUser from '../composables/getUser.js';

const { messages, error } = getCollection('messages');
const { user } = getUser();

const messageContainer = ref(null);

const scrollToLastMessage = () => {
  messageContainer.value?.scrollIntoView({
    block: 'end',
    behavior: 'smooth'
  });
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
      class="mx-auto max-w-4xl scroll-mb-80 px-4 pt-4 sm:scroll-mb-28 sm:px-8 sm:pt-6 lg:scroll-mb-32 lg:px-0 lg:pt-8"
    >
      <div v-if="error" class="text-center text-red-600">{{ error }}</div>
      <div v-if="user" class="grid gap-2">
        <figure
          v-for="reply in messages"
          :key="reply.id"
          class="chat"
          :class="user.displayName == reply.name ? 'chat-end' : 'chat-start'"
        >
          <figcaption class="chat-header font-medium text-blue-950 dark:text-white">
            {{ reply.name }}
            <time class="text-xs text-blue-900 dark:text-gray-200">
              <UseTimeAgo v-slot="{ timeAgo }" :time="reply.createdAt.toDate()">
                {{ timeAgo }}
              </UseTimeAgo>
            </time>
          </figcaption>
          <blockquote
            class="chat-bubble w-fit max-w-[14rem] break-words sm:max-w-sm lg:max-w-md"
            :class="
              user.displayName == reply.name
                ? 'bg-cyan-800 text-blue-100 dark:bg-cyan-950'
                : 'bg-blue-200 text-blue-900 dark:bg-blue-100'
            "
          >
            {{ reply.message }}
          </blockquote>
        </figure>
      </div>
    </div>
  </main>
</template>
