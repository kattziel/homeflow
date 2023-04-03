import { View, Text, StyleSheet } from "react-native";

import Button from "../components/UI/Button";
import Input from "../components/UI/Input";

function ResetPassword() {
  function resetPassword() {}
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Reset Password</Text>
      </View>
      <View style={styles.inputContainer}>
        <Input placeholderText={"Email or username"} ioniconsName="mail" />
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={resetPassword}>Reset</Button>
      </View>
    </View>
  );
}

export default ResetPassword;

const styles = StyleSheet.create({
  container: {},
  headerContainer: {},
  header: {
    fontSize: 28,
    textAlign: "center"
  },
  inputContainer: {
    marginTop: 30
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 30
  },
});
