const { initializeApp } = require("firebase/app");
const { getAuth }       = require("firebase/auth");

const firebaseConfig = {
  apiKey: "AIzaSyA7fZ2OkOM121nEKusDw3fA4oKzNsn3tgo",
  authDomain: "raitec-site.firebaseapp.com",
  projectId: "raitec-site",
  storageBucket: "raitec-site.firebasestorage.app",
  messagingSenderId: "237673513510",
  appId: "1:237673513510:web:dc9885e8a2c24a88b85ce7",
  measurementId: "G-G11JZ6K2H6"
};

const app  = initializeApp(firebaseConfig);
const auth = getAuth(app);

module.exports = { auth };