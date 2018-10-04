/**
 * Spot Pony: React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation';
import MainRequest from './containers/MainRequestContainer';
import SelfieScreen from "./screens/SelfieScreen";
import SelfiePreview from "./containers/SelfiePreviewContainer";

type Props = {};

const RootStack = createStackNavigator({
  MainRequest: MainRequest,
  SelfieScreen: SelfieScreen,
  SelfiePreview: SelfiePreview,
}, {
  headerMode: 'none'
})

export default class App extends Component<Props> {
  render() {
    return (
      <RootStack />
    )
  }
}
