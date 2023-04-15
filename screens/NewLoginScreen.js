import { View, Text, StyleSheet, SafeAreaView, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

import FlatButton from "../components/UI/FlatButton";
import Input from "../components/UI/Input";
import StartScreenButton from "../components/UI/StartScreenButton";

function NewLoginScreen() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  function updateInputValueHandler(inputType, enteredValue) {
    switch (inputType) {
      case "email":
        setEnteredEmail(enteredValue);
        console.log(enteredValue);
        break;
      case "password":
        setEnteredPassword(enteredValue);
        console.log(enteredValue);
        break;
    }
  }

  function submitHandler(credentials) {
    let { enteredEmail, enteredPassword } = credentials;
    const emailIsValid = enteredEmail.includes("@");

    const passwordIsValid = enteredPassword.length > 6;

    if (!emailIsValid || !passwordIsValid) {
      Alert.alert("Invalid input.", "Please check your entered credentials.");
      setCredentialsInvalid({
        email: true,
        password: true,
      });
      return;
    }
    navigation.replace("AddFamilyMembersScreen");
    // otherwise, pass the valid credentials to the function that will be managing them; at this point I am redirecting to the Authenticated Screen, this is AddFamilyMemberScreen
  }

  const [credentialsInvalid, setCredentialsInvalid] = useState({
    email: false,
    password: false,
  });

  const navigation = useNavigation();

  function createFamilyHandler() {
    navigation.navigate("SignupCreateFamily");
  }

  function resetPasswordHandler() {
    navigation.navigate("ResetPassword");
  }
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.titleContainer}>
          <Text style={styles.text}>Your account</Text>
        </View>
        <View style={styles.inputsContainer}>
          <Input
            value={enteredEmail}
            onUpdateValue={updateInputValueHandler.bind(this, "email")}
            placeholderText={"Email or username"}
            ioniconsName="mail"
          />
          <Input
            value={enteredPassword}
            onUpdateValue={updateInputValueHandler.bind(this, "password")}
            placeholderText={"Password"}
            ioniconsName="key-outline"
            secure
          />
        </View>
        <View style={styles.buttonContainer}>
          <StartScreenButton color="#91bfdb" onPress={submitHandler}>
            Log in
          </StartScreenButton>
        </View>
        <View style={styles.flatButtonsContainer}>
          <FlatButton style={styles.flatButton} onPress={resetPasswordHandler}>
            Reset password
          </FlatButton>
          <FlatButton style={styles.flatButton} onPress={createFamilyHandler}>
            Create family
          </FlatButton>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default NewLoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 20,
  },
  titleContainer: {
    paddingBottom: 30,
  },
  text: {
    fontSize: 28,
    textAlign: "center",
  },
  inputsContainer: {
    paddingBottom: 20,
  },
  buttonContainer: {
    paddingBottom: 20,
  },
  flatButtonsContainer: {
    alignItems: "center",
  },
  flatButton: {},
});
