import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {H1, H3, Button, Item, Input, Icon} from 'native-base';
import PayButtons from '../containers/PayButtonsContainer';
import DenomPanel from '../containers/DenomPanelContainer';
import {SP_ORANGE} from '../styles/colors';

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
  });

const denoms = [
  100,
  200,
  400,
  1000,
]

export default class RequestOverlay extends Component<Props> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.overlay}>
        <H1>Need Cash</H1>
        <H3>How much do you need?</H3>
        <DenomPanel values={denoms} />

        <H3>Where do you need the cash?</H3>
        <Item>
          <Icon name="magnifying-glass" type="Entypo"/>
          <Input placeholder="Set Pickup Location" />
        </Item>

        <H3>How can you pay the Pony?</H3>
        <PayButtons />
        <Text>This is to ensure your Pony can accept this payment.</Text>

        <Button block disabled>
          <Text style={styles.buttonDisabled}>Next Step</Text>
        </Button>
      </View>
  )}
}
