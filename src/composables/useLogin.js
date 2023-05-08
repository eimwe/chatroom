import { ref } from 'vue';
import { auth } from '../firebase/config.js';
import { signInWithEmailAndPassword } from 'firebase/auth';

const error = ref(null);

const login = async (email, password) => {
  error.value = null;

  try {
    const response = await signInWithEmailAndPassword(auth, email, password);

    if (!response) {
      throw new Error('Could not complete the login');
    }

    error.value = null;

    return response;
  } catch (err) {
    switch (err.code) {
      case 'auth/user-not-found':
        error.value = 'User not found';
        break;
      case 'auth/wrong-password':
        error.value = 'Wrong password';
        break;
      default:
        error.value = err.message;
    }
  }
};

const useLogin = () => {
  return { error, login };
};

export default useLogin;
