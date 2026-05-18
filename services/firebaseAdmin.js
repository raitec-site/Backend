require("dotenv").config();

const admin = require("firebase-admin");

const privateKey = process.env.FIREBASE_PRIVATE_KEY;

if (!privateKey) {
  throw new Error("FIREBASE_PRIVATE_KEY não definida no ambiente");
}

// Funciona tanto com dotenv quanto com dotenvx
const parsedKey = privateKey.includes('\\n') 
  ? privateKey.replace(/\\n/g, '\n') 
  : privateKey;

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: parsedKey
  })
});

module.exports = admin.firestore();