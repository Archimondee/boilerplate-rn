import ButtonExample from "components/Button/ButtonExample";
import * as React from "react";
import { Text, View } from "react-native";
import NavigationService from "utils/NavigationService";

import styles from "./LoginScreenStyles";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text>LoginScreen</Text>
      <ButtonExample
        title="Testing Button"
        onPress={() => NavigationService.navigate("RegisterScreen")}
      />
    </View>
  );
};

export default LoginScreen;
