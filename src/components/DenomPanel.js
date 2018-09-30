import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'native-base';
import {SP_ORANGE} from '../styles/colors';

const styles = StyleSheet.create({
  button: {
    paddingLeft: 10,
    paddingRight: 10,
    borderColor: SP_ORANGE,
    borderRadius: 10,
  },
  buttonSelect: {
    paddingLeft: 10,
    paddingRight: 10,
    borderColor: SP_ORANGE,
    borderRadius: 10,
    backgroundColor: SP_ORANGE,
  },
  buttonTextSelect: {
    color: "#fff",
    fontWeight: '600',
    fontSize: 20,
  },
  buttonText: {
    color: SP_ORANGE,
    fontWeight: '600',
    fontSize: 20,
  },
  buttonDisabled: {
    color: '#fff',
  },
  buttonPanel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 20,
  },
});

export default class DenomPanel extends Component<Props> {

  render() {
    let {values, selectAmount, reqAmount} = this.props;
    const buttons = values.map((val) => {
      let buttonStyle = reqAmount === val ?
        styles.buttonSelect :
        styles.button;

      let buttonTextStyle = reqAmount === val ?
        styles.buttonTextSelect :
        styles.buttonText;

      return (
         <Button style={buttonStyle}
                  key={val}
                  bordered
                  onPress={e => {selectAmount(val)}}>
            <Text style={buttonTextStyle}>{'$' + val}</Text>
          </Button>
      )
    })

    return (
      <View style={styles.buttonPanel}>
        {buttons}
      </View>
    )
  }
}
