import React from "react";
import { View, Text, TouchableOpacity, Alert, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import Img from "../../assets/person.png";
import globalStyles from "../../styles/globalStyles";
import styles from "./styles";

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={globalStyles.container}>
      <Image source={Img} style={styles.img} />
      <View style={globalStyles.header}>
        <Text style={styles.hallo}>Olá Dheph ;)</Text>
      </View>

      <View style={styles.body}>
        <Text style={styles.title}>Check Manager</Text>

        <View style={styles.menu}>
          <TouchableOpacity
            style={styles.options}
            onPress={() => navigation.navigate("newcheck")}
          >
            <Text style={{ color: "white" }}>
              <Feather name="box" size={21} color="#aeb2b5" />
              Novo Check
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.options}
            onPress={() => navigation.navigate("lastcheck")}
          >
            <Text style={{ color: "white" }}>
              <Feather name="codepen" size={21} color="#aeb2b5" />
              Ultimos Check
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => navigation.navigate("login")}
        >
          <Text style={styles.submitButtonText}> Sair </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
