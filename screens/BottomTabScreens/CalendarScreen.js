import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";

import { Calendar } from "react-native-calendars";

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
    "2023-07-15": { dots: [vacation, work, home] },
    "2023-07-19": {
      marked: true,
      dotColor: "green",
      selected: true,
      selectedColor: "red",
    },
    "2023-07-22": { marked: true, dotColor: "green", selected: true },
    "2023-07-30": { startingDay: true, color: "blue", textColor: "white" },
    "2023-07-31": { endingDay: true, color: "blue", textColor: "white" },
  };

  return (
    <Calendar
      markingType={"period"}
      markedDates={markedDates}
      minDate={"2023-01-01"}
      onDayPress={handleDayPress}
      onDayLongPress={handleDayLongPress}
      hideExtraDays={true}
      disableAllTouchEventsForDisabledDays={true}
      enableSwipeMonths={true}
      markingType={"multi-dot"}
      // dayComponent={(e) => {
      //   console.log("e" - e);
      //   return (
      //     <View style={{width: 40, height: 40, backgroundColor: "lightpink", justifyContent: "center", alignItems: "center"}}>
      //       <Text>{e.date.day}</Text>
      //     </View>
      //   );
      // }}
      // disableArrowLeft
      // disableArrowRight
      // hideArrows
      // hideDayNames
      // hideExtraDays
      // minDate={"2023-07-01"}
      // maxDate={"2023-07-31"}
      // firstDay={1}
      // current={"2023-06-01"}
      // onDayPress={(e)=>{
      //   console.log(e);
      // }}
      // onDayLongPress={(e) => {
      //   console.log("e - ", e);
      // }}
      // onMonthChange={(e) => {
      //   console.log("e - ", e);
      // }}

      style={{ width: "100%" }}
    />
    // <View style={styles.calendarContainer}>
    //   <Calendar
    //     // Marked dates and custom theme
    //     markedDates={markedDates}
    //     theme={{
    //       calendarBackground: "#ffffff",
    //       textSectionTitleColor: "black",
    //       selectedDayBackgroundColor: "#00adf5",
    //       selectedDayTextColor: "#ffffff",
    //       todayTextColor: "#00adf5",
    //       dayTextColor: "black",
    //       textDisabledColor: "#d9e1e8",
    //       dotColor: "#00adf5",
    //       selectedDotColor: "#ffffff",
    //       arrowColor: "#00adf5",
    //       monthTextColor: "#00adf5",
    //       // textDayFontFamily: "monospace",
    //       // textMonthFontFamily: "monospace",
    //       // textDayHeaderFontFamily: "monospace",
    //       textDayFontWeight: "500",
    //       textMonthFontWeight: "bold",
    //       textDayHeaderFontWeight: "300",
    //       textDayFontSize: 16,
    //       textMonthFontSize: 20,
    //       textDayHeaderFontSize: 14,
    //     }}
    //     // Customize onPress event
    //     onDayPress={(day) => console.log("Selected day: ", day)}
    //   />
    // </View>
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
    flex: 1,
  },
});
