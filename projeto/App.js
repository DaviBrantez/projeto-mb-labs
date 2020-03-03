import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator} from 'react-navigation-stack'

import LoadingScreen from './Screens/LoadingScreen'
import HomeScreen from './Screens/HomeScreen'
import LoginScreen  from './Screens/LoginScreen'
import RegisterScreen from './Screens/RegsiterScreen'

import * as firebase from 'firebase'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB5dqNhrxGyelgAAsy69vsLnpFKZcm3zEA",
  authDomain: "eventgram-38016.firebaseapp.com",
  databaseURL: "https://eventgram-38016.firebaseio.com",
  projectId: "eventgram-38016",
  storageBucket: "eventgram-38016.appspot.com",
  messagingSenderId: "1072395221064",
  appId: "1:1072395221064:web:f410455c032b99445b007d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const AppStack = createStackNavigator({
  Home: HomeScreen
})

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen
})
export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App:AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: 'Loading'
    }
  )
)