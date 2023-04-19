import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Pressable,
  Alert,
  Modal,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";

import Input from "../components/UI/Input";
import Button from "../components/UI/Button";
import ProfilePhotoButton from "../components/UI/ProfilePhotoButton";

const CreateProfile = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [enteredRole, setEnteredRole] = useState("");

  const [modalIsVisible, setModalIsVisible] = useState(false);

  const [nameIsInvalid, setNameIsInvalid] = useState(false);
  const [ageIsInvalid, setAgeIsInvalid] = useState(false);
  const [roleIsInvalid, setRoleIsInvalid] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    setNameIsInvalid(false);
  }, [enteredName]);

  useEffect(() => {
    setAgeIsInvalid(false);
  }, [enteredAge]);

  useEffect(() => {
    setRoleIsInvalid(false);
  }, [enteredRole]);

  const submitHandler = () => {
    const nameIsValid =
      typeof enteredName === "string" && enteredName.trim().length > 1;
    const ageIsValid =
      typeof enteredAge === "number" && enteredAge > 11 && enteredAge < 100;
    const roleIsValid =
      typeof enteredRole === "string" && enteredRole.trim().length > 2;

    const numInvalidInputs =
      (!nameIsValid ? 1 : 0) + (!ageIsValid ? 1 : 0) + (!roleIsValid ? 1 : 0);

    if (numInvalidInputs > 0) {
      let errorMessage = "Invalid data. Please check the following inputs:";
      if (!nameIsValid) {
        setNameIsInvalid(true);
        errorMessage += "\n- name";
      }
      if (!ageIsValid) {
        errorMessage += "\n- age";
        setAgeIsInvalid(true);
      }
      if (!roleIsValid) {
        setRoleIsInvalid(true);
        errorMessage += "\n- role";
      }
      Alert.alert("Something went wrong", errorMessage);
      return;
    }
  };

  const moveForwardHandler = () => {
    navigation.navigate("AddFamilyMembersScreen");
  };

  const moveBackwardsHandler = () => {
    navigation.goBack();
  };

  const closeModalHandler = () => {
    setModalIsVisible(false);
  };

  const takePictureHandler = () => {};
  const uploadPictureHandler = () => {};

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalIsVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalIsVisible(!modalIsVisible);
          }}
        >
          <View style={styles.modalCenteredView}>
            <View style={styles.modalContainer}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalHeaderText}>
                  Set your{"\n"}✨ profile photo ✨
                </Text>
              </View>
              <View style={styles.modalButtonsContainer}>
                <ProfilePhotoButton
                  onPress={takePictureHandler}
                  color="#91bfdb"
                >
                  Take{"\n"}a photo
                </ProfilePhotoButton>
                <ProfilePhotoButton
                  onPress={uploadPictureHandler}
                  color="#d391b3"
                >
                  Upload{"\n"}a photo
                </ProfilePhotoButton>
              </View>
              <View style={styles.modalCloseButtonContainer}>
                <Button onPress={closeModalHandler}>Close</Button>
              </View>
            </View>
          </View>
        </Modal>

        <View style={styles.headerContainer}>
          <Text style={styles.text}>Create your profile</Text>
        </View>
        <View style={styles.profilePhotoContainer}>
          <Pressable onPress={() => setModalIsVisible(true)}>
            <View style={styles.profilePhotoPicker}>
              <Ionicons name="camera-outline" size={40} color="lightgray" />
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
            isInvalid={nameIsInvalid}
          />
          <Input
            value={enteredAge}
            onUpdateValue={setEnteredAge}
            placeholderText={"Age"}
            ioniconsName="heart"
            keyboardType="numeric"
            isInvalid={ageIsInvalid}
          />
          <Input
            value={enteredRole}
            onUpdateValue={setEnteredRole}
            placeholderText={"Role (optional)"}
            ioniconsName="people"
            isInvalid={roleIsInvalid}
          />
        </View>
        <View style={styles.buttonsContainer}>
          <Button onPress={moveBackwardsHandler}>Back</Button>
          <Button onPress={submitHandler}>Next</Button>
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
    marginTop: 60,
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
  // modal styling
  modalCenteredView: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    borderRadius: 10,
    justifyContent: "space-around",
    alignItems: "center",
    width: 280,
    height: 280,
    backgroundColor: "#EEEEEE",
  },
  modalHeaderText: {
    fontSize: 26,
    textAlign: "center",
  },
  modalButtonsContainer: {
    width: "100%",
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  modalCloseButtonContainer: {
  },
});
