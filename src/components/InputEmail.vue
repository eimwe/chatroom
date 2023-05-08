<script setup>
import { ref } from 'vue';
import { AtSymbolIcon } from '@heroicons/vue/24/outline';

const emit = defineEmits(['updatedEmail']);

const userEmail = ref('');

const onEmailUpdate = () => {
  emit('updatedEmail', userEmail.value);
};
</script>

<template>
  <div class="relative mt-2 rounded-md shadow-sm">
    <AtSymbolIcon
      class="pointer-events-none absolute inset-y-0 left-0 top-1.5 flex h-6 w-6 items-center stroke-gray-400 pl-1"
    />
    <input
      v-model="userEmail"
      @input="onEmailUpdate"
      type="email"
      name="email"
      id="email"
      required
      class="block w-full rounded-md border-0 py-1.5 pl-7 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-900 sm:text-sm sm:leading-6"
      placeholder="E-mail"
    />
  </div>
</template>
