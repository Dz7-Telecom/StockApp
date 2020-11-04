import React, { useState } from "react";
import {
  View,
  Text,
  Alert,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import globalStyles from "../../styles/globalStyles";
import styles from "./styles";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import logo from "../../assets/icon.png";

import image from "../../assets/womanSeated.png";

const Login = () => {
  const [hidePass, setHidePass] = useState(true);

  const navigation = useNavigation();

  function viewPass() {
    hidePass ? setHidePass(false) : setHidePass(true);
  }

  return (
    <View style={globalStyles.container}>
      <Image source={image} style={styles.Img} />
      <View style={globalStyles.header}>
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo} />
        </View>
      </View>

      <View style={styles.body}>
        <Text style={styles.title}> Login </Text>

        <View style={styles.form}>
          <Text style={styles.inputLabel}>Usuário</Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="example.Dz7"
              placeholderTextColor="#aeb2b5"
            />
          </View>

          <Text style={styles.inputLabel}>Senha</Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder=". . . . . ."
              secureTextEntry={hidePass}
              placeholderTextColor="#aeb2b5"
            />
          </View>

          <TouchableOpacity
            style={styles.inputPassword}
            onPress={() => viewPass()}
          >
            <Feather
              name={hidePass ? "eye" : "eye-off"}
              size={21}
              color="#aeb2b5"
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => navigation.navigate("home")}
          >
            <Text style={styles.submitButtonText}> Entrar </Text>
          </TouchableOpacity>
        </View>

        {/* end form */}
      </View>
      {/* end body */}
    </View>
  );
};

export default Login;
