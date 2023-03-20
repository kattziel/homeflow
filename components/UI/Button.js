import { View, Text, StyleSheet } from "react-native";
import {Colors} from '../../constants/Colors';

function Button({label}) {
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{label}</Text>
    </View>
  );
}

export default Button;

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: Colors.lightPink,
        padding: 6,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        marginTop: 20,
        marginBottom: 15
    },
    buttonText: {
        color: Colors.Yellow,
    }
})
