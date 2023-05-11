import { ref } from 'vue';
import { db } from '../firebase/config.js';
import { collection, addDoc } from 'firebase/firestore';

const useCollection = (currentCollection) => {
  const error = ref(null);

  const addNewDoc = async (newDoc) => {
    error.value = null;

    try {
      await addDoc(collection(db, currentCollection), newDoc);
    } catch (err) {
      error.value = err.message;
    }
  };

  return { error, addNewDoc };
};

export default useCollection;
