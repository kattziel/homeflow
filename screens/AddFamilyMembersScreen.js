import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";

import FamilyMember from "../components/Family/FamilyMember";
import Button from "../components/UI/Button";
import AddButton from "../components/UI/AddButton";

import { useNavigation } from "@react-navigation/native";

function AddFamilyMembersScreen() {

  const navigation = useNavigation();

  function addFamilyMemberHandler() {
    navigation.navigate("AddFamilyMemberScreen")
  }

  function editFamilyMemberProfile() {
    navigation.navigate("EditFamilyMemberProfile");
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.textHeader}>Add Family Members</Text>
        <Text style={styles.text}>
          This will allow everyone to stay connected and up to date.
        </Text>
      </View>
      <View style={styles.familyMemberSummaryContainer}>
        <Pressable onPress={editFamilyMemberProfile}>
          <FamilyMember />
        </Pressable>
      </View>
      <View style={styles.addButtonContainer}>
        <AddButton onPress={addFamilyMemberHandler}/>
        <Text style={styles.addFamilyMemberText}>Add member</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button>Back</Button>
        <Button>Done</Button>
      </View>
    </ScrollView>
  );
}

export default AddFamilyMembersScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginHorizontal: 30,
  },
  textContainer: {
    alignItems: "center",
  },
  textHeader: {
    fontSize: 25,
    marginBottom: 15,
  },
  text: {
    fontSize: 15,
    textAlign: "center",
    marginBottom: 10,
    color: "#A6A6A6"
  },
  addButtonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20
  },
  addFamilyMemberText: {
    fontSize: 13,
    color: "#B5B5B5",
    marginVertical: 10
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
