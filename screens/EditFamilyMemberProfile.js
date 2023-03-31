import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import Button from "../components/UI/Button";
import Input from "../components/UI/Input";

function EditFamilyMemberProfile() {
  const navigation = useNavigation();

  const [usersName, setUsersName] = useState(usersName);
  const [usersEmail, setUsersEmail] = useState(usersEmail);
  const [usersBirthDate, setUsersBirthDate] = useState(usersBirthDate);
  const [usersStatus, setUsersStatus] = useState(usersStatus);

  function cancelHandler() {
    navigation.navigate("AddFamilyMembersScreen");
  }
  function submitHandler() {
    navigation.navigate("AddFamilyMembersScreen");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Edit family member</Text>
      </View>
      <View style={styles.inputsContainer}>
        <Input placeholderText={"Name"} ioniconsName="person" />
        <Input placeholderText={"Email"} ioniconsName="mail" />
        <Input placeholderText={"Age"} ioniconsName="heart" />
        <Input placeholderText={"Role (optional)"} ioniconsName="people" />
      </View>
      <View style={styles.buttonsContainer}>
        <Button onPress={cancelHandler}>Cancel</Button>
        <Button onPress={submitHandler}>Save</Button>
      </View>
    </SafeAreaView>
  );
}

export default EditFamilyMemberProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 20,
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 25,
    marginBottom: 15,
  },
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
    borderRadius: 4,
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 30,
  },
});
