import React from "react";
import { View, Text, Image } from "react-native";

import globalStyles from "../../styles/globalStyles";
import styles from "./styles";

import signaImg from '../../assets/signatureTest.png'
const MoreDetails = () => {
  return (
    <View styles={globalStyles.container}>
      <View style={globalStyles.header}>
        <Text style={styles.title}> Detalhes do check </Text>
        <Text style={styles.textInformations}>
          Data de cadastro : 05/08/2020
        </Text>

        <Text style={styles.textInformations}>Items cadastrados : 10</Text>
      </View>
    
      <View style={styles.body}>
        
        <Image source={signaImg} style={styles.signatureImg} />
      </View>
    </View>
  );
};

export default MoreDetails;
