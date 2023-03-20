import { View, Text, StyleSheet } from "react-native";
import AuthForm from "../components/Auth/AuthForm";

function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
      <AuthForm isLogin formText="Want to create a new account?"/>
    </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    color: "red",
    fontSize: "100px",
    justifyContent: "center",
    alignItems: "center",
  },
});
