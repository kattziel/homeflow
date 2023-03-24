import { View, Text, StyleSheet } from "react-native";

function GroceriesScreen() {
  return (
    <View>
      <Text style={styles.text}>GroceriesScreen</Text>
    </View>
  );
}

export default GroceriesScreen;

const styles = StyleSheet.create({
  text: {
    color: "blue",
    fontSize: 25,
  },
});
