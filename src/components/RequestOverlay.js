import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {H1, H3, Button, Item, Input, Icon} from 'native-base';

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
        <H1>Need Cash</H1>
        <H3>How much do you need?</H3>
          <View style={styles.buttonPanel}>
            {this.buttonPanel()}
          </View>
        <H3>Where do you need the cash?</H3>
        <Item>
          <Icon name="magnifying-glass" type="Entypo"/>
          <Input placeholder="Set Pickup Location" />
        </Item>
        <H3>How can you pay the Pony?</H3>
        <Text>This is to ensure your Pony can accept this payment.</Text>
        <Button block disabled>
          <Text style={styles.buttonDisabled}>Next Step</Text>
        </Button>
      </View>
  )}
}
