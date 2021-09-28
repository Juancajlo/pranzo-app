import { StyleSheet } from "react-native";
import { normalGray } from "../utils/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.03)",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    marginTop: 130,
    marginBottom: 20,
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "center",
  },
  logo: {
    width: 350,
    height: 350,
    borderRadius: 170,
  },
  buttonView: {
    paddingVertical: 25,
    paddingHorizontal: 100,
    backgroundColor: "white",
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    elevation: 10,
  },
  button: {
    alignItems: "center",
    borderRadius: 60,
  },
  buttonText: {
    color: normalGray,
    fontWeight: "bold",
  },
  slide: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
