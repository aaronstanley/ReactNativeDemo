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
  View,
  TouchableHighlight,
  TouchableNativeFeedback,
  Dimensions,
  GeoLocation,
  Navigator
} from 'react-native';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
var location;


var rootPage = React.createClass({

		getInitialState: function() {
		return {
    		city: 'unknown',
    		show:false
    		}
  		},

        goDerper: function() {
            this.props.navigator.push({
                title: 'nextPage',
                component: NextPage,
                navigationBarHidden: true,
                passProps: {myElement: 'text'}
            });
        },
        
        _renderLocation() {
        if (this.state.show) {
            return (
            <View style={styles.container1}>
        		<Text style={styles.instructions}>
          			<Text style={styles.title}>Ah, your in {this.state.city}, What would you like to know?</Text>
        		</Text>
        		<TouchableNativeFeedback
        			background={TouchableNativeFeedback.SelectableBackground()}>
      				<View style={styles.button}>
        				<Text style={styles.button_text}>Five Day Weather</Text>
      				</View>
    			</TouchableNativeFeedback>
    			</View>
            );
        } else {
            return null;
        }
    },
    
    _click() {
		console.log("Clicked");
		navigator.geolocation.getCurrentPosition(
      		(position) => {
        		var lat = position.coords.latitude;
        		var lng = position.coords.longitude;
        		console.log(position);
        		this.setState({lat,lng});
        		
        		var url = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' +lat+','+lng+'&language=en&key=AIzaSyBDEkbnMa5p8AEKFlL4XXMIFo5JAqzsG-Q'
        		
        		fetch(url)
        		.then((response) => response.json())
        		.then((responseJson) => {
        			var address_components = responseJson.results[0].address_components;
        			for (var i = 0; i < address_components.length; i++) {
        				if(address_components[i].types[0] == 'locality') {
        					var city = address_components[i].long_name;
        					var show = true;
        					this.setState({city,show});
						}
					}
      			});
      		},
      		(error) => alert(JSON.stringify(error)),
    	);
	},
        
        render: function(){
            return(
               <View style={styles.container}>
        		<Text style={styles.welcome}>
          		Hello, Welcome to my demo for react native on Android,
        		</Text>
    
       			<TouchableNativeFeedback
        			onPress={this._click}
        			background={TouchableNativeFeedback.SelectableBackground()}>
      				<View style={styles.button}>
        				<Text style={styles.button_text}>So, where are you? click here to find out.</Text>
      				</View>
    			</TouchableNativeFeedback>
    			{this._renderLocation()}   
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

module.exports = rootPage;