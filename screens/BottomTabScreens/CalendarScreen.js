import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";

import { Calendar } from "react-native-calendars";

const MyCalendar = () => {
  const markedDates = {
    "2023-07-15": { selected: true, marked: true, selectedColor: "blue" },
    "2023-07-19": { marked: true, dotColor: "green" },
    "2023-07-22": { marked: true, dotColor: "green" },
  };
  return (
    <View style={styles.calendarContainer}>
      <Calendar
        // Marked dates and custom theme
        markedDates={markedDates}
        theme={{
          calendarBackground: "#ffffff",
          textSectionTitleColor: "black",
          selectedDayBackgroundColor: "#00adf5",
          selectedDayTextColor: "#ffffff",
          todayTextColor: "#00adf5",
          dayTextColor: "black",
          textDisabledColor: "#d9e1e8",
          dotColor: "#00adf5",
          selectedDotColor: "#ffffff",
          arrowColor: "#00adf5",
          monthTextColor: "#00adf5",
          // textDayFontFamily: "monospace",
          // textMonthFontFamily: "monospace",
          // textDayHeaderFontFamily: "monospace",
          textDayFontWeight: "500",
          textMonthFontWeight: "bold",
          textDayHeaderFontWeight: "300",
          textDayFontSize: 16,
          textMonthFontSize: 20,
          textDayHeaderFontSize: 14,
        }}
        // Customize onPress event
        onDayPress={(day) => console.log("Selected day: ", day)}
      />
    </View>
  );
};

function CalendarScreen() {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.text}>Calendar</Text>
        </View>
      <MyCalendar/>
    </SafeAreaView>
  );
}

export default CalendarScreen;

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
  calendarContainer: {
        flex: 1,
  }
});
