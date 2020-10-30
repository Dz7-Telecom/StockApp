import {StyleSheet} from 'react-native';

export default StyleSheet.create({
// -----------------Body--------------------//

    body: {
        flex:4,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#0a293e',
        borderRadius:35,
        borderTopLeftRadius:1,
        borderBottomEndRadius:1,
        borderBottomStartRadius:30,
    },

    hallo: {
        fontSize:30,
        fontWeight:'bold',
        color:'#13161d'
    },

    title: {
        color:'#aeb2b5',
        position:'relative',
        bottom:90,
        fontSize:20
    },

    menu: {
        position:'relative',
        top:10,
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },

    options: {
        padding:25,
        margin:10,
        borderRadius:30,
        borderTopEndRadius:1,
        borderWidth:2,
        borderColor:'#aeb2b5'        
    },

    submitButton : {
        position:'relative',
        justifyContent:'center',
        alignItems:'center',
        borderWidth:3,
        borderColor:'rgba(0,0,0,0.2)',
        top:100,
        borderRadius:20,
        padding:15,
        borderBottomStartRadius:1,
        borderTopEndRadius:1,
        backgroundColor:"#aeb2b5",
        width:100
    },

    submitButtonText: {
        color:'#0a293e',
        fontWeight:'bold',
        fontSize:15
    }
})