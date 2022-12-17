import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

function Header(props) {
  return (
    <>
      <View style={styles.teleWahtsappContainer}>
        <TouchableOpacity>
          <Image source={require("../assets/images/telephoneIcon.png")} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../assets/images/whatsappIcon.png")} />
        </TouchableOpacity>
      </View>
      <Image
        source={require("../assets/images/Logo.png")}
        style={styles.logoStyle}
      />
      <View style={styles.loginTxtContainer}>
        <Text style={styles.loginTitle}>
          {props.page == "signin"
            ? "Login"
            : props.page == "signup"
            ? "Sign Up"
            : null}
        </Text>
        <Text style={styles.loginDetails}>
          {props.page == "signin"
            ? "Add your details to login"
            : props.page == "signup"
            ? "Add your details to sign up"
            : null}
        </Text>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  teleWahtsappContainer: {
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  logoStyle: { alignSelf: "center" },
  loginTxtContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  loginTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#474746",
  },
  loginDetails: {
    fontSize: 13,
    marginTop: 16,
    color: "#7C7D7E",
  },
});

export default Header;
