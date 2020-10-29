import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    
    header: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        paddingTop:50,
        
    },
    logo: {
        width:100,
        height:100,
        backgroundColor:'#0a293e',
        borderRadius:50,
    },
    logoContainer: {
        padding:15,
        borderTopRightRadius:5,
        borderRadius:40,
        borderTopEndRadius:1,
        borderWidth:3,
        borderColor:'rgba(255,255,255,0.2)',
        backgroundColor:"#aeb2b5",
    },

// --------Body----------------- // 

    body: {
        flex:3,
        justifyContent:'center',
        alignItems:'center',
        borderTopLeftRadius:700,
        borderTopEndRadius:1,
        borderBottomStartRadius:1,
        backgroundColor:'#0a293e'
    },

    title: {
        position:'relative',
        top:20,
        color:'#aeb2b5',
        fontSize:35,
        fontWeight:'bold',
        // fontStyle:'italic'
    },

// --------Form----------------- // 
    form: {
        marginTop:50
    },
    
    inputLabel: {
        marginTop:10,
        color:"#aeb2b5",
        fontWeight:'bold',
        fontSize:17,
    },

    inputView: {
        // backgroundColor:'red',
        margin:1,
        borderWidth:1,
        borderColor:'#aeb2b5',
        padding:10,
        width:150,
        borderRadius:10,
        
    },

    inputText: {
        color:'#aeb2b5',
        textAlign:'center'
    },

    inputPassword: {
        height:30,
        width:30,
        alignItems:'center',
        justifyContent:'center',
        position:'relative',
        left:155,
        bottom:40
    },

    submitButton : {
        position:'relative',
        justifyContent:'center',
        alignItems:'center',
        borderWidth:3,
        borderColor:'rgba(0,0,0,0.2)',
        top:2,
        borderRadius:15,
        padding:15,
        borderTopEndRadius:1,
        backgroundColor:"#aeb2b5"
    },

    submitButtonText: {
        color:'#0a293e',
        fontWeight:'bold',
        fontSize:15
    }


// -------End-Form----------------- // 



//  --------End-Body----------------- //
})