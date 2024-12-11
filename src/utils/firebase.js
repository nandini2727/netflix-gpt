
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
import { FIREBASE_API_KEY } from "./constants";


const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
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