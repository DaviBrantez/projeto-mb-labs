import { StyleSheet, Platform } from 'react-native'
export default StyleSheet.create({
    headerStyle:{
        backgroundColor: '#b300b3',
        justifyContent: 'center'
    },
    iconStyle:{
        color: '#000',
        fontSize: 30
    },
    titleStyle:{
        fontSize: 21,
        fontStyle: 'italic',
        fontWeight: '400',
        textAlign:'center', 
        justifyContent: 'center'
    },
    headerContainer:{
        height: Platform.OS =='ios' ? '10%' :'7%', 
        flex: 0,
        zIndex: 5
    },
    bodyStyle:{
        flexDirection: 'row',
        flex:1,
        alignContent: 'center'
    }
})
