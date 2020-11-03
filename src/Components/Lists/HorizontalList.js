import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';


const HorizontalScroll = (props) => {

const Item = ({ title }) => (
    <View style={props.itemStyle}>
      <Text style={props.itemTextStyle}>{title}</Text>
    </View>
  );

    const renderItem = ({ item } ) => (
    <Item title={item.title} />
  );

  return (
    <SafeAreaView style={props.horizontalStyle}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={props.data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}



export default HorizontalScroll;