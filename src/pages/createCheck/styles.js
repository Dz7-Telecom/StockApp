import {StyleSheet} from 'react-native';

export default StyleSheet.create({

    body: {
        flex:4,
        backgroundColor:'#0a293e',
        
    },
    horizontalList: {
        // marginTop: '30%',
        margin:'25%',
        width: '50%',
        height: '80%',

    },

    itemStyle: {
        padding: '20%',
        marginVertical: 10,
        marginHorizontal: 1.5,
        borderWidth: 3,
        borderColor: '#aeb2b5',
        borderRadius: 50,
        borderTopEndRadius:1,
        borderBottomStartRadius:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemTextStyle: {
        textAlign:'center',
        fontSize: 20,
        color: '#aeb2b5',
        fontWeight: 'bold',
        borderBottomColor:'#aeb2b5',
        borderBottomWidth:1,
        borderRadius:30
    },
    verticalScroll: {
        marginTop: '10%'
    },
    iconsContainer: {
        flexWrap: 'wrap', 
        alignItems: 'flex-start',
        flexDirection:'row',
    },
   
    icons:{
        flexDirection:'column',
        margin:10,
        marginVertical:15
    }

})