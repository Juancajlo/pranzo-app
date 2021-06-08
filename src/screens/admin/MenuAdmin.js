import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { IconButton } from "react-native-paper";
import { useDispatch } from "react-redux";

import { login, startLogout } from "../../actions/auth";
import UploadImage from "../../components/UploadImage";

const MenuAdmin = () => {
  const dispatch = useDispatch();

  const [fileObj, setFileObj] = useState({
    file: null,
    name: "",
    description: "",
  });
  const [fetching, setFetching] = useState(false);

  const [image, setImage] = useState(null);

  useEffect(() => {
    handleRedux();
  }, []);

  const handleRedux = async () => {
    const user = await JSON.parse(await AsyncStorage.getItem("user"));
    if (user) {
      dispatch(login(user.id, user.firstName, user.lastName, user.isAdmin));
    }
  };

  const handleChange = ({ name, value }) => {
    if (!fetching) {
      let newValue = { ...fileObj, [name]: value };
      setFileObj(newValue);
      console.log("handleChange", newValue);
    }
  };

  const handleRequest = () => {
    var details = {
      name: fileObj.name,
      description: fileObj.description,
      dishPicture: fileObj.file.base64,
    };

    var params = [];
    for (var property in details) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(details[property]);
      params.push(encodedKey + "=" + encodedValue);
    }
    params = params.join("&");

    axios.post("https://pranzo-api.herokuapp.com/api/dishes/", params).then(
      (response) => {
        setImage("" + response.data.dish.dishPicture);
        alert("Save successful");
        setFetching(false);
      },
      (error) => {
        console.log(error);
        setFetching(false);
        alert("Sorry an error has occurred");
      }
    );
  };

  return (
    <View style={styles.container}>
      <Text>HOME ADMIN</Text>
      <IconButton
        icon="logout"
        color={"black"}
        size={60}
        onPress={() => dispatch(startLogout())}
      />

      <View style={{ ...styles.card, flex: 1 }}>
        <TextInput
          placeholder={"name"}
          onChangeText={(text) => {
            handleChange({ name: "name", value: text });
          }}
          style={styles.input}
          editable={!fetching}
        />
        <TextInput
          placeholder={"description"}
          onChangeText={(text) => {
            handleChange({ name: "description", value: text });
          }}
          style={styles.input}
          editable={!fetching}
        />
        <UploadImage
          onImage={handleChange}
          disabled={fetching}
          onSave={handleRequest}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  card: {
    padding: 20,
    backgroundColor: "#eee",
    borderRadius: 5,
    marginBottom: 10,
  },
  input: {
    backgroundColor: "#fff",
    padding: 5,
    marginBottom: 10,
    alignItems: "center",
  },
});

export default MenuAdmin;
