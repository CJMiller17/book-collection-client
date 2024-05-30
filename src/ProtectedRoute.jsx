import { useContext } from "react"
import { AuthContext } from "./authContext"
import { Navigate } from "react-router-dom"

// Properly await GetToken by using return 

const ProtectedRoute = ({ children }) => {
    const { auth } = useContext(AuthContext)
    console.log("protected route", auth.accessToken); 

    if (!auth.accessToken) {
      return <Navigate to="/login" />;
    }

    return children
}

export default ProtectedRoute