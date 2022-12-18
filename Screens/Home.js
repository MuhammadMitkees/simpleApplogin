import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

function Home() {
  const Navigation = useNavigation();
  const [firstName, setFirstName] = useState("");

  useEffect(() => {
    AsyncStorage.getItem("app_token")
      .then((res) => {})
      .catch((err) => {});
    AsyncStorage.getItem("firstName")
      .then((res) => {
        setFirstName(res);
      })
      .catch((err) => {});
  }, []);
  return (
    <View style={styles.mainContainer}>
      <Text>welcome {firstName}</Text>
      <TouchableOpacity
        onPress={() => {
          AsyncStorage.clear();
          Navigation.navigate("Login");
        }}
        title="Logout"
        style={styles.button}
      >
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  button: {
    marginTop: 25,
    backgroundColor: "#BEBEBE",
    padding: 10,
    borderRadius: 5,
  },
});
export default Home;
