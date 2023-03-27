import { View, Text, StyleSheet, Image } from "react-native";

function FamilyMember() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../../assets/toad-mario.png")}
        ></Image>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.nameContainer}>Katarzyna</Text>
        <Text style={styles.positionContainer}>Partner</Text>
        <Text style={styles.emailContainer}>Email</Text>
      </View>
    </View>
  );
}

export default FamilyMember;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
    marginVertical: 30,
    marginHorizontal: 30,
  },
  logoContainer: {
    margin: 10,
    backgroundColor: "red",
  },
  logo: {
    width: 100,
    height: 100,
  },
  textContainer: {
    flex: 1,
  },
  nameContainer: {
    fontSize: 20,
    marginBottom: 2,
  },
  positionContainer: {
    fontSize: 15,
    marginBottom: 2,
  },
  emailContainer: {
    fontSize: 12,
    marginBottom: 2,
  },
});
