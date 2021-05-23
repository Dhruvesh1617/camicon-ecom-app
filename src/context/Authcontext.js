import { createContext, useContext, useState,useEffect } from "react";
import { fakeAuthAPI } from "../fakeAuthAPI";
const authContext = createContext();

export const AuthProvider = ({ children }) => {
  const [login, setlogin] = useState(false);
  useEffect(()=>
  {
    const loginvalue=JSON.parse(localStorage?.getItem("logindata"))
    console.log({loginvalue})
  loginvalue?.isUserLoggedIn && setlogin(true)
  },
  [])

  const logOut=()=>
  {
      localStorage?.removeItem("login");
      setlogin(false)
  }

  async function loginWithCredentials(username, password) {
    try {
      const user = await fakeAuthAPI(username, password);
      //console.log(user)
      if (user.status === 200) {
        setlogin(true);
        localStorage?.setItem("logindata",JSON.stringify({isUserLoggedIn:true}))
        console.log("sahi banda hay");
      }
    } catch (error) {
      console.log("name password nay pta kya", error);
    }
  }
  return (
    <>
      <authContext.Provider value={{ login,logOut,loginWithCredentials }}>
        {children}
      </authContext.Provider>
    </>
  );
};

export const useAuth = () => useContext(authContext);
