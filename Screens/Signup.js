import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { globalStyle } from "../Constants/globalStyle";
import Header from "../Components/Header";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import LoginSignupBtn from "../Components/LoginSignupBtn";
import Checkbox from "../Components/Checkbox";
import TermOfUse from "../Components/TermOfUse";
import FamilyAccount from "../Components/FamilyAccount";
import InputComponent from "../Components/InputComponent";
import { Formik } from "formik";
import * as yup from "yup";
import Toast from "react-native-root-toast";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

function Signup() {
  const Navigation = useNavigation();
  const [personalAccountToggle, setPersonalAccountToggle] = useState(true);
  const [popUp, setPopup] = useState(false);

  const LoginSchme = yup.object().shape({
    email: yup.string().email().required("Email is required"),
    password: yup.string().required("Password is required"),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
    firstName: yup.string().min(3).required("First Name is required"),
    lastName: yup.string().min(3).required("Last Name is required"),
  });
  const registerRequest = async (values) => {
    values.email = values.email.toLowerCase();
    return axios
      .post("https://api-dev.rescounts.com/api/v1/users", {
        email: values.email,
        password: values.password,
        firstName: values.firstName,
        lastName: values.lastName,
        phoneNumber: values.phoneNumber,
        passwordConfirmation: values.passwordConfirmation,
      })
      .then(function (response) {
        setPopup(true);
        setTimeout(() => {
          Navigation.navigate("Login");
        }, 3000);
      })
      .catch(function (error) {});
  };
  return (
    <ScrollView style={globalStyle.mainContainer}>
      {popUp && (
        <View style={styles.popUpStyle}>
          <Text>registered successfully</Text>
        </View>
      )}
      <Header page="signup" />
      <View style={styles.toggleContainer}>
        <TouchableOpacity
          onPress={() => {
            if (personalAccountToggle == false) {
              setPersonalAccountToggle(true);
            }
          }}
          style={styles.innerToggleContainer}
        >
          <FontAwesome
            name="user"
            size={24}
            style={[
              styles.toggleIcon,
              personalAccountToggle && styles.selectedIcon,
            ]}
          />
          <Text
            style={[
              styles.toggleText,
              personalAccountToggle && styles.selectedText,
            ]}
          >
            Personal Account
          </Text>
          {personalAccountToggle && (
            <View style={styles.underlineSelector}></View>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            if (personalAccountToggle) {
              setPersonalAccountToggle(false);
            }
          }}
          style={styles.innerToggleContainer}
        >
          <FontAwesome
            name="group"
            size={24}
            style={[
              styles.toggleIcon,
              !personalAccountToggle && styles.selectedIcon,
            ]}
          />
          <Text
            style={[
              styles.toggleText,
              !personalAccountToggle && styles.selectedText,
            ]}
          >
            Family Account
          </Text>
          {!personalAccountToggle && (
            <View style={styles.underlineSelector}></View>
          )}
        </TouchableOpacity>
      </View>
      {personalAccountToggle && (
        <Formik
          initialValues={{
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            phoneNumber: "",
            passwordConfirmation: "",
          }}
          onSubmit={(values) => registerRequest(values)}
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
            <View>
              <View style={styles.inputsContainer}>
                <InputComponent
                  placeholderText="First Name"
                  css={styles.sharedInputprops}
                  placeholderTextColor="#474746"
                  inputType="name"
                  inputValue={values.firstName}
                  handle={handleChange("firstName")}
                  blur={() => {
                    setFieldTouched("firstName");
                  }}
                  touched={touched.firstName}
                  errors={errors.firstName}
                />
                <InputComponent
                  placeholderText="Last Name"
                  css={styles.sharedInputprops}
                  placeholderTextColor="#474746"
                  inputValue={values.lastName}
                  inputType="name"
                  handle={handleChange("lastName")}
                  blur={() => {
                    setFieldTouched("lastName");
                  }}
                  touched={touched.lastName}
                  errors={errors.lastName}
                />
                <InputComponent
                  placeholderText="Email"
                  css={styles.sharedInputprops}
                  placeholderTextColor="#474746"
                  inputType="emailAddress"
                  inputValue={values.email}
                  handle={handleChange("email")}
                  blur={() => {
                    setFieldTouched("email");
                  }}
                  touched={touched.email}
                  errors={errors.email}
                />
                <InputComponent
                  placeholderText="Phone Number"
                  css={styles.sharedInputprops}
                  placeholderTextColor="#474746"
                  inputType="telephoneNumber"
                  inputValue={values.phoneNumber}
                  handle={handleChange("phoneNumber")}
                  blur={() => {
                    setFieldTouched("phoneNumber");
                  }}
                  touched={touched.phoneNumber}
                  errors={errors.phoneNumber}
                />
                <InputComponent
                  placeholderText="Password"
                  css={styles.sharedInputprops}
                  placeholderTextColor="#474746"
                  secure={true}
                  visibilityIcon
                  inputType="password"
                  inputValue={values.password}
                  handle={handleChange("password")}
                  blur={() => {
                    setFieldTouched("password");
                  }}
                  touched={touched.password}
                  errors={errors.password}
                />
                <InputComponent
                  placeholderText="Confirm Password"
                  css={styles.sharedInputprops}
                  placeholderTextColor="#474746"
                  secure={true}
                  visibilityIcon
                  inputType="password"
                  inputValue={values.passwordConfirmation}
                  handle={handleChange("passwordConfirmation")}
                  blur={() => {
                    setFieldTouched("passwordConfirmation");
                  }}
                  touched={touched.passwordConfirmation}
                  errors={errors.passwordConfirmation}
                />
              </View>
              <View style={styles.checkboxContainer}>
                <AntDesign name="checksquare" size={24} color="#E9D023" />
                <Text style={styles.savePassTxt}>Save password</Text>
              </View>
              <TouchableOpacity
                onPress={handleSubmit}
                style={styles.creatAccBtn}
              >
                <Text style={styles.creatAccTxt}>Create account</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      )}
      {!personalAccountToggle && (
        <>
          <FamilyAccount />
          <TouchableOpacity style={styles.creatAccBtn}>
            <Text style={styles.creatAccTxt}>Create account</Text>
          </TouchableOpacity>
        </>
      )}

      <LoginSignupBtn page="signup" />
      <View style={styles.checkboxesContainer}>
        <View style={styles.innerCheckboxContainer}>
          <Checkbox />
          <Text style={styles.checkboxesTxt}>
            Sign me up to receive exclusive offers and news on hot new
            restaurants on Rescounts.
          </Text>
        </View>
        <View style={[styles.innerCheckboxContainer, styles.sms]}>
          <Checkbox />
          <Text style={styles.checkboxesTxt}>Receive order updates by SMS</Text>
        </View>
      </View>
      <TermOfUse />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  popUpStyle: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#BEBEBE",
  },
  toggleContainer: {
    marginTop: 34,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  innerToggleContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 5,
  },
  selectedText: {
    color: "#E9D023",
  },
  toggleText: {
    color: "#BEBEBE",
    marginStart: 8,
    fontSize: 20,
  },
  selectedIcon: {
    color: "#E9D023",
  },
  toggleIcon: {
    color: "#BEBEBE",
  },
  underlineSelector: {
    position: "absolute",
    bottom: 0,
    height: 2,
    width: 100,
    right: 20,
    backgroundColor: "#E9D023",
  },
  inputsContainer: {
    marginTop: 30,
  },
  sharedInputprops: {
    borderRadius: 10,
    borderColor: "#BEBEBE",
    borderWidth: 1,
    width: "100%",
    height: 48,
    paddingHorizontal: 10,
    marginTop: 16,
  },

  visibiltyStyle: {
    position: "absolute",
    top: "45%",
    right: 20,
  },
  visibiltyImage: {
    width: 25,
    height: 25,
  },
  savePassTxt: {
    marginStart: 10,
    fontSize: 13,
    color: "#474746",
    fontWeight: "800",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginTop: 18,
  },
  creatAccBtn: {
    backgroundColor: "#E9D023",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    height: 48,
    marginTop: 34,
  },
  creatAccTxt: {
    fontSize: 18,
    color: "#474746",
  },
  checkboxesContainer: {
    marginTop: 14,
    flexDirection: "column",
  },
  innerCheckboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkboxesTxt: {
    marginStart: 10,
    fontSize: 13,
    textAlignVertical: "bottom",
  },
  sms: { marginTop: 24 },
});
export default Signup;
