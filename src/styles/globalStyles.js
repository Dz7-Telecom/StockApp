import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';
export default StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor:'#13161e',
        // backgroundColor:'#fff',
        paddingTop:Constants.statusBarHeight ,
    },
    header: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        paddingTop:50,
        
    },
})