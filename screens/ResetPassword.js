import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { BlurView } from "@react-native-community/blur";

import Button from "../components/UI/Button";
import Input from "../components/UI/Input";

function ResetPassword() {
  const [isReset, setIsReset] = useState(false);
  let resetModalContent = (
    <View style={styles.overlay}>
      <BlurView
        style={StyleSheet.absoluteFillObject}
        blurType="light"
        blurAmount={10}
      />
      <View style={styles.resetModalContainer}>
        <Text style={styles.resetModalText}>
          An email will be sent to jekaterina.zielinska@gmail.com with
          instructions on how to reset your password
        </Text>
        <Button
          onPress={() => {
            setIsReset(false);
            navigation.navigate("Login"); // assuming the screen name for the login screen is 'Login'
          }}
        >
          OK
        </Button>
      </View>
    </View>
  );

  const navigation = useNavigation();

  function backButtonHandler() {
    navigation.goBack();
  }
  function resetPasswordHandler() {
    setIsReset(true);
  }
  return (
    <View style={[styles.container, styles.wrapper]}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Reset Password</Text>
      </View>
      <View style={styles.inputContainer}>
        <Input placeholderText={"Email or username"} ioniconsName="mail" />
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <Button onPress={backButtonHandler}>Back</Button>
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={resetPasswordHandler}>Reset</Button>
        </View>
      </View>
      {setIsReset ? resetModalContent : null}
    </View>
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
  resetModalContainer: {
    backgroundColor: "#91bfdb",
    padding: 20,
    position: "absolute",
  },
  resetModalText: {
    color: "white",
  },
  wrapper: {
    ...StyleSheet.absoluteFillObject,
    top: 10,
    backgroundColor: "transparent",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
  },
});
