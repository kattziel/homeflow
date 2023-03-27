import { View, Text, TextInput, StyleSheet } from "react-native";
import Button from "../components/UI/Button";
import { Ionicons } from "@expo/vector-icons";

function EditFamilyMemberProfile() {
  function cancelHandler() {}
  function submitHandler() {}

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Add family member</Text>
      </View>
      <View style={styles.inputsContainer}>
        <View style={styles.inputContainer}>
          <Ionicons
            style={styles.ionicons}
            name="people"
            size={12}
            color="black"
          />
          <TextInput style={styles.input} placeholder="name" />
        </View>
        <View style={styles.inputContainer}>
          <Ionicons
            style={styles.ionicons}
            name="mail"
            size={12}
            color="black"
          />
          <TextInput style={styles.input} placeholder="email" />
        </View>
        <View style={styles.inputContainer}>
          <Ionicons
            style={styles.ionicons}
            name="calendar"
            size={12}
            color="black"
          />
          <TextInput style={styles.input} placeholder="birthday" />
        </View>
        <View style={styles.inputContainer}>
          <Ionicons
            style={styles.ionicons}
            name="people"
            size={12}
            color="black"
          />
          <TextInput style={styles.input} placeholder="status" />
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <Button onPress={cancelHandler}>Cancel</Button>
        <Button onPress={submitHandler}>Save</Button>
      </View>
    </View>
  );
}

export default EditFamilyMemberProfile;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginHorizontal: 30,
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 25,
    marginBottom: 15,
  },
  inputsContainer: {},
  inputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    padding: 5,
    flex: 1,
    backgroundColor: "white",
    marginVertical: 10,
    borderRadius: 4
  },
  buttonsContainer: {
    // flexDirection: "row",
    // alignItems: "center",
    // justifyContent: "space-around",
    // backgroundColor: "red",
  },
  ionicons: {
    fontSize: 25,
    padding: 8,
  },
});
