import React from "react";
import { View, Image, ImageBackground } from "react-native";
import { StatusBar } from "expo-status-bar";
import Swiper from "react-native-swiper";
import { Button, Text, Title } from "react-native-paper";

import { normalGreen, palidGreen } from "../utils/colors";
import { styles } from "../styles/Presentation";

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
          <Button
            style={{ ...styles.button, backgroundColor: palidGreen }}
            onPress={() => {
              navigation.navigate("Register");
            }}
            mode="contained"
          >
            <Text style={styles.buttonText}>registro</Text>
          </Button>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Presentation;
