import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

function LoginSignupBtn(props) {
  const Navigation = useNavigation();
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
          {props.page == "login" ? (
            <TouchableOpacity
              onPress={() => {
                Navigation.navigate("Signup");
              }}
            >
              <Text style={styles.signUpText}> Sign Up </Text>
            </TouchableOpacity>
          ) : props.page == "signup" ? (
            <TouchableOpacity
              onPress={() => {
                Navigation.navigate("Login");
              }}
            >
              <Text style={styles.signUpText}> Login</Text>
            </TouchableOpacity>
          ) : null}
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
