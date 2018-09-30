import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Container} from 'native-base';
import MapView from 'react-native-maps';
import RequestOverlay from '../components/RequestOverlay';

const styles = StyleSheet.create({
  container: {
     ...StyleSheet.absoluteFillObject,
     justifyContent: 'flex-end',
     alignItems: 'center',
     position: 'absolute',
     top: 0,
     right: 0,
     left: 0,
     bottom: 0,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
     position: 'absolute',
     top: 0,
     right: 0,
     left: 0,
     bottom: 0,
  },
});

export default class MainRequest extends Component<Props> {

  render() {
    return (
    <View style ={styles.container}>
      <MapView
        style={styles.map}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      >
      </MapView>
      <RequestOverlay selectAmount={this.props.selectAmount}/>
    </View>
    )
  }
}
