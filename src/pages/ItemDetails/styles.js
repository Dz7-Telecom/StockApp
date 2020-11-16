import { StyleSheet } from "react-native";

export default StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  body: {
    flex: 5,
    backgroundColor: "rgba(0,0,0,0.1)",
    justifyContent: "center",
    alignItems: "center",
  },
  Equipment: {
    fontSize: 20,
    fontWeight: "bold",
    borderBottomColor: "#0a293e",
    borderBottomWidth: 1,
  },
  patrimony: {
    marginTop: "25%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "3%",
    backgroundColor: "rgba(0,0,0,0.03)",
    borderRadius: 30,
  },

  patrimonyText: {
    fontSize: 20,
    padding: 10,
  },
  patrimonyVerification: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "5%",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.1)",
  },
  patrimonyInput: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#13161d",
    width: 100,
    height: 40,
    padding: 10,
    textAlign: "center",
    backgroundColor: "#003352",
    color: "#aeb2b5",
  },

  quantity: {
    justifyContent: "center",
    alignItems: "center",
    margin: "10%",
  },
  quantityText: {
    fontSize: 20,
  },
  quantityResult: {
    fontSize: 15,
    fontWeight: "bold",
    padding: 10,
  },
  Button: {
    backgroundColor: "#003352",
    padding: 20,
    borderRadius: 50,
    bottom: 0,
  },

  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    margin: "2%",
  },
  // Thread
  thread: {
    justifyContent: "center",
    alignItems: "center",
    padding: "3%",
  },
  insertView: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  threadText: {
    position: "absolute",
    bottom: "180%",
    fontSize: 20,
    fontWeight: "bold",
    borderBottomWidth: 1,
    borderBottomColor: "#13161d",
    textAlign: "center",
  },

  threadTextInput: {
    fontSize: 20,
    padding: 10,
  },
  threadVerification: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "5%",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.1)",
  },
  threadInput: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#13161d",
    width: 100,
    height: 40,
    padding: 10,
    textAlign: "center",
    backgroundColor: "transparent",
    color: "#003352",
    fontWeight: "bold",
  },
});
