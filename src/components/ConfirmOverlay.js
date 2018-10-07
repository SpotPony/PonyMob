import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {H1, Button} from 'native-base';
import Overlay from './Overlay';
import EmphasisText from './EmphasisText';
import _ from 'lodash';

import {SOFT_BLUE, BUTTON_GREY, SP_ORANGE} from '../styles/colors';

const styles = StyleSheet.create({
  confirmLine: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 18
  },
  confirmLineBold: {
    marginBottom: 10,
    fontSize: 18,
    fontWeight: 'bold'
  },
  locationLine: {
    marginTop: 10,
    fontSize: 18,
  },
  searchBtn: {
    backgroundColor: SOFT_BLUE,
    marginBottom: 5,
  },
  editBtn: {
    backgroundColor: BUTTON_GREY,
    marginTop: 5,
  },
  btnText: {
    fontSize: 18,
    color: '#fff',
  },
  actionPanel: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    width: '100%',
    flex: 1,
    alignItems: 'center',
  }

});

export default class ConfirmOverlay extends Component <Props> {
  render() {
    let {amount, services, location} = this.props;
    services = services.map((item, i) => {
        if (i === services.length) {
          return (<EmphasisText key={item}> or {item}</EmphasisText>)
        } else {
          return (<EmphasisText key={item}> {item},</EmphasisText>)
        }
    })

    return (
      <Overlay style={{height: 400}}>
        <H1 style={{textAlign: 'center'}}>Confirm Request Details</H1>
        <Text style={styles.confirmLine}>You need
          <EmphasisText> ${amount}.</EmphasisText>
        </Text>
        <Text style={styles.confirmLine}>You will pay the Pony via
          {services}
        </Text>
        <Text style={styles.locationLine}>The Pony should meet you at
        </Text>
        <EmphasisText style={{marginBottom: 10}}>The location you picked</EmphasisText>
        <Text style={styles.confirmLine}>This Request will be active for
          <Text style={styles.confirmLineBold}>
            10 minutes
          </Text>
        </Text>
        <View style={styles.actionPanel}>
          <Button block
            style={styles.searchBtn}>
            <Text style={styles.btnText}>Search for Ponies</Text>
          </Button>
          <Button block
            style={styles.editBtn}>
            <Text style={styles.btnText}>Edit Request</Text>
          </Button>
        </View>
      </Overlay>
    )
  }
}
