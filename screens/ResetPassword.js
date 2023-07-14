import { View, Text, StyleSheet, Alert, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";

import Button from "../components/UI/Button";
import Input from "../components/UI/Input";
import ModalButton from "../components/UI/ModalButton";

function ResetPassword() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [passwordReseted, setPasswordReseted] = useState(false);
  const [emailIsInvalid, setEmailIsInvalid] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const backButtonHandler = () => {
    navigation.goBack();
  };

  useEffect(() => {
    setEmailIsInvalid(false);
  }, [enteredEmail]);

  const submitHandler = () => {
    const emailIsValid = enteredEmail.length > 6 && enteredEmail.includes("@");
    if (!emailIsValid) {
      setEmailIsInvalid(true);
      Alert.alert(
        "Invalid credentials.",
        "Please check entered email that was used to create an account."
      );
      return;
    }
    setIsAuthenticating(true);
    console.log(isAuthenticating);
  };

  let resetModalContent = (
    <View style={styles.overlay}>
      <View style={styles.resetModalContainer}>
        <Text style={styles.resetModalText}>
          An email will be sent to{" "}
          <Text style={styles.resetBoldModalText}>{enteredEmail}</Text> with
          instructions on how to reset your password
        </Text>
        <View style={styles.buttonContainer}>
          <ModalButton
            setIsReset={setPasswordReseted}
          />
        </View>
      </View>
    </View>
  );

  const navigation = useNavigation();

  function resetInputValueHandler(enteredText) {
    setEnteredEmail(enteredText);
    console.log(enteredEmail);
  }

  // useEffect(() => {
  //   if (isReset) {
  //     setTimeout(() => {
  //       setIsReset(false);
  //       navigation.navigate("LoginScreen");
  //     }, 2000);
  //   }
  // }, [isReset]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Reset Password</Text>
      </View>
      <View style={styles.inputContainer}>
        <Input
          value={enteredEmail}
          onUpdateValue={setEnteredEmail}
          keyboardType="email-address"
          placeholderText={"Email used for creating account"}
          ioniconsName="mail"
          isInvalid={emailIsInvalid}
          fontSize={6}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <Button onPress={backButtonHandler}>Back</Button>
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={submitHandler} loading={isAuthenticating}>Reset</Button>
        </View>
      </View>
      <View style={styles.modalContainer}>
        {passwordReseted ? resetModalContent : null}
      </View>
    </ScrollView>
  );
}

export default ResetPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 20,
  },
  headerContainer: {},
  header: {
    fontSize: 28,
    textAlign: "center",
  },
  inputContainer: {
    marginTop: 30,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 30,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  modalContainer: {},
  resetModalContainer: {
    backgroundColor: "#91bfdb",
    padding: 20,
    position: "absolute",
    marginHorizontal: 10,
  },
  resetModalText: {
    color: "white",
    textAlign: "left",
  },
  resetBoldModalText: {
    fontWeight: "bold",
  },
  modalButtonContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
  },
});
