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

  currencySelect() {

  }

  render() {
    let {values} = this.props;
    const buttons = values.map((val) => (
       <Button style={styles.button}
                key={val}
                bordered
                onPress={this.currencySelect}>
          <Text style={styles.buttonText}>{'$' + val}</Text>
        </Button>
    ))

    return (
      <View style={styles.buttonPanel}>
        {buttons}
      </View>
    )
  }
}
