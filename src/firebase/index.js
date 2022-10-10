// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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