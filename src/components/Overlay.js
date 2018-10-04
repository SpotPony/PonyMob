import React, {Component} from 'react';

import {View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  overlay: {
    height: 400,
    width: 400,
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
  },
})

export default class Overlay extends Component<Props> {
  render() {
    const {style} = this.props
    const overlayStyle = StyleSheet.flatten([styles.overlay, style])
    
    return (
      <View style={overlayStyle}>
        {this.props.children}
      </View>
    )
  }
}
