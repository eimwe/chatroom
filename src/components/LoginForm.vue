<script setup>
import { ref } from 'vue';
import { DialogTitle } from '@headlessui/vue';
import { AtSymbolIcon, EyeIcon, EyeSlashIcon } from '@heroicons/vue/24/outline';

const email = ref('');
const password = ref('');
const hiddenPassword = ref(true);

const signUserIn = () => {
  console.log(`form submitted with E-mail: ${email.value}, Password: ${password.value}`);
  email.value = '';
  password.value = '';
};
</script>

<template>
  <DialogTitle as="h3" class="text-center text-lg font-medium leading-6 text-gray-900">
    Sign in
  </DialogTitle>
  <form id="signin-form" method="POST" @submit.prevent="signUserIn" class="mx-auto w-4/5">
    <div class="relative mt-2 rounded-md shadow-sm">
      <AtSymbolIcon
        class="pointer-events-none absolute inset-y-0 left-0 top-1.5 flex h-6 w-6 items-center stroke-gray-400 pl-1"
      />
      <input
        v-model="email"
        type="email"
        name="email"
        id="email"
        required
        class="block w-full rounded-md border-0 py-1.5 pl-7 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-900 sm:text-sm sm:leading-6"
        placeholder="E-mail"
      />
    </div>
    <div class="relative mt-2 rounded-md shadow-sm">
      <input
        v-model="hiddenPassword"
        name="toggle-password"
        type="checkbox"
        :checked="hiddenPassword"
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
        v-model="password"
        :type="hiddenPassword ? 'password' : 'text'"
        name="password"
        id="password"
        required
        class="block w-full rounded-md border-0 py-1.5 pl-7 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-900 sm:text-sm sm:leading-6"
        placeholder="Password"
      />
    </div>
  </form>

  <div class="mt-4 text-center">
    <button
      type="submit"
      form="signin-form"
      class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
    >
      Sign in
    </button>
  </div>
</template>
