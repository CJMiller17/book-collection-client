import { useContext, useState } from "react";
import { AuthContext } from "./authContext";
import { createUser } from "./apis";

function CreateUser() {
  const { auth } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const submit = () => {
    console.log("Get Token Submission");
    createUser({ auth, username, password, firstName, lastName });
  };

  return (
    <div className="p-5">
      <h1>Create New User</h1>
      <div>
        <div>Username:</div>
        <input
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </div>

      <div>
        <div>Password:</div>
        <input
          type="text"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>

      <div>
        <div>First Name:</div>
        <input
          type="text"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
        />
      </div>

      <div>
        <div>Last Name:</div>
        <input
          type="text"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
        />
      </div>

      <div style={{ marginTop: 20 }}>
        <button onClick={() => submit()}>Submit</button>
      </div>
    </div>
  );
}

export default CreateUser;
