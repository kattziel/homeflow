import { View, StyleSheet } from "react-native";
import AuthForm from "../components/Auth/AuthForm";

function SignupScreen() {
  return (
    <View style={styles.container}>
      <AuthForm formText="Already have an account? Sign in."/>
    </View>
  );
}

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    color: "red",
    fontSize: "100px",
    justifyContent: "center",
    alignItems: "center",
  },
});
