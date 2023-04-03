import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Input from "../components/UI/Input";
import Button from "../components/UI/Button";
// import EmailReminder from "../components/UI/EmailReminder";
// import ResetPassword from "./ResetPassword";

function CreateProfile() {
  const navigation = useNavigation();

  function moveForwardHandler() {
    navigation.navigate("AddFamilyMembersScreen");
  }

  function moveBackwardsHandler() {
    navigation.navigate("AddFamilyMembersScreen");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.headerContainer}>
          <Text style={styles.text}>Create your profile</Text>
        </View>
        <View style={styles.inputsContainer}>
          <Input placeholderText={"Name"} ioniconsName="person" />
          <Input placeholderText={"Email"} ioniconsName="mail" />
          <Input placeholderText={"Age"} ioniconsName="heart" />
          <Input placeholderText={"Role (optional)"} ioniconsName="people" />
        </View>
        <View style={styles.buttonsContainer}>
          <Button onPress={moveBackwardsHandler}>Back</Button>
          <Button onPress={moveForwardHandler}>Next</Button>
        </View>
        <View>
          {/* <ResetPassword /> */}
          {/* <EmailReminder email={"jekaterina.zielinska@gmail.com"} /> */}
        </View>
      </View>
    </SafeAreaView>
  );
}

export default CreateProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 20,
  },
  headerContainer: {
    paddingBottom: 30,
  },
  text: {
    fontSize: 28,
    textAlign: "center",
  },
  undertitleContainer: {
    paddingHorizontal: 35,
    paddingTop: 20,
  },
  undertitle: {
    textAlign: "center",
    fontSize: 16,
    paddingBottom: 30,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
});
