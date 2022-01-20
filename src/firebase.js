// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-l_RTuPAN9oJN7_FCJ4h-L-1T5cdvX_8",
  authDomain: "shopify-spacetagram-challenge.firebaseapp.com",
  projectId: "shopify-spacetagram-challenge",
  storageBucket: "shopify-spacetagram-challenge.appspot.com",
  messagingSenderId: "631098518207",
  appId: "1:631098518207:web:d085a979856625dc0b740a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
