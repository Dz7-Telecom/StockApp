import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Switch,
  TouchableOpacity,
  Alert,
  Modal,
  Keyboard
} from "react-native";
import globalStyles from "../../styles/globalStyles";

import styles from "./styles";
import { Feather } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import api from "../../services/api";
import { FlatList } from "react-native-gesture-handler";
import syncStorage from "sync-storage";

const ItemDetails = () => {
  const [patrimony, setPatrimony] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [page, setPage] = useState(0);
  const [tools, setTools] = useState([]);
  const [equipment, setEquipment] = useState(null);
  const [end, setEnd] = useState(false);
  const [open, setOpen] = useState(false);
  const [firstPatrimony, setFirstPatrimony] = useState(false);
  const [equipments, setEquipments] = useState([]);
  const [patrimonyValue, setPatrimonyValue] = useState('');

  const route = useRoute();
  const navigation = useNavigation();
  const typeInformations = route.params.tool;
  const checkCounter = syncStorage.get('checkCounter');
  
  useEffect(() => {
    loadEquipments();
  }, []);

  async function loadEquipments() {
    await api
      .get(`tool?&type=${typeInformations.name}`)
      .then((toolsResponse) => {
        if (toolsResponse.data.length === 0) {
          Alert.alert(
            "ops",
            "nenhuma ferramenta desse tipo foi registrada ainda"
          );
          return navigation.navigate("createcheck");
        }
        setTools(toolsResponse.data);
      });
  }

  function patrimonyIsEnabled(value) {
    setPatrimony(value);
    if (quantity == 1 && patrimony === false) {
      setFirstPatrimony(true);
    } else {
      setFirstPatrimony(false);
    }
  }

  function saveEquipment(tool){
    syncStorage.set(`equipment ${checkCounter}`,JSON.stringify(tool));
    syncStorage.set('checkCounter',checkCounter+1);
  }

  function next() {
    Keyboard.dismiss()
    let equipmentName = tools[page].name;
    let tool = tools[page]
    
    let toolData = {
      id:checkCounter,
      type: tool.type,
      name : tool.name,
      patrimony: patrimony ? patrimonyValue : null,
      check_id: null,
      quantity:quantity
    } 

    setEquipment(equipmentName);
    saveEquipment(toolData)
    if (quantity > 1 && patrimony === true) {
      return setOpen(true);
    }

    if (page < tools.length - 1) {
      
      setPage(page + 1);
    } else {
      setEnd(true);
    }
    setQuantity(0);
    setPatrimony(false);
    setPatrimonyValue(null);
    setFirstPatrimony(false)
    
  }

  function back() {
    let equipmentName = tools[page].name;
    setEquipment(equipmentName);
    if (page > 0) {
      setPage(page - 1);
      setEnd(false);
    }
  }

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.header}>
        <Text style={styles.title}>{typeInformations.name}</Text>
      </View>

      {equipment !== null ? (
        <View style={styles.body}>
          {typeInformations.name === "Cabos e Fios" ||
          typeInformations.name === "Cabos e Fios " ? (
            <View style={styles.thread}>
              <Text style={styles.threadText}>
                {" "}
                {equipment === null
                  ? Alert.alert(
                      "Ei",
                      "para começar de o primeiro clique na seta direita"
                    )
                  : equipment}{" "}
              </Text>

              <View style={styles.threadVerification}>
                <Text style={styles.threadTextInput}>Metragem</Text>
                <View style={styles.insertView}>
                  <TextInput
                    keyboardType="numeric"
                    style={styles.threadInput}
                    placeholder="Ex..: 100"
                    placeholderTextColor="#0a293e"
                    value={quantity}
                    onChangeText={(number) => setQuantity(number)}
                  />
                  <Text style={{ marginLeft: "3%" ,color:'#aeb2b5'}}> M </Text>
                </View>
              </View>
            </View>
          ) : (
            <View style={styles.body}>
              <Text style={styles.Equipment}>
                {" "}
                {equipment === null
                  ? Alert.alert(
                      "Ei",
                      "para começar de o primeiro clique na seta direita"
                    )
                  : equipment}{" "}
              </Text>

              <View style={styles.patrimony}>
                <Text style={styles.patrimonyText}> Possui patrimônio ? </Text>

                <Switch
                  value={patrimony}
                  onValueChange={(value) => patrimonyIsEnabled(value)}
                  thumbColor={patrimony ? "#003352" : "#aeb2b4"}
                />
              </View>

              {firstPatrimony ? (
                <View style={styles.patrimonyVerification}>
                  <Text style={styles.patrimonyText}>Insira o Patrimônio</Text>
                  <TextInput
                    keyboardType="numeric"
                    style={styles.patrimonyInput}
                    placeholder="Ex..: 123456"
                    placeholderTextColor="#aeb2b5"
                    value={patrimonyValue}
                    onChangeText={(item) =>  setPatrimonyValue(item)}
                  />
                </View>
              ) : (
                <View />
              )}
              <View style={styles.quantity}>
                <Text style={styles.threadTextInput}>Quantidade</Text>
                <View style={styles.insertView}>
                  <TextInput
                    keyboardType="numeric"
                    style={styles.threadInput}
                    placeholder="Ex..: 100"
                    placeholderTextColor="#aeb2b5"
                    value={quantity}
                    onChangeText={(number) => setQuantity(number)}
                  />
                </View>
              </View>
            </View>
          )}
        </View>
      ) : (
        <View />
      )}
      {equipment !== null ? (
        <View style={styles.footer}>
          <TouchableOpacity style={styles.Button} onPress={() => back()}>
            <Feather name="chevron-left" size={20} color="#aeb2b5" />
          </TouchableOpacity>

          {end ? (
            <TouchableOpacity
              style={styles.Button}
              onPress={() => navigation.navigate("createcheck")}
            >
              <Feather name="save" size={20} color="#aeb2b5" />
            </TouchableOpacity>
          ) : (
            <View />
          )}

          <TouchableOpacity style={styles.Button} onPress={() => next()}>
            <Feather name="chevron-right" size={20} color="#aeb2b5" />
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity style={styles.StartButton} onPress={() => next()}>
          <Feather name="play" size={20} color="#aeb2b5" />
        </TouchableOpacity>
      )}

      {
        <Modal
          presentationStyle="formSheet"
          animationType="slide"
          transparent={false}
          visible={open}
        >
          <View>
            <Text>
              {" "}
              Aqui você pode adicionar os patrimônios dos items selecionados{" "}
            </Text>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={tools}
              keyExtractor={(item) => item.id}
              renderItem={({ item: equipment }) => (
                <View>
                  <Text> Lista de items {equipment.name}</Text>
                </View>
              )}
            />
            <TouchableOpacity onPress={() => setOpen(false)}>
              <Text>Clique aqui para finalizar</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      }
    </View>
  );
};

export default ItemDetails;
