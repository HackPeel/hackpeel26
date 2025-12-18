// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQiY9mlKLLNoM7R7pvC_spkRH526uOUuU",
  authDomain: "hackpeel-81306.firebaseapp.com",
  projectId: "hackpeel-81306",
  storageBucket: "hackpeel-81306.firebasestorage.app",
  messagingSenderId: "283161532028",
  appId: "1:283161532028:web:5ce219254ff9fa596a9bf9",
  measurementId: "G-0P47S0KHZH"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getDatabase(app);