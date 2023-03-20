import { View, Text, StyleSheet } from "react-native";
import Input from "../UI/Input";
import Button from "../UI/Button";
import FlatButton from "../UI/FlatButton";
import { Colors } from "../../constants/Colors";
import { useNavigation } from "@react-navigation/native";

function AuthForm({ isLogin }) {
  const navigation = useNavigation();

  function switchAuthModeHandler() {
    if (isLogin) {
      navigation.replace('Signup');
    } else {
      navigation.replace('Login');
    }
  }

  return (
    <View style={styles.container}>
      <Input label="Email" />
      {!isLogin && <Input label="Confirm email" />}
      <Input label="Password" />
      {!isLogin && <Input label="Confirm password" />}
      <Button label="Login" />
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
