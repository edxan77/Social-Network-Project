// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database';
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC0-oPVzurqoaKWJ0uHBv66U569C1iT4_w",
    authDomain: "social-network-ec1a4.firebaseapp.com",
    databaseURL: "https://social-network-ec1a4-default-rtdb.firebaseio.com",
    projectId: "social-network-ec1a4",
    storageBucket: "social-network-ec1a4.appspot.com",
    messagingSenderId: "40612137500",
    appId: "1:40612137500:web:bd93457f6a5f58b6f0add9"
  };
  

// Initialize Firebase

 const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getDatabase(app);
