import { StyleSheet } from "react-native";
import { useState, useContext } from "react";
import { AuthContext } from "../store/auth-context";

import LoadingOverlay from "../components/UI/LoadingOverlay";
import AuthContent from "../components/Auth/AuthContent";
import { login } from "../util/auth";
import { Alert } from "react-native";

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);
  // async function loginHandler(email, password) {
  //   console.log(email, password, "- email and password from login screen")
  //   setIsAuthenticating(true);
  //   try {
  //     const response = await login(email, password);
  //     console.log(response.data);
  //   } catch (error) {
  //     console.log(error, "error");
  //   }

  //   setIsAuthenticating(false);
  // }
  async function loginHandler(email, password) {
    console.log(
      email,
      password,
      "email and password from login handler function"
    );
    setIsAuthenticating(true);
    try {
      const token = await login(email, password);
      authCtx.authenticate(token);
      console.log(email, password, "email and password from login function");
    } catch (error) {
      Alert.alert(
        "Authentication failed!",
        "Could not log you in, please check your credentials or try again later."
        );
        setIsAuthenticating(false);
    }
  }
  if (isAuthenticating) {
    return <LoadingOverlay message="Logging user in..." />;
  }
  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;

const styles = StyleSheet.create({});
