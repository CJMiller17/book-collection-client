import { useState, createContext } from "react"

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  // Why is children in red??
  const [auth, setAuth] = useState({ accessToken: undefined });

//   const auth = {
//     accessToken,
//     setAccessToken,
//   };

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};