import { useContext, useState } from "react"
import { AuthContext } from "./authContext"
import { getToken } from "./apis"
import { Link, useNavigate } from "react-router-dom"


function Login() {
  const { auth } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const submit = () => {
      getToken({ auth, username, password })
          .then((data) => {
            console.log("AccessToken: ", data.access)
                console.log("Why no workie?")
                navigate("/books")
              })
          .catch((error) => {
              console.log("Error Logging In: ", error)
            })
  };

  return (
    <div className="p-5">
      <h1>Login</h1>
      <div>
        <div>Username:</div>
        <input onChange={(e) => setUsername(e.target.value)} value={username} />
      </div>

      <div>
        <div>Password:</div>
        <input onChange={(e) => setPassword(e.target.value)} value={password} />
      </div>

      <div style={{ marginTop: 20 }}>
        <button className="click" onClick={() => submit()}>Submit</button>
      </div>
      <div style={{ marginTop: 20 }}>
        <Link to="/createUser">
          <button className="click" >Create User</button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
