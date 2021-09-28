import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";
import {
  View,
  Image,
  Platform,
  ScrollView,
  Alert,
  ImageBackground,
} from "react-native";
import {
  IconButton,
  Title,
  Modal,
  Portal,
  Button,
  Text,
  TextInput,
  Card,
  Paragraph,
} from "react-native-paper";
import { useDispatch } from "react-redux";

import { styles } from "../../styles/admin/MenuAdmin";
import { palidGreen, normalGreen } from "../../utils/colors";
import { DATABASE_URL } from "../../config/";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import { login, startLogout } from "../../actions/auth";

const MenuAdmin = () => {
  const dispatch = useDispatch();
  const [stateMenu, setStateMenu] = useState(false);
  const [modalLoading, setModalLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [fetching, setFetching] = useState(false);
  const [image, setImage] = useState(null);
  const [menuImages, setMenuImages] = useState(null);
  const [visible, setVisible] = useState(false);
  const [fileObj, setFileObj] = useState({
    file: null,
    name: "",
    description: "",
  });
  const [fileObjError, setFileObjError] = useState("");

  useEffect(() => {
    loadingMenu();
  }, [stateMenu]);

  useEffect(() => {
    handleRedux();
  }, []);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Disculpa, necesito permisos para hacer funcionar esto");
        }
      }
    })();
  }, []);

  const handleRedux = async () => {
    const user = await JSON.parse(await AsyncStorage.getItem("user"));
    if (user) {
      dispatch(login(user.id, user.firstName, user.lastName, user.isAdmin));
    }
  };

  const loadingMenu = async () => {
    try {
      const resp = await axios.get(`${DATABASE_URL}/dishes/`);
      setMenuImages(resp.data.dishes);
    } catch (e) {
      console.log("Error obteniendo el menú: " + e.message);
    }
  };

  const deleteDish = async (id) => {
    try {
      await axios.delete(`${DATABASE_URL}/dishes/${id}`);
      setStateMenu(!stateMenu);
      setDeleteLoading(true);
      Alert.alert("Éxito", "El plato fue eliminado exitosamente", [
        {
          text: "OK",
          onPress: () => {
            setDeleteLoading(false);
          },
        },
      ]);
    } catch (e) {
      setDeleteLoading(false);
      Alert.alert("Error", "Hubo un problema eliminando el plato", [
        {
          text: "OK",
        },
      ]);
      console.log("Error eliminando plato del menú:" + e.message);
    }
  };

  const showModal = () => setVisible(true);

  const hideModal = () => setVisible(false);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    });

    if (!result.cancelled) {
      setImage(result.base64);
      handleChange({
        name: "file",
        value: result,
      });
    }
  };

  const handleChange = ({ name, value }) => {
    if (!fetching) {
      let newValue = { ...fileObj, [name]: value };
      setFileObj(newValue);
    }
  };

  const handleAddDishModalError = () => {
    if (!fileObj.file || !fileObj.name || !fileObj.description) {
      setFileObjError("Todos los campos son requeridos");
    } else {
      setFileObjError("");
      handleRequest();
    }
  };

  const handleRequest = async () => {
    let details = {
      name: fileObj.name,
      description: fileObj.description,
      dishPicture: fileObj.file.base64,
    };

    let params = [];

    for (let property in details) {
      let encodedKey = encodeURIComponent(property);
      let encodedValue = encodeURIComponent(details[property]);
      params.push(encodedKey + "=" + encodedValue);
    }

    params = params.join("&");

    try {
      const response = await axios.post(`${DATABASE_URL}/dishes/`, params);
      setImage(response.data.dish.dishPicture);
      setModalLoading(true);
      setStateMenu(!stateMenu);
      setFetching(false);
      Alert.alert("Éxito", "El plato fue guardado exitosamente", [
        {
          text: "OK",
          onPress: () => {
            hideModal();
            setModalLoading(false);
          },
        },
      ]);
    } catch (e) {
      console.log(e);
      setFetching(false);
      Alert.alert("Error", "Disculpa, un error ha ocurrido", [
        {
          text: "OK",
        },
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/images/pranzo.png")}
        style={styles.image}
      >
        <Portal>
          {menuImages ? (
            <></>
          ) : (
            <Loading
              loading={true}
              display={"Cargando menú..."}
              color={normalGreen}
            />
          )}
          <Loading
            loading={deleteLoading}
            display={"Eliminando plato..."}
            color={normalGreen}
          />
          <Modal
            visible={visible}
            onDismiss={() => {
              hideModal();
              setFileObj(null);
              setImage(null);
            }}
            contentContainerStyle={styles.modalContainer}
          >
            <View>
              <ScrollView>
                <View style={styles.modalViewTitle}>
                  <Title style={{ fontSize: 23, fontWeight: "bold" }}>
                    Añadir plato al menú
                  </Title>
                </View>
                <Image
                  source={{ uri: "data:image/jpeg;base64," + image }}
                  style={styles.modalImage}
                />
                <TextInput
                  style={styles.modalForm}
                  mode={"outlined"}
                  theme={{
                    colors: {
                      primary: "black",
                    },
                    roundness: 60,
                  }}
                  label="Nombre"
                  onChangeText={(text) => {
                    handleChange({ name: "name", value: text });
                  }}
                  maxLength={25}
                  editable={!fetching}
                />
                <TextInput
                  style={styles.modalForm}
                  mode={"outlined"}
                  theme={{
                    colors: {
                      primary: "black",
                    },
                    roundness: 60,
                  }}
                  label="Descripción"
                  onChangeText={(text) => {
                    handleChange({ name: "description", value: text });
                  }}
                  maxLength={200}
                  multiline={true}
                  editable={!fetching}
                />
                <Error error={fileObjError} />
                <View style={{ paddingHorizontal: 60 }}>
                  <Button
                    style={{
                      ...styles.modalButton,
                      backgroundColor: palidGreen,
                    }}
                    onPress={pickImage}
                    disabled={fetching}
                    mode="contained"
                  >
                    <Text style={styles.modalButtonText}>escoger imágen</Text>
                  </Button>
                  <Button
                    style={{
                      ...styles.modalButton,
                      backgroundColor: normalGreen,
                    }}
                    onPress={handleAddDishModalError}
                    disabled={fetching}
                    mode="contained"
                  >
                    <Text style={styles.modalButtonText}>guardar</Text>
                  </Button>
                </View>
              </ScrollView>
            </View>
            <Loading
              loading={modalLoading}
              display={"Añadiendo plato..."}
              color={normalGreen}
            />
          </Modal>
        </Portal>
        <View
          style={{
            marginBottom: 20,
            backgroundColor: "white",
            borderBottomRightRadius: 60,
            borderBottomLeftRadius: 60,
            elevation: 6,
          }}
        >
          <View style={styles.headerView}>
            <View style={styles.headerFontView}>
              <Title style={styles.headerFont}>Menú</Title>
            </View>
            <View style={styles.iconView}>
              <IconButton
                icon="logout-variant"
                color={palidGreen}
                size={35}
                onPress={() => {
                  dispatch(startLogout());
                }}
              />
            </View>
          </View>
          <Button
            style={{
              ...styles.button,
              backgroundColor: palidGreen,
              marginBottom: 20,
            }}
            onPress={showModal}
            mode="contained"
          >
            <Text style={styles.buttonText}>agregar plato</Text>
          </Button>
        </View>
        {menuImages ? (
          <ScrollView style={{ flex: 1 }}>
            {menuImages.map((data, index) => {
              return (
                <Card key={index} style={styles.cardContainer}>
                  <Card.Cover
                    source={{
                      uri: "data:image/jpeg;base64," + data.dishPicture,
                    }}
                    style={{ borderRadius: 5 }}
                  />
                  <Card.Content style={styles.cardTitleContent}>
                    <View
                      style={{ flex: 1, flexDirection: "row", width: "100%" }}
                    >
                      <View
                        style={{
                          flexDirection: "column",
                          flex: 3,
                        }}
                      >
                        <Title style={{ alignSelf: "flex-start" }}>
                          {data.name}
                        </Title>
                        <Paragraph style={{ alignSelf: "flex-start" }}>
                          {data.description}
                        </Paragraph>
                      </View>
                      <View
                        style={{
                          flex: 1,
                          alignItems: "flex-end",
                        }}
                      >
                        <IconButton
                          icon="delete"
                          color={palidGreen}
                          size={35}
                          onPress={() => {
                            deleteDish(data.id);
                          }}
                        />
                      </View>
                    </View>
                  </Card.Content>
                </Card>
              );
            })}
          </ScrollView>
        ) : (
          <ScrollView
            style={{ flex: 1, backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          ></ScrollView>
        )}
      </ImageBackground>
    </View>
  );
};

export default MenuAdmin;
