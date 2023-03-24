import { View, Text, StyleSheet } from "react-native";

function BackNextButtons() {
  return (
    <View style={styles.buttonsContainer}>
      <Pressable style={styles.button}>Back</Pressable>
      <Pressable style={styles.button}>Next</Pressable>
    </View>
  );
}

export default BackNextButtons;

const styles = StyleSheet.create({
    buttonsContainer: {},
    button: {}
});
