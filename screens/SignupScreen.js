import { View, Text, StyleSheet } from "react-native";

function SignupScreen() {
  return (
    <View style={styles.container}>
      <Text>Signup Screen</Text>
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
