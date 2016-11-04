/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  Dimensions,
  GeoLocation,
  Navigator
} from 'react-native';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
var location;

var rootPage = require('./root.android')

export default class InvoDay extends Component {

  _renderScene (route, navigator) {
    return <route.component {...route.passProps} navigator={navigator} />
  }
  
  _pop (route, navigator) {
  	console.log('_pop');
    navigator.pop
  }

  
  render() {
    return (
    	<Navigator style={{flex: 1}}
    	renderScene={this._renderScene.bind(this)}
        initialRoute={{component: rootPage, title:'Home Page'}}  
  		
  		
  		navigationBar={
     		<Navigator.NavigationBar
       		routeMapper={{
         		LeftButton: (route, navigator, index, navState) =>
          		{ return (
          		<View
          			style={{
                    	justifyContent: 'center',
                        flex: 1
                    }}>
                        
                    <TouchableOpacity
        			onPress={navigator.pop}>
                    	<Image
          					style={{width: 50, height: 50}}
          					source={require('./images/back.png')}
        					/>
        				</TouchableOpacity>
        		</View>); },
        		
         			RightButton: (route, navigator, index, navState) =>
           		{ return null; },
         			Title: (route, navigator, index, navState) =>
           		{ return (<View style={{
                            justifyContent: 'center',
                            flex: 1
                        }}><Text>{route.title}</Text></View>); },
       			}}
       			style={styles.nav_bar}
     		/>
  		}/>
    );
    }
 }

const styles = StyleSheet.create({
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

AppRegistry.registerComponent('InvoDay', () => InvoDay);
