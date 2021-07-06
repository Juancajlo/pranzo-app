import React from "react";
import { View, Image, StyleSheet, ImageBackground } from "react-native";
import { StatusBar } from "expo-status-bar";
import Swiper from "react-native-swiper";
import { Button, Text, Title } from "react-native-paper";

import { normalGray, normalGreen, palidGreen } from "../utils/colors";

const Presentation = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="black" />
      <ImageBackground
        source={require("../../assets/images/pranzo.png")}
        style={styles.image}
      >
        <Title style={styles.header}>¡Bienvenido!</Title>
        <Swiper
          autoplay={true}
          autoplayTimeout={5}
          activeDotColor={normalGreen}
        >
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
            style={{
              ...styles.button,
              backgroundColor: normalGreen,
              marginBottom: 15,
            }}
            onPress={() => {
              navigation.navigate("Login");
            }}
            mode="contained"
          >
            <Text style={styles.buttonText}>iniciar sesión</Text>
          </Button>
          <Text style={{ marginBottom: 5, alignSelf: "center", fontSize: 15 }}>
            ¿No tienes cuenta?
          </Text>
          <Button
            style={{ ...styles.button, backgroundColor: palidGreen }}
            onPress={() => {
              navigation.navigate("Register");
            }}
            mode="contained"
          >
            <Text style={styles.buttonText}>registrate</Text>
          </Button>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.03)",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    marginTop: 130,
    marginBottom: 20,
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "center",
  },
  logo: {
    width: 350,
    height: 350,
    borderRadius: 170,
  },
  buttonView: {
    paddingVertical: 25,
    paddingHorizontal: 100,
    backgroundColor: "white",
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    elevation: 10,
  },
  button: {
    alignItems: "center",
    borderRadius: 60,
  },
  buttonText: {
    color: normalGray,
    fontWeight: "bold",
  },
  slide: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});

export default Presentation;
