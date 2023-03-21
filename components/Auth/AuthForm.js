import { View, StyleSheet } from "react-native";
import { useState } from "react";

import Button from "../UI/Button";
import Input from "../UI/Input";

import { Colors } from "../../constants/Colors";

function AuthForm({ isLogin, onSubmit }) {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredConfirmEmail, setEnteredConfirmEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState("");

  function updateInputValueHandler(inputType) {
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

  function submitHandler() {
    onSubmit({
      email: enteredEmail,
      confirmEmail: enteredConfirmEmail,
      password: enteredPassword,
      confirmPassword: enteredConfirmPassword,
    });
  }

  return (
    <View style={styles.form}>
      <View>
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
          keyboardType="default"
          onUpdateValue={updateInputValueHandler.bind(this, "password")}
          secure
        />

        {!isLogin && (
          <Input
            label="Confirm password"
            value={enteredConfirmPassword}
            keyboardType="default"
            onUpdateValue={updateInputValueHandler.bind(
              this,
              "confirmPassword"
            )}
            secure
          />
        )}
      </View>
      <View>
        <Button style={styles.button} onPress={submitHandler}>
          {isLogin ? "Log in" : "Sign up"}
        </Button>
      </View>
    </View>
  );
}

export default AuthForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 10,
  }
});
