// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4TZjum5Yqu9VO2pr1ZbF0IoGNZSDqyXg",
  authDomain: "netflixgpt-b4751.firebaseapp.com",
  projectId: "netflixgpt-b4751",
  storageBucket: "netflixgpt-b4751.firebasestorage.app",
  messagingSenderId: "686049100709",
  appId: "1:686049100709:web:f772cf6bf91f1fc28fde4c",
  measurementId: "G-X2VDGVMTTB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
