import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
function FamilyAccount() {
  return (
    <>
      <View style={[styles.shadowContainer, styles.marginTopShadowContainer]}>
        <Text style={styles.shadowContainerTitle}>Your Info</Text>
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
            style={styles.sharedInputprops}
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
            placeholder="Re-enter Password"
            style={styles.sharedInputprops}
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
        <View style={styles.checkboxContainer}>
          <AntDesign name="checksquare" size={24} color="#E9D023" />
          <Text style={styles.savePassTxt}>Save password</Text>
        </View>
        <Entypo
          name="chevron-down"
          size={24}
          color="black"
          style={styles.chevronDownStyle}
        />
      </View>
      <View style={[styles.shadowContainer, styles.marginBetContainers]}>
        <Text style={styles.shadowContainerTitle}>
          Would you like to add your students to your account?*
        </Text>
        <View>
          <TextInput
            placeholder="Choose School"
            style={styles.sharedInputprops}
            placeholderTextColor="#474746"
          />
          <Entypo
            name="chevron-down"
            size={24}
            color="black"
            style={styles.chevronDownDropDown}
          />
        </View>
        <TextInput
          placeholder="School Code"
          style={styles.sharedInputprops}
          placeholderTextColor="#474746"
        />
        <TextInput
          placeholder="Class Name"
          style={styles.sharedInputprops}
          placeholderTextColor="#474746"
        />
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
          placeholder="Student Number"
          style={styles.sharedInputprops}
          placeholderTextColor="#474746"
        />
        <TextInput
          placeholder="Student ID"
          style={styles.sharedInputprops}
          placeholderTextColor="#474746"
        />
        <Text style={styles.addStdntTxt}>Add another student</Text>
        <Entypo
          name="chevron-down"
          size={24}
          color="black"
          style={styles.chevronDownStyle}
        />
      </View>
      <View style={[styles.shadowContainer, styles.marginBetContainers]}>
        <Text style={styles.shadowContainerTitle}>
          Would you like to add your spouse to your account?*
        </Text>
        <Text style={styles.shadowContainerSubText}>Add First student</Text>
        <TextInput
          placeholder="Spouse First Name"
          style={styles.sharedInputprops}
          placeholderTextColor="#474746"
        />
        <TextInput
          placeholder="Spouse Last Name"
          style={styles.sharedInputprops}
          placeholderTextColor="#474746"
        />
        <TextInput
          placeholder="Spouse Email Address"
          style={styles.sharedInputprops}
          placeholderTextColor="#474746"
        />
        <TextInput
          placeholder="Spouse Phone Number"
          style={styles.sharedInputprops}
          placeholderTextColor="#474746"
        />
        <Entypo
          name="chevron-down"
          size={24}
          color="black"
          style={styles.chevronDownStyle}
        />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  shadowContainer: {
    borderWidth: 1,
    padding: 20,
    borderColor: "black",
    borderRadius: 20,
  },
  marginTopShadowContainer: { marginTop: 30 },

  shadowContainerTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#474746",
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
  checkboxContainer: {
    flexDirection: "row",
    marginTop: 18,
  },
  savePassTxt: {
    marginStart: 10,
    fontSize: 13,
    color: "#474746",
    fontWeight: "800",
  },
  chevronDownStyle: {
    color: "black",
    alignSelf: "center",
    marginTop: 22,
  },
  marginBetContainers: {
    marginTop: 16,
  },
  chevronDownDropDown: {
    position: "absolute",
    top: "45%",
    right: 20,
  },
  addStdntTxt: {
    textAlign: "right",
    marginTop: 15,
    color: "#D80073",
    textDecorationLine: "underline",
    fontSize: 13,
  },
  shadowContainerSubText: {
    color: "#474746",
    marginTop: 12,
    fontSize: 13,
  },
});
export default FamilyAccount;
