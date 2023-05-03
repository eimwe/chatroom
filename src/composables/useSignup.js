import { ref } from 'vue';
import { auth } from '../firebase/config.js';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

const error = ref(null);

const signup = async (email, password, username) => {
  error.value = null;

  try {
    const response = await createUserWithEmailAndPassword(auth, email, password);

    if (!response) {
      throw new Error('Could not complete the signup');
    }

    await updateProfile(response.user, {
      displayName: username
    });

    error.value = null;

    return response;
  } catch (err) {
    switch (err.code) {
      case 'auth/email-already-in-use':
        error.value = 'This e-mail is already in use';
        break;
      case 'auth/invalid-email':
        error.value = 'The e-mail has some typos';
        break;
      case 'auth/weak-password':
        error.value = 'Password should be at least 6 characters';
        break;
      default:
        error.value = err.message;
    }
  }
};

const useSignup = () => {
  return { error, signup };
};

export default useSignup;
