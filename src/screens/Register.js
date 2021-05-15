import React, { useState, useContext } from "react";
import { ScrollView, StyleSheet, View, Image } from "react-native";
import { IconButton, TextInput, Button, Text } from "react-native-paper";

import { AuthContext } from "../contexts/AuthContext";

const Register = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { registerUser } = useContext(AuthContext);

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
        label="Nombre"
        value={firstName}
        onChangeText={setFirstName}
        maxLength={20}
      />
      <TextInput
        style={styles.form}
        mode={"outlined"}
        label="Apellido"
        value={lastName}
        onChangeText={setLastName}
        maxLength={20}
      />
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
            registerUser(firstName, lastName, email, password);
          }}
          mode="contained"
        >
          <Text style={styles.buttonText}>registrarse</Text>
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

export default Register;
