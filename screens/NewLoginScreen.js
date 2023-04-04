import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import FlatButton from "../components/UI/FlatButton";
import StartScreenButton from "../components/UI/StartScreenButton";
import Input from "../components/UI/Input";
import ResetPassword from "./ResetPassword";

function NewLoginScreen() {
  const navigation = useNavigation();

  function loginHandler() {
    navigation.replace("AddFamilyMembersScreen")
  }

  function createFamilyHandler() {
    navigation.navigate("CreateFamily");
  }

  function resetPasswordHandler() {
    navigation.navigate("ResetPassword");
  }
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.titleContainer}>
          <Text style={styles.text}>Your account</Text>
        </View>
        <View style={styles.inputsContainer}>
          <Input placeholderText={"Email or username"} ioniconsName="mail" />
          <Input placeholderText={"Password"} ioniconsName="key-outline" />
        </View>
        <View style={styles.buttonContainer}>
          <StartScreenButton color="#91bfdb" onPress={loginHandler}>
            Log in
          </StartScreenButton>
        </View>
        <View style={styles.flatButtonsContainer}>
          <FlatButton style={styles.flatButton} onPress={resetPasswordHandler}>
            Reset password
          </FlatButton>
          <FlatButton style={styles.flatButton} onPress={createFamilyHandler}>
            Create family
          </FlatButton>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default NewLoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 20,
  },
  titleContainer: {
    paddingBottom: 30,
  },
  text: {
    fontSize: 28,
    textAlign: "center",
  },
  inputsContainer: {
    paddingBottom: 20,
  },
  buttonContainer: {
    paddingBottom: 20,
  },
  flatButtonsContainer: {
    alignItems: "center",
  },
  flatButton: {},
});
