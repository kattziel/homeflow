import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Button from "../components/UI/Button";
import Input from "../components/UI/Input";

function ResetPassword() {
  const navigation = useNavigation();
  function backButtonHandler() {
    navigation.goBack();
  }
  function resetPasswordHandler() {
    navigation.navigate("NewLoginScreen");
  }
  return (
    <View style={styles.container}>
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
});
