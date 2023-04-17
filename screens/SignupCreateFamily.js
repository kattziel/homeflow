import { Text, View, StyleSheet, SafeAreaView, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect, useContext } from "react";
import { createUser } from "../util/auth";
import { AuthContext } from "../store/auth-context";

import Input from "../components/UI/Input";
import Button from "../components/UI/Button";
import FlatButton from "../components/UI/FlatButton";

const SignupCreateFamily = () => {
  const navigation = useNavigation();
  const authCtx = useContext(AuthContext);

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredConfirmEmail, setEnteredConfirmEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState("");

  const [emailIsInvalid, setEmailIsInvalid] = useState(false);
  const [confirmEmailIsInvalid, setConfirmEmailIsInvalid] = useState(false);
  const [passwordIsInvalid, setPasswordIsInvalid] = useState(false);
  const [confirmPasswordIsInvalid, setConfirmPasswordIsInvalid] =
    useState(false);

  useEffect(() => {
    setEmailIsInvalid(false);
  }, [enteredEmail]);

  useEffect(() => {
    setConfirmEmailIsInvalid(false);
  }, [enteredConfirmEmail]);

  useEffect(() => {
    setPasswordIsInvalid(false);
  }, [enteredPassword]);

  useEffect(() => {
    setConfirmPasswordIsInvalid(false);
  }, [enteredConfirmPassword]);

  const submitHandler = () => {
    const emailIsValid = enteredEmail.length > 0 && enteredEmail.includes("@");
    const emailsAreEqual = enteredEmail === enteredConfirmEmail;
    const passwordIsValid = enteredPassword.length > 6;
    const passwordsAreEqual = enteredPassword === enteredConfirmPassword;

    if (
      !emailIsValid ||
      !passwordIsValid ||
      !emailsAreEqual ||
      !passwordsAreEqual
    ) {
      if (
        !emailIsValid &&
        !passwordIsValid &&
        !emailsAreEqual &&
        !passwordsAreEqual
      ) {
        setEmailIsInvalid(true);
        setConfirmEmailIsInvalid(true);
        setPasswordIsInvalid(true);
        setConfirmPasswordIsInvalid(true);
        Alert.alert(
          "Invalid credentials!",
          "Please check your entered credentials."
        );
        return;
      }

      if (!emailIsInvalid) {
        setEmailIsInvalid(true);
        Alert.alert("Invalid input.", "Please check your entered email.");
        return;
      }

      if (!confirmEmailIsInvalid) {
        setConfirmEmailIsInvalid(true);
        Alert.alert(
          "Invalid input.",
          "Please check your entered confirm email."
        );
        return;
      }

      if (!passwordIsInvalid) {
        setPasswordIsInvalid(true);
        Alert.alert("Invalid input.", "Please check your entered password.");
        return;
      }

      if (!confirmPasswordIsInvalid) {
        setConfirmPasswordIsInvalid(true);
        Alert.alert(
          "Invalid input.",
          "Please check your entered confirm password."
        );
        return;
      }
    }
    console.log(
      enteredEmail,
      enteredConfirmEmail,
      enteredPassword,
      enteredConfirmPassword,
      " - Email, confirm email, password and confirmPassword from SignupScreen"
    );
    createUser(enteredEmail, enteredPassword);
  };

  function loginRedirectHandler() {
    navigation.replace("LoginScreen");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Create family</Text>
        </View>
        <View style={styles.inputsContainer}>
          <Input
            value={enteredEmail}
            onUpdateValue={setEnteredEmail}
            placeholderText={"Email"}
            ioniconsName="mail"
            inInvalid={emailIsInvalid}
          />
          <Input
            value={enteredConfirmEmail}
            onUpdateValue={setEnteredConfirmEmail}
            placeholderText={"Confirm email"}
            ioniconsName="mail"
            inInvalid={confirmEmailIsInvalid}
          />
          <Input
            value={enteredPassword}
            onUpdateValue={setEnteredPassword}
            placeholderText={"Set password"}
            ioniconsName="key"
            secure
            inInvalid={passwordIsInvalid}
          />
          <Input
            value={enteredConfirmPassword}
            onUpdateValue={setEnteredConfirmPassword}
            placeholderText={"Confirm password"}
            ioniconsName="key"
            secure
            inInvalid={confirmPasswordIsInvalid}
          />
        </View>
        <View style={styles.flatButtonContainer}>
          <FlatButton style={styles.flatButton} onPress={loginRedirectHandler}>
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
};

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
