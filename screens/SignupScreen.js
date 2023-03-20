import AuthForm from "../components/Auth/AuthForm";
import { createUser } from "../util/auth";

function SignupScreen() {

  function signupHandler() {
    createUser();
  }
  // connecting signupHandler to the AuthForm, cause it is where we are gathering the data
  return <AuthForm />;
}

export default SignupScreen;
