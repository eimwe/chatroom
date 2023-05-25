<script setup>
import { ref } from 'vue';
import ButtonSlot from './ButtonSlot.vue';
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
        class="block w-full overflow-x-hidden rounded-md border-0 py-1.5 text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:py-5 sm:text-sm sm:leading-6"
      ></textarea>
      <ButtonSlot type="submit">
        <span class="sr-only">Send</span>
        <PaperAirplaneIcon class="h-6 w-6" />
      </ButtonSlot>
    </div>
  </form>
</template>
