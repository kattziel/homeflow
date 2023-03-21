import { View, StyleSheet } from "react-native";
import AuthContent from "../components/Auth/AuthContent";

function LoginScreen() {
  return (
    <View style={styles.container}>
      <AuthContent isLogin/>
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
