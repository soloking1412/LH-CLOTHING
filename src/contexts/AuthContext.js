import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth';
import { ref, set, get, push } from 'firebase/database';
import { auth, database } from '../firebase/config';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userProfile, setUserProfile] = useState(null);

  // ✅ Google Sign-In
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      return result.user;
    } catch (error) {
      throw error;
    }
  };

  // ✅ Sign Up
  async function signup(email, password, firstName, lastName, phone) {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await updateProfile(user, {
        displayName: `${firstName} ${lastName}`
      });

      const userProfileData = {
        uid: user.uid,
        email: user.email,
        firstName,
        lastName,
        phone,
        displayName: `${firstName} ${lastName}`,
        createdAt: new Date().toISOString(),
        orders: []
      };

      await set(ref(database, `users/${user.uid}`), userProfileData);

      return user;
    } catch (error) {
      throw error;
    }
  }

  // ✅ Login
  async function login(email, password) {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    } catch (error) {
      throw error;
    }
  }

  // ✅ Logout
  function logout() {
    return signOut(auth);
  }

  // ✅ Get Profile
  async function getUserProfile(uid) {
    try {
      const snapshot = await get(ref(database, `users/${uid}`));
      if (snapshot.exists()) {
        return snapshot.val();
      }
      return null;
    } catch (error) {
      console.error('Error fetching user profile:', error);
      return null;
    }
  }

  // ✅ Update Profile
  async function updateUserProfile(uid, updates) {
    try {
      await set(ref(database, `users/${uid}`), updates);
      return true;
    } catch (error) {
      console.error('Error updating user profile:', error);
      return false;
    }
  }

  // ✅ Add Order
  async function addOrder(uid, orderData) {
    try {
      const orderRef = await push(ref(database, `users/${uid}/orders`), {
        ...orderData,
        orderId: Date.now().toString(),
        orderDate: new Date().toISOString(),
        status: 'pending'
      });
      return orderRef.key;
    } catch (error) {
      console.error('Error adding order:', error);
      return null;
    }
  }

  // ✅ Get Orders
  async function getUserOrders(uid) {
    try {
      const snapshot = await get(ref(database, `users/${uid}/orders`));
      if (snapshot.exists()) {
        const orders = [];
        snapshot.forEach((childSnapshot) => {
          orders.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
        return orders.sort((a, b) => new Date(b.orderDate) - new Date(a.orderDate));
      }
      return [];
    } catch (error) {
      console.error('Error fetching user orders:', error);
      return [];
    }
  }

  // ✅ Auth State Listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setCurrentUser(user);
        const profile = await getUserProfile(user.uid);
        setUserProfile(profile);
      } else {
        setCurrentUser(null);
        setUserProfile(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    userProfile,
    signup,
    login,
    logout,
    getUserProfile,
    updateUserProfile,
    addOrder,
    getUserOrders,
    signInWithGoogle // ✅ Google Login exposed here
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
