import React, { useState } from "react";
import { ScrollView, StyleSheet, View, Image } from "react-native";
import { IconButton, TextInput, Button, Text } from "react-native-paper";
import { useDispatch } from "react-redux";

import { startLogin } from "../actions/auth";

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("juan@gmail.com");
  const [password, setPassword] = useState("123456");

  return (
    <ScrollView style={styles.container}>
      <IconButton
        style={styles.icon}
        icon="arrow-left"
        color={"black"}
        size={25}
        onPress={() => navigation.pop()}
      />
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../../assets/images/hamburger.png")}
        />
      </View>
      <TextInput
        style={styles.form}
        mode={"outlined"}
        label="Correo"
        value={email}
        onChangeText={setEmail}
        maxLength={40}
      />
      <TextInput
        style={styles.form}
        mode={"outlined"}
        label="Contraseña"
        value={password}
        onChangeText={setPassword}
        maxLength={10}
      />
      <View style={styles.buttonView}>
        <Button
          style={styles.button}
          onPress={() => {
            navigation.navigate("Presentation");
          }}
          mode="contained"
        >
          <Text style={styles.buttonText}>cancelar</Text>
        </Button>
        <Button
          style={styles.button}
          onPress={() => {
            dispatch(startLogin(email, password));
          }}
          mode="contained"
        >
          <Text style={styles.buttonText}>entrar</Text>
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "white",
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
  icon: {
    marginTop: 50,
  },
  form: {
    marginTop: 10,
    backgroundColor: "white",
  },
  buttonView: {
    marginTop: 10,
  },
});

export default Login;
