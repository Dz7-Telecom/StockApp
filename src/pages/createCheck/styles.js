import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({

  pixi: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
  },
  body: {
    flex: 4,
    backgroundColor: "#0a293e",
  },
  horizontalList: {
    margin: "25%",
    width: "50%",
    height: "100%",
  },
  handMan: {
    width: '30%',
    height: '34%',
    position: "absolute",
    bottom: "96%",
  },
  checkGroup: {
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 200,
    bottom: '15%',
    height: "135%",
    marginBottom: 10,
  },
  itemStyle: {
    backgroundColor: "#aeb2b5",
    padding: "15%",
    marginVertical: 30,
    marginHorizontal: 1.5,
    borderWidth: 3,
    borderColor: "#aeb2b5",
    borderRadius: 50,
    borderTopEndRadius: 1,
    borderBottomStartRadius: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  itemTextStyle: {
    textAlign: "center",
    fontSize: 20,
    color: "#0a293e",
    fontWeight: "bold",
    borderBottomColor: "#003352",
    borderBottomWidth: 1,
    borderRadius: 30,
  },
  verticalScroll: {
    marginTop: "1%",
  },
  iconsContainer: {
    flexWrap: "wrap",
    alignItems: "flex-start",
    flexDirection: "row",
  },

  icons: {
    flexDirection: "column",
    margin: 10,
    marginVertical: 15,
  },

  submitButton: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "rgba(0,0,0,0.2)",
    bottom: 50,
    left: 150,
    borderRadius: 20,
    padding: 10,
    borderBottomStartRadius: 1,
    borderTopEndRadius: 1,
    width: 50,
  },

  submitButtonText: {
    color: "#0a293e",
    fontWeight: "bold",
    fontSize: 15,
  },

  modalContainer: {
    flex: 1,
    backgroundColor: "#003352",
    paddingTop: Constants.statusBarHeight + 10,
  },

  modalHeader: {
    flex: 1,
    backgroundColor: "#003352",
    justifyContent: "center",
    alignContent: "center",
  },
  modalHeaderText: {
    color: "#aeb2b5",
    fontSize: 20,
    textAlign: "center",
  },

  modalBody: {
    flex: 2,
    backgroundColor: "#aeb2b5",
  },
  modalBodyText: {
    color: "#0a293e",
    fontSize: 18,
    textAlign: "center",
    marginTop: 20,
  },
  modalSubmitButton: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "rgba(0,0,0,0.2)",
    top: "12%",
    left: 150,
    borderRadius: 20,
    padding: 20,
    borderBottomStartRadius: 1,
    borderTopEndRadius: 1,
    width: "28%",
  },

  modalSubmitButtonText: {
    color: "#0a293e",
    fontWeight: "bold",
    fontSize: 15,
  },
});
