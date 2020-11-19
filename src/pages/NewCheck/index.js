import React, { useState, useEffect } from "react";
import {
  Animated,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  ScrollView,
  Image,
  ImageBackground,
  Alert,
  FlatList
} from "react-native";

import globalStyles from "../../styles/globalStyles";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import skyPerson from "../../assets/sky.png";
import Img from "../../assets/seatedWoman.png";
import cloudBackground from "../../assets/cloudBackground.jpg";
import syncStorage from "sync-storage";
import technicianImage from '../../assets/technician.png'
import api from "../../services/api";

const Falling = (props) => {
  const [falling] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(falling, {
      toValue: -800,
      duration: 30000,
      delay: 600,
    }).start();
  }, []);

  return (
    <Animated.View
      style={{
        ...props.style,
        top: falling,
      }}
    >
      {props.children}
    </Animated.View>
  );
};

const NewCheck = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState();
  const [technicians, setTechnicians] = useState([]);
  const [searchVerification,setSearchVerification] = useState(false)
  const navigation = useNavigation();
  const name = syncStorage.get("name");

  function closeModal() {
    setOpen(false);
    setSearch('')

  }

  async function searchTechnicians(technician) {
    setSearch(technician);
    setSearchVerification(true)
    api.get(`technician?&name=${technician}`).then((response) => {
      console.log(response.data);
      setTechnicians(response.data);
      if (response.data.length === 0) {
        Alert.alert("Ops 😕", "técnico não encontrado não encontrado");
        return setSearchVerification(false);
      }

    });
  }

  async function handleSelection(selectedTechnician){
    
    setOpen(false);
    const technicianData = {
      id: selectedTechnician.id,
      name: selectedTechnician.name
    }
    syncStorage.set('technicianData',JSON.stringify(technicianData))
    syncStorage.set('checkCounter',0);
    navigation.navigate("createcheck",{technicianData});

  }

  function loadTechnicianInformation() {
  
    return (
      <FlatList
        data={technicians}
        showsVerticalScrollIndicator={false}
        style={styles.incidentList}
        keyExtractor={(technician) => String(technician.id)}
        onEndReachedThreshold={0.1}
        renderItem={({ item: technician }) => (
          <TouchableOpacity
            style={styles.modalItems}
            onPress={() => handleSelection(technician)}
          >
            <Text style={styles.modalItemText}>{technician.name}</Text>
          </TouchableOpacity>
        )}
      />
    );
  }

  return (
    <ImageBackground
      source={cloudBackground}
      style={{ flex: 1, resizeMode: "cover", justifyContent: "center" }}
    >
      <View style={globalStyles.container}>
        <View style={globalStyles.header}>
          <Text style={styles.hallo}>{name}, Selecione um Técnico</Text>
        </View>

        <Falling style={styles.fallingStyle}>
          <Image source={skyPerson} style={styles.skyImg} />
        </Falling>

        <TouchableOpacity style={styles.body} onPress={() => setOpen(true)}>
          <Image source={Img} style={styles.personImg} />

          <View style={styles.selection}>
            <Text style={styles.selectionText}>Buscar</Text>
          </View>
        </TouchableOpacity>
        {
          <Modal
            presentationStyle="formSheet"
            animationType="slide"
            transparent={false}
            visible={open}
          >
            <View style={globalStyles.container}>
              <View style={styles.modalHeader}>
              <Image source={technicianImage} style={styles.technician}/>
                <TextInput
                  style={styles.modalSearchText}
                  placeholder="Qual é o nome do Técnico ?"
                  value={search}
                  onChangeText={(text) => searchTechnicians(text)}
                />
                <TouchableOpacity
                  style={styles.modalButtonIcon}
                  onPress={() => closeModal()}
                >
                  <Feather
                    name="arrow-down-circle"
                    size={30}
                    color="#0a293e"
                    style={styles.modalIcon}
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.modalBody}>
                <ScrollView showsVerticalScrollIndicator={false}>
                  <View style={styles.modalItemsContainer}>
                    {searchVerification ?  loadTechnicianInformation() :<Text style={{color:'#aeb2b5',fontSize:30}}>o_o</Text>}
                  </View>
                </ScrollView>
              </View>
            </View>
          </Modal>
        }
      </View>
    </ImageBackground>
  );
};

export default NewCheck;
