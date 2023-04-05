import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import FlatButton from "../components/UI/FlatButton";

// import * as SplashScreen from "expo-splash-screen";

// SplashScreen.preventAutoHideAsync();
// keeping the splash screen visible while fetching resources

import Input from "../components/UI/Input";
import Button from "../components/UI/Button";

function SignupCreateFamily() {
  const navigation = useNavigation();

  const [enteredFamilyName, setEnteredFamilyName] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState("");

  function updateInputValueHandler(inputType, enteredValue) {
    switch (inputType) {
      case "familyName":
        setEnteredFamilyName(enteredValue);
        console.log(enteredValue);
        break;
      case "password":
        setEnteredPassword(enteredValue);
        console.log(enteredValue);
        break;
      case "confirmPassword":
        setEnteredConfirmPassword(enteredValue);
        console.log(enteredValue);
    }
  }

  // const {
  //   familyName: familyNameIsInvalid,
  //   password: passwordIsInvalid,
  //   confirmPassword: confirmPasswordIsInvalid,
  // } = credentialsInvalid;

  function submitHandler() {
    onsubmit({
      familyName: enteredFamilyName,
      password: enteredPassword,
      confirmPassword: enteredConfirmPassword,
    });
  }

  function loginHandler() {
    navigation.replace("NewLoginScreen");
  }

  function moveForwardHandler() {
    navigation.replace("CreateProfile");
  }

  const [appIsReady, setAppIsReady] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Create family</Text>
        </View>
        <View style={styles.inputsContainer}>
          <Input
            value={enteredFamilyName}
            placeholderText={"Email"}
            ioniconsName="mail"
            onUpdateValue={updateInputValueHandler.bind(this, "mail")}
            // inInvalid={familyNameIsInvalid}
          />
          <Input
            value={enteredFamilyName}
            placeholderText={"Confirm email"}
            ioniconsName="mail"
            onUpdateValue={updateInputValueHandler.bind(this, "confirmMail")}
            // inInvalid={familyNameIsInvalid}
          />
          <Input
            value={enteredPassword}
            placeholderText={"Set password"}
            ioniconsName="key"
            onUpdateValue={updateInputValueHandler.bind(this, "password")}
            // inInvalid={passwordIsInvalid}
          />
          <Input
            value={enteredConfirmPassword}
            placeholderText={"Confirm password"}
            ioniconsName="key"
            onUpdateValue={updateInputValueHandler.bind(
              this,
              "confirmPassword"
            )}
            // inInvalid={confirmPasswordIsInvalid}
          />
        </View>
        {/* <View style={styles.undertitleContainer}>
          <Text style={styles.undertitle}>
            Your whole family can use this password
          </Text>
        </View> */}
        <View style={styles.flatButtonContainer}>
          <FlatButton style={styles.flatButton} onPress={loginHandler}>
            <Text style={styles.flatButtonText}>
              Already have an account?{" "}
              <Text style={styles.boldText}>Log in instead.</Text>
            </Text>
          </FlatButton>
        </View>
        <View style={styles.buttonsContainer}>
          <Button disabled>Back</Button>
          <Button onPress={moveForwardHandler}>Next</Button>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default SignupCreateFamily;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 20,
    justifyContent: "space-evenly"
  },
  headerContainer: {
    paddingBottom: 30,
  },
  header: {
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
    color: "lightgray",
    paddingBottom: 30,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  flatButtonContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 50,
    paddingVertical: 20,
  },
  flatButton: {
    textAlign: "center",
  },
  disabledButton: {
    backgroundColor: "red",
  },
  flatButtonText: {
    color: "gray"
  },
  boldText: {
    fontWeight: "bold",
  },
});