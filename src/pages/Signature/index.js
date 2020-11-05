import Expo from "expo";
import * as ExpoPixi from "expo-pixi";
import React, { Component } from "react";
import {
  StatusBar,
  Image,
  Button,
  Platform,
  AppState,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";
import styles from "./styles";

const isAndroid = Platform.OS === "android";
function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export default class App extends Component {
  state = {
    image: null,
    strokeColor: 0xffffff,
    strokeWidth: 5,
    appState: AppState.currentState,
    
  };

  handleAppStateChangeAsync = (nextAppState) => {
    if (
      this.state.appState.match(/inactive|background/) &&
      nextAppState === "active"
    ) {
      if (isAndroid && this.sketch) {
        this.setState({
          appState: nextAppState,
          id: uuidv4(),
          lines: this.sketch.lines,
        });
        return;
      }
    }
    this.setState({ appState: nextAppState });
  };

  componentDidMount() {
      
    AppState.addEventListener("change", this.handleAppStateChangeAsync);
  }

  componentWillUnmount() {
    AppState.removeEventListener("change", this.handleAppStateChangeAsync);
  }

  onChangeAsync = async () => {
    const { uri } = await this.sketch.takeSnapshotAsync();

    this.setState({
      image: { uri },
      strokeWidth: 5,
      strokeColor: 0xffffff,
    });
  };

  onReady = () => {
    console.log("ready!");
  };
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <View style={styles.sketchContainer}>
            <ExpoPixi.Sketch
              ref={(ref) => (this.sketch = ref)}
              style={styles.sketch}
              strokeColor={this.state.strokeColor}
              strokeWidth={this.state.strokeWidth}
              strokeAlpha={1}
              onChange={this.onChangeAsync}
              onReady={this.onReady}
              initialLines={this.state.lines}
            />
            <View style={styles.label}>
              <Text style={styles.labelText}>Assine Aqui</Text>
            </View>
          </View>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={this.state.image} />
          </View>
        </View>
        <Button
          color={"#003352"}
          title="Desfazer"
          style={styles.button}
          onPress={() => {
            this.sketch.undo();
          }}
        />

        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => Alert.alert("opa", "Assinatura salva com sucesso!")}
        >
          <Text style={styles.submitButtonText}> Finalizar </Text>
        </TouchableOpacity>

        <StatusBar barStyle="dark-content" backgroundColor="#000" />
      </View>
    );
  }
}
