import { StyleSheet } from "react-native";
import { useState } from "react";

import LoadingOverlay from "../components/UI/LoadingOverlay";
import AuthContent from "../components/Auth/AuthContent";
import { authenticate } from '../util/auth';

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function loginHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
     const response = await authenticate({ email, password });
     console.log(response.data);
    } catch (error) {
      console.log(error, "error");
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
