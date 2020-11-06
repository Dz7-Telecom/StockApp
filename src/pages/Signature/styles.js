import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
  },
  sketch: {
    flex: 10,
  },
  sketchContainer: {
    height: "100%",
  },
  image: {
    flex: 1,
  },
  imageContainer: {
    height: "50%",
    borderTopWidth: 10,
    borderTopColor: "#0a293e",
  },
  label: {
    bottom: "95%",
    width: "100%",
    padding: 5,
    alignItems: "center",
  },
  labelText: {
    backgroundColor: "#000",
    fontSize: 20,
    color: "#aeb2b5",
  },
  button: {
    zIndex: 1,
    padding: 12,
    minWidth: 76,
    minHeight: 88,
  },
  submitButton: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "rgba(0,0,0,0.2)",
    bottom: 50,
    right: 0,
    borderRadius: 20,
    padding: 15,
    borderBottomStartRadius: 1,
    borderTopEndRadius: 1,
    backgroundColor: "#aeb2b5",
    width: 150,
  },

  submitButtonText: {
    color: "#0a293e",
    fontWeight: "bold",
    fontSize: 15,
  },
});
