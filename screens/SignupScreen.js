import AuthContent from "../components/Auth/AuthContent";
import { useState } from "react";

import { createUser } from "../util/auth";
import LoadingOverlay from "../components/UI/LoadingOverlay";

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function signupHandler(email, password) {
    setIsAuthenticating(true);
    try {
      await createUser(email, password);
    } catch (error) {
      console.log(JSON.stringify(error, null, 2));
    } finally {
      setIsAuthenticating(false);
    }
  }
  if (isAuthenticating) {
    return <LoadingOverlay message="Creating user..." />;
  }
  // connecting signupHandler to the AuthForm, cause it is where we are gathering the data
  return <AuthContent onAuthenticate={signupHandler} />;
  // AuthContent gets an onAuthenticated prop, e.g. the function that is triggered when all the inputs were filled correctly;
}

export default SignupScreen;
