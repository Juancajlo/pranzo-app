import { StyleSheet } from "react-native";
import { normalGray } from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.03)",
  },
  headerView: {
    paddingTop: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    backgroundColor: "white",
  },
  headerFontView: {
    width: "80%",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  headerFont: {
    fontSize: 30,
    fontWeight: "bold",
  },
  iconView: {
    width: "20%",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  modalContainer: {
    width: "90%",
    height: "90%",
    padding: 20,
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: 30,
  },
  modalImage: {
    width: "100%",
    height: 150,
    borderRadius: 30,
    backgroundColor: normalGray,
  },
  modalForm: {
    backgroundColor: "white",
    marginTop: 5,
  },
  modalViewTitle: {
    alignItems: "center",
    marginBottom: 5,
  },
  modalButton: {
    marginTop: 10,
    borderRadius: 60,
  },
  modalButtonText: {
    color: normalGray,
    fontWeight: "bold",
  },
  button: {
    marginHorizontal: 90,
    borderRadius: 60,
  },
  buttonText: {
    color: normalGray,
    fontWeight: "bold",
  },
  loadingOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    alignItems: "center",
    justifyContent: "center",
  },
  loadingContainer: {
    backgroundColor: "white",
    flexDirection: "row",
    padding: 20,
    borderRadius: 20,
  },
  loadingText: {
    marginLeft: 5,
    fontSize: 15,
    fontWeight: "500",
  },
  cardContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
    elevation: 6,
  },
  cardTitleContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
