import React, { useState, useEffect } from "react";
import { Button, Image, View, Platform, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";

const Upload = ({ onImage, disabled, onSave }) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

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
      onImage({
        name: "file",
        value: result,
      });
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <View style={{ marginBottom: 10, width: "100%" }}>
        <Button
          title="Pick an image from camera roll"
          onPress={pickImage}
          disabled={disabled}
        />
      </View>
      {image && (
        <Image
          source={{ uri: "data:image/jpeg;base64," + image }}
          style={{ width: 200, height: 200 }}
        />
      )}
      <View style={{ marginTop: 10, width: "100%" }}>
        <Button title="guardar" onPress={onSave} disabled={disabled} />
      </View>
    </View>
  );
};

export default Upload;
