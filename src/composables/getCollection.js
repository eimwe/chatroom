import { ref } from 'vue';
import { db } from '../firebase/config.js';
import { query, collection, orderBy, onSnapshot } from 'firebase/firestore';

const getCollection = (currentCollection) => {
  const messages = ref(null);
  const error = ref(null);

  let collectionRef = query(collection(db, currentCollection), orderBy('createdAt'));

  onSnapshot(
    collectionRef,
    (snapshot) => {
      let results = [];

      snapshot.forEach((snap) => {
        snap.data().createdAt && results.push({ ...snap.data(), id: snap.id });
      });

      messages.value = results;
      error.value = null;
    },
    (err) => {
      messages.value = null;
      error.value = err.message;
    }
  );

  return { messages, error };
};

export default getCollection;