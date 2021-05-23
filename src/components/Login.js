import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/Authcontext";
import { useState } from "react";

export const Login = () => {
  const { login,logOut,loginWithCredentials } = useAuth();
  const [username, setUser] = useState("");
  const [password, setPassword] = useState("");
  const { state } = useLocation();
  {/*const navigate = useNavigate();*/}
  console.log({ state });
  function loginHandler() {
   login?logOut():loginWithCredentials(username, password);
    {/*// setlogin((login) => !login);
    //navigate(state?.from ? state.from : "/wishlist");*/}
  }
  return (
    <>
      <div
        style={{
          marginTop: "5rem",display:"flex",flexDirection:"column",justifyContent:"space-between"
        }}
        className="border-div shadow"
      >
        <h2 style={{ textAlign: "center" }}>Login</h2>
        <input
          style={{
            border: "none",
            borderBottom: "2px solid grey",
            margin: "1rem"
          }}
          onChange={(e) => setUser(e.target.value)}
          placeholder="username"
        />
        <input
          style={{ border: "none", borderBottom: "2px solid grey" }}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <div>
        <button onClick={loginHandler}>{login ? "Logout" : "Login"}</button>
        </div>
      </div>
    </>
  );
};
