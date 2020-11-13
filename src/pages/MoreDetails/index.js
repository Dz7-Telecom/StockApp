import React, {useState,useEffect} from "react";
import { View, Text, Image } from "react-native";

import globalStyles from "../../styles/globalStyles";
import styles from "./styles";

import signaImg from '../../assets/signatureTest.png';
import api from "../../services/api";
import { useRoute } from "@react-navigation/native";

const MoreDetails = () => {
  const [details, setDetails] = useState([]);


  const routes = useRoute();
  const moreInformations = routes.params.moreInformations;
  
  console.log(moreInformations)
  useEffect(() => {
    loadDetails()
  }, []);


  async function loadDetails(){
    await api.get(`especificCheck?&check_id=${moreInformations.check_id}`).then((responseCheck) => {
        setDetails(responseCheck.data[0])
    })
  }
  return (
    <View styles={globalStyles.container}>
      <View style={globalStyles.header}>
        <Text style={styles.title}> Detalhes do check </Text>
        <Text style={styles.textInformations}>
          Data / Hora : {details.date}
        </Text>

        <Text style={styles.textInformations}>Items cadastrados : {moreInformations.total} </Text>
      </View>
    
      <View style={styles.body}>
        <Image source={signaImg} style={styles.signatureImg} />
      </View>
    </View>
  );
};

export default MoreDetails;
