import { View, Text, StyleSheet, Image } from "react-native";

function FamilyMember() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../../assets/toad-mario.png")}
          ></Image>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.name}>Katarzyna</Text>
          <Text style={styles.position}>Partner</Text>
          <Text style={styles.email}>Email</Text>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../../assets/toad-mario.png")}
          ></Image>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.name}>Dawid</Text>
          <Text style={styles.position}>Partner</Text>
          <Text style={styles.email}>Email</Text>
        </View>
      </View>
    </>
  );
}

export default FamilyMember;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    marginBottom: 2,
    color: "#717171",
  },
  position: {
    fontSize: 15,
    marginBottom: 2,
    color: "#717171",
  },
  email: {
    fontSize: 12,
    marginBottom: 2,
    color: "#717171",
  },
});
