import AuthContent from "../components/Auth/AuthContent";
import { createUser } from "../util/auth";

function SignupScreen() {

  function signupHandler() {
    createUser();
  }
  // connecting signupHandler to the AuthForm, cause it is where we are gathering the data
  return <AuthContent />;
}

export default SignupScreen;
