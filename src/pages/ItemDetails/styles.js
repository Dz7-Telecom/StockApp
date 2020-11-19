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
    backgroundColor: "#0a293e",
    justifyContent: "center",
    alignItems: "center",
  },
  Equipment: {
    fontSize: 45,
    fontWeight: "bold",
    borderBottomColor: "#0a293e",
    borderBottomWidth: 1,
    color:'#fff'
  },
  patrimony: {
    marginTop: "20%",
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
    color:'#fff'
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
    color: "#fff",
  },

  Button: {
    backgroundColor: "#003352",
    padding: 20,
    borderRadius: 50,
    bottom: 0,
    alignItems:'center',
    justifyContent:'center'
  },
  StartButton: {
    backgroundColor: "#003352",
    padding: 15,
    borderRadius: 50,
    bottom: 10,
    alignItems:'center',
    justifyContent:'center'
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
    bottom: "120%",
    fontSize: 25,
    fontWeight: "bold",
    borderBottomWidth: 1,
    borderBottomColor: "#aeb2b5",
    textAlign: "center",
    color:'#fff'
  },

  threadTextInput: {
    fontSize: 25,
    padding: 10,
    color:'#fff',
    fontWeight:'bold'
  },
  threadVerification: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "15%",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.1)",
  },
  threadInput: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
    width: 100,
    height: 40,
    padding: 10,
    textAlign: "center",
    backgroundColor: "transparent",
    color: "#fff",
    fontWeight: "bold",
  },
});
