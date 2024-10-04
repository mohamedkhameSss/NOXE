import jwtDecode from "jwt-decode";
import { createContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export let AuthContext = createContext(null);
const AuthContextProvider = (props) => {
  const [userData, setUserData] = useState(true);
  let saveUserData = () => {
    let encodedToken = localStorage.getItem("token");
    let decodedToken = jwtDecode(encodedToken);
    setUserData(decodedToken);
  };
  let logout = () => {
    localStorage.removeItem("token");

    setUserData(null);
    return <Navigate to='login' replace={true} />;
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      saveUserData();
    }
  }, []);
  return (
    <AuthContext.Provider value={{ logout, userData, saveUserData }}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;
