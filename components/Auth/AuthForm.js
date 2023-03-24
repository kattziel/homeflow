import { View, StyleSheet, Text } from "react-native";
import { useState } from "react";

import Button from "../UI/Button";
import Input from "../UI/Input";

import {Colors} from '../../constants/Colors';

function AuthForm({ isLogin, onSubmit, credentialsInvalid }) {
  // here I am receiving credentialsIsInvalid, so an object with mail, password, confirm mail and confirm password from authcontent.js; I am destructuring the object and assigning to each value new name, eg. emailIsInvalid etc.;

  const {
    email: emailIsInvalid,
    confirmEmail: emailsDontMatch,
    password: passwordIsInvalid,
    confirmPassword: passwordsDontMatch,
  } = credentialsInvalid;

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredConfirmEmail, setEnteredConfirmEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState("");

  const [onEnterValue, setOnEnterValue] = useState(false);

  function endInputEditingHandler() {
    setOnEnterValue(false);
  }

  function updateInputValueHandler(inputType, enteredValue) {
    switch (inputType) {
      case "email":
        setEnteredEmail(enteredValue);
        setOnEnterValue(true);
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
          isInvalid={emailIsInvalid}
          onEndEditing={endInputEditingHandler}
        />

        {onEnterValue && (
        <View style={styles.tooltipContainer}>
          <Text style={styles.tooltipText}>Please, enter family email that will be used by all your family members</Text>
        </View>
        )}

        {!isLogin && (
          <Input
            label="Confirm email"
            value={enteredConfirmEmail}
            keyboardType="email-address"
            onUpdateValue={updateInputValueHandler.bind(this, "confirmEmail")}
            isInvalid={emailsDontMatch}
          />
        )}

        <Input
          label="Password"
          value={enteredPassword}
          keyboardType="default"
          onUpdateValue={updateInputValueHandler.bind(this, "password")}
          secure
          isInvalid={passwordIsInvalid}
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
            isInvalid={passwordsDontMatch}
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
  },
  tooltipContainer: {
    backgroundColor: Colors.Yellow,
    // height: 30,
    padding: 10,
    marginHorizontal: 30,
    justifyContent: 'center',
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.Pink
  },
  tooltipText: {
    color: Colors.Pink,
    fontSize: 12
  }
});
