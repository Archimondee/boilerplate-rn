import ButtonExample from "components/Button/ButtonExample";
import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import styles from "./LoginScreenStyles";

interface LoginScreenProps {}

const LoginScreen = (props: LoginScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>LoginScreen</Text>
      <ButtonExample title="Testing Button" />
    </View>
  );
};

export default LoginScreen;
