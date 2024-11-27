// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWgslU8MRPtZdr76e0GIHTaIasrC3-Qa0",
  authDomain: "pr-5-29409.firebaseapp.com",
  databaseURL: "https://pr-5-29409-default-rtdb.firebaseio.com",
  projectId: "pr-5-29409",
  storageBucket: "pr-5-29409.firebasestorage.app",
  messagingSenderId: "1019566849823",
  appId: "1:1019566849823:web:0bf09de534b7692d0afa2a",
  measurementId: "G-956SDHXN7X"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);