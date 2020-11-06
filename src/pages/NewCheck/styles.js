import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({

    body: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.7)',
        borderTopLeftRadius: 180,
        borderTopRightRadius: 180,
        borderBottomStartRadius: 100,
        borderBottomEndRadius: 100,
        marginBottom: '5%',
        marginLeft:'10%',
        width: '80%',
        height: '30%',
    },

    personImg: {
        width: '60%',
        height: '100%',
        position: 'absolute',
        bottom: '58%'
    },
    skyImg: {
        width: '80%',
        height: '500%',
        position: 'absolute',
        // bottom: 

    },

    fallingStyle: {
        bottom: 300, 
        width: 250, 
        height: 50 
    },

    hallo: {
        fontSize: 20,
        backgroundColor: 'rgba(255,255,255,0.7)',
        padding: '10%',
        borderRadius: 60,
        borderBottomLeftRadius: 10,
        color: '#0a293e'
    },

    selection: {
        bottom: '10%',
        padding: 10,
        backgroundColor: 'transparent',
        width: '30%',
        height: '50%',
        borderRadius:185,
        borderBottomColor:'#0a293e',
        borderBottomWidth:4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    selectionText: {
        color: "#0a293e", 
        fontSize: 20, 
        fontWeight: "bold" 
    },

    submitButton: {
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: 'rgba(0,0,0,0.2)',
        top: 120,
        borderRadius: 20,
        padding: 15,
        borderBottomStartRadius: 1,
        borderTopEndRadius: 1,
        backgroundColor: "#aeb2b5",
    },

    submitButtonText: {
        color: '#0a293e',
        fontWeight: 'bold',
        fontSize: 15
    },

    // Modal

    modalHeader: {
        flex: 1,
        alignItems: 'center',
        marginBottom: '20%'
    },
    modalSearchText: {
        // marginTop:20,
        textAlign: 'center',
        width: 200,
        height: 35,
        color: '#0a293e',
        borderBottomWidth: 2,
        borderBottomColor: 'rgba(0,0,0,0.3)',
        borderRadius: 20
    },
    modalIcon: {
        backgroundColor: 'rgba(0,0,0,0.3)',
        padding: 5,
        borderRadius: 15,
    },
    modalButtonIcon: {
        left: 140,
        bottom: 30,
        marginBottom: 5
    },

    modalBody: {
        flex: 15,
        backgroundColor: "#0a293e",
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 180,
        borderTopRightRadius: 190,
        borderBottomStartRadius: 200,
        borderBottomEndRadius: 180,
        marginBottom:'10%'
    },
    modalItemText: {
        color: '#aeb2b5',
        fontSize: 17,
        textAlign: 'center'
    },
    modalItemsContainer: {
    },

    modalItems: {
        padding: 50,
        backgroundColor: 'transparent',
        margin: 10,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: '#aeb2b5'
    }

})