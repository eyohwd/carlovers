// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASEKEY,
  authDomain: "carloverapp.firebaseapp.com",
  projectId: "carloverapp",
  storageBucket: "carloverapp.appspot.com",
  messagingSenderId: "620260648199",
  appId: "1:620260648199:web:6d9e76bd655413694791a2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);