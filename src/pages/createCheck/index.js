import React, { useState,useEffect} from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  Modal,
  FlatList
} from "react-native";

import handMan from "../../assets/handman.png";
import styles from "./styles";
import globalStyles from "../../styles/globalStyles";

import { Feather } from "@expo/vector-icons";
import { useNavigation} from "@react-navigation/native";

import api from '../../services/api';
import syncStorage from "sync-storage";

const CreateCheck = () => {
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState([]);
  const [tools, setTools] = useState([]);
  const [pendingA, setPending] = useState(true);

  const navigation = useNavigation();
  

  const techicianData = JSON.parse(syncStorage.get('technicianData'));

  useEffect(() => {
   loadTools()
  }, [])
  
  async function loadTools(){
    await api.get('type').then((response) => {
      setTools(response.data)
    })
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
          <View
          style={styles.itemStyle}
          onPress={() => Alert.alert("verificar mais detalhes", "coming soon")}>

          <Text style={styles.itemTextStyle}> {tool.name}</Text>

          <View style={styles.iconsContainer}>
            <TouchableOpacity
              style={styles.icons}
              onPress={() => navigateToItemDetails(tool)}
            >
              <Feather
                name="plus-circle"
                size={30}
                color="#0a293e"
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
        </View>
        )}
      />
    );
  }

  

  function makeSignature() {
    navigation.navigate("createsignature");
    setOpen(false);
  }

  function viewItems() {
    setOpen(true);
  }

  function navigateToItemDetails(tool){
    const tools = {
      tool:tool
    }
    navigation.navigate("itemdetails",{tool})
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
        <Text style={{ fontSize: 30, textAlign: "center" }}>Let's Check!</Text>
      </View>

      <View style={styles.body}>

        <Image source={handMan} style={styles.handMan} />

        <View style={styles.checkGroup}>
          
          {loadToolsInformation()}
         
        </View>
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
              <TouchableOpacity onPress={() => setOpen(false)}>
                <Text style={styles.modalBodyText}>
                  {" "}
                  Item selecionado : {item}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.modalSubmitButton}
                onPress={() =>
                  Alert.alert(
                    "Pronto!",
                    "os item de checagem foram registrados com sucesso!"
                  )
                }
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
