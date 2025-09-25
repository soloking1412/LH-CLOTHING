// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCekoXLCybKxishuRUQ-U3lo2a1FFYPW7k",
  authDomain: "cafe-billing-96901.firebaseapp.com",
  projectId: "cafe-billing-96901",
  storageBucket: "cafe-billing-96901.firebasestorage.app",
  messagingSenderId: "779597144222",
  appId: "1:779597144222:web:0524b254dea2759c709b8f",
  measurementId: "G-W93HVQ63SH",
  databaseURL: "https://cafe-billing-96901-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);

export default app;
