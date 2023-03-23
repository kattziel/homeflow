import AuthContent from "../components/Auth/AuthContent";
import { useState } from "react";
import Alert from "react-native";

import { createUser } from "../util/auth";
import LoadingOverlay from "../components/UI/LoadingOverlay";

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function signupHandler(email, password) {
    setIsAuthenticating(true);
    try {
      await createUser(email, password);
    } catch (error) {
      console.log(error, "error content")
      Alert.alert(
        "Authentication failed!",
        "Could not sign you up, please check your credentials or try again later."
        );
        throw error;
    } finally {
      setIsAuthenticating(false);
    }

    //
  }
  if (isAuthenticating) {
    return <LoadingOverlay message="Creating user..." />;
  }
  // connecting signupHandler to the AuthForm, cause it is where we are gathering the data
  return <AuthContent onAuthenticate={signupHandler} />;
  // AuthContent gets an onAuthenticated prop, e.g. the function that is triggered when all the inputs were filled correctly;
}

export default SignupScreen;
