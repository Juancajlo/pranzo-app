import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { IconButton } from "react-native-paper";
import { useDispatch } from "react-redux";

import { startLogout } from "../../actions/auth";

const MenuClient = () => {
  const dispatch = useDispatch();
  const [images, setImages] = useState(null);

  useEffect(() => {
    axios.get("https://pranzo-api.herokuapp.com/api/dishes/").then((resp) => {
      //console.log(resp.data.dishes);
      setImages(resp.data.dishes);
    });
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text>HOME CLIENT</Text>
      <IconButton
        icon="logout"
        color={"black"}
        size={50}
        onPress={() => dispatch(startLogout())}
      />
      {images ? (
        <View style={{ alignItems: "center" }}>
          {images.map((data, index) => {
            return (
              <TouchableOpacity style={styles.card} key={index}>
                <Image
                  source={{ uri: "data:image/jpeg;base64," + data.dishPicture }}
                  style={{ width: 150, height: 150 }}
                />
                <View>
                  <Text style={styles.name}>{data.name}</Text>
                  <Text>{data.description}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      ) : (
        <Text>Loading images</Text>
      )}
    </ScrollView>
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
  name: {
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default MenuClient;
