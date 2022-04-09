// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getDatabase} from 'firebase/database';
import { getAuth } from "firebase/auth";
// added for firestore
import { getFirestore } from "firebase/firestore";


// const apiKey = process.env.REACT_APP_API_KEY;
// const authDomain = process.env.REACT_APP_AUTH_DOMAIN;
// const databaseURL = process.env.REACT_APP_DATABASE_URL;
// const projectId = process.env.REACT_APP_PROJECT_ID;
// const storageBucket = process.env.REACT_APP_STORAGE_BUCKET;
// const messagingSenderId = process.env.REACT_APP_MESSAGING_SENDER_ID;
// const appId = process.env.REACT_APP_APP_ID;


const firebaseConfig = {
  apiKey: "AIzaSyAUzr2-h7XDjxgI3OMql6vJpYuEz2zR0Pw",
  authDomain: "social-network-ef434.firebaseapp.com",
  projectId: "social-network-ef434",
  storageBucket: "social-network-ef434.appspot.com",
  messagingSenderId: "300929157083",
  appId: "1:300929157083:web:0704c1fd05bed2916789fe",
  measurementId: "G-FJDEF26910"
}
  

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getDatabase(app);

// added for firestore
export const firebase = getFirestore(app)
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);

export default app;