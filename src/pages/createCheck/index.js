import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';

import handMan from '../../assets/handman.png'
import styles from './styles';
import globalStyles from '../../styles/globalStyles';

import { Feather } from '@expo/vector-icons'

const CreateCheck = () => {

    return (
        <View style={globalStyles.container}>

            <View style={globalStyles.header}>
                <Text style={{ fontSize: 30, textAlign: 'center' }}>Let's Check!</Text>
            </View>

            <View style={styles.body}>
                <Image source={handMan} style={{ width: 100, height: 150, position: 'absolute', bottom: '97%' }} />

                <View style={styles.checkGroup}>

                    <ScrollView style={styles.horizontalList} horizontal={false} showsVerticalScrollIndicator={false}>

                        <View style={styles.itemStyle} onPress={() => Alert.alert('verificar mais detalhes', 'coming soon')}>
                        <Text style={styles.itemTextStyle}> 2 </Text>
                            
                            <Text style={styles.itemTextStyle}> Alicate De Corte </Text>

                            <View style={styles.iconsContainer}>
                                <TouchableOpacity style={styles.icons}>
                                    <Feather name="plus-circle" size={30} color="#aeb2b5" style={styles.icon} />
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.icons}>
                                    <Feather name="minus-circle" size={30} color="#aeb2b5" style={styles.icon} />
                                </TouchableOpacity>
                            </View>

                        </View>

                        <View style={styles.itemStyle} onPress={() => Alert.alert('verificar mais detalhes', 'coming soon')}>
                        <Text style={styles.itemTextStyle}> 1 </Text>
                            
                            <Text style={styles.itemTextStyle}> Alicate de Crimpar </Text>

                            <View style={styles.iconsContainer}>
                                <TouchableOpacity style={styles.icons}>
                                    <Feather name="plus-circle" size={30} color="#aeb2b5" style={styles.icon} />
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.icons}>
                                    <Feather name="minus-circle" size={30} color="#aeb2b5" style={styles.icon} />
                                </TouchableOpacity>
                            </View>

                        </View>

                        <View style={styles.itemStyle} onPress={() => Alert.alert('verificar mais detalhes', 'coming soon')}>
                        <Text style={styles.itemTextStyle}> 5 </Text>
                            
                            <Text style={styles.itemTextStyle}> Cavalete P/ Drop </Text>

                            <View style={styles.iconsContainer}>
                                <TouchableOpacity style={styles.icons}>
                                    <Feather name="plus-circle" size={30} color="#aeb2b5" style={styles.icon} />
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.icons}>
                                    <Feather name="minus-circle" size={30} color="#aeb2b5" style={styles.icon} />
                                </TouchableOpacity>
                            </View>

                        </View>

                        <View style={styles.itemStyle} onPress={() => Alert.alert('verificar mais detalhes', 'coming soon')}>
                        <Text style={styles.itemTextStyle}> 1 </Text>
                            
                            <Text style={styles.itemTextStyle}> Estilete </Text>

                            <View style={styles.iconsContainer}>
                                <TouchableOpacity style={styles.icons}>
                                    <Feather name="plus-circle" size={30} color="#aeb2b5" style={styles.icon} />
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.icons}>
                                    <Feather name="minus-circle" size={30} color="#aeb2b5" style={styles.icon} />
                                </TouchableOpacity>
                            </View>

                        </View>

                       <View style={styles.itemStyle} onPress={() => Alert.alert('verificar mais detalhes', 'coming soon')}>
                        <Text style={styles.itemTextStyle}> 1 </Text>
                            
                            <Text style={styles.itemTextStyle}> Etiquetadora </Text>

                            <View style={styles.iconsContainer}>
                                <TouchableOpacity style={styles.icons}>
                                    <Feather name="plus-circle" size={30} color="#aeb2b5" style={styles.icon} />
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.icons}>
                                    <Feather name="minus-circle" size={30} color="#aeb2b5" style={styles.icon} />
                                </TouchableOpacity>
                            </View>

                        </View>

                       <View style={styles.itemStyle} onPress={() => Alert.alert('verificar mais detalhes', 'coming soon')}>
                        <Text style={styles.itemTextStyle}> 1 </Text>
                            
                            <Text style={styles.itemTextStyle}> Notebook </Text>

                            <View style={styles.iconsContainer}>
                                <TouchableOpacity style={styles.icons}>
                                    <Feather name="plus-circle" size={30} color="#aeb2b5" style={styles.icon} />
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.icons}>
                                    <Feather name="minus-circle" size={30} color="#aeb2b5" style={styles.icon} />
                                </TouchableOpacity>
                            </View>

                        </View>

                        <View style={styles.itemStyle} onPress={() => Alert.alert('verificar mais detalhes', 'coming soon')}>
                        <Text style={styles.itemTextStyle}> 2 </Text>
                            
                            <Text style={styles.itemTextStyle}> Lanterna USB </Text>

                            <View style={styles.iconsContainer}>
                                <TouchableOpacity style={styles.icons}>
                                    <Feather name="plus-circle" size={30} color="#aeb2b5" style={styles.icon} />
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.icons}>
                                    <Feather name="minus-circle" size={30} color="#aeb2b5" style={styles.icon} />
                                </TouchableOpacity>
                            </View>

                        </View>

                        <View style={styles.itemStyle} onPress={() => Alert.alert('verificar mais detalhes', 'coming soon')}>
                        <Text style={styles.itemTextStyle}> 1 </Text>
                            
                            <Text style={styles.itemTextStyle}> C5 </Text>

                            <View style={styles.iconsContainer}>
                                <TouchableOpacity style={styles.icons}>
                                    <Feather name="plus-circle" size={30} color="#aeb2b5" style={styles.icon} />
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.icons}>
                                    <Feather name="minus-circle" size={30} color="#aeb2b5" style={styles.icon} />
                                </TouchableOpacity>
                            </View>

                        </View>

                        <View style={styles.itemStyle} onPress={() => Alert.alert('verificar mais detalhes', 'coming soon')}>
                        <Text style={styles.itemTextStyle}> 1 </Text>
                            
                            <Text style={styles.itemTextStyle}> Capacete </Text>

                            <View style={styles.iconsContainer}>
                                <TouchableOpacity style={styles.icons}>
                                    <Feather name="plus-circle" size={30} color="#aeb2b5" style={styles.icon} />
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.icons}>
                                    <Feather name="minus-circle" size={30} color="#aeb2b5" style={styles.icon} />
                                </TouchableOpacity>
                            </View>

                        </View>

                        <View style={styles.itemStyle} onPress={() => Alert.alert('verificar mais detalhes', 'coming soon')}>
                        <Text style={styles.itemTextStyle}> 0 </Text>
                            
                            <Text style={styles.itemTextStyle}> Cinto com Talabarte</Text>

                            <View style={styles.iconsContainer}>
                                <TouchableOpacity style={styles.icons}>
                                    <Feather name="plus-circle" size={30} color="#aeb2b5" style={styles.icon} />
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.icons}>
                                    <Feather name="minus-circle" size={30} color="#aeb2b5" style={styles.icon} />
                                </TouchableOpacity>
                            </View>

                        </View>

                        <View style={styles.itemStyle} onPress={() => Alert.alert('verificar mais detalhes', 'coming soon')}>
                        <Text style={styles.itemTextStyle}> 10 </Text>
                            
                            <Text style={styles.itemTextStyle}> Fio CCI </Text>

                            <View style={styles.iconsContainer}>
                                <TouchableOpacity style={styles.icons}>
                                    <Feather name="plus-circle" size={30} color="#aeb2b5" style={styles.icon} />
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.icons}>
                                    <Feather name="minus-circle" size={30} color="#aeb2b5" style={styles.icon} />
                                </TouchableOpacity>
                            </View>

                        </View>

                    </ScrollView>

                </View>
            </View>
        </View>
    );
}

export default CreateCheck;