import ButtonExample from "components/Button/ButtonExample";
import * as React from "react";
import { Text, View } from "react-native";
import NavigationService from "utils/NavigationService";
import Config from "react-native-config";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import moment from "moment";

import { useTestData } from "../../hooks";
import { getDataTest } from "../../store/user/actions";

import styles from "./LoginScreenStyles";

const LoginScreen = () => {
  const testData = useTestData();
  const dispatch: any = useDispatch();
  useEffect(() => {
    dispatch(getDataTest());
  }, [dispatch]);
  return (
    <View style={styles.container}>
      <Text>LoginScreen</Text>
      <ButtonExample
        title="Testing Button"
        onPress={() => NavigationService.navigate("RegisterScreen")}
      />
      <Text>Status : {Config.STATUS}</Text>

      <Text>Today : {moment().format("MMMM Do YYYY, h:mm:ss a")}</Text>

      <Text>Data Test </Text>
      <Text>CODE : {testData.data?.bpi.EUR.code}</Text>
      <Text>Rate : {testData.data?.bpi.EUR.rate}</Text>
      <Text />
      <Text>Data Test </Text>
      <Text>CODE : {testData.data?.bpi.GBP.code}</Text>
      <Text>Rate : {testData.data?.bpi.GBP.rate}</Text>
      <Text>Disclaimer : {testData.data?.disclaimer}</Text>
    </View>
  );
};

export default LoginScreen;
