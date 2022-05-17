import * as React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./ButtonExampleStyles";

interface ButtonExampleProps {
  title: string;
}

const ButtonExample = (props: ButtonExampleProps) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "red",
        paddingHorizontal: 20,
        paddingVertical: 10,
      }}
    >
      <Text>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonExample;
