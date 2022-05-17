import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  CardStyleInterpolators,
  StackNavigationOptions,
} from "@react-navigation/stack";
import { RootStackParamList, RootType } from "types/NavigatorTypes";

const Main = createStackNavigator<RootStackParamList>();
const transparentModalOptions: StackNavigationOptions = {
  presentation: "transparentModal",
  headerShown: false,
  cardStyle: { backgroundColor: "transparent" },
  cardOverlayEnabled: true,
  cardStyleInterpolator: ({ current: { progress } }) => ({
    cardStyle: {
      opacity: progress.interpolate({
        inputRange: [0, 0.5, 0.9, 1],
        outputRange: [0, 0.25, 0.7, 1],
      }),
    },
    overlayStyle: {
      opacity: progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 0.5],
        extrapolate: "clamp",
      }),
    },
  }),
};

const halfModalOptions: StackNavigationOptions = {
  cardStyle: { backgroundColor: "transparent" },
  cardOverlayEnabled: true,
  presentation: "transparentModal",
  cardStyleInterpolator: ({ current: { progress } }) => ({
    cardStyle: {
      opacity: progress.interpolate({
        inputRange: [0, 0.75, 1],
        outputRange: [0, 0.5, 1],
      }),
    },
    overlayStyle: {
      opacity: progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 0.5],
        extrapolate: "clamp",
      }),
    },
  }),
};

const halfModalBottomOptions: StackNavigationOptions = {
  cardStyle: { backgroundColor: "transparent" },
  presentation: "transparentModal",
  headerShown: false,
  cardOverlayEnabled: true,
  cardStyleInterpolator: ({ current: { progress } }) => ({
    cardStyle: {
      opacity: progress.interpolate({
        inputRange: [0, 0.75, 1],
        outputRange: [0, 0.5, 1],
      }),
    },
    overlayStyle: {
      opacity: progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 0.5],
        extrapolate: "clamp",
      }),
    },
  }),
};
