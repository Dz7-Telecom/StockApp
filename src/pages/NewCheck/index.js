import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity,Modal,ScrollView,Image} from 'react-native';
import styles from './styles';
import globalStyles from '../../styles/globalStyles';
import { Feather } from '@expo/vector-icons';
import Img from '../../assets/seatedWoman.png';
import { useNavigation } from '@react-navigation/native';

const NewCheck = () => {

    const [open,setOpen] = useState(false)
    const navigation = useNavigation()




    function navigateToCreation(){
        setOpen(false)
        navigation.navigate('createcheck')
    }
    return (

        <View style={globalStyles.container}>
            <View style={globalStyles.header}>
                <Text style={styles.hallo}>Dheph, Selecione um Técnico</Text>
            </View>


            <View style={styles.body}>

            <Image source={Img} style={styles.personImg}/>

                <TouchableOpacity style={styles.selection} onPress={() => setOpen(true)}>
                    <Text style={{color:'#aeb2b5',fontSize:15,fontWeight:'bold'}}>Buscar</Text>
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
                            <TouchableOpacity style={styles.modalButtonIcon}  onPress={() => navigateToCreation()}>
                                <Feather name="search" size={25} color="#0a293e" style={styles.modalIcon} />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.modalBody}>

                            <ScrollView showsVerticalScrollIndicator={false}>
                                <View style={styles.modalItemsContainer}>
                                    
                                    <TouchableOpacity style={styles.modalItems} onPress={() => navigateToCreation()} >
                                        <Text style={styles.modalItemText}>Jorge</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={styles.modalItems} onPress={() => navigateToCreation()}>
                                        <Text style={styles.modalItemText}>Almeida</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={styles.modalItems} onPress={() => navigateToCreation()}>
                                        <Text style={styles.modalItemText}>Breno</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={styles.modalItems} onPress={() => navigateToCreation()}>
                                        <Text style={styles.modalItemText}>Junior</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={styles.modalItems} onPress={() => navigateToCreation()}>
                                        <Text style={styles.modalItemText}>Adalberto</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={styles.modalItems} onPress={() => navigateToCreation()}>
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
}

export default NewCheck;