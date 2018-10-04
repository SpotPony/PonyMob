import React, {Component} from "react";
import { RNCamera } from 'react-native-camera';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import {H1} from "native-base";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'rgb(0,0,0)'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    // backgroundColor: '#fff',
    borderColor: "#fff",
    borderWidth: 5,
    borderRadius: 100,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 10,
    width: 80,
    height: 80
  }
});

export default class SelfieScreen extends Component {
  takePicture = async function() {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options)
      this.props.navigation.navigate('SelfiePreview', {
        params: {data: data.base64, uri: data.uri}
      })
      console.log(data.uri);
    }
  };

  render() {
    return (
    <View style={styles.container}>
      <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style = {styles.preview}
          type={RNCamera.Constants.Type.front}
          flashMode={RNCamera.Constants.FlashMode.on}
          permissionDialogTitle={'Permission to use camera'}
          permissionDialogMessage={'We need your permission to use your camera phone'}
          onGoogleVisionBarcodesDetected={({ barcodes }) => {
            console.log(barcodes)
          }}
      >
      <View style={{backgroundColor: "rbga(1,1,1,0)", flex: 0, flexDirection: 'row', justifyContent: 'center',}}>
      <TouchableOpacity
          onPress={this.takePicture.bind(this)}
          style = {styles.capture}
      >
      </TouchableOpacity>
      </View>
      </RNCamera>
    </View>
    );
  }
}
