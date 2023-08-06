/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpUFah5QNjWoI1lGao-sQA3110WoTN3Tg",
  authDomain: "book-auth-redux.firebaseapp.com",
  projectId: "book-auth-redux",
  storageBucket: "book-auth-redux.appspot.com",
  messagingSenderId: "497152518856",
  appId: "1:497152518856:web:5012b7309c3c64eeda13fd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
