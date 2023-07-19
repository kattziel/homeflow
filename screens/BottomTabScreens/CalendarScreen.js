import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";

import { Calendar, CalendarList } from "react-native-calendars";

const MyCalendar = () => {
  const vacation = {
    key: "vacation",
    colo: "yellow",
    selectedDotColor: "yellow",
  };
  const work = { key: "work", color: "red", selectedDotColor: "red" };
  const home = { key: "home", color: "blue", selectedDotColor: "blue" };

  const handleDayLongPress = (day) => {
    console.log("This function gets executed when I long press a day - ", day);
  };
  const handleDayPress = (day) => {
    console.log("This function gets executed when I press a day - ", day);
  };

  const markedDates = {
    "2023-07-15": { marked: true, dots: [vacation, work, home] },
    "2023-07-19": { marked: true },
    "2023-07-22": { marked: true },
    "2023-07-30": { startingDay: true, color: "gray", textColor: "white" },
    "2023-07-31": { endingDay: true, color: "gray", textColor: "white" },
  };

  return (
    <View style={styles.calendarContainer}>
      <Calendar
        theme={{
          backgroundColor: "#ffffff",
          calendarBackground: "#ffffff",
          textSectionTitleColor: "#b6c1cd",
          textSectionTitleDisabledColor: "#d9e1e8",
          selectedDayBackgroundColor: "#00adf5",
          selectedDayTextColor: "#ffffff",
          todayTextColor: "#00adf5",
          dayTextColor: "#2d4150",
          textDisabledColor: "#d9e1e8",
          dotColor: "#00adf5",
          selectedDotColor: "#ffffff",
          arrowColor: "orange",
          disabledArrowColor: "#d9e1e8",
          monthTextColor: "darkgray",
          indicatorColor: "blue",
          textDayFontWeight: "300",
          textMonthFontWeight: "bold",
          textDayHeaderFontWeight: "300",
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 16,
        }}
        markingType={"period"}
        markedDates={markedDates}
        minDate={"2023-01-01"}
        onDayPress={handleDayPress}
        onDayLongPress={handleDayLongPress}
        hideExtraDays={true}
        disableAllTouchEventsForDisabledDays={true}
        enableSwipeMonths={true}
        markingType={"period"}
        style={{ width: "100%" }}
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
      <MyCalendar />
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
    // flex: 1,
    // width: "90%",
    // height: "90%"
  },
});
