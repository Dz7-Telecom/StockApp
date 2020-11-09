import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    header: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',

    },
    help:{
        position:'absolute',
        right:50
    },
    body:{
        flex:3,
        justifyContent:'center',
        alignItems:'center',
    },
    title: {
        color:'#003352',
        fontSize:21,
        fontWeight:'bold',
        margin:'20%',
    },
    technician: {
        marginTop:'15%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#003352',
        borderRadius:20,
        padding:'10%',
    },
    text: {
        color:'#aeb2b5',
        fontWeight:'bold',
        fontSize:17
    },
    textInput: {
        borderWidth:1,
        borderColor:'#aeb2b5',
        padding:'3%',
        margin:5,
        borderRadius:20,
        color:'#aeb2b5',
        textAlign:'center',
    },
    submitButton: {
        position:'absolute',
        bottom:'1%',
        backgroundColor:"#0a293e",
        borderRadius:30,
        borderTopStartRadius:2,
        borderBottomEndRadius:2,
        padding:15,
        width:'30%'
    },
    submitText: {
        color:'#aeb2b5',
        fontSize:17,
        fontWeight:'bold',
        textAlign:'center'
    }
})