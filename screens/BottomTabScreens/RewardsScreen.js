import { View, Text, StyleSheet } from "react-native";

function RewardsScreen() {
  return (
    <View>
      <Text style={styles.text}>RewardsScreen</Text>
    </View>
  );
}

export default RewardsScreen;

const style = StyleSheet.create({
  text: {
    color: "blue",
    fontSize: 25,
  },
});
