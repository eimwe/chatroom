<script setup>
import { ref } from 'vue';
import { DialogTitle } from '@headlessui/vue';
import { UserCircleIcon, EyeIcon } from '@heroicons/vue/24/outline';

const username = ref('');
const password = ref('');
</script>

<template>
  <DialogTitle as="h3" class="text-center text-lg font-medium leading-6 text-gray-900">
    Sign in
  </DialogTitle>
  <form class="mx-auto w-4/5">
    <div class="relative mt-2 rounded-md shadow-sm">
      <UserCircleIcon
        class="pointer-events-none absolute inset-y-0 left-0 top-1.5 flex h-6 w-6 items-center stroke-gray-400 pl-1"
      />
      <input
        v-model="username"
        type="text"
        name="username"
        id="username"
        class="block w-full rounded-md border-0 py-1.5 pl-7 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-900 sm:text-sm sm:leading-6"
        placeholder="Your login"
      />
    </div>
    <div class="relative mt-2 rounded-md shadow-sm">
      <EyeIcon
        class="pointer-events-none absolute inset-y-0 left-0 top-1.5 flex h-6 w-6 items-center stroke-gray-400 pl-1"
      />
      <input
        v-model="password"
        type="password"
        name="password"
        id="password"
        class="block w-full rounded-md border-0 py-1.5 pl-7 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-900 sm:text-sm sm:leading-6"
        placeholder="Password"
      />
    </div>
  </form>

  <div class="mt-4 text-center">
    <button
      type="button"
      class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
    >
      Sign in
    </button>
  </div>
</template>
