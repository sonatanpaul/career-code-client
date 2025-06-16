import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { app } from "../firebase/firebase.init";

const auth = getAuth(app);
export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Monitor auth state Change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);
  console.log("Monitor auth state Change", user);

  // Register
  const createUserRegister = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // Login
  const createUserLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // sign out user
  const logoutUser = async () => {
    try {
      setLoading(true);
      await signOut(auth);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const authValue = {
    // State
    user,
    loading,
    // Actions
    createUserRegister,
    createUserLogin,
    logoutUser,
  };
  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
}
