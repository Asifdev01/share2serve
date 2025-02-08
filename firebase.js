// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgBSD5WdIKbbPFx4jtRzKA3rz8ePtg7G4",
  authDomain: "asif-share2serve.firebaseapp.com",
  projectId: "asif-share2serve",
  storageBucket: "asif-share2serve.firebasestorage.app",
  messagingSenderId: "911454589284",
  appId: "1:911454589284:web:06b6649c1320511e332a71",
  measurementId: "G-HY6L5JX1N8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);