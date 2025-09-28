// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJAUiWNNWl5dQzIq9Sc228jjxQFefxOQs",
  authDomain: "lhstylehub-2c188.firebaseapp.com",
  projectId: "lhstylehub-2c188",
  storageBucket: "lhstylehub-2c188.firebasestorage.app",
  messagingSenderId: "55338372665",
  appId: "1:55338372665:web:34fec9b4dd5a25585987e8",
  measurementId: "G-EZV04KB2LY",
  databaseURL: "https://lhstylehub-2c188-default-rtdb.firebaseio.com/"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);

export default app;
