// Test login with existing customer account
// Run this in your browser console at localhost:3000

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

async function testCustomerLogin() {
  try {
    console.log('🔐 Testing customer login...');
    
    const userCredential = await signInWithEmailAndPassword(
      auth, 
      'customer@gmail.com', 
      'Customer@123'
    );
    
    console.log('✅ Customer login successful!');
    console.log('User:', userCredential.user.email);
    console.log('Display Name:', userCredential.user.displayName);
    console.log('UID:', userCredential.user.uid);
    
  } catch (error) {
    console.error('❌ Customer login failed:', error.code, error.message);
    
    if (error.code === 'auth/user-not-found') {
      console.log('💡 Try creating the account first or use admin@gmail.com');
    } else if (error.code === 'auth/wrong-password') {
      console.log('💡 Check the password');
    }
  }
}

// Run the test
testCustomerLogin();
