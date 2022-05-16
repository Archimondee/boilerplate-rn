/* eslint-disable import/no-default-export */

import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
  Text,
} from "react-native";

const App = () => {
  const isDarkMode = useColorScheme() === "dark";

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignContent: "center" }}
    >
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <Text>Hellooo</Text>
    </SafeAreaView>
  );
};

export default App;
