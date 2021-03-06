import React, { useState, useEffect } from "react";
import { ScrollView, View, Alert } from "react-native";
import { TextInput, Button, Text, Title } from "react-native-paper";
import { useDispatch } from "react-redux";

import { styles } from "../styles/Register";
import { normalGreen, palidGreen } from "../utils/colors";
import Error from "../components/Error";
import Loading from "../components/Loading";
import { startRegister } from "../actions/auth";

const Register = ({ navigation }) => {
  const dispatch = useDispatch();
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [firstNameColorError, setFirstNameColorError] = useState("black");
  const [lastNameColorError, setLastNameColorError] = useState("black");
  const [emailColorError, setEmailColorError] = useState("black");
  const [passwordColorError, setPasswordColorError] = useState("black");
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setLoading(false);
    setFirstNameError("");
    setLastNameError("");
    setEmailError("");
    setPasswordError("");
    setFirstNameColorError("black");
    setLastNameColorError("black");
    setEmailColorError("black");
    setPasswordColorError("black");
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  }, []);

  const handleSubmit = async (firstName, lastName, email, password) => {
    if (!firstName && lastName && email && password) {
      setFirstNameError("campo de nombre obligatorio");
      setFirstNameColorError("red");
      setLastNameError("");
      setLastNameColorError("black");
      setEmailError("");
      setEmailColorError("black");
      setPasswordError("");
      setPasswordColorError("black");
    } else if (firstName && !lastName && email && password) {
      setFirstNameError("");
      setFirstNameColorError("black");
      setLastNameError("campo de apellido obligatorio");
      setLastNameColorError("red");
      setEmailError("");
      setEmailColorError("black");
      setPasswordError("");
      setPasswordColorError("black");
    } else if (firstName && lastName && !email && password) {
      setFirstNameError("");
      setFirstNameColorError("black");
      setLastNameError("");
      setLastNameColorError("black");
      setEmailError("campo de email obligatorio");
      setEmailColorError("red");
      setPasswordError("");
      setPasswordColorError("black");
    } else if (firstName && lastName && email && !password) {
      setFirstNameError("");
      setFirstNameColorError("black");
      setLastNameError("");
      setLastNameColorError("black");
      setEmailError("");
      setEmailColorError("black");
      setPasswordError("campo de contrase??a obligatorio");
      setPasswordColorError("red");
    } else if (!firstName && !lastName && email && password) {
      setFirstNameError("campo de nombre obligatorio");
      setFirstNameColorError("red");
      setLastNameError("campo de apellido obligatorio");
      setLastNameColorError("red");
      setEmailError("");
      setEmailColorError("black");
      setPasswordError("");
      setPasswordColorError("black");
    } else if (!firstName && lastName && !email && password) {
      setFirstNameError("campo de nombre obligatorio");
      setFirstNameColorError("red");
      setLastNameError("");
      setLastNameColorError("black");
      setEmailError("campo de correo obligatorio");
      setEmailColorError("red");
      setPasswordError("");
      setPasswordColorError("black");
    } else if (!firstName && lastName && email && !password) {
      setFirstNameError("campo de nombre obligatorio");
      setFirstNameColorError("red");
      setLastNameError("");
      setLastNameColorError("black");
      setEmailError("");
      setEmailColorError("black");
      setPasswordError("campo de contrase??a obligatorio");
      setPasswordColorError("red");
    } else if (firstName && !lastName && !email && password) {
      setFirstNameError("");
      setFirstNameColorError("black");
      setLastNameError("campo de apellido obligatorio");
      setLastNameColorError("red");
      setEmailError("campo de correo obligatorio");
      setEmailColorError("red");
      setPasswordError("");
      setPasswordColorError("black");
    } else if (firstName && !lastName && email && !password) {
      setFirstNameError("");
      setFirstNameColorError("black");
      setLastNameError("campo de apellido obligatorio");
      setLastNameColorError("red");
      setEmailError("");
      setEmailColorError("black");
      setPasswordError("campo de contrase??a obligatorio");
      setPasswordColorError("red");
    } else if (firstName && lastName && !email && !password) {
      setFirstNameError("");
      setFirstNameColorError("black");
      setLastNameError("");
      setLastNameColorError("black");
      setEmailError("campo de correo obligatorio");
      setEmailColorError("red");
      setPasswordError("campo de contrase??a obligatorio");
      setPasswordColorError("red");
    } else if (!firstName && !lastName && !email && password) {
      setFirstNameError("campo de nombre obligatorio");
      setFirstNameColorError("red");
      setLastNameError("campo de apellido obligatorio");
      setLastNameColorError("red");
      setEmailError("campo de correo obligatorio");
      setEmailColorError("red");
      setPasswordError("");
      setPasswordColorError("black");
    } else if (!firstName && !lastName && email && !password) {
      setFirstNameError("campo de nombre obligatorio");
      setFirstNameColorError("red");
      setLastNameError("campo de apellido obligatorio");
      setLastNameColorError("red");
      setEmailError("");
      setEmailColorError("black");
      setPasswordError("campo de contrase??a obligatorio");
      setPasswordColorError("red");
    } else if (!firstName && lastName && !email && !password) {
      setFirstNameError("campo de nombre obligatorio");
      setFirstNameColorError("red");
      setLastNameError("");
      setLastNameColorError("black");
      setEmailError("campo de correo obligatorio");
      setEmailColorError("red");
      setPasswordError("campo de contrase??a obligatorio");
      setPasswordColorError("red");
    } else if (firstName && !lastName && !email && !password) {
      setFirstNameError("");
      setFirstNameColorError("black");
      setLastNameError("campo de apellido obligatorio");
      setLastNameColorError("red");
      setEmailError("campo de correo obligatorio");
      setEmailColorError("red");
      setPasswordError("campo de contrase??a obligatorio");
      setPasswordColorError("red");
    } else if (!firstName && !lastName && !email && !password) {
      setFirstNameError("campo de nombre obligatorio");
      setFirstNameColorError("red");
      setLastNameError("campo de apellido obligatorio");
      setLastNameColorError("red");
      setEmailError("campo de correo obligatorio");
      setEmailColorError("red");
      setPasswordError("campo de contrase??a obligatorio");
      setPasswordColorError("red");
    } else {
      if (
        firstName.length >= 3 &&
        lastName.length >= 3 &&
        email.includes("@" && ".com") &&
        password.length >= 6
      ) {
        try {
          setLoading(true);
          setFirstNameError("");
          setFirstNameColorError("black");
          setLastNameError("");
          setLastNameColorError("black");
          setEmailError("");
          setEmailColorError("black");
          setPasswordError("");
          setPasswordColorError("black");
          await dispatch(startRegister(firstName, lastName, email, password));
          Alert.alert("??xito", "Usuario fue registrado exitosamente", [
            {
              text: "OK",
              onPress: () => {
                setLoading(false);
                navigation.navigate("Login");
              },
            },
          ]);
        } catch (e) {
          Alert.alert(
            "Error",
            "Usuario ya existente, intente con otro correo",
            [
              {
                text: "OK",
                onPress: () => {
                  setLoading(false);
                },
              },
            ]
          );
          console.log(e.message);
        }
      } else if (
        firstName.length < 3 &&
        lastName.length >= 3 &&
        email.includes("@" && ".com") &&
        password.length >= 6
      ) {
        setFirstNameError("ingresar un nombre v??lido");
        setFirstNameColorError("red");
        setLastNameError("");
        setLastNameColorError("black");
        setEmailError("");
        setEmailColorError("black");
        setPasswordError("");
        setPasswordColorError("black");
      } else if (
        firstName.length >= 3 &&
        lastName.length < 3 &&
        email.includes("@" && ".com") &&
        password.length >= 6
      ) {
        setFirstNameError("");
        setFirstNameColorError("black");
        setLastNameError("ingresar un apellido v??lido");
        setLastNameColorError("red");
        setEmailError("");
        setEmailColorError("black");
        setPasswordError("");
        setPasswordColorError("black");
      } else if (
        firstName.length >= 3 &&
        lastName.length >= 3 &&
        !email.includes("@" && ".com") &&
        password.length >= 6
      ) {
        setFirstNameError("");
        setFirstNameColorError("black");
        setLastNameError("");
        setLastNameColorError("black");
        setEmailError("ingresar un correo v??lido");
        setEmailColorError("red");
        setPasswordError("");
        setPasswordColorError("black");
      } else if (
        firstName.length >= 3 &&
        lastName.length >= 3 &&
        email.includes("@" && ".com") &&
        password.length < 6
      ) {
        setFirstNameError("");
        setFirstNameColorError("black");
        setLastNameError("");
        setLastNameColorError("black");
        setEmailError("");
        setEmailColorError("black");
        setPasswordError("la contrase??a debe ser de al menos 6 caracteres");
        setPasswordColorError("red");
      } else if (
        firstName.length < 3 &&
        lastName.length < 3 &&
        email.includes("@" && ".com") &&
        password.length >= 6
      ) {
        setFirstNameError("ingresar un nombre v??lido");
        setFirstNameColorError("red");
        setLastNameError("ingresar un apellido v??lido");
        setLastNameColorError("red");
        setEmailError("");
        setEmailColorError("black");
        setPasswordError("");
        setPasswordColorError("black");
      } else if (
        firstName.length < 3 &&
        lastName.length >= 3 &&
        !email.includes("@" && ".com") &&
        password.length >= 6
      ) {
        setFirstNameError("ingresar un nombre v??lido");
        setFirstNameColorError("red");
        setLastNameError("");
        setLastNameColorError("black");
        setEmailError("ingresar un correo v??lido");
        setEmailColorError("red");
        setPasswordError("");
        setPasswordColorError("black");
      } else if (
        firstName.length < 3 &&
        lastName.length >= 3 &&
        email.includes("@" && ".com") &&
        password.length < 6
      ) {
        setFirstNameError("ingresar un nombre v??lido");
        setFirstNameColorError("red");
        setLastNameError("");
        setLastNameColorError("black");
        setEmailError("");
        setEmailColorError("black");
        setPasswordError("la contrase??a debe ser de al menos 6 caracteres");
        setPasswordColorError("red");
      } else if (
        firstName.length >= 3 &&
        lastName.length < 3 &&
        !email.includes("@" && ".com") &&
        password.length >= 6
      ) {
        setFirstNameError("");
        setFirstNameColorError("black");
        setLastNameError("ingesar un apellido v??lido");
        setLastNameColorError("red");
        setEmailError("ingresar un correo v??lido");
        setEmailColorError("red");
        setPasswordError("");
        setPasswordColorError("black");
      } else if (
        firstName.length >= 3 &&
        lastName.length < 3 &&
        email.includes("@" && ".com") &&
        password.length < 6
      ) {
        setFirstNameError("");
        setFirstNameColorError("black");
        setLastNameError("ingresar un nombre v??lido");
        setLastNameColorError("red");
        setEmailError("");
        setEmailColorError("black");
        setPasswordError("la contrase??a debe ser de al menos 6 caracteres");
        setPasswordColorError("red");
      } else if (
        firstName.length >= 3 &&
        lastName.length >= 3 &&
        !email.includes("@" && ".com") &&
        password.length < 6
      ) {
        setFirstNameError("");
        setFirstNameColorError("black");
        setLastNameError("");
        setLastNameColorError("black");
        setEmailError("ingresar un correo v??lido");
        setEmailColorError("red");
        setPasswordError("la contrase??a debe ser de al menos 6 caracteres");
        setPasswordColorError("red");
      } else if (
        firstName.length >= 3 &&
        lastName.length < 3 &&
        !email.includes("@" && ".com") &&
        password.length < 6
      ) {
        setFirstNameError("");
        setFirstNameColorError("black");
        setLastNameError("ingresar un apellido v??lido");
        setLastNameColorError("red");
        setEmailError("ingresar un correo v??lido");
        setEmailColorError("red");
        setPasswordError("la contrase??a debe ser de al menos 6 caracteres");
        setPasswordColorError("red");
      } else if (
        firstName.length < 3 &&
        lastName.length >= 3 &&
        !email.includes("@" && ".com") &&
        password.length < 6
      ) {
        setFirstNameError("ingresar un nombre v??lido");
        setFirstNameColorError("red");
        setLastNameError("");
        setLastNameColorError("black");
        setEmailError("ingresar un correo v??lido");
        setEmailColorError("red");
        setPasswordError("la contrase??a debe ser de al menos 6 caracteres");
        setPasswordColorError("red");
      } else if (
        firstName.length < 3 &&
        lastName.length < 3 &&
        email.includes("@" && ".com") &&
        password.length < 6
      ) {
        setFirstNameError("ingresar un nombre v??lido");
        setFirstNameColorError("black");
        setLastNameError("ingresar un apellido v??lido");
        setLastNameColorError("red");
        setEmailError("");
        setEmailColorError("black");
        setPasswordError("la contrase??a debe ser de al menos 6 caracteres");
        setPasswordColorError("red");
      } else if (
        firstName.length < 3 &&
        lastName.length < 3 &&
        !email.includes("@" && ".com") &&
        password.length >= 6
      ) {
        setFirstNameError("ingresar un nombre v??lido");
        setFirstNameColorError("red");
        setLastNameError("ingresar un apellido v??lido");
        setLastNameColorError("red");
        setEmailError("ingresar un correo v??lido");
        setEmailColorError("red");
        setPasswordError("");
        setPasswordColorError("black");
      } else {
        setFirstNameError("ingresar un nombre v??lido");
        setFirstNameColorError("red");
        setLastNameError("ingresar un apellido v??lido");
        setLastNameColorError("red");
        setEmailError("ingresar un correo v??lido");
        setEmailColorError("red");
        setPasswordError("la contrase??a debe ser de al menos 6 caracteres");
        setPasswordColorError("red");
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ height: 30 }}></View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Title style={styles.header}>Registro</Title>
        <TextInput
          style={styles.form}
          mode={"outlined"}
          theme={{
            colors: {
              primary: firstNameColorError,
            },
            roundness: 60,
          }}
          label="Nombre"
          value={firstName}
          onChangeText={setFirstName}
          maxLength={20}
        />
        <Error error={firstNameError} />
        <TextInput
          style={styles.form}
          mode={"outlined"}
          theme={{
            colors: {
              primary: lastNameColorError,
            },
            roundness: 60,
          }}
          label="Apellido"
          value={lastName}
          onChangeText={setLastName}
          maxLength={20}
        />
        <Error error={lastNameError} />
        <TextInput
          style={styles.form}
          mode={"outlined"}
          theme={{
            colors: {
              primary: emailColorError,
            },
            roundness: 60,
          }}
          label="Correo"
          value={email}
          onChangeText={setEmail}
          maxLength={40}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Error error={emailError} />
        <TextInput
          style={styles.form}
          mode={"outlined"}
          theme={{
            colors: {
              primary: passwordColorError,
            },
            roundness: 60,
          }}
          label="Contrase??a"
          value={password}
          onChangeText={setPassword}
          maxLength={10}
          secureTextEntry
        />
        <Error error={passwordError} />
        <View style={{ paddingHorizontal: 60 }}>
          <Button
            style={{ ...styles.button, backgroundColor: normalGreen }}
            onPress={() => {
              try {
                handleSubmit(firstName, lastName, email, password);
              } catch (e) {
                setLoading(false);
                console.log("Error en bot??n registro" + e.message);
              }
            }}
            mode="contained"
          >
            <Text style={styles.buttonText}>registrarse</Text>
          </Button>
          <Button
            style={{ ...styles.button, backgroundColor: palidGreen }}
            onPress={() => {
              navigation.navigate("Presentation");
            }}
            mode="contained"
          >
            <Text style={styles.buttonText}>volver</Text>
          </Button>
        </View>
      </ScrollView>
      <Loading loading={loading} display={"Cargando..."} color={normalGreen} />
    </View>
  );
};

export default Register;
