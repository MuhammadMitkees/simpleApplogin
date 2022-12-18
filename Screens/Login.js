import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Header from "../Components/Header";
import LoginWith from "../Components/LoginWith";
import { globalStyle } from "../Constants/globalStyle";
import LoginSignupBtn from "../Components/LoginSignupBtn";
import TermOfUse from "../Components/TermOfUse";
import { Formik } from "formik";
import InputComponent from "../Components/InputComponent";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import * as yup from "yup";
import axios from "axios";

const Login = () => {
  const Navigation = useNavigation();
  const LoginSchme = yup.object().shape({
    email: yup.string().email().required("Email is required"),
    password: yup.string().required("Password is required"),
  });
  const loginRequest = async (values) => {
    values.email = values.email.toLowerCase();
    return axios
      .post("https://api-dev.rescounts.com/api/v1/users/login", {
        email: values.email,
        password: values.password,
      })
      .then(function (response) {
        AsyncStorage.setItem("app_token", response.data.token);
        AsyncStorage.setItem("firstName", response.data.user.firstName);
        Navigation.navigate("Home");
      })
      .catch(function (error) {});
  };

  return (
    <ScrollView style={globalStyle.mainContainer}>
      <Header page="signin" />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => loginRequest(values)}
        validationSchema={LoginSchme}
      >
        {({
          handleChange,
          handleSubmit,
          values,
          setFieldTouched,
          errors,
          touched,
        }) => (
          <View style={styles.loginInputsContainer}>
            <InputComponent
              placeholderText="Your Email"
              css={styles.sharedInputprops}
              placeholderTextColor="#474746"
              handle={handleChange("email")}
              inputValue={values.email}
              blur={() => {
                setFieldTouched("email");
              }}
              inputType="emailAddress"
              touched={touched.email}
              errors={errors.email}
            />
            <InputComponent
              placeholderText="Password"
              css={[styles.sharedInputprops, styles.passwordStyle]}
              placeholderTextColor="#474746"
              handle={handleChange("password")}
              inputValue={values.password}
              blur={() => {
                setFieldTouched("password");
              }}
              inputType="emailAddress"
              visibilityIcon={true}
              secure={true}
              touched={touched.password}
              errors={errors.password}
            />

            <TouchableOpacity onPress={handleSubmit} style={styles.loginButton}>
              <Text style={styles.loginTxt}>Login</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>

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
  passwordStyle: { marginTop: 16 },
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
