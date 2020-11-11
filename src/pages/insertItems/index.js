import React, { useState } from "react";
import { Alert, Text, View } from "react-native";

import styles from "./styles";
import globalStyles from "../../styles/globalStyles";
import { TextInput, TouchableOpacity, FlatList } from "react-native";
import { useRoute,useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

const insertItems = () => {
  const insertion = [];

  const routes = useRoute();
  const navigation = useNavigation();
  const quantity = routes.params.quantity;

  const counter = quantity;

  function loadProducts() {
    for (let i = 0; i < counter; i++) {
      console.log("inserindo");
      insertion[i] = i;
    }
    console.log(insertion);
    console.log("tamanho " + insertion.length);
  }
  loadProducts();
  return (
    <View style={globalStyles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.help} onPress={() => Alert.alert('Ajuda ?','Caso o equipamento possua patrimônio acrescente no tal, se não possuir deixe em branco, no final é só salvar')}>
          <Feather name="help-circle" size={30}  />
        </TouchableOpacity>
        <Text style={styles.title}> Ficha de cadastro</Text>
      </View>

      <View style={styles.body}>
        <FlatList
          data={insertion}
          showsVerticalScrollIndicator={false}
          keyExtractor={(technician) => String(technician.id)}
          onEndReachedThreshold={0.1}
          renderItem={({ item: technician }) => (
            <View
              style={styles.technician}
              onPress={() => handleSelection(technician)}
            >
              <Text style={styles.text}>{technician + 1}°</Text>
              <Text style={styles.text}>Possui patrimônio ? </Text>
              <TextInput
                placeholder="insira o patrimônio"
                placeholderTextColor="#aeb2b5"
                style={styles.textInput}
              />
            </View>
          )}
        />

        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => navigation.navigate('createcheck')}
        >
          <Text style={styles.submitText}> Salvar </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default insertItems;
