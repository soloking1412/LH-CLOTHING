// Test script to verify Firebase authentication
// Run this in your browser console

import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

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

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

async function testLogin() {
  try {
    // Test with admin account
    const userCredential = await signInWithEmailAndPassword(
      auth, 
      'admin@gmail.com', 
      'Admin@123'
    );
    
    console.log('✅ Admin login successful!');
    console.log('User:', userCredential.user.email);
    
    // Sign out
    await auth.signOut();
    console.log('✅ Sign out successful');
    
  } catch (error) {
    console.error('❌ Login failed:', error.code, error.message);
  }
}

// Run the test
testLogin();
