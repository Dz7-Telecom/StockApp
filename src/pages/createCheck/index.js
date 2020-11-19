import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  Modal,
  FlatList,
} from "react-native";

import handMan from "../../assets/handman.png";
import styles from "./styles";
import globalStyles from "../../styles/globalStyles";

import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import api from "../../services/api";
import syncStorage from "sync-storage";
let equipmentData = [];
const CreateCheck = () => {
  const [open, setOpen] = useState(false);
  const [tools, setTools] = useState([]);
  const [pendingA, setPending] = useState(true);

  const navigation = useNavigation();

  const techicianData = JSON.parse(syncStorage.get("technicianData"));
  syncStorage.set("checkOn", true);
  const counter = syncStorage.get("checkCounter");

  useEffect(() => {
    loadTools();
    loadEquipments();
  }, []);

  function loadEquipments() {
    let equipments = [];
    for (let i = 0; i < counter; i++) {
      console.log(syncStorage.get(`equipment ${i}`));
      equipments.push(JSON.parse(syncStorage.get(`equipment ${i}`)));
      equipmentData.push(JSON.parse(syncStorage.get(`equipment ${i}`)));
    }
    // equipmentData = equipments;
    // console.log(equipments.length)
  }
  async function loadTools() {
    await api.get("type").then((response) => {
      setTools(response.data);
    });
  }

  function loadToolsInformation() {
    return (
      <FlatList
        data={tools}
        showsVerticalScrollIndicator={false}
        style={styles.horizontalList}
        keyExtractor={(tool) => String(tool.id)}
        onEndReachedThreshold={0.1}
        renderItem={({ item: tool }) => (
          <TouchableOpacity
            style={styles.icons}
            onPress={() => navigateToItemDetails(tool)}
            onPre
          >
            <View
              style={styles.itemStyle}
              onPress={() =>
                Alert.alert("verificar mais detalhes", "coming soon")
              }
            >
              <View style={styles.iconsContainer}>
                <Feather
                  name="check-circle"
                  size={30}
                  color="#003352"
                  style={styles.icon}
                />
              </View>
              <Text style={styles.itemTextStyle}> {tool.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    );
  }

  function makeSignature() {
    setPending(false);
    setOpen(false);
    navigation.navigate("createsignature");
  }

  function viewItems() {
    setOpen(true);
  }

  function navigateToItemDetails(tool) {
    navigation.navigate("itemdetails", { tool });
  }

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.header}>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => viewItems()}
        >
          <Feather name="arrow-right" size={20} />
        </TouchableOpacity>
        <Text style={{ fontSize: 30, textAlign: "center" }}>Técnico </Text>
        <Text style={{ fontSize: 20, textAlign: "center" }}>
          {techicianData.name}{" "}
        </Text>
      </View>

      <View style={styles.body}>
        <Image source={handMan} style={styles.handMan} />

        <View style={styles.checkGroup}>{loadToolsInformation()}</View>
      </View>

      {
        <Modal
          presentationStyle="formSheet"
          animationType="slide"
          transparent={false}
          visible={open}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalHeaderText}>
                {" "}
                Assinatura do Técnico{" "}
              </Text>
              {pendingA ? (
                <View style={{ marginLeft: 10 }}>
                  <TouchableOpacity
                    style={{ bottom: 30, left: 350 }}
                    onPress={() => makeSignature()}
                  >
                    <Feather name="alert-octagon" size={30} color="red" />
                  </TouchableOpacity>

                  <Text
                    style={{
                      fontSize: 15,
                      color: "rgba(255,255,255,0.5)",
                      top: 100,
                    }}
                  >
                    Pendente{" "}
                  </Text>
                </View>
              ) : (
                <View />
              )}
            </View>

            <View style={styles.modalBody}>
              <View>
                <Text style={{fontSize:20,color:"#0a293e",fontWeight:'bold',textAlign:'center'}}> Equipamentos salvos :</Text>
                <View style={styles.modalEquipmentList}>

                  <FlatList
                    data={equipmentData}
                    keyExtractor={(equipment) => String(equipment.id)}
                    style={styles.modalContainer}
                    renderItem={({ item: equipment }) => (
                      <View style={styles.modalEquipments}>
                        <Text style={styles.equipmentText}>
                          Quantidade: {equipment.quantity}
                        </Text>
                      
                        <Text style={styles.equipmentText}>
                          Equipamento: {equipment.name}
                        </Text>
                      </View>
                    )}
                  />

                </View>
              </View>

              <TouchableOpacity
                style={styles.modalSubmitButton}
                onPress={() => setOpen(false)}
              >
                <Text style={styles.modalSubmitButtonText}> Salvar </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      }
    </View>
  );
};

export default CreateCheck;
