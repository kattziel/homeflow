import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import Input from "../components/UI/Input";
import Button from "../components/UI/Button";
// import EmailReminder from "../components/UI/EmailReminder";
// import ResetPassword from "./ResetPassword";
import ErrorModal from "../components/UI/ErrorModal";

function CreateProfile() {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [enteredRole, setEnteredRole] = useState("");

  function updateInputValueHandler(inputType, enteredValue) {
    switch (inputType) {
      case "name":
        setEnteredName(enteredValue);
        console.log(enteredValue);
        break;
      case "email":
        setEnteredEmail(enteredValue);
        console.log(enteredValue);
        break;
      case "age":
        setEnteredAge(enteredValue);
        console.log(enteredValue);
        break;
      case "role":
        setEnteredRole(enteredValue);
        console.log(enteredValue);
        break;
    }
  }

  const navigation = useNavigation();

  function moveForwardHandler() {
    navigation.navigate("AddFamilyMembersScreen");
  }

  function moveBackwardsHandler() {
    navigation.navigate("AddFamilyMembersScreen");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.headerContainer}>
          <Text style={styles.text}>Create your profile</Text>
        </View>
        <View style={styles.inputsContainer}>
          <Input
            value={enteredName}
            placeholderText={"Name"}
            ioniconsName="person"
            onUpdateValue={updateInputValueHandler.bind(this, "name")}
          />
          <Input
            value={enteredEmail}
            placeholderText={"Email"}
            ioniconsName="mail"
            onUpdateValue={updateInputValueHandler.bind(this, "email")}
            keyboardType="email-address"
          />
          <Input
            value={enteredAge}
            placeholderText={"Age"}
            ioniconsName="heart"
            onUpdateValue={updateInputValueHandler.bind(this, "age")}
            keyboardType="numeric"
          />
          <Input
            value={enteredRole}
            placeholderText={"Role (optional)"}
            ioniconsName="people"
            onUpdateValue={updateInputValueHandler.bind(this, "role")}
          />
        </View>
        <View style={styles.buttonsContainer}>
          <Button onPress={moveBackwardsHandler}>Back</Button>
          <Button onPress={moveForwardHandler}>Next</Button>
        </View>
        <View>
          {/* <ResetPassword /> */}
          {/* <EmailReminder email={"jekaterina.zielinska@gmail.com"} /> */}
          <ErrorModal />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default CreateProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 20,
  },
  headerContainer: {
    paddingBottom: 30,
  },
  text: {
    fontSize: 28,
    textAlign: "center",
  },
  undertitleContainer: {
    paddingHorizontal: 35,
    paddingTop: 20,
  },
  undertitle: {
    textAlign: "center",
    fontSize: 16,
    paddingBottom: 30,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
});
