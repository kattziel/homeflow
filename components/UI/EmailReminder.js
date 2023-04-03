import { View, Text, StyleSheet } from "react-native";
function EmailReminder({email}) {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>An email will be send to <Text style={styles.boldText}>{email}</Text> with instructions on how to reset your password.</Text>
    </View>
  )
}

export default EmailReminder;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#538fb8",
        padding: 18,
        width: "100%"
    },
    text: {
        textAlign: "left",
        color: "white",
        lineHeight: "20"
    },
    boldText: {
        fontWeight: "bold"
    }
});
