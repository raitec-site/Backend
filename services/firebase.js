// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7fZ2OkOM121nEKusDw3fA4oKzNsn3tgo",
  authDomain: "raitec-site.firebaseapp.com",
  projectId: "raitec-site",
  storageBucket: "raitec-site.firebasestorage.app",
  messagingSenderId: "237673513510",
  appId: "1:237673513510:web:dc9885e8a2c24a88b85ce7",
  measurementId: "G-G11JZ6K2H6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);