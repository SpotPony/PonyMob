import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Item, Input, Icon} from 'native-base';

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
  h1: {
    fontSize: 30,
    fontWeight: '800',
    color: '#000',
  },
  normal: {
    fontSize: 20
  },
  buttonPanel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 20,
  },
  button: {
    paddingLeft: 10,
    paddingRight: 10,
    borderColor: 'rgb(253, 155, 50)',
    borderRadius: 10,
  },
  buttonText: {
    color: 'rgb(253, 155, 50)',
    fontWeight: '600',
    fontSize: 20,
  },
  buttonDisabled: {
    color: '#fff',
  },
  });

const denoms = [
  100,
  200,
  400,
  1000,
]

export default class RequestOverlay extends Component<Props> {
  currencySelect(value) {

  }

  buttonPanel() {
    let btnPnl = []
    for (let val in denoms) {
        btnPnl.push(
          (<Button style={styles.button}
                    key={val}
                    bordered
                    onPress={this.currencySelect}>
              <Text style={styles.buttonText}>{'$' + denoms[val]}</Text>
            </Button>)
        );
    }
    return btnPnl;
  }

  render() {
    return (
      <View style={styles.overlay}>
        <Text style={styles.h1}>Need Cash</Text>
        <Text style={styles.normal}>How much do you need?</Text>
          <View style={styles.buttonPanel}>
            {this.buttonPanel()}
          </View>
        <Text style={styles.normal}>Where do you need the cash</Text>
        <Item>
          <Icon name="magnifying-glass" type="Entypo"/>
          <Input placeholder="Set Pickup Location" />
        </Item>
        <Text style={styles.normal}>How can you pay the Pony?</Text>
        <Text>This is to ensure the Pony can accept the payment.</Text>
        <Button block disabled>
          <Text style={styles.buttonDisabled}>Next Step</Text>
        </Button>
      </View>
  )}
}
