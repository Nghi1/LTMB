import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import { ImageBackground } from 'react-native-web';

export default class Login extends Component {
  render() {
    return (
       
            <ImageBackground source={require('./HinhLogin.jpg')} style={styles.backgroudImage}></ImageBackground>
 
    );
  }
}

const styles = StyleSheet.create({
    backgroudImage: {
    flex: 1,
    resizeMode: 'stretch',
    fontFamily
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
},


});



