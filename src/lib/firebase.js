import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDaTcGszQUQBGvzehp7dspQpYvk6On07L4",
    authDomain: "sosial-network-e2964.firebaseapp.com",
    projectId: "sosial-network-e2964",
    storageBucket: "sosial-network-e2964.appspot.com",
    messagingSenderId: "267114802245",
    appId: "1:267114802245:web:187c89edc13f60feb3c72c"
  };

const fireBaseApp = initializeApp(firebaseConfig);
export const firestore = getFirestore(fireBaseApp)

export default fireBaseApp;