// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';
// added for firestore
import { getFirestore } from 'firebase/firestore';

// const apiKey = process.env.REACT_APP_API_KEY;
// const authDomain = process.env.REACT_APP_AUTH_DOMAIN;
// const databaseURL = process.env.REACT_APP_DATABASE_URL;
// const projectId = process.env.REACT_APP_PROJECT_ID;
// const storageBucket = process.env.REACT_APP_STORAGE_BUCKET;
// const messagingSenderId = process.env.REACT_APP_MESSAGING_SENDER_ID;
// const appId = process.env.REACT_APP_APP_ID;

const firebaseConfig = {
  apiKey: 'AIzaSyDaTcGszQUQBGvzehp7dspQpYvk6On07L4',
  authDomain: 'sosial-network-e2964.firebaseapp.com',
  databaseURL: 'https://sosial-network-e2964-default-rtdb.firebaseio.com',
  projectId: 'sosial-network-e2964',
  storageBucket: 'sosial-network-e2964.appspot.com',
  messagingSenderId: '267114802245',
  appId: '1:267114802245:web:187c89edc13f60feb3c72c',
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getDatabase(app);

// added for firestore
export const firebase = getFirestore(app);

export default app;
