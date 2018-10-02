import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';

export default class SelfiePreview extends Component {
  render() {
    let {params} = this.props.navigation.state.params;
    return (
      <Image style={{
          flex: 1,
          position: 'absolute',
          width: '100%',
          height: '100%',
          resizeMode: 'contain',
          justifyContent: 'center',}}
               source={{uri: `data:image/png;base64,${params.data}`}} />
    )
  }
}
