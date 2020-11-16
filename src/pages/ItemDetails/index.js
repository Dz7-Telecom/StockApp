import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Switch,
  TouchableOpacity,
  Alert,
  Modal,
} from "react-native";
import globalStyles from "../../styles/globalStyles";

import styles from "./styles";
import { Feather } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import api from "../../services/api";

const ItemDetails = () => {
  const [patrimony, setPatrimony] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [page, setPage] = useState(0);
  const [tools, setTools] = useState([]);
  const [equipment, setEquipment] = useState(null);
  const [end, setEnd] = useState(false);
  const [open, setOpen] = useState(false);
  const [firstPatrimony, setFirstPatrimony] = useState(false);

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
    console.log(value)
    setPatrimony(value);
    if(quantity == 1 && patrimony === false){
      setFirstPatrimony(true)
     }
     else{
       setFirstPatrimony(false)
     }
  }

  function next() {

    let equipmentName = tools[page].name;
    setQuantity(0);
    if (patrimony) {
      setPatrimony(false);
    }

    setEquipment(equipmentName);
    if (page < tools.length - 1) {
      setPage(page + 1);
      setEnd(false);
    } else {
      setEnd(true);
    }
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
                  <Text style={{ marginLeft: "3%" }}> M </Text>
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
                  thumbColor={patrimony ? "#003352" : "#13161d"}
                />
              </View>

              {firstPatrimony ? 
                <View style={styles.patrimonyVerification}>
                  <Text style={styles.patrimonyText}>Insira o Patrimônio</Text>
                  <TextInput
                    keyboardType="numeric"
                    style={styles.patrimonyInput}
                    placeholder="Ex..: 123456"
                    placeholderTextColor="#aeb2b5"
                  />
                </View>
               : 
                <View />
              }
              <View style={styles.quantity}>
                <Text style={styles.threadTextInput}>Quantidade</Text>
                <View style={styles.insertView}>
                  <TextInput
                    keyboardType="numeric"
                    style={styles.threadInput}
                    placeholder="Ex..: 100"
                    placeholderTextColor="#0a293e"
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
            <Text> Adicionar quantidade mano </Text>
          </View>
        </Modal>
      }
    </View>
  );
};

export default ItemDetails;
