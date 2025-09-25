// Enhanced debug script to identify the exact issue
// Run this in your browser console at localhost:3000

import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

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
const database = getDatabase(app);

async function debugCustomerCreation() {
  console.log('🔍 Starting debug process...');
  
  try {
    console.log('📝 Step 1: Creating user with email/password...');
    
    // Step 1: Create user
    const userCredential = await createUserWithEmailAndPassword(
      auth, 
      'customer@gmail.com', 
      'Customer@123'
    );
    
    console.log('✅ User created successfully!');
    console.log('User ID:', userCredential.user.uid);
    console.log('User Email:', userCredential.user.email);
    
    const user = userCredential.user;
    
    console.log('📝 Step 2: Updating profile...');
    
    // Step 2: Update profile
    await updateProfile(user, {
      displayName: 'John Customer'
    });
    
    console.log('✅ Profile updated successfully!');
    
    console.log('📝 Step 3: Creating user profile in database...');
    
    // Step 3: Create user profile in database
    const userProfileData = {
      uid: user.uid,
      email: user.email,
      firstName: 'John',
      lastName: 'Customer',
      phone: '+918270758851',
      displayName: 'John Customer',
      createdAt: new Date().toISOString(),
      orders: []
    };
    
    await set(ref(database, `users/${user.uid}`), userProfileData);
    
    console.log('✅ Database profile created successfully!');
    console.log('🎉 All steps completed successfully!');
    console.log('📧 Email: customer@gmail.com');
    console.log('🔑 Password: Customer@123');
    
  } catch (error) {
    console.error('❌ Error occurred:', error);
    console.error('Error Code:', error.code);
    console.error('Error Message:', error.message);
    
    // Provide specific solutions based on error code
    switch (error.code) {
      case 'auth/email-already-in-use':
        console.log('💡 Solution: Try a different email address');
        break;
      case 'auth/weak-password':
        console.log('💡 Solution: Use a stronger password (at least 6 characters)');
        break;
      case 'auth/invalid-email':
        console.log('💡 Solution: Enter a valid email address');
        break;
      case 'auth/operation-not-allowed':
        console.log('💡 Solution: Email/password authentication is not enabled in Firebase Console');
        break;
      case 'auth/network-request-failed':
        console.log('💡 Solution: Check your internet connection');
        break;
      case 'PERMISSION_DENIED':
        console.log('💡 Solution: Database rules are blocking writes. Check Firebase Realtime Database rules');
        break;
      default:
        console.log('💡 Solution: Check Firebase Console settings and try again');
    }
  }
}

// Run the debug function
debugCustomerCreation();
