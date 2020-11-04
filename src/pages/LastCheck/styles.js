import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
export default StyleSheet.create({


    body: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },

    // Modal

    modalHeader: {
        flex: 1,
        alignItems: 'center',
        marginBottom: 100
    },
    modalSearchText: {
        marginTop: 50,
        textAlign: 'center',
        width: 200,
        height: 35,
        color: '#0a293e',
        borderBottomWidth: 2,
        borderBottomColor: 'rgba(0,0,0,0.3)',
        borderRadius: 20,
    },
    modalIcon: {
        backgroundColor: 'rgba(0,0,0,0.2)',
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
        backgroundColor: "transparent",
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 180,
        borderTopRightRadius: 190,
        borderBottomStartRadius: 200,
        borderBottomEndRadius: 180,
    },
    modalItemText: {
        color: '#0a293e',
        fontSize: 17,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    modalItemsContainer: {
        // bottom:10
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

