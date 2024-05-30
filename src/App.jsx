import { useContext, useEffect } from "react"
import { AuthContext } from "./authContext"
import { readUser } from "./apis"
// import { useNavigate } from "react-router-dom"


function App() {
  const { auth } = useContext(AuthContext)
  // const navigate = useNavigate()
  const submit = () => {
    readUser({ auth })
  }

  
  // useEffect(() => {
  //   if (auth.accessToken === undefined) {
  //     console.log('redirecting')
  //     navigate('/login')
  //   }
  // }, [auth.accessToken, navigate])

  return (
    <div className="p-5">
      <button
        onClick={() => submit()}
      >Fetch Profile</button>
    </div>
  )
}

export default App