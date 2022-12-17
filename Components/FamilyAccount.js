import React from "react";
import { StyleSheet, Text, View } from "react-native";
import DropShadow from "react-native-drop-shadow";

function FamilyAccount() {
  return (
    <DropShadow style={styles.shadowProp}>
      <Text style={styles.YInfoTxt}>Your Info</Text>
    </DropShadow>
  );
}
const styles = StyleSheet.create({
  shadowProp: {
    shadowColor: "#975A6F33",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },

  YInfoTxt: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
export default FamilyAccount;
