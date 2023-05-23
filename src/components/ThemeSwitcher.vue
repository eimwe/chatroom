<script setup>
import { useDark } from '@vueuse/core';
import { SunIcon, MoonIcon } from '@heroicons/vue/24/outline';

const isDark = useDark();
</script>

<template>
  <div
    class="pointer-events-all relative h-10 w-10 rounded-full bg-blue-200 bg-opacity-20 p-2 lg:hover:bg-opacity-30"
  >
    <input
      v-model="isDark"
      name="toggle-password"
      type="checkbox"
      :checked="isDark"
      tabindex="-1"
      class="absolute left-1 top-1 h-8 w-8 cursor-pointer rounded border-transparent bg-transparent text-transparent checked:bg-none focus:text-transparent focus:ring-transparent focus:ring-offset-transparent"
    />
    <MoonIcon
      v-if="isDark"
      class="pointer-events-none absolute inset-y-0 left-1 top-1 flex h-8 w-8 items-center stroke-gray-200"
    />
    <SunIcon
      v-else
      class="pointer-events-none absolute inset-y-0 left-1 top-1 flex h-8 w-8 items-center stroke-gray-200"
    />
    <span class="sr-only">Toggle dark/light mode</span>
  </div>
</template>
