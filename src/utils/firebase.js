
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
import { FIREBASE_API_KEY } from "./constants";


<<<<<<< HEAD
const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
=======
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
=======
>>>>>>> 0493215 (minor changes made)
const firebaseConfig = {
  apiKey: "AIzaSyCGNWZeYGpNLx2YQvyQN4XKYQNLXQSbaj0",
>>>>>>> e7f9588 (firebase integration and signin & signout added)
  authDomain: "netflixgpt-5a72e.firebaseapp.com",
  projectId: "netflixgpt-5a72e",
  storageBucket: "netflixgpt-5a72e.firebasestorage.app",
  messagingSenderId: "512852416327",
  appId: "1:512852416327:web:cd0c1b230a56725a035e62",
  measurementId: "G-1ZKPCXWPD8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();