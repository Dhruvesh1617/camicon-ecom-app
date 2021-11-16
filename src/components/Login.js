import { useLocation} from "react-router-dom";
import { useAuth } from "../context/Authcontext";
import { useState } from "react";
import {Link} from "react-router-dom";
export const Login = () => {
  const { login,logOut,loginWithCredentials } = useAuth();
  const [username, setUser] = useState("");
  const [password, setPassword] = useState("");
  const { state } = useLocation();
  console.log({ state });
  function loginHandler() {
   login?logOut():loginWithCredentials(username, password);
  }
  return (
    <>
      <div
        style={{
          marginTop: "5rem",display:"flex",flexDirection:"column",justifyContent:"space-between"
        }}
        className="cred-card shadow"
      >
        <h2 style={{ textAlign: "center" }}>Login</h2>
        <input
          className="credential-elements"
          onChange={(e) => setUser(e.target.value)}
          placeholder="email"
        />
        <input
            className="credential-elements"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password" 
        />
        <div>
        <button onClick={loginHandler}>{login ? "Logout":"Login"}</button>
        </div>
        <div className="grey-text">
       <span>Not Registered yet?<Link to="/register"><button>Register</button></Link></span>
       </div>
      </div>
    </>
  );
};
