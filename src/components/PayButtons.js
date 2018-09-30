import { createIconSet } from 'react-native-vector-icons';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {  Button } from 'native-base';
import { SP_ORANGE } from '../styles/colors';
import _ from "lodash";

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
  buttonSelect: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
    borderColor: SP_ORANGE,
    backgroundColor: SP_ORANGE,
  },
  innerButton: {
    fontSize: 32,
    color: SP_ORANGE,
  },
  innerButtonSelect: {
    fontSize: 32,
    color: "#fff",
  },
})
const Icon = createIconSet(glyphMap, 'p2p-icons', 'p2p-icons.ttf');

export default class PayButtons extends Component<Props> {
  render() {
    let { toggleService, reqServices } = this.props;
    const buttons = Object.keys(glyphMap).map(k => {
      let styleButton = _.includes(reqServices, k) ?
        style.buttonSelect :
        style.button;
      let styleText = _.includes(reqServices, k) ?
        style.innerButtonSelect :
        style.innerButton;
        
      return (
        <Button key={k}
                style={styleButton}
                bordered
                onPress={e => toggleService(k)}>
          <Icon style={styleText} key={k} name={k} type='p2p-icons' />
        </Button>
      )
    })

    return (
      <View style={style.panel}>
        { buttons }
        <Button style={style.button} bordered>
          <Text style={{fontSize: 22, color: SP_ORANGE}}>Other...</Text>
        </Button>
      </View>
    );
  }
}
