import { useContext, useState } from "react"
import { AuthContext } from "./authContext"
import { getToken } from "./apis"
import { useNavigate } from "react-router-dom"

function Login() {
  const { auth } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const submit = () => {
      getToken({
          auth, username, password
      })
          .then((accessToken) => {
            console.log("AccessToken: ", accessToken)
            if (accessToken) {
                console.log("Why no workie?")
                navigate("/books")
                // navigate("/createUser");
            }
        })
        .catch()
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
        <button onClick={() => submit()}>Submit</button>
      </div>
    </div>
  );
}

export default Login;
