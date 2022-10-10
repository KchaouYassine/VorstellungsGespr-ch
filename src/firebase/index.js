// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBIgk8bIhfIR8uShZpJvg3qUwKNu0mBNFk",
  authDomain: "vorestellungsgespraech.firebaseapp.com",
  projectId: "vorestellungsgespraech",
  storageBucket: "vorestellungsgespraech.appspot.com",
  messagingSenderId: "527812253166",
  appId: "1:527812253166:web:9b73b0904995471d652aff",
  measurementId: "G-QFKX5TRB6N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app)

export { auth }