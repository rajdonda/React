// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCi4YutvyBaXUQ3ajv24HJDqz8UyEeSHQo",
  authDomain: "react-realtime-db-c1c58.firebaseapp.com",
  projectId: "react-realtime-db-c1c58",
  storageBucket: "react-realtime-db-c1c58.firebasestorage.app",
  messagingSenderId: "48156491610",
  appId: "1:48156491610:web:b8b427d99079db05463d63",
  measurementId: "G-SPNTG0ZJCC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);