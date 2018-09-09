import { createIconSet } from 'react-native-vector-icons';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {  Button } from 'native-base';
import { SP_ORANGE } from '../styles/colors';

const glyphMap = {
  'square-cash': '\u0046',
  'zelle': '\u0047',
  'paypal': '\u0048',
  'venmo': '\u0049',
}

const style = StyleSheet.create({
  panel: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between'
  },
  button: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
    borderColor: SP_ORANGE,
  },
  innerButton: {
    fontSize: 32,
    color: SP_ORANGE,
  },
})
const Icon = createIconSet(glyphMap, 'p2p-icons', 'p2p-icons.ttf');

export default class PayButtons extends Component<Props> {
  render() {
    return (
      <View style={style.panel}>
        <Button style={style.button} bordered>
          <Icon style={style.innerButton} name='square-cash' type='p2p-icons' />
        </Button>
        <Button style={style.button} bordered>
          <Icon style={style.innerButton} name='zelle' type='p2p-icons' />
        </Button>
        <Button style={style.button} bordered>
          <Icon style={style.innerButton} name='paypal' type='p2p-icons' />
        </Button>
        <Button style={style.button} bordered>
          <Icon style={style.innerButton} name='venmo' type='p2p-icons' />
        </Button>
        <Button style={style.button} bordered>
          <Text style={{fontSize: 22, color: SP_ORANGE}}>Other...</Text>
        </Button>
      </View>
    );
  }
}
