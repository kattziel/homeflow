import { View, StyleSheet } from "react-native";
import Input from "../UI/Input";
import Button from "../UI/Button";
import FlatButton from "../UI/FlatButton";
import { Colors } from "../../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

function AuthForm({ isLogin, onSubmit }) {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredConfirmEmail, setEnteredConfirmEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState("");

  const navigation = useNavigation();

  function submitHandler() {
    onSubmit({
      email: enteredEmail,
      confirmEmail: enteredConfirmEmail,
      password: enteredPassword,
      confirmPassword: enteredConfirmPassword,
    });
  }

  function updateInputValueHandler() {
    switch (inputType) {
      case "email":
        setEnteredEmail(enteredValue);
        break;
      case "confirmEmail":
        setEnteredConfirmEmail(enteredValue);
        break;
      case "password":
        setEnteredPassword(enteredValue);
        break;
      case "confirmPassword":
        setEnteredConfirmPassword(enteredValue);
        break;
    }
  }

  function switchAuthModeHandler() {
    if (isLogin) {
      navigation.replace("Signup");
    } else {
      navigation.replace("Login");
    }
  }

  return (
    <View style={styles.container}>
      <Input
        label="Email"
        value={enteredEmail}
        keyboardType="email-address"
        onUpdateValue={updateInputValueHandler.bind(this, "email")}
      />

      {!isLogin && (
        <Input
          label="Confirm email"
          value={enteredConfirmEmail}
          keyboardType="email-address"
          onUpdateValue={updateInputValueHandler.bind(this, "confirmEmail")}
        />
      )}

      <Input
        label="Password"
        value={enteredPassword}
        onUpdateValue={updateInputValueHandler.bind(this, "password")}
      />

      {!isLogin && (
        <Input
          label="Confirm password"
          value={enteredConfirmPassword}
          onUpdateValue={updateInputValueHandler.bind(this, "confirmPassword")}
        />
      )}

      <Button onPress={submitHandler}>{isLogin ? "Log in" : "Sign up"}</Button>
      <View style={styles.textContainer}>
        <FlatButton onPress={switchAuthModeHandler}>
          {isLogin
            ? "Create a new user"
            : "Already have an account? Login instead"}
        </FlatButton>
      </View>
    </View>
  );
}

export default AuthForm;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.Pink,
    borderRadius: 6,
    padding: 20,
    marginTop: 20,
    width: 260,
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
