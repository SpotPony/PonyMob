import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {H1, Button} from 'native-base';
import Overlay from './Overlay';
import {SOFT_BLUE, BUTTON_GREY} from '../styles/colors';

export default class ConfirmOverlay extends Component <Props> {
  render() {
    return (
      <Overlay style={{height: 500}}>
        <H1 style={{textAlign: 'center'}}>Confirm Request Details</H1>
        <Text>You Need $$$</Text>
        <Text>You will pay the Pony via Venmo or PayPal</Text>
        <Text>The Pony should meet you at</Text>
        <Text> The location you picked</Text>
        <Text>This Request will be active for 10 min</Text>
        <Button block
          style={{backgroundColor: SOFT_BLUE}}>
          <Text>Search for Ponies</Text>
        </Button>
        <Button block
          style={{backgroundColor: BUTTON_GREY}}>
          <Text>Edit Request</Text>
        </Button>
      </Overlay>
    )
  }
}
