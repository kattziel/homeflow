import { View, Text, StyleSheet } from "react-native";

function TaskTile(props) {
  console.log(props);
  console.log(props.name);
  console.log(props.person);
  return (
    <View style={styles.taskItem}>
      <Text style={styles.taskItemName}>{props.name}</Text>
      <Text style={styles.taskItemPerson}>{props.person}</Text>
    </View>
  );
}

export default TaskTile;

const styles = StyleSheet.create({
  taskItem: {
    flex: 1,
    flexDirection: "row",
  },
  taskItemName: {
    fontSize: 12,
    color: "black",
  },
  taskItemPerson: {
    fontSize: 12,
    color: "black",
  },
});
