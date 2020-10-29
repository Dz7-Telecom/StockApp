import React from 'react';
import { View, Text,TouchableOpacity, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import globalStyles from '../../styles/globalStyles';
import styles from './styles';

const Home = () => {
    const navigation = useNavigation()

    function logout(){
        Alert.alert('Falou Dheph :-)','intérci')
    }
    return (
        <View style={globalStyles.container}>

            <View style={styles.header}>
                <Text style={styles.hallo}>Olá Dheph ;)</Text>
            </View>

            <View style={styles.body}>

                <Text style={styles.title}>Check Manager</Text>

                <View style={styles.menu}>

                    <TouchableOpacity style={styles.options}>
                        <Text style={{ color: 'white' }}>
                        <Feather name="box" size={21} color="#aeb2b5" />
                            Novo Check 
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.options}>
                        <Text style={{ color: 'white' }}>
                        <Feather name="box" size={21} color="#aeb2b5" />
                            Ultimos Check 
                        </Text>
                    </TouchableOpacity>

                </View>

                <TouchableOpacity style={styles.submitButton} onPress={() =>  navigation.navigate('login')}>
                        <Text style={styles.submitButtonText}>  Sair </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Home;