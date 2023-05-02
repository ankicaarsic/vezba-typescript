// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7JUt1SPoMdDbHrnUjMpwdNjJygdSTOQc",
  authDomain: "prva-app-2e4c2.firebaseapp.com",
  projectId: "prva-app-2e4c2",
  storageBucket: "prva-app-2e4c2.appspot.com",
  messagingSenderId: "238582592026",
  appId: "1:238582592026:web:9e5966044fd429b3f157a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();