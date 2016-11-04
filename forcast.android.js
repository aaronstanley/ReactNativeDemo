 'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  TouchableNativeFeedback,
  Dimensions,
  ListView,
  ToastAndroid
} from 'react-native';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
var lat = 0;
var lng = 0;


class ForcastPage extends React.Component {

constructor(props) {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(props.data),
    };
  }
  

  render() {
    return (
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={(data) => 
        <TouchableNativeFeedback 
        onPress={() =>
              ToastAndroid.show(data.weather[0].description, ToastAndroid.SHORT)}
        background={TouchableNativeFeedback.SelectableBackground()}>
       
        <View style={{flexDirection:'row'}}>
        	<View style={styles.row}>
        		<Text>{toDateTime(data.dt)}</Text>
        		<Text>Forcast: {data.weather[0].description}</Text>
        		<Text>Day: {kvToC(data.temp.day)}C</Text>
        		<Text>Night: {kvToC(data.temp.night)}C</Text>
        	</View>
        	<View style={{justifyContent: 'center'}}>
        		<Image
          			style={{width: 50, height: 50}}
          			source={{uri: 'http://openweathermap.org/img/w/'+data.weather[0].icon+'.png'}}
        		/>
        	</View>
        </View>
        </TouchableNativeFeedback>
        
        }
      />
    );
  }
}

function toDateTime(secs) {
    var t = new Date(1970, 0, 1); // Epoch
    t.setSeconds(secs);
    switch(t.getDay()) {
    case 0:
    return 'Monday - ' + t.getDate() + '/' + (t.getMonth() + 1);
    case 1:
    return 'Tuesday - ' + t.getDate() + '/' + (t.getMonth() + 1);
    case 2:
    return 'Wednesday - ' + t.getDate() + '/' + (t.getMonth() + 1);
    case 3:
    return 'Thursday - ' + t.getDate() + '/' + (t.getMonth() + 1);
    case 4:
    return 'Friday - ' + t.getDate() + '/' + (t.getMonth() + 1);
    case 5:
    return 'Saturday - ' + t.getDate() + '/' + (t.getMonth() + 1);
    case 6:
    return 'Sunday - ' + t.getDate() + '/' + (t.getMonth() + 1);
    }
}

function kvToC(value) {
    return Math.round((value - 273.15) * 100) / 100 ;
}

var styles = StyleSheet.create({
  container: {
     flex: 1,
     marginTop: 54,
  },
  row: {
  	margin: 4,
  }
  
});

module.exports = ForcastPage;