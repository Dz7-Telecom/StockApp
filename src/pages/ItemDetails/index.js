import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Switch,
  TouchableOpacity,
  Alert,
} from "react-native";
import globalStyles from "../../styles/globalStyles";
import Slider from "@react-native-community/slider";

import styles from "./styles";
import { Feather } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import api from "../../services/api";

const ItemDetails = () => {
  const [patrimony, setPatrimony] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [page, setPage] = useState(0)
  const [tools, setTools] = useState([]);
  const [equipment,setEquipment] = useState(null)

  const route = useRoute();
  const navigation = useNavigation();
  
  const typeInformations = route.params.tool;

  
  useEffect(() => {
    loadEquipments();
    
  }, []);

  async function loadEquipments() {
    await api
      .get(`tool?&type=${typeInformations.name}`)
      .then((toolsResponse) => {
        if(toolsResponse.data.length === 0){
          Alert.alert('ops','nenhuma ferramenta desse tipo foi registrada ainda');
          return navigation.navigate('createcheck')
        }
        setTools(toolsResponse.data);
      });
  }

  function quantityVerification(number) {
    setQuantity(Math.floor(number));
    patrimonyVerification();
  }
  function patrimonyIsEnabled(value) {
    setPatrimony(value);
    patrimonyVerification();
  }
  function patrimonyVerification() {
    if (quantity > 1 || quantity <= 0) {
      setPatrimony(false);
    }
  }
 
  function next(){
    let equipmentName = tools[page].name
    setEquipment(equipmentName)
    if(page < tools.length-1){      
      setPage(page+1)
    }
  }
  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.header}>
        <Text style={styles.title}>{typeInformations.name}</Text>
      </View>

      {typeInformations.name === "Cabos e Fios" ||
      typeInformations.name === "Cabos e Fios " ? (
        
        <View style={styles.body}>
          
          <View style={styles.thread}>
            <Text style={styles.threadText}> {equipment === null ? alert('para começar de o primeiro clique na seta direita'): equipment} </Text>

            <View style={styles.threadVerification}>
              <Text style={styles.threadTextInput}>Metragem</Text>
              <View style={styles.insertView}>
              <TextInput
                keyboardType="numeric"
                style={styles.threadInput}
                placeholder="Ex..: 100"
                placeholderTextColor="#0a293e"
              />
              <Text style={{marginLeft:'3%'}}>M</Text>
              </View>
            </View>
          </View>
        </View>
      
      ) : (
        <View style={styles.body}>

          <Text style={styles.Equipment}> {equipment === null ? alert('para começar de o primeiro clique na seta direita'): equipment} </Text>

          <View style={styles.patrimony}>
            <Text style={styles.patrimonyText}>Possui patrimônio ?</Text>

            <Switch
              value={patrimony}
              onValueChange={(value) => patrimonyIsEnabled(value)}
              thumbColor={patrimony ? "#003352" : "#13161d"}
            />
          </View>

          {patrimony ? (
            <View style={styles.patrimonyVerification}>
              <Text style={styles.patrimonyText}>Insira o Patrimônio</Text>
              <TextInput
                keyboardType="numeric"
                style={styles.patrimonyInput}
                placeholder="Ex..: 123456"
                placeholderTextColor="#aeb2b5"
              />
            </View>
          ) : (
            <View />
          )}

          <View style={styles.quantity}>
            <Text style={styles.quantityText}> Nos informe a quantidade </Text>
            <Text style={styles.quantityResult}>{quantity.toFixed(0)}</Text>

            <Slider
              style={{ width: 300, height: 60 }}
              minimumValue={0}
              maximumValue={10}
              thumbImage={require("../../assets/slider.png")}
              minimumTrackTintColor="#003352"
              maximumTrackTintColor="#000000"
              value={quantity}
              onValueChange={(number) => quantityVerification(number)}
            />
          </View>
        </View>
      )}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => navigation.navigate("createcheck")}
        >
          <Feather name="chevron-left" size={20} color="#aeb2b5" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.Button} onPress={() => next()}>
          <Feather name="chevron-right" size={20} color="#aeb2b5" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ItemDetails;
