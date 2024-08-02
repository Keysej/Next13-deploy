// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMFdZoSwcppk_4PNOEik0hN2MXxovRjY0",
  authDomain: "expense-tracker-e545b.firebaseapp.com",
  projectId: "expense-tracker-e545b",
  storageBucket: "expense-tracker-e545b.appspot.com",
  messagingSenderId: "771002564190",
  appId: "1:771002564190:web:21ace77855f9a13cdefecf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore(app)
