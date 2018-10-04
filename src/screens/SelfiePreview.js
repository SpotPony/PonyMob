import React, {Component} from 'react';
import {View, ImageBackground, Text, StyleSheet} from 'react-native';
import {Button, Icon} from 'native-base';
import {SOFT_BLUE, BUTTON_GREY, WHITE} from '../styles/colors';

const styles = StyleSheet.create({
  imgBg: {
    // position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    // flex: 1,
    // justifyContent: 'space-between',
  },
  actionRow: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
  },
  actionInner: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  acceptBtn: {
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 5,
    backgroundColor: SOFT_BLUE,
  },
  retakeBtn: {
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 5,
    backgroundColor: BUTTON_GREY,
  }
})
export default class SelfiePreview extends Component {
  acceptSelfie(dataUrl) {
    console.log('popping screen');
    this.props.saveSelfie(dataUrl)
    this.props.navigation.popToTop();
  }

  render() {
    let {params} = this.props.navigation.state.params;
    return (
      <ImageBackground style={styles.imgBg}
               source={{uri: `data:image/png;base64,${params.data}`}} >
        <View style={styles.actionRow}>
          <View style={styles.actionInner}>
            <Button style={styles.acceptBtn}
                    onPress={e => this.acceptSelfie(params.uri)}>
              <Icon type="FontAwesome" name="check" />
              <Text style={{color: WHITE}}>Accept</Text>
            </Button>
            <Button style={styles.retakeBtn}
                    onPress={e => this.props.navigation.pop()}>
              <Icon type="FontAwesome" name="camera" />
              <Text style={{color: WHITE}}>Retake</Text>
            </Button>
          </View>
        </View>
      </ImageBackground>
    )
  }
}
