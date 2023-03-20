import { View, Text, StyleSheet } from "react-native";

function WelcomeScreen() {
  return <View style={styles.container}><Text>WelcomeScreen</Text></View>;
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    color: "red",
    fontSize: "100px",
    justifyContent: "center",
    alignItems: "center",
  },
});
