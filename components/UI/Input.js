import { View, StyleSheet, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function Input({
  value,
  keyboardType,
  onUpdateValue,
  secure,
  isInvalid,
  onInputChange,
  placeholderText,
  ioniconsName,
}) {

  const inputIsValid = !isInvalid;
  const imageColor = inputIsValid ? (color = "lightgray") : (color = "darkred");

  return (
    <View style={[styles.inputContainer, isInvalid && styles.labelInvalid]}>
      <View style={styles.imageContainerStyle}>
        <Ionicons name={ioniconsName} size={25} color={imageColor}></Ionicons>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={
            [inputIsValid ? styles.input : styles.inputInvalid && styles.input]
          }
          keyboardType={keyboardType}
          secureTextEntry={secure}
          value={value}
          onChangeText={onUpdateValue}
          onInputChange={onInputChange}
          placeholder={placeholderText}        />
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
    paddingRight: 10,
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
    // borderRadius: 4,
    // height: 35,
    // marginTop: 4,
    // marginBottom: 4,
    // marginLeft: 10,
    // width: "100%",
    // fontSize: 17,
    // borderBottomWidth: 1,
    // borderBottomColor: "lightgray",

  },
});
