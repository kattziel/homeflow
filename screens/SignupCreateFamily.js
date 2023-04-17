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
    setConfirmEmailIsInvalid(false);
  }, [enteredEmail, enteredConfirmEmail]);

  useEffect(() => {
    setPasswordIsInvalid(false);
    setConfirmPasswordIsInvalid(false);
  }, [enteredPassword, enteredConfirmPassword]);

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
      if (!emailIsValid || !emailsAreEqual) {
        setEmailIsInvalid(true);
        setConfirmEmailIsInvalid(true);
        Alert.alert("Invalid credentials!", "Please check entered email.");
        return;
      }

      if (!passwordIsValid && !passwordsAreEqual) {
        setPasswordIsInvalid(true);
        setConfirmPasswordIsInvalid(true);
        Alert.alert("Invalid input.", "Please check your entered password.");
        return;
      }
    }
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
            isInvalid={emailIsInvalid}
          />
          <Input
            value={enteredConfirmEmail}
            onUpdateValue={setEnteredConfirmEmail}
            placeholderText={"Confirm email"}
            ioniconsName="mail"
            isInvalid={confirmEmailIsInvalid}
          />
          <Input
            value={enteredPassword}
            onUpdateValue={setEnteredPassword}
            placeholderText={"Set password"}
            ioniconsName="key"
            secure
            isInvalid={passwordIsInvalid}
          />
          <Input
            value={enteredConfirmPassword}
            onUpdateValue={setEnteredConfirmPassword}
            placeholderText={"Confirm password"}
            ioniconsName="key"
            secure
            isInvalid={confirmPasswordIsInvalid}
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
