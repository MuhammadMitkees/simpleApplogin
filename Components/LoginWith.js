import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

function LoginWith(props) {
  return (
    <>
      {props.type == "facebook" ? (
        <TouchableOpacity
          style={[styles.mainContaier, styles.facebookContainer]}
        >
          <Image source={require("../assets/images/facebook.png")} />
          <Text style={styles.facebookText}>Login with Facebook</Text>
        </TouchableOpacity>
      ) : props.type == "google" ? (
        <TouchableOpacity style={[styles.mainContaier, styles.googleContainer]}>
          <Image source={require("../assets/images/Google.png")} />
          <Text style={styles.googleText}>Login with Google</Text>
        </TouchableOpacity>
      ) : props.type == "apple" ? (
        <TouchableOpacity style={[styles.mainContaier, styles.appleContainer]}>
          <Image source={require("../assets/images/apple-logo.png")} />
          <Text style={styles.appleText}>Login with Google</Text>
        </TouchableOpacity>
      ) : null}
    </>
  );
}
const styles = StyleSheet.create({
  mainContaier: {
    height: 48,
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
  facebookContainer: { borderColor: "#5D98CC", marginTop: 20 },
  googleContainer: { borderColor: "#C12F2F" },
  appleContainer: { borderColor: "#474746" },
  facebookText: {
    color: "#5D98CC",
    marginStart: 10,
  },
  googleText: { color: "#C12F2F", marginStart: 10 },
  appleText: { color: "#474746", marginStart: 10 },
});
export default LoginWith;
