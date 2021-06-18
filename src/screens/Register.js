import React, { useState } from "react";
import { ScrollView, StyleSheet, View, Alert } from "react-native";
import { TextInput, Button, Text, Title } from "react-native-paper";
import { useDispatch } from "react-redux";

import { normalGreen, palidGreen, normalGray } from "../utils/colors";
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

  /*useEffect(() => {
    setLoading(false);
    setFirstNameError('');
    setLastNameError('');
    setEmailError("");
    setPasswordError("");
    setFirstNameColorError("black");
    setLastNameColorError("black");
    setEmailColorError("black");
    setPasswordColorError("black");
    setFirstName('');
    setLastName('');
    setEmail("");
    setPassword("");
  }, []);*/

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
      setPasswordError("campo de contraseña obligatorio");
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
      setPasswordError("campo de contraseña obligatorio");
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
      setPasswordError("campo de contraseña obligatorio");
      setPasswordColorError("red");
    } else if (firstName && lastName && !email && !password) {
      setFirstNameError("");
      setFirstNameColorError("black");
      setLastNameError("");
      setLastNameColorError("black");
      setEmailError("campo de correo obligatorio");
      setEmailColorError("red");
      setPasswordError("campo de contraseña obligatorio");
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
      setPasswordError("campo de contraseña obligatorio");
      setPasswordColorError("red");
    } else if (!firstName && lastName && !email && !password) {
      setFirstNameError("campo de nombre obligatorio");
      setFirstNameColorError("red");
      setLastNameError("");
      setLastNameColorError("black");
      setEmailError("campo de correo obligatorio");
      setEmailColorError("red");
      setPasswordError("campo de contraseña obligatorio");
      setPasswordColorError("red");
    } else if (firstName && !lastName && !email && !password) {
      setFirstNameError("");
      setFirstNameColorError("black");
      setLastNameError("campo de apellido obligatorio");
      setLastNameColorError("red");
      setEmailError("campo de correo obligatorio");
      setEmailColorError("red");
      setPasswordError("campo de contraseña obligatorio");
      setPasswordColorError("red");
    } else if (!firstName && !lastName && !email && !password) {
      setFirstNameError("campo de nombre obligatorio");
      setFirstNameColorError("red");
      setLastNameError("campo de apellido obligatorio");
      setLastNameColorError("red");
      setEmailError("campo de correo obligatorio");
      setEmailColorError("red");
      setPasswordError("campo de contraseña obligatorio");
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
          Alert.alert("Éxito", "Usuario fue registrado exitosamente", [
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
        setFirstNameError("ingresar un nombre válido");
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
        setLastNameError("ingresar un apellido válido");
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
        setEmailError("ingresar un correo válido");
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
        setPasswordError("la contraseña debe ser de al menos 6 caracteres");
        setPasswordColorError("red");
      } else if (
        firstName.length < 3 &&
        lastName.length < 3 &&
        email.includes("@" && ".com") &&
        password.length >= 6
      ) {
        setFirstNameError("ingresar un nombre válido");
        setFirstNameColorError("red");
        setLastNameError("ingresar un apellido válido");
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
        setFirstNameError("ingresar un nombre válido");
        setFirstNameColorError("red");
        setLastNameError("");
        setLastNameColorError("black");
        setEmailError("ingresar un correo válido");
        setEmailColorError("red");
        setPasswordError("");
        setPasswordColorError("black");
      } else if (
        firstName.length < 3 &&
        lastName.length >= 3 &&
        email.includes("@" && ".com") &&
        password.length < 6
      ) {
        setFirstNameError("ingresar un nombre válido");
        setFirstNameColorError("red");
        setLastNameError("");
        setLastNameColorError("black");
        setEmailError("");
        setEmailColorError("black");
        setPasswordError("la contraseña debe ser de al menos 6 caracteres");
        setPasswordColorError("red");
      } else if (
        firstName.length >= 3 &&
        lastName.length < 3 &&
        !email.includes("@" && ".com") &&
        password.length >= 6
      ) {
        setFirstNameError("");
        setFirstNameColorError("black");
        setLastNameError("ingesar un apellido válido");
        setLastNameColorError("red");
        setEmailError("ingresar un correo válido");
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
        setLastNameError("ingresar un nombre válido");
        setLastNameColorError("red");
        setEmailError("");
        setEmailColorError("black");
        setPasswordError("la contraseña debe ser de al menos 6 caracteres");
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
        setEmailError("ingresar un correo válido");
        setEmailColorError("red");
        setPasswordError("la contraseña debe ser de al menos 6 caracteres");
        setPasswordColorError("red");
      } else if (
        firstName.length >= 3 &&
        lastName.length < 3 &&
        !email.includes("@" && ".com") &&
        password.length < 6
      ) {
        setFirstNameError("");
        setFirstNameColorError("black");
        setLastNameError("ingresar un apellido válido");
        setLastNameColorError("red");
        setEmailError("ingresar un correo válido");
        setEmailColorError("red");
        setPasswordError("la contraseña debe ser de al menos 6 caracteres");
        setPasswordColorError("red");
      } else if (
        firstName.length < 3 &&
        lastName.length >= 3 &&
        !email.includes("@" && ".com") &&
        password.length < 6
      ) {
        setFirstNameError("ingresar un nombre válido");
        setFirstNameColorError("red");
        setLastNameError("");
        setLastNameColorError("black");
        setEmailError("ingresar un correo válido");
        setEmailColorError("red");
        setPasswordError("la contraseña debe ser de al menos 6 caracteres");
        setPasswordColorError("red");
      } else if (
        firstName.length < 3 &&
        lastName.length < 3 &&
        email.includes("@" && ".com") &&
        password.length < 6
      ) {
        setFirstNameError("ingresar un nombre válido");
        setFirstNameColorError("black");
        setLastNameError("ingresar un apellido válido");
        setLastNameColorError("red");
        setEmailError("");
        setEmailColorError("black");
        setPasswordError("la contraseña debe ser de al menos 6 caracteres");
        setPasswordColorError("red");
      } else if (
        firstName.length < 3 &&
        lastName.length < 3 &&
        !email.includes("@" && ".com") &&
        password.length >= 6
      ) {
        setFirstNameError("ingresar un nombre válido");
        setFirstNameColorError("red");
        setLastNameError("ingresar un apellido válido");
        setLastNameColorError("red");
        setEmailError("ingresar un correo válido");
        setEmailColorError("red");
        setPasswordError("");
        setPasswordColorError("black");
      } else {
        setFirstNameError("ingresar un nombre válido");
        setFirstNameColorError("red");
        setLastNameError("ingresar un apellido válido");
        setLastNameColorError("red");
        setEmailError("ingresar un correo válido");
        setEmailColorError("red");
        setPasswordError("la contraseña debe ser de al menos 6 caracteres");
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
          }}
          label="Correo"
          value={email}
          onChangeText={setEmail}
          maxLength={40}
        />
        <Error error={emailError} />
        <TextInput
          style={styles.form}
          mode={"outlined"}
          theme={{
            colors: {
              primary: passwordColorError,
            },
          }}
          label="Contraseña"
          value={password}
          onChangeText={setPassword}
          maxLength={10}
        />
        <Error error={passwordError} />
        <Button
          style={{ ...styles.button, backgroundColor: palidGreen }}
          onPress={() => {
            try {
              handleSubmit(firstName, lastName, email, password);
            } catch (e) {
              setLoading(false);
              console.log("Error en botón registro" + e.message);
            }
          }}
          mode="contained"
        >
          <Text style={styles.buttonText}>registrarse</Text>
        </Button>
        <Button
          style={{ ...styles.button, backgroundColor: normalGreen }}
          onPress={() => {
            navigation.navigate("Presentation");
          }}
          mode="contained"
        >
          <Text style={styles.buttonText}>volver</Text>
        </Button>
      </ScrollView>
      <Loading loading={loading} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 10,
  },
  header: {
    marginBottom: 20,
    fontSize: 30,
  },
  form: {
    marginTop: 10,
    backgroundColor: "white",
  },
  button: {
    marginTop: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: normalGray,
    fontWeight: "bold",
  },
});

export default Register;
