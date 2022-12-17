import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Header from "../Components/Header";
import LoginWith from "../Components/LoginWith";
import { globalStyle } from "../Constants/globalStyle";
import LoginSignupBtn from "../Components/LoginSignupBtn";
import TermOfUse from "../Components/TermOfUse";
const Login = () => {
  return (
    <ScrollView style={globalStyle.mainContainer}>
      <Header page="signin" />
      <View style={styles.loginInputsContainer}>
        <TextInput
          placeholder="Your Email"
          style={styles.sharedInputprops}
          placeholderTextColor="#474746"
        />
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Password"
            style={[styles.sharedInputprops, styles.passwordStyle]}
            placeholderTextColor="#474746"
            secureTextEntry
          />
          <TouchableOpacity style={styles.visibiltyStyle}>
            <Image
              source={require("../assets/images/visibility2.png")}
              style={styles.visibiltyImage}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginTxt}>Login</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.forgetPassword}>
        <Text style={styles.forgetText}>Forgot your password?</Text>
      </TouchableOpacity>
      <View style={styles.loginWithContainer}>
        <Text style={styles.loginwithText}>or Login With</Text>
        <LoginWith type="facebook" />
        <LoginWith type="google" />
        <LoginWith type="apple" />
      </View>
      <LoginSignupBtn page="login" />
      <TermOfUse />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  loginInputsContainer: {
    marginTop: 33,
  },
  sharedInputprops: {
    borderRadius: 10,
    borderColor: "#BEBEBE",
    borderWidth: 1,
    width: "100%",
    height: 48,
    paddingHorizontal: 10,
  },
  passwordContainer: {
    marginTop: 10,
  },
  visibiltyStyle: {
    position: "absolute",
    top: 12,
    right: 20,
  },
  visibiltyImage: {
    width: 25,
    height: 25,
  },
  loginButton: {
    backgroundColor: "#BEBEBE",
    marginTop: 33,
    height: 48,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  loginTxt: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  forgetPassword: {
    marginTop: 42,
  },
  forgetText: {
    fontSize: 13,
    textAlign: "center",
    color: "#474746",
  },
  loginWithContainer: {
    marginTop: 42,
  },
  loginwithText: {
    fontSize: 13,
    color: "#7C7D7E",
    textAlign: "center",
  },
});
export default Login;
