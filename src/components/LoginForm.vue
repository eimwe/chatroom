<script setup>
import { ref } from 'vue';
import useLogin from '../composables/useLogin.js';
import { DialogTitle } from '@headlessui/vue';
import InputEmail from './InputEmail.vue';
import InputPassword from './InputPassword.vue';
import ButtonSlot from './ButtonSlot.vue';

const emit = defineEmits(['signedIn']);

const email = ref('');
const password = ref('');

const setEmail = (updatedEmail) => {
  email.value = updatedEmail;
};

const setPassword = (updatedPassword) => {
  password.value = updatedPassword;
};

const { error, login } = useLogin();

const signUserIn = async () => {
  await login(email.value, password.value);

  if (!error.value) {
    emit('signedIn');
  }
};
</script>

<template>
  <DialogTitle as="h3" class="text-center text-lg font-medium leading-6 text-gray-900">
    Sign in
  </DialogTitle>
  <form id="signin-form" method="POST" @submit.prevent="signUserIn" class="mx-auto w-4/5">
    <InputEmail @updatedEmail="setEmail" />
    <InputPassword @updatedPassword="setPassword" />
  </form>
  <div class="text-center text-red-600">{{ error }}</div>
  <div class="mt-4 text-center">
    <ButtonSlot type="submit" form="signin-form">Sign in</ButtonSlot>
  </div>
</template>
