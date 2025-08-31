// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjQKcNlEMPRU-qroyYIQax1s1OICPuA5o",
  authDomain: "chaldal-cloned.firebaseapp.com",
  projectId: "chaldal-cloned",
  storageBucket: "chaldal-cloned.firebasestorage.app",
  messagingSenderId: "225129606955",
  appId: "1:225129606955:web:4306c4afb3361a17285f6e",
  measurementId: "G-VHNJ8LLVPL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
