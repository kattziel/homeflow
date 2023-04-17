import { View, StyleSheet, Alert, ScrollView } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import AuthForm from "./AuthForm";
import FlatButton from "../UI/FlatButton";

import { Colors } from "../../constants/Colors";

function AuthContent({ isLogin, onAuthenticate }) {
  const [credentialsInvalid, setCredentialsInvalid] = useState("");

  const navigation = useNavigation();

  function switchAuthModeHandler() {
    if (isLogin) {
      navigation.replace("SignupScreen");
    } else {
      navigation.replace("LoginScreen");
    }
  }

  function submitHandler(credentials) {
    let { email, confirmEmail, password, confirmPassword } = credentials;
    email = email.trim();
    password = password.trim();

    const emailIsValid = email.includes("@");
    const passwordIsValid = password.length > 6;
    const emailsAreEqual = email === confirmEmail;
    const passwordsAreEqual = password === confirmPassword;

    if (
      !emailIsValid ||
      !passwordIsValid ||
      (!isLogin && (!emailsAreEqual || !passwordsAreEqual))
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

    onAuthenticate(email, password);
    console.log(email, password, "- email and password from auth content");
  }

  return (
    <View style={styles.authContent}>
      <ScrollView >
        <AuthForm
          isLogin={isLogin}
          onSubmit={submitHandler}
          credentialsInvalid={credentialsInvalid}
        />
        <View style={styles.buttons}>
          <FlatButton onPress={switchAuthModeHandler}>
            {isLogin ? "Create a new user" : "Log in instead"}
          </FlatButton>
        </View>
      </ScrollView>
    </View>
  );
}

export default AuthContent;

const styles = StyleSheet.create({
  authContent: {
    backgroundColor: Colors.lightPink,
    marginHorizontal: 32,
    marginTop: 32,
    borderRadius: 4,
  },
  buttons: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  pressed: {
    opacity: 0.7,
  },
});
