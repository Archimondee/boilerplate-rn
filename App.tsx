import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppNavigator from "navigations/AppNavigator";
import { Provider } from "react-redux";

import configureStore from "./src/store";

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={configureStore()}>
        <AppNavigator />
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
