import { StyleSheet } from "react-native";
import { useState } from "react";

import LoadingOverlay from "../components/UI/LoadingOverlay";
import AuthContent from "../components/Auth/AuthContent";
import { authenticate } from "../util/auth";
import { Alert } from "react-native";

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  // async function loginHandler(email, password) {
  //   console.log(email, password, "- email and password from login screen")
  //   setIsAuthenticating(true);
  //   try {
  //     const response = await authenticate(email, password);
  //     console.log(response.data);
  //   } catch (error) {
  //     console.log(error, "error");
  //   }

  //   setIsAuthenticating(false);
  // }
  async function loginHandler(email, password) {
    console.log(email, password, 'email and password from login handler function')
    setIsAuthenticating(true);
    try {
      await authenticate(email, password);
      console.log(email, password, 'email and password from authenticate function');
    } catch (error) {
      Alert.alert("Authentication failed!", "Could not log you in, please check your credentials or try again later.");
    }
    setIsAuthenticating(false);
  }
  if (isAuthenticating) {
    return <LoadingOverlay message="Logging user in..." />;
  }
  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;

const styles = StyleSheet.create({});
