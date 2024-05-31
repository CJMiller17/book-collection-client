import { useState, createContext } from "react"

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  // Why is children in red??
  const [accessToken, setAccessToken] = useState()

  const auth = {
    accessToken,
    setAccessToken,
  };

  return (
    <AuthContext.Provider value={{ auth }}>
      {children}
    </AuthContext.Provider>
  );
};