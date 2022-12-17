import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

function TermOfUse() {
  return (
    <View style={styles.termOfUse}>
      <Text style={[styles.termOfUseText]}>
        By proceeding, you agree to our
      </Text>
      <TouchableOpacity>
        <Text style={[styles.termOfUseText, styles.underLineText]}>
          {" "}
          Terms of Use
        </Text>
      </TouchableOpacity>
      <Text style={[styles.termOfUseText]}> and confirm you have read our</Text>
      <TouchableOpacity>
        <Text style={[styles.termOfUseText, styles.underLineText]}>
          {" "}
          Privacy and Cookie Statement.
        </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  termOfUse: {
    marginVertical: 26,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  termOfUseText: {
    fontSize: 13,
    color: "#474746",
  },
  underLineText: {
    textDecorationLine: "underline",
  },
});
export default TermOfUse;
