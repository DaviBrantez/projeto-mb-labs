import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import styles from './styles/EventScreenStyle'

import HeaderEvent from './Components/HeaderEvent'

export default class EventScreen extends Component {
  render(){
    return (
      <View>
          <HeaderEvent/>
      </View>
    );
  }
}


