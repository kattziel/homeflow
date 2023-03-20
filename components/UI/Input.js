import { Text, View, StyleSheet, TextInput } from "react-native";
import {Colors} from '../../constants/Colors';

function Input({ label }) {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.labelText}>{label}</Text>
      <TextInput style={styles.input} />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 10,
        marginBottom: 10,
    },
    labelText: {
        marginTop: 5,
        marginBottom: 5
    },
    input: {
        backgroundColor: Colors.Yellow,
        borderRadius: 4,
        height: 25
    }
});
