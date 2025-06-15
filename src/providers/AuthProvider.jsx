import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { app } from "../firebase/firebase.init";

const auth = getAuth(app);
export default function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
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

  const authState = {
    loading,
    createUserRegister,
    createUserLogin,
  };
  return (
    <AuthContext.Provider value={authState}>{children}</AuthContext.Provider>
  );
}
