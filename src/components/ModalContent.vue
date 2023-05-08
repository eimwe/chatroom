<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import LoginForm from './LoginForm.vue';
import RegisterForm from './RegisterForm.vue';

const router = useRouter();

const showLoginForm = ref(true);

const enterChat = () => {
  router.push({ path: '/chat' });
};
</script>

<template>
  <LoginForm v-if="showLoginForm" @signedIn="enterChat" />
  <RegisterForm v-else @signedUp="enterChat" />

  <div v-if="showLoginForm" class="mt-4 text-center">
    <p class="text-sm">
      No account yet?
      <a
        class="font-medium text-blue-900 underline decoration-transparent underline-offset-4 transition-colors hover:decoration-current"
        href="#"
        @click.prevent="showLoginForm = false"
        >Sign up</a
      >
    </p>
  </div>

  <div v-else class="mt-4 text-center">
    <p class="text-sm">
      Already registered?
      <a
        class="font-medium text-blue-900 underline decoration-transparent underline-offset-4 transition-colors hover:decoration-current"
        href="#"
        @click.prevent="showLoginForm = true"
        >Sign in</a
      >
    </p>
  </div>
</template>
