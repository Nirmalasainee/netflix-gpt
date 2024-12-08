// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnon5y6ei1DG8dkne0Cv9A3LVf4vSJoGc",
  authDomain: "netflixgpt-80895.firebaseapp.com",
  projectId: "netflixgpt-80895",
  storageBucket: "netflixgpt-80895.firebasestorage.app",
  messagingSenderId: "291021837472",
  appId: "1:291021837472:web:185c8dd27dbc4043ae25c5",
  measurementId: "G-XXWQC7EV5J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();