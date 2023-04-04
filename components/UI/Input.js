import { Text, View, StyleSheet, TextInput } from "react-native";
import { Colors } from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

function Input({
  label,
  value,
  keyboardType,
  onUpdateValue,
  secure,
  isInvalid,
  // this will be removed
  onInputChange,
  placeholderText,
  ioniconsName,
}) {
  const [inputIsValid, setInputIsValid] = useState(false);
  const [inputIsTouched, setInputIsTouched] = useState(true);

  const imageColor = inputIsValid ? (color = "lightgray") : (color = "darkred");

  return (
    <View style={[styles.inputContainer, isInvalid && styles.labelInvalid]}>
      <View style={styles.imageContainerStyle}>
        <Ionicons name={ioniconsName} size={25} color={imageColor}></Ionicons>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={
            inputIsValid ? styles.input : styles.inputInvalid && styles.input
          }
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
