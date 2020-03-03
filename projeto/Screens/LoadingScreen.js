import React from 'react'
import{View, Text, ActivityIndicator, SafeAreaView} from 'react-native'
import * as firebase from 'firebase'

import styles from './styles/LoadingStyles'
import GloblaStyle from '../styles/GlobalStyle'

export default class LoadingScreen extends React.Component {

    componentDidMount(){
        firebase.auth().onAuthStateChanged(user =>{
            this.props.navigation.navigate(user ? 'App': 'Auth');
        });
    }

    render(){
      return (
        <SafeAreaView style ={GloblaStyle.droidSafeArea}>
            <View style = {styles.container}>
                <Text>Loading...</Text>
                <ActivityIndicator size = 'large'/>
            </View>
        </SafeAreaView>
      );
    }
  }