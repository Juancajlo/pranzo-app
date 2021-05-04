import React from "react";
import { View, Image, StyleSheet } from "react-native";

import FilledButton from "../components/FilledButton";

const Presentation = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../../assets/images/cooking.png")}
        />
      </View>
      <FilledButton
        title="iniciar sesión"
        onPress={() => {
          navigation.navigate("Login");
        }}
      />
      <FilledButton
        title="registrarse"
        onPress={() => {
          navigation.navigate("Register");
        }}
        style={styles.registerButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  registerButton: {
    margin: 10,
    backgroundColor: "black",
  },
  logoContainer: {
    backgroundColor: "white",
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    marginVertical: 20,
    width: 400,
    height: 300,
    borderRadius: 10,
  },
});

export default Presentation;
