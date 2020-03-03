import { StyleSheet, Dimensions } from 'react-native'


let HEIGHT = Dimensions.get('screen').height

export default StyleSheet.create({
  eventCard:{
    height: HEIGHT/3
  },
  promoImage:{
    height: '100%',
    width: '100%'
  },
  textView:{
    justifyContent: "center",
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  eventTitle:{
    color:'white',
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'white',
    marginLeft: '20%',
    marginRight: '20%',
    borderRadius: 10,
    paddingTop: '5%',
    paddingBottom: '5%',
  }
})
