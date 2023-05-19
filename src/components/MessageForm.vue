<script setup>
import { ref } from 'vue';
import { PaperAirplaneIcon } from '@heroicons/vue/24/outline';
import getUser from '../composables/getUser.js';
import { serverTimestamp } from 'firebase/firestore';
import useCollection from '../composables/useCollection.js';

const { user } = getUser();

const { error, addNewDoc } = useCollection('messages');

const message = ref('');

const vFocus = {
  mounted: (el) => el.focus()
};

const sendMessage = async () => {
  if (message.value.length == 0) return;

  const newMessage = {
    name: user.value.displayName,
    message: message.value,
    createdAt: serverTimestamp()
  };

  await addNewDoc(newMessage);

  if (!error.value) {
    message.value = '';
  }
};
</script>

<template>
  <form @submit.prevent="sendMessage" @keydown.ctrl.enter="sendMessage">
    <div class="flex items-center justify-between gap-2">
      {{ error }}
      <textarea
        v-model.trim="message"
        v-focus
        name="message"
        rows="1"
        placeholder="Type message here"
        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:py-5 sm:text-sm sm:leading-6"
      ></textarea>
      <button
        type="submit"
        class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-2 py-1 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 sm:px-4 sm:py-2"
      >
        <span class="sr-only">Send</span>
        <PaperAirplaneIcon class="h-6 w-6" />
      </button>
    </div>
  </form>
</template>
