import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Alert,
  FlatList,
} from "react-native";

import styles from "./styles";

import { Feather } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import api from "../../services/api";

const ViewGroups = () => {
  const [equipments, setEquipments] = useState([]);
  const [lastCheck, setLastCheck] = useState();
  const navigation = useNavigation();

  const routes = useRoute();
  const technicianData = routes.params.technicianData;

  useEffect(() => {
    searchLastCheck();
    loadEquipments();
  }, []);

  async function searchLastCheck() {
    await api.get(`lastcheck`).then((lastCheckResponse) => {
    
      setLastCheck(lastCheckResponse.data[0].lastcheck);
    });
  }
  async function loadEquipments() {
    await api
      .get(`equipment?&check_id=4`)
      .then((responseEquipments) => {
        console.log("equipments " + responseEquipments.data[0]);
        setEquipments(responseEquipments.data);
      });
  }

  function loadEquipmentsInformation() {
    const newEquipments = equipments;
    countEquipments()
    function countEquipments() {
      console.log('----------------------Start-Item-Count-------------------------')
      
       newEquipments.filter(multipleVerification)

      function multipleVerification(value){
        const multipleItems = [];

        newEquipments.map((item,index) => {
          if(item.name === value.name){
              let equipment = {
                item,
                local:index
              }
              multipleItems.push(equipment);
          }
        })
        
        console.log('+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+')
        console.log('item ' + value.name)
        console.log('quantidade de itens: ' + multipleItems.length);
       
        newEquipments.map((item) => {
          console.log(`ITEM: ${item.name}, QUANTIDADE: ${item.quantity}`)
            item.quantity = multipleItems.length
        })
        multipleItems.map((index,i) => {
          console.log('INDEX: ' + index.local + ' - no numero : ' + i+'°');
          // if(i > 0  ){
          //   newEquipments.splice(i,1);
          // }
        })
        console.log(`\n TIPO: ${newEquipments[0].type}, NOME: ${newEquipments[0].name}, QUANTIDADE: ${newEquipments[0].quantity}`)
        console.log('+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+')
        

      }
      console.log('-----------------------End-Item-Count---------------------------')
      
    }
    
    return (
      <FlatList
        data={newEquipments}
        showsVerticalScrollIndicator={false}
        style={styles.verticalScroll}
        keyExtractor={(equipment) => String(equipment.id)}
        onEndReachedThreshold={0.1}
        renderItem={({ item: equipment }) => (
          <View style={styles.checkItemsGroup}>
            <Feather name="package" size={20} />
            <Text style={styles.checkItemsText}>
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                Equipamento : {equipment.type}
              </Text>{" "}
            </Text>
            <Text style={styles.checkItemsText}>
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                Nome : {equipment.name}
              </Text>{" "}
            </Text>
            <Text style={styles.checkItemsText}>
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                Patrimônio : {equipment.patrimony}
              </Text>{" "}
            </Text>
            <Text style={styles.checkItemsText}>
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                Quantidade : {equipment.quantity}
              </Text>{" "}
            </Text>
          </View>
        )}
      />
    );
  }

  function moreInformations() {
    Alert.alert(
      "Ultimo Check",
      "Aqui você consegue verificar o ultimo dados de checagem cadastrado no sistema referente ao técnico escolhido"
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.moreInformations}
          onPress={() => moreInformations()}
        ></TouchableOpacity>

        <Text style={styles.listTitle}>Ultimo Check</Text>

        <ScrollView
          style={styles.horizontalList}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <TouchableOpacity
            style={styles.itemStyle}
            onPress={() => navigation.navigate("moredetails")}
          >
            <Text style={styles.itemTextStyle}> Ver Detalhes </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.itemStyle}
            onPress={() => alert("coming soon")}
          >
            <Text style={styles.itemTextStyle}> Imprimir PDF </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <View style={styles.body}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {loadEquipmentsInformation()}
        </ScrollView>
      </View>

      <StatusBar barStyle="dark-content" backgroundColor="rgba(0,0,0,0.2)" />
    </View>
  );
};

export default ViewGroups;
