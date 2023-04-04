import { View, Text, StyleSheet } from "react-native";

function WelcomeScreen() {
  return <View style={styles.container}>
    <Text>Welcome!</Text>
    <Text>You authenticated successfully!</Text>
    </View>;
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    marginVertical: 50,
    color: "red",
    fontSize: "100px",
    justifyContent: "center",
    alignItems: "center",
  },
});
