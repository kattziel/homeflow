import { View, Text, StyleSheet } from "react-native";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { Colors } from "../../constants/Colors";

function AuthForm({formText}) {
  return (
    <View style={styles.container}>
      <Input label="Email" />
      <Input label="Password" />
      <Button label="Login" />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{formText}</Text>
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
    minWidth: 220
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "black",
  },
});
