import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({

    body: {
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#aeb2b5',
        borderTopLeftRadius:160,
        borderTopRightRadius:160,
        borderBottomStartRadius:100,
        borderBottomEndRadius:100,  
        borderColor:'#0a293e',
        borderWidth:15, 
        marginBottom:5,
        width:'100%',
        height:'37%'
    },

    personImg: {
        width:200,
        height:179,
        position:'absolute', 
        bottom:232
    },

    hallo: {
        fontSize:17,
        backgroundColor:'transparent',
        padding:20,
        borderWidth:2,
        borderColor:'#0a293e',
        borderRadius:50,
        borderBottomLeftRadius:1,
        color:'#0a293e'
    },

    selection: {
        bottom:20,
        padding:10,
        backgroundColor:'#0a293e',
        width:'30%',
        height:'50%',
        borderTopLeftRadius:190,
        borderTopRightRadius:190,
        borderBottomStartRadius:180,
        borderBottomEndRadius:180,  
        alignItems:'center',
        justifyContent:'center'
    },

    submitButton : {
        position:'relative',
        justifyContent:'center',
        alignItems:'center',
        borderWidth:3,
        borderColor:'rgba(0,0,0,0.2)',
        top:120,
        borderRadius:20,
        padding:15,
        borderBottomStartRadius:1,
        borderTopEndRadius:1,
        backgroundColor:"#aeb2b5",
    },

    submitButtonText: {
        color:'#0a293e',
        fontWeight:'bold',
        fontSize:15
    },

    // Modal

    modalHeader:{
        flex:1,
        alignItems:'center',
        marginBottom:100
    },
    modalSearchText: {
        // marginTop:20,
        textAlign:'center',
        width:200,
        height:35,
        color:'#0a293e',
        borderBottomWidth:2,
        borderBottomColor:'rgba(0,0,0,0.3)',
        borderRadius:20
    },
    modalIcon:{ 
        backgroundColor:'rgba(0,0,0,0.3)',
        padding:5,
        borderRadius:15,
    },
    modalButtonIcon:{ 
        left:140,
        bottom:30,
        marginBottom:5
    },

    modalBody:{
        flex:15,
        backgroundColor:"#0a293e",
        alignItems:'center',
        justifyContent:'center',
        borderTopLeftRadius:180,
        borderTopRightRadius:190,
        borderBottomStartRadius:200,
        borderBottomEndRadius:180,  
    },
    modalItemText:{
        color:'#aeb2b5',
        fontSize:17,
        textAlign:'center'
    },
    modalItemsContainer: {
    },

    modalItems: {
        padding:50,
        backgroundColor:'transparent',
        margin:10,
        borderRadius:50,
        borderWidth:3,
        borderColor:'#aeb2b5'
    }

})