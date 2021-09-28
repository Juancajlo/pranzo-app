import { StyleSheet } from "react-native";
import { normalGray } from "../utils/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 20,
  },
  header: {
    marginBottom: 20,
    fontSize: 30,
    fontWeight: "bold",
  },
  form: {
    marginTop: 5,
  },
  button: {
    marginTop: 10,
    borderRadius: 60,
  },
  buttonText: {
    color: normalGray,
    fontWeight: "bold",
  },
});
