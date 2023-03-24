import { Text, View, StyleSheet, TextInput } from "react-native";
import { Colors } from "../../constants/Colors";

function Input({
  label,
  value,
  keyboardType,
  onUpdateValue,
  secure,
  isInvalid,
  onPressIn,
  onEndEditing
}) {
  return (
    <View style={[styles.inputContainer, isInvalid && styles.labelInvalid]}>
      <Text style={styles.labelText}>{label}</Text>
      <TextInput
        style={[styles.input, isInvalid && styles.inputInvalid]}
        keyboardType={keyboardType}
        secureTextEntry={secure}
        value={value}
        onChangeText={onUpdateValue}
        onPressIn={onPressIn}
        onEndEditing={onEndEditing}
      />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 8,
    marginHorizontal: 10,
  },
  input: {
    backgroundColor: "white",
    borderRadius: 4,
    height: 25,
    marginTop: 4,
    marginBottom: 4,
  },
  labelInvalid: {
  },
  inputInvalid: {
    backgroundColor: Colors.Pink,
  },
});
