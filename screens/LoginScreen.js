import { View, Text, StyleSheet } from "react-native";

function LoginScreen() {
  return <View style={styles.container}>Login Screen</View>;
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
