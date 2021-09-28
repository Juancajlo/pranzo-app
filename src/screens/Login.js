import React, { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
import { TextInput, Button, Text, Title } from "react-native-paper";
import { useDispatch } from "react-redux";

import { styles } from "../styles/Login";
import { normalGreen, palidGreen } from "../utils/colors";
import Error from "../components/Error";
import Loading from "../components/Loading";
import { startLogin } from "../actions/auth";

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailColorError, setEmailColorError] = useState("black");
  const [passwordColorError, setPasswordColorError] = useState("black");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setLoading(false);
    setEmailError("");
    setPasswordError("");
    setEmailColorError("black");
    setPasswordColorError("black");
    setEmail("");
    setPassword("");
  }, []);

  const handleSubmit = async (email, password) => {
    if (!email && !password) {
      setEmailError("campo de correo obligatorio");
      setEmailColorError("red");
      setPasswordError("campo de contraseña obligatorio");
      setPasswordColorError("red");
    } else if (!email && password) {
      if (password.length < 6) {
        setEmailError("campo de correo obligatorio");
        setEmailColorError("red");
        setPasswordError("la contraseña debe ser de al menos 6 caracteres");
        setPasswordColorError("red");
      } else {
        setEmailError("campo de correo obligatorio");
        setEmailColorError("red");
        setPasswordError("");
        setPasswordColorError("black");
      }
    } else if (!password && email) {
      if (!email.includes("@" && ".com")) {
        setEmailError("ingresar un correo válido");
        setEmailColorError("red");
        setPasswordError("campo de contraseña obligatorio");
        setPasswordColorError("red");
      } else {
        setEmailError("");
        setEmailColorError("black");
        setPasswordError("campo de contraseña obligatorio");
        setPasswordColorError("red");
      }
    } else {
      if (!email.includes("@" && ".com") && password.length < 6) {
        setEmailError("introducir un correo válido");
        setEmailColorError("red");
        setPasswordError("la contraseña debe ser de al menos 6 caracteres");
        setPasswordColorError("red");
      } else if (email.includes("@" && ".com") && password.length < 6) {
        setEmailError("");
        setEmailColorError("black");
        setPasswordError("la contraseña debe ser de al menos 6 caracteres");
        setPasswordColorError("red");
      } else if (!email.includes("@" && ".com") && password.length >= 6) {
        setPasswordError("");
        setPasswordColorError("black");
        setEmailError("ingresar un correo válido");
        setEmailColorError("red");
      } else {
        try {
          setLoading(true);
          setEmailError("");
          setEmailColorError("black");
          setPasswordError("");
          setPasswordColorError("black");
          await dispatch(startLogin(email, password));
        } catch (e) {
          setLoading(false);
          console.log(e.message);
        }
      }
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Title style={styles.header}>Iniciar Sesión</Title>
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
          label="Contraseña"
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
                handleSubmit(email, password);
              } catch (e) {
                setLoading(false);
                console.log("Error en botón entrar:" + e.message);
              }
            }}
            mode="contained"
          >
            <Text style={styles.buttonText}>entrar</Text>
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

export default Login;
