import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView
} from "react-native";
import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";
import { useState } from "react";

function GroceriesScreen() {
  const [enteredGroceryItem, setEnteredGroceryItem] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  // const [personResponsible, setPersonResponsible] = useState("");

  const addGroceryHandler = (enteredValue) => {
    setEnteredGroceryItem(enteredValue);
    console.log(enteredValue);
  };

  const addAmountHandler = (enteredAmount) => {
    setEnteredAmount(enteredAmount);
    console.log(enteredAmount);
  };

  const submitHandler = () => {};

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.headerContainer}>
          <Text style={styles.text}>Groceries List</Text>
        </View>
        <View>
          <Input
            value={enteredGroceryItem}
            onUpdateValue={addGroceryHandler}
            placeholderText={"Grocery name"}
            ioniconsName="basket"
            // isInvalid={nameIsInvalid}
            keyboardType="default"
            // autoCapitalize="words"
          />
          <Input
            value={enteredAmount}
            onUpdateValue={addAmountHandler}
            placeholderText={"Amount"}
            ioniconsName="logo-usd"
            keyboardType="numeric"
            // isInvalid={ageIsInvalid}
          />
        </View>
        <View style={styles.buttonsContainer}>
          <Button onPress={submitHandler}>Add</Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default GroceriesScreen;

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
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 10,
  },
});
