import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

function Checkbox() {
  const [pressed, setPressed] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => {
        setPressed(!pressed);
      }}
    >
      <View
        style={[
          styles.mainContainer,
          pressed ? styles.pressed : styles.mainContainer,
        ]}
      ></View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "#474746",
  },
  pressed: {
    backgroundColor: "#E9D023",
    borderColor: "transparent",
  },
});
export default Checkbox;
