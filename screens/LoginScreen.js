import { View, StyleSheet } from "react-native";
import AuthForm from "../components/Auth/AuthForm";

function LoginScreen() {
  return (
    <View style={styles.container}>
      <AuthForm isLogin/>
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
