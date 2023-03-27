import { View, Text, StyleSheet, ScrollView } from "react-native";

import AddButton from "../components/UI/AddButton";

import FamilyMember from "../components/Family/FamilyMember";
import Button from "../components/UI/Button";

function AddFamilyMembersScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.textHeader}>Add Family Members</Text>
        <Text style={styles.text}>
          This will allow everyone to stay connected and up to date.
        </Text>
      </View>
      <View style={styles.familyMemberSummaryContainer}>
        <FamilyMember />
      </View>
      <View style={styles.addButtonContainer}>
        <AddButton />
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
    marginBottom: 15
  },
  text: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 10
  },
  familyMemberSummaryContainer: {},
  addButtonContainer: {
    // justifyContent: "center",
    // alignItems: "center"
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  }
});
