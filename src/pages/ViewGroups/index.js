import React from "react";
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";

import styles from "./styles";

import { Feather } from "@expo/vector-icons";
const ViewGroups = () => {

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
        >
          <Feather name="help-circle" size={30} color="#aeb2b5" />
        </TouchableOpacity>

        <Text style={styles.listTitle}>Ultimo Check</Text>

        <ScrollView
          style={styles.verticalList}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <TouchableOpacity
            style={styles.itemStyle}
            onPress={() =>
              Alert.alert("verificar mais detalhes", "coming soon")
            }
          >
            <Text style={styles.itemTextStyle}> Ver Detalhes </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.itemStyle}
            onPress={() => Alert.alert("Imprimir PDF", "coming soon")}
          >
            <Text style={styles.itemTextStyle}> Imprimir PDF </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <View style={styles.body}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.verticalScroll}
        >
          <View style={styles.checkItemsGroup}>
            <Feather name="package" size={20} />
            <Text style={styles.checkItemsText}>
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                Equipamento :{" "}
              </Text>{" "}
              Alicate de Corte{" "}
            </Text>
            <Text style={styles.checkItemsText}>
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                Quantidade :{" "}
              </Text>{" "}
              1{" "}
            </Text>
          </View>
          <View style={styles.checkItemsGroup}>
            <Feather name="package" size={20} />
            <Text style={styles.checkItemsText}>
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                Equipamento :{" "}
              </Text>{" "}
              C5{" "}
            </Text>
            <Text style={styles.checkItemsText}>
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                Quantidade :{" "}
              </Text>{" "}
              3{" "}
            </Text>
            <Text style={styles.checkItemsText}>
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                Patrimônio :{" "}
              </Text>{" "}
              162739{" "}
            </Text>
          </View>
          <View style={styles.checkItemsGroup}>
            <Feather name="package" size={20} />
            <Text style={styles.checkItemsText}>
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                Equipamento :{" "}
              </Text>{" "}
              Adaptador de Rede{" "}
            </Text>
            <Text style={styles.checkItemsText}>
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                Quantidade :{" "}
              </Text>{" "}
              2{" "}
            </Text>
            <Text style={styles.checkItemsText}>
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                Patrimônio :{" "}
              </Text>{" "}
              19489{" "}
            </Text>
          </View>
          <View style={styles.checkItemsGroup}>
            <Feather name="package" size={20} />
            <Text style={styles.checkItemsText}>
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                Equipamento :{" "}
              </Text>{" "}
              AC1352{" "}
            </Text>
            <Text style={styles.checkItemsText}>
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                Quantidade :{" "}
              </Text>{" "}
              2{" "}
            </Text>
            <Text style={styles.checkItemsText}>
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                Patrimônio :{" "}
              </Text>{" "}
              90349{" "}
            </Text>
          </View>
          <View style={styles.checkItemsGroup}>
            <Feather name="package" size={20} />
            <Text style={styles.checkItemsText}>
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                Equipamento :{" "}
              </Text>{" "}
              Fio Jumper{" "}
            </Text>
            <Text style={styles.checkItemsText}>
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                Quantidade :{" "}
              </Text>{" "}
              1{" "}
            </Text>
          </View>
          <View style={styles.checkItemsGroup}>
            <Feather name="package" size={20} />
            <Text style={styles.checkItemsText}>
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                Equipamento :{" "}
              </Text>{" "}
              Kit Localizador{" "}
            </Text>
            <Text style={styles.checkItemsText}>
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                Quantidade :{" "}
              </Text>{" "}
              2{" "}
            </Text>
          </View>
          <View style={styles.checkItemsGroup}>
            <Feather name="package" size={20} />
            <Text style={styles.checkItemsText}>
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                Equipamento :{" "}
              </Text>{" "}
              ONU{" "}
            </Text>
            <Text style={styles.checkItemsText}>
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                Quantidade :{" "}
              </Text>{" "}
              2{" "}
            </Text>
            <Text style={styles.checkItemsText}>
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                patrimônio :{" "}
              </Text>{" "}
              13239{" "}
            </Text>
          </View>
          <View style={styles.checkItemsGroup}>
            <Feather name="package" size={20} />
            <Text style={styles.checkItemsText}>
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                Equipamento :{" "}
              </Text>{" "}
              Broca 10 MM{" "}
            </Text>
            <Text style={styles.checkItemsText}>
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                Quantidade :{" "}
              </Text>{" "}
              1{" "}
            </Text>
          </View>
        </ScrollView>
      </View>

      <StatusBar barStyle="dark-content" backgroundColor="rgba(0,0,0,0.2)" />
    </View>
  );
};

export default ViewGroups;
