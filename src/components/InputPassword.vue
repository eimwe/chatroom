<script setup>
import { ref } from 'vue';
import { EyeIcon, EyeSlashIcon } from '@heroicons/vue/24/outline';

const emit = defineEmits(['updatedPassword']);

const userPassword = ref('');
const hiddenPassword = ref(true);

const onPasswordUpdate = () => {
  emit('updatedPassword', userPassword.value);
};
</script>

<template>
  <div class="relative mt-2 rounded-md shadow-sm">
    <input
      v-model="hiddenPassword"
      name="toggle-password"
      type="checkbox"
      :checked="hiddenPassword"
      tabindex="-1"
      class="absolute left-1.5 top-2.5 h-4 w-4 cursor-pointer rounded border-transparent text-transparent focus:ring-transparent"
    />
    <EyeSlashIcon
      v-if="hiddenPassword"
      class="pointer-events-none absolute inset-y-0 left-0 top-1.5 flex h-6 w-6 items-center stroke-gray-400 pl-1"
    />
    <EyeIcon
      v-else
      class="pointer-events-none absolute inset-y-0 left-0 top-1.5 flex h-6 w-6 items-center stroke-gray-400 pl-1"
    />
    <input
      v-model="userPassword"
      @input="onPasswordUpdate"
      :type="hiddenPassword ? 'password' : 'text'"
      name="password"
      id="password"
      required
      class="block w-full rounded-md border-0 py-1.5 pl-7 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-900 sm:text-sm sm:leading-6"
      placeholder="Password"
    />
  </div>
</template>
