import React from "react";
import { View, Text, TouchableOpacity,TextInput } from "react-native";

import styles from "./styles";
import globalStyles from "../../styles/globalStyles";

const ItemDetails = () => {
  return (
    <View style={globalStyles.container}>
      <View style={styles.header}>
        <Text style={{ fontSize: 20 }}> __ G o - C h E C k __ </Text>
      </View>

      <View style={styles.body}>
        <Text>Quantidade de itens</Text>
        <TextInput keyboardType="numeric" placeholder='0' style={{borderRadius:50,width:'25%',textAlign:'center',borderBottomWidth:1, borderBottomColor:'black'}}/>

        <TouchableOpacity style={styles.continue}>
          <Text style={{color:'#aeb2b5',fontWeight:'bold',textAlign:"center" }}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ItemDetails;
