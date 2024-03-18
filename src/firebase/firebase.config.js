// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLfDDGyoKDNjl_u4zvOg0uBzICuwjG0HA",
  authDomain: "coffee-dokan.firebaseapp.com",
  projectId: "coffee-dokan",
  storageBucket: "coffee-dokan.appspot.com",
  messagingSenderId: "160903073603",
  appId: "1:160903073603:web:d87d1be410be1ba093a9f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;