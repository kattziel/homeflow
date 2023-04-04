import { Text, View, StyleSheet, TextInput } from "react-native";
import { Colors } from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

function Input({
  label,
  value,
  keyboardType,
  onUpdateValue,
  secure,
  isInvalid,
  onInputChange,
  placeholderText,
  ioniconsName,
}) {
  return (
    <View style={[styles.inputContainer, isInvalid && styles.labelInvalid]}>
      <View style={styles.imageContainerStyle}>
        <Ionicons name={ioniconsName} size={25} color="lightgray"></Ionicons>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, isInvalid && styles.inputInvalid]}
          keyboardType={keyboardType}
          secureTextEntry={secure}
          value={value}
          onChangeText={onUpdateValue}
          onInputChange={onInputChange}
          placeholder={placeholderText}
        />
      </View>
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 4,
    marginHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 10
  },
  imageContainer: {},
  textContainer: {},
  input: {
    borderRadius: 4,
    height: 35,
    marginTop: 4,
    marginBottom: 4,
    marginLeft: 10,
    width: "100%",
    fontSize: 17,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
  },
  labelInvalid: {},
  inputInvalid: {
    backgroundColor: Colors.Pink,
  },
});
