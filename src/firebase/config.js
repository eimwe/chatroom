import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCRULrKR6bKqGE9aUGLR5cmysfX3MksfOU',
  authDomain: 'chatroom-cf528.firebaseapp.com',
  projectId: 'chatroom-cf528',
  storageBucket: 'chatroom-cf528.appspot.com',
  messagingSenderId: '529421422414',
  appId: '1:529421422414:web:cd531e2f42e7fd67c0181f'
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
