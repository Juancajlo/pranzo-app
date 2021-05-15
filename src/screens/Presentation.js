import React from "react";
import { View, Image, StyleSheet } from "react-native";

import { Button, Text } from "react-native-paper";

const Presentation = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../../assets/images/cooking.png")}
        />
      </View>
      <View style={styles.buttonView}>
        <Button
          style={styles.button}
          onPress={() => {
            navigation.navigate("Login");
          }}
          mode="contained"
        >
          <Text style={styles.buttonText}>iniciar sesión</Text>
        </Button>
        <Button
          style={styles.button}
          onPress={() => {
            navigation.navigate("Register");
          }}
          mode="contained"
        >
          <Text style={styles.buttonText}>registrarse</Text>
        </Button>
      </View>
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
  button: {
    marginTop: 10,
    backgroundColor: "black",
  },
  buttonText: {
    color: "white",
  },
  buttonView: {
    alignSelf: "stretch",
  },
});

export default Presentation;
