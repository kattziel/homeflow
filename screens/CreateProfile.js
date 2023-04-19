import { Text, View, ScrollView, StyleSheet, SafeAreaView, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

import Input from "../components/UI/Input";
import Button from "../components/UI/Button";

const CreateProfile = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [enteredRole, setEnteredRole] = useState("");

  const navigation = useNavigation();

  const moveForwardHandler = () => {
    navigation.navigate("AddFamilyMembersScreen");
  };

  const moveBackwardsHandler = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.headerContainer}>
          <Text style={styles.text}>Create your profile</Text>
        </View>
        <View style={styles.profilePhotoContainer}>
          <Pressable>
            <View style={styles.profilePhotoPicker}>
              <Ionicons name="camera-outline" size={40} color={color} />
            </View>
          </Pressable>
          <Text style={styles.profilePhotoHeader}>Choose a profile photo!</Text>
        </View>
        <View style={styles.inputsContainer}>
          <Input
            value={enteredName}
            onUpdateValue={setEnteredName}
            placeholderText={"Name"}
            ioniconsName="person"
          />
          <Input
            value={enteredEmail}
            onUpdateValue={setEnteredEmail}
            placeholderText={"Email"}
            ioniconsName="mail"
            keyboardType="email-address"
          />
          <Input
            value={enteredAge}
            onUpdateValue={setEnteredAge}
            placeholderText={"Age"}
            ioniconsName="heart"
            keyboardType="numeric"
          />
          <Input
            value={enteredRole}
            onUpdateValue={setEnteredRole}
            placeholderText={"Role (optional)"}
            ioniconsName="people"
          />
        </View>
        <View style={styles.buttonsContainer}>
          <Button onPress={moveBackwardsHandler}>Back</Button>
          <Button onPress={moveForwardHandler}>Next</Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 20,
    marginTop: 50
  },
  headerContainer: {
    paddingBottom: 20,
  },
  text: {
    fontSize: 28,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
  profilePhotoContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  profilePhotoPicker: {
    width: 90,
    height: 90,
    borderColor: "lightgray",
    borderWidth: "2px",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  profilePhotoHeader: {
    textAlign: "center",
    marginBottom: 20,
    marginTop: 10,
    color: "darkgrey",
  },
});
