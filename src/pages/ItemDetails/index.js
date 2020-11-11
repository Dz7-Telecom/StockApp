import React, { useState } from "react";
import { View, Text, TouchableOpacity,TextInput,Alert,Image} from "react-native";

import styles from "./styles";
import globalStyles from "../../styles/globalStyles";
import { useNavigation,useRoute } from "@react-navigation/native";

import girlDribble from '../../assets/seatedPerson.png'

const ItemDetails = () => {
  const [quantity,setQuantity ] = useState()
  
  const route = useRoute()
  const navigation = useNavigation()

  const tool = route.params.tool;


  return (
    <View style={globalStyles.container}>
      <Image source={girlDribble} style={{width:100,height:100,top:50,position:'absolute'}}/>
      <View style={styles.header}>
        <Text style={{ fontSize: 20 }}> __ G o - C h E C k __ </Text>
        <Text style={{ fontSize: 20,marginTop:'5%', fontWeight:'bold', borderBottomWidth:1, borderBottomColor:'black',borderRadius:20 }}> {tool.name} </Text>
      </View>

      <View style={styles.body}>
        <Text>Quantidade de itens</Text>
        <TextInput 
        keyboardType="numeric" 
        placeholder='0' 
        style={{borderRadius:50,width:'25%',textAlign:'center',borderBottomWidth:1, borderBottomColor:'black'}}
        value={quantity}
        onChangeText={text => setQuantity(text)}
        />

        <TouchableOpacity style={styles.continue} onPress={() => navigation.navigate('insertitems',{quantity})}>
          <Text style={{color:'#aeb2b5',fontWeight:'bold',textAlign:"center" }}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ItemDetails;
