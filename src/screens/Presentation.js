import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";
import { StatusBar } from "expo-status-bar";
import Swiper from "react-native-swiper";
import { Button, Text, Title } from "react-native-paper";

import { normalGray, normalGreen, palidGreen } from "../utils/colors";

const windowWidth = Dimensions.get("window").width;

const Presentation = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="black" />
      <Title style={styles.header}>¡Bienvenido!</Title>
      <Swiper autoplay={true} autoplayTimeout={5} activeDotColor={"black"}>
        <View style={styles.slide}>
          <Image
            source={require("../../assets/images/healthy.jpg")}
            style={styles.logo}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require("../../assets/images/pasta.jpg")}
            style={styles.logo}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require("../../assets/images/croissants.jpg")}
            style={styles.logo}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require("../../assets/images/salad.jpg")}
            style={styles.logo}
          />
        </View>
      </Swiper>
      <View style={styles.buttonView}>
        <Button
          style={{ ...styles.button, backgroundColor: normalGreen }}
          onPress={() => {
            navigation.navigate("Login");
          }}
          mode="contained"
        >
          <Text style={styles.buttonText}>iniciar sesión</Text>
        </Button>
        <Button
          style={{ ...styles.button, backgroundColor: palidGreen }}
          onPress={() => {
            navigation.navigate("Register");
          }}
          mode="contained"
        >
          <Text style={styles.buttonText}>¿no tienes cuenta? registrate</Text>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    marginTop: 100,
    marginBottom: 20,
    fontSize: 30,
  },
  logo: {
    width: windowWidth - 20,
    height: 400,
    borderRadius: 140,
  },
  buttonView: {
    alignSelf: "stretch",
    marginBottom: 70,
    padding: 10,
  },
  button: {
    marginTop: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: normalGray,
    fontWeight: "bold",
  },
  slide: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});

export default Presentation;
