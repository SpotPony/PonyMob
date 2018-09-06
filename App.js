/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import MapView from 'react-native-maps';
import RequestOverlay from './src/components/RequestOverlay';

type Props = {};

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

export default class App extends Component<Props> {
  render() {
    const { region } = this.props;
    console.log(region);

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
        <RequestOverlay />
      </View>
    );
  }
}
