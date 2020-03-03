import React from 'react'
import{View, Text, TouchableOpacity} from 'react-native'
import * as firebase from 'firebase'

import styles from './styles/LoginStyles'
import { TextInput } from 'react-native-gesture-handler'

export default class LoginScreen extends React.Component {

    state = {
      email: "",
      password: "",
      errorMessage: null
    }

    handleLogin = () =>{
      const {email, password} = this.state
      firebase.auth().signInWithEmailAndPassword(email, password).catch(error => this.setState({errorMessage: error.message}))
    }

    render(){
      return(

        <View  style = {styles.container}>
          <Text style = {styles.greeting}> Hello there!</Text>

          <View style = {styles.errorMessage}>
            {this.state.errorMessage && <Text style = {styles.error}>{this.state.errorMessage}</Text>}
          </View>

          <View style = {styles.form}>

            <View>
              <Text style = {styles.inputTitle}>Email</Text>
              <TextInput 
                style = {styles.input}
                autoCapitalize = "none" 
                onChangeText = {email => this.setState({email})}
                value = {this.state.email}
              ></TextInput>
            </View>

            <View style = {{marginTop:32}}>
              <Text style = {styles.inputTitle}>Senha</Text>
              <TextInput 
                style = {styles.input}
                secureTextEntry
                autoCapitalize = "none" 
                onChangeText = {password => this.setState({password})}
                value = {this.state.password}
              ></TextInput>
            </View>

          </View>
          
          <TouchableOpacity style = {styles.button} onPress ={this.handleLogin} >
            <Text style = {{ color:"#fff", fontWeight: "500"}}> Entrar </Text>
          </TouchableOpacity>

          <TouchableOpacity style = {{ alignSelf: 'center', marginTop: 32}} >
            <Text style = {{color: "#414959", fontSize: 13}} >
              Ainda não possui uma conta? <Text style = {{fontWeight: '500', color: '#b300b3'}}>Criar uma conta</Text>
            </Text>
          </TouchableOpacity>
          
        </View>

      );
    }
}