// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; // Import Google authentication

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPIoZ3oeP1de4GNeJVRGESykYviQrgbto",
  authDomain: "pr13--authentication.firebaseapp.com",
  projectId: "pr13--authentication",
  storageBucket: "pr13--authentication.firebasestorage.app",
  messagingSenderId: "766472670317",
  appId: "1:766472670317:web:28fd3d512931ae7b1c0364",
  measurementId: "G-L9NKGXZN12"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // Export Google authentication
export const provider = new GoogleAuthProvider(); // Export GoogleAuthProvider