import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Container} from 'native-base';
import MapView from 'react-native-maps';
import RequestOverlay from '../components/RequestOverlay';
import ConfirmOverlay from '../components/ConfirmOverlay';

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
    let {reqAmount, reqServices, reqSelfieSaved} = this.props;
    let nextStep = (reqAmount > 0 && reqServices && reqServices.length > 0);

    let overlay = reqSelfieSaved ? (
      <ConfirmOverlay />
    ) : (
      <RequestOverlay nextStep={nextStep}
                      navigation={this.props.navigation} />
    )

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
      {overlay}
    </View>
    )
  }
}
