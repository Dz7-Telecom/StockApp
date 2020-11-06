import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
  Modal,
} from "react-native";

import handMan from "../../assets/handman.png";
import styles from "./styles";
import globalStyles from "../../styles/globalStyles";

import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const CreateCheck = () => {
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState([]);
  const [pendingA, setPending] = useState(true);

  const navigation = useNavigation();

  function makeSignature() {
    navigation.navigate("createsignature");
    setOpen(false);
  }

  function viewItems() {
    setOpen(true);
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
          <ScrollView
            style={styles.horizontalList}
            horizontal={false}
            showsVerticalScrollIndicator={false}
          >
            <View
              style={styles.itemStyle}
              onPress={() =>
                Alert.alert("verificar mais detalhes", "coming soon")
              }
            >
              <Text style={styles.itemTextStyle}> {1}</Text>

              <Text style={styles.itemTextStyle}> Alicate De Corte </Text>

              <View style={styles.iconsContainer}>
                <TouchableOpacity
                  style={styles.icons}
                  onPress={() => navigation.navigate("itemdetails")}
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

            <View
              style={styles.itemStyle}
              onPress={() =>
                Alert.alert("verificar mais detalhes", "coming soon")
              }
            >
              <Text style={styles.itemTextStyle}> </Text>
              <Text style={styles.itemTextStyle}> Alicate de Crimpar </Text>

              <View style={styles.iconsContainer}>
                <TouchableOpacity
                  style={styles.icons}
                  onPress={() => setItem(item + ", Alicate De Crimpar")}
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

            <View
              style={styles.itemStyle}
              onPress={() =>
                Alert.alert("verificar mais detalhes", "coming soon")
              }
            >
              <Text style={styles.itemTextStyle}> </Text>

              <Text style={styles.itemTextStyle}> Cavalete P/ Drop </Text>

              <View style={styles.iconsContainer}>
                <TouchableOpacity
                  style={styles.icons}
                  onPress={() => setItem(item + ", Cavalete p/Drop")}
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

            <View
              style={styles.itemStyle}
              onPress={() =>
                Alert.alert("verificar mais detalhes", "coming soon")
              }
            >
              <Text style={styles.itemTextStyle}> </Text>

              <Text style={styles.itemTextStyle}> Estilete </Text>

              <View style={styles.iconsContainer}>
                <TouchableOpacity
                  style={styles.icons}
                  onPress={() => setItem(item + ", Estilete")}
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

            <View
              style={styles.itemStyle}
              onPress={() =>
                Alert.alert("verificar mais detalhes", "coming soon")
              }
            >
              <Text style={styles.itemTextStyle}> </Text>

              <Text style={styles.itemTextStyle}> Etiquetadora </Text>

              <View style={styles.iconsContainer}>
                <TouchableOpacity
                  style={styles.icons}
                  onPress={() => setItem(item + ", Etiquetadora")}
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

            <View
              style={styles.itemStyle}
              onPress={() =>
                Alert.alert("verificar mais detalhes", "coming soon")
              }
            >
              <Text style={styles.itemTextStyle}> </Text>

              <Text style={styles.itemTextStyle}> Notebook </Text>

              <View style={styles.iconsContainer}>
                <TouchableOpacity
                  style={styles.icons}
                  onPress={() => setItem(item + ", Notebook")}
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

            <View
              style={styles.itemStyle}
              onPress={() =>
                Alert.alert("verificar mais detalhes", "coming soon")
              }
            >
              <Text style={styles.itemTextStyle}> </Text>

              <Text style={styles.itemTextStyle}> Lanterna USB </Text>

              <View style={styles.iconsContainer}>
                <TouchableOpacity
                  style={styles.icons}
                  onPress={() => setItem(item + ", Lanterna USB")}
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

            <View
              style={styles.itemStyle}
              onPress={() =>
                Alert.alert("verificar mais detalhes", "coming soon")
              }
            >
              <Text style={styles.itemTextStyle}> </Text>

              <Text style={styles.itemTextStyle}> C5 </Text>

              <View style={styles.iconsContainer}>
                <TouchableOpacity
                  style={styles.icons}
                  onPress={() => setItem(item + ", C5")}
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

            <View
              style={styles.itemStyle}
              onPress={() =>
                Alert.alert("verificar mais detalhes", "coming soon")
              }
            >
              <Text style={styles.itemTextStyle}> </Text>

              <Text style={styles.itemTextStyle}> Capacete </Text>

              <View style={styles.iconsContainer}>
                <TouchableOpacity
                  style={styles.icons}
                  onPress={() => setItem(item + ", Capacete")}
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

            <View
              style={styles.itemStyle}
              onPress={() =>
                Alert.alert("verificar mais detalhes", "coming soon")
              }
            >
              <Text style={styles.itemTextStyle}> </Text>

              <Text style={styles.itemTextStyle}> Cinto com Talabarte</Text>

              <View style={styles.iconsContainer}>
                <TouchableOpacity
                  style={styles.icons}
                  onPress={() => setItem(item + ", Cinto com Talabarte")}
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

            <View
              style={styles.itemStyle}
              onPress={() =>
                Alert.alert("verificar mais detalhes", "coming soon")
              }
            >
              <Text style={styles.itemTextStyle}> </Text>

              <Text style={styles.itemTextStyle}> Fio CCI </Text>

              <View style={styles.iconsContainer}>
                <TouchableOpacity
                  style={styles.icons}
                  onPress={() => setItem(item + ", Fio CCI")}
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
          </ScrollView>
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
