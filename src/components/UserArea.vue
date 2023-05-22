<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';
import { ArrowLeftOnRectangleIcon } from '@heroicons/vue/20/solid';
import UserAvatar from './UserAvatar.vue';
import useLogout from '../composables/useLogout.js';
import getUser from '../composables/getUser.js';

const emit = defineEmits(['signedOut']);

const { error, logout } = useLogout();
const { user } = getUser();

const signUserOut = async () => {
  await logout();

  if (!error.value) {
    emit('signedOut');
  }
};
</script>

<template>
  <Menu as="div" class="mt-1 inline-block sm:mt-0">
    <MenuButton
      v-if="user"
      class="inline-flex w-full items-center justify-center rounded-full bg-blue-200 bg-opacity-20 text-left hover:bg-opacity-30 focus:outline-none focus:ring-offset-2 focus:ring-offset-gray-800 focus-visible:ring-2 focus-visible:ring-blue-500 sm:gap-2 sm:rounded-md sm:px-2 sm:py-1"
    >
      <UserAvatar :alt="`${user.displayName}'s avatar`" />
      <div class="hidden text-sm text-white sm:block">
        <p class="font-medium">{{ user.displayName }}</p>
        <span class="text-xs text-gray-200">{{ user.email }}</span>
      </div>
    </MenuButton>

    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems
        class="absolute right-0 mt-2 min-w-fit origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      >
        <div class="px-1 py-1">
          <div class="mb-2 block px-2 py-2 text-sm text-gray-900 sm:hidden">
            <p class="font-medium">{{ user.displayName }}</p>
            <span class="text-xs text-gray-500">{{ user.email }}</span>
          </div>
          <MenuItem v-slot="{ active }">
            <button
              @click="signUserOut"
              :class="[
                active ? 'bg-blue-200 text-blue-900' : 'text-gray-900',
                'group flex w-full items-center gap-1 rounded-md px-2 py-2 text-sm'
              ]"
            >
              <ArrowLeftOnRectangleIcon class="h-4 w-4" />
              Log out
            </button>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>
