import { Text, View, StyleSheet, SafeAreaView, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect, useContext } from "react";
import { createUser } from "../util/auth";
import { AuthContext } from "../store/auth-context";

import Input from "../components/UI/Input";
import Button from "../components/UI/Button";
import FlatButton from "../components/UI/FlatButton";

const SignupScreen = () => {
  const navigation = useNavigation();
  const authCtx = useContext(AuthContext);
  const [isAuthenticating, setIsAuthenticating] = useState(false);

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
      if (
        ((!emailIsValid || !emailsAreEqual) && !passwordIsValid) ||
        !passwordsAreEqual
      ) {
        setEmailIsInvalid(true);
        setConfirmEmailIsInvalid(true);
        setPasswordIsInvalid(true);
        setConfirmPasswordIsInvalid(true);
        Alert.alert(
          "Invalid inputs.",
          "Please check your entered credentials."
        );
        return;
      }
      if (!emailIsValid || !emailsAreEqual) {
        setEmailIsInvalid(true);
        setConfirmEmailIsInvalid(true);
        Alert.alert("Invalid credentials!", "Please check entered email.");
      }
    }
    createUser(enteredEmail, enteredPassword);
    setIsAuthenticating(true);
  };

  const signupHandler = async (enteredEmail, enteredPassword) => {
    setIsAuthenticating(true);
    try {
      const token = await createUser(enteredEmail, enteredPassword);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert(
        "Authentication failed!",
        "Could not sign you up, please check your credentials or try again later."
      );
    }
    setIsAuthenticating(false);
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
            isInvalid={passwordIsInvalid}
            secure
          />
          <Input
            value={enteredConfirmPassword}
            onUpdateValue={setEnteredConfirmPassword}
            placeholderText={"Confirm password"}
            ioniconsName="key"
            isInvalid={confirmPasswordIsInvalid}
            secure
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
          <Button loading={isAuthenticating} onPress={submitHandler}>
            Next
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignupScreen;

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
