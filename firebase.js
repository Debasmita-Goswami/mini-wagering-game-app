// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDnN7NI7WMzBioT5LzMm2yiYbw1QscrR6o",
    authDomain: "test-auth-c12dd.firebaseapp.com",
    projectId: "test-auth-c12dd",
    storageBucket: "test-auth-c12dd.appspot.com",
    messagingSenderId: "363180742924",
    appId: "1:363180742924:web:810a7706acd473b2099129"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };