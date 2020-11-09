import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  FlatList,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import img from "../../assets/womanCheck.png";

import styles from "./styles";
import globalStyles from "../../styles/globalStyles";
import { useNavigation } from "@react-navigation/native";
import api from "../../services/api";

const LastCheck = () => {
  const [search, setSearch] = useState();
  const [technicians, setTechnicians] = useState([]);
  const [searchVerification, setSearchVerification] = useState(false);

  const navigation = useNavigation();

  async function searchTechnicians(technician) {
    setSearch(technician);
    setSearchVerification(true);
    await api.get(`technician?&name=${technician}`).then((response) => {
      console.log(response.data);
      setTechnicians(response.data);

      if (response.data.length === 0) {
        Alert.alert("Ops 😕", "técnico não encontrado não encontrado");
        return setSearchVerification(false);
      }
      
    });
  }

  async function handleSelection(selectedTechnician) {
    const technicianData = {
      id: selectedTechnician.id,
      name: selectedTechnician.name,
    };
    Alert.alert("tecnico escolhido com sucesso");
    navigation.navigate("viewgroups", { technicianData });
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
    <View style={globalStyles.container}>
      <View style={globalStyles.header}>
        <Image
          source={img}
          style={{
            marginTop: 20,
            width: 250,
            height: 220,
            backgroundColor: "transparent",
            borderRadius: 100,
          }}
        />
      </View>

      <View style={styles.body}>
        <View style={styles.modalHeader}>
          <TextInput
            style={styles.modalSearchText}
            placeholder="Qual é o nome do Técnico ?"
            value={search}
            onChangeText={(text) => searchTechnicians(text)}
          />
          <TouchableOpacity
            style={styles.modalButtonIcon}
            onPress={() => setOpen(false)}
          >
            <Feather
              name="search"
              size={25}
              color="#0a293e"
              style={styles.modalIcon}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.modalBody}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.modalItemsContainer}>
              {searchVerification ? (
                loadTechnicianInformation()
              ) : (
                <Text style={{ color: "#aeb2b5", fontSize: 30 }}>o_o</Text>
              )}
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default LastCheck;
