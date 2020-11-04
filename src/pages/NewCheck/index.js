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
} from "react-native";
import styles from "./styles";
import globalStyles from "../../styles/globalStyles";
import { Feather } from "@expo/vector-icons";
import Img from "../../assets/seatedWoman.png";
import skyPerson from "../../assets/sky.png";
import { useNavigation } from "@react-navigation/native";

const Falling = (props) => {
  const [falling] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(falling, {
      toValue: 300,
      duration: 10000,
      delay: 100,
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
  const navigation = useNavigation();

  function navigateToCreation() {
    setOpen(false);
    navigation.navigate("createcheck");
  }
  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.header}>
        <Text style={styles.hallo}>Dheph, Selecione um Técnico</Text>
      </View>

      <Falling style={{ bottom: 400, width: 250, height: 50 }}>
        <Image source={skyPerson} style={styles.skyImg} />
      </Falling>

      <View style={styles.body}>
        <Image source={Img} style={styles.personImg} />

        <TouchableOpacity
          style={styles.selection}
          onPress={() => setOpen(true)}
        >
          <Text style={{ color: "#aeb2b5", fontSize: 15, fontWeight: "bold" }}>
            Buscar
          </Text>
        </TouchableOpacity>
      </View>
      {
        <Modal
          presentationStyle="formSheet"
          animationType="slide"
          transparent={false}
          visible={open}
        >
          <View style={globalStyles.container}>
            <View style={styles.modalHeader}>
              <TextInput
                style={styles.modalSearchText}
                placeholder="Qual é o nome do Técnico ?"
              />
              <TouchableOpacity
                style={styles.modalButtonIcon}
                onPress={() => navigateToCreation()}
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
                  <TouchableOpacity
                    style={styles.modalItems}
                    onPress={() => navigateToCreation()}
                  >
                    <Text style={styles.modalItemText}>Jorge</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.modalItems}
                    onPress={() => navigateToCreation()}
                  >
                    <Text style={styles.modalItemText}>Almeida</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.modalItems}
                    onPress={() => navigateToCreation()}
                  >
                    <Text style={styles.modalItemText}>Breno</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.modalItems}
                    onPress={() => navigateToCreation()}
                  >
                    <Text style={styles.modalItemText}>Junior</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.modalItems}
                    onPress={() => navigateToCreation()}
                  >
                    <Text style={styles.modalItemText}>Adalberto</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.modalItems}
                    onPress={() => navigateToCreation()}
                  >
                    <Text style={styles.modalItemText}>Ycaro</Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>
          </View>
        </Modal>
      }
    </View>
  );
};

export default NewCheck;
