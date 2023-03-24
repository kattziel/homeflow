import { View, Text, StyleSheet } from "react-native";

function TasksScreen() {
  return (
    <View>
      <Text style={styles.text}>TasksScreen</Text>
    </View>
  );
}

export default TasksScreen;

const styles = StyleSheet.create({
  text: {
    color: "blue",
    fontSize: 25,
  },
});
