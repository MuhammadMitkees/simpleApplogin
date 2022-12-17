import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
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
function Signup() {
  const [personalAccountToggle, setPersonalAccountToggle] = useState(true);

  return (
    <ScrollView style={globalStyle.mainContainer}>
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
        <>
          <View style={styles.inputsContainer}>
            <TextInput
              placeholder="First Name"
              style={styles.sharedInputprops}
              placeholderTextColor="#474746"
            />
            <TextInput
              placeholder="Last Name"
              style={styles.sharedInputprops}
              placeholderTextColor="#474746"
            />
            <TextInput
              placeholder="Email"
              style={styles.sharedInputprops}
              placeholderTextColor="#474746"
            />
            <TextInput
              placeholder="Phone Number"
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
            <View>
              <TextInput
                placeholder="Confirm Password"
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
          </View>
          <View style={styles.checkboxContainer}>
            <AntDesign name="checksquare" size={24} color="#E9D023" />
            <Text style={styles.savePassTxt}>Save password</Text>
          </View>
        </>
      )}
      {!personalAccountToggle && <FamilyAccount />}
      <TouchableOpacity style={styles.creatAccBtn}>
        <Text style={styles.creatAccTxt}>Create account</Text>
      </TouchableOpacity>
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
  yourInfo: {
    shad,
  },
});
export default Signup;
