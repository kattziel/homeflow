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
      marginVertical: 8,
        marginTop: 4,
        marginBottom: 4,
        width: 200,
        padding: 20
    },
    labelText: {
        marginTop: 4,
        marginBottom: 4
    },
    input: {
        backgroundColor: Colors.Yellow,
        borderRadius: 4,
        height: 25
    }
});
