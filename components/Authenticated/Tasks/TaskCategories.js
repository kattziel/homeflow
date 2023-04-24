import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import TaskIcon from "./TaskIcon";

const TaskCategories = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Choose task</Text>
          <Text style={styles.header}>categories</Text>
        </View>
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>
            Select at least one to continue. You can edit these categories or
            add more later.
          </Text>
        </View>
        <View style={styles.tasksContainer}>
          <TaskIcon
            subtitle="mail"
            imageName="mail"
            backgroundColor="#2e4a9e"
          />
          <TaskIcon
            subtitle="mail"
            imageName="mail"
            backgroundColor="#2e4a9e"
          />
          <TaskIcon
            subtitle="mail"
            imageName="mail"
            backgroundColor="#2e4a9e"
          />
          {/* <TaskIcon />
          <TaskIcon />
          <TaskIcon />
          <TaskIcon />
          <TaskIcon />
          <TaskIcon /> */}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TaskCategories;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
  },
  headerContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  header: {
    fontSize: 30,
    color: "gray",
  },
  subtitleContainer: {
    marginHorizontal: 40,
  },
  subtitle: {
    fontSize: 20,
    textAlign: "center",
    color: "gray",
  },
  tasksContainer: {},
});
