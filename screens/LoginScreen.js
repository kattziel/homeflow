import { View, Text, StyleSheet } from "react-native";

function LoginScreen() {
  return <View style={styles.container}>
    <Text>Login Screen</Text>
    </View>;
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
