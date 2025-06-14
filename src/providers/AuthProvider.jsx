import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { app } from "../firebase/firebase.init";

const auth = getAuth(app);
export default function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);

  const createUserRegister = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const authState = {
    loading,
    createUserRegister,
  };
  return (
    <AuthContext.Provider value={authState}>{children}</AuthContext.Provider>
  );
}
