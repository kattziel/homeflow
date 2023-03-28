import { createContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({
  token: "",
  isAuthenticated: false,
  authenticate: () => {},
  logout: () => {},
  // default values
});

function AuthContextProvider({ children }) {
  //wrapper around other components

  const [authToken, setAuthToken] = useState();

  function authenticate(token) {
    setAuthToken(token);
    // AsyncStorage.setItem("token", token);
  //   // this will store item in storage
  }
  // verifying whether we signed up / logged in successfully

  function logout() {
    setAuthToken(null);
    AsyncStorage.removeItem('token');
  }
  // getting rid of token

  const value = {
    token: authToken,
    isAuthenticated: !!authToken,
    // used only to render conditionally the screens in app.js
    authenticate: authenticate,
    logout: logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
