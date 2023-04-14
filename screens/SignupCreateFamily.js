import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import FlatButton from "../components/UI/FlatButton";
import { createUser } from "../util/auth";

// import * as SplashScreen from "expo-splash-screen";

// SplashScreen.preventAutoHideAsync();
// keeping the splash screen visible while fetching resources

import Input from "../components/UI/Input";
import Button from "../components/UI/Button";

function SignupCreateFamily() {
  function validateHandler(credentials) {
    let { email, confirmEmail, password, confirmPassword } = credentials;
    email = email.trim();
    password = password.trim();

    const emailIsValid = email.includes("@");
    const emailsAreEqual = email === confirmEmail;
    const passwordIsValid = password.length >= 6;
    const passwordsAreEqual = password === confirmPassword;

    if (
      !emailIsValid ||
      !passwordIsValid ||
      !emailsAreEqual ||
      !passwordsAreEqual
    ) {
      Alert.alert(
        "Invalid credentials!",
        "Please check your entered credentials."
      );
      setCredentialsInvalid({
        email: !emailIsValid,
        confirmEmail: !emailIsValid || !emailsAreEqual,
        password: !passwordIsValid,
        confirmPassword: !passwordIsValid || !passwordsAreEqual,
      });
      return;
    }
    console.log(
      email,
      confirmEmail,
      password,
      confirmPassword,
      " - Email, confirm email, password and confirmPassword from SignupScreen"
    );
  }

  const navigation = useNavigation();
  const [credentialsInvalid, setCredentialsInvalid] = useState(false);

  // updating input values
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredConfirmEmail, setEnteredConfirmEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState("");

  function updateInputValueHandler(inputType, enteredValue) {
    switch (inputType) {
      case "email":
        setEnteredEmail(enteredValue);
        console.log(enteredValue);
        break;
      case "confirmEmail":
        setEnteredConfirmEmail(enteredValue);
        console.log("value of entered confirm mail", enteredValue);
        break;
      case "password":
        setEnteredPassword(enteredValue);
        console.log("value of entered password", enteredValue);
        break;
      case "confirmPassword":
        setEnteredConfirmPassword(enteredValue);
        console.log(enteredValue);
    }
  }

  function submitHandler() {
    onSubmit({
      email: enteredEmail,
      confirmEmail: enteredConfirmEmail,
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

  // const [appIsReady, setAppIsReady] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Create family</Text>
        </View>
        <View style={styles.inputsContainer}>
          <Input
            value={enteredEmail}
            placeholderText={"Email"}
            ioniconsName="mail"
            onUpdateValue={updateInputValueHandler.bind(this, "email")}
            // inInvalid={familyNameIsInvalid}
          />
          <Input
            value={enteredConfirmEmail}
            placeholderText={"Confirm email"}
            ioniconsName="mail"
            onUpdateValue={updateInputValueHandler.bind(this, "confirmEmail")}
            // onUpdateValue={updateInputValueHandler.bind(this, "confirmEmail")}
            // inInvalid={familyNameIsInvalid}
          />
          <Input
            value={enteredPassword}
            placeholderText={"Set password"}
            ioniconsName="key"
            onUpdateValue={updateInputValueHandler.bind(this, "password")}
            secure
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
            secure
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
          <Button onPress={submitHandler}>Next</Button>
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
    justifyContent: "space-evenly",
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
    color: "gray",
  },
  boldText: {
    fontWeight: "bold",
  },
});
