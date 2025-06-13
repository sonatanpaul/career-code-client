import { AuthContext } from "../contexts/AuthContext";

export default function AuthProvider({ children }) {
  const authState = {};
  return <AuthContext.Provider value={authState}></AuthContext.Provider>;
}
