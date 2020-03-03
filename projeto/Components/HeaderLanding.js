import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Left, Right, Body, Button, Icon } from 'native-base'

import styles from './Styles/HeaderScreenStyles'

export default class HeaderLanding extends Component {
  render (){
    return (
      <Container style = {styles.headerContainer}>
          <Header style = {styles.headerStyle}>
              <Left>
                  <Button transparent onPress={()=>alert("left button")}>
                    <Icon style = {styles.iconStyle} name = "ios-menu"/>
                  </Button>
  
              </Left>
              <Body style = {styles.bodyStyle}>
                  <Text style = {styles.titleStyle}>Eventogram</Text>
              </Body>
              <Right>
              <Button transparent onPress={()=>alert("left button")}>
                    <Icon style = {styles.iconStyle} type ="FontAwesome5" name = "shopping-cart"/>
                  </Button>
              </Right>
          </Header>
      </Container>
    );
  }
}
