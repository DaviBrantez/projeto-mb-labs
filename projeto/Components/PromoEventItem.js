import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import styles from './Styles/PromoEventStyles'

export default class PromoEventItem extends Component {
  render(){

    return (
      <TouchableOpacity onPress = {() => alert("")} >
        <View style = {styles.eventCard}>
        <View>
          <Image style={styles.promoImage} source = {this.props.image} resizeMode = 'contain' blurRadius = {1}/>
        </View>
        <View style = {styles.textView}>
          <Text style = {styles.eventTitle}>{this.props.text}</Text>
        </View>
      </View>
      </TouchableOpacity>
    );
  }
}



