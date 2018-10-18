import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {H1, H3, Button, Item, Input, Icon} from 'native-base';
import PayButtons from '../containers/PayButtonsContainer';
import DenomPanel from '../containers/DenomPanelContainer';
import Overlay from './Overlay';
import {SP_ORANGE,
        SOFT_BLUE,
        BUTTON_GREY,
        DEFAULT_TEXT} from '../styles/colors';

const styles = StyleSheet.create({
  buttonDisabled: {},
  buttonEnabled: {
    backgroundColor: SOFT_BLUE
  },
  label: {
    fontSize: 18,
    fontWeight: '400',
    color: DEFAULT_TEXT
  }
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
    let {nextStep} = this.props;
    let nextButtonStyle = nextStep ? {} : styles.buttonDisabled;

    return (
      <Overlay>
        <H1 styles={{fontSize: 21}}>Need Cash</H1>
        <H3 style={styles.label}>How much do you need?</H3>
        <DenomPanel values={denoms} />

        <H3 style={styles.label}>Where do you need the cash?</H3>
        <Item style={{marginBottom: 10}}>
          <Icon name="magnifying-glass" type="Entypo"/>
          <Input placeholder="Current Location" />
        </Item>

        <H3 style={styles.label}>How can you pay the Pony?</H3>
        <Text style={{marginBottom: 7}}>This is to ensure your Pony can accept this payment.</Text>
        <PayButtons />
        <Button block
                style={nextButtonStyle}
                disabled={!nextStep}
                info={nextStep}
                onPress={e => this.props.navigation.navigate('SelfieScreen')}
                >
          <Text style={{color: "#fff", fontSize: 18, fontWeight: '600'}}>Next Step: Take a Selfie</Text>
        </Button>
      </Overlay>
  )}
}
