import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0a293e',
        paddingTop: Constants.statusBarHeight + 10,

    },
    header: {
        flex: 1,
        backgroundColor: '#0a293e',
        marginHorizontal: "10%",

    },
    moreInformations: {
        position: 'absolute',
        right: -10,

    },
    listTitle: {
        left:'20%',
        marginTop: '15%',
        color: "#aeb2b5",
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
        position:'absolute'
    },
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderTopLeftRadius: 130,
        borderTopRightRadius: 130,
        borderBottomStartRadius: 1,
        borderBottomEndRadius: 1,

    },
    horizontalList: {
        margin: '10%',
        marginLeft: '1%',
        width: '100%',
        height: '30%',
    },

    itemStyle: {
        padding: 50,
        marginVertical: '20%',
        marginHorizontal: 15,
        borderWidth: 3,
        borderColor: '#aeb2b5',
        height: '20%',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemTextStyle: {
        fontSize: 25,
        color: '#aeb2b5',
        fontWeight: 'bold'
    },
    verticalScroll: {
        marginTop: '10%'
    },
    checkItemsGroup: {
        width: 330,
        margin: 10,
        backgroundColor: 'rgba(0,0,0,0.1)',
        padding: '10%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,

    },
    checkItemsText: {
        fontSize: 17,
        borderBottomColor: '#aeb2b5',
        borderBottomWidth: 1,
        marginBottom: 10,
        borderRadius: 50
    }
})