import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Input from "../components/UI/Input";
import Button from "../components/UI/Button";

function CreateFamily() {
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
        <View style={styles.titleContainer}>
          <Text style={styles.text}>Create family</Text>
        </View>
        <View style={styles.inputsContainer}>
          <Input placeholderText={"Name your family"} ioniconsName="home" />
          <Input placeholderText={"Set family password"} ioniconsName="key" />
          <Input placeholderText={"Confirm password"} ioniconsName="key" />
        </View>
        <View style={styles.undertitleContainer}>
          <Text style={styles.undertitle}>
            Your whole family can use this password
          </Text>
        </View>
        <View style={styles.buttonsContainer}>
          <Button onPress={moveBackwardsHandler}>Back</Button>
          <Button onPress={moveForwardHandler}>Next</Button>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default CreateFamily;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 20,
  },
  titleContainer: {
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
  },
});
