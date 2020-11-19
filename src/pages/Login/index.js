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
import SyncStorage from 'sync-storage';
import image from "../../assets/womanSeated.png";

import api from '../../services/api';

const Login = () => {
  const [username,setUsername] = useState();
  const [password,setPassword] = useState();

  const [hidePass, setHidePass] = useState(true);

  const navigation = useNavigation();

  function viewPass() {
    hidePass ? setHidePass(false) : setHidePass(true);
  }

  async function handleSubmit(){
    
    console.log('usuário' , username);
    console.log('senha', password);

    await api.post('appSession',{username,password}).then((response) => {
      
      if(response.data.name === undefined || response.data.name ===  null){
        return Alert.alert('usuário não encontrado','por favor tente novamente!')
      }

      SyncStorage.set('id',response.data.id);
      SyncStorage.set('name',response.data.name);
      
      navigation.navigate('home');

      Alert.alert(`Oi ${response.data.name} 🧞‍♂️️ `,'Bem vindo de volta')
    })
    .catch((error) => {
      Alert.alert('Ops ocorreu algo inesperado',`${error}`);
    })
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
              value={username}
              onChangeText={text => setUsername(text)}
            />
          </View>

          <Text style={styles.inputLabel}>Senha</Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder=". . . . . ."
              secureTextEntry={hidePass}
              placeholderTextColor="#aeb2b5"
              value={password}
              onChangeText={text => setPassword(text)}
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
            onPress={() => handleSubmit()}
          >
            <Text style={styles.submitButtonText}> Entrar </Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
};

export default Login;
