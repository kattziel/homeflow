import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  FlatList,
  Pressable,
} from "react-native";
import { useState } from "react";

import Input from "../../../components/UI/Input";
import Button from "../../../components/UI/Button";
// import TaskTile from "./TaskTile";

function TasksScreen() {
  const [enteredTaskText, setEnteredTaskText] = useState("");
  const [enteredPerson, setEnteredPerson] = useState("");
  const [tasks, setTasks] = useState([]);

  const taskInputHandler = (enteredValue) => {
    setEnteredTaskText(enteredValue);
    console.log(enteredValue);
  };

  const personInputHandler = (enteredValue) => {
    setEnteredPerson(enteredValue);
    console.log(enteredValue);
  };

  const addTaskHandler = () => {
    setTasks((currentTasks) => [
      ...currentTasks,
      {
        name: enteredTaskText,
        person: enteredPerson,
        id: Math.random().toString(),
      },
    ]);
    setEnteredPerson("");
    setEnteredTaskText("");
  };

  const deleteTaskHandler = (id) => {
    console.log("pressed!");
    console.log(id);
    setTasks((currentTasks) => {
      return currentTasks.filter((task) => task.id !== id);
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollviewContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.text}>Tasks</Text>
        </View>
        <View>
          <Input
            value={enteredTaskText}
            onUpdateValue={taskInputHandler}
            placeholderText={"Set your task"}
            ioniconsName="logo-buffer"
            // isInvalid={nameIsInvalid}
            keyboardType="default"
            // autoCapitalize="words"
          />
          <Input
            value={enteredPerson}
            onUpdateValue={personInputHandler}
            placeholderText={"Person responsible for the task"}
            ioniconsName="body"
            keyboardType="default"
            // isInvalid={ageIsInvalid}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={addTaskHandler}>Add</Button>
        </View>
      </ScrollView>

      <ScrollView style={styles.flatlistContainer}>
        {tasks.length === 0 && (
          <View style={styles.noTasksContainer}>
            <Text style={styles.noTasksText}>No tasks found.</Text>
            <Text style={styles.noTasksText}>Add first task.</Text>
          </View>
        )}

        {tasks.length > 0 && (
          <FlatList
            data={tasks}
            keyExtractor={(item, index) => item.id.toString()}
            renderItem={(task) => {
              return (
                <Pressable
                  style={styles.flatlistItem}
                  onPress={() => deleteTaskHandler(task.item.id)}
                >
                  <Text style={styles.flatlistItemText}>
                    <Text style={styles.taskHeader}>To do task:</Text>{" "}
                    {task.item.name}
                  </Text>
                  <Text style={styles.flatlistItemText}>
                    <Text style={styles.taskHeader}>Person responsible: </Text>
                    {task.item.person}
                  </Text>
                </Pressable>
              );
            }}
            alwaysBounceVertical={false}
            style={styles.flatlistContainer}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

export default TasksScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 20,
    marginTop: 60,
  },
  headerContainer: {
    paddingBottom: 20,
  },
  text: {
    fontSize: 28,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  noTasksContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  noTasksText: {
    color: "gray",
    fontSize: 15,
  },
  scrollviewContainer: {
  },
  flatlistContainer: {
  },
  flatlistItem: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    backgroundColor: "lightgray",
    margin: 5,
    elevation: 3, // Add elevation for shadow effect (Android only)
    shadowColor: "rgba(0, 0, 0, 0.2)", // Shadow color
    shadowOpacity: 1, // Shadow opacity
    shadowOffset: {
      width: 0,
      height: 2,
    }, // Shadow offset
    shadowRadius: 4, // Shadow radius
  },
  flatlistItemText: {
    fontSize: 12,
    color: "green",
  },
  flatlistContainer: {
    paddingVertical: 5,
  },
  flatlistItemText: {
    color: "gray",
    padding: 2,
  },
  taskHeader: {
    fontWeight: "bold",
  },
});
