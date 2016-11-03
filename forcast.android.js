 'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableNativeFeedback,
  Dimensions,
  GeoLocation,
  Navigator
} from 'react-native';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
var forcastPage = React.createClass({
	
	render: function(){
            return(
               <View style={styles.container}>
        	<Text style={styles.welcome}>
          		Hello, Welcome to my demo for react native on Android,
        	</Text>
        </View>
            );
        },
        
    })


var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginTop:54
  },
  container1: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
  	width: width * 0.8,
  	height: 40, 
  	backgroundColor: 'red',
    marginTop: 5,
    marginBottom: 5
  },
  button_text: {
  	textAlign: 'center',
  	marginTop: 10
  },
  nav_bar: {
  	alignItems: 'center',
  	backgroundColor: 'gray',
  }
});

module.exports = forcastPage;