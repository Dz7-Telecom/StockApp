import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Alert,
  FlatList,
  Image
} from "react-native";

import styles from "./styles";

import { Feather } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import api from "../../services/api";
import syncStorage from 'sync-storage';


const ViewGroups = () => {
  const [equipments, setEquipments] = useState([]);
  const [counter, setCounter] = useState(0);
  const [lastCheck, setLastCheck] = useState();
  const [viewList,setViewList] = useState(false)
  const navigation = useNavigation();

  const routes = useRoute();
  const name = syncStorage.get('name');
  const technicianData = routes.params.technicianData;

  useEffect(() => {
    searchLastCheck();
  }, []);

  async function searchLastCheck() {
    await api.get(`lastcheck?&technician_id=${technicianData.id}`).then((lastCheckResponse) => {
      setLastCheck(lastCheckResponse.data[0].lastcheck);
      if(lastCheckResponse.data[0].lastcheck === null){
        Alert.alert(`Ops, ${name} 🧞‍♂️️`,`Ainda não foi realizado nenhum check com ${technicianData.name}`) 
        return navigation.navigate('lastcheck')
      }
      console.log('last checking' + lastCheckResponse.data[0].lastcheck);
    });
  }
  async function loadEquipments() {
    await api.get(`equipment?&check_id=${lastCheck}`).then((responseEquipments) => {
      setEquipments(responseEquipments.data);
      setCounter(responseEquipments.data.length)
      if(responseEquipments.data.length <= 0){
        Alert.alert(`ei ${name} 🧞‍♂️️`,`Nenhum equipamento foi registrado nessa checagem ${technicianData.name}`) 
        return navigation.navigate('lastcheck')
      }
    });
  }

  function loadEquipmentsInformation() {
    const newEquipments = equipments;
    console.log('EQUIPMENTS QUANTITY : ' + equipments.length)
    console.log('NEW EQUIPMENTS QUANTITY : ' + newEquipments.length)
    countEquipments();
    function countEquipments() {
   

      newEquipments.filter(multipleVerification);
      console.log('apos filter ' + newEquipments.length)
      function multipleVerification(value) {
        const multipleItems = [];

        newEquipments.map((item, index) => {
          if (item.name === value.name) {
            let equipment = {
              item,
              local: index,
            };
            multipleItems.push(equipment);
          }
        });

        newEquipments.map((item) => {
          if (value.name === item.name) {
            item.quantity = multipleItems.length;
            if(value.patrimony === null){
              item.patrimony = ' --- --- --- '
              multipleItems.map((index, i) => {
                if(i > 0  ){
                  newEquipments.splice(index.local,multipleItems.length)
                }
              });
            }
          }
        });
      }
    }
  }

  function moreInformations() {
    Alert.alert(
      `Ajuda ${name}? 🧞‍♂️️`,
      "Aqui você consegue verificar os ultimos dados de checagens cadastradas no sistema referente ao técnico escolhido"
    );
  }

  function LoadList(){

    async function activateEquipments(){
       await loadEquipments();
        loadEquipmentsInformation()
        setViewList(true)
    }
    return (
      <TouchableOpacity onPress={() => activateEquipments()}style={{justifyContent:'center',alignItems:'center'}}>
          <Image source={ {uri:'https://media4.giphy.com/media/xThta2LP5qF9mFFKoM/giphy.gif?cid=ecf05e47d12e934dcb386aa51e967cb2a2a912e33502aed9&rid=giphy.gif'}} style={{width:165,height:165}}/>
          <Text style={styles.viewList}> Visualizar Equipamentos  </Text>
      </TouchableOpacity>
    )
  }

  async function navigateToDetails(){

    while(counter === 0 ){
        await loadEquipments()
    }

    let moreInformations = {
      total: counter,
      check_id:lastCheck
    }


    navigation.navigate("moredetails",{moreInformations})
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.moreInformations}
          onPress={() => moreInformations()}
        >
          <Feather name="help-circle" color="#aeb2b5" size={20}/>
        </TouchableOpacity>

        <Text style={styles.listTitle}>Ultimo Check</Text>

        <ScrollView
          style={styles.horizontalList}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <TouchableOpacity
            style={styles.itemStyle}
            onPress={() => navigateToDetails()}
          >
            <Text style={styles.itemTextStyle}> Mais Detalhes </Text>
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
          {viewList  ? 
            <FlatList
            data={loadEquipmentsInformation()}
            showsVerticalScrollIndicator={false}
            style={styles.verticalScroll}
            keyExtractor={(equipment) => String(equipment.id)}
            onEndReachedThreshold={0.1}
            renderItem={({ item: equipment }) => (
              <View style={styles.checkItemsGroup}>
                <Feather name="package" size={20} />
                <Text style={styles.checkItemsText}>
                  <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                    Equipamento : 
                  </Text>{" "}
                </Text>
                <Text style={styles.checkItemsText}>
                  <Text style={{  fontSize: 14 }}>
                     {equipment.type}
                  </Text>{" "}
                </Text>
                <Text style={styles.checkItemsText}>
                  <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                    Nome : 
                  </Text>{" "}
                </Text>
                <Text style={styles.checkItemsText}>
                  <Text style={{ fontSize: 14 }}>
                    {equipment.name}
                  </Text>{" "}
                </Text>
                <Text style={styles.checkItemsText}>
                  <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                    Patrimônio : 
                  </Text>{" "}
                </Text>
                <Text style={styles.checkItemsText}>
                  <Text style={{ fontSize: 14 }}>
                    {equipment.patrimony}
                  </Text>{" "}
                </Text>
                <Text style={styles.checkItemsText}>
                  <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                    Quantidade :
                  </Text>{" "}
                </Text>
                <Text style={styles.checkItemsText}>
                  <Text style={{fontSize: 14 }}>
                    {equipment.quantity}
                  </Text>{" "}
                </Text>
              </View>
            )}
          />
          
          : LoadList()  }
        </ScrollView>
      </View>

      <StatusBar barStyle="dark-content" backgroundColor="rgba(0,0,0,0.2)" />
    </View>
  );
};

export default ViewGroups;
