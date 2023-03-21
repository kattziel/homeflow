import { View, StyleSheet } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import AuthForm from "./AuthForm";
import FlatButton from "../UI/FlatButton";

import { Colors } from "../../constants/Colors";

function AuthContent({ isLogin }) {

  const navigation = useNavigation();

  function switchAuthModeHandler() {
    if (isLogin) {
      navigation.replace("Signup");
    } else {
      navigation.replace("Login");
    }
  }

  function submitHandler(){};

  return (
    <View style={styles.authContents}>
      <AuthForm isLogin={isLogin} onSubmit={submitHandler} />
      <View style={styles.buttons}>
        <FlatButton onPress={switchAuthModeHandler}>
          {isLogin ? "Create a new user" : "Log in instead"}
        </FlatButton>
      </View>
    </View>
  );
}

export default AuthContent;

const styles = StyleSheet.create({
  authContents: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.lightPink,
    marginHorizontal: 32,
    borderRadius: 8,
    elevation: 2,
  },
//   buttons: {
//     marginTop: 8,
//   },
});
