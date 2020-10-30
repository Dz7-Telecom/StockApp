import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity,Modal,ScrollView} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import styles from './styles';
import globalStyles from '../../styles/globalStyles';
import { Feather } from '@expo/vector-icons';

const NewCheck = () => {
    const [open,setOpen] = useState(false)
    return (

        <View style={globalStyles.container}>

            <View style={globalStyles.header}>
                <Text style={styles.hallo}>Dheph, Selecione um Técnico</Text>
            </View>


            <View style={styles.body}>

                {/* <Text style={styles.selection}>Selecione um Técnico</Text> */}


                <TouchableOpacity style={styles.selection} onPress={() => setOpen(true)}>
                    <Text style={{color:'#aeb2b5',fontSize:15,fontWeight:'bold'}}>Buscar</Text>
                </TouchableOpacity>

                {/* <TouchableOpacity style={styles.submitButton} >
                    <Text style={styles.submitButtonText}>  Continuar </Text>
                </TouchableOpacity> */}
                
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
                            {/* <Image source={logo} style={{ marginTop: 20, width: 90, height: 90, backgroundColor: '#003352', borderRadius: 60 }} /> */}
                          
                            <TextInput 
                            style={styles.modalSearchText}
                            placeholder="Qual é o nome do Técnico ?"
                            />
                            <TouchableOpacity style={styles.modalButtonIcon}  onPress={() => setOpen(false)}>
                                <Feather name="search" size={25} color="#0a293e" style={styles.modalIcon} />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.modalBody}>

                            <ScrollView>
                                <View style={styles.modalItemsContainer}>
                                    
                                    <TouchableOpacity style={styles.modalItems}>
                                        <Text style={styles.modalItemText}>Jorge</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={styles.modalItems}>
                                        <Text style={styles.modalItemText}>Almeida</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={styles.modalItems}>
                                        <Text style={styles.modalItemText}>Breno</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={styles.modalItems}>
                                        <Text style={styles.modalItemText}>Junior</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={styles.modalItems}>
                                        <Text style={styles.modalItemText}>Adalberto</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={styles.modalItems}>
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