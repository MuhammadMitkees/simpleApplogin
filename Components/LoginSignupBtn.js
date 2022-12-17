import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

function LoginSignupBtn(props) {
  return (
    <View
      style={[
        styles.signUpContainer,
        props.page == "signup" ? styles.loginContainer : styles.signUpContainer,
      ]}
    >
      <Text style={styles.noAccountTxt}>
        {props.page == "login"
          ? "Don't have an Account?"
          : props.page == "signup"
          ? "Already have an Account ?"
          : null}
      </Text>
      <TouchableOpacity>
        <Text style={styles.signUpText}>
          {props.page == "login"
            ? " Sign Up"
            : props.page == "signup"
            ? " Login"
            : null}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  signUpContainer: {
    flexDirection: "row",
    marginTop: 47,
    justifyContent: "center",
  },
  loginContainer: { marginTop: 32 },
  noAccountTxt: {
    color: "#7C7D7E",
    fontSize: 13,
  },
  signUpText: {
    color: "#474746",
    fontSize: 13,
    fontWeight: "bold",
  },
});
export default LoginSignupBtn;
