import {StyleSheet} from 'react-native';

export default StyleSheet.create({

    body: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:50,
        marginTop:'40%',
        marginBottom: '10%',
        marginLeft:'18%',
        width: '63%',
        height: '60%',
        padding:'10%',
    },
    title :{
        marginTop:'30%',
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',
        borderBottomWidth:2,
        borderBottomColor:'#0a293e',
        borderRadius:20,
        marginBottom:'5%'
    },
    textInformations: {
        fontSize:15,
        fontWeight:'bold',
        textAlign:"center",
        margin:'2%',
    },  
    textSignature: {
        fontSize:15,
        color:'#0a293e',
        fontWeight:'bold',
        textAlign:'center',
        margin:'10%'
    },
    signatureImg: {
        width:'100%',
        height:'150%',
        top:1,
        borderRadius:30,
        padding:'85%',
    },
})