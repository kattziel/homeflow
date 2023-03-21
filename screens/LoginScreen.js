import { View, StyleSheet } from "react-native";
import AuthContent from "../components/Auth/AuthContent";

function LoginScreen() {
  function loginHandler() {
  }
  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;

const styles = StyleSheet.create({});
