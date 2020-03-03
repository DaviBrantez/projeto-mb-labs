import { StyleSheet } from 'react-native'
export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff'
    },
    greeting:{
        marginTop: 32,
        fontSize: 18,
        fontWeight: '400',
        textAlign: 'center',
        color: "#b300b3"
    },
    errorMessage:{
        height: 72,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 30
    },
    error:{
        color: "#E9446A",
        fontSize: 13,
        fontWeight: "600",
        textAlign: 'center'
    },
    form:{
        marginBottom: 48,
        marginHorizontal: 30
    },
    inputTitle:{
        color: "#8A8F9E",
        fontSize: 10,
        textTransform: 'uppercase'
    },
    input:{
        borderBottomColor: "#8A8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: "#161F3D"
    },
    button:{
        backgroundColor: "#b300b3",
        marginHorizontal: 30, 
        borderRadius: 4,
        height: 52,
        alignItems: "center",
        justifyContent: "center" 
        
    }
})