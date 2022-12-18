import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

function InputComponent(props) {
  return (
    <View>
      <TextInput
        placeholder={props.placeholderText}
        style={props.css}
        placeholderTextColor={props.placeholderTextColor}
        onChangeText={props.handle}
        value={props.inputValue}
        onBlur={props.blur}
        textContentType={props.inputType}
        secureTextEntry={props.secure}
      />
      {props.visibilityIcon && (
        <TouchableOpacity style={styles.visibiltyStyle}>
          <Image
            source={require("../assets/images/visibility2.png")}
            style={styles.visibiltyImage}
          />
        </TouchableOpacity>
      )}
      {props.touched && props.errors && (
        <Text style={styles.errorText}>{props.errors}</Text>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  visibiltyStyle: {
    position: "absolute",
    top: "45%",
    right: 20,
  },
  visibiltyImage: {
    width: 25,
    height: 25,
  },
  errorText: {
    color: "#D93025",
    marginHorizontal: 5,
    textTransform: "capitalize",
    fontSize: 12,
  },
});
export default InputComponent;
